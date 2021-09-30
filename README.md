# JZZ-midi-GM

### General MIDI / GM2 / GS / XG instrument names: MIDI to string / string to MIDI

[![npm](https://img.shields.io/npm/v/jzz-midi-gm.svg)](https://www.npmjs.com/package/jzz-midi-gm)
[![npm](https://img.shields.io/npm/dt/jzz-midi-gm.svg)](https://www.npmjs.com/package/jzz-midi-gm)
[![build](https://github.com/jazz-soft/JZZ-midi-GM/actions/workflows/build.yml/badge.svg)](https://github.com/jazz-soft/JZZ-midi-GM/actions)
[![Coverage Status](https://coveralls.io/repos/github/jazz-soft/JZZ-midi-GM/badge.svg?branch=master)](https://coveralls.io/github/jazz-soft/JZZ-midi-GM?branch=master)

## Install

`npm install jzz-midi-gm`  
or `bower install jzz-midi-gm`  
or `yarn add jzz-midi-gm`  
or get the full development version and minified scripts from [**GitHub**](https://github.com/jazz-soft/JZZ-midi-GM)

## Usage

##### Plain HTML

```html
<script src="JZZ.js"></script>
<script src="JZZ.midi.GM.js"></script>
//...
```

##### CDN (jsdelivr)

```html
<script src="https://cdn.jsdelivr.net/npm/jzz"></script>
<script src="https://cdn.jsdelivr.net/npm/jzz-midi-gm"></script>
//...
```

##### CDN (unpkg)

```html
<script src="https://unpkg.com/jzz"></script>
<script src="https://unpkg.com/jzz-midi-gm"></script>
//...
```

##### CommonJS (Browserify and Node.js command line applications)

```js
var JZZ = require('jzz');
require('jzz-midi-gm')(JZZ);
//...
```

##### AMD

```js
require(['JZZ', 'JZZ.midi.GM'], function(JZZ, gm) {
  // ...
});
```

## API
### MIDI to string
`JZZ.MIDI.programName(midi)` -  
map MIDI program value to a General MIDI instrument name.

`JZZ.MIDI.programName(midi, msb, lsb)` -  
map MIDI program value and bank msb/lsb to a GM2/GS/XG instrument name.

`JZZ.MIDI.groupName(midi)` -  
map MIDI program value to a General MIDI group name.

`JZZ.MIDI.percussionName(midi)` -  
map MIDI note value to General a MIDI percussion name.

```js
console.log(JZZ.MIDI.programName(60));
// => 'French Horn'

console.log(JZZ.MIDI.programName(24, 0, 1));
// => 'Ukulele' (GM2)

console.log(JZZ.MIDI.groupName(60));
// => 'Brass'

console.log(JZZ.MIDI.percussionName(60));
// => 'Hi Bongo'
```

### string to MIDI
`JZZ.MIDI.programValue(str)` -  
map instrument name to a MIDI program (GM only);
if there is no exact match, try the best guess.

`JZZ.MIDI.noteValue(str)` -  
map percussion name to a MIDI note number;
if there is no exact match, try the best guess.

`JZZ.MIDI.guessValue(str)` -  
map program or percussion name (whatever matches best) to a MIDI value;
if the return value is negative, it's the percussion note value with a minus sign, otherwise, it's the program value.

```js
console.log(JZZ.MIDI.programName(JZZ.MIDI.programValue('piano')));
// => 'Acoustic Grand Piano'

console.log(JZZ.MIDI.percussionName(JZZ.MIDI.noteValue('snare')));
// => 'Acoustic Snare'

var n = JZZ.MIDI.guessValue('crash');
if (n < 0) console.log(JZZ.MIDI.percussionName(-n));
else console.log(JZZ.MIDI.programName(n));
// => 'Crash Cymbal 1'
```

### list all instruments
`allGM2() / allGS() / allXG()` -  
return a complete list of GM2/GS/XG programs as an array of of triplets `[program-number, bank-msb, bank-lsb]`.

### JZZ helpers
`note(...) / noteOn(...) / noteOff(...) / aftertouch(...) / program(...)` -  
when the module is loaded, JZZ helper functions will understand the instrument names where appropriate.

```js
JZZ().openMidiOut()
  .ch(0).program('accordion').noteOn('C#6', 100)
  .ch(9).noteOn('cowbell', 127);
```

## More information

Please visit [**https://jazz-soft.net**](https://jazz-soft.net) for more information.  
