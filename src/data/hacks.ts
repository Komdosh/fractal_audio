export type HackCategory =
  | 'CPU Headroom'
  | 'Routing & Scenes'
  | 'Delay & Space'
  | 'Cab & Tone'
  | 'Live Workflow'

export type HackSourceKey =
  | 'cpuUsage'
  | 'channels'
  | 'cabBlock'
  | 'driveBlock'
  | 'ampBlock'
  | 'filterBlock'
  | 'multiplexer'
  | 'scenes'
  | 'controlSwitches'
  | 'delayBlock'
  | 'inputImpedance'
  | 'sceneMidi'
  | 'productComparison'

export interface HackSource {
  name: string
  url: string
}

export interface DeviceHack {
  id: string
  category: HackCategory
  title: string
  summary: string
  appliesTo: string
  payoff: string
  chainMove: string
  steps: string[]
  caveat?: string
  blockIds: string[]
  sourceKeys: HackSourceKey[]
}

export const hackCategoryOrder: HackCategory[] = [
  'CPU Headroom',
  'Routing & Scenes',
  'Delay & Space',
  'Cab & Tone',
  'Live Workflow',
]

export const hackSources: Record<HackSourceKey, HackSource> = {
  cpuUsage: {
    name: 'CPU usage',
    url: 'https://wiki.fractalaudio.com/wiki/index.php?title=CPU',
  },
  channels: {
    name: 'Channels',
    url: 'https://wiki.fractalaudio.com/wiki/index.php?title=Presets#Channels',
  },
  cabBlock: {
    name: 'Cab block',
    url: 'https://wiki.fractalaudio.com/wiki/index.php?title=Cab_block',
  },
  driveBlock: {
    name: 'Drive block',
    url: 'https://wiki.fractalaudio.com/wiki/index.php?title=Drive_block',
  },
  ampBlock: {
    name: 'Amp block',
    url: 'https://wiki.fractalaudio.com/wiki/index.php?title=Amp_block',
  },
  filterBlock: {
    name: 'Filter block',
    url: 'https://wiki.fractalaudio.com/wiki/index.php?title=Filter_block',
  },
  multiplexer: {
    name: 'Multiplexer block',
    url: 'https://wiki.fractalaudio.com/wiki/index.php?title=Multiplexer_block',
  },
  scenes: {
    name: 'Scenes',
    url: 'https://wiki.fractalaudio.com/wiki/index.php?title=Presets#Scenes',
  },
  controlSwitches: {
    name: 'Control Switch',
    url: 'https://wiki.fractalaudio.com/wiki/index.php?title=Modifiers_and_controllers#Control_Switch',
  },
  delayBlock: {
    name: 'Delay block',
    url: 'https://wiki.fractalaudio.com/wiki/index.php?title=Delay_block',
  },
  inputImpedance: {
    name: 'Input and impedance block',
    url: 'https://wiki.fractalaudio.com/wiki/index.php?title=Input_and_impedance_block',
  },
  sceneMidi: {
    name: 'Scene MIDI block',
    url: 'https://wiki.fractalaudio.com/wiki/index.php?title=Scene_MIDI_block',
  },
  productComparison: {
    name: 'Axe-Fx III, FM9, FM3',
    url: 'https://wiki.fractalaudio.com/wiki/index.php?title=Axe-Fx_III%2C_FM9%2C_FM3',
  },
}

