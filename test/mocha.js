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
  it('0 -> Piano', function() {
    assert.equal(JZZ.MIDI.percussionName(0), undefined);
  });
  it('33 -> Metronome Click', function() {
    assert.equal(JZZ.MIDI.percussionName(33), 'Metronome Click');
  });
});

describe('JZZ.MIDI.programValue()', function() {
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
