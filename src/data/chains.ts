// Signal-chain templates and preset recipes. Each chain is a sequence of
// blocks (by id from src/data/blocks.ts) with role notes. The order reflects
// signal flow from guitar → output.

export interface ChainStep {
  blockId: string
  label?: string
  note: string
}

export type SignalChainDifficulty = 'Quick build' | 'Intermediate' | 'Advanced'

export interface SignalChain {
  id: string
  name: string
  group: string
  tags: string[]
  difficulty: SignalChainDifficulty
  routing: string
  productNote?: string
  vibe: string
  description: string
  steps: ChainStep[]
}

export const signalChainGroups = [
  'Clean & edge',
  'Drive & lead',
  'Heavy',
  'Ambient',
  'Modulation',
  'Bass & direct',
  'Performance',
] as const

export const signalChains: SignalChain[] = [
  {
    id: 'clean-pristine',
    name: 'Pristine Clean',
    group: 'Clean & edge',
    tags: ['clean', 'studio', 'stereo', 'plate', 'single-coils'],
    difficulty: 'Quick build',
    routing: 'Serial',
    vibe: 'Studio-clean Strat/Tele, fingerstyle, jazz comping',
    description:
      'A wide, polished clean rig: light compression to even out picking, a glassy Deluxe-style amp, modulation for movement, and a touch of plate reverb. Sits beautifully in stereo.',
    steps: [
      { blockId: 'compressor', label: 'OptoComp', note: 'Light, transparent compression to even out fingerstyle dynamics.' },
      { blockId: 'amp', label: 'Deluxe Verb (Cygnus X-3)', note: 'Classic mid-60s clean voicing, low gain, tonestack noon.' },
      { blockId: 'cab', label: '1x12 + Ribbon/SM57 mix', note: 'Two DynaCab mics blended for body and presence.' },
      { blockId: 'chorus', label: 'Dimension-style', note: 'Subtle stereo width — depth ~25%, slow rate.' },
      { blockId: 'delay', label: 'Analog Mono', note: 'Quarter-note, two repeats, mix 15%. Adds depth, not echo.' },
      { blockId: 'reverb', label: 'Studio Plate', note: 'Time ~2.5s, predelay 30 ms, mix 25%. Modern glossy plate.' },
    ],
  },
  {
    id: 'edge-pedal-platform',
    name: 'Edge-of-Breakup Pedal Platform',
    group: 'Clean & edge',
    tags: ['edge-of-breakup', 'pedals', 'blues', 'club', 'dynamic'],
    difficulty: 'Quick build',
    routing: 'Serial',
    vibe: 'Boutique combo feel for blues, indie rhythm, and touch-sensitive leads',
    description:
      'A barely-breaking amp that takes boost and drive blocks like a real pedal platform. Keep the amp honest, then let scene-controlled drives create the gain range.',
    steps: [
      { blockId: 'wahwah', label: 'Optional parked wah', note: 'Use a real expression wah or park it around 35-45% for mid focus.' },
      { blockId: 'compressor', label: 'Low-ratio pedal comp', note: 'Only enough compression to pull single-note lines forward.' },
      { blockId: 'drive', label: 'Klone Chiron into Blues OD', note: 'Run Klone as a low-gain lift and Blues OD as the second gain stage.' },
      { blockId: 'amp', label: 'Deluxe Verb / Morgan AC20', note: 'Gain just above breakup; use guitar volume for clean-up.' },
      { blockId: 'cab', label: '1x12 open back', note: 'Ribbon plus dynamic mic, not too bright.' },
      { blockId: 'delay', label: 'Analog Stereo', note: 'Quarter note or dotted eighth, 2-3 repeats, low mix.' },
      { blockId: 'reverb', label: 'Medium Spring or Plate', note: 'Spring for roots, plate for more studio polish.' },
    ],
  },
  {
    id: 'nashville-slapback',
    name: 'Nashville Slapback Clean',
    group: 'Clean & edge',
    tags: ['country', 'slapback', 'telecaster', 'clean', 'live'],
    difficulty: 'Quick build',
    routing: 'Serial',
    vibe: 'Chicken-pickin Tele, country rhythm, fast clean leads',
    description:
      'A fast, bright clean chain with tight compression and a short mono slap. It should feel percussive rather than wide or washy.',
    steps: [
      { blockId: 'compressor', label: 'Dynami-Comp style', note: 'Use enough squash for snap, but keep pick attack intact.' },
      { blockId: 'amp', label: 'Tweed / Blackface clean', note: 'Set bright but not ice-picky; use mids to keep the guitar present.' },
      { blockId: 'cab', label: '1x12 or 2x12 open back', note: 'Dynamic mic near cap-edge for bite.' },
      { blockId: 'graphic-eq', label: 'Post-cab trim', note: 'Cut harsh 3-4 kHz if the bridge pickup gets spiky.' },
      { blockId: 'delay', label: 'Mono Tape Slap', note: '80-120 ms, one or two repeats, mix 12-18%.' },
      { blockId: 'reverb', label: 'Small Spring', note: 'Short decay; it should read as amp ambience.' },
    ],
  },
  {
    id: 'classic-rock',
    name: 'Classic Rock Crunch',
    group: 'Drive & lead',
    tags: ['classic-rock', 'plexi', 'crunch', 'boost', 'live'],
    difficulty: 'Quick build',
    routing: 'Serial',
    vibe: 'AC/DC, Led Zep, Aerosmith, Stones',
    description:
      'Plexi-style breakup with a clean boost in front for solos. Cab is a 4x12 Greenback. Slap-back delay and room reverb finish it.',
    steps: [
      { blockId: 'drive', label: 'FAS Boost (clean boost)', note: 'Drive 0, Level 7. Engaged for solos to push the amp.' },
      { blockId: 'amp', label: 'Plexi 1959 Hi', note: 'Master ~6, Gain 7, Bass 5, Mid 7, Treble 5.' },
      { blockId: 'cab', label: '4x12 Greenback (SM57 cap-edge)', note: 'Single IR at cap-edge for that British snarl.' },
      { blockId: 'delay', label: 'Tape Slap', note: '~110 ms, 2 repeats, mix 20%, modest drive.' },
      { blockId: 'reverb', label: 'Small Room', note: 'Time 1.8s, mix 15%. Sounds like a club, not a cathedral.' },
    ],
  },
  {
    id: 'eighties-rack-lead',
    name: '80s Rack Lead',
    group: 'Drive & lead',
    tags: ['lead', 'rack', 'stereo', '2290', 'chorus'],
    difficulty: 'Intermediate',
    routing: 'Serial with stereo post effects',
    vibe: 'Lukather, Landau, studio lead tones, polished sustain',
    description:
      'A hot-rodded amp with post-cab chorus, 2290-style delay, and plate reverb. The trick is keeping modulation after the cab so the gain stays focused.',
    steps: [
      { blockId: 'drive', label: 'BB Pre or T808', note: 'Use low drive and higher level to add sustain before the amp.' },
      { blockId: 'amp', label: 'Brit 800 / CAE / Soldano family', note: 'Moderate gain; let delay and reverb make it big.' },
      { blockId: 'cab', label: '4x12 V30 or Greenback', note: 'Blend 57 and ribbon for cut plus body.' },
      { blockId: 'chorus', label: 'Dimension or Tri-Chorus', note: 'Post-cab, low depth, stereo spread wide.' },
      { blockId: 'delay', label: '2290 W/ Modulation', note: 'Dotted eighth or 380-450 ms, ducked if available.' },
      { blockId: 'reverb', label: 'London Plate', note: 'Predelay 30-50 ms so the lead stays up front.' },
    ],
  },
  {
    id: 'parallel-clean-fuzz',
    name: 'Parallel Clean + Fuzz',
    group: 'Drive & lead',
    tags: ['fuzz', 'parallel', 'garage', 'indie', 'texture'],
    difficulty: 'Advanced',
    routing: 'Parallel rows into Mixer',
    vibe: 'Massive fuzz while the dry attack stays intelligible',
    description:
      'Split the signal before the amp: one row stays cleanish, one row gets heavy fuzz. Blend them back after cab/EQ so chords do not collapse into noise.',
    steps: [
      { blockId: 'drive', label: 'Face Fuzz / Big Muff family', note: 'Put the fuzz on the dirty row and tune its tone darker than expected.' },
      { blockId: 'amp', label: 'Clean platform amp', note: 'Use enough headroom that the clean row keeps definition.' },
      { blockId: 'cab', label: 'Shared cab or dual cab lanes', note: 'Use a brighter mic for clean and darker mic for fuzz if using two lanes.' },
      { blockId: 'filter', label: 'Fuzz row high/low cut', note: 'Cut sub lows and fizz before the blend.' },
      { blockId: 'mixer', label: 'Blend clean attack', note: 'Start 45% clean / 55% fuzz, then adjust by song.' },
      { blockId: 'reverb', label: 'Room after blend', note: 'One shared room glues the rows together.' },
    ],
  },
  {
    id: 'modern-high-gain',
    name: 'Modern High-Gain',
    group: 'Heavy',
    tags: ['metal', 'djent', 'tight', 'gate', 'lead'],
    difficulty: 'Intermediate',
    routing: 'Serial with scene-controlled ambience',
    vibe: 'Djent, prog metal, Polyphia / Periphery / Plini territory',
    description:
      'Tight, percussive rhythm tone — boosted Recto/5150, gate to clamp palm-mute decay, surgical PEQ to remove mud, delay/reverb on a parallel mix.',
    steps: [
      { blockId: 'gate-expander', label: 'Intelligent Gate', note: 'Threshold ~-55 dB. Tight cleanup between chugs.' },
      { blockId: 'drive', label: 'T808 MOD', note: 'Drive 1, Tone 5, Level max. Used as a "tightener" — not for grit.' },
      { blockId: 'amp', label: 'USA Lead 1+ / 5153 Red', note: 'High gain, Master low, Depth ~7 for low-end thump.' },
      { blockId: 'cab', label: '4x12 V30 (57 + 421 blend)', note: 'DynaCab — V30 cab, two mics offset for fullness.' },
      { blockId: 'parametric-eq', label: 'Surgical cut', note: '-3 dB @ 250 Hz to clear mud, +1 dB shelf @ 4 kHz for clarity.' },
      { blockId: 'delay', label: 'Stereo Digital', note: 'Dotted 1/8, low mix (~15%) for lead use only.' },
      { blockId: 'reverb', label: 'Large Hall', note: 'Time 3s, mix 12%. Adds depth without smearing rhythm parts.' },
    ],
  },
  {
    id: 'drop-tuned-rhythm',
    name: 'Drop-Tuned Rhythm Wall',
    group: 'Heavy',
    tags: ['metal', 'drop-tuning', 'tight', 'quad-tracking', 'fm3'],
    difficulty: 'Intermediate',
    routing: 'Serial',
    vibe: 'Low-tuned rhythm, modern metalcore, precise palm-mutes',
    description:
      'A lower-tuned chain that keeps the front end controlled and uses post-cab EQ to avoid woof. Works well with physical down-tuning or Virtual Capo at conservative shifts.',
    steps: [
      { blockId: 'pitch', label: 'Virtual Capo only if needed', note: 'Use small shifts when possible; physical tuning tracks tighter for fast rhythm.' },
      { blockId: 'gate-expander', label: 'Input cleanup', note: 'Set release fast enough for stops but not so fast it chatters.' },
      { blockId: 'drive', label: 'Precision / Screamer tightener', note: 'Low drive, high level, tone around noon or slightly bright.' },
      { blockId: 'amp', label: '5153 / Recto / PVH family', note: 'Less gain than solo practice; tightness comes from the chain.' },
      { blockId: 'cab', label: 'V30 4x12', note: 'Keep low cut near 80-100 Hz and high cut around 8-10 kHz.' },
      { blockId: 'parametric-eq', label: 'Mud and fizz control', note: 'Narrow cuts around 180-300 Hz and harsh upper mids as needed.' },
    ],
  },
  {
    id: 'ambient-pad',
    name: 'Ambient Pad',
    group: 'Ambient',
    tags: ['ambient', 'swell', 'shimmer', 'stereo', 'worship'],
    difficulty: 'Intermediate',
    routing: 'Serial into long-tail ambience',
    vibe: 'Post-rock walls, Eno-style swells, shimmer pads',
    description:
      'Volume swell-in clean signal feeding a Plex Delay (octave-stacked taps) and a long, modulated hall with shimmer. The Reverb block has a built-in pitch shifter — set Pitch Mix high for that classic shimmer wash.',
    steps: [
      { blockId: 'volume-pan', label: 'Swell pedal', note: 'Tied to Expression Pedal 1 — fade in attack.' },
      { blockId: 'amp', label: 'Class-A Clean (e.g., AC20)', note: 'Edge-of-breakup, Master high, Gain low.' },
      { blockId: 'cab', label: '2x12 Blue Alnico', note: 'Single IR, ribbon mic — soft, full clean tone.' },
      { blockId: 'plex-delay', label: 'Octave Plex', note: 'Pitch taps at +12 and +19 — cascading harmonized cloud.' },
      { blockId: 'reverb', label: 'Cathedral + Shimmer', note: 'Time 8s, Pitch Mix 30% with Pitch Shift +12, Mod Depth ~20%.' },
    ],
  },
  {
    id: 'shoegaze-reverse-wall',
    name: 'Shoegaze Reverse Wall',
    group: 'Ambient',
    tags: ['shoegaze', 'reverse', 'wall-of-sound', 'fuzz', 'stereo'],
    difficulty: 'Advanced',
    routing: 'Serial, optionally split before ambience',
    vibe: 'Reverse smear, fuzz bloom, washed-out chords',
    description:
      'A deliberately unstable texture chain: fuzz or drive feeds reverse delay, modulation, and long reverb. Keep a low-cut before ambience so the wash stays musical.',
    steps: [
      { blockId: 'drive', label: 'Big Muff / Rat style', note: 'Use enough sustain to smear chord attacks.' },
      { blockId: 'amp', label: 'Clean or low-gain amp', note: 'Avoid too much preamp gain or the reverse delay becomes mush.' },
      { blockId: 'cab', label: 'Dark 2x12 or 4x12', note: 'Round off harsh fuzz before the ambience stack.' },
      { blockId: 'delay', label: 'Reverse Delay', note: 'Feedback 0-25%, mix high for obvious backwards movement.' },
      { blockId: 'flanger', label: 'Slow wide sweep', note: 'Post-delay modulation adds movement to the wall.' },
      { blockId: 'reverb', label: 'Huge Hall / Deep Space', note: 'Long time, high diffusion, low high-cut.' },
    ],
  },
  {
    id: 'frippertronics-hold',
    name: 'Frippertronics Hold Bed',
    group: 'Ambient',
    tags: ['ambient', 'looping', 'hold', 'soundscape', 'performance'],
    difficulty: 'Advanced',
    routing: 'Feedback-style performance chain',
    productNote: 'Send/Return feedback routing needs careful level control.',
    vibe: 'Slow tape-loop-inspired beds for solo performance',
    description:
      'A performance patch for building sustained layers without a DAW. Use Stack/Hold in delay or reverb, then feed controlled repeats into a looper.',
    steps: [
      { blockId: 'volume-pan', label: 'Swell input', note: 'Fade in phrases so the loop bed has no pick attack.' },
      { blockId: 'delay', label: 'Stereo Tape with Hold', note: 'Set long time, moderate feedback, and map Hold/Stack to a footswitch.' },
      { blockId: 'plex-delay', label: 'Diffuse pitch bed', note: 'Low mix until you want the loop to bloom.' },
      { blockId: 'send-return', label: 'Controlled feedback path', note: 'Use very low return level; raise only during performance moments.' },
      { blockId: 'looper', label: 'Capture bed', note: 'Record the texture, then switch to a clearer lead scene.' },
    ],
  },
  {
    id: 'funk-wah',
    name: 'Funk / Auto-Wah',
    group: 'Modulation',
    tags: ['funk', 'auto-wah', 'clean', 'filter', 'single-coils'],
    difficulty: 'Quick build',
    routing: 'Serial',
    vibe: '70s funk rhythm, modern neo-soul comping',
    description:
      'Tight clean Fender voicing with an envelope-driven filter that responds to picking dynamics. Compressor sets a consistent attack.',
    steps: [
      { blockId: 'compressor', label: 'Studio FET (1176)', note: 'Fast attack, ratio 4:1 — snappy funk transients.' },
      { blockId: 'filter', label: 'Auto-Wah (Lowpass envelope)', note: 'Envelope Depth high, fast attack/release — quacks with each pluck.' },
      { blockId: 'amp', label: 'Tweed Bassman', note: 'Clean to edge-of-breakup. Mids high for cut.' },
      { blockId: 'cab', label: '4x10 Bassman + 57', note: 'Single mic, classic mid-forward voicing.' },
      { blockId: 'delay', label: 'Mono Tape Slap', note: '~80 ms, 2 repeats, mix 12%. Just enough thickness.' },
      { blockId: 'reverb', label: 'Spring', note: 'Time 1.2s, mix 15% — vintage springy ambience.' },
    ],
  },
  {
    id: 'brownface-harmonic-trem',
    name: 'Brownface Harmonic Trem',
    group: 'Modulation',
    tags: ['tremolo', 'roots', 'surf', 'americana', 'amp-like'],
    difficulty: 'Quick build',
    routing: 'Serial',
    vibe: 'Swampy harmonic tremolo, old combo amp movement',
    description:
      'A clean-to-crunch amp with harmonic tremolo doing the heavy lifting. The movement should feel like the amp breathing, not a modern LFO effect.',
    steps: [
      { blockId: 'compressor', label: 'Very light leveling', note: 'Optional; do not flatten the tremolo pulse.' },
      { blockId: 'amp', label: 'Brownface / Deluxe family', note: 'Edge of breakup with enough mids to carry the modulation.' },
      { blockId: 'cab', label: 'Open-back 1x12 or 2x10', note: 'Keep the cab airy and not too dark.' },
      { blockId: 'tremolo', label: 'Harmonic Trem', note: 'Rate 4-6 Hz, depth 50-70%, mix 100%.' },
      { blockId: 'reverb', label: 'Spring', note: 'Short-to-medium spring for vintage space.' },
    ],
  },
  {
    id: 'rotary-organ-lead',
    name: 'Rotary Organ Lead',
    group: 'Modulation',
    tags: ['rotary', 'organ', 'lead', 'stereo', 'classic-rock'],
    difficulty: 'Intermediate',
    routing: 'Serial with speed control',
    vibe: 'Leslie-style guitar lines and organ-like chords',
    description:
      'A warm amp into the Rotary block, with slow/fast speed under foot control. Works for organ parts, Gilmour-style movement, and wide clean leads.',
    steps: [
      { blockId: 'compressor', label: 'Sustain before amp', note: 'Keeps held chords feeding the rotary speaker evenly.' },
      { blockId: 'amp', label: 'Warm clean or edge amp', note: 'Use moderate gain; too much distortion blurs the rotor.' },
      { blockId: 'cab', label: 'Neutral cab', note: 'Do not over-brighten before the rotary stage.' },
      { blockId: 'rotary', label: 'Leslie 122 style', note: 'Assign Slow/Fast to a switch; use real acceleration times.' },
      { blockId: 'delay', label: 'Short stereo delay', note: 'Low mix, mostly for width after the rotary.' },
      { blockId: 'reverb', label: 'Room or plate', note: 'Use enough space to place the cabinet in a room.' },
    ],
  },
  {
    id: 'acoustic-sim',
    name: 'Acoustic Simulation',
    group: 'Bass & direct',
    tags: ['direct', 'acoustic', 'no-amp', 'utility', 'live'],
    difficulty: 'Intermediate',
    routing: 'Direct, no Amp or Cab block',
    vibe: 'Electric → acoustic for layering or live changeover-free sets',
    description:
      "Skips the amp/cab path entirely. Uses the Filter and PEQ to reshape the electric guitar's response to sound more like an amplified acoustic, with a hint of room ambience.",
    steps: [
      { blockId: 'compressor', label: 'OptoComp', note: 'Smooths attack — like a piezo through a DI.' },
      { blockId: 'filter', label: 'High-shelf boost', note: 'Adds top end sparkle the magnetic pickup is missing.' },
      { blockId: 'parametric-eq', label: 'Acoustic voicing', note: '-4 dB @ 350 Hz, +3 dB @ 5 kHz, +2 dB @ 10 kHz. No amp/cab.' },
      { blockId: 'reverb', label: 'Small Room', note: 'Time 1.5s, mix 25%, modulation off. Natural body.' },
    ],
  },
  {
    id: 'bass-direct',
    name: 'Bass Direct + Amp Blend',
    group: 'Bass & direct',
    tags: ['bass', 'parallel', 'di', 'studio', 'drive'],
    difficulty: 'Advanced',
    routing: 'Parallel DI and driven amp rows',
    vibe: 'Studio bass: clean DI + driven amp in parallel',
    description:
      'Splits the signal — one row is a clean DI path with subtle compression, the other is a driven amp+cab. The Mixer blends both at the end.',
    steps: [
      { blockId: 'compressor', label: 'Studio Opto', note: 'Even bass dynamics on the DI row.' },
      { blockId: 'drive', label: 'Blackglass 7K', note: 'Bass-specific drive — Darkglass-style grit on the parallel row.' },
      { blockId: 'amp', label: 'Bassguy / Tweed Bass', note: 'Driven bass amp model, Master ~6.' },
      { blockId: 'cab', label: '8x10 Bass', note: 'DynaCab bass cab with 421 + condenser blend.' },
      { blockId: 'mixer', label: 'Blend DI + Driven', note: 'Balance to taste — 60% DI / 40% driven is a common studio recipe.' },
    ],
  },
  {
    id: 'synth-bass-split',
    name: 'Synth Bass Split',
    group: 'Bass & direct',
    tags: ['synth', 'bass', 'parallel', 'tracking', 'electronic'],
    difficulty: 'Advanced',
    routing: 'Parallel clean and Synth rows',
    vibe: 'Monophonic synth bass layered under guitar or bass',
    description:
      'A tracked synth voice blended with the dry instrument. Keep the detector clean and use the Mixer to balance definition against synth weight.',
    steps: [
      { blockId: 'compressor', label: 'Detector stabilizer', note: 'Moderate compression before the split improves pitch tracking.' },
      { blockId: 'synth', label: 'Square or saw bass', note: 'Voice 1 one octave down; filter cut around 1-2 kHz.' },
      { blockId: 'filter', label: 'Synth low-pass', note: 'Round the synth row so it supports instead of buzzing.' },
      { blockId: 'amp', label: 'Clean DI or bass amp row', note: 'Keep a normal instrument row for attack and pitch clarity.' },
      { blockId: 'mixer', label: 'Blend synth under dry', note: 'Start with synth 30-40% and raise only for featured parts.' },
    ],
  },
  {
    id: 'three-scene-cover-gig',
    name: 'Three-Scene Cover Gig',
    group: 'Performance',
    tags: ['live', 'scenes', 'cover-band', 'compact', 'fm3'],
    difficulty: 'Intermediate',
    routing: 'Serial with scene-controlled bypass and channels',
    vibe: 'One preset covering clean, crunch, and lead',
    description:
      'A compact live chain that changes personality with scenes instead of separate presets. It is built for predictable levels and fast switching.',
    steps: [
      { blockId: 'wahwah', label: 'Shared expression wah', note: 'Auto-engage and bypass per scene.' },
      { blockId: 'compressor', label: 'Clean scene support', note: 'On for clean, optional or lower mix for gain scenes.' },
      { blockId: 'drive', label: 'Scene boost', note: 'Bypassed for clean, light OD for crunch, level boost for lead.' },
      { blockId: 'amp', label: 'Multi-channel amp', note: 'Channel A clean, B crunch, C lead if available.' },
      { blockId: 'cab', label: 'Shared cab', note: 'One consistent cab keeps FOH tone stable.' },
      { blockId: 'delay', label: 'Lead delay', note: 'Low mix for crunch, higher mix for lead scene.' },
      { blockId: 'reverb', label: 'Shared room/plate', note: 'Scene levels change, but the space remains consistent.' },
      { blockId: 'scene-midi', label: 'External sync', note: 'Optional messages for lights, DAW, or external pedals.' },
    ],
  },
  {
    id: 'looper-duo',
    name: 'Looper Duo Arrangement',
    group: 'Performance',
    tags: ['looper', 'solo-performance', 'scenes', 'ambient', 'live'],
    difficulty: 'Advanced',
    routing: 'Serial with Looper last',
    vibe: 'Build a rhythm bed, switch scenes, then solo over it',
    description:
      'A practical solo-performance layout. Put the Looper after the whole rig so captured parts keep their full tone while new scenes play over the top.',
    steps: [
      { blockId: 'volume-pan', label: 'Input swell option', note: 'Useful for pad loops or muting between loop operations.' },
      { blockId: 'drive', label: 'Scene-dependent gain', note: 'Off for rhythm loop, on for lead overdubs.' },
      { blockId: 'amp', label: 'One flexible amp', note: 'Use channels for clean rhythm and lead tone.' },
      { blockId: 'cab', label: 'Shared cab', note: 'Keeps loop and live sound in the same acoustic space.' },
      { blockId: 'delay', label: 'Tempo delay', note: 'Sync repeats to the loop tempo.' },
      { blockId: 'reverb', label: 'Moderate tail', note: 'Long tails can smear loop timing; keep it controlled.' },
      { blockId: 'looper', label: 'Last in chain', note: 'Captures the complete scene sound, then lets you change scenes over it.' },
    ],
  },
  {
    id: 'wet-dry-wide',
    name: 'Wide Wet/Dry Approximation',
    group: 'Performance',
    tags: ['stereo', 'wet-dry', 'live', 'parallel', 'wide'],
    difficulty: 'Advanced',
    routing: 'Parallel dry center with stereo wet row',
    productNote: 'FM3-friendly approximation of a larger wet/dry/wet rig.',
    vibe: 'Big stage stereo without losing a focused dry core',
    description:
      'Keep the amp/cab dry and centered, then send a controlled split to stereo delay and reverb. The Mixer balances the dry core against the wet width.',
    steps: [
      { blockId: 'amp', label: 'Dry core amp', note: 'Dial this as if no wet effects existed.' },
      { blockId: 'cab', label: 'Centered cab', note: 'Keep the dry tone mono-compatible.' },
      { blockId: 'delay', label: 'Stereo Digital wet row', note: 'Kill Dry on the wet path if running true parallel.' },
      { blockId: 'reverb', label: 'Wide plate or hall', note: 'Use low cut and predelay so wet effects do not mask the dry tone.' },
      { blockId: 'enhancer', label: 'Wet width only', note: 'Use carefully on the wet row, not the full mix.' },
      { blockId: 'mixer', label: 'Dry/wet balance', note: 'Start with dry 70-80%, wet 20-30%.' },
    ],
  },
]

