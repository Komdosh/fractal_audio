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
    scenes: family.scenes.map((scene) => ({
      name: scene.name,
      note: `${scene.note} ${variation.gainCue} ${variation.ambienceCue} ${variation.eqCue}`,
    })),
  }
}

export const presets: Preset[] = presetFamilies.flatMap((family) =>
  presetVariations.map((variation) => buildPreset(family, variation)),
)
