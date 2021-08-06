(function(global, factory) {
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
{0:"Piano 1",1:"UprightPiano",2:"Mild Piano",8:"Upright P w",9:"Mild Piano w",16:"European Pf",24:"Piano + Str.",25:"Piano + Str2",26:"Piano+Choir1",27:"Piano+Choir2"},
{0:"Piano 2",1:"Pop Piano",2:"Rock Piano",8:"Pop Piano w",9:"Rock Piano w",16:"Dance Piano"},
{0:"Piano 3",1:"EG+Rhodes 1",2:"EG+Rhodes 2",8:"Piano 3w"},
{0:"Honky-tonk",8:"Honky-tonk 2"},
{0:"E.Piano 1",8:"St.Soft EP",9:"Cho. E.Piano",10:"SilentRhodes",16:"FM+SA EP",17:"Dist E.Piano",24:"Wurly",25:"Hard Rhodes",26:"Mellow Rhodes"},
{0:"E.Piano 2",1:"E.Piano 3",8:"Detuned EP 2",9:"Detuned EP 3",10:"EP Legend",16:"St.FM EP",24:"Hard FM EP",32:"EP Phase"},
{0:"Harpsichord",1:"Harpsichord 2",2:"Harpsichord 3",8:"Coupled Hps.",16:"Harpsi.w",24:"Harpsi.o",32:"Synth Harpsi"},
{0:"Clav.",1:"Clav. 2",2:"Atk Clav.1",3:"Atk Clav.2",8:"Comp Clav.",16:"Reso Clav.",17:"Phase Clav",24:"Clav.o",32:"Analog Clav.",33:"JP8 Clav. 1",35:"JP8 Clav. 2",36:"SynRingClav.",37:"SynDistClav.",38:"JP8000 Clav.",39:"Pulse Clav"},
{0:"Celesta",1:"Pop Celesta"},
{0:"Glockenspiel"},
{0:"Music Box",1:"Music Box 2",8:"St.Music Box"},
{0:"Vibraphone",1:"Pop Vibe.",8:"Vibraphone w",9:"Vibraphones"},
{0:"Marimba",8:"Marimba w",16:"Barafon",17:"Barafon 2",24:"Log drum"},
{0:"Xylophone",8:"Xylophone w"},
{0:"Tubular Bell",8:"Church Bell",9:"Carillon",10:"Church Bell 2",16:"Tubular Bell w"},
{0:"Santur",1:"Santur 2",2:"Santur 3",8:"Cimbalom",16:"Zither 1",17:"Zither 2",24:"Dulcimer"},
{0:"Organ 1",1:"Organ 101",2:"Ful Organ 1",3:"Ful Organ 2",4:"Ful Organ 3",5:"Ful Organ 4",6:"Ful Organ 5",7:"Ful Organ 6",8:"Trem. Organ",9:"Organ o",10:"Ful Organ 7",11:"Ful Organ 8",12:"Ful Organ 9",16:"60's Organ 1",17:"60's Organ 2",18:"60's Organ 3",19:"Farf Organ",24:"Cheese Organ",25:"D-50 Organ",26:"JUNO Organ",27:"Hybrid Organ",28:"VS Organ",29:"Digi Church",30:"JX-8P Organ",31:"FM Organ",32:"70's E.Organ",33:"Even Bar",40:"Organ Bass",48:"5th Organ"},
{0:"Organ 2",1:"Jazz Organ",2:"E.Organ 16+2",3:"Jazz Organ 2",4:"Jazz Organ 3",5:"Jazz Organ 4",6:"Jazz Organ 5",7:"Jazz Organ 6",8:"Chorus Or.2",9:"Octave Organ",32:"Perc. Organ",33:"Perc.Organ 2",34:"Perc.Organ 3",35:"Perc.Organ 4"},
{0:"Organ 3",8:"Rotary Org. 1",16:"Rotary Org.S",17:"Rock Organ 1",18:"Rock Organ 2",24:"Rotary Org.F"},
{0:"Church Org.1",8:"Church Org.2",16:"Church Org.3",24:"Organ Flute",32:"Trem.Flute",33:"Theater Org."},
{0:"Reed Organ",8:"Wind Organ",16:"Puff Organ"},
{0:"Accordion Fr",8:"Accordion It",9:"Dist. Accord",16:"Cho. Accord",24:"Hard Accord",25:"Soft Accord"},
{0:"Harmonica",1:"Harmonica 2",8:"B.Harp Basic",9:"B.Harp Suppl"},
{0:"Bandoneon",8:"Bandoneon 2",16:"Bandoneon 3"},
{0:"Nylon-str.Gt",8:"Ukulele",16:"Nylon Gt.o",24:"Velo Harmnix",32:"Nylon Gt.2",40:"Lequint Gt."},
{0:"Steel-str.Gt",8:"12-str.Gt",9:"Nylon+Steel",10:"Atk Steel Gt",16:"Mandolin",17:"Mandolin 2",18:"MandolinTrem",32:"Steel Gt.2",33:"Steel + Body"},
{0:"Jazz Gt.",1:"Mellow Gt.",8:"Pedal Steel"},
{0:"Clean Gt.",1:"Clean Half",2:"Open Hard 1",3:"Open Hard 2",4:"JC Clean Gt.",5:"Atk CleanGt.",8:"Chorus Gt.",9:"JC Chorus Gt",16:"TC FrontPick",17:"TC Rear Pick",18:"TC Clean ff",19:"TC Clean 2:",20:"LP Rear Pick",21:"LP Rear 2",22:"LP RearAtack",23:"Mid Tone GTR",24:"Chung Ruan",25:"Chung Ruan 2"},
{0:"Muted Gt.",1:"Muted Dis.Gt",2:"TC Muted Gt.",8:"Funk Pop",16:"Funk Gt.2",24:"Jazz Man"},
{0:"Overdrive Gt",1:"Overdrive 2",2:"Overdrive 3",3:"More Drive",4:"Guitar Pinch",5:"Attack Drive",8:"LP OverDrvGt",9:"LP OverDrv:",10:"LP Half Drv",11:"LP Half Drv2",12:"LP Chorus"},
{0:"DistortionGt",1:"Dist. Gt2 :",2:"Dazed Guitar",3:"Distortion:",4:"Dist.Fast :",5:"Attack Dist",8:"Feedback Gt.",9:"Feedback Gt2",16:"Power Guitar",17:"Power Gt.2",18:"5th Dist.",24:"Rock Rhythm",25:"Rock Rhythm2",26:"Dist Rtm GTR"},
{0:"Gt.Harmonics",8:"Gt. Feedback",9:"Gt.Feedback2",16:"Ac.Gt.Harmnx",24:"E.Bass Harm."},
{0:"Acoustic Bs.",1:"Rockabilly",8:"Wild A.Bass",9:"Atk A.Bass",16:"Bass + OHH"},
{0:"Fingered Bs.",1:"Fingered Bs2",2:"Jazz Bass",3:"Jazz Bass 2",4:"Rock Bass",5:"Heart Bass",6:"AttackFinger",7:"Finger Slap",8:"ChorusJazzBs",16:"F.Bass/Harm."},
{0:"Picked Bass",1:"Picked Bass2",2:"Picked Bass3",3:"Picked Bass4",4:"Double Pick",8:"Muted PickBs",16:"P.Bass/Harm."},
{0:"Fretless Bs.",1:"Fretless Bs2",2:"Fretless Bs3",3:"Fretless Bs4",4:"Syn Fretless",5:"Mr.Smooth",8:"Wood+FlessBs"},
{0:"Slap Bass 1",1:"Slap Pop",8:"Reso Slap",9:"Unison Slap"},
{0:"Slap Bass 2",1:"Slap Bass 3",8:"FM Slap"},
{0:"Synth Bass 1",1:"SynthBass101",2:"CS Bass",3:"JP-4 Bass",4:"JP-8 Bass",5:"P5 Bass",6:"JPMG Bass",8:"Acid Bass",9:"TB303 Bass",10:"Tekno Bass",11:"TB303 Bass 2",12:"Kicked TB303",13:"TB303 Saw Bs",14:"Rubber303 Bs",15:"Reso 303 Bs",16:"Reso SH Bass",17:"TB303 Sqr Bs",18:"TB303 DistBs",19:"Clavi Bass",20:"Hammer",21:"Jungle Bass",22:"Square Bass",23:"Square Bass2",24:"Arpeggio Bs",32:"Hit&Saw Bass",33:"Ring Bass",34:"AtkSineBass",35:"OB sine Bass",36:"Auxiliary Bs",40:"303SqDistBs",41:"303SqDistBs2",42:"303SqDistBs3",43:"303Sqr.Rev",44:"TeeBee"},
{0:"Synth Bass 2",1:"SynthBass201",2:"Modular Bass",3:"Seq Bass",4:"MG Bass",5:"Mg Oct Bass1",6:"MG Oct Bass2",7:"MG Blip Bs:",8:"Beef FM Bass",9:"Dly Bass",10:"X Wire Bass",11:"WireStr Bass",12:"Blip Bass :",13:"RubberBass 1",14:"Syn Bell Bs",15:"Odd Bass",16:"RubberBass 2",17:"SH101 Bass 1",18:"SH101 Bass 2",19:"Smooth Bass",20:"SH101 Bass 3",21:"Spike Bass",22:"House Bass:",23:"KG Bass",24:"Sync Bass",25:"MG 5th Bass",26:"RND Bass",27:"WowMG Bass",28:"Bubble Bass",29:"Attack Pulse",30:"Sync Bass 2",31:"Pulse Mix Bs",32:"MG Dist Bass",33:"Seq Bass 2",34:"3rd Bass",35:"MG Oct Bass",36:"SlowEnvBass",37:"Mild Bass",38:"DistEnvBass",39:"MG LightBass",40:"DistSynBass",41:"Rise Bass",42:"Cyber Bass"},
{0:"Violin:",1:"Violin Atk:",8:"Slow Violin"},
{0:"Viola:",1:"Viola Atk.:"},
{0:"Cello:",1:"Cello Atk.:"},
{0:"Contrabass"},
{0:"Tremolo Str",2:"Trem Str.St.",8:"Slow Tremolo",9:"Suspense Str",10:"SuspenseStr2"},
{0:"PizzicatoStr",1:"Vcs&Cbs Pizz",2:"Chamber Pizz",3:"St.Pizzicato",8:"Solo Pizz.",16:"Solo Spic.",17:"StringsSpic."},
{0:"Harp",1:"Harp&Strings",2:"Harp St.",8:"Uillean Harp",16:"Synth Harp",24:"Yang Qin",25:"Yang Qin 2",26:"SynthYangQin"},
{0:"Timpani"},
{0:"Strings",1:"Bright Str:",2:"ChamberStr",3:"Cello sect.",4:"Bright Str.2",5:"Bright Str.3",6:"Quad Strings",7:"Mild Strings",8:"Orchestra",9:"Orchestra 2",10:"Tremolo Orch",11:"Choir Str.",12:"Strings+Horn",13:"Str.+Flute",14:"Choir Str.2",15:"Choir Str.3",16:"St. Strings",17:"St.Strings 2",18:"St.Strings 3",19:"Orchestra 3",20:"Orchestra 4",24:"Velo Strings",32:"Oct Strings1",33:"Oct Strings2",34:"ContraBsSect",40:"60s Strings"},
{0:"Slow Strings",1:"SlowStrings2",2:"SlowStrings3",8:"Legato Str.",9:"Warm Strings",10:"St.Slow Str.",11:"St.Slow Str2",12:"S.Str+Choir",13:"S.Str+Choir2"},
{0:"Syn.Strings1",1:"OB Strings",2:"StackStrings",3:"JP Strings",4:"Chorus Str.",8:"Syn.Strings3",9:"Syn.Strings4",10:"Syn.Strings6",11:"Syn.Strings7",12:"LoFi Strings",16:"High Strings",17:"Hybrid Str.",24:"Tron Strings",25:"Noiz Strings"},
{0:"Syn.Strings2",1:"Syn.Strings5",2:"JUNO Strings",3:"FilteredOrch",4:"JP Saw Str.",5:"Hybrid Str.2",6:"DistStrings",7:"JUNOFullStr.",8:"Air Strings",9:"Atk Syn Str.",10:"StraightStr."},
{0:"Choir Aahs",8:"St.ChoirAahs",9:"Melted Choir",10:"Church Choir",11:"Boys Choir 1",12:"Boys Choir 2",13:"St.BoysChoir",14:"Rich Choir",16:"Choir Hahs",24:"Chorus Lahs",32:"Chorus Aahs 2",33:"Male Aah+Str"},
{0:"Voice Oohs",1:"Chorus Oohs",2:"Voice Oohs 2",3:"Chorus Oohs2",4:"OohsCodeMaj7",5:"OohsCodeSus4",6:"Jazz Scat",8:"Voice Dahs",9:"JzVoice Dat",10:"JzVoice Bap",11:"JzVoice Dow",12:"JzVoice Thum",16:"VoiceLah Fem",17:"ChorusLahFem",18:"VoiceLuh Fem",19:"ChorusLuhFem",20:"VoiceLan Fem",21:"ChorusLanFem",22:"VoiceAah Fem",23:"VoiceUuh Fem",24:"Fem Lah&Lan",32:"VoiceWah Mal",33:"ChorusWahMal",34:"VoiceWoh Mal",35:"ChorusWohMal",36:"VoiceAah Mal",37:"VoiceOoh Mal",40:"Humming"},
{0:"SynVox",1:"SynVox 2",2:"SynVox 3",8:"Syn.Voice",9:"Silent Night",10:"Syn.Voice 2",16:"VP330 Choir",17:"Vinyl Choir",18:"JX8P Vox",19:"Analog Voice"},
{0:"OrchestraHit",1:"Bass Hit",2:"6th Hit",3:"Euro Hit",8:"Impact Hit",9:"Philly Hit",10:"Double Hit",11:"Perc. Hit",12:"Shock Wave",13:"Bounce Hit",14:"Drill Hit",15:"Thrill Hit",16:"Lo Fi Rave",17:"Techno Hit",18:"Dist. Hit",19:"Bam Hit",20:"Bit Hit",21:"Bim Hit",22:"Technorg Hit",23:"Rave Hit",24:"Strings Hit",25:"Stack Hit",26:"Industry Hit",27:"Clap Hit"},
{0:"Trumpet",1:"Trumpet 2",2:"Trumpet:",3:"Dark Trumpet",4:"Trumpet & Nz",8:"Flugel Horn",16:"4th Trumpets",24:"Bright Tp.",25:"Warm Tp.",26:"Warm Tp.2",27:"Twin Tp.",32:"Syn. Trumpet"},
{0:"Trombone",1:"Trombone 2",2:"Twin bones",3:"Bones & Tuba",4:"Bright Tb",8:"Bs. Trombone",16:"Euphonium"},
{0:"Tuba",1:"Tuba 2",8:"Tuba + Horn"},
{0:"MutedTrumpet",1:"Cup Mute Tp",2:"MuteTrumpet2",3:"MuteTrumpet3",8:"Muted Horns"},
{0:"French Horns",1:"Fr.Horn 2",2:"Horn + Orche",3:"Wide FreHrns",8:"F.Hrn Slow:",9:"Dual Horns",16:"Synth Horn",24:"F.Horn Rip"},
{0:"Brass 1",1:"Brass ff",2:"Bones Sect.",3:"St. Brass ff",4:"Quad Brass1",5:"Quad Brass2",8:"Brass 2",9:"Brass 3",10:"Brass sfz",12:"Brass sfz 2",14:"FatPop Brass",16:"Brass Fall",17:"Trumpet Fall",24:"Octave Brass",25:"Brass + Reed",26:"Fat + Reed",32:"Orch Brass",33:"Orch Brass 2",35:"St.FatPopBrs",36:"St.Orch Brs",37:"St.Orch Brs2",38:"St.Orch Brs3"},
{0:"Synth Brass1",1:"JUNO Brass",2:"Stack Brass",3:"SH-5 Brass",4:"MKS Brass",5:"Jump Brass",8:"Pro Brass",9:"P5 Brass",10:"OrchSynBrass",16:"Oct SynBrass",17:"Hybrid Brass",18:"OctSynBrass2",19:"BPF Brass"},
{0:"Synth Brass2",1:"Soft Brass",2:"Warm Brass",3:"Synth Brass3",4:"Sync Brass",5:"Fat SynBrass",6:"DeepSynBrass",8:"SynBrass sfz",9:"OB Brass",10:"Reso Brass",11:"DistSqrBrass",12:"JP8000SawBrs",16:"Velo Brass 1",17:"Transbrass"},
{0:"Soprano Sax",8:"Soprano Exp."},
{0:"Alto Sax",8:"AltoSax Exp.",9:"Grow Sax",16:"AltoSax + Tp",17:"Sax Section"},
{0:"Tenor Sax",1:"Tenor Sax:",8:"BreathyTn.:",9:"St.Tenor Sax"},
{0:"Baritone Sax",1:"Bari. Sax:",8:"Bari & Tenor"},
{0:"Oboe",8:"Oboe Exp.",16:"Multi Reed"},
{0:"English Horn"},
{0:"Bassoon"},
{0:"Clarinet",8:"Bs Clarinet",16:"Multi Wind",17:"Quad Wind"},
{0:"Piccolo",1:"Piccolo:",8:"Nay",9:"Nay Tremolo",16:"Di"},
{0:"Flute",1:"Flute 2:",2:"Flute Exp.",3:"Flt Travelso",8:"Flute + Vln",9:"Pipe & Reed",16:"Tron Flute",17:"Indian Flute"},
{0:"Recorder"},
{0:"Pan Flute",8:"Kawala",16:"Zampona",17:"Zampona Atk",24:"Tin Whistle",25:"TinWhtsle Nm",26:"TinWhtsle Or"},
{0:"Bottle Blow"},
{0:"Shakuhachi",1:"Shakuhachi:"},
{0:"Whistle",1:"Whistle 2"},
{0:"Ocarina"},
{0:"Square Wave",1:"MG Square",2:"Hollow Mini",3:"Mellow FM",4:"CC Solo",5:"Shmoog",6:"LM Square",7:"JP8000 TWM",8:"2600 Sine",9:"Sine Lead",10:"KG Lead",11:"Twin Sine",16:"P5 Square",17:"OB Square",18:"JP-8 Square",19:"Dist Square",20:"303SquarDst1",21:"303SquarDst2",22:"303 Mix Sqr",23:"Dual Sqr&Saw",24:"Pulse Lead",25:"JP8 PulseLd1",26:"JP8 PulseLd2",27:"MG Reso. Pls",28:"JP8 PulseLd3",29:"260RingLead",30:"303DistLead",31:"JP8000DistLd",32:"HipHop SinLd",33:"HipHop SqrLd",34:"HipHop PlsLd",35:"Flux Pulse"},
{0:"Saw Wave",1:"OB2 Saw",2:"Pulse Saw",3:"Feline GR",4:"Big Lead",5:"Velo Lead",6:"GR-300",7:"LA Saw",8:"Doctor Solo",9:"Fat Saw Lead",10:"JP8000 Saw",11:"D-50 Fat Saw",12:"OB DoubleSaw",13:"JP DoubleSaw",14:"FatSawLead 2",15:"JP SuperSaw",16:"Waspy Synth",17:"PM Lead",18:"CS Saw Lead",24:"MG Saw 1",25:"MG Saw 2",26:"OB Saw 1",27:"OB Saw 2",28:"D-50 Saw",29:"SH-101 Saw",30:"CS Saw",31:"MG Saw Lead",32:"OB Saw Lead",33:"P5 Saw Lead",34:"MG unison",35:"Oct Saw Lead",36:"Natural Lead",40:"SequenceSaw1",41:"SequenceSaw2",42:"Reso Saw",43:"Cheese Saw 1",44:"Cheese Saw 2",45:"Rhythmic Saw",46:"SequencedSaw",47:"Techno Saw"},
{0:"Syn.Calliope",1:"Vent Synth",2:"Pure PanLead",8:"LM Pure Lead",9:"LM Blow Lead"},
{0:"Chiffer Lead",1:"TB Lead",2:"Hybrid Lead",3:"Unison SqrLd",4:"FatSolo Lead",5:"ForcefulLead",6:"Oct.UnisonLd",7:"Unison SawLd",8:"Mad Lead",9:"CrowdingLead",10:"Double Sqr."},
{0:"Charang",1:"Wire Lead",2:"FB.Charang",3:"Fat GR Lead",4:"Windy GR Ld",5:"Mellow GR Ld",6:"GR & Pulse",8:"Dist.Lead",9:"Acid Guitar1",10:"Acid Guitar2",11:"Dance Dst.Gt",12:"DanceDst.Gt2",16:"P5 Sync Lead",17:"Fat SyncLead",18:"Rock Lead",19:"5th DecaSync",20:"Dirty Sync",21:"DualSyncLead",22:"LA Brass Ld",24:"JUNO Sub Osc",25:"2600 Sub Osc",26:"JP8000Fd Osc"},
{0:"Solo Vox",1:"Solo Vox 2",8:"Vox Lead",9:"LFO Vox",10:"Vox Lead 2"},
{0:"5th Saw Wave",1:"Big Fives",2:"5th Lead",3:"5th Ana.Clav",4:"5th Pulse",5:"JP 5th Saw",6:"JP8000 5thFB",8:"4th Lead"},
{0:"Bass & Lead",1:"Big & Raw",2:"Fat & Perky",3:"JUNO Rave",4:"JP8 BsLead 1",5:"JP8 BsLead 2",6:"SH-5 Bs.Lead",7:"Delayed Lead"},
{0:"Fantasia",1:"Fantasia 2",2:"New Age Pad",3:"Bell Heaven",4:"Fantasia 3",5:"Fantasia 4",6:"After D !",7:"260HarmPad"},
{0:"Warm Pad",1:"Thick Matrix",2:"Horn Pad",3:"Rotary Strng",4:"OB Soft Pad",5:"Sine Pad",6:"OB Soft Pad2",8:"Octave Pad",9:"Stack Pad",10:"Human Pad",11:"Sync Brs.Pad",12:"Oct.PWM Pad",13:"JP Soft Pad"},
{0:"Polysynth",1:"80's PolySyn",2:"Polysynth 2",3:"Poly King",4:"Super Poly",8:"Power Stack",9:"Octave Stack",10:"Reso Stack",11:"Techno Stack",12:"Pulse Stack",13:"TwinOct.Rave",14:"Oct.Rave",15:"Happy Synth",16:"ForwardSweep",17:"ReverseSweep",24:"Minor Rave"},
{0:"Space Voice",1:"Heaven II",2:"SC Heaven",3:"Itopia",4:"Water Space",5:"Cold Space",6:"Noise Peaker",7:"Bamboo Hit",8:"Cosmic Voice",9:"Auh Vox",10:"AuhAuh",11:"Vocorderman"},
{0:"Bowed Glass",1:"SoftBellPad",2:"JP8 Sqr Pad",3:"7thBelPad",4:"Steel Glass",5:"Bottle Stack"},
{0:"Metal Pad",1:"Tine Pad",2:"Panner Pad",3:"Steel Pad",4:"Special Rave",5:"Metal Pad 2"},
{0:"Halo Pad",1:"Vox Pad",2:"Vox Sweep",8:"Horror Pad",9:"SynVox Pad",10:"SynVox Pad 2",11:"Breath&Rise",12:"Tears Voices"},
{0:"Sweep Pad",1:"Polar Pad",2:"Ambient BPF",3:"Sync Pad",4:"Warriors",8:"Converge",9:"Shwimmer",10:"Celestial Pd",11:"Bag Sweep",12:"Sweep Pipe",13:"Sweep Stack",14:"Deep Sweep",15:"Stray Pad"},
{0:"Ice Rain",1:"Harmo Rain",2:"African wood",3:"Anklung Pad",4:"Rattle Pad",5:"Saw Impulse",6:"Strange Str.",7:"FastFWD Pad",8:"Clavi Pad",9:"EP Pad",10:"Tambra Pad",11:"CP Pad"},
{0:"Soundtrack",1:"Ancestral",2:"Prologue",3:"Prologue 2",4:"Hols Strings",5:"HistoryWave",8:"Rave"},
{0:"Crystal",1:"Syn Mallet",2:"Soft Crystal",3:"Round Glock",4:"Loud Glock",5:"GlockenChime",6:"Clear Bells",7:"ChristmasBel",8:"Vibra Bells",9:"Digi Bells",10:"Music Bell",11:"Analog Bell",12:"Blow Bell",13:"Hyper Bell",16:"Choral Bells",17:"Air Bells",18:"Bell Harp",19:"Gamelimba",20:"JUNO Bell",21:"JP Bell",22:"Pizz Bell",23:"Bottom Bell"},
{0:"Atmosphere",1:"Warm Atmos",2:"Nylon Harp",3:"Harpvox",4:"HollowReleas",5:"Nylon+Rhodes",6:"Ambient Pad",7:"Invisible",8:"Pulsey Key",9:"Noise Piano",10:"Heaven Atmos",11:"Tambra Atmos"},
{0:"Brightness",1:"Shining Star",2:"OB Stab",3:"Brass Star",4:"Choir Stab",5:"D-50 Retour",6:"SouthernWind",7:"SymbolicBell",8:"Org Bell"},
{0:"Goblin",1:"Goblinson",2:"50's Sci-Fi",3:"Abduction",4:"Auhbient",5:"LFO Pad",6:"Random Str",7:"Random Pad",8:"LowBirds Pad",9:"Falling Down",10:"LFO RAVE",11:"LFO Horror",12:"LFO Techno",13:"Alternative",14:"UFO FX",15:"Gargle Man",16:"Sweep FX",17:"LM Has Come",18:"FallinInsect",19:"LFO Oct.Rave",20:"Just Before",21:"RND Fl.Chord",22:"RandomEnding",23:"Random Sine",24:"EatingFilter",25:"Noise&SawHit",26:"Pour Magic",27:"DancingDrill",28:"Dirty Stack",29:"Big Blue",30:"Static Hit",31:"Atl.Mod.FX",32:"Acid Copter"},
{0:"Echo Drops",1:"Echo Bell",2:"Echo Pan",3:"Echo Pan 2",4:"Big Panner",5:"Reso Panner",6:"Water Piano",7:"Echo SynBass",8:"Pan Sequence",9:"Aqua",10:"Panning Lead",11:"PanningBrass"},
{0:"Star Theme",1:"Star Theme 2",2:"Star Mind",3:"Star Dust",4:"Rep.Trance",5:"Etherality",6:"Mystic Pad",8:"Dream Pad",9:"Silky Pad",10:"Dream Pad 2",11:"Silky Pad 2",16:"New Century",17:"7th Atmos.",18:"Galaxy Way",19:"Rising OSC."},
{0:"Sitar",1:"Sitar 2",2:"Detune Sitar",3:"Sitar 3",4:"Sitar/Drone",5:"Sitar 4",8:"Tambra",16:"Tamboura"},
{0:"Banjo",1:"Muted Banjo",8:"Rabab",9:"San Xian",16:"Gopichant",24:"Oud",28:"Oud+Strings",32:"Pi Pa"},
{0:"Shamisen",1:"Tsugaru",8:"Syn Shamisen"},
{0:"Koto",1:"Gu Zheng",8:"Taisho Koto",16:"Kanoon",19:"Kanoon+Choir",24:"Oct Harp"},
{0:"Kalimba",8:"Sanza",9:"Bodhran",10:"Bodhran Mute"},
{0:"Bagpipe",8:"Didgeridoo",9:"Uillean Pipe",10:"UillnPipe Nm",11:"UillnPipe Or"},
{0:"Fiddle",8:"Er Hu",9:"Gao Hu"},
{0:"Shanai",1:"Shanai 2",8:"Pungi",16:"Hichiriki",24:"Mizmar",32:"Suona",33:"Suona 2"},
{0:"Tinkle Bell",8:"Bonang",9:"Gender",10:"Gamelan Gong",11:"St.Gamelan",12:"Jang Gu",13:"Jegogan",14:"Jublag",15:"Pemade",16:"RAMA Cymbal",17:"Kajar",18:"Kelontuk",19:"Kelontuk Mt",20:"Kelontuk Sid",21:"Kopyak Op",22:"Kopyak Mt",23:"Ceng Ceng",24:"Reyoung",25:"Kempur",32:"Jngl Crash",40:"Crash Menu",41:"RideCym Menu",42:"RideBellMenu"},
{0:"Agogo",8:"Atarigane",16:"Tambourine"},
{0:"Steel Drums",1:"Island Mlt"},
{0:"Woodblock",8:"Castanets",16:"Angklung",17:"Angkl Rhythm",24:"Finger Snaps",32:"909 HandClap",40:"HandClapMenu"},
{0:"Taiko",1:"Small Taiko",8:"Concert BD",9:"ConcertBD Mt",16:"Jungle BD",17:"Techno BD",18:"Bounce",24:"KendangWadon",25:"Bebarongan",26:"Pelegongan",27:"Dholak 1",28:"Dholak 2",32:"Jngl BD Roll",40:"Kick Menu 1",41:"Kick Menu 2",42:"Kick Menu 3",43:"Kick Menu 4"},
{0:"Melo. Tom 1",1:"Real Tom",2:"Real Tom 2",3:"Jazz Tom",4:"Brush Tom",8:"Melo. Tom 2",9:"Rock Tom",16:"Rash SD",17:"House SD",18:"Jungle SD",19:"909 SD",24:"Jngl SD Roll",40:"SD Menu 1",41:"SD Menu 2",42:"SD Menu 3",43:"SD Menu 4",44:"SD Menu 5"},
{0:"Synth Drum",8:"808 Tom",9:"Elec Perc",10:"Sine Perc.",11:"606 Tom",12:"909 Tom",13:"606 Dist.Tom"},
{0:"Reverse Cym.",1:"Reverse Cym2",2:"Reverse Cym3",3:"Reverse Cym4",8:"Rev.Snare 1",9:"Rev.Snare 2",16:"Rev.Kick 1",17:"Rev.ConBD",24:"Rev.Tom 1",25:"Rev.Tom 2",26:"Rev.Tom 3",27:"Rev.Tom 4",40:"Rev.SD Menu1",41:"Rev.SD Menu2",42:"Rev.SD Menu3",43:"Rev.BD Menu1",44:"Rev.BD Menu2",45:"Rev.BD Menu3",46:"Rev.ClapMenu"},
{0:"Gt.FretNoise",1:"Gt.Cut Noise",2:"String Slap",3:"Gt.CutNoise2",4:"Dist.CutNoiz",5:"Bass Slide",6:"Pick Scrape",8:"Gt. FX Menu",9:"Bartok Pizz.",10:"Guitar Slap",11:"Chord Stroke",12:"Biwa Stroke",13:"Biwa Tremolo",16:"A.Bs.Nz Menu",17:"D.Gt.Nz Menu",18:"E.Gt.NzMenu1",19:"E.Gt.NzMenu2",20:"G.StrokeMenu",21:"Gt.SlideMenu",22:"A.Bs.Mute Nz",23:"A.Bs.TouchNz",24:"A.Bs.AtackNz",25:"TC Up Nz",26:"TC DownMt.Nz",27:"TC UpMt.Nz",28:"TC Down Nz",29:"DstGT.Up Nz",30:"DstGT.DwnNz1",31:"DstGT.DwnNz2",32:"DstGT.MuteNz",34:"Gt.StrokeNz5",35:"StlGt.SldNz1",36:"StlGt.SldNz2",37:"StlGt.SldNz3",38:"StlGt.SldNz4",39:"Gt.StrokeNz1",40:"Gt.StrokeNz2",41:"Gt.StrokeNz3",42:"Gt.StrokeNz4"},
{0:"Breath Noise",1:"Fl.Key Click",2:"Brth Nz Menu",3:"Fl.Breath 1",4:"Fl.Breath 2",5:"Fl.Breath 3",6:"Vox Breath 1",7:"Vox Breath 2",8:"Trombone Nz",9:"Trumpet Nz"},
{0:"Seashore",1:"Rain",2:"Thunder",3:"Wind",4:"Stream",5:"Bubble",6:"Wind 2",7:"Cricket",16:"Pink Noise",17:"White Noise"},
{0:"Bird",1:"Dog",2:"Horse-Gallop",3:"Bird 2",4:"Kitty",5:"Growl",6:"Growl 2",7:"Fancy Animal",8:"Seal"},
{0:"Telephone 1",1:"Telephone 2",2:"DoorCreaking",3:"Door",4:"Scratch",5:"Wind Chimes",7:"Scratch 2",8:"ScratchKey",9:"TapeRewind",10:"Phono Noise",11:"MC-500 Beep",12:"Scratch 3",13:"Scratch 4",14:"Scratch 5",15:"Scratch 6",16:"Scratch 7"},
{0:"Helicopter",1:"Car-Engine",2:"Car-Stop",3:"Car-Pass",4:"Car-Crash",5:"Siren",6:"Train",7:"Jetplane",8:"Starship",9:"Burst Noise",10:"Calculating",11:"Perc. Bang",12:"Burner",13:"Glass & Glam",14:"Ice Ring",15:"Over Blow",16:"Crack Bottle",17:"Pour Bottle",18:"Soda",19:"Open CD Tray",20:"Audio Switch",21:"Key Typing",22:"SL 1",23:"SL 2",24:"Car Engine 2",25:"Car Horn",26:"Boeeeen",27:"R.Crossing",28:"Compresser",29:"Sword Boom!",30:"Sword Cross",31:"Stab! 1",32:"Stab! 2"},
{0:"Applause",1:"Laughing",2:"Screaming",3:"Punch",4:"Heart Beat",5:"Footsteps",6:"Applause 2",7:"Small Club",8:"ApplauseWave",9:"BabyLaughing",16:"Voice One",17:"Voice Two",18:"Voice Three",19:"Voice Tah",20:"Voice Whey",22:"Voice Kikit",23:"Voice ComeOn",24:"Voice Aou",25:"Voice Oou",26:"Voice Hie"},
{0:"Gun Shot",1:"Machine Gun",2:"Lasergun",3:"Explosion",4:"Eruption",5:"Big Shot",6:"Explosion 2"}
];
//#end

function _strip(s) {
  if (typeof s == 'undefined') s = '';
  return ' ' + s.toString().toLowerCase().replace(/\W+/g, ' ').trim() + ' ';
}

var _program = {};
for (i = 0; i < _instr.length; i++) _program[_strip(_instr[i])] = i;
for (i = 0; i < _group.length; i++) _program[_strip(_group[i])] = i * 8;
for (i in _more) if (_more.hasOwnProperty(i)) _program[_strip(i)] = _more[i];

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
  for (k in h) if (h.hasOwnProperty(k)) {
    q = _score(s, k);
    if (q > n || q == n && k.length < l) {
      l = k.length; m = h[k]; n = q;
    }
  }
  return [n, m];
}

var _noteValue = JZZ.MIDI.noteValue;

JZZ.MIDI.programName = function(n, m, l) {
  var s;
  if (n >= 0 && n <= 127) {
    if (typeof m == 'undefined' && typeof l == 'undefined') return _instr[n];
    if (!l) s = _gs[n][m];
    if (s) return s;
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
JZZ.MIDI.GM.allGS = function() {
  var ret = [];
  for (var i = 0; i < 128; i++) for (var k in _gs[i]) if (_gs[i].hasOwnProperty(k)) ret.push([i, parseInt(k), 0]);
  return ret;
};

});