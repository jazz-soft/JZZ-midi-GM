var JZZ = require('jzz');
require('.')(JZZ);

var i;
var programs = ['piano', 'violin', 'guitar', 'organ'];
var percussion = ['cowbell'];

var chain = JZZ().or('Cannot start MIDI').openMidiOut();

for (i = 0; i < programs.length; i++) {
  chain = chain.program(0, programs[i])
    .and('Playing: ' + JZZ.MIDI.programName(JZZ.MIDI.programValue(programs[i])))
    .noteOn(0, 'C5', 127).wait(400).noteOff(0, 60).wait(100);
}
for (i = 0; i < percussion.length; i++) {
  chain = chain.and('Playing: ' + JZZ.MIDI.percussionName(JZZ.MIDI.noteValue(percussion[i])))
    .noteOn(9, percussion[i], 127).wait(400).noteOff(0, percussion[i]).wait(100);
}
chain.and('Thank you!');