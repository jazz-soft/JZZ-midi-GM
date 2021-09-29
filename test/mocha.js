var assert = require('assert');
var JZZ = require('jzz');
require('..')(JZZ);

describe('JZZ.MIDI.programName()', function() {
  it('0 -> Acoustic Grand Piano', function() {
    assert.equal(JZZ.MIDI.programName(0), 'Acoustic Grand Piano');
  });
  it('20 -> Reed Organ', function() {
    assert.equal(JZZ.MIDI.programName(20), 'Reed Organ');
  });
  it('200 -> undefined', function() {
    assert.equal(JZZ.MIDI.programName(200), undefined);
  });
  it('123 -> Bird Tweet', function() {
    assert.equal(JZZ.MIDI.programName(123), 'Bird Tweet');
  });
  it('123 0 0 -> Bird', function() {
    assert.equal(JZZ.MIDI.programName(123, 0, 0), 'Bird');
  });
  it('123 121 1 -> Dog (GM2)', function() {
    assert.equal(JZZ.MIDI.programName(123, 121, 1), 'Dog');
  });
  it('123 1 0 -> Dog (GS)', function() {
    assert.equal(JZZ.MIDI.programName(123, 1, 0), 'Dog');
  });
  it('48 64 0 -> Dog (XG)', function() {
    assert.equal(JZZ.MIDI.programName(48, 64, 0), 'Dog');
  });
  it('123 121 64 -> Bird Tweet *', function() {
    assert.equal(JZZ.MIDI.programName(123, 121, 64), 'Bird Tweet *');
  });
  it('123 64 0 -> Bird Tweet *', function() {
    assert.equal(JZZ.MIDI.programName(123, 64, 0), 'Bird Tweet *');
  });
  it('123 1 1 -> Bird Tweet *', function() {
    assert.equal(JZZ.MIDI.programName(123, 1, 1), 'Bird Tweet *');
  });
  it('0 120 0 -> Standard Drum Kit', function() {
    assert.equal(JZZ.MIDI.programName(0, 120, 0), 'Standard Drum Kit');
  });
  it('0 120 1 -> Drum Kit *', function() {
    assert.equal(JZZ.MIDI.programName(0, 120, 1), 'Drum Kit *');
  });
  it('0 127 0 -> Standard Drum Kit', function() {
    assert.equal(JZZ.MIDI.programName(0, 127, 0), 'Standard Drum Kit');
  });
  it('0 127 1 -> Drum Kit *', function() {
    assert.equal(JZZ.MIDI.programName(0, 127, 1), 'Drum Kit *');
  });
  it('34 126 0 -> Standard Drum Kit', function() {
    assert.equal(JZZ.MIDI.programName(34, 126, 0), 'China SFX Kit');
  });
  it('34 126 1 -> Drum Kit *', function() {
    assert.equal(JZZ.MIDI.programName(34, 126, 1), 'SFX Kit *');
  });
  it('24 0 96 -> Ukulele', function() {
    assert.equal(JZZ.MIDI.programName(24, 0, 96), 'Ukulele');
  });
  it('24 0 97 -> Acoustic Guitar (nylon) *', function() {
    assert.equal(JZZ.MIDI.programName(24, 0, 97), 'Acoustic Guitar (nylon) *');
  });
});

describe('JZZ.MIDI.groupName()', function() {
  it('0 -> Piano', function() {
    assert.equal(JZZ.MIDI.groupName(0), 'Piano');
  });
  it('20 -> Organ', function() {
    assert.equal(JZZ.MIDI.groupName(20), 'Organ');
  });
  it('-1 -> undefined', function() {
    assert.equal(JZZ.MIDI.groupName(200), undefined);
  });
});

describe('JZZ.MIDI.percussionName()', function() {
  it('0 -> undefined', function() {
    assert.equal(JZZ.MIDI.percussionName(0), undefined);
  });
  it('33 -> Metronome Click', function() {
    assert.equal(JZZ.MIDI.percussionName(33), 'Metronome Click');
  });
});

describe('JZZ.MIDI.programValue()', function() {
  it('1 -> 1', function() {
    assert.equal(JZZ.MIDI.programValue(1), 1);
  });
  it('Hammond -> Percussive Organ', function() {
    assert.equal(JZZ.MIDI.programName(JZZ.MIDI.programValue('Hammond')), 'Percussive Organ');
  });
  it('bass -> Acoustic Bass', function() {
    assert.equal(JZZ.MIDI.programName(JZZ.MIDI.programValue('bass')), 'Acoustic Bass');
  });
});

describe('JZZ.MIDI.noteValue()', function() {
  it('bongA -> Hi Bongo', function() {
    assert.equal(JZZ.MIDI.percussionName(JZZ.MIDI.noteValue('bongA')), 'Hi Bongo');
  });
  it('snare -> Acoustic Snare', function() {
    assert.equal(JZZ.MIDI.percussionName(JZZ.MIDI.noteValue('snare')), 'Acoustic Snare');
  });
});

describe('JZZ.MIDI.guessValue()', function() {
  it('Hapsicord -> Harpsichord', function() {
    assert.equal(JZZ.MIDI.programName(JZZ.MIDI.guessValue('Hapsicord')), 'Harpsichord');
  });
  it('bongA -> Hi Bongo', function() {
    assert.equal(JZZ.MIDI.percussionName(-JZZ.MIDI.guessValue('bongA')), 'Hi Bongo');
  });
});

describe('JZZ.MIDI.GM', function() {
  it('allGM2()', function() {
    assert.equal(JZZ.MIDI.GM.allGM2().length, 265);
  });
  it('allGS()', function() {
    assert.equal(JZZ.MIDI.GM.allGS().length, 1261);
  });
  it('allXG()', function() {
    assert.equal(JZZ.MIDI.GM.allXG().length, 1138);
  });
});