export const deviceHacks: DeviceHack[] = [
  {
    id: 'channels-over-bypass',
    category: 'CPU Headroom',
    title: 'Replace bypassed alternates with block channels',
    summary:
      'Do this first when a compact preset hits the ceiling: delete alternate blocks that are only parked for other scenes and move their settings into channels of one block.',
    appliesTo: 'FM3, FM9, Axe-Fx III',
    payoff:
      'Usually the biggest real CPU win, because a bypassed block still consumes CPU while duplicate instances keep the preset heavy.',
    chainMove:
      'One Drive, Delay, Reverb, Compressor, or PEQ block with scenes selecting channels A-D. Keep extra instances only when they must run at the same time.',
    steps: [
      'Audit blocks that are never heard simultaneously.',
      'Copy their settings into channels of one shared block, then assign scene channel selection.',
      'Measure CPU on every scene after selecting the real channels, because CPU is based on the current channel.',
    ],
    caveat:
      'Do not merge blocks that need independent spillover, parallel audio, or different grid positions.',
    blockIds: ['drive', 'delay', 'reverb', 'amp'],
    sourceKeys: ['cpuUsage', 'channels'],
  },
  {
    id: 'amp-input-boost',
    category: 'CPU Headroom',
    title: 'Use Amp Input Boost for clean TS-style pushes',
    summary:
      'For the classic Drive at zero and Level up boost before a dirty amp, use the Amp block Input Boost instead of a separate Drive block.',
    appliesTo: 'FM3, FM9, Axe-Fx III',
    payoff:
      'Keeps the EQ push of common boost pedals while saving a Drive block slot and its CPU.',
    chainMove:
      'Input -> Amp with Input Boost set to T808, T808 Mod, Grinder, Shred, Neutral, or another boost type -> Cab.',
    steps: [
      'Start with the Amp block boost type closest to the drive you would have used.',
      'Set Boost Level for the push into the amp, then reduce Amp Gain if the low end gets congested.',
      'Use scenes or a modifier on the Boost switch for rhythm/lead changes.',
    ],
    caveat:
      'This is not the clipping stage of the Drive block. Keep a Drive block when its distortion, Mix, Dry Level, or advanced controls are part of the tone.',
    blockIds: ['amp', 'drive'],
    sourceKeys: ['driveBlock', 'ampBlock'],
  },
  {
    id: 'cab-accelerator',
    category: 'CPU Headroom',
    title: 'Stay inside the main Cab block on FM3/FM9',
    summary:
      'Use one Cab block with its two IR or DynaCab slots before adding another cab path.',
    appliesTo: 'FM3, FM9, Axe-Fx III',
    payoff:
      'The main Cab processing on FM3/FM9 is offloaded from core DSP; the second Cab block on FM9 is not, and bypassing Cab does not save CPU.',
    chainMove:
      'Amp -> Cab with two mixed/panned slots -> post effects. If you always use a real guitar cab, remove the Cab block or disable cabinet modeling globally.',
    steps: [
      'Build two-cab blends inside one Cab block using per-slot Level, Pan, Mute, and Solo.',
      'Keep Room Level low or off when CPU is tight; use it only if it replaces another ambience block you would otherwise keep.',
      'Remove unused Cab blocks instead of bypassing them.',
    ],
    caveat:
      'Axe-Fx III has more cab options and the IR Player block. Use the full Cab block when you need its mixer, preamp, room, or DynaCab workflow.',
    blockIds: ['cab', 'ir-player'],
    sourceKeys: ['cabBlock', 'cpuUsage', 'productComparison'],
  },
  {
    id: 'merge-wet-rows',
    category: 'CPU Headroom',
    title: 'Do not drag parallel rows to the output unless they must stay separate',
    summary:
      'Split only around the wet effect and merge back before the rest of the chain.',
    appliesTo: 'FM3, FM9, Axe-Fx III',
    payoff:
      'Shorter parallel paths reduce shunt overhead and make routing easier to debug.',
    chainMove:
      'Dry row -> split to Delay/Reverb at Mix 100% -> Mixer or row merge -> Output, instead of long shunted rows across the grid.',
    steps: [
      'Keep the dry path on one primary row.',
      'Create a parallel row only where the wet-only effect actually starts.',
      'Merge immediately after the wet section if downstream blocks do not need separate rows.',
    ],
    caveat:
      'Keep rows separate for true wet/dry/wet outputs, separate hardware sends, or frequency-band rigs.',
    blockIds: ['mixer', 'delay', 'reverb'],
    sourceKeys: ['cpuUsage'],
  },
  {
    id: 'delay-reverb-triage',
    category: 'CPU Headroom',
    title: 'Trim delay and reverb load with targeted parameters',
    summary:
      'When the sound is close but CPU is marginal, cut optional processing before downgrading the core tone.',
    appliesTo: 'FM3, FM9, Axe-Fx III',
    payoff:
      'Preserves the preset identity while removing features that really add processing cost.',
    chainMove:
      'Use Echo Plate/Hall/Room as a one-block echo+space, reduce Reverb density/dispersion when the wash is not exposed, disable Delay Compander when you do not need BBD/DMM character, and reduce Delay Diffusion where available.',
    steps: [
      'Check Delay/Reverb CPU after selecting the highest-load scene.',
      'Turn off Delay Compander on clean digital delays unless its transient shaping is part of the sound.',
      'Reduce delay diffusion, reverb density, plate dispersion, or unused multi-delay voices before changing the musical block order.',
    ],
    caveat:
      'Some analog-style delay types use compansion for the modeled behavior. Do not disable it blindly on DMM, DM-2, or Carbon Copy style sounds.',
    blockIds: ['delay', 'reverb', 'plex-delay', 'multitap-delay'],
    sourceKeys: ['cpuUsage', 'delayBlock'],
  },
  {
    id: 'mux-crossfade',
    category: 'Routing & Scenes',
    title: 'Use MUX as a gapless source or row switcher',
    summary:
      'The Multiplexer selects one row, physical input, or USB source and crossfades quickly.',
    appliesTo: 'FM3, FM9, Axe-Fx III',
    payoff:
      'Cleaner A/B routing than muting rows, especially when switching two Amp rows on Axe-Fx III/FM9.',
    chainMove:
      'Parallel Row A/B -> MUX -> shared Cab/post FX. On FM3, use it for alternate input/source rows rather than dual amp blocks.',
    steps: [
      'Feed the alternate rows into different MUX inputs.',
      'Set each MUX channel to the row or source needed by that scene.',
      'Attach a modifier to Input Select for pedal or switch-controlled source selection.',
    ],
    caveat:
      'Only one MUX input is active. Use Mixer when you need simultaneous inputs.',
    blockIds: ['multiplexer', 'amp', 'mixer'],
    sourceKeys: ['multiplexer'],
  },
  {
    id: 'scene-controllers',
    category: 'Routing & Scenes',
    title: 'Make one parameter hold scene-specific values',
    summary:
      'Scene Controllers let one modifiable parameter take different values per scene.',
    appliesTo: 'FM3, FM9, Axe-Fx III',
    payoff:
      'One block can behave like several scene-specific variants without adding more blocks.',
    chainMove:
      'Attach Scene Controller 1 to Reverb Mix, Delay Feedback, Amp Input Trim, Pitch amount, or a crossfade level; then set values per scene in Controllers.',
    steps: [
      'Pick one parameter that changes between scenes but does not require a different block type.',
      'Attach a Scene Controller in the modifier menu and set Min/Max to the usable range.',
      'Fill the controller values per scene and verify every transition by ear.',
    ],
    caveat:
      'Modifiers are not always a CPU win. The CPU page notes that modifiers on Amp Gain add CPU, so use this for expressive control, not blanket optimization.',
    blockIds: ['reverb', 'delay', 'amp', 'pitch'],
    sourceKeys: ['scenes', 'controlSwitches', 'cpuUsage'],
  },
  {
    id: 'control-switch-last',
    category: 'Routing & Scenes',
    title: 'Use Control Switch Last for sticky live overrides',
    summary:
      'Control Switches can be modifier sources, can be mutually exclusive, and can store On, Off, or Last per scene.',
    appliesTo: 'FM3, FM9, Axe-Fx III with onboard or FC switches',
    payoff:
      'A solo lift, delay throw, or gain morph can survive a scene change only when you want it to.',
    chainMove:
      'CS1 -> Delay Input Gain, Output Level, or a Mixer level. Set scenes that should not reset it to Last. Put mode switches in a mutually exclusive CS group.',
    steps: [
      'Assign the Control Switch as the modifier source for the parameter you want to override.',
      'Set the switch to latching or momentary depending on the job.',
      'Use CS Per Scene to decide which scenes force it on, force it off, or leave the current state alone.',
    ],
    caveat:
      'Use clear switch labels. Last is powerful, but it can confuse a live layout if the state is not visible.',
    blockIds: ['delay', 'output', 'mixer'],
    sourceKeys: ['controlSwitches'],
  },
  {
    id: 'delay-trails-only',
    category: 'Delay & Space',
    title: 'Put effects on delay trails only',
    summary:
      'For chorus, shimmer, phaser, pitch, or reverb on repeats without washing the dry amp, process only the parallel delay return.',
    appliesTo: 'FM3, FM9, Axe-Fx III',
    payoff:
      'Cleaner dry tone with more dramatic wet trails.',
    chainMove:
      'Dry path continues straight. Parallel path: Delay at Mix 100% -> Chorus/Pitch/Reverb/Phaser -> Mixer.',
    steps: [
      'Place Delay on a parallel row and set Mix to 100%.',
      'Put the trail-only effect after the Delay on that row.',
      'Blend the wet row back with a Mixer or row level, then check mono and scene levels.',
    ],
    caveat:
      'Watch phase and level when recombining wet paths, especially with stereo widening or phase-reversed delay types.',
    blockIds: ['delay', 'reverb', 'pitch', 'mixer'],
    sourceKeys: ['delayBlock'],
  },
  {
    id: 'delay-input-gain-fade',
    category: 'Delay & Space',
    title: 'Fade delay send, not delay output',
    summary:
      'Assign a pedal or switch to Delay Input Gain when you want trails to fade naturally.',
    appliesTo: 'FM3, FM9, Axe-Fx III',
    payoff:
      'The repeats already in the buffer continue while new repeats stop.',
    chainMove:
      'External controller -> Delay Input Gain. Heel or off mutes the send; feedback and trails decay normally.',
    steps: [
      'Open the Delay block modifier for Input Gain.',
      'Assign the expression pedal, external controller, or Control Switch.',
      'Leave Bypass alone if the goal is tail preservation rather than hard muting.',
    ],
    caveat:
      'If the downstream scene changes block channel or removes the delay path, trails can still change or stop.',
    blockIds: ['delay'],
    sourceKeys: ['delayBlock', 'controlSwitches'],
  },
  {
    id: 'reverb-as-delay',
    category: 'Delay & Space',
    title: 'Turn Reverb pre-delay into a one-block echo',
    summary:
      'Current firmware gives Reverb Pre-Delay tempo, feedback, and mix parameters; Echo Plate, Echo Hall, and Echo Room demonstrate the idea.',
    appliesTo: 'FM3, FM9, Axe-Fx III',
    payoff:
      'A compact ambience block can be both reverb and a simple echo.',
    chainMove:
      'Post-cab Reverb set to Echo Plate, Echo Hall, or Echo Room, with scenes or an expression pedal moving between short room and rhythmic echo.',
    steps: [
      'Start from an Echo-style Reverb type.',
      'Tempo-sync Pre-Delay and set Feedback for the repeat count.',
      'Use Reverb Mix and Pre-Delay Mix as the scene or expression-pedal targets.',
    ],
    caveat:
      'Use a dedicated Delay block for complex dual, ducked, tape, reverse, or hold/stack behavior.',
    blockIds: ['reverb', 'delay'],
    sourceKeys: ['delayBlock', 'cpuUsage'],
  },
  {
    id: 'delay-2290-mono',
    category: 'Delay & Space',
    title: 'Fix the disappearing 2290 delay before it wastes a rehearsal',
    summary:
      'The 2290 W/ Mod delay type phase-reverses the right wet channel, so a later mono-summing block or output can cancel the repeats.',
    appliesTo: 'FM3, FM9, Axe-Fx III',
    payoff:
      'Keeps the classic 2290 width in stereo, or keeps repeats audible when the rig has to run mono.',
    chainMove:
      'In mono rigs, put 2290 after mono-summing blocks or set Phase Reverse to None. Test Output SUM L+R before the gig.',
    steps: [
      'If the 2290 delay vanishes, check whether a later Amp, Cab, Drive, or output is summing left and right.',
      'Move the delay after the mono block, keep the path stereo, or set Phase Reverse to None.',
      'Store a mono-safe channel if the same preset must cover stereo and mono stages.',
    ],
    caveat:
      'Turning Phase Reverse off changes part of the 2290 character, so keep a stereo channel for the real sound.',
    blockIds: ['delay', 'cab', 'amp'],
    sourceKeys: ['delayBlock'],
  },
  {
    id: 'input-z-tone',
    category: 'Cab & Tone',
    title: 'Treat Input Z like a pickup-loading tone control',
    summary:
      'On variable-impedance units, Auto/Input Z changes the analog input loading based on the first active effect.',
    appliesTo: 'Axe-Fx III, FM9, VP4, AM4. FM3 input impedance is fixed.',
    payoff:
      'Can soften top end and change pickup feel before any digital block, especially with fuzz and treble-booster tones.',
    chainMove:
      'For fuzz or vintage front-end colors, try lower Input Z values before the Drive/Amp. On FM3, use Drive and Filter EQ instead.',
    steps: [
      'Start in Auto so the first active impedance-aware effect can set the loading.',
      'Manually try lower impedance values for fuzz, treble boost, or spiky single-coil rigs.',
      'A/B with the guitar volume rolled down; the pickup interaction is part of the sound.',
    ],
    caveat:
      'Input Z affects the instrument input. The Amp block input impedance remains fixed like a tube amp input.',
    blockIds: ['input', 'drive', 'filter'],
    sourceKeys: ['inputImpedance', 'ampBlock', 'driveBlock'],
  },
  {
    id: 'looper-cab-audition',
    category: 'Cab & Tone',
    title: 'Use Looper plus Cab Scratch-Pads for IR auditions',
    summary:
      'Record a representative phrase, loop it, then audition cabs or IRs without playing and without overwriting user cab slots.',
    appliesTo: 'FM3, FM9, Axe-Fx III',
    payoff:
      'Faster, more honest cab choices because every cab hears the same performance.',
    chainMove:
      'Input -> Amp -> Cab. Add Looper before the section you are testing or at the end, record, then switch DynaCab mic position, Legacy IR, or Scratch-Pad slot.',
    steps: [
      'Record a riff that contains palm mutes, open chords, and lead notes.',
      'Loop it while moving DynaCab mic position, changing IRs, or loading Scratch-Pad IRs.',
      'Save only the cabs that win after the looped comparison.',
    ],
    caveat:
      'Scratch-Pads are temporary and erased on power-off. Back up user cabs before bulk cleanup.',
    blockIds: ['looper', 'cab'],
    sourceKeys: ['cabBlock'],
  },
  {
    id: 'filter-clean-boost',
    category: 'Cab & Tone',
    title: 'Use Filter Null as a low-CPU clean boost or EQ push',
    summary:
      'A Filter block set to Null can act as a simple level boost, and Peaking mode can create classic mid-boost front-end shapes.',
    appliesTo: 'FM3, FM9, Axe-Fx III',
    payoff:
      'A small utility block can replace a heavier or more complicated boost setup when you only need level or EQ.',
    chainMove:
      'Pre-amp Filter set to Null for clean level, or Peaking around 800 Hz to 1 kHz for focused 80s/Boston-style push.',
    steps: [
      'Use Null with Level assigned to a switch for a transparent boost.',
      'Use Peaking with moderate Q and gain before a Plexi or high-gain amp for a more vocal front end.',
      'Compare against Amp Input Boost and keep the simpler option that gets the sound.',
    ],
    caveat:
      'Amp Input Boost costs less CPU than adding a Filter. Use Filter when you need adjustable EQ or a boost outside the Amp input.',
    blockIds: ['filter', 'amp'],
    sourceKeys: ['filterBlock', 'ampBlock'],
  },
  {
    id: 'performance-page-backup',
    category: 'Live Workflow',
    title: 'Back up a Global Performance page inside an empty preset',
    summary:
      'Copy Global Performance Controls to Per-Preset controls in an empty preset, save it, and copy them back later.',
    appliesTo: 'FM3, FM9, Axe-Fx III',
    payoff:
      'A practical rollback point before changing a live control surface.',
    chainMove:
      'Create a utility preset named PERF BACKUP, copy the current Global Performance controls into its Per-Preset page, and save.',
    steps: [
      'Before a layout experiment, open the editor Performance view.',
      'Copy Global controls to Per-Preset controls in an empty preset.',
      'After experiments, copy them back or reload the Per-Preset controls from the library.',
    ],
    caveat:
      'Global controls auto-save as system settings. Treat this like a settings backup, not a tone preset.',
    blockIds: [],
    sourceKeys: ['productComparison'],
  },
  {
    id: 'scene-midi-automation',
    category: 'Live Workflow',
    title: 'Use Scene MIDI for rack or self-automation',
    summary:
      'Scene MIDI can send PC or CC messages on scene changes, and the messages can vary per scene.',
    appliesTo: 'FM3, FM9, Axe-Fx III',
    payoff:
      'Extends scenes to external gear or special commands that are not represented by normal scene data.',
    chainMove:
      'Add Scene MIDI unconnected to the grid, assign per-scene PC/CC messages, and use MIDI DIN out. For self-control, patch MIDI OUT to MIDI IN and test in a copy of the preset.',
    steps: [
      'Create the Scene MIDI block and leave it unconnected from audio.',
      'Map each scene to the external command that should fire on selection.',
      'Document the MIDI map in the preset name or performance notes before using it live.',
    ],
    caveat:
      'The Scene MIDI block sends DIN MIDI, not USB. Self-control via loopback can surprise you, so validate it away from a live rig first.',
    blockIds: ['scene-midi'],
    sourceKeys: ['sceneMidi'],
  },
]