// Preset recipes — full presets the user can model after.

export type PresetDifficulty = 'Quick build' | 'Intermediate' | 'Advanced'

export interface PresetScene {
  name: string
  note: string
}

export interface PresetRoutingRow {
  name: string
  role: string
  blockOrder: string[]
}

export interface PresetParallelRouting {
  splitLabel: string
  mergeLabel: string
  input?: PresetRoutingRow
  rows: PresetRoutingRow[]
  output?: PresetRoutingRow
}

export interface BuildSheetParam {
  name: string
  value: string
  note?: string
}

export interface BuildSheetChannel {
  channel: string
  role: string
}

export interface BuildSheetBlock {
  blockId: string
  /** Block instance identifier (e.g. "AMP 1", "DRV 2") when more than one of the same block is used. */
  instance?: string
  /** Type / algorithm to select inside the block (e.g. "USA Lead 1+", "4x12 V30"). */
  type?: string
  /** Channel-level role guide for multi-channel blocks. */
  channels?: BuildSheetChannel[]
  /** Top-level parameters to set during initial build. */
  params?: BuildSheetParam[]
  /** Optional one-line build hint. */
  note?: string
}

export type SceneBlockState =
  | 'on'
  | 'off'
  | { channel?: string; bypass?: 'on' | 'off'; overrides?: BuildSheetParam[] }

