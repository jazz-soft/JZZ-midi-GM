# JZZ-midi-GM

## General MIDI instrument names: MIDI to string / string to MIDI

## Install

[**npm install jzz-midi-gm**](https://www.npmjs.com/package/jzz-midi-gm)  
or **bower install jzz-midi-gm**  
or **yarn add jzz-midi-gm**  
or get the full development version and minified scripts from [**GitHub**](https://github.com/jazz-soft/JZZ-midi-GM)

## Usage

##### Plain HTML

    <script src="JZZ.js"></script>
    <script src="JZZ.midi.GM.js"></script>
    //...

##### CDN (always the latest version!)

    <script src="https://cdn.jsdelivr.net/npm/jzz"></script>
    <script src="https://cdn.jsdelivr.net/npm/jzz-midi-gm"></script>
    //...

##### CommonJS (Browserify and Node.js command line applications)

    var JZZ = require('jzz');
    require('jzz-midi-gm')(JZZ);
    //...

##### AMD

    require(['JZZ', 'JZZ.midi.GM'], function(JZZ, gm) {
      // ...
    });

## API
### MIDI to string
##### JZZ.MIDI.programName(midi)
Map MIDI program value to General MIDI instrument name.
##### JZZ.MIDI.groupName(midi)
Map MIDI program value to General MIDI group name.
##### JZZ.MIDI.percussionName(midi)
Map MIDI note value to General MIDI percussion name.

    console.log(JZZ.MIDI.programName(60));
    // => 'French Horn'

    console.log(JZZ.MIDI.groupName(60));
    // => 'Brass'

    console.log(JZZ.MIDI.percussionName(60));
    // => 'Hi Bongo'

### string to MIDI
##### JZZ.MIDI.programValue(str)
Map instrument name to MIDI program value.  
If there is no exact match, try the best guess.
##### JZZ.MIDI.noteValue(str)
Map percussion name to MIDI note value.  
If there is no exact match, try the best guess.
##### JZZ.MIDI.guessValue(str)
Map program or percussion name (whatever matches best) to MIDI number.  
If the return value is negative, it's the percussion note value with a minus sign, otherwise, it's the program value.

    console.log(JZZ.MIDI.programName(JZZ.MIDI.programValue('piano')));
    // => 'Acoustic Grand Piano'

    console.log(JZZ.MIDI.percussionName(JZZ.MIDI.noteValue('snare')));
    // => 'Acoustic Snare'

    var n = JZZ.MIDI.guessValue('crash');
    if (n < 0) console.log(JZZ.MIDI.percussionName(-n));
    else console.log(JZZ.MIDI.programName(n));
    // => 'Crash Cymbal 1'

### JZZ helpers
##### note(...) / noteOn(...) / noteOff(...) / aftertouch(...) / program(...)
In addition, when the module is loaded, JZZ helper functions start to understand instrument names where appropriate.

    JZZ().openMidiOut()
      .ch(0).program('accordion').noteOn('C#6', 100)
      .ch(9).noteOn('cowbell', 127);

## More information

Please visit [**https://jazz-soft.net**](https://jazz-soft.net) for more information.  
Your questions and comments are welcome [**here**](https://jazz-soft.org).
