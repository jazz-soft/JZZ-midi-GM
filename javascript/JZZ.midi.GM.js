(function(global, factory) {
  /* istanbul ignore next */
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory;
  }
  else if (typeof define === 'function' && define.amd) {
    define('JZZ.midi.GM', ['JZZ'], factory);
  }
  else {
    factory(JZZ);
  }
})(this, function(JZZ) {

var i;

var _group = ['Piano', 'Chromatic Percussion', 'Organ', 'Guitar', 'Bass', 'Strings', 'Ensemble', 'Brass', 'Reed', 'Pipe', 'Synth Lead', 'Synth Pad', 'Synth Effects', 'Ethnic', 'Percussive', 'Sound Effects'];

var _instr = [
'Acoustic Grand Piano', 'Bright Acoustic Piano', 'Electric Grand Piano', 'Honky-tonk Piano', 'Electric Piano 1', 'Electric Piano 2', 'Harpsichord', 'Clavinet', 
'Celesta', 'Glockenspiel', 'Music Box', 'Vibraphone', 'Marimba', 'Xylophone', 'Tubular Bells', 'Dulcimer', 
'Drawbar Organ', 'Percussive Organ', 'Rock Organ', 'Church Organ', 'Reed Organ', 'Accordion', 'Harmonica', 'Tango Accordion', 
'Acoustic Guitar (nylon)', 'Acoustic Guitar (steel)', 'Electric Guitar (jazz)', 'Electric Guitar (clean)', 'Electric Guitar (muted)', 'Overdriven Guitar', 'Distortion Guitar', 'Guitar Harmonics', 
'Acoustic Bass', 'Electric Bass (finger)', 'Electric Bass (pick)', 'Fretless Bass', 'Slap Bass 1', 'Slap Bass 2', 'Synth Bass 1', 'Synth Bass 2', 
'Violin', 'Viola', 'Cello', 'Contrabass', 'Tremolo Strings', 'Pizzicato Strings', 'Orchestral Harp', 'Timpani', 
'String Ensemble 1', 'String Ensemble 2', 'Synth Strings 1', 'Synth Strings 2', 'Choir Aahs', 'Voice Oohs', 'Synth Choir', 'Orchestra Hit', 
'Trumpet', 'Trombone', 'Tuba', 'Muted Trumpet', 'French Horn', 'Brass Section', 'Synth Brass 1', 'Synth Brass 2', 
'Soprano Sax', 'Alto Sax', 'Tenor Sax', 'Baritone Sax', 'Oboe', 'English Horn', 'Bassoon', 'Clarinet', 
'Piccolo', 'Flute', 'Recorder', 'Pan Flute', 'Blown Bottle', 'Shakuhachi', 'Whistle', 'Ocarina', 
'Lead 1 (square)', 'Lead 2 (sawtooth)', 'Lead 3 (calliope)', 'Lead 4 (chiff)', 'Lead 5 (charang)', 'Lead 6 (voice)', 'Lead 7 (fifths)', 'Lead 8 (bass + lead)', 
'Pad 1 (new age)', 'Pad 2 (warm)', 'Pad 3 (polysynth)', 'Pad 4 (choir)', 'Pad 5 (bowed)', 'Pad 6 (metallic)', 'Pad 7 (halo)', 'Pad 8 (sweep)', 
'FX 1 (rain)', 'FX 2 (soundtrack)', 'FX 3 (crystal)', 'FX 4 (atmosphere)', 'FX 5 (brightness)', 'FX 6 (goblins)', 'FX 7 (echoes)', 'FX 8 (sci-fi)', 
'Sitar', 'Banjo', 'Shamisen', 'Koto', 'Kalimba', 'Bagpipe', 'Fiddle', 'Shanai', 
'Tinkle Bell', 'Agogo', 'Steel Drums', 'Woodblock', 'Taiko Drum', 'Melodic Tom', 'Synth Drum', 'Reverse Cymbal', 
'Guitar Fret Noise', 'Breath Noise', 'Seashore', 'Bird Tweet', 'Telephone Ring', 'Helicopter', 'Applause', 'Gunshot'
];

var _perc = [
'High-Q', 'Slap', 'Scratch Push', 'Scratch Pull', 'Sticks', 'Square Click', 'Metronome Click', 'Metronome Bell', 
'Acoustic Bass Drum', 'Bass Drum 1', 'Side Stick', 'Acoustic Snare', 'Hand Clap', 'Electric Snare', 'Low Floor Tom', 'Closed Hi Hat', 
'High Floor Tom', 'Pedal Hi-Hat', 'Low Tom', 'Open Hi-Hat', 'Low-Mid Tom', 'Hi-Mid Tom', 'Crash Cymbal 1', 'High Tom', 
'Ride Cymbal 1', 'Chinese Cymbal', 'Ride Bell', 'Tambourine', 'Splash Cymbal', 'Cowbell', 'Crash Cymbal 2', 'Vibraslap', 
'Ride Cymbal 2', 'Hi Bongo', 'Low Bongo', 'Mute Hi Conga', 'Open Hi Conga', 'Low Conga', 'High Timbale', 'Low Timbale', 
'High Agogo', 'Low Agogo', 'Cabasa', 'Maracas', 'Short Whistle', 'Long Whistle', 'Short Guiro', 'Long Guiro', 
'Claves', 'Hi Wood Block', 'Low Wood Block', 'Mute Cuica', 'Open Cuica', 'Mute Triangle', 'Open Triangle', 'Shaker', 
'Jingle Bell', 'Bell Tree', 'Castanets', 'Mute Surdo', 'Open Surdo'
];

var _more = {
'Hammond': 17, 'Keyboard': 18, 'Uke': 24, 'Ukulele': 24, 'Fuzz': 30, 'Sax': 66, 'Saxophone': 66,
'Soprano Saxophone': 64, 'Alto Saxophone': 65, 'Tenor Saxophone': 66, 'Baritone Saxophone': 67
};

//#begin
var _gs = [
{0:"Piano 1",1:"Upright Piano",2:"Mild Piano",8:"Upright Piano Wide",9:"Mild Piano Wide",16:"European Pianoforte",24:"Piano + Strings",25:"Piano + Strings 2",26:"Piano + Choir 1",27:"Piano + Choir 2"},
{0:"Piano 2",1:"Pop Piano",2:"Rock Piano",8:"Pop Piano Wide",9:"Rock Piano Wide",16:"Dance Piano"},
{0:"Piano 3",1:"Electric Grand Piano + Rhodes 1",2:"Electric Grand Piano + Rhodes 2",8:"Piano 3 Wide"},
{0:"Honky-tonk",8:"Honky-tonk 2"},
{0:"Electric Piano 1",8:"Synth Soft Electric Piano",9:"Chorus Electric Piano",10:"Silent Rhodes",16:"FM + SA Electric Piano",17:"Distortion Electric Piano",24:"Wurly",25:"Hard Rhodes",26:"Mellow Rhodes"},
{0:"Electric Piano 2",1:"Electric Piano 3",8:"Detuned Electric Piano 2",9:"Detuned Electric Piano 3",10:"Electric Piano Legend",16:"Synth FM Electric Piano",24:"Hard FM Electric Piano",32:"Electric Piano Phase"},
{0:"Harpsichord",1:"Harpsichord 2",2:"Harpsichord 3",8:"Coupled Harpsichord",16:"Harpsichord Wide",24:"Harpsichord o",32:"Synth Harpsichord"},
{0:"Clavinet",1:"Clavinet 2",2:"Attack Clavinet 1",3:"Attack Clavinet 2",8:"Comp Clavinet",16:"Resonant Clavinet",17:"Phase Clavinet",24:"Clavinet o",32:"Analog Clavinet",33:"JP8 Clavinet 1",35:"JP8 Clavinet 2",36:"Synth Ring Clavinet",37:"Synth Distortion Clavinet",38:"JP8000 Clavinet",39:"Pulse Clavinet"},
{0:"Celesta",1:"Pop Celesta"},
{0:"Glockenspiel"},
{0:"Music Box",1:"Music Box 2",8:"Synth Music Box"},
{0:"Vibraphone",1:"Pop Vibraphone",8:"Vibraphone Wide",9:"Vibraphones"},
{0:"Marimba",8:"Marimba Wide",16:"Barafon",17:"Barafon 2",24:"Log drum"},
{0:"Xylophone",8:"Xylophone Wide"},
{0:"Tubular Bells",8:"Church Bell",9:"Carillon",10:"Church Bell 2",16:"Tubular Bell Wide"},
{0:"Santur",1:"Santur 2",2:"Santur 3",8:"Cimbalom",16:"Zither 1",17:"Zither 2",24:"Dulcimer"},
{0:"Organ 1",1:"Organ 101",2:"Full Organ 1",3:"Full Organ 2",4:"Full Organ 3",5:"Full Organ 4",6:"Full Organ 5",7:"Full Organ 6",8:"Tremolo Organ",9:"Organ o",10:"Full Organ 7",11:"Full Organ 8",12:"Full Organ 9",16:"60's Organ 1",17:"60's Organ 2",18:"60's Organ 3",19:"Farf Organ",24:"Cheese Organ",25:"D-50 Organ",26:"JUNO Organ",27:"Hybrid Organ",28:"VS Organ",29:"Digital Church Organ",30:"JX-8P Organ",31:"FM Organ",32:"70's Electric Organ",33:"Even Bar",40:"Organ Bass",48:"5th Organ"},
{0:"Organ 2",1:"Jazz Organ",2:"Electric Organ 16+2",3:"Jazz Organ 2",4:"Jazz Organ 3",5:"Jazz Organ 4",6:"Jazz Organ 5",7:"Jazz Organ 6",8:"Chorus Organ 2",9:"Octave Organ",32:"Percussive Organ",33:"Percussive Organ 2",34:"Percussive Organ 3",35:"Percussive Organ 4"},
{0:"Organ 3",8:"Rotary Organ 1",16:"Rotary Organ S",17:"Rock Organ 1",18:"Rock Organ 2",24:"Rotary Organ F"},
{0:"Church Organ 1",8:"Church Organ 2",16:"Church Organ 3",24:"Organ Flute",32:"Tremolo Flute",33:"Theater Organ"},
{0:"Reed Organ",8:"Wind Organ",16:"Puff Organ"},
{0:"Accordion French",8:"Accordion Italian",9:"Distortion Accordion",16:"Chorus Accordion",24:"Hard Accordion",25:"Soft Accordion"},
{0:"Harmonica",1:"Harmonica 2",8:"B. Harp Basic",9:"B. Harp Suppl"},
{0:"Bandoneon",8:"Bandoneon 2",16:"Bandoneon 3"},
{0:"Nylon String Guitar",8:"Ukulele",16:"Nylon String Guitar o",24:"Velo Harmonics",32:"Nylon String Guitar 2",40:"Lequint Guitar"},
{0:"Steel String Guitar",8:"12-String Guitar",9:"Nylon + Steel String Guitar",10:"Attack Steel String Guitar",16:"Mandolin",17:"Mandolin 2",18:"Mandolin Tremolo",32:"Steel String Guitar 2",33:"Steel String Guitar with Body Sound"},
{0:"Jazz Guitar",1:"Mellow Guitar",8:"Pedal Steel Guitar"},
{0:"Clean Guitar",1:"Clean Half",2:"Open Hard 1",3:"Open Hard 2",4:"JC Clean Guitar",5:"Attack Clean Guitar",8:"Chorus Guitar",9:"JC Chorus Guitar",16:"TC Front Pick",17:"TC Rear Pick",18:"TC Clean ff",19:"TC Clean 2:",20:"LP Rear Pick",21:"LP Rear 2",22:"LP Rear Atack",23:"Mid Tone Guitar",24:"Chung Ruan",25:"Chung Ruan 2"},
{0:"Muted Guitar",1:"Muted Distortion Guitar",2:"TC Muted Guitar",8:"Funk Pop Guitar",16:"Funk Guitar 2",24:"Jazz Man"},
{0:"Overdrive Guitar",1:"Overdrive Guitar 2",2:"Overdrive Guitar 3",3:"More Drive",4:"Guitar Pinch",5:"Attack Drive",8:"LP Overdrive Guitar",9:"LP Overdrive Guitar:",10:"LP Half Drive",11:"LP Half Drive 2",12:"LP Chorus"},
{0:"Distortion Guitar",1:"Distortion Guitar 2:",2:"Dazed Guitar",3:"Distortion Guitar:",4:"Distortion Fast:",5:"Attack Dist",8:"Feedback Guitar",9:"Feedback Guitar 2",16:"Power Guitar",17:"Power Guitar 2",18:"5th Distortion",24:"Rock Rhythm Guitar",25:"Rock Rhythm Guitar 2",26:"Distortion Rhythm Guitar"},
{0:"Guitar Harmonics",8:"Guitar Feedback",9:"Guitar Feedback 2",16:"Acoustic Guitar Harmonics",24:"Electric Bass Harmonics"},
{0:"Acoustic Bass",1:"Rockabilly Bass",8:"Wild Acoustic Bass",9:"Attack Acoustic Bass",16:"Bass + OHH"},
{0:"Fingered Bass",1:"Fingered Bass 2",2:"Jazz Bass",3:"Jazz Bass 2",4:"Rock Bass",5:"Heart Bass",6:"Attack Finger",7:"Finger Slap",8:"Chorus Jazz Bass",16:"Fingered Bass/Harmonics"},
{0:"Picked Bass",1:"Picked Bass 2",2:"Picked Bass 3",3:"Picked Bass 4",4:"Double Pick",8:"Muted Pick Bass",16:"Picked Bass/Harmonics"},
{0:"Fretless Bass",1:"Fretless Bass 2",2:"Fretless Bass 3",3:"Fretless Bass 4",4:"Synth Fretless Bass",5:"Mr.Smooth",8:"Wood+Fretless Bass"},
{0:"Slap Bass 1",1:"Slap Pop",8:"Resonant Slap Bass",9:"Unison Slap"},
{0:"Slap Bass 2",1:"Slap Bass 3",8:"FM Slap Bass"},
{0:"Synth Bass 1",1:"Synth Bass 101",2:"CS Bass",3:"JP-4 Bass",4:"JP-8 Bass",5:"P5 Bass",6:"JPMG Bass",8:"Acid Bass",9:"TB303 Bass",10:"Tekno Bass",11:"TB303 Bass 2",12:"Kicked TB303",13:"TB303 Saw Bass",14:"Rubber303 Bass",15:"Resonant 303 Bass",16:"Resonant SH Bass",17:"TB303 Square Bass",18:"TB303 Distortion Bass",19:"Clavi Bass",20:"Hammer",21:"Jungle Bass",22:"Square Bass",23:"Square Bass 2",24:"Arpeggio Bass",32:"Hit & Saw Bass",33:"Ring Bass",34:"Attack Sine Bass",35:"OB sine Bass",36:"Auxiliary Bass",40:"303 Square Distortion Bass",41:"303 Square Distortion Bass 2",42:"303 Square Distortion Bass 3",43:"303 Square Rev",44:"TeeBee"},
{0:"Synth Bass 2",1:"Synth Bass 201",2:"Modular Bass",3:"Seq Bass",4:"MG Bass",5:"Mg Octave Bass 1",6:"MG Octave Bass 2",7:"MG Blip Bass:",8:"Beef FM Bass",9:"Delay Bass",10:"X Wire Bass",11:"WireStr Bass",12:"Blip Bass:",13:"Rubber Bass 1",14:"Synth Bell Bass",15:"Odd Bass",16:"Rubber Bass 2",17:"SH101 Bass 1",18:"SH101 Bass 2",19:"Smooth Bass",20:"SH101 Bass 3",21:"Spike Bass",22:"House Bass:",23:"KG Bass",24:"Sync Bass",25:"MG 5th Bass",26:"RND Bass",27:"Wow MG Bass",28:"Bubble Bass",29:"Attack Pulse",30:"Sync Bass 2",31:"Pulse Mix Bass",32:"MG Distortion Bass",33:"Seq Bass 2",34:"3rd Bass",35:"MG Octave Bass",36:"Slow Env Bass",37:"Mild Bass",38:"Distortion Env Bass",39:"MG Light Bass",40:"Distortion Synth Bass",41:"Rise Bass",42:"Cyber Bass"},
{0:"Violin:",1:"Violin Attack:",8:"Slow Violin"},
{0:"Viola:",1:"Viola Attack:"},
{0:"Cello:",1:"Cello Attack:"},
{0:"Contrabass"},
{0:"Tremolo Strings",2:"Tremolo Strings Synth",8:"Slow Tremolo Strings",9:"Suspense Strings",10:"Suspense Strings 2"},
{0:"Pizzicato Strings",1:"Vcs & Contrabass Pizzicato Strings",2:"Chamber Pizzicato Strings",3:"Synth Pizzicato Strings",8:"Solo Pizzicato",16:"Solo Spiccato",17:"Strings Spiccato"},
{0:"Harp",1:"Harp + Strings",2:"Harp Synth",8:"Uilleann Harp",16:"Synth Harp",24:"Yang Qin",25:"Yang Qin 2",26:"Synth Yang Qin"},
{0:"Timpani"},
{0:"Strings",1:"Bright Strings:",2:"Chamber Strings",3:"Cello section",4:"Bright Strings 2",5:"Bright Strings 3",6:"Quad Strings",7:"Mild Strings",8:"Orchestra",9:"Orchestra 2",10:"Tremolo Orchestra",11:"Choir Strings",12:"Strings + Horn",13:"Strings  +Flute",14:"Choir Strings 2",15:"Choir Strings 3",16:"Synth Strings",17:"Synth Strings 2",18:"Synth Strings 3",19:"Orchestra 3",20:"Orchestra 4",24:"Velo Strings",32:"Octave Strings 1",33:"Octave Strings 2",34:"Contrabass Section",40:"60s Strings"},
{0:"Slow Strings",1:"Slow Strings 2",2:"Slow Strings 3",8:"Legato Strings",9:"Warm Strings",10:"Synth Slow Strings",11:"Synth Slow Strings 2",12:"Synth Strings + Choir",13:"Synth Strings + Choir 2"},
{0:"Synth Strings 1",1:"OB Strings",2:"Stack Strings",3:"JP Strings",4:"Chorus Strings",8:"Synth Strings 3",9:"Synth Strings 4",10:"Synth Strings 6",11:"Synth Strings 7",12:"LoFi Strings",16:"High Strings",17:"Hybrid Strings",24:"Tron Strings",25:"Noiz Strings"},
{0:"Synth Strings 2",1:"Synth Strings 5",2:"JUNO Strings",3:"Filtered Orch",4:"JP Saw Strings",5:"Hybrid Strings 2",6:"Distortion Strings",7:"JUNO Full Strings",8:"Air Strings",9:"Attack Synth Strings",10:"Straight Strings"},
{0:"Choir Aahs",8:"Synth Choir Aahs",9:"Melted Choir",10:"Church Choir",11:"Boys Choir 1",12:"Boys Choir 2",13:"Synth Boys Choir",14:"Rich Choir",16:"Choir Hahs",24:"Chorus Lahs",32:"Chorus Aahs 2",33:"Male Aah + Strings"},
{0:"Voice Oohs",1:"Chorus Oohs",2:"Voice Oohs 2",3:"Chorus Oohs 2",4:"Oohs Code Maj7",5:"Oohs Code Sus4",6:"Jazz Scat",8:"Voice Dahs",9:"Jazz Voice Dat",10:"Jazz Voice Bap",11:"Jazz Voice Dow",12:"Jazz Voice Thum",16:"Voice Lah Female",17:"Chorus Lah Female",18:"Voice Luh Female",19:"Chorus Luh Female",20:"Voice Lan Female",21:"Chorus Lan Female",22:"Voice Aah Female",23:"Voice Uuh Female",24:"Female Lah & Lan",32:"Voice Wah Male",33:"Chorus Wah Male",34:"Voice Woh Male",35:"Chorus Woh Male",36:"Voice Aah Male",37:"Voice Ooh Male",40:"Humming"},
{0:"Synth Vox",1:"Synth Vox 2",2:"Synth Vox 3",8:"Synth Voice",9:"Silent Night",10:"Synth Voice 2",16:"VP330 Choir",17:"Vinyl Choir",18:"JX8P Vox",19:"Analog Voice"},
{0:"Orchestra Hit",1:"Bass Hit",2:"6th Hit",3:"Euro Hit",8:"Impact Hit",9:"Philly Hit",10:"Double Hit",11:"Percussion Hit",12:"Shock Wave",13:"Bounce Hit",14:"Drill Hit",15:"Thrill Hit",16:"Lo Fi Rave",17:"Techno Hit",18:"Distortion Hit",19:"Bam Hit",20:"Bit Hit",21:"Bim Hit",22:"Technorg Hit",23:"Rave Hit",24:"Strings Hit",25:"Stack Hit",26:"Industry Hit",27:"Clap Hit"},
{0:"Trumpet",1:"Trumpet 2",2:"Trumpet:",3:"Dark Trumpet",4:"Trumpet & Noise",8:"Flugel Horn",16:"4th Trumpets",24:"Bright Trumpet",25:"Warm Trumpet",26:"Warm Trumpet 2",27:"Twin Trumpet",32:"Synth Trumpet"},
{0:"Trombone",1:"Trombone 2",2:"Twin Trombones",3:"Trombones & Tuba",4:"Bright Trombone",8:"Bass Trombone",16:"Euphonium"},
{0:"Tuba",1:"Tuba 2",8:"Tuba + Horn"},
{0:"Muted Trumpet",1:"Cup Muted Trumpet",2:"Muted Trumpet 2",3:"Muted Trumpet 3",8:"Muted Horns"},
{0:"French Horns",1:"French Horn 2",2:"Horn + Orchestra",3:"Wide French Horns",8:"French Horn Slow:",9:"Dual Horns",16:"Synth Horn",24:"French Horn Rip"},
{0:"Brass 1",1:"Brass ff",2:"Bones Section",3:"Synth Brass ff",4:"Quad Brass1",5:"Quad Brass2",8:"Brass 2",9:"Brass 3",10:"Brass sfz",12:"Brass sfz 2",14:"Fat Pop Brass",16:"Brass Fall",17:"Trumpet Fall",24:"Octave Brass",25:"Brass + Reed",26:"Fat + Reed",32:"Orch Brass",33:"Orch Brass 2",35:"Synth  Fat Pop Brass",36:"Synth  Orch Brass",37:"Synth  Orch Brass 2",38:"Synth  Orch Brass 3"},
{0:"Synth Brass1",1:"JUNO Brass",2:"Stack Brass",3:"SH-5 Brass",4:"MKS Brass",5:"Jump Brass",8:"Pro Brass",9:"P5 Brass",10:"Orch Synth Brass",16:"Octave Synth Brass",17:"Hybrid Brass",18:"Octave Synth Brass 2",19:"BPF Brass"},
{0:"Synth Brass 2",1:"Soft Brass",2:"Warm Brass",3:"Synth Brass 3",4:"Sync Brass",5:"Fat Synth Brass",6:"Deep Synth Brass",8:"Synth Brass sfz",9:"OB Brass",10:"Resonant Brass",11:"Distortion Square Brass",12:"JP8000 Saw Brass",16:"Velo Brass 1",17:"Transbrass"},
{0:"Soprano Sax",8:"Soprano Exp."},
{0:"Alto Sax",8:"Alto Sax Exp.",9:"Grow Sax",16:"Alto Sax + Trumpet",17:"Sax Section"},
{0:"Tenor Sax",1:"Tenor Sax:",8:"Breathy Tenor Sax:",9:"Synth  Tenor Sax"},
{0:"Baritone Sax",1:"Baritone Sax:",8:"Baritone & Tenor Sax"},
{0:"Oboe",8:"Oboe Exp.",16:"Multi Reed"},
{0:"English Horn"},
{0:"Bassoon"},
{0:"Clarinet",8:"Bs Clarinet",16:"Multi Wind",17:"Quad Wind"},
{0:"Piccolo",1:"Piccolo:",8:"Nay",9:"Nay Tremolo",16:"Di"},
{0:"Flute",1:"Flute 2:",2:"Flute Exp.",3:"Flute Travelso",8:"Flute + Violin",9:"Pipe & Reed",16:"Tron Flute",17:"Indian Flute"},
{0:"Recorder"},
{0:"Pan Flute",8:"Kawala",16:"Zampona",17:"Zampona Attack",24:"Tin Whistle",25:"Tin Whtstle Nm",26:"Tin Whtstle Or"},
{0:"Bottle Blow"},
{0:"Shakuhachi",1:"Shakuhachi:"},
{0:"Whistle",1:"Whistle 2"},
{0:"Ocarina"},
{0:"Square Wave",1:"MG Square",2:"Hollow Mini",3:"Mellow FM",4:"CC Solo",5:"Shmoog",6:"LM Square",7:"JP8000 TWM",8:"2600 Sine",9:"Sine Lead",10:"KG Lead",11:"Twin Sine",16:"P5 Square",17:"OB Square",18:"JP-8 Square",19:"Distortion Square",20:"303 Square Distortion 1",21:"303 Square Distortion 2",22:"303 Mix Square",23:"Dual Square & Saw",24:"Pulse Lead",25:"JP8 Pulse Lead 1",26:"JP8 Pulse Lead 2",27:"MG Resonant Pulse",28:"JP8 Pulse Lead 3",29:"260 Ring Lead",30:"303 Distortion Lead",31:"JP8000 Distortion Lead",32:"HipHop Sin Lead",33:"HipHop Square Lead",34:"HipHop Pulse Lead",35:"Flux Pulse"},
{0:"Saw Wave",1:"OB2 Saw",2:"Pulse Saw",3:"Feline GR",4:"Big Lead",5:"Velo Lead",6:"GR-300",7:"LA Saw",8:"Doctor Solo",9:"Fat Saw Lead",10:"JP8000 Saw",11:"D-50 Fat Saw",12:"OB Double Saw",13:"JP Double Saw",14:"Fat Saw Lead 2",15:"JP Super Saw",16:"Waspy Synth",17:"PM Lead",18:"CS Saw Lead",24:"MG Saw 1",25:"MG Saw 2",26:"OB Saw 1",27:"OB Saw 2",28:"D-50 Saw",29:"SH-101 Saw",30:"CS Saw",31:"MG Saw Lead",32:"OB Saw Lead",33:"P5 Saw Lead",34:"MG unison",35:"Octave Saw Lead",36:"Natural Lead",40:"Sequence Saw 1",41:"Sequence Saw 2",42:"Resonant Saw",43:"Cheese Saw 1",44:"Cheese Saw 2",45:"Rhythmic Saw",46:"Sequenced Saw",47:"Techno Saw"},
{0:"Synth Calliope",1:"Vent Synth",2:"Pure Pan Lead",8:"LM Pure Lead",9:"LM Blow Lead"},
{0:"Chiffer Lead",1:"TB Lead",2:"Hybrid Lead",3:"Unison Square Lead",4:"Fat Solo Lead",5:"Forceful Lead",6:"Octave Unison Lead",7:"Unison Saw Lead",8:"Mad Lead",9:"Crowding Lead",10:"Double Square"},
{0:"Charang",1:"Wire Lead",2:"FB. Charang",3:"Fat GR Lead",4:"Windy GR Lead",5:"Mellow GR Lead",6:"GR & Pulse",8:"Distortion Lead",9:"Acid Guitar 1",10:"Acid Guitar 2",11:"Dance Distortion Guitar",12:"Dance Distortion Guitar 2",16:"P5 Sync Lead",17:"Fat SyncLead",18:"Rock Lead",19:"5th Deca Sync",20:"Dirty Sync",21:"Dual Sync Lead",22:"LA Brass Ld",24:"JUNO Sub Osc",25:"2600 Sub Osc",26:"JP8000 Fd Osc"},
{0:"Solo Vox",1:"Solo Vox 2",8:"Vox Lead",9:"LFO Vox",10:"Vox Lead 2"},
{0:"5th Saw Wave",1:"Big Fives",2:"5th Lead",3:"5th Ana.Clav",4:"5th Pulse",5:"JP 5th Saw",6:"JP8000 5th FB",8:"4th Lead"},
{0:"Bass & Lead",1:"Big & Raw",2:"Fat & Perky",3:"JUNO Rave",4:"JP8 Bass Lead 1",5:"JP8 Bass Lead 2",6:"SH-5 Bass Lead",7:"Delayed Lead"},
{0:"Fantasia",1:"Fantasia 2",2:"New Age Pad",3:"Bell Heaven",4:"Fantasia 3",5:"Fantasia 4",6:"After D !",7:"260 Harm Pad"},
{0:"Warm Pad",1:"Thick Matrix",2:"Horn Pad",3:"Rotary Strng",4:"OB Soft Pad",5:"Sine Pad",6:"OB Soft Pad2",8:"Octave Pad",9:"Stack Pad",10:"Human Pad",11:"Sync Brs. Pad",12:"Octave PWM Pad",13:"JP Soft Pad"},
{0:"Polysynth",1:"80's Polysynth",2:"Polysynth 2",3:"Polysynth King",4:"Super Polysynth",8:"Power Stack",9:"Octave Stack",10:"Resonant Stack",11:"Techno Stack",12:"Pulse Stack",13:"Twin Octave Rave",14:"Octave Rave",15:"Happy Synth",16:"Forward Sweep",17:"Reverse Sweep",24:"Minor Rave"},
{0:"Space Voice",1:"Heaven II",2:"SC Heaven",3:"Itopia",4:"Water Space",5:"Cold Space",6:"Noise Peaker",7:"Bamboo Hit",8:"Cosmic Voice",9:"Auh Vox",10:"AuhAuh",11:"Vocorderman"},
{0:"Bowed Glass",1:"Soft Bell Pad",2:"JP8 Square Pad",3:"7th Bell Pad",4:"Steel Glass",5:"Bottle Stack"},
{0:"Metal Pad",1:"Tine Pad",2:"Panner Pad",3:"Steel Pad",4:"Special Rave",5:"Metal Pad 2"},
{0:"Halo Pad",1:"Vox Pad",2:"Vox Sweep",8:"Horror Pad",9:"SynVox Pad",10:"SynVox Pad 2",11:"Breath & Rise",12:"Tears Voices"},
{0:"Sweep Pad",1:"Polar Pad",2:"Ambient BPF",3:"Sync Pad",4:"Warriors",8:"Converge",9:"Shwimmer",10:"Celestial Pad",11:"Bag Sweep",12:"Sweep Pipe",13:"Sweep Stack",14:"Deep Sweep",15:"Stray Pad"},
{0:"Ice Rain",1:"Harmo Rain",2:"African wood",3:"Anklung Pad",4:"Rattle Pad",5:"Saw Impulse",6:"Strange Str.",7:"FastFWD Pad",8:"Clavi Pad",9:"EP Pad",10:"Tambra Pad",11:"CP Pad"},
{0:"Soundtrack",1:"Ancestral",2:"Prologue",3:"Prologue 2",4:"Hols Strings",5:"History Wave",8:"Rave"},
{0:"Crystal",1:"Synth Mallet",2:"Soft Crystal",3:"Round Glock",4:"Loud Glock",5:"Glocken Chime",6:"Clear Bells",7:"Christmas Bells",8:"Vibra Bells",9:"Digi Bells",10:"Music Bells",11:"Analog Bells",12:"Blow Bells",13:"Hyper Bells",16:"Choral Bells",17:"Air Bells",18:"Bell Harp",19:"Gamelimba",20:"JUNO Bells",21:"JP Bells",22:"Pizz Bells",23:"Bottom Bells"},
{0:"Atmosphere",1:"Warm Atmosphere",2:"Nylon Harp",3:"Harpvox",4:"Hollow Releas",5:"Nylon + Rhodes",6:"Ambient Pad",7:"Invisible",8:"Pulsey Key",9:"Noise Piano",10:"Heaven Atmosphere",11:"Tambra Atmosphere"},
{0:"Brightness",1:"Shining Star",2:"OB Stab",3:"Brass Star",4:"Choir Stab",5:"D-50 Retour",6:"Southern Wind",7:"Symbolic Bell",8:"Org Bell"},
{0:"Goblin",1:"Goblinson",2:"50's Sci-Fi",3:"Abduction",4:"Auhbient",5:"LFO Pad",6:"Random Str",7:"Random Pad",8:"Low Birds Pad",9:"Falling Down",10:"LFO RAVE",11:"LFO Horror",12:"LFO Techno",13:"Alternative",14:"UFO FX",15:"Gargle Man",16:"Sweep FX",17:"LM Has Come",18:"Fallin Insect",19:"LFO OctaveRave",20:"Just Before",21:"RND Fl. Chord",22:"Random Ending",23:"Random Sine",24:"Eating Filter",25:"Noise & Saw Hit",26:"Pour Magic",27:"Dancing Drill",28:"Dirty Stack",29:"Big Blue",30:"Static Hit",31:"Atl. Mod. FX",32:"Acid Copter"},
{0:"Echo Drops",1:"Echo Bell",2:"Echo Pan",3:"Echo Pan 2",4:"Big Panner",5:"Resonant Panner",6:"Water Piano",7:"Echo SynBass",8:"Pan Sequence",9:"Aqua",10:"Panning Lead",11:"Panning Brass"},
{0:"Star Theme",1:"Star Theme 2",2:"Star Mind",3:"Star Dust",4:"Rep. Trance",5:"Etherality",6:"Mystic Pad",8:"Dream Pad",9:"Silky Pad",10:"Dream Pad 2",11:"Silky Pad 2",16:"New Century",17:"7th Atmosphere",18:"Galaxy Way",19:"Rising OSC."},
{0:"Sitar",1:"Sitar 2",2:"Detune Sitar",3:"Sitar 3",4:"Sitar/Drone",5:"Sitar 4",8:"Tambra",16:"Tamboura"},
{0:"Banjo",1:"Muted Banjo",8:"Rabab",9:"San Xian",16:"Gopichant",24:"Oud",28:"Oud + Strings",32:"Pi Pa"},
{0:"Shamisen",1:"Tsugaru",8:"Synth Shamisen"},
{0:"Koto",1:"Gu Zheng",8:"Taisho Koto",16:"Kanoon",19:"Kanoon + Choir",24:"Octave Harp"},
{0:"Kalimba",8:"Sanza",9:"Bodhran",10:"Bodhran Mute"},
{0:"Bagpipe",8:"Didgeridoo",9:"Uilleann Pipe",10:"Uilleann Pipe Nm",11:"Uilleann Pipe Or"},
{0:"Fiddle",8:"Er Hu",9:"Gao Hu"},
{0:"Shanai",1:"Shanai 2",8:"Pungi",16:"Hichiriki",24:"Mizmar",32:"Suona",33:"Suona 2"},
{0:"Tinkle Bell",8:"Bonang",9:"Gender",10:"Gamelan Gong",11:"Synth Gamelan",12:"Jang Gu",13:"Jegogan",14:"Jublag",15:"Pemade",16:"RAMA Cymbal",17:"Kajar",18:"Kelontuk",19:"Kelontuk Mt",20:"Kelontuk Sid",21:"Kopyak Op",22:"Kopyak Mt",23:"Ceng Ceng",24:"Reyoung",25:"Kempur",32:"Jungle Crash",40:"Crash Menu",41:"Ride Cymbal Menu",42:"Ride Bell Menu"},
{0:"Agogo",8:"Atarigane",16:"Tambourine"},
{0:"Steel Drums",1:"Island Mlt"},
{0:"Woodblock",8:"Castanets",16:"Angklung",17:"Angklung Rhythm",24:"Finger Snaps",32:"909 Hand Clap",40:"Hand Clap Menu"},
{0:"Taiko",1:"Small Taiko",8:"Concert Bass Drum",9:"Concert Bass Drum Mt",16:"Jungle Bass Drum",17:"Techno Bass Drum",18:"Bounce",24:"Kendang Wadon",25:"Bebarongan",26:"Pelegongan",27:"Dholak 1",28:"Dholak 2",32:"Jungle Bass Drum Roll",40:"Kick Menu 1",41:"Kick Menu 2",42:"Kick Menu 3",43:"Kick Menu 4"},
{0:"Melodic Tom 1",1:"Real Tom",2:"Real Tom 2",3:"Jazz Tom",4:"Brush Tom",8:"Melodic Tom 2",9:"Rock Tom",16:"Rash Snare Drum",17:"House Snare Drum",18:"Jungle Snare Drum",19:"909 Snare Drum",24:"Jungle Snare Drum Roll",40:"Snare Drum Menu 1",41:"Snare Drum Menu 2",42:"Snare Drum Menu 3",43:"Snare Drum Menu 4",44:"Snare Drum Menu 5"},
{0:"Synth Drum",8:"808 Tom",9:"Elec Perc",10:"Sine Percussion",11:"606 Tom",12:"909 Tom",13:"606 Distortion Tom"},
{0:"Reverse Cymbal",1:"Reverse Cymbal 2",2:"Reverse Cymbal 3",3:"Reverse Cymbal 4",8:"Reverse Snare 1",9:"Reverse Snare 2",16:"Reverse Kick 1",17:"Reverse Con Bass Drum",24:"Reverse Tom 1",25:"Reverse Tom 2",26:"Reverse Tom 3",27:"Reverse Tom 4",40:"Reverse Snare Drum Menu1",41:"Reverse Snare Drum Menu2",42:"Reverse Snare Drum Menu3",43:"Reverse Bass Drum Menu1",44:"Reverse Bass Drum Menu2",45:"Reverse Bass Drum Menu3",46:"Reverse Clap Menu"},
{0:"Guitar Fret Noise",1:"Guitar Cut Noise",2:"String Slap",3:"Guitar Cut Noise 2",4:"Distortion Cut Noise",5:"Bass Slide",6:"Pick Scrape",8:"Guitar FX Menu",9:"Bartok Pizzicato",10:"Guitar Slap",11:"Chord Stroke",12:"Biwa Stroke",13:"Biwa Tremolo",16:"Acoustic Bass Noise Menu",17:"Distortion Guitar Noise Menu",18:"Electric Guitar Noise Menu 1",19:"Electric Guitar Noise Menu 2",20:"Guitar Stroke Menu",21:"Guitar Slide Menu",22:"Acoustic Bass Mute Noise",23:"Acoustic Bass Touch Noise",24:"Acoustic Bass Atack Noise",25:"TC Up Noise",26:"TC Down Mt. Noise",27:"TC Up Mt. Noise",28:"TC Down Noise",29:"Distortion Guitar Up Noise",30:"Distortion Guitar Down Noise 1",31:"Distortion Guitar Down Noise 2",32:"Distortion Guitar Mute Noise",34:"Guitar Stroke Noise 5",35:"Steel Guitar Slide Noise 1",36:"Steel Guitar Slide Noise 2",37:"Steel Guitar Slide Noise 3",38:"Steel Guitar Slide Noise 4",39:"Guitar Stroke Noise 1",40:"Guitar Stroke Noise 2",41:"Guitar Stroke Noise 3",42:"Guitar Stroke Noise 4"},
{0:"Breath Noise",1:"Flute Key Click",2:"Breath Noise Menu",3:"Flute Breath 1",4:"Flute Breath 2",5:"Flute Breath 3",6:"Vox Breath 1",7:"Vox Breath 2",8:"Trombone Noise",9:"Trumpet Noise"},
{0:"Seashore",1:"Rain",2:"Thunder",3:"Wind",4:"Stream",5:"Bubble",6:"Wind 2",7:"Cricket",16:"Pink Noise",17:"White Noise"},
{0:"Bird",1:"Dog",2:"Horse-Gallop",3:"Bird 2",4:"Kitty",5:"Growl",6:"Growl 2",7:"Fancy Animal",8:"Seal"},
{0:"Telephone 1",1:"Telephone 2",2:"Door Creaking",3:"Door",4:"Scratch",5:"Wind Chimes",7:"Scratch 2",8:"Scratch Key",9:"Tape Rewind",10:"Phono Noise",11:"MC-500 Beep",12:"Scratch 3",13:"Scratch 4",14:"Scratch 5",15:"Scratch 6",16:"Scratch 7"},
{0:"Helicopter",1:"Car-Engine",2:"Car-Stop",3:"Car-Pass",4:"Car-Crash",5:"Siren",6:"Train",7:"Jetplane",8:"Starship",9:"Burst Noise",10:"Calculating",11:"Percussion Bang",12:"Burner",13:"Glass & Glam",14:"Ice Ring",15:"Over Blow",16:"Crack Bottle",17:"Pour Bottle",18:"Soda",19:"Open CD Tray",20:"Audio Switch",21:"Key Typing",22:"Steam Locomotive 1",23:"Steam Locomotive 2",24:"Car Engine 2",25:"Car Horn",26:"Boeeeen",27:"Railway Crossing",28:"Compresser",29:"Sword Boom!",30:"Sword Cross",31:"Stab! 1",32:"Stab! 2"},
{0:"Applause",1:"Laughing",2:"Screaming",3:"Punch",4:"Heart Beat",5:"Footsteps",6:"Applause 2",7:"Small Club",8:"Applause Wave",9:"Baby Laughing",16:"Voice One",17:"Voice Two",18:"Voice Three",19:"Voice Tah",20:"Voice Whey",22:"Voice Kikit",23:"Voice ComeOn",24:"Voice Aou",25:"Voice Oou",26:"Voice Hie"},
{0:"Gun Shot",1:"Machine Gun",2:"Lasergun",3:"Explosion",4:"Eruption",5:"Big Shot",6:"Explosion 2"}
];
var _gm2 = [
{0:"Acoustic Grand Piano",1:"Acoustic Grand Piano (wide)",2:"Acoustic Grand Piano (dark)"},
{0:"Bright Acoustic Piano",1:"Bright Acoustic Piano (wide)"},
{0:"Electric Grand Piano",1:"Electric Grand Piano (wide)"},
{0:"Honky-tonk Piano",1:"Honky-tonk Piano (wide)"},
{0:"Electric Piano 1",1:"Detuned Electric Piano 1",2:"Electric Piano 1 (velocity mix)",3:"60's Electric Piano"},
{0:"Electric Piano 2",1:"Detuned Electric Piano",2:"Electric Piano 2 (velocity mix)",3:"EP Legend",4:"EP Phase"},
{0:"Harpsichord",1:"Harpsichord (octave mix)",2:"Harpsichord (wide)",3:"Harpsichord (with key off)"},
{0:"Clavinet",1:"Pulse Clavinet"},
{0:"Celesta"},
{0:"Glockenspiel"},
{0:"Music Box"},
{0:"Vibraphone",1:"Vibraphone (wide)"},
{0:"Marimba",1:"Marimba (wide)"},
{0:"Xylophone"},
{0:"Tubular Bells",1:"Church Bell",2:"Carillon"},
{0:"Dulcimer"},
{0:"Drawbar Organ",1:"Detuned Drawbar Organ",2:"Italian 60's Organ",3:"Drawbar Organ 2"},
{0:"Percussive Organ",1:"Detuned Percussive Organ",2:"Percussive Organ 2"},
{0:"Rock Organ"},
{0:"Church Organ",1:"Church Organ (octave mix)",2:"Detuned Church Organ"},
{0:"Reed Organ",1:"Puff Organ"},
{0:"Accordion",1:"Accordion 2"},
{0:"Harmonica"},
{0:"Tango Accordion"},
{0:"Acoustic Guitar (nylon)",1:"Ukulele",2:"Acoustic Guitar (nylon + key off)",3:"Acoustic Guitar (nylon 2)"},
{0:"Acoustic Guitar (steel)",1:"12-Strings Guitar",2:"Mandolin",3:"Steel Guitar with Body Sound"},
{0:"Electric Guitar (jazz)",1:"Electric Guitar (pedal steel)"},
{0:"Electric Guitar (clean)",1:"Electric Guitar (detuned clean)",2:"Mid Tone Guitar"},
{0:"Electric Guitar (muted)",1:"Electric Guitar (funky cutting)",2:"Electric Guitar (muted velo-sw)",3:"Jazz Man"},
{0:"Overdriven Guitar",1:"Guitar Pinch"},
{0:"Distortion Guitar",1:"Distortion Guitar (with feedback)",2:"Distorted Rhythm Guitar"},
{0:"Guitar Harmonics",1:"Guitar Feedback"},
{0:"Acoustic Bass"},
{0:"Electric Bass (finger)",1:"Finger Slap Bass"},
{0:"Electric Bass (pick)"},
{0:"Fretless Bass"},
{0:"Slap Bass 1"},
{0:"Slap Bass 2"},
{0:"Synth Bass 1",1:"Synth Bass (warm)",2:"Synth Bass 3 (resonance)",3:"Clavi Bass",4:"Hammer"},
{0:"Synth Bass 2",1:"Synth Bass 4 (attack)",2:"Synth Bass (rubber)",3:"Attack Pulse"},
{0:"Violin",1:"Violin (slow attack)"},
{0:"Viola"},
{0:"Cello"},
{0:"Contrabass"},
{0:"Tremolo Strings"},
{0:"Pizzicato Strings"},
{0:"Orchestral Harp",1:"Yang Chin"},
{0:"Timpani"},
{0:"String Ensembles",1:"Strings and Brass",2:"60s Strings"},
{0:"String Ensembles"},
{0:"Synth Strings 1",1:"Synth Strings 3"},
{0:"Synth Strings 2"},
{0:"Choir Aahs",1:"Choir Aahs"},
{0:"Voice Oohs",1:"Humming"},
{0:"Synth Voice",1:"Analog Voice"},
{0:"Orchestra Hit",1:"Bass Hit Plus",2:"6th Hit",3:"Euro Hit"},
{0:"Trumpet",1:"Dark Trumpet Soft"},
{0:"Trombone",1:"Trombone 2",2:"Bright Trombone"},
{0:"Tuba"},
{0:"Muted Trumpet",1:"Muted Trumpet 2"},
{0:"French Horn",1:"French Horn 2 (warm)"},
{0:"Brass Section",1:"Brass Section 2 (octave mix)"},
{0:"Synth Brass 1",1:"Synth Brass 3",2:"Analog Synth Brass 1",3:"Jump Brass"},
{0:"Synth Brass 2",1:"Synth Brass 4",2:"Analog Synth Brass 2"},
{0:"Soprano Sax"},
{0:"Alto Sax"},
{0:"Tenor Sax"},
{0:"Baritone Sax"},
{0:"Oboe"},
{0:"English Horn"},
{0:"Bassoon"},
{0:"Clarinet"},
{0:"Piccolo"},
{0:"Flute"},
{0:"Recorder"},
{0:"Pan Flute"},
{0:"Blown Bottle"},
{0:"Shakuhachi"},
{0:"Whistle"},
{0:"Ocarina"},
{0:"Lead 1 (square)",1:"Lead 1a (square 2)",2:"Lead 1b (sine)"},
{0:"Lead 2 (sawtooth)",1:"Lead 2a (sawtooth 2)",2:"Lead 2b (saw + pulse)",3:"Lead 2c (double sawtooth)",4:"Lead 2d (sequenced analog)"},
{0:"Lead 3 (calliope)"},
{0:"Lead 4 (chiff)"},
{0:"Lead 5 (charang)",1:"Lead 5a (wire lead)"},
{0:"Lead 6 (voice)"},
{0:"Lead 7 (fifths)"},
{0:"Lead 8 (bass + lead)",1:"Lead 8a (soft wrl)"},
{0:"Pad 1 (new age)"},
{0:"Pad 2 (warm)",1:"Pad 2a (sine pad)"},
{0:"Pad 3 (polysynth)"},
{0:"Pad 4 (choir)",1:"Pad 4a (itopia)"},
{0:"Pad 5 (bowed)"},
{0:"Pad 6 (metallic)"},
{0:"Pad 7 (halo)"},
{0:"Pad 8 (sweep)"},
{0:"FX 1 (rain)"},
{0:"FX 2 (soundtrack)"},
{0:"FX 3 (crystal)",1:"FX 3a (synth mallet)"},
{0:"FX 4 (atmosphere)"},
{0:"FX 5 (brightness)"},
{0:"FX 6 (goblins)"},
{0:"FX 7 (echoes)",1:"FX 7a (echo bell)",2:"FX 7b (echo pan)"},
{0:"FX 8 (sci-fi)"},
{0:"Sitar",1:"Sitar 2 (bend)"},
{0:"Banjo"},
{0:"Shamisen"},
{0:"Koto",1:"Taisho Koto"},
{0:"Kalimba"},
{0:"Bag pipe"},
{0:"Fiddle"},
{0:"Shanai"},
{0:"Tinkle Bell"},
{0:"Agogo"},
{0:"Steel Drums"},
{0:"Woodblock",1:"Castanets"},
{0:"Taiko Drum",1:"Concert Bass Drum"},
{0:"Melodic Tom",1:"Melodic Tom 2 (power)"},
{0:"Synth Drum",1:"Rhythm Box Tom",2:"Electric Drum"},
{0:"Reverse Cymbal"},
{0:"Guitar Fret Noise",1:"Guitar Cutting Noise",2:"Acoustic Bass String Slap"},
{0:"Breath Noise",1:"Flute Key Click"},
{0:"Seashore",1:"Rain",2:"Thunder",3:"Wind",4:"Stream",5:"Bubble"},
{0:"Bird Tweet",1:"Dog",2:"Horse Gallop",3:"Bird Tweet 2"},
{0:"Telephone Ring",1:"Telephone Ring 2",2:"Door Creaking",3:"Door",4:"Scratch",5:"Wind Chime"},
{0:"Helicopter",1:"Car Engine",2:"Car Stop",3:"Car Pass",4:"Car Crash",5:"Siren",6:"Train",7:"Jetplane",8:"Starship",9:"Burst Noise"},
{0:"Applause",1:"Laughing",2:"Screaming",3:"Punch",4:"Heart Beat",5:"Footsteps"},
{0:"Gunshot",1:"Machine Gun",2:"Lasergun",3:"Explosion"}
];
var _gm2dr = {
0:"Standard Drum Kit",8:"Room Drum Kit",16:"Power Drum Kit",24:"Electro Drum Kit",25:"Analog Drum Kit",32:"Jazz Drum Kit",40:"Brush Drum Kit",48:"Orchestra Drum Kit",56:"SFX Kit"
};
//#end

function _strip(s) {
  if (typeof s == 'undefined') s = '';
  return ' ' + s.toString().toLowerCase().replace(/\W+/g, ' ').trim() + ' ';
}

var _program = {};
for (i = 0; i < _instr.length; i++) _program[_strip(_instr[i])] = i;
for (i = 0; i < _group.length; i++) _program[_strip(_group[i])] = i * 8;
for (i in _more) {
  /* istanbul ignore else */
  if (_more.hasOwnProperty(i)) _program[_strip(i)] = _more[i];
}

var _percussion = {};
for (i = 0; i < _perc.length; i++) _percussion[_strip(_perc[i])] = i + 27;

function _score(a, b) {
  var c, i, j, x, y, z;
  if (a.length > b.length) { c = a; a = b; b = c; }
  var m = [];
  for (i = 0; i < a.length; i++) {
    m[i] = [];
    if (!i) {
      for (j = 0; j < b.length; j++) {
        m[i][j] = a[i] == b[j] ? 2 : 0;
      }
    }
    else {
      m[i][0] = a[i] == b[0] ? 2 : 0;
      for (j = 1; j < b.length; j++) {
        x = m[i - 1][j] - (a[i] == ' ' ? 1 : 2);
        y = m[i][j - 1] - (b[j] == ' ' ? 1 : 2);
        z = m[i - 1][j - 1] + (a[i] == b[j] ? 2 : -2);
        if (x < 0) x = 0;
        if (x < y) x = y;
        if (x < z) x = z;
        m[i][j] = x;
      }
    }
  }
  for (i = 0; i < a.length; i++) for (j = 0; j < b.length; j++) m[i][j] = m[i][j] > 2 ? m[i][j] - 2 : 0;
  c = 0;
  while (m.length) {
    x = 0; y = 0; z = 0;
    for (i = 0; i < m.length; i++) for (j = 0; j < m[0].length; j++) {
      if (z < m[i][j]) {
        x = i; y = j; z = m[i][j];
      }
    }
    if (!z) break;
    c += z;
    m.splice(x, 1);
    for (i = 0; i < m.length; i++) m[i].splice(y);
  }
  return c;
}

function _search(h, s) {
  var k, l, m, n, q;
  l = 0; m = 0; n = 0;
  for (k in h) {
    /* istanbul ignore else */
    if (h.hasOwnProperty(k)) {
      q = _score(s, k);
      if (q > n || q == n && k.length < l) {
        l = k.length; m = h[k]; n = q;
      }
    }
  }
  return [n, m];
}

var _noteValue = JZZ.MIDI.noteValue;

JZZ.MIDI.programName = function(n, m, l) {
  var s;
  if (n >= 0 && n <= 127) {
    if (typeof m == 'undefined' && typeof l == 'undefined') return _instr[n];
    if (m == 0x79) {
      s = _gm2[n][l];
      if (s) return s;
    }
    if (m == 0x78) {
      if (!l) s = _gm2dr[n];
      return s || 'Drum Kit *';
    }
    if (!l) {
      s = _gs[n][m];
      if (s) return s;
    }
    return _instr[n] + ' *';
  }
};
JZZ.MIDI.groupName = function(n) { if (n >= 0 && n <= 127) return _group[n >> 3]; };
JZZ.MIDI.percussionName = function(n) { if (n >= 27 && n <= 87) return _perc[n - 27]; };

JZZ.MIDI.programValue = function(x) {
  if (x == parseInt(x)) return x;
  var s = _strip(x);
  var n = _program[s];
  if (typeof n != 'undefined') return n;
  var guess = _search(_program, s);
  return guess[1];
};

JZZ.MIDI.noteValue = function(x) {
  var n = _noteValue(x);
  if (typeof n != 'undefined') return n;
  var s = _strip(x);
  n = _percussion[s];
  if (typeof n != 'undefined') return n;
  var guess = _search(_percussion, s);
  return guess[1];
};

JZZ.MIDI.guessValue = function(x) {
  if (x == parseInt(x) && x >= 0 && x <= 127) return x;
  var n = _noteValue(x);
  if (typeof n != 'undefined') return -n;
  var s = _strip(x);
  n = _program[s];
  if (typeof n != 'undefined') return n;
  n = _percussion[s];
  if (typeof n != 'undefined') return -n;
  var a = _search(_program, s);
  var b = _search(_percussion, s);
  return b[0] > a[0] ? -b[1] : a[1];
};

JZZ.MIDI.GM = {};
JZZ.MIDI.GM.allGM2 = function() {
  var ret = [];
  for (var i = 0; i < 128; i++) {
    for (var k in _gm2[i]) {
      /* istanbul ignore else */
      if (_gm2[i].hasOwnProperty(k)) ret.push([i, 121, parseInt(k)]);
    }
  }
  return ret;
};
JZZ.MIDI.GM.allGS = function() {
  var ret = [];
  for (var i = 0; i < 128; i++) {
    for (var k in _gs[i]) {
      /* istanbul ignore else */
      if (_gs[i].hasOwnProperty(k)) ret.push([i, parseInt(k), 0]);
    }
  }
  return ret;
};

});