export interface BuildSheetSceneBlock {
  blockId: string
  instance?: string
  state: SceneBlockState
}

export interface BuildSheetScene {
  name: string
  summary: string
  blockStates: BuildSheetSceneBlock[]
}

export interface BuildSheetGlobal {
  label: string
  value: string
  note?: string
}

export interface BuildSheet {
  /** Input/output/tempo settings the user should configure once before building. */
  globals: BuildSheetGlobal[]
  /** Build order — blocks the user inserts and configures. Mirrors blockOrder semantically but adds type/params. */
  blocks: BuildSheetBlock[]
  /** Per-scene state table (rows = blocks). */
  scenes: BuildSheetScene[]
  /** Optional final-check pointers (controllers, FC layout, modifiers). */
  checks?: string[]
}

export interface Preset {
  id: string
  name: string
  group: string
  tags: string[]
  difficulty: PresetDifficulty
  routing: string
  productFocus: string
  vibe: string
  description: string
  scenes: PresetScene[]
  blockOrder: string[]
  parallelRouting?: PresetParallelRouting
  buildSheet?: BuildSheet
}

interface PresetFamily {
  id: string
  name: string
  group: string
  tags: string[]
  difficulty: PresetDifficulty
  routing: string
  vibe: string
  description: string
  blockOrder: string[]
  scenes: PresetScene[]
  parallelRouting?: PresetParallelRouting
  buildSheet?: BuildSheet
}

interface PresetVariation {
  id: string
  nameSuffix: string
  context: string
  tags: string[]
  productFocus: string
  gainCue: string
  ambienceCue: string
  eqCue: string
}

export const presetGroups = [
  'Clean & edge',
  'Drive & lead',
  'Heavy',
  'Ambient',
  'Modulation',
  'Bass & direct',
  'Performance',
] as const

const presetFamilies: PresetFamily[] = [
  {
    id: 'studio-glass-clean',
    name: 'Studio Glass Clean',
    group: 'Clean & edge',
    tags: ['clean', 'studio', 'single-coils', 'plate', 'touch-sensitive'],
    difficulty: 'Quick build',
    routing: 'Serial',
    vibe: 'Polished direct clean with enough transient detail for recording',
    description:
      'A refined clean foundation: light compression, glassy amp headroom, cab body, small modulation, tempo delay, and plate reverb that stays out of the pick attack.',
    blockOrder: ['compressor', 'amp', 'cab', 'chorus', 'delay', 'reverb'],
    scenes: [
      { name: 'Scene 1: Pure', note: 'Compressor low ratio, amp clean, chorus bypassed, delay tucked under the dry tone.' },
      { name: 'Scene 2: Wide', note: 'Chorus or Dimension depth raised just enough to widen stereo without audible wobble.' },
      { name: 'Scene 3: Lead Clean', note: 'Delay mix up, plate predelay 30-45 ms, output level lifted for melodic lines.' },
    ],
    buildSheet: {
      globals: [
        { label: 'Tempo', value: '120 BPM', note: 'Tap-Tempo LED on; quarter note for delay sync.' },
        { label: 'Input 1 Gate', value: '-75 dB', note: 'Inst level; off if recording direct with hot single-coils.' },
        { label: 'Output 1 Mode', value: 'Stereo line-level', note: '-10 dBV (consumer) or +4 dBu to interface.' },
      ],
      blocks: [
        {
          blockId: 'compressor',
          type: 'Pedal 2 (low-ratio opto)',
          params: [
            { name: 'Ratio', value: '2.0 : 1' },
            { name: 'Threshold', value: '-16 dB' },
            { name: 'Attack', value: '8 ms' },
            { name: 'Release', value: '80 ms' },
            { name: 'Level', value: '+2 dB', note: 'Make-up gain so bypass A/B matches.' },
          ],
        },
        {
          blockId: 'amp',
          type: 'Deluxe Verb (Cygnus X-3)',
          channels: [
            { channel: 'A', role: 'Clean fingerstyle / pick.' },
          ],
          params: [
            { name: 'Drive', value: '3.0' },
            { name: 'Master', value: '7.0' },
            { name: 'Bass', value: '4.0' },
            { name: 'Mid', value: '6.0' },
            { name: 'Treble', value: '4.5' },
            { name: 'Presence', value: '5.0' },
            { name: 'Bright', value: 'OFF' },
          ],
        },
        {
          blockId: 'cab',
          type: 'DynaCab 1x12 Deluxe Verb',
          params: [
            { name: 'IR 1', value: 'Ribbon (R-121), 6 in axis' },
            { name: 'IR 1 Level', value: '0.0 dB' },
            { name: 'IR 2', value: 'SM57 cap-edge' },
            { name: 'IR 2 Level', value: '-4.0 dB' },
            { name: 'Low Cut', value: '80 Hz' },
            { name: 'High Cut', value: '9.0 kHz' },
          ],
        },
        {
          blockId: 'chorus',
          type: 'Digital Stereo Chorus',
          params: [
            { name: 'Rate', value: '1.2 Hz' },
            { name: 'Depth', value: '24%' },
            { name: 'Mix', value: '18%' },
            { name: 'Stereo Width', value: '100%' },
          ],
        },
        {
          blockId: 'delay',
          type: 'Mono Analog',
          params: [
            { name: 'Time L', value: '1/4 (tempo-synced)' },
            { name: 'Feedback', value: '22%' },
            { name: 'Mix', value: '14%' },
            { name: 'Low Cut', value: '250 Hz' },
            { name: 'High Cut', value: '5.0 kHz' },
            { name: 'Drive', value: '15%' },
          ],
        },
        {
          blockId: 'reverb',
          type: 'Studio Plate',
          params: [
            { name: 'Time', value: '2.5 s' },
            { name: 'Predelay', value: '30 ms' },
            { name: 'Mix', value: '22%' },
            { name: 'Low Cut', value: '200 Hz' },
            { name: 'High Cut', value: '8.0 kHz' },
            { name: 'Diffusion', value: '65%' },
            { name: 'Mod Depth', value: '8%' },
          ],
        },
      ],
      scenes: [
        {
          name: 'Scene 1: Pure',
          summary: 'Dry tone for tracking. Modulation and delay off so transients stay intact.',
          blockStates: [
            { blockId: 'compressor', state: 'on' },
            { blockId: 'amp', state: { channel: 'A', bypass: 'on' } },
            { blockId: 'cab', state: 'on' },
            { blockId: 'chorus', state: 'off' },
            { blockId: 'delay', state: 'off' },
            { blockId: 'reverb', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '18%' }] } },
          ],
        },
        {
          name: 'Scene 2: Wide',
          summary: 'Add gentle modulation and tucked-in delay. Plate stays at its default mix.',
          blockStates: [
            { blockId: 'compressor', state: 'on' },
            { blockId: 'amp', state: { channel: 'A' } },
            { blockId: 'cab', state: 'on' },
            { blockId: 'chorus', state: { bypass: 'on', overrides: [{ name: 'Depth', value: '30%' }] } },
            { blockId: 'delay', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '12%' }] } },
            { blockId: 'reverb', state: 'on' },
          ],
        },
        {
          name: 'Scene 3: Lead Clean',
          summary: 'Push delay/reverb for melodic lines without raising amp gain.',
          blockStates: [
            { blockId: 'compressor', state: 'on' },
            { blockId: 'amp', state: { channel: 'A', overrides: [{ name: 'Master', value: '7.5' }] } },
            { blockId: 'cab', state: 'on' },
            { blockId: 'chorus', state: { bypass: 'on', overrides: [{ name: 'Depth', value: '20%' }] } },
            { blockId: 'delay', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '22%' }] } },
            { blockId: 'reverb', state: { bypass: 'on', overrides: [{ name: 'Predelay', value: '45 ms' }, { name: 'Mix', value: '26%' }] } },
          ],
        },
      ],
      checks: [
        'Set bypass mode of every block to "Mute FX in" so scene transitions are click-free.',
        'Assign Layout pad 1-3 to scene change; spare pad 4 for tap tempo.',
        'Save patch level so all three scenes match within 1 dB at the same dynamic.',
      ],
    },
  },
  {
    id: 'edge-pedal-platform',
    name: 'Edge Pedal Platform',
    group: 'Clean & edge',
    tags: ['edge-of-breakup', 'pedal-platform', 'blues', 'dynamic', 'club'],
    difficulty: 'Quick build',
    routing: 'Serial',
    vibe: 'Amp just starting to work, built to react to guitar volume and picking',
    description:
      'A barely-breaking amp recipe with boost and drive stages placed before a consistent cab. The preset cleans up from the guitar, then pushes forward with scenes.',
    blockOrder: ['wahwah', 'compressor', 'drive', 'amp', 'cab', 'delay', 'reverb'],
    scenes: [
      { name: 'Scene 1: Touch Clean', note: 'Drive bypassed, compressor light, amp input gain held at the edge of breakup.' },
      { name: 'Scene 2: Push', note: 'Low-gain drive on, amp level unchanged, delay added only for rhythmic depth.' },
      { name: 'Scene 3: Solo Lift', note: 'Clean boost or drive level lift, delay feedback increased, reverb kept short.' },
    ],
  },
  {
    id: 'nashville-slapback',
    name: 'Nashville Slapback',
    group: 'Clean & edge',
    tags: ['country', 'slapback', 'telecaster', 'clean', 'live'],
    difficulty: 'Quick build',
    routing: 'Serial',
    vibe: 'Fast bright clean tones for hybrid picking, snap, and clear double-stops',
    description:
      'A percussive clean chain with controlled compression, bright amp voice, surgical post-cab trim, mono slapback, and short spring ambience.',
    blockOrder: ['compressor', 'amp', 'cab', 'graphic-eq', 'delay', 'reverb'],
    scenes: [
      { name: 'Scene 1: Snap', note: 'Compressor attack fast, slap 85-110 ms, spring low enough that the part stays dry.' },
      { name: 'Scene 2: Twang Lead', note: 'Small output lift, slap feedback raised to two repeats, upper mids softened with EQ.' },
      { name: 'Scene 3: Baritone Clean', note: 'Low cut moved up and delay mix reduced to keep lower strings tight.' },
    ],
  },
  {
    id: 'class-a-jangle',
    name: 'Class-A Jangle',
    group: 'Clean & edge',
    tags: ['jangle', 'class-a', 'indie', 'stereo', 'chime'],
    difficulty: 'Intermediate',
    routing: 'Serial with stereo post effects',
    vibe: 'Chiming class-A guitar with controlled top end and wide movement',
    description:
      'A bright class-A amp tone with cab smoothing, optional compression, chorus width, dotted delay, and a plate that keeps arpeggios detailed.',
    blockOrder: ['compressor', 'amp', 'cab', 'chorus', 'delay', 'reverb'],
    scenes: [
      { name: 'Scene 1: Jangle', note: 'Amp bright switch voiced carefully, chorus depth low, dotted delay nearly hidden.' },
      { name: 'Scene 2: Wide Arp', note: 'Chorus width and delay mix increased for stereo picked patterns.' },
      { name: 'Scene 3: Breakup', note: 'Amp channel gain lifted with a small level trim so the part does not jump.' },
    ],
  },
  {
    id: 'plexi-crunch',
    name: 'Plexi Crunch Stack',
    group: 'Drive & lead',
    tags: ['classic-rock', 'plexi', 'crunch', 'boost', '4x12'],
    difficulty: 'Quick build',
    routing: 'Serial',
    vibe: 'British crunch with guitar-volume cleanup and a believable cab push',
    description:
      'A classic rock preset around a bright British amp, greenback-style cab, clean boost option, tight slap delay, and room reverb.',
    blockOrder: ['drive', 'amp', 'cab', 'delay', 'reverb'],
    scenes: [
      { name: 'Scene 1: Rhythm', note: 'Amp gain around rhythm crunch, drive bypassed, room reverb just audible.' },
      { name: 'Scene 2: Boost', note: 'Drive level up with low drive, delay short, mids kept forward.' },
      { name: 'Scene 3: Solo', note: 'Delay mix 18-24%, reverb plate or room widened, output lifted.' },
    ],
    buildSheet: {
      globals: [
        { label: 'Tempo', value: '120 BPM', note: 'Slapback uses absolute time, not sync.' },
        { label: 'Input 1 Gate', value: '-65 dB', note: 'Threshold tuned for a Les Paul; raise 5 dB for single-coils.' },
        { label: 'Output 1', value: 'Stereo line-level', note: 'Mono-compatible: room reverb keeps phase clean.' },
      ],
      blocks: [
        {
          blockId: 'drive',
          type: 'FAS Boost (clean boost)',
          channels: [
            { channel: 'A', role: 'Clean boost for solo lift (Scene 3).' },
          ],
          params: [
            { name: 'Drive', value: '0.0' },
            { name: 'Level', value: '7.5', note: '+5-7 dB into the amp front end.' },
            { name: 'Tone', value: '5.5' },
            { name: 'Mix', value: '100%' },
          ],
          note: 'Bypassed by default — engaged only for Scene 2/3.',
        },
        {
          blockId: 'amp',
          type: 'Plexi 1959 Pro Hi (Hi input)',
          channels: [
            { channel: 'A', role: 'Crunch — single channel covers all three scenes.' },
          ],
          params: [
            { name: 'Drive', value: '6.5' },
            { name: 'Master', value: '6.0' },
            { name: 'Bass', value: '5.0' },
            { name: 'Mid', value: '7.0' },
            { name: 'Treble', value: '5.0' },
            { name: 'Presence', value: '5.0' },
            { name: 'Bright', value: 'OFF' },
            { name: 'Sag', value: '3.0', note: 'Cygnus default; raise for sponge, lower for tight.' },
          ],
        },
        {
          blockId: 'cab',
          type: 'DynaCab 4x12 Friedman GB',
          params: [
            { name: 'IR 1', value: 'SM57 cap-edge' },
            { name: 'IR 1 Level', value: '0.0 dB' },
            { name: 'IR 2', value: 'OFF' },
            { name: 'Low Cut', value: '85 Hz' },
            { name: 'High Cut', value: '9.0 kHz' },
            { name: 'Air', value: '+2 dB @ 4 kHz' },
          ],
        },
        {
          blockId: 'delay',
          type: 'Mono Tape',
          params: [
            { name: 'Time L', value: '110 ms (absolute)' },
            { name: 'Feedback', value: '18%' },
            { name: 'Mix', value: '18%' },
            { name: 'Drive', value: '25%' },
            { name: 'Wow/Flutter', value: '15%' },
            { name: 'Low Cut', value: '250 Hz' },
            { name: 'High Cut', value: '4.0 kHz' },
          ],
        },
        {
          blockId: 'reverb',
          type: 'Small Room',
          params: [
            { name: 'Time', value: '1.8 s' },
            { name: 'Predelay', value: '20 ms' },
            { name: 'Mix', value: '14%' },
            { name: 'Low Cut', value: '180 Hz' },
            { name: 'High Cut', value: '7.0 kHz' },
          ],
        },
      ],
      scenes: [
        {
          name: 'Scene 1: Rhythm',
          summary: 'Amp at crunch, no boost, slap-back and room low. Rolls clean from the guitar volume.',
          blockStates: [
            { blockId: 'drive', state: 'off' },
            { blockId: 'amp', state: { channel: 'A' } },
            { blockId: 'cab', state: 'on' },
            { blockId: 'delay', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '12%' }] } },
            { blockId: 'reverb', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '12%' }] } },
          ],
        },
        {
          name: 'Scene 2: Boost',
          summary: 'Engage FAS Boost to push the amp harder; keep delay slapback short.',
          blockStates: [
            { blockId: 'drive', state: 'on' },
            { blockId: 'amp', state: { channel: 'A' } },
            { blockId: 'cab', state: 'on' },
            { blockId: 'delay', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '16%' }] } },
            { blockId: 'reverb', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '14%' }] } },
          ],
        },
        {
          name: 'Scene 3: Solo',
          summary: 'Boost on, delay opens up, room widens for sustain without losing punch.',
          blockStates: [
            { blockId: 'drive', state: { bypass: 'on', overrides: [{ name: 'Level', value: '8.0' }] } },
            { blockId: 'amp', state: { channel: 'A' } },
            { blockId: 'cab', state: 'on' },
            { blockId: 'delay', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '24%' }, { name: 'Feedback', value: '24%' }] } },
            { blockId: 'reverb', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '18%' }, { name: 'Predelay', value: '30 ms' }] } },
          ],
        },
      ],
      checks: [
        'Tone-stack interaction is heavy on a Plexi — small Mid moves change perceived gain.',
        'If using a humbucker guitar, drop amp Drive by 0.5 to keep transient clarity.',
      ],
    },
  },
  {
    id: 'brown-solo-lead',
    name: 'Brown Solo Lead',
    group: 'Drive & lead',
    tags: ['lead', 'brown-sound', 'hot-rodded', 'delay', 'harmonics'],
    difficulty: 'Intermediate',
    routing: 'Serial with stereo post effects',
    vibe: 'Singing hot-rodded lead with controlled low end and harmonic bloom',
    description:
      'A focused lead preset using a boosted hot-rodded amp, 4x12 cab, stereo delay, and plate reverb. It is built to sing without washing out fast phrases.',
    blockOrder: ['drive', 'amp', 'cab', 'parametric-eq', 'delay', 'reverb'],
    scenes: [
      { name: 'Scene 1: Crunch Lead', note: 'Drive low, amp gain moderate, delay mix under 14% for rhythm-friendly sustain.' },
      { name: 'Scene 2: Wide Solo', note: 'Stereo delay engaged, upper mids lifted slightly, reverb predelay set long enough for clarity.' },
      { name: 'Scene 3: Tap Feature', note: 'Delay feedback and mix raised for tapped or legato phrases, lows trimmed before the delay.' },
    ],
  },
  {
    id: 'fusion-liquid-lead',
    name: 'Fusion Liquid Lead',
    group: 'Drive & lead',
    tags: ['fusion', 'lead', 'smooth', 'legato', 'studio'],
    difficulty: 'Intermediate',
    routing: 'Serial with ducked ambience',
    vibe: 'Smooth sustained lead that stays articulate under dense harmony',
    description:
      'A refined fusion preset with compression, low-gain boost, smooth amp drive, careful cab top end, ducked delay, and plate reverb.',
    blockOrder: ['compressor', 'drive', 'amp', 'cab', 'parametric-eq', 'delay', 'reverb'],
    scenes: [
      { name: 'Scene 1: Smooth', note: 'Compression and drive are subtle; amp gives most of the sustain.' },
      { name: 'Scene 2: Legato', note: 'Delay ducking relaxed and gain raised slightly for fluid lines.' },
      { name: 'Scene 3: Chord Lead', note: 'Gain reduced, reverb darker, mids kept broad so voicings do not smear.' },
    ],
  },
  {
    id: 'boutique-ods',
    name: 'Boutique ODS Voice',
    group: 'Drive & lead',
    tags: ['boutique', 'ods', 'blues', 'smooth', 'dynamic'],
    difficulty: 'Intermediate',
    routing: 'Serial',
    vibe: 'Thick touch-sensitive overdrive with vocal mids and clean sustain',
    description:
      'A boutique overdrive special style preset, balanced for dynamic phrasing. It pairs smooth preamp drive with a cab that keeps the midrange vocal.',
    blockOrder: ['compressor', 'drive', 'amp', 'cab', 'delay', 'reverb'],
    scenes: [
      { name: 'Scene 1: Cleanish', note: 'Amp input trimmed and drive bypassed for compressed, rounded clean.' },
      { name: 'Scene 2: Overdrive', note: 'Drive or amp channel gain raised; mids stay full, bass trimmed before the cab.' },
      { name: 'Scene 3: Singing Lead', note: 'Delay and plate added with output boost, treble kept smooth.' },
    ],
  },
  {
    id: 'modern-metal-tight',
    name: 'Modern Metal Tight',
    group: 'Heavy',
    tags: ['metal', 'tight', 'gate', 'v30', 'djent'],
    difficulty: 'Intermediate',
    routing: 'Serial',
    vibe: 'Percussive high gain with fast stops and mix-ready low end',
    description:
      'A tight boosted high-gain preset: gate, overdrive tightener, modern amp, V30-style cab, PEQ cleanup, and optional lead ambience.',
    blockOrder: ['gate-expander', 'drive', 'amp', 'cab', 'parametric-eq', 'delay', 'reverb'],
    scenes: [
      { name: 'Scene 1: Rhythm', note: 'Gate firm, drive low/high level, delay bypassed, reverb nearly dry.' },
      { name: 'Scene 2: Lead', note: 'Output lifted, delay dotted eighth or quarter, reverb widened but low cut high.' },
      { name: 'Scene 3: Breakdown', note: 'Gate release tightened, lows controlled with PEQ, gain reduced a touch for clarity.' },
    ],
    buildSheet: {
      globals: [
        { label: 'Tempo', value: '100 BPM', note: 'Adjust to song; lead delay uses 1/4 dotted of this.' },
        { label: 'Input 1 Gate', value: '-55 dB', note: 'Pre-block gate — kills hum so the Gate block can target palm-mute decay.' },
        { label: 'Output 1', value: 'Stereo line, +4 dBu', note: 'Patch level set so Scene 3 chug hits -6 dBFS at the meter.' },
      ],
      blocks: [
        {
          blockId: 'gate-expander',
          type: 'Intelligent Gate',
          params: [
            { name: 'Threshold', value: '-55 dB' },
            { name: 'Ratio', value: '8.0 : 1' },
            { name: 'Attack', value: '1 ms' },
            { name: 'Release', value: '120 ms' },
            { name: 'Hold', value: '20 ms' },
          ],
        },
        {
          blockId: 'drive',
          type: 'T808 MOD (modded screamer)',
          channels: [
            { channel: 'A', role: 'Always-on tightener — not for grit.' },
          ],
          params: [
            { name: 'Drive', value: '1.0', note: 'Low — this is a tightener, not gain.' },
            { name: 'Tone', value: '5.0' },
            { name: 'Level', value: '9.5', note: 'Max-ish; the level is the magic.' },
            { name: 'Bass', value: '4.5', note: 'Cuts low-end mud before the amp.' },
            { name: 'Mix', value: '100%' },
          ],
        },
        {
          blockId: 'amp',
          type: 'USA Lead 1+ (5150 III red)',
          channels: [
            { channel: 'A', role: 'Rhythm — palm-muted chug.' },
            { channel: 'B', role: 'Lead — same amp, Master +0.5 for sustain.' },
          ],
          params: [
            { name: 'Drive', value: '6.5' },
            { name: 'Master', value: '4.0', note: 'Master is part of the voicing; do not raise to "be loud".' },
            { name: 'Bass', value: '4.0' },
            { name: 'Mid', value: '6.0' },
            { name: 'Treble', value: '6.0' },
            { name: 'Presence', value: '5.5' },
            { name: 'Depth', value: '7.0', note: 'Low-end thump.' },
            { name: 'Bright', value: 'OFF' },
          ],
        },
        {
          blockId: 'cab',
          type: 'DynaCab 4x12 Friedman V30',
          params: [
            { name: 'IR 1', value: 'SM57 cap-edge, 1 in axis' },
            { name: 'IR 1 Level', value: '0.0 dB' },
            { name: 'IR 2', value: 'MD-421 off-axis' },
            { name: 'IR 2 Level', value: '-3.0 dB' },
            { name: 'Low Cut', value: '95 Hz' },
            { name: 'High Cut', value: '7.5 kHz' },
            { name: 'Proximity', value: '+1.5 dB' },
          ],
        },
        {
          blockId: 'parametric-eq',
          type: '5-band PEQ',
          params: [
            { name: 'Band 1', value: '250 Hz, -3 dB, Q 1.4', note: 'Mud cut.' },
            { name: 'Band 2', value: '700 Hz, -1.5 dB, Q 2.0', note: 'Boxiness.' },
            { name: 'Band 3', value: '2.2 kHz, +1 dB, Q 1.0' },
            { name: 'Band 4', value: '4.0 kHz, +1 dB shelf', note: 'Clarity.' },
            { name: 'Output Level', value: '+0.0 dB' },
          ],
        },
        {
          blockId: 'delay',
          type: 'Stereo Digital',
          params: [
            { name: 'Time L', value: '1/4 dotted' },
            { name: 'Time R', value: '1/4' },
            { name: 'Feedback', value: '20%' },
            { name: 'Mix', value: '15%' },
            { name: 'Low Cut', value: '300 Hz' },
            { name: 'High Cut', value: '5.0 kHz' },
            { name: 'Ducker Threshold', value: '-22 dB', note: 'Repeats sit behind playing transients.' },
          ],
        },
        {
          blockId: 'reverb',
          type: 'Large Hall',
          params: [
            { name: 'Time', value: '3.0 s' },
            { name: 'Predelay', value: '40 ms' },
            { name: 'Mix', value: '12%' },
            { name: 'Low Cut', value: '350 Hz', note: 'High low-cut keeps rhythm uncluttered.' },
            { name: 'High Cut', value: '6.5 kHz' },
            { name: 'Diffusion', value: '70%' },
          ],
        },
      ],
      scenes: [
        {
          name: 'Scene 1: Rhythm',
          summary: 'Tight chug — gate firm, no delay, room nearly off. Amp Channel A.',
          blockStates: [
            { blockId: 'gate-expander', state: 'on' },
            { blockId: 'drive', state: 'on' },
            { blockId: 'amp', state: { channel: 'A' } },
            { blockId: 'cab', state: 'on' },
            { blockId: 'parametric-eq', state: 'on' },
            { blockId: 'delay', state: 'off' },
            { blockId: 'reverb', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '8%' }] } },
          ],
        },
        {
          name: 'Scene 2: Lead',
          summary: 'Amp Channel B (Master +0.5). Delay on, reverb opens up.',
          blockStates: [
            { blockId: 'gate-expander', state: { bypass: 'on', overrides: [{ name: 'Release', value: '160 ms' }] } },
            { blockId: 'drive', state: 'on' },
            { blockId: 'amp', state: { channel: 'B', overrides: [{ name: 'Master', value: '4.5' }] } },
            { blockId: 'cab', state: 'on' },
            { blockId: 'parametric-eq', state: 'on' },
            { blockId: 'delay', state: 'on' },
            { blockId: 'reverb', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '18%' }] } },
          ],
        },
        {
          name: 'Scene 3: Breakdown',
          summary: 'Gate ultra-tight; gain reduced 0.5; PEQ low-mid cut deepens for clarity.',
          blockStates: [
            { blockId: 'gate-expander', state: { bypass: 'on', overrides: [{ name: 'Release', value: '60 ms' }, { name: 'Hold', value: '10 ms' }] } },
            { blockId: 'drive', state: 'on' },
            { blockId: 'amp', state: { channel: 'A', overrides: [{ name: 'Drive', value: '6.0' }] } },
            { blockId: 'cab', state: 'on' },
            { blockId: 'parametric-eq', state: { bypass: 'on', overrides: [{ name: 'Band 1', value: '250 Hz, -4.5 dB, Q 1.4' }] } },
            { blockId: 'delay', state: 'off' },
            { blockId: 'reverb', state: 'off' },
          ],
        },
      ],
      checks: [
        'Bypass-mode "Mute FX in" on Delay and Reverb prevents tail bleed into the chug.',
        'Modifier source = Scene Controller 1 → Reverb Mix; smooth transitions between scenes.',
        'If using FM3, the Cab block uses 1 IR slot — pick the SM57 only and skip the off-axis mic.',
      ],
    },
  },
  {
    id: 'drop-tuned-wall',
    name: 'Drop-Tuned Wall',
    group: 'Heavy',
    tags: ['drop-tuning', 'metalcore', 'rhythm', 'tight', 'low-tuned'],
    difficulty: 'Intermediate',
    routing: 'Serial',
    vibe: 'Low-tuned rhythm that holds together under fast alternate picking',
    description:
      'A low-tuned rhythm preset that starts with tracking control, uses a tightener before the amp, and cleans low-mid buildup after the cab.',
    blockOrder: ['pitch', 'gate-expander', 'drive', 'amp', 'cab', 'parametric-eq'],
    scenes: [
      { name: 'Scene 1: Native Tuning', note: 'Pitch bypassed, gate tuned to the guitar, cab low cut around 80-100 Hz.' },
      { name: 'Scene 2: Virtual Capo', note: 'Pitch block on for conservative shifts, gain reduced slightly to preserve attack.' },
      { name: 'Scene 3: Chorus Hook', note: 'EQ broadens upper mids and output lifts without adding extra ambience.' },
    ],
  },
  {
    id: 'doom-fuzz-ritual',
    name: 'Doom Fuzz Ritual',
    group: 'Heavy',
    tags: ['doom', 'fuzz', 'stoner', 'slow', 'thick', 'parallel'],
    difficulty: 'Advanced',
    routing: 'Parallel clean anchor and fuzz row into shared amp/cab',
    vibe: 'Massive fuzz voice with a dry center that keeps chords readable',
    description:
      'A thick fuzz preset that splits after the gate: one row preserves note attack, the other carries the saturated fuzz mass. The rows merge into the amp/cab and shared ambience.',
    blockOrder: ['gate-expander', 'volume-pan', 'drive', 'filter', 'mixer', 'amp', 'cab', 'delay', 'reverb'],
    parallelRouting: {
      splitLabel: 'Split after gate',
      mergeLabel: 'Merge before amp/cab',
      input: {
        name: 'Front control',
        role: 'Gate clamps stops before either row starts feeding the amp.',
        blockOrder: ['gate-expander'],
      },
      rows: [
        {
          name: 'Clean anchor',
          role: 'A level-only row keeps pick attack and chord roots stable.',
          blockOrder: ['volume-pan', 'mixer'],
        },
        {
          name: 'Fuzz mass',
          role: 'Drive and filter create the heavy lane without burying the clean row.',
          blockOrder: ['drive', 'filter', 'mixer'],
        },
      ],
      output: {
        name: 'Shared cabinet and space',
        role: 'The merged signal hits amp, cab, delay, and reverb as one wall.',
        blockOrder: ['amp', 'cab', 'delay', 'reverb'],
      },
    },
    scenes: [
      { name: 'Scene 1: Monolith', note: 'Fuzz sustain high, filter trims sub lows, reverb dark and short.' },
      { name: 'Scene 2: Octave Lift', note: 'Drive tone opened and delay added for upper-register riffs.' },
      { name: 'Scene 3: Feedback', note: 'Reverb and delay feedback raised for held notes, gate relaxed.' },
    ],
  },
  {
    id: 'ambient-shimmer-pad',
    name: 'Ambient Shimmer Pad',
    group: 'Ambient',
    tags: ['ambient', 'shimmer', 'swell', 'stereo', 'worship', 'parallel'],
    difficulty: 'Intermediate',
    routing: 'Parallel dry body and shimmer row after the clean core',
    vibe: 'Long clean swells with a focused dry body under the octave cloud',
    description:
      'A clean swell preset that keeps the amp/cab body intact while a separate shimmer lane blooms around it. The Mixer balances definition against long-tail atmosphere.',
    blockOrder: ['volume-pan', 'compressor', 'amp', 'cab', 'plex-delay', 'reverb', 'mixer'],
    parallelRouting: {
      splitLabel: 'Split after cab',
      mergeLabel: 'Blend dry and shimmer',
      input: {
        name: 'Clean swell core',
        role: 'Volume, compression, amp, and cab shape the source before ambience splits.',
        blockOrder: ['volume-pan', 'compressor', 'amp', 'cab'],
      },
      rows: [
        {
          name: 'Dry body',
          role: 'A centered lane keeps the swelled note readable.',
          blockOrder: ['mixer'],
        },
        {
          name: 'Shimmer cloud',
          role: 'Plex Delay and long reverb create octave bloom around the dry lane.',
          blockOrder: ['plex-delay', 'reverb', 'mixer'],
        },
      ],
    },
    scenes: [
      { name: 'Scene 1: Pad', note: 'Volume swells into long reverb, pitch mix moderate, dry level softened.' },
      { name: 'Scene 2: Cloud', note: 'Plex feedback and reverb time raised for sustained harmonic bloom.' },
      { name: 'Scene 3: Clear Lead', note: 'Plex mix reduced, delay or reverb predelay increased so melody stays readable.' },
    ],
    buildSheet: {
      globals: [
        { label: 'Tempo', value: '78 BPM', note: 'Slow tempo so swells and shimmer cloud breathe.' },
        { label: 'Input 1 Gate', value: 'OFF', note: 'Pads need long tails — gate would chop them.' },
        { label: 'Output 1', value: 'Stereo wide', note: 'Keep dry centered, shimmer fully stereo.' },
        { label: 'Pedal 1', value: 'Volume swell (Expression 1)', note: 'Linked to Volume/Pan Bypass.' },
      ],
      blocks: [
        {
          blockId: 'volume-pan',
          type: 'Volume/Pan',
          params: [
            { name: 'Level', value: '-INF → 0.0 dB (Expression)' },
            { name: 'Taper', value: 'Audio (log)' },
            { name: 'Pan', value: '0 (centre)' },
          ],
          note: 'Modifier: External 1 → Level. Auto-engage off.',
        },
        {
          blockId: 'compressor',
          type: 'Studio C (transparent leveler)',
          params: [
            { name: 'Ratio', value: '2.5 : 1' },
            { name: 'Threshold', value: '-20 dB' },
            { name: 'Attack', value: '15 ms' },
            { name: 'Release', value: '120 ms' },
            { name: 'Level', value: '+1 dB' },
          ],
        },
        {
          blockId: 'amp',
          type: 'AC-20 (Class-A, edge of breakup)',
          channels: [{ channel: 'A', role: 'Edge-of-breakup with Master high, Drive low.' }],
          params: [
            { name: 'Drive', value: '4.0' },
            { name: 'Master', value: '8.0' },
            { name: 'Bass', value: '4.0' },
            { name: 'Mid', value: '6.0' },
            { name: 'Treble', value: '5.0' },
            { name: 'Cut', value: '5.0' },
          ],
        },
        {
          blockId: 'cab',
          type: 'DynaCab 2x12 Blue Alnico',
          params: [
            { name: 'IR 1', value: 'R-121 ribbon, 6 in axis' },
            { name: 'IR 1 Level', value: '0.0 dB' },
            { name: 'Low Cut', value: '90 Hz' },
            { name: 'High Cut', value: '8.0 kHz' },
          ],
        },
        {
          blockId: 'plex-delay',
          type: 'Octave Plex',
          params: [
            { name: 'Time', value: '600 ms' },
            { name: 'Feedback', value: '45%' },
            { name: 'Mix', value: '38%' },
            { name: 'Pitch Voice 1', value: '+12 semitones' },
            { name: 'Pitch Voice 2', value: '+19 semitones' },
            { name: 'Diffusion', value: '55%' },
            { name: 'Low Cut', value: '250 Hz' },
            { name: 'High Cut', value: '6.0 kHz' },
          ],
        },
        {
          blockId: 'reverb',
          type: 'Cathedral + Shimmer',
          params: [
            { name: 'Time', value: '8.0 s' },
            { name: 'Predelay', value: '40 ms' },
            { name: 'Mix', value: '45%' },
            { name: 'Pitch Mix', value: '30%' },
            { name: 'Pitch Shift', value: '+12 semitones' },
            { name: 'Mod Depth', value: '20%' },
            { name: 'Low Cut', value: '200 Hz' },
            { name: 'High Cut', value: '7.0 kHz' },
          ],
        },
        {
          blockId: 'mixer',
          type: '4 in × 2 out',
          params: [
            { name: 'In 1 Level (dry body)', value: '-2.0 dB' },
            { name: 'In 2 Level (shimmer)', value: '-5.0 dB' },
            { name: 'In 1 Pan', value: 'Centre' },
            { name: 'In 2 Pan', value: '100% wide' },
          ],
          note: 'Sums the dry lane and the Plex+Reverb shimmer lane.',
        },
      ],
      scenes: [
        {
          name: 'Scene 1: Pad',
          summary: 'Swell-driven pad. Shimmer present but balanced under the dry lane.',
          blockStates: [
            { blockId: 'volume-pan', state: 'on' },
            { blockId: 'compressor', state: 'on' },
            { blockId: 'amp', state: { channel: 'A' } },
            { blockId: 'cab', state: 'on' },
            { blockId: 'plex-delay', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '32%' }] } },
            { blockId: 'reverb', state: { bypass: 'on', overrides: [{ name: 'Pitch Mix', value: '28%' }] } },
            { blockId: 'mixer', state: 'on' },
          ],
        },
        {
          name: 'Scene 2: Cloud',
          summary: 'Pump the shimmer — long reverb, more Plex feedback. Dry retreats slightly.',
          blockStates: [
            { blockId: 'volume-pan', state: 'on' },
            { blockId: 'compressor', state: 'on' },
            { blockId: 'amp', state: { channel: 'A' } },
            { blockId: 'cab', state: 'on' },
            { blockId: 'plex-delay', state: { bypass: 'on', overrides: [{ name: 'Feedback', value: '65%' }, { name: 'Mix', value: '45%' }] } },
            { blockId: 'reverb', state: { bypass: 'on', overrides: [{ name: 'Time', value: '12.0 s' }, { name: 'Pitch Mix', value: '40%' }] } },
            { blockId: 'mixer', state: { overrides: [{ name: 'In 2 Level (shimmer)', value: '-2.0 dB' }] } },
          ],
        },
        {
          name: 'Scene 3: Clear Lead',
          summary: 'Lead over the bed. Shimmer tucks down; reverb predelay opens for melody clarity.',
          blockStates: [
            { blockId: 'volume-pan', state: 'off' },
            { blockId: 'compressor', state: 'on' },
            { blockId: 'amp', state: { channel: 'A' } },
            { blockId: 'cab', state: 'on' },
            { blockId: 'plex-delay', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '20%' }] } },
            { blockId: 'reverb', state: { bypass: 'on', overrides: [{ name: 'Predelay', value: '120 ms' }, { name: 'Mix', value: '35%' }, { name: 'Pitch Mix', value: '18%' }] } },
            { blockId: 'mixer', state: { overrides: [{ name: 'In 2 Level (shimmer)', value: '-8.0 dB' }] } },
          ],
        },
      ],
      checks: [
        'Build the parallel rows on different grid rows so the Mixer block actually receives both feeds.',
        'Set Plex Delay and Reverb bypass mode = "Mute FX out" — preserves tails across scene changes.',
        'On FM3, Plex Delay competes for DSP with Cab — bypass Cab\'s second IR to free headroom.',
      ],
    },
  },
  {
    id: 'post-rock-swell',
    name: 'Post-Rock Swell Wall',
    group: 'Ambient',
    tags: ['post-rock', 'swell', 'delay', 'wide', 'cinematic', 'parallel'],
    difficulty: 'Advanced',
    routing: 'Three parallel rows after the amp/cab core',
    vibe: 'Expanding guitar layers from dry swells to stereo rhythmic beds',
    description:
      'A performance preset for slow builds: one row keeps the core tone, one row carries rhythmic delay, and one row captures a reverb/looper bed for crescendos.',
    blockOrder: ['volume-pan', 'drive', 'amp', 'cab', 'delay', 'reverb', 'looper', 'mixer'],
    parallelRouting: {
      splitLabel: 'Split after cab',
      mergeLabel: 'Three-row build mix',
      input: {
        name: 'Swell and gain core',
        role: 'Volume pedal, drive, amp, and cab set the phrase before it fans out.',
        blockOrder: ['volume-pan', 'drive', 'amp', 'cab'],
      },
      rows: [
        {
          name: 'Dry phrase',
          role: 'The cleanest lane holds timing and pitch center.',
          blockOrder: ['mixer'],
        },
        {
          name: 'Rhythmic delay',
          role: 'Tempo repeats widen the build without taking over the dry lane.',
          blockOrder: ['delay', 'mixer'],
        },
        {
          name: 'Reverb bed',
          role: 'Long reverb and looper capture the cinematic layer.',
          blockOrder: ['reverb', 'looper', 'mixer'],
        },
      ],
    },
    scenes: [
      { name: 'Scene 1: Swell', note: 'Drive bypassed, delay dotted eighth, reverb long and dark.' },
      { name: 'Scene 2: Build', note: 'Drive low gain, delay feedback raised, loop-ready level kept controlled.' },
      { name: 'Scene 3: Crest', note: 'Drive and amp gain lifted, reverb low cut high, output level matched to band peak.' },
    ],
  },
  {
    id: 'shoegaze-reverse-fuzz',
    name: 'Shoegaze Reverse Fuzz',
    group: 'Ambient',
    tags: ['shoegaze', 'reverse', 'fuzz', 'wall-of-sound', 'texture', 'parallel'],
    difficulty: 'Advanced',
    routing: 'Four parallel texture rows after fuzz amp/cab',
    vibe: 'Reverse smear, modulation movement, reverb cloud, and a dry anchor',
    description:
      'A deliberately textural preset with four parallel lanes: dry anchor, reverse delay, modulation smear, and reverb cloud. It is dense, but the rows keep the wash controllable.',
    blockOrder: ['drive', 'amp', 'cab', 'delay', 'flanger', 'reverb', 'enhancer', 'mixer'],
    parallelRouting: {
      splitLabel: 'Split after fuzz amp/cab',
      mergeLabel: 'Four-row texture mix',
      input: {
        name: 'Fuzz source',
        role: 'Drive, amp, and cab create the unified fuzz voice before the texture split.',
        blockOrder: ['drive', 'amp', 'cab'],
      },
      rows: [
        {
          name: 'Dry anchor',
          role: 'A low-level centered lane keeps chords from disappearing.',
          blockOrder: ['mixer'],
        },
        {
          name: 'Reverse smear',
          role: 'Reverse delay supplies the backwards pull.',
          blockOrder: ['delay', 'mixer'],
        },
        {
          name: 'Mod sweep',
          role: 'Flanger adds slow motion across the wall.',
          blockOrder: ['flanger', 'mixer'],
        },
        {
          name: 'Cloud width',
          role: 'Reverb and enhancer create the wide atmospheric layer.',
          blockOrder: ['reverb', 'enhancer', 'mixer'],
        },
      ],
    },
    scenes: [
      { name: 'Scene 1: Reverse Clean', note: 'Drive off, reverse delay obvious, reverb moderate for readable chords.' },
      { name: 'Scene 2: Fuzz Wash', note: 'Drive on, delay mix high, flanger slow and wide after the repeats.' },
      { name: 'Scene 3: Collapse', note: 'Feedback and reverb time raised for transitions, output trimmed to avoid level spikes.' },
    ],
  },
  {
    id: 'funk-filter-machine',
    name: 'Funk Filter Machine',
    group: 'Modulation',
    tags: ['funk', 'filter', 'auto-wah', 'clean', 'single-coils'],
    difficulty: 'Quick build',
    routing: 'Serial',
    vibe: 'Tight envelope-filter rhythm with snap and controlled low end',
    description:
      'A clean preset for funk and neo-soul rhythm parts: compression stabilizes attack, filter responds to picking, amp stays clean, and ambience stays short.',
    blockOrder: ['compressor', 'filter', 'amp', 'cab', 'delay', 'reverb'],
    scenes: [
      { name: 'Scene 1: Quack', note: 'Envelope depth high, compressor even, slap delay almost dry.' },
      { name: 'Scene 2: Muted Rhythm', note: 'Filter sensitivity reduced, low end trimmed, reverb shorter.' },
      { name: 'Scene 3: Solo Filter', note: 'Output lift, filter range opened, delay mix raised for single-note lines.' },
    ],
  },
  {
    id: 'rotary-soul-lead',
    name: 'Rotary Soul Lead',
    group: 'Modulation',
    tags: ['rotary', 'soul', 'organ', 'stereo', 'lead'],
    difficulty: 'Intermediate',
    routing: 'Serial with speed control',
    vibe: 'Warm organ-like guitar with footswitchable rotary motion',
    description:
      'A warm amp into a rotary block with real slow/fast behavior, short delay, and room or plate ambience. It works for chords and vocal lead lines.',
    blockOrder: ['compressor', 'amp', 'cab', 'rotary', 'delay', 'reverb'],
    scenes: [
      { name: 'Scene 1: Slow Rotor', note: 'Rotary speed slow, amp warm, delay barely present.' },
      { name: 'Scene 2: Fast Rotor', note: 'Fast speed engaged, output trimmed if the modulation adds perceived level.' },
      { name: 'Scene 3: Lead Rotary', note: 'Drive or amp gain raised slightly, delay and plate added after rotary.' },
    ],
  },
  {
    id: 'eighties-chorus-clean',
    name: 'Eighties Chorus Clean',
    group: 'Modulation',
    tags: ['chorus', 'stereo', '80s', 'clean', 'rack'],
    difficulty: 'Quick build',
    routing: 'Serial with stereo post effects',
    vibe: 'Glossy stereo clean with rack-style width and polished delay',
    description:
      'A rack-inspired clean preset with compression, pristine amp voice, wide chorus, digital delay, and plate reverb.',
    blockOrder: ['compressor', 'amp', 'cab', 'chorus', 'delay', 'reverb'],
    scenes: [
      { name: 'Scene 1: Gloss', note: 'Chorus wide but shallow, delay low, plate around two seconds.' },
      { name: 'Scene 2: Ballad', note: 'Delay and reverb mix raised, compressor sustain increased for clean lines.' },
      { name: 'Scene 3: Dry Pop', note: 'Chorus depth lower, delay short, low end tightened for rhythm parts.' },
    ],
  },
  {
    id: 'bass-di-amp-blend',
    name: 'Bass DI Amp Blend',
    group: 'Bass & direct',
    tags: ['bass', 'di', 'parallel', 'studio', 'drive'],
    difficulty: 'Advanced',
    routing: 'Parallel DI and amp rows into Mixer',
    vibe: 'Studio bass preset with clean attack and driven amp body',
    description:
      'A parallel bass preset that keeps a clean DI lane for definition and blends a driven amp/cab lane for size and harmonic weight.',
    blockOrder: ['compressor', 'drive', 'amp', 'cab', 'mixer', 'parametric-eq'],
    parallelRouting: {
      splitLabel: 'Split after compressor',
      mergeLabel: 'DI and amp blend',
      input: {
        name: 'Shared compression',
        role: 'One compressor evens the performance before DI and amp rows split.',
        blockOrder: ['compressor'],
      },
      rows: [
        {
          name: 'DI row',
          role: 'Clean transient and full-range low end into the final blend.',
          blockOrder: ['mixer'],
        },
        {
          name: 'Amp row',
          role: 'Driven harmonic body shaped by cab before the rows rejoin.',
          blockOrder: ['drive', 'amp', 'cab', 'mixer'],
        },
      ],
      output: {
        name: 'Post-blend EQ',
        role: 'PEQ trims boom and pick edge after both rows sum.',
        blockOrder: ['parametric-eq'],
      },
    },
    scenes: [
      { name: 'Scene 1: Clean DI Blend', note: 'DI lane dominates, drive low, PEQ controls low-mid bloom.' },
      { name: 'Scene 2: Driven Amp', note: 'Driven lane raised, compressor release tuned to groove tempo.' },
      { name: 'Scene 3: Pick Attack', note: 'Upper mids lifted and drive tone brightened for pick or aggressive fingerstyle.' },
    ],
  },
  {
    id: 'synth-bass-hybrid',
    name: 'Synth Bass Hybrid',
    group: 'Bass & direct',
    tags: ['synth', 'bass', 'tracking', 'parallel', 'electronic'],
    difficulty: 'Advanced',
    routing: 'Parallel clean and Synth rows',
    vibe: 'Tracked synth weight blended under normal instrument articulation',
    description:
      'A hybrid preset where a clean bass or guitar lane keeps attack while Synth adds octave weight. Compression before tracking keeps the synth stable.',
    blockOrder: ['compressor', 'synth', 'filter', 'amp', 'cab', 'mixer'],
    parallelRouting: {
      splitLabel: 'Split after detector compression',
      mergeLabel: 'Synth and instrument blend',
      input: {
        name: 'Detector input',
        role: 'Compression stabilizes the note envelope before the split.',
        blockOrder: ['compressor'],
      },
      rows: [
        {
          name: 'Synth row',
          role: 'Octave or square-wave support filtered before the blend.',
          blockOrder: ['synth', 'filter', 'mixer'],
        },
        {
          name: 'Instrument row',
          role: 'Normal amp/cab tone preserves pitch definition and attack.',
          blockOrder: ['amp', 'cab', 'mixer'],
        },
      ],
    },
    scenes: [
      { name: 'Scene 1: Sub Layer', note: 'Synth one octave down, filter rounded, dry lane remains dominant.' },
      { name: 'Scene 2: Square Hook', note: 'Synth mix raised with square wave edge for featured riffs.' },
      { name: 'Scene 3: Dry Reset', note: 'Synth reduced or bypassed, amp lane centered for normal bass support.' },
    ],
  },
  {
    id: 'acoustic-direct-stage',
    name: 'Acoustic Direct Stage',
    group: 'Bass & direct',
    tags: ['acoustic', 'direct', 'utility', 'no-amp', 'live'],
    difficulty: 'Intermediate',
    routing: 'Direct, no Amp or Cab block',
    vibe: 'Electric-to-acoustic utility tone for live sets and layering',
    description:
      'A no-amp preset that reshapes an electric pickup with filtering, PEQ, compression, and room ambience for acoustic-style parts.',
    blockOrder: ['compressor', 'filter', 'parametric-eq', 'enhancer', 'reverb'],
    scenes: [
      { name: 'Scene 1: Strum', note: 'EQ adds upper sparkle and cuts low-mid boxiness, room reverb natural.' },
      { name: 'Scene 2: Fingerstyle', note: 'Compression softer, high shelf slightly lower, reverb mix raised.' },
      { name: 'Scene 3: Band Mix', note: 'Enhancer reduced, mids lifted so the part survives in a dense arrangement.' },
    ],
  },
  {
    id: 'cover-gig-command',
    name: 'Cover Gig Command',
    group: 'Performance',
    tags: ['live', 'scenes', 'cover-band', 'compact', 'fm3'],
    difficulty: 'Intermediate',
    routing: 'Serial with scene-controlled bypass and channels',
    vibe: 'One preset covering clean, crunch, lead, and special moments',
    description:
      'A compact performance preset with wah, compressor, drive, one flexible amp, shared cab, delay, reverb, and optional MIDI scene output.',
    blockOrder: ['wahwah', 'compressor', 'drive', 'amp', 'cab', 'delay', 'reverb', 'scene-midi'],
    scenes: [
      { name: 'Scene 1: Clean', note: 'Compressor on, drive off, amp channel clean, delay and reverb low.' },
      { name: 'Scene 2: Crunch', note: 'Drive or amp channel changes to rhythm gain, ambience stays controlled.' },
      { name: 'Scene 3: Lead', note: 'Boost and delay on, reverb predelay long, scene MIDI can trigger external changes.' },
    ],
    buildSheet: {
      globals: [
        { label: 'Tempo', value: '120 BPM (Tap)', note: 'Tap-tempo assigned to FC pad in Layout 2.' },
        { label: 'Input 1 Gate', value: '-60 dB' },
        { label: 'Output 1', value: 'Stereo line-level', note: 'Send L/R to FOH; mono compatible.' },
        { label: 'Output 2', value: 'Stage monitor (post-IR)' },
        { label: 'Pedal 1', value: 'Wah (Expression 1)', note: 'Auto-engage on toe-down.' },
      ],
      blocks: [
        {
          blockId: 'wahwah',
          type: 'Modern Stereo Wah (Clyde)',
          params: [
            { name: 'Frequency', value: 'Modifier → Ext 1' },
            { name: 'Q', value: '2.0' },
            { name: 'Range', value: '300 Hz - 2.2 kHz' },
            { name: 'Auto-engage', value: 'ON, position 5%' },
          ],
        },
        {
          blockId: 'compressor',
          type: 'Studio C',
          params: [
            { name: 'Ratio', value: '3.0 : 1' },
            { name: 'Threshold', value: '-18 dB' },
            { name: 'Attack', value: '12 ms' },
            { name: 'Release', value: '90 ms' },
            { name: 'Level', value: '+1.5 dB' },
          ],
        },
        {
          blockId: 'drive',
          type: 'BB Pre (boutique mid push)',
          channels: [
            { channel: 'A', role: 'Low-gain push for crunch & lead.' },
            { channel: 'B', role: 'Higher level for lead lift.' },
          ],
          params: [
            { name: 'Drive', value: '2.5' },
            { name: 'Tone', value: '5.5' },
            { name: 'Level', value: '6.5' },
            { name: 'Mix', value: '100%' },
          ],
        },
        {
          blockId: 'amp',
          type: 'Brit Pre / FAS 6160 Modern (multi-channel)',
          channels: [
            { channel: 'A', role: 'Clean — low drive, high master.' },
            { channel: 'B', role: 'Crunch — Bluesy crunch voicing.' },
            { channel: 'C', role: 'Lead — Modern High-Gain voicing.' },
          ],
          params: [
            { name: 'Channel A: Drive', value: '2.5' },
            { name: 'Channel A: Master', value: '8.0' },
            { name: 'Channel B: Drive', value: '5.5' },
            { name: 'Channel B: Master', value: '5.0' },
            { name: 'Channel C: Drive', value: '7.0' },
            { name: 'Channel C: Master', value: '4.0' },
            { name: 'Shared Bass', value: '5.0' },
            { name: 'Shared Mid', value: '6.5' },
            { name: 'Shared Treble', value: '5.5' },
          ],
          note: 'Use the amp\'s 4 channels per scene. Shared tonestack so the preset feels coherent.',
        },
        {
          blockId: 'cab',
          type: 'DynaCab 4x12 V30',
          params: [
            { name: 'IR 1', value: 'SM57 + R-121 blend (factory mix 8)' },
            { name: 'Low Cut', value: '80 Hz' },
            { name: 'High Cut', value: '8.5 kHz' },
          ],
        },
        {
          blockId: 'delay',
          type: 'Stereo Digital',
          params: [
            { name: 'Time L', value: '1/4' },
            { name: 'Time R', value: '1/4 dotted' },
            { name: 'Feedback', value: '25%' },
            { name: 'Mix', value: '18%' },
            { name: 'Low Cut', value: '250 Hz' },
            { name: 'High Cut', value: '5.5 kHz' },
          ],
        },
        {
          blockId: 'reverb',
          type: 'Medium Plate',
          params: [
            { name: 'Time', value: '2.4 s' },
            { name: 'Predelay', value: '30 ms' },
            { name: 'Mix', value: '15%' },
            { name: 'Low Cut', value: '220 Hz' },
            { name: 'High Cut', value: '7.0 kHz' },
          ],
        },
        {
          blockId: 'scene-midi',
          type: 'Scene MIDI block',
          params: [
            { name: 'Scene 1 Msg 1', value: 'PC 0, Ch 1', note: 'Lighting preset "Clean".' },
            { name: 'Scene 2 Msg 1', value: 'PC 1, Ch 1' },
            { name: 'Scene 3 Msg 1', value: 'PC 2, Ch 1' },
            { name: 'Scene 4 Msg 1', value: 'PC 3, Ch 1' },
          ],
          note: 'Optional — only enable if external gear is on the MIDI chain.',
        },
      ],
      scenes: [
        {
          name: 'Scene 1: Clean',
          summary: 'Amp Channel A, drive off, ambience low. Wah ready if toed down.',
          blockStates: [
            { blockId: 'wahwah', state: { bypass: 'on' } },
            { blockId: 'compressor', state: 'on' },
            { blockId: 'drive', state: 'off' },
            { blockId: 'amp', state: { channel: 'A' } },
            { blockId: 'cab', state: 'on' },
            { blockId: 'delay', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '10%' }] } },
            { blockId: 'reverb', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '12%' }] } },
            { blockId: 'scene-midi', state: 'on' },
          ],
        },
        {
          name: 'Scene 2: Crunch',
          summary: 'Amp Channel B; drive bypassed so the channel does the work.',
          blockStates: [
            { blockId: 'wahwah', state: { bypass: 'on' } },
            { blockId: 'compressor', state: { bypass: 'on', overrides: [{ name: 'Ratio', value: '2.0 : 1' }] } },
            { blockId: 'drive', state: 'off' },
            { blockId: 'amp', state: { channel: 'B' } },
            { blockId: 'cab', state: 'on' },
            { blockId: 'delay', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '14%' }] } },
            { blockId: 'reverb', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '12%' }] } },
            { blockId: 'scene-midi', state: 'on' },
          ],
        },
        {
          name: 'Scene 3: Lead',
          summary: 'Amp Channel C + Drive on Ch A. Wide delay/reverb open up.',
          blockStates: [
            { blockId: 'wahwah', state: { bypass: 'on' } },
            { blockId: 'compressor', state: 'off' },
            { blockId: 'drive', state: { channel: 'A' } },
            { blockId: 'amp', state: { channel: 'C' } },
            { blockId: 'cab', state: 'on' },
            { blockId: 'delay', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '22%' }] } },
            { blockId: 'reverb', state: { bypass: 'on', overrides: [{ name: 'Predelay', value: '50 ms' }, { name: 'Mix', value: '20%' }] } },
            { blockId: 'scene-midi', state: 'on' },
          ],
        },
        {
          name: 'Scene 4: Solo Wail',
          summary: 'Drive Channel B for level lift; reverb pulls back so notes stay defined.',
          blockStates: [
            { blockId: 'wahwah', state: { bypass: 'on' } },
            { blockId: 'compressor', state: 'off' },
            { blockId: 'drive', state: { channel: 'B', overrides: [{ name: 'Level', value: '8.0' }] } },
            { blockId: 'amp', state: { channel: 'C', overrides: [{ name: 'Channel C: Master', value: '4.5' }] } },
            { blockId: 'cab', state: 'on' },
            { blockId: 'delay', state: { bypass: 'on', overrides: [{ name: 'Feedback', value: '32%' }, { name: 'Mix', value: '24%' }] } },
            { blockId: 'reverb', state: { bypass: 'on', overrides: [{ name: 'Mix', value: '14%' }] } },
            { blockId: 'scene-midi', state: 'on' },
          ],
        },
      ],
      checks: [
        'Scene-ignore Drive\'s Drive parameter so the boost level changes per scene without affecting Type.',
        'Per-Scene Bypass: enable on Compressor, Drive, Delay, Reverb. Scene-Revert: OFF (Cygnus default).',
        'Layout 1: Scenes 1-4 across 4 pads. Layout 2: Tap, Tuner, Wah Boost, Backup.',
      ],
    },
  },
  {
    id: 'wide-wet-dry',
    name: 'Wide Wet-Dry Core',
    group: 'Performance',
    tags: ['wet-dry', 'stereo', 'parallel', 'live', 'wide'],
    difficulty: 'Advanced',
    routing: 'Parallel dry center with stereo wet row',
    vibe: 'Large stereo image with a centered dry tone that survives mono',
    description:
      'A wet-dry-style preset that keeps amp and cab centered while delay, reverb, and enhancer live on a controlled stereo wet path.',
    blockOrder: ['drive', 'amp', 'cab', 'delay', 'reverb', 'enhancer', 'mixer'],
    parallelRouting: {
      splitLabel: 'Split after cab',
      mergeLabel: 'Dry/wet blend',
      rows: [
        {
          name: 'Dry center',
          role: 'Drive, amp, and cab stay focused and mono-compatible.',
          blockOrder: ['drive', 'amp', 'cab', 'mixer'],
        },
        {
          name: 'Wet stereo row',
          role: 'Delay, reverb, and width are blended around the dry core.',
          blockOrder: ['delay', 'reverb', 'enhancer', 'mixer'],
        },
      ],
    },
    scenes: [
      { name: 'Scene 1: Dry Core', note: 'Wet row low, dry tone centered, enhancer conservative.' },
      { name: 'Scene 2: Wide Rhythm', note: 'Stereo delay and reverb lifted without stealing the dry center.' },
      { name: 'Scene 3: Lead Spread', note: 'Wet row wider and louder, dry level still dominant for FOH translation.' },
    ],
  },
]

const presetVariations: PresetVariation[] = [
  {
    id: 'studio',
    nameSuffix: 'Studio Mix',
    context: 'recording direct into a dense mix',
    tags: ['studio', 'mix-ready'],
    productFocus: 'Axe-Fx III / FM9',
    gainCue: 'Keep gain one notch lower than a solo practice tone and let the level control do the lifting.',
    ambienceCue: 'Use predelay and darker tails so the space reads around the part instead of over it.',
    eqCue: 'Trim lows before time effects and make final EQ decisions against drums and bass.',
  },
  {
    id: 'live',
    nameSuffix: 'Live Room',
    context: 'front-of-house monitoring and a loud stage',
    tags: ['live', 'foh'],
    productFocus: 'FM9 / Axe-Fx III',
    gainCue: 'Scene levels should be matched with the band, not headphones.',
    ambienceCue: 'Keep ambience shorter than the studio version and rely on FOH or room sound for size.',
    eqCue: 'Use a slightly higher low cut and avoid extreme stereo tricks that disappear in mono.',
  },
  {
    id: 'fm3',
    nameSuffix: 'FM3 Compact',
    context: 'FM3-friendly layouts and small-board live rigs',
    tags: ['fm3', 'compact'],
    productFocus: 'FM3',
    gainCue: 'Favor one amp channel and scene-controlled drive levels instead of duplicate blocks.',
    ambienceCue: 'Share delay and reverb across scenes, changing mix and bypass state rather than adding more blocks.',
    eqCue: 'Use the Cab block and a single PEQ as the main tone-shaping tools.',
  },
  {
    id: 'single-coil',
    nameSuffix: 'Single-Coil Focus',
    context: 'Strat, Tele, offset, and other lower-output pickups',
    tags: ['single-coils', 'bright-pickups'],
    productFocus: 'FM3 / FM9 / Axe-Fx III',
    gainCue: 'Raise input trim or drive level only enough to restore sustain while keeping pick attack intact.',
    ambienceCue: 'Let modulation or reverb supply body instead of overloading the amp.',
    eqCue: 'Soften the 3-5 kHz edge when bridge pickups feel sharp.',
  },
  {
    id: 'humbucker',
    nameSuffix: 'Humbucker Focus',
    context: 'medium to hot humbuckers and thicker guitars',
    tags: ['humbuckers', 'thick-pickups'],
    productFocus: 'FM3 / FM9 / Axe-Fx III',
    gainCue: 'Reduce amp gain or input trim before adding low cuts; clarity starts at the front of the preset.',
    ambienceCue: 'Keep wet effects slightly brighter so darker pickups do not vanish behind the band.',
    eqCue: 'Watch 180-350 Hz buildup and avoid excess cab proximity.',
  },
  {
    id: 'extended',
    nameSuffix: 'Extended Range',
    context: 'baritone, seven-string, low-tuned, or extended-range parts',
    tags: ['extended-range', 'low-tuned'],
    productFocus: 'FM9 / Axe-Fx III',
    gainCue: 'Tighten the first gain stage before the amp and use less saturation than expected.',
    ambienceCue: 'High-pass all wet returns so ambience does not cloud the fundamental.',
    eqCue: 'Use narrow low-mid cuts only after checking that the cab choice is not the real problem.',
  },
]

function makePresetId(familyId: string, variationId: string) {
  return `${familyId}-${variationId}`
}

function buildPreset(family: PresetFamily, variation: PresetVariation): Preset {
  return {
    id: makePresetId(family.id, variation.id),
    name: `${family.name}: ${variation.nameSuffix}`,
    group: family.group,
    tags: Array.from(new Set([...family.tags, ...variation.tags])),
    difficulty: family.difficulty,
    routing: family.routing,
    productFocus: variation.productFocus,
    vibe: family.vibe,
    description: `${family.description} Voiced for ${variation.context}.`,
    blockOrder: family.blockOrder,
    parallelRouting: family.parallelRouting,
    buildSheet: family.buildSheet,
    scenes: family.scenes.map((scene) => ({
      name: scene.name,
      note: `${scene.note} ${variation.gainCue} ${variation.ambienceCue} ${variation.eqCue}`,
    })),
  }
}

export const presets: Preset[] = presetFamilies.flatMap((family) =>
  presetVariations.map((variation) => buildPreset(family, variation)),
)
