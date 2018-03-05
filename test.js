var JZZ = require('jzz');
require('.')(JZZ);

var i, s;
var programs = ['piano', 'violin', 'guitar', 'organ'];
var percussion = ['cowbell', 'snare'];

var chain = JZZ().or('Cannot start MIDI').openMidiOut();

process.on('SIGINT', function() {
  console.log('Thank you! Hope you have enjoyed!');
  process.exit();
});

for (i = 0; i < programs.length; i++) {
  s = programs[i];
  chain = chain.program(0, s)
    .and(s + ' => ' + JZZ.MIDI.programName(JZZ.MIDI.programValue(s)))
    .noteOn(0, 'C5', 127).wait(400).noteOff(0, 60).wait(100);
}
for (i = 0; i < percussion.length; i++) {
  s = percussion[i];
  chain = chain.and(s + ' => ' + JZZ.MIDI.percussionName(JZZ.MIDI.noteValue(s)))
    .noteOn(9, s, 127).wait(400).noteOff(0, s).wait(100);
}
chain.and(function() {
  console.log('Enter an instrument name or press ^C to exit:');
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function(s) {
    s = s.trim();
    var n = JZZ.MIDI.guessValue(s);
    if (n < 0) {
      console.log(s + ' => ' + JZZ.MIDI.percussionName(-n));
      chain = chain.noteOn(9, s, 127).wait(400).noteOff(0, s).wait(100);
    }
    else {
      console.log(s + ' => ' + JZZ.MIDI.programName(n));
      chain = chain.program(0, s).noteOn(0, 'C5', 127).wait(400).noteOff(0, 60).wait(100);
    }
  });
});