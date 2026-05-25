import { ampModels, type AmpModel } from './ampModels'

// Block catalog for the covered Fractal Audio family: FM3, FM9, and Axe-Fx III.
// Instance counts and product-only blocks are cross-checked against the Fractal
// Audio Wiki effects list and product comparison notes.

export type BlockCategory =
  | 'Amp & Cab'
  | 'Drive'
  | 'Delay'
  | 'Reverb'
  | 'Modulation'
  | 'Pitch'
  | 'Dynamics'
  | 'EQ & Filter'
  | 'Utility'
  | 'Synthesis'

export interface BlockParameter {
  name: string
  description: string
}

export type BlockTypeFamily =
  | 'Overdrive'
  | 'Distortion'
  | 'Fuzz'
  | 'Boost'
  | 'Lo-Fi'
  | 'Delay Engine'
  | 'Room'
  | 'Hall'
  | 'Plate'
  | 'Spring'
  | 'Chamber'
  | 'Special'
  | 'Modulation'
  | 'Pitch'
  | 'Dynamics'
  | 'Filter'
  | 'Wah'
  | 'Synth'
  | 'American'
  | 'British'
  | 'Class A'
  | 'Boutique'
  | 'Modern High Gain'
  | 'Bass'
  | 'Other'

/**
 * A single knob / switch / numeric parameter as it appears in FM3-Edit
 * for a given Type. Sourced from the Fractal Audio Blocks Guide.
 */
export interface TypeParameter {
  name: string
  /** Range as it appears on the unit, e.g. "0.00–10.00", "20 Hz–20 kHz", "-80 dB–+20 dB". */
  range?: string
  /** Default value when the Type is first loaded ("Reset to defaults"). */
  default?: string
  /** Optional one-line note about what the control does for this specific type. */
  description?: string
}

/**
 * Parameter group, mapping one tab/page in FM3-Edit's editor panel
 * (e.g. "Drive", "Tone", "EQ", "Expert", "Mix").
 */
export interface TypeParameterGroup {
  title: string
  parameters: TypeParameter[]
}

export type BlockTypeDiagramTone = 'primary' | 'secondary' | 'accent' | 'muted'

export interface BlockTypeDiagramPath {
  d: string
  tone?: BlockTypeDiagramTone
  dashed?: boolean
}

export interface BlockTypeDiagramRegion {
  x: number
  width: number
  label: string
  tone: 'pass' | 'cut' | 'focus'
}

export interface BlockTypeDiagramMarker {
  x: number
  y: number
  label: string
  tone?: BlockTypeDiagramTone
  anchor?: 'start' | 'middle' | 'end'
}

export interface BlockTypeDiagram {
  title: string
  summary: string
  yLabel?: string
  xLabels?: {
    low: string
    mid?: string
    high: string
  }
  regions?: BlockTypeDiagramRegion[]
  paths: BlockTypeDiagramPath[]
  markers?: BlockTypeDiagramMarker[]
}

export interface BlockType {
  id: string
  name: string
  family?: BlockTypeFamily
  /** Real-world pedal/amp/algorithm the model emulates, if any. */
  basedOn?: string
  description: string
  notes?: string
  diagram?: BlockTypeDiagram
  /**
   * Full per-type settings layout as exposed in FM3-Edit when the
   * Type parameter is set to this entry. Grouped by tab/page so the
   * UI renders the same shape across every type.
   */
  settingsLayout?: TypeParameterGroup[]
}

export interface Block {
  id: string
  name: string
  abbreviation: string
  category: BlockCategory
  fm3Instances: number
  /** Total number of available types (display string — e.g. "300+", 22, "60+"). */
  types: number | string
  summary: string
  description: string
  keyParameters: BlockParameter[]
  typicalPosition: string
  tips?: string[]
  /**
   * Per-type catalog when the block's Type parameter selects between
   * meaningful named algorithms, pedal models, or amp models. Omitted for
   * blocks where a dedicated type browser has not been authored yet.
   */
  typeList?: BlockType[]
}

export type FractalProduct = 'fm3' | 'fm9' | 'axeFxIII'

export interface BlockProductAvailability {
  fm3: number | null
  fm9: number | null
  axeFxIII: number | null
  note?: string
}

export const productOrder: FractalProduct[] = ['fm3', 'fm9', 'axeFxIII']

export const productLabels: Record<FractalProduct, string> = {
  fm3: 'FM3',
  fm9: 'FM9',
  axeFxIII: 'Axe-Fx III',
}

// ───────────────────────────────────────────────────────────────────────────
// Verified Type-dropdown catalogs — captured live from FM3-Edit on FM3
// firmware 12.00 (May 2026). These are the COMPLETE lists of types that
// ship in the unit. Blocks with a Type browser map these lists into
// dedicated type pages with source-backed images and settings layouts.
// ───────────────────────────────────────────────────────────────────────────

export const verifiedTypeCatalogs = {
  drive: [
    '77 Custom OD',
    'Angry Chuck',
    'BB Pre',
    'BB Pre AT',
    'Bender Fuzz',
    'Bit Crusher',
    'Blackglass 7K',
    'Blues OD',
    'Bosom Boost',
    "Box o' Crunch",
    'Colortone Booster',
    'Colortone OD',
    'Compulsion Distortion HP',
    'Compulsion Distortion LP',
    'DS1 Distortion',
    'DS1 Distortion Mod',
    'Esoteric ACB',
    'Esoteric Bass RCB',
    'Esoteric RCB',
    'Eternal Love',
    'Face Fuzz',
    'FAS Boost',
    'FAS LED-Drive',
    'Fat Rat',
    'FET Boost',
    'FET Preamp',
    'Full OD',
    'Gauss Drive',
    'Griddle Cake',
    'Guardian Photon Speed',
    'Hard Fuzz',
    'Heartpedal 11',
    'Hoodoo Drive',
    'Horizon Precision Drive',
    'Integral Pre',
    'Jam Ray',
    'Klone Chiron',
    'M-Zone Distortion',
    'Master Fuzz',
    'Maxoff 808',
    'MCMLXXXI DRV',
    'Micro Boost',
    'Mid Boost',
    'MOSFET Distortion',
    'NoAmp Bass DI',
    'NoAmp Bass Pre',
    'Nobellium OVD-1',
    'Octave Distortion',
    'OD 250',
    'OD 250 Gray',
    'OD-One Overdrive',
    'Paradigm Shifter',
    'PI Fuzz',
    'PI Fuzz - Bass',
    'PI Fuzz - Triangle',
    "PI Fuzz - Ram's Head",
    'PI Fuzz - Russian',
    'Plus Distortion',
    'Rat Distortion',
    'Royal Bass DI',
    'SDD Preamp',
    'Shimmer Drive',
    'Shred Distortion',
    'Sonic Drive',
    'Suhr Riot Ge (R)',
    'Suhr Riot LED (L)',
    'Suhr Riot LED/Si (M)',
    'Sunrise Splendor',
    'Sunrise Splendor Hi-Cut',
    'Super Fuzz',
    'Super OD',
    'Swedish Metal',
    'T808 OD',
    'T808 Mod',
    'Tape Distortion',
    'Timothy Down',
    'Timothy Mid',
    'Timothy Up',
    'Tone of Kings',
    'Treble Boost',
    'TS9DX +',
    'TS9DX Hot',
    'Tube Drive 3-Knob',
    'Tube Drive 4-Knob',
    'Tube Drive 5-Knob',
    'Valve Screamer VS9',
    'Zen Master'
  ],
  reverb: [
    'Ambience', 'Andromeda', 'Aquarius', 'Asylum Hall', 'British Spring',
    'Capricorn', 'Cavern', 'Centaurus', 'Chorus Hall', 'Cirrocumulus',
    'Colosseum', 'Concert Hall', 'Cumulonimbus', 'Deep Chamber', 'Deep Space',
    'Deluxe Spring', 'Drum Room', 'Echo Hall', 'Echo Pitch Plate', 'Echo Plate',
    'Echo Room', 'Fields Of Pyrite', 'Gemini', 'Gold Plate', 'Gymnasium',
    'Hallway', 'Huge Room', 'Ice Castle', 'Large Chamber', 'Large Deep Hall',
    'Large Hall', 'Large Plate', 'Large Room', 'Large Spring',
    'Large Tiled Room', 'Large Wooden Room', 'London Plate', 'Lush Spring',
    'Marble Hall', 'Mausoleum', "Mechanic's Hall", 'Medium Chamber',
    'Medium Hall', 'Medium Plate', 'Medium Room', 'Medium Spring',
    'Music Hall', 'Nashville Church', 'Nimbostratus', 'North Church',
    'Opera House', 'Pegasus', 'Pleiades', 'Recording Studio A',
    'Recording Studio C', 'Sagittarius', 'Small Chamber', 'Small Hall',
    'Small Plate', 'Small Room', 'Small Spring', 'South Church',
    'St. Albans Cathedral', "St. George's Church", 'Stone Quarry',
    'Stratocumulus', 'Studio', 'Studio Spring', 'Sun Plate', 'Symphony Hall',
    'Tube Spring', 'Tunnel', 'Ursa Major', 'Vibrato-King Custom Spring',
    'Vibrato-King Spring', 'Vocal Plate', 'Warehouse', 'Wide Hall',
    'York Minster Cathedral',
  ],
  delay: [
    '2290 W/ Modulation', 'Ambient Stereo', 'Analog Mono', 'Analog Stereo',
    'Deluxe Mind Guy', 'Digital Mono', 'Digital Stereo', 'Dm-Two Delay',
    'Dual Delay', 'Dual Head Tape', 'Ducking Delay', 'Graphite Copy Delay',
    'Lo-Fi Tape', 'Mono BBD', 'Mono Tape', 'Pan Delay', 'Ping-Pong',
    'Reverse Delay', 'Stereo BBD', 'Stereo Mind Guy', 'Stereo Tape',
    'Stereo Trem Delay', 'Surround Delay', 'Sweep Delay', 'Vintage Digital',
    'Wandering Delays', 'Worn Tape',
  ],
  chorus: [
    'Digital Mono', 'Digital Stereo', 'Analog Mono', 'Analog Stereo',
    'Japan CE-2', 'Warm Stereo', "80's Style", 'Triangle Chorus',
    '8-Voice Stereo', 'Tape Chorus', 'Dimension 1', 'Dimension 2',
    'Dimension 3', '4-Voice Analog', '8-Voice Analog', 'Stereo Tri-Chorus',
    'Dual Chorus', 'Tape Flanger', 'Japan CE-1 Chorus',
    'Japan CE-1 Vibrato', 'Japan CH-1', 'MX234', 'Small Copy',
    'Japan CE-2 Bass', 'Vibrato', 'Rockguy', 'MX234 Stereo',
  ],
  flanger: [
    'Digital Mono', 'Digital Stereo', 'Analog Mono', 'Analog Stereo',
    'Thru-Zero', 'Stereo Jet', 'Zero Flanger', 'Pop Flanger', 'MXF-117',
    'BBF-2', 'Electric Mystery', 'Deluxe Mystery', 'D/AD 185',
    'Manual Thru-Zero Flanger', 'Step Flanger', 'FAS Flanger',
    'Binary Flange', 'Cancel Flange', 'Count of Flanging', 'Cuda Flange',
    'Harmonoflange', 'Hemisflange', 'Lofty Flange', 'Melodic Flange',
    "80's Rack Flanger", 'Scion Stereo Flange', 'Spirit Flange',
    'Starship Flanger', 'Trippy Flanger', 'Tubular', 'Vowel Flanger',
  ],
  phaser: [
    'Barber Pole', 'Block 90', 'Borg Phaser', 'Classic Vibe',
    'Digital Mono', 'Digital Stereo', 'FAS Vibe', 'Modern Vibe',
    'Mutated Twin-Phaser', 'Naughty Rock', 'Script 45', 'Script 90',
    'Stereo 8-Stage', 'Stripe 90', 'Treadle-Phaser',
    'Ultra-Super-Mega Phaser', 'Virtuoso Phaser',
  ],
  tremolo: [
    'Bias Trem', 'Harmonic Trem', 'Neon Trem', 'Optical Trem 1',
    'Optical Trem 2', 'Panner', 'VCA Trem',
  ],
  pitch: [
    'Advanced Whammy', 'Arpeggiator', 'Classic Whammy', 'Crystal Echoes',
    'Custom Shifter', 'Dual Chromatic', 'Dual Detune', 'Dual Detune Delay',
    'Dual Diatonic', 'Octave Divider', 'Quad Chromatic',
    'Quad Chromatic Delay', 'Quad Detune', 'Quad Diatonic',
    'Quad Diatonic Delay', 'Virtual Capo',
  ],
  compressor: [
    'Analog Compressor', 'Analog Sustainer', 'Citrus Juicer',
    'Classic VCA Compressor', 'Compander', 'Dynami-Comp Classic',
    'Dynami-Comp Modern', 'Dynami-Comp Soft', 'Dynamics Processor',
    'Econo-Dyno-Comp', 'JFET Pedal Compressor', 'JFET Studio Compressor',
    'Modern VCA Compressor', 'Optical Compressor', 'Rockguy Compressor',
    'Vari-Mu Tube Compressor', 'VCA Bus Compressor', 'VCA FB Sustainer',
    'VCA FF Sustainer',
  ],
  wahwah: [
    'Clyde', 'Color-Tone', 'Cry Babe', 'FAS Wah', 'Funk Wah', 'Mortal',
    'Paragon', 'Vx845', 'Vx846',
  ],
  'gate-expander': [
    'Classic Expander', 'Modern Expander', 'Classic Gate', 'Modern Gate',
  ],
  'graphic-eq': [
    '3 Band Console', '3 Band Passive', '4 Band Passive',
    '5 Band Constant Q', '5 Band Passive', '5 Band Variable Q',
    '7 Band Constant Q', '7 Band Variable Q', '7 Band Pedal',
    '7 Band Bass Pedal', '8 Band Constant Q', '8 Band Variable Q',
    'Band 2/3 Octave Constant Q', 'Band 2/3 Octave Variable Q',
    '10 Band Constant Q', '10 Band Variable Q', '5 Band Mark',
    '4 Band JM-PRE 1',
  ],
  'parametric-eq': ['Shelving', 'Peaking', 'Blocking', 'Shelving 2', 'Peaking 2'],
  filter: [
    'Allpass', 'Auto-Wah', 'Band-Pass', 'Envelope Filter',
    'Feedback Comb', 'Feedforward Comb', 'Highpass', 'High-Shelf',
    'High-Shelf 2', 'Low-Pass', 'Low-Shelf', 'Low-Shelf 2', 'Notch',
    'Null', 'Peaking', 'Peaking 2', 'Tilt EQ', 'Touch Wah',
  ],
  enhancer: ['Modern', 'Classic', 'Stereoizer'],
  'plex-delay': [
    'Ambient Depths', 'Bronze Harps', 'Cacophonizer', 'Celestial Shimmer',
    'Critters', 'Dancing Detune', 'Delay Swell', 'Demi-Semi Delay',
    'Detuned Space', 'Detuned Space 2', 'Discrete Echoes',
    'Dissolving 16ths', 'Echo Hall', 'Econo Shimmer', 'Econo Shimmer 2',
    'Ganymede', 'Gnome Shifter', 'Gold Harps', 'Golden Delay',
    'Golden Detune', 'Golden Shimmer', 'Granular Echoes', 'Gritty Shimmer',
    'Helium Shimmer', 'Intrigue', 'Lunar Detuner', 'Melting Delays',
    'Mod Wash', 'Occult Verb', 'Occult Verb 2', 'Ping-Pong Reverse',
    'Plex Delay', 'Plex Detune', 'Plex Shift', 'Plex Tape Echoes',
    'Plex Verb', 'Reverse Oct 4', 'Reverse Oct 8', 'Reverse Plex',
    'Scintillation', 'Shimmer Verb', 'Sirocco', 'Subtone Shimmer',
    'The Cyntherians', 'Sample/Hold Delay',
  ],
  'multitap-delay': [
    '1210', 'A.H. Clean Long', 'A.H. Clean Short', 'A.H. Lead Long',
    'A.H. Lead Short', 'A.H. Swell Long', 'A.H. Swell Short', 'Aerosol',
    'Ambient Quad Tape', 'Ambient Tape Delay', 'Aurora Delay',
    'Circular Delays', 'Comb Filter Delay', 'Dub Echo',
    'Filtered Mod Band Delay', 'L-C-R-C', 'MD Chorus', 'Mono Diffusor',
    'PCM Circular', 'PCM Pan', 'Pealing Bells', 'Quad Chorus',
    'Quad Diffusor', 'Quad Parallel Delay', 'Quad Series Delay',
    'Quad Tape Band Delay', 'Quad Tape Delay', 'Quad-Tap Delay',
    'Rhythmic Bands', 'Shadows Taps', 'Space Tape', 'Stereo Shadows',
    'Swing Ping', 'Ya-Ya Delay', 'Matterhorn', 'Centaurus X-3',
    'Kilmanjaro', 'Strange Things', 'Camera Obscura',
  ],
  megatap: [
    'Bounce', 'Bounce Reverb', 'Brute Force Reverb', 'Creaky', 'Deceptions',
    'Diffused Ping-Pong Echo', 'Diffusion Swirl', 'Echo Room',
    'Gated Reverb', 'Late Bloomer', 'Lazer Zaps', 'Megaverb',
    'Motion Echoes', 'Ping-Pong Echo Verb', 'Reverb Pre-Swell',
    'Reverse Reverb Echo', 'Serpentine Swells', 'Staccato Spread',
    'Tank Taps', 'Tap Verb Grit', 'Tap Verb Plush', 'Take Five',
  ],
  'ten-tap': ['Rhythm Tap Delay', 'Ten-Tap Delay'],
} as const

// ───────────────────────────────────────────────────────────────────────────
// Settings-layout builders. Each per-block builder returns a consistent
// shape so all types in a given block render in the same panel structure
// in the UI (matching what FM3-Edit shows for that block in firmware 12.0+).
// Per-type overrides only customize defaults and, where useful, parameter
// notes — they don't change which controls appear, which keeps the layout
// strictly consistent across types as required.
// ───────────────────────────────────────────────────────────────────────────

// Drive layout VERIFIED against FM3-Edit on FM3 firmware 12.00 (BB Pre type
// inspected live, May 2026 — Basic / Tone / Graphic EQ / Advanced tabs,
// persistent Output column). The Basic tab shows ONLY the knobs the original
// pedal had — Tone/Graphic EQ/Advanced are identical for every Drive type.

interface DriveLayoutOpts {
  /** Default position for the Drive knob (0.00–10.00). */
  drive?: string
  /** Default Tone (0.00–10.00). Pass `null` to indicate the original pedal
   *  has no Tone knob — the Basic tab hides it. */
  tone?: string | null
  level?: string
  mix?: string
  /** Override the default "Gain" label (some pedals show "Drive", "Fuzz",
   *  "Sustain", "Dist" instead). */
  driveLabel?: string
  /** Set when the modeled pedal exposes Bass / Treble on its front panel
   *  (BB Pre, Distortion+, Rat-mod, RC Booster). Bass+Treble then show on
   *  the Basic tab. */
  bassOnBasic?: string
  trebleOnBasic?: string
  /** Set when the pedal has a Mid knob on its front panel (Metal Zone). */
  midOnBasic?: string
  /** Defaults exposed on the Tone tab (the post-clipper Fractal EQ). */
  bass?: string
  mid?: string
  midFreq?: string
  highMid?: string
  treble?: string
  lowCut?: string
  highCut?: string
  /** Default Advanced-tab diode configuration. Real FM3 exposes Diode+/-
   *  Type and Diode+/- Quantity independently to allow asymmetric clipping. */
  diodePlusType?: string
  diodePlusQty?: string
  diodeMinusType?: string
  diodeMinusQty?: string
  bias?: string
  bassResponse?: string
  dryLevel?: string
  slewRate?: string
  bitReduce?: string
  sampleRate?: string
  /** @deprecated legacy field — maps to diodePlusType + diodeMinusType. */
  clipperType?: string
  /** @deprecated legacy field — maps to bitReduce. */
  bitReduction?: string
  /** @deprecated legacy field — not present in real FM3 Drive. */
  bright?: 'Off' | 'On'
  notes?: Partial<
    Record<
      | 'drive'
      | 'tone'
      | 'level'
      | 'mix'
      | 'bassOnBasic'
      | 'trebleOnBasic'
      | 'midOnBasic'
      | 'bass'
      | 'mid'
      | 'midFreq'
      | 'highMid'
      | 'treble'
      | 'lowCut'
      | 'highCut'
      | 'diodePlusType'
      | 'diodeMinusType'
      | 'bias'
      | 'bassResponse'
      | 'dryLevel'
      | 'slewRate'
      | 'bitReduce'
      | 'clipperType'
      | 'bitReduction',
      string
    >
  >
}

/** Persistent right-side Output column shared by every Drive type. */
function driveOutputGroup(opts: DriveLayoutOpts): TypeParameterGroup {
  return {
    title: 'Output (persistent column on the right of the editor)',
    parameters: [
      {
        name: 'Mix',
        range: '0.0–100.0 %',
        default: opts.mix ?? '100.0 %',
        description:
          opts.notes?.mix ??
          'Wet/dry blend. Below 100 % keeps clean signal in parallel — useful on fuzz and bass.',
      },
      {
        name: 'Level',
        range: '-80.0 – +20.0 dB',
        default: opts.level ?? '0.00 dB',
        description: opts.notes?.level ?? 'Block output volume in dB (despite the knob look).',
      },
      {
        name: 'Balance',
        range: '-1.00 – +1.00',
        default: '0.0',
        description: 'Stereo balance of the block output.',
      },
      {
        name: 'Input Select',
        range: 'L / R / L+R / Sum L+R',
        default: 'L+R',
        description: 'Which incoming channel(s) feed the Drive engine.',
      },
      {
        name: 'Bypass Mode',
        range: 'Thru / Mute / Mute In / Mute Out / Mute FX In / Mute FX Out',
        default: 'Thru',
        description: 'How the block behaves when bypassed.',
      },
    ],
  }
}

function driveLayout(opts: DriveLayoutOpts = {}): TypeParameterGroup[] {
  // Legacy-field translations so the 39 existing per-type calls don't break.
  const diodePlus = opts.diodePlusType ?? opts.clipperType ?? '1N4148'
  const diodeMinus = opts.diodeMinusType ?? opts.clipperType ?? '1N4148'
  const bitReduceDefault = opts.bitReduce ?? opts.bitReduction ?? '0'
  const diodePlusNote = opts.notes?.diodePlusType ?? opts.notes?.clipperType
  const diodeMinusNote = opts.notes?.diodeMinusType ?? opts.notes?.clipperType
  const bitReduceNote = opts.notes?.bitReduce ?? opts.notes?.bitReduction

  // Build per-pedal Basic tab — only the knobs the original pedal exposed.
  const basic: TypeParameter[] = []

  basic.push({
    name: opts.driveLabel ?? 'Gain',
    range: '0.00–10.00',
    default: opts.drive ?? '5.00',
    description:
      opts.notes?.drive ?? 'Gain into the clipping stage on the modeled pedal.',
  })

  // If the original pedal has a Bass knob on its panel, it appears on Basic.
  if (opts.bassOnBasic !== undefined) {
    basic.push({
      name: 'Bass',
      range: '0.00–10.00',
      default: opts.bassOnBasic,
      description: opts.notes?.bassOnBasic ?? "Models the original pedal's Bass control.",
    })
  }

  if (opts.midOnBasic !== undefined) {
    basic.push({
      name: 'Mid',
      range: '0.00–10.00',
      default: opts.midOnBasic,
      description: opts.notes?.midOnBasic ?? "Models the original pedal's Mid control.",
    })
  }

  // Tone knob appears on Basic only when the original pedal had one.
  if (opts.tone !== null) {
    basic.push({
      name: 'Tone',
      range: '0.00–10.00',
      default: opts.tone ?? '5.00',
      description:
        opts.notes?.tone ??
        "Models the original pedal's tone control (typically a low-pass + slight mid shelf).",
    })
  }

  if (opts.trebleOnBasic !== undefined) {
    basic.push({
      name: 'Treble',
      range: '0.00–10.00',
      default: opts.trebleOnBasic,
      description: opts.notes?.trebleOnBasic ?? "Models the original pedal's Treble control.",
    })
  }

  return [
    { title: 'Basic', parameters: basic },
    {
      title: 'Tone (Fractal-added post-clipper EQ — identical across all Drive types)',
      parameters: [
        {
          name: 'Bass',
          range: '0.00–10.00',
          default: opts.bass ?? '5.00',
          description: opts.notes?.bass ?? 'Post-clipper bass shelf.',
        },
        {
          name: 'Mid',
          range: '0.00–10.00',
          default: opts.mid ?? '5.00',
          description: opts.notes?.mid ?? 'Mid bell — cut for scoop, boost for bark.',
        },
        {
          name: 'Mid Frequency',
          range: '100 Hz – 5.00 kHz',
          default: opts.midFreq ?? '650 Hz',
          description:
            opts.notes?.midFreq ??
            'Center frequency of the Mid bell. Drops below 100 Hz at minimum knob, above 5 kHz at max.',
        },
        {
          name: 'High Mid',
          range: '0.00–10.00',
          default: opts.highMid ?? '5.00',
          description: opts.notes?.highMid ?? 'High-mid bell (around 1.5–4 kHz depending on Mid Freq).',
        },
        {
          name: 'Treble',
          range: '0.00–10.00',
          default: opts.treble ?? '5.00',
          description: opts.notes?.treble ?? 'Treble shelf.',
        },
        {
          name: 'Low Cut',
          range: '20.0 Hz – 2.00 kHz',
          default: opts.lowCut ?? '20.0 Hz',
          description:
            opts.notes?.lowCut ??
            'Pre-clipper high-pass. Raise to tighten fuzzes / bass guitar.',
        },
        {
          name: 'High Cut',
          range: '200 Hz – 20.00 kHz',
          default: opts.highCut ?? '20.00 kHz',
          description:
            opts.notes?.highCut ?? 'Post-clipper low-pass. Lower to tame fizz / pick attack.',
        },
      ],
    },
    {
      title: 'Graphic EQ (10-band, identical across all Drive types)',
      parameters: [
        { name: 'Band 100 Hz', range: '-12.0 – +12.0 dB', default: '0.00 dB' },
        { name: 'Band 160 Hz', range: '-12.0 – +12.0 dB', default: '0.00 dB' },
        { name: 'Band 250 Hz', range: '-12.0 – +12.0 dB', default: '0.00 dB' },
        { name: 'Band 400 Hz', range: '-12.0 – +12.0 dB', default: '0.00 dB' },
        { name: 'Band 640 Hz', range: '-12.0 – +12.0 dB', default: '0.00 dB' },
        { name: 'Band 1000 Hz', range: '-12.0 – +12.0 dB', default: '0.00 dB' },
        { name: 'Band 1600 Hz', range: '-12.0 – +12.0 dB', default: '0.00 dB' },
        { name: 'Band 2500 Hz', range: '-12.0 – +12.0 dB', default: '0.00 dB' },
        { name: 'Band 4000 Hz', range: '-12.0 – +12.0 dB', default: '0.00 dB' },
        { name: 'Band 6400 Hz', range: '-12.0 – +12.0 dB', default: '0.00 dB' },
        {
          name: 'Post Graphic EQ',
          range: 'Off / On',
          default: 'On',
          description: 'On = EQ sits after the drive; Off = pre-drive.',
        },
      ],
    },
    {
      title: 'Advanced (identical across all Drive types — model the diodes themselves)',
      parameters: [
        {
          name: 'Diode+ Type',
          range: '1N914 / 1N4148 / 1N4001 / 1N4001 (Ge) / 1N270 / LED Red / LED Green / MOSFET / JFET / Triode / None',
          default: diodePlus,
          description:
            diodePlusNote ??
            'Diode model used on the positive half-wave. Choose germanium / LED / FET for different clipping textures.',
        },
        {
          name: 'Diode+ Quantity',
          range: '0–4',
          default: opts.diodePlusQty ?? '2',
          description: 'Number of stacked diodes on the positive side — more diodes = louder before clipping.',
        },
        {
          name: 'Diode- Type',
          range: 'same list as Diode+ Type',
          default: diodeMinus,
          description:
            diodeMinusNote ??
            'Diode model on the negative half-wave. Different from Diode+ gives asymmetric clipping (TS/SD-1 character).',
        },
        {
          name: 'Diode- Quantity',
          range: '0–4',
          default: opts.diodeMinusQty ?? '2',
        },
        {
          name: 'Bias',
          range: '-1.00 – +1.00',
          default: opts.bias ?? '0.010',
          description:
            opts.notes?.bias ??
            'DC bias on the clipping stage — small offsets emphasise even-order harmonics.',
        },
        {
          name: 'Bass Response',
          range: '0.00–10.00',
          default: opts.bassResponse ?? '5.00',
          description:
            opts.notes?.bassResponse ??
            'Pre-clipper low-frequency shaping — raise for fatter, lower to tighten.',
        },
        {
          name: 'Dry Level',
          range: '0.0–100.0 %',
          default: opts.dryLevel ?? '100.0 %',
          description:
            opts.notes?.dryLevel ??
            'Independent dry-signal pass-through (separate from Mix).',
        },
        {
          name: 'Slew Rate',
          range: 'Off / 0.5–500 V/μs',
          default: opts.slewRate ?? '10.00',
          description:
            opts.notes?.slewRate ?? 'Limits waveform rise — softens transients / models op-amp slew.',
        },
        {
          name: 'Bit Reduce (Lo-Fi)',
          range: '0–24',
          default: bitReduceDefault,
          description:
            bitReduceNote ?? 'Bit-crusher in series with the drive. 0 = off.',
        },
        {
          name: 'Sample Rate (Lo-Fi)',
          range: '1.00 kHz – 48.00 kHz',
          default: opts.sampleRate ?? '48000 Hz',
          description: 'Sample-rate reduction — drop below 12 kHz for telephone / aliased fizz.',
        },
      ],
    },
    driveOutputGroup(opts),
  ]
}

// Delay layout VERIFIED against FM3-Edit on FM3 firmware 12.00 (Stereo Tape
// type inspected live, May 2026). Real tabs: Time/FB / More / Modulation /
// EQ / Stack-Hold + a persistent right-side Output column with Input Gain,
// Mix, Level, Balance, Spread, Bypass Mode, Kill Dry.

type DriveTypePreset = {
  family?: BlockTypeFamily
  basedOn: string
  description?: string
  layout?: DriveLayoutOpts
  notes?: string
}

const driveTypePresets = Object.fromEntries([
  ["77 Custom OD", { basedOn: "MXR M77 Custom Badass Modified O.D." }],
  ["Angry Chuck", { basedOn: "JHS Angry Charlie V3" }],
  ["BB Pre", { basedOn: "Xotic BB Preamp" }],
  ["BB Pre AT", { basedOn: "Xotic BB Preamp AT" }],
  ["Bender Fuzz", { basedOn: "Sola Sound / Vox Tone Bender" }],
  ["Bit Crusher", { basedOn: "Fractal Audio custom bit-depth reducer" }],
  ["Blackglass 7K", { basedOn: "Darkglass Microtubes B7K" }],
  ["Blues OD", { basedOn: "Marshall Bluesbreaker Mk1" }],
  ["Bosom Boost", { basedOn: "Friedman Buxom Boost" }],
  ["Box o' Crunch", { basedOn: "MI Audio Crunch Box V1" }],
  ["Colortone Booster", { basedOn: "Colorsound Power Boost" }],
  ["Colortone OD", { basedOn: "Colorsound Overdriver" }],
  ["Compulsion Distortion HP", { basedOn: "Fulltone OCD, high-peak mode" }],
  ["Compulsion Distortion LP", { basedOn: "Fulltone OCD, low-peak mode" }],
  ["DS1 Distortion", { basedOn: "BOSS DS-1 Distortion" }],
  ["DS1 Distortion Mod", { basedOn: "modded BOSS DS-1 Distortion" }],
  ["Esoteric ACB", { basedOn: "Xotic AC Booster" }],
  ["Esoteric Bass RCB", { basedOn: "Xotic Bass RC Booster" }],
  ["Esoteric RCB", { basedOn: "Xotic RC Booster v1" }],
  ["Eternal Love", { basedOn: "Lovepedal Eternity" }],
  ["Face Fuzz", { basedOn: "Dallas-Arbiter Fuzz Face" }],
  ["FAS Boost", { basedOn: "Fractal Audio custom clean boost" }],
  ["FAS LED-Drive", { basedOn: "Fractal Audio custom LED-clipper drive" }],
  ["Fat Rat", { basedOn: "modded Pro Co RAT with LED clipping" }],
  ["FET Boost", { basedOn: "Fractal Audio custom FET boost" }],
  ["FET Preamp", { basedOn: "possibly based on the BOSS FA-1 FET Amplifier" }],
  ["Full OD", { basedOn: "Fulltone Full-Drive 2" }],
  ["Gauss Drive", { basedOn: "Mesa Flux-Drive" }],
  ["Griddle Cake", { basedOn: "Crowther Hot Cake" }],
  ["Guardian Photon Speed", { basedOn: "Greer Lightspeed" }],
  ["Hard Fuzz", { basedOn: "Fractal Audio custom hard fuzz" }],
  ["Heartpedal 11", { basedOn: "Lovepedal OD11 / Amp Eleven" }],
  ["Hoodoo Drive", { basedOn: "Voodoo Lab Overdrive" }],
  ["Horizon Precision Drive", { basedOn: "Horizon Devices Precision Drive" }],
  ["Integral Pre", { basedOn: "TC Electronic Integrated Preamp" }],
  ["Jam Ray", { basedOn: "Venuram Jan Ray" }],
  ["Klone Chiron", { basedOn: "Klon Centaur / KTR" }],
  ["M-Zone Distortion", { basedOn: "BOSS MT-2 Metal Zone" }],
  ["Master Fuzz", { basedOn: "Gibson Maestro Fuzz-Tone FZ-1A" }],
  ["Maxoff 808", { basedOn: "Maxon OD-808" }],
  ["MCMLXXXI DRV", { basedOn: "1981 Inventions DRV" }],
  ["Micro Boost", { basedOn: "MXR Micro Amp" }],
  ["Mid Boost", { basedOn: "Fractal Audio custom mid boost" }],
  ["MOSFET Distortion", { basedOn: "Ibanez MT10 Mostortion" }],
  ["NoAmp Bass DI", { basedOn: "Tech 21 NYC SansAmp Bass Driver DI" }],
  ["NoAmp Bass Pre", { basedOn: "Tech 21 SansAmp Bass Driver DI" }],
  ["Nobellium OVD-1", { basedOn: "Nobels ODR-1 BC Natural Overdrive" }],
  ["Octave Distortion", { basedOn: "Tycobrahe Octavia" }],
  ["OD 250", { basedOn: "DOD Overdrive Preamp 250 reissue" }],
  ["OD 250 Gray", { basedOn: "DOD Overdrive Preamp 250 original gray" }],
  ["OD-One Overdrive", { basedOn: "BOSS OD-1 Over Drive" }],
  ["Paradigm Shifter", { basedOn: "Barber Electronics Gain Changer" }],
  ["PI Fuzz", { basedOn: "Electro-Harmonix Big Muff Pi, current" }],
  ["PI Fuzz - Bass", { basedOn: "Electro-Harmonix Deluxe Bass Big Muff" }],
  ["PI Fuzz - Triangle", { basedOn: "Electro-Harmonix 1971 Big Muff Pi Triangle" }],
  ["PI Fuzz - Ram's Head", { basedOn: "Electro-Harmonix 1970s Big Muff Pi Ram's Head" }],
  ["PI Fuzz - Russian", { basedOn: "Electro-Harmonix Russian Big Muff Pi" }],
  ["Plus Distortion", { basedOn: "MXR Distortion+" }],
  ["Rat Distortion", { basedOn: "Pro Co RAT" }],
  ["Royal Bass DI", { basedOn: "Noble Bass Preamp DI" }],
  ["SDD Preamp", { basedOn: "Korg SDD-3000 preamp" }],
  ["Shimmer Drive", { basedOn: "Fractal Audio custom shimmer drive" }],
  ["Shred Distortion", { basedOn: "Marshall Shredmaster" }],
  ["Sonic Drive", { basedOn: "Maxon/Ibanez SD-9 Sonic Distortion" }],
  ["Suhr Riot Ge (R)", { basedOn: "Suhr Riot germanium mode" }],
  ["Suhr Riot LED (L)", { basedOn: "Suhr Riot LED mode" }],
  ["Suhr Riot LED/Si (M)", { basedOn: "Suhr Riot LED/silicon mode" }],
  ["Sunrise Splendor", { basedOn: "JHS Pedals Morning Glory V4" }],
  ["Sunrise Splendor Hi-Cut", { basedOn: "JHS Pedals Morning Glory V4 high-cut voice" }],
  ["Super Fuzz", { basedOn: "Univox Super-Fuzz" }],
  ["Super OD", { basedOn: "BOSS SD-1 Super OverDrive" }],
  ["Swedish Metal", { basedOn: "BOSS Waza Craft HM-2W Heavy Metal" }],
  ["T808 OD", { basedOn: "Ibanez TS-808 Tube Screamer" }],
  ["T808 Mod", { basedOn: "modded Ibanez TS-808 Tube Screamer" }],
  ["Tape Distortion", { basedOn: "tape distortion" }],
  ["Timothy Down", { basedOn: "Paul Cochrane Timmy V4 clipping switch down" }],
  ["Timothy Mid", { basedOn: "Paul Cochrane Timmy V4 clipping switch middle" }],
  ["Timothy Up", { basedOn: "Paul Cochrane Timmy V4 clipping switch up" }],
  ["Tone of Kings", { basedOn: "Analog Man King of Tone" }],
  ["Treble Boost", { basedOn: "silicon treble booster circuit" }],
  ["TS9DX +", { basedOn: "Ibanez TS9DX Turbo Tube Screamer + mode" }],
  ["TS9DX Hot", { basedOn: "Ibanez TS9DX Turbo Tube Screamer Hot mode" }],
  ["Tube Drive 3-Knob", { basedOn: "Butler Tube Driver" }],
  ["Tube Drive 4-Knob", { basedOn: "Butler Tube Driver" }],
  ["Tube Drive 5-Knob", { basedOn: "Butler Tube Driver / Dean Markley Overlord" }],
  ["Valve Screamer VS9", { basedOn: "Ibanez TS9 Tube Screamer" }],
  ["Zen Master", { basedOn: "Hermida Zendrive" }],
]) as Record<string, DriveTypePreset>

const boostDriveTypes = new Set([
  'Bosom Boost', 'Colortone Booster', 'Esoteric Bass RCB', 'Esoteric RCB',
  'FAS Boost', 'FET Boost', 'FET Preamp', 'Integral Pre', 'Micro Boost',
  'Mid Boost', 'Royal Bass DI', 'SDD Preamp', 'Treble Boost',
])

const bassDriveTypes = new Set([
  'Blackglass 7K', 'Esoteric Bass RCB', 'NoAmp Bass DI', 'NoAmp Bass Pre',
  'PI Fuzz - Bass', 'Royal Bass DI',
])

const fuzzDriveTypes = new Set([
  'Bender Fuzz', 'Face Fuzz', 'Hard Fuzz', 'Master Fuzz', 'Octave Distortion',
  'PI Fuzz', 'PI Fuzz - Bass', 'PI Fuzz - Triangle', "PI Fuzz - Ram's Head",
  'PI Fuzz - Russian', 'Super Fuzz',
])

const loFiDriveTypes = new Set(['Bit Crusher', 'Shimmer Drive', 'Tape Distortion'])

function driveTypeFamily(name: string): BlockTypeFamily {
  if (loFiDriveTypes.has(name)) return 'Lo-Fi'
  if (fuzzDriveTypes.has(name)) return 'Fuzz'
  if (bassDriveTypes.has(name)) return 'Bass'
  if (boostDriveTypes.has(name)) return 'Boost'
  if (
    name.includes('Distortion') || name.includes('Rat') || name.includes('Riot') ||
    name.includes('Metal') || name.includes('Shred') || name.includes('Sonic') ||
    name.includes('Chuck') || name.includes('Crunch') || name.includes('MOSFET') ||
    name.includes('Plus') || name.includes('250') || name.includes('M-Zone') ||
    name === 'MCMLXXXI DRV'
  ) return 'Distortion'
  return 'Overdrive'
}

function driveTypeLayout(name: string, family: BlockTypeFamily): DriveLayoutOpts {
  if (name === 'Bit Crusher') {
    return { drive: '5.00', tone: null, level: '5.00', bitReduction: '16', sampleRate: '12000 Hz', clipperType: 'None' }
  }

  if (name === 'Shimmer Drive') {
    return { drive: '5.00', tone: '5.00', level: '5.00', mix: '40 %', clipperType: 'Soft (Si)' }
  }

  if (name === 'Tape Distortion') {
    return { drive: '5.00', tone: null, level: '5.00', slewRate: '2.00', highCut: '8.00 kHz' }
  }

  if (family === 'Boost') {
    return { drive: '3.00', tone: null, level: '7.00', lowCut: name === 'Treble Boost' ? '500 Hz' : '20.0 Hz', treble: name === 'Treble Boost' ? '8.00' : '5.50' }
  }

  if (family === 'Bass') {
    return { drive: '4.00', tone: null, bassOnBasic: '5.00', midOnBasic: '5.00', trebleOnBasic: '5.00', level: '5.00', lowCut: '40 Hz', highCut: '8.00 kHz' }
  }

  if (family === 'Fuzz') {
    const hasTone = !['Bender Fuzz', 'Face Fuzz', 'Master Fuzz', 'Octave Distortion'].includes(name)
    return { drive: '8.00', tone: hasTone ? '5.00' : null, level: '5.00', clipperType: name.includes('Fuzz') || name.includes('Bender') || name.includes('Face') ? 'Ge / transistor' : 'Hard (Si)', bias: name === 'Hard Fuzz' ? '0.250' : '0.010', highCut: '8.00 kHz' }
  }

  if (name.includes('T808') || name.includes('TS9') || name.includes('Screamer') || name === 'Maxoff 808' || name === 'Super OD' || name === 'OD-One Overdrive') {
    return { drive: '4.00', tone: '6.00', level: '5.00', lowCut: '720 Hz', clipperType: 'Soft (asymmetric Si)' }
  }

  if (name.includes('BB Pre') || name.includes('Esoteric ACB')) {
    return { driveLabel: 'Gain', drive: '4.00', tone: null, bassOnBasic: '5.00', trebleOnBasic: '5.00', level: '5.50', diodePlusType: 'MOSFET', diodeMinusType: 'MOSFET' }
  }

  if (name.includes('Timothy')) {
    return { drive: '4.00', tone: '5.00', level: '5.50', bassOnBasic: '5.00', trebleOnBasic: '5.00', clipperType: name.endsWith('Up') ? 'LED' : name.endsWith('Down') ? 'Si' : 'None / open' }
  }

  if (name.includes('Tube Drive')) {
    return { drive: '5.00', tone: name.includes('3-Knob') ? '5.00' : null, bassOnBasic: name.includes('3-Knob') ? undefined : '5.00', trebleOnBasic: name.includes('3-Knob') ? undefined : '5.00', level: '5.00', clipperType: 'Triode' }
  }

  if (name.includes('Riot')) {
    return { drive: '6.00', tone: '5.00', level: '5.00', clipperType: name.includes('Ge') ? 'Ge' : name.includes('LED/Si') ? 'LED / Si' : 'LED' }
  }

  if (name.includes('Rat') || name === 'MCMLXXXI DRV') {
    return { drive: '6.00', tone: '4.00', level: '5.00', clipperType: name === 'Fat Rat' ? 'LED' : 'Hard (Si)', slewRate: '10.00' }
  }

  if (name === 'M-Zone Distortion' || name === 'Swedish Metal') {
    return { drive: '7.00', tone: null, bassOnBasic: '5.00', midOnBasic: '5.00', trebleOnBasic: '5.00', level: '5.00', clipperType: 'Hard (Si, cascade)' }
  }

  if (family === 'Distortion') {
    return { drive: '6.00', tone: name.includes('Plus') || name.includes('250') ? null : '5.00', level: '5.00', clipperType: name.includes('Plus') || name.includes('250') ? 'Ge / hard clip' : 'Hard (Si)' }
  }

  return { drive: '4.50', tone: '5.00', level: '5.50', clipperType: name.includes('Klone') ? 'Ge (parallel clean blend)' : 'Soft (Si)' }
}

function createDriveType(name: string): BlockType {
  const preset = driveTypePresets[name]
  const family = preset.family ?? driveTypeFamily(name)
  const basedOn = preset.basedOn
  const isCustom = basedOn.toLowerCase().includes('custom') || basedOn.startsWith('Fractal Audio custom')

  return {
    id: catalogTypeId(name),
    name,
    family,
    basedOn,
    description: preset.description ?? (isCustom
      ? name + ' is a Fractal Audio Drive block algorithm from the current Fractal Audio Wiki catalog, voiced for ' + family.toLowerCase() + ' duties rather than a single commercial pedal.'
      : name + ' is the Drive block model based on ' + basedOn + ', from the current Fractal Audio Wiki Drive model catalog.'),
    notes: preset.notes,
    settingsLayout: driveLayout({ ...driveTypeLayout(name, family), ...(preset.layout ?? {}) }),
  }
}

interface DelayLayoutOpts {
  /** Stereo or mono engine — controls whether L+R Time/Feedback rows show. */
  stereo?: boolean
  time?: string
  feedback?: string
  mix?: string
  drive?: string
  bitReduction?: string
  compander?: string
  companderThreshold?: string
  showBitReduction?: boolean
  /** Extra rows specific to this engine (Wow & Flutter for Tape, Reverse Window for Reverse). */
  engineExtras?: TypeParameter[]
  notes?: Partial<
    Record<'time' | 'feedback' | 'mix' | 'drive' | 'bitReduction' | 'compander', string>
  >
}

function delayLayout(opts: DelayLayoutOpts = {}): TypeParameterGroup[] {
  const isStereo = opts.stereo === true

  const timeFb: TypeParameter[] = [
    { name: 'Time L', range: '0–8000 ms', default: opts.time ?? '500 ms', description: opts.notes?.time ?? 'Left-channel delay time. Set when Tempo L is None.' },
    { name: 'Tempo L', range: 'None / 1/64–1/1 (dotted, triplet)', default: 'None' },
    { name: 'Master Time', range: '0.0–200.0 %', default: '100.0 %', description: 'Global multiplier on both Time L and Time R.' },
    { name: 'Feedback L>L', range: '0.0–110.0 %', default: opts.feedback ?? '40.0 %', description: opts.notes?.feedback ?? 'Self-feedback for the left line.' },
    { name: 'Feedback L>R', range: '0.0–110.0 %', default: '0.0 %', description: 'Cross-feed of the left line into the right.' },
    { name: 'Master Feedback', range: '0.0–110.0 %', default: '100.0 %', description: 'Global multiplier on all feedback paths.' },
    { name: 'Level L', range: '0.0–100.0 %', default: '100.0 %' },
    { name: 'Pan L', range: '-100.0 – +100.0', default: '-100.0' },
    ...(isStereo
      ? [
          { name: 'Time R', range: '0–8000 ms', default: opts.time ?? '500 ms' },
          { name: 'Tempo R', range: 'None / 1/64–1/1 (dotted, triplet)', default: 'None' },
          { name: 'L/R Time Ratio', range: '0.0–200.0 %', default: '100.0 %', description: 'Ratio between Time L and Time R. 100 % = matched, 50 % = R is half of L.' },
          { name: 'Feedback R>R', range: '0.0–110.0 %', default: opts.feedback ?? '40.0 %' },
          { name: 'Feedback R>L', range: '0.0–110.0 %', default: '0.0 %' },
          { name: 'Level R', range: '0.0–100.0 %', default: '100.0 %' },
          { name: 'Pan R', range: '-100.0 – +100.0', default: '+100.0' },
        ]
      : []),
  ]

  const more: TypeParameter[] = [
    { name: 'Drive', range: '0.00–10.00', default: opts.drive ?? '0.00', description: opts.notes?.drive ?? 'Tape/tube saturation inside the feedback loop.' },
    ...(opts.showBitReduction === false
      ? []
      : [
          {
            name: 'Bit Reduction',
            range: '0–32',
            default: opts.bitReduction ?? '0',
            description: opts.notes?.bitReduction ?? 'Vintage-digital lo-fi on every repeat.',
          },
        ]),
    {
      name: 'Compander',
      range: 'Off / On',
      default: opts.compander ?? 'Type-specific',
      description:
        opts.notes?.compander ??
        'Virtual compressor/expander around the delay line. DMM, DM-2, and Carbon Copy-style types enable this by default.',
    },
    { name: 'Compander Threshold', range: '-80.0 – 0.0 dB', default: opts.companderThreshold ?? '-60.0 dB' },
    { name: 'Ducker Threshold', range: '-80 – 0 dB', default: '-40 dB' },
    { name: 'Ducker Attenuation', range: '0–60 dB', default: '0 dB', description: '0 = ducking disabled.' },
    { name: 'Ducker Release', range: '10–4000 ms', default: '500 ms' },
  ]

  const modulation: TypeParameter[] = [
    { name: 'LFO Rate', range: '0.10–10.00 Hz', default: '0.50 Hz' },
    { name: 'LFO Tempo', range: 'None / 1/64–1/1', default: 'None' },
    { name: 'LFO Depth', range: '0–100 %', default: '0 %', description: 'Adds chorus to the repeats — authentic on Analog, Tape, BBD.' },
    { name: 'LFO Type', range: 'Sine / Triangle / Square / Sawtooth / Random', default: 'Sine' },
    { name: 'LFO Phase', range: '0–360°', default: '90°', description: 'Stereo offset between L and R LFOs.' },
  ]

  const eq: TypeParameter[] = [
    { name: 'Low Cut', range: '20 Hz – 2.00 kHz', default: '20 Hz', description: 'HPF inside the feedback loop — keeps low end from building up.' },
    { name: 'High Cut', range: '200 Hz – 20.00 kHz', default: '20.00 kHz', description: 'LPF inside the feedback loop — natural tape-style high-end decay.' },
    { name: 'Filter Q', range: '0.1–10', default: '0.71' },
    { name: 'Frequency Shift', range: '-1000 – +1000 Hz', default: '0 Hz', description: 'Adds frequency-shift each feedback pass — strange ascending/descending textures.' },
  ]

  const stackHold: TypeParameter[] = [
    { name: 'Stack', range: 'Off / On', default: 'Off', description: 'Keeps recording into the buffer while playing back.' },
    { name: 'Hold', range: 'Off / On', default: 'Off', description: 'Freezes the current buffer indefinitely.' },
    { name: 'Stack/Hold Footswitch', range: 'Off / On', default: 'Off' },
  ]

  const output: TypeParameter[] = [
    { name: 'Input Gain', range: '0.0–100.0 %', default: '100.0 %', description: 'Pre-block input level.' },
    { name: 'Mix', range: '0.0–100.0 %', default: opts.mix ?? '30.0 %', description: opts.notes?.mix ?? 'Wet/dry blend.' },
    { name: 'Level', range: '-80.0 – +20.0 dB', default: '0.00 dB' },
    { name: 'Balance', range: '-1.00 – +1.00', default: '0.0' },
    { name: 'Spread', range: '0.0–200.0 %', default: '100.0 %', description: 'Stereo width of the wet signal.' },
    { name: 'Kill Dry', range: 'Off / On', default: 'Off', description: 'Mutes dry path — useful when running the block on a parallel row.' },
    { name: 'Bypass Mode', range: 'Thru / Mute / Mute In / Mute Out / Mute FX In / Mute FX Out', default: 'Thru' },
  ]

  const groups: TypeParameterGroup[] = [
    { title: 'Time/FB' + (isStereo ? ' (stereo — L and R rows)' : ' (mono)'), parameters: timeFb },
    { title: 'More', parameters: more },
    { title: 'Modulation', parameters: modulation },
    { title: 'EQ', parameters: eq },
    { title: 'Stack/Hold', parameters: stackHold },
    { title: 'Output (persistent column on the right of the editor)', parameters: output },
  ]

  if (opts.engineExtras && opts.engineExtras.length > 0) {
    groups.splice(1, 0, { title: 'Engine (this type only)', parameters: opts.engineExtras })
  }

  return groups
}

interface ReverbLayoutOpts {
  time?: string
  predelay?: string
  mix?: string
  lowFreqTime?: string
  highFreqTime?: string
  crossoverLow?: string
  crossoverHigh?: string
  earlyLevel?: string
  lateLevel?: string
  diffusion?: string
  density?: string
  modDepth?: string
  pitchShift?: string
  pitchMix?: string
  includeQuality?: boolean
  /** Extra rows specific to this Type (e.g. Plate "Damping", Spring "Springs", Cathedral "Echo Density"). */
  engineExtras?: TypeParameter[]
  notes?: Partial<
    Record<
      | 'time'
      | 'predelay'
      | 'mix'
      | 'lowFreqTime'
      | 'highFreqTime'
      | 'earlyLevel'
      | 'lateLevel'
      | 'diffusion'
      | 'density'
      | 'modDepth'
      | 'pitchShift'
      | 'pitchMix',
      string
    >
  >
}

// Reverb layout VERIFIED against FM3-Edit on FM3 firmware 12.00 (Cirrocumulus
// type inspected live, May 2026). Real tabs: Basic / Advanced / Duck+Mod /
// EQ / Pitch Shift + a persistent right-side Output column.

function reverbLayout(opts: ReverbLayoutOpts = {}): TypeParameterGroup[] {
  const basic: TypeParameter[] = [
    {
      name: 'Time',
      range: '0.10–100.00 s',
      default: opts.time ?? '2.00 s',
      description: opts.notes?.time ?? 'RT60 decay length.',
    },
    {
      name: 'Size',
      range: '0.0–100.0',
      default: '50.0',
      description: 'Virtual room size — couples with Time but adds a distinctive Fractal "shape" character.',
    },
    {
      name: 'Stack/Hold',
      range: 'Off / Stack / Hold',
      default: 'Off',
      description: 'Loop-style buffer freeze. Stack keeps recording, Hold freezes forever.',
    },
    // Pre-Delay section
    {
      name: 'Pre-Delay',
      range: '0–1000 ms',
      default: opts.predelay ?? '10 ms',
      description: opts.notes?.predelay ?? 'Gap between dry signal and start of the tail.',
    },
    {
      name: 'Pre-Delay Tempo',
      range: 'None / 1/64–1/1 (dotted, triplet)',
      default: 'None',
      description: 'Sync Pre-Delay to the preset tempo.',
    },
    {
      name: 'Pre-Delay Feedback',
      range: '0.0–100.0 %',
      default: '0.0 %',
      description: 'Feeds the pre-delay output back into itself — creates discrete echoes ahead of the tail.',
    },
    {
      name: 'Echo Mix',
      range: '0.0–100.0 %',
      default: '0.0 %',
      description: 'Volume of the pre-delay echoes blended into the wet signal.',
    },
    {
      name: 'Tap',
      range: 'Output / Input',
      default: 'Output',
      description: 'Where the pre-delay echoes are tapped from — feeds either the tail input or only the output.',
    },
    // Decay section
    {
      name: 'Crossover Frequency',
      range: '20.0 Hz – 20.00 kHz',
      default: opts.crossoverLow ?? '500 Hz',
      description: 'Split between Low Decay and High Decay bands.',
    },
    {
      name: 'Low Decay',
      range: '0.000–1.000',
      default: opts.lowFreqTime ?? '0.500',
      description: opts.notes?.lowFreqTime ?? 'Decay multiplier for frequencies below the Crossover. 1.0 = same as Time.',
    },
    {
      name: 'High Decay',
      range: '0.000–1.000',
      default: opts.highFreqTime ?? '0.300',
      description: opts.notes?.highFreqTime ?? 'Decay multiplier above the Crossover. Lower = absorbent room, higher = bright hall.',
    },
    {
      name: 'Echo Density',
      range: '0–10',
      default: '4',
      description: 'Density of echoes inside the tail. Low = grainy, high = smooth.',
    },
  ]

  if (opts.includeQuality !== false) {
    basic.push({
      name: 'Quality',
      range: 'Economy / Normal / High / Ultra-High',
      default: 'Normal',
      description:
        'CPU vs. smoothness tradeoff. The wiki lists Normal as the FM3 default; Spring types do not expose this parameter.',
    })
  }

  const advanced: TypeParameter[] = [
    {
      name: 'Diffusion',
      range: '0.0–100.0 %',
      default: opts.diffusion ?? '60.0 %',
      description: opts.notes?.diffusion ?? 'Spread of the early reflections / tail. Low for percussion, high for guitar.',
    },
    {
      name: 'Diffusion Time',
      range: '0–500 ms',
      default: '50 ms',
      description: 'How long the diffusion smear lasts before the dense tail begins.',
    },
    {
      name: 'Density',
      range: '0–10',
      default: opts.density ?? '5',
      description: opts.notes?.density ?? 'Number of echo paths in the late field.',
    },
    {
      name: 'Early Level',
      range: '-80.0 – +20.0 dB',
      default: opts.earlyLevel ?? '-12.0 dB',
      description: opts.notes?.earlyLevel ?? 'Volume of the early-reflection cluster.',
    },
    {
      name: 'Reverb Level',
      range: '-80.0 – +20.0 dB',
      default: opts.lateLevel ?? '0.00 dB',
      description: opts.notes?.lateLevel ?? 'Volume of the diffuse late tail.',
    },
    {
      name: 'Reflection Group',
      range: '1–16 of preset patterns',
      default: '1',
      description: 'Selects which early-reflection pattern is used for the room shape.',
    },
  ]

  const duckMod: TypeParameter[] = [
    { name: 'Ducker Threshold', range: '-80.0 – 0.0 dB', default: '-40.0 dB' },
    { name: 'Ducker Attenuation', range: '0.0–60.0 dB', default: '0.0 dB', description: '0 = ducking off.' },
    { name: 'Ducker Release', range: '10–4000 ms', default: '500 ms' },
    { name: 'Mod Rate', range: '0.10–10.00 Hz', default: '0.40 Hz' },
    { name: 'Mod Depth', range: '0.0–100.0 %', default: opts.modDepth ?? '20.0 %', description: opts.notes?.modDepth ?? 'Chorus-like drift inside the tail.' },
    { name: 'Mod Type', range: 'Sine / Triangle / Square / Sawtooth / Random', default: 'Sine' },
  ]

  const eq: TypeParameter[] = [
    { name: 'Low Cut', range: '20.0 Hz – 2.00 kHz', default: '60 Hz', description: 'HPF on the wet signal.' },
    { name: 'High Cut', range: '200 Hz – 20.00 kHz', default: '8.00 kHz', description: 'LPF on the wet signal — set lower for darker, more "vintage" reverbs.' },
    { name: 'EQ Band 1 Freq', range: '20 Hz – 20.00 kHz', default: '160 Hz' },
    { name: 'EQ Band 1 Gain', range: '-12.0 – +12.0 dB', default: '0.00 dB' },
    { name: 'EQ Band 1 Q', range: '0.1–10.0', default: '0.71' },
    { name: 'EQ Band 2 Freq', range: '20 Hz – 20.00 kHz', default: '3.00 kHz' },
    { name: 'EQ Band 2 Gain', range: '-12.0 – +12.0 dB', default: '0.00 dB' },
    { name: 'EQ Band 2 Q', range: '0.1–10.0', default: '0.71' },
  ]

  const pitchShift: TypeParameter[] = [
    { name: 'Pitch Shift 1', range: '-24 – +24 st', default: opts.pitchShift ?? '+12 st', description: opts.notes?.pitchShift ?? 'First in-tail pitch shifter. +12 is classic shimmer.' },
    { name: 'Pitch Mix 1', range: '0.0–100.0 %', default: opts.pitchMix ?? '0.0 %', description: opts.notes?.pitchMix ?? '0 = no shimmer. Raise to fold pitch-shifted signal into the tail.' },
    { name: 'Pitch Shift 2', range: '-24 – +24 st', default: '+19 st' },
    { name: 'Pitch Mix 2', range: '0.0–100.0 %', default: '0.0 %' },
    { name: 'Pitch Feedback', range: '0.0–100.0 %', default: '0.0 %', description: 'Feeds the pitch-shifted output back into the shifter for cascading octaves.' },
  ]

  const output: TypeParameter[] = [
    { name: 'Input Gain', range: '0.0–100.0 %', default: '100.0 %' },
    { name: 'Mix', range: '0.0–100.0 %', default: opts.mix ?? '25.0 %', description: opts.notes?.mix ?? 'Wet/dry blend.' },
    { name: 'Level', range: '-80.0 – +20.0 dB', default: '0.00 dB' },
    { name: 'Balance', range: '-1.00 – +1.00', default: '0.0' },
    { name: 'Spread', range: '0.0–200.0 %', default: '100.0 %', description: 'Stereo width of the wet tail.' },
    { name: 'Input Select', range: 'L / R / L+R / Sum L+R', default: 'L+R' },
    { name: 'Kill Dry', range: 'Off / On', default: 'Off' },
    { name: 'Bypass Mode', range: 'Thru / Mute / Mute In / Mute Out / Mute FX In / Mute FX Out', default: 'Thru' },
  ]

  const groups: TypeParameterGroup[] = [
    { title: 'Basic', parameters: basic },
    { title: 'Advanced', parameters: advanced },
    { title: 'Duck + Mod', parameters: duckMod },
    { title: 'EQ', parameters: eq },
    { title: 'Pitch Shift', parameters: pitchShift },
    { title: 'Output (persistent column on the right of the editor)', parameters: output },
  ]

  if (opts.engineExtras && opts.engineExtras.length > 0) {
    groups.splice(1, 0, { title: 'Engine (this type only)', parameters: opts.engineExtras })
  }

  return groups
}

type ReverbTypePreset = {
  family?: BlockTypeFamily
  basedOn?: string
  description?: string
  notes?: string
  layout?: ReverbLayoutOpts
}

function catalogTypeId(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const pitchShiftedReverbs = new Set([
  'Andromeda',
  'Aquarius',
  'Capricorn',
  'Centaurus',
  'Echo Pitch Plate',
  'Gemini',
  'Pegasus',
  'Pleiades',
  'Sagittarius',
  'Ursa Major',
])

const specialHallReverbs = new Set([
  'Asylum Hall',
  'Cavern',
  'Colosseum',
  'Concert Hall',
  'Large Deep Hall',
  'Mausoleum',
  'Music Hall',
  'Nashville Church',
  'North Church',
  'Opera House',
  'South Church',
  'St. Albans Cathedral',
  "St. George's Church",
  'Symphony Hall',
  'York Minster Cathedral',
])

const roomLikeReverbs = new Set([
  'Ambience',
  'Drum Room',
  'Gymnasium',
  'Hallway',
  'Huge Room',
  'Large Tiled Room',
  'Large Wooden Room',
  'Recording Studio A',
  'Recording Studio C',
  'Warehouse',
])

const reverbTypePresets: Record<string, ReverbTypePreset> = {
  Ambience: {
    family: 'Room',
    description: 'Very short room ambience for adding air without an obvious reverb tail.',
    layout: { time: '0.40 s', mix: '15 %', predelay: '0 ms', earlyLevel: '0 dB', lateLevel: '-12 dB', diffusion: '45 %', density: '4' },
  },
  'British Spring': {
    basedOn: 'British combo spring reverb tank',
    layout: { time: '1.60 s', mix: '22 %', highFreqTime: '0.35' },
  },
  'Deluxe Spring': {
    basedOn: 'Fender Deluxe Reverb-style spring tank',
    layout: { time: '1.80 s', mix: '25 %', highFreqTime: '0.40' },
  },
  'Large Spring': {
    basedOn: 'Large standalone spring tank',
    layout: { time: '2.40 s', mix: '28 %', highFreqTime: '0.45' },
  },
  'Lush Spring': {
    basedOn: 'Modulated multi-spring tank',
    layout: { time: '2.20 s', mix: '28 %', modDepth: '35.0 %' },
  },
  'Studio Spring': {
    basedOn: 'Studio spring reverb tank',
    layout: { time: '1.80 s', mix: '22 %', highFreqTime: '0.45' },
  },
  'Tube Spring': {
    basedOn: 'Fender 6G15 / 63 Tube Reverb-style outboard spring unit',
    notes: 'The wiki describes Spring as a guitar amp or standalone reverb tank; this type is best approached like an outboard tube spring.',
    layout: { time: '1.90 s', mix: '24 %', highFreqTime: '0.40' },
  },
  'Vibrato-King Spring': {
    basedOn: 'Fender Vibro-King spring reverb',
    layout: { time: '1.80 s', mix: '24 %', highFreqTime: '0.40' },
  },
  'Vibrato-King Custom Spring': {
    basedOn: 'Fender Vibro-King Custom spring reverb',
    layout: { time: '2.00 s', mix: '26 %', highFreqTime: '0.42' },
  },
  'London Plate': {
    basedOn: 'EMT 140 plate reverb',
    description: 'EMT 140-style plate reverb; the Fractal wiki identifies London Plate as the EMT 140-inspired type.',
    notes: 'Use this for the classic large studio plate sound: smooth, dense, and vocal-friendly.',
    layout: { time: '2.40 s', mix: '28 %', predelay: '15 ms', diffusion: '80 %', highFreqTime: '0.65' },
  },
  'Sun Plate': {
    basedOn: 'Sun Studio-style plate reverb',
    description: 'Bright vintage studio plate flavor; the wiki says Sun Plate is probably based on the plate used at Sun Studio.',
    layout: { time: '1.80 s', mix: '24 %', predelay: '10 ms', diffusion: '75 %', highFreqTime: '0.70' },
  },
  'Gold Plate': {
    basedOn: 'Classic studio plate reverb',
    layout: { time: '2.20 s', mix: '26 %', predelay: '12 ms', diffusion: '80 %', highFreqTime: '0.70' },
  },
  'Vocal Plate': {
    basedOn: 'Classic vocal plate reverb',
    layout: { time: '2.00 s', mix: '24 %', predelay: '35 ms', earlyLevel: '-80 dB', diffusion: '85 %' },
  },
  'North Church': {
    basedOn: 'Bricasti-inspired church reverb',
    notes: 'The wiki notes the North and South Church types are inspired by Bricasti-style reverbs.',
    layout: { time: '4.50 s', mix: '30 %', predelay: '45 ms', diffusion: '85 %', density: '8', lowFreqTime: '0.750', highFreqTime: '0.500' },
  },
  'South Church': {
    basedOn: 'Bricasti-inspired church reverb',
    notes: 'The wiki notes the North and South Church types are inspired by Bricasti-style reverbs.',
    layout: { time: '4.00 s', mix: '30 %', predelay: '40 ms', diffusion: '82 %', density: '8', lowFreqTime: '0.700', highFreqTime: '0.500' },
  },
  Studio: {
    basedOn: 'Classic digital studio reverb units such as Lexicon and Eventide',
    description: 'Classic synthetic studio reverb; the wiki describes Studio as the digital-studio-unit family.',
    layout: { time: '1.80 s', mix: '24 %', predelay: '20 ms', diffusion: '75 %', density: '7', modDepth: '30.0 %' },
  },
  'Recording Studio A': {
    basedOn: 'Studio live-room ambience',
    layout: { time: '1.10 s', mix: '20 %', predelay: '8 ms', diffusion: '70 %', density: '6' },
  },
  'Recording Studio C': {
    basedOn: 'Studio live-room ambience',
    layout: { time: '1.30 s', mix: '20 %', predelay: '10 ms', diffusion: '72 %', density: '6' },
  },
  Stratocumulus: {
    notes: 'The wiki compares Stratocumulus with Plex Verb; keep feedback-style pitch wash controlled with modest Pitch Feedback.',
    layout: { time: '8.00 s', mix: '38 %', predelay: '45 ms', diffusion: '70 %', density: '6', pitchShift: '+12 st', pitchMix: '35.0 %' },
  },
}

function inferReverbFamily(name: string): BlockTypeFamily {
  if (pitchShiftedReverbs.has(name)) return 'Pitch'
  if (name.includes('Spring') || name.includes('Vibrato-King')) return 'Spring'
  if (name.includes('Plate') || name === 'Fields Of Pyrite') return 'Plate'
  if (name.includes('Chamber')) return 'Chamber'
  if (name.includes('Room') || roomLikeReverbs.has(name)) return 'Room'
  if (name.includes('Hall') || specialHallReverbs.has(name)) return 'Hall'
  return 'Special'
}

function reverbLayoutDefaults(name: string, family: BlockTypeFamily): ReverbLayoutOpts {
  if (family === 'Spring') {
    return {
      time: name.includes('Large') ? '2.20 s' : name.includes('Small') ? '1.20 s' : '1.60 s',
      mix: '24 %',
      predelay: '0 ms',
      diffusion: '55 %',
      density: '5',
      highFreqTime: '0.400',
      includeQuality: false,
      engineExtras: [
        { name: 'Dwell', range: '0.0–10.0', default: '5.00', description: 'Drive into the virtual springs.' },
        { name: 'Spring Tone', range: 'Dark – Bright', default: 'Type-specific' },
        { name: 'Spring Count', range: '1–3', default: 'Type-specific' },
      ],
    }
  }

  if (family === 'Plate') {
    return {
      time: name.includes('Large') ? '2.80 s' : name.includes('Small') ? '1.20 s' : '2.00 s',
      mix: '25 %',
      predelay: '12 ms',
      earlyLevel: '-80 dB',
      diffusion: '80 %',
      density: '8',
      highFreqTime: '0.650',
      engineExtras: [
        { name: 'Plate Damping', range: '0.0–100.0 %', default: '45.0 %', description: 'Higher values shorten bright plate overtones.' },
      ],
    }
  }

  if (family === 'Chamber') {
    return {
      time: name.includes('Deep') || name.includes('Large') ? '2.40 s' : '1.50 s',
      mix: '24 %',
      predelay: '12 ms',
      diffusion: '75 %',
      density: '7',
      highFreqTime: '0.550',
    }
  }

  if (family === 'Hall') {
    return {
      time: name.includes('Large') || name.includes('Cathedral') || name.includes('Church') ? '4.00 s' : '2.50 s',
      mix: '27 %',
      predelay: name.includes('Church') || name.includes('Cathedral') ? '45 ms' : '25 ms',
      diffusion: '80 %',
      density: '8',
      lowFreqTime: '0.650',
      highFreqTime: '0.500',
    }
  }

  if (family === 'Pitch') {
    return {
      time: name.includes('Deep') || name.includes('Space') ? '8.00 s' : '4.00 s',
      mix: '38 %',
      predelay: '35 ms',
      diffusion: '82 %',
      density: '8',
      pitchShift: '+12 st',
      pitchMix: name === 'Echo Pitch Plate' ? '55.0 %' : '45.0 %',
      notes: {
        pitchMix: 'The wiki lists this family as examples of the Reverb block pitch-shift capability.',
      },
    }
  }

  if (family === 'Room') {
    return {
      time: name.includes('Huge') || name.includes('Large') ? '2.20 s' : name.includes('Small') || name === 'Ambience' ? '0.70 s' : '1.20 s',
      mix: name === 'Ambience' ? '15 %' : '22 %',
      predelay: '8 ms',
      diffusion: '65 %',
      density: '6',
      highFreqTime: '0.600',
    }
  }

  return {
    time: name.includes('Deep') || name.includes('Space') || name.includes('Ice') ? '8.00 s' : '2.50 s',
    mix: name.includes('Deep') || name.includes('Space') ? '35 %' : '25 %',
    predelay: '20 ms',
    diffusion: '75 %',
    density: '7',
    modDepth: name.includes('Chorus') ? '60.0 %' : '25.0 %',
  }
}

function defaultReverbDescription(name: string, family: BlockTypeFamily, basedOn?: string): string {
  if (basedOn) return `${name} is a ${family.toLowerCase()} reverb type modeled after ${basedOn}.`
  if (family === 'Pitch') return `${name} is a pitch-shifted Reverb type for shimmer, octave bloom, or other synthetic ambient tails.`
  if (family === 'Spring') return `${name} is a spring-tank Reverb type for amp-style drip, splash, and guitar-combo ambience.`
  if (family === 'Plate') return `${name} is a plate Reverb type with a dense, smooth tail for vocals, leads, and polished studio space.`
  if (family === 'Chamber') return `${name} is a chamber Reverb type with a tighter, more reflective room-in-a-box character.`
  if (family === 'Hall') return `${name} is a hall Reverb type for longer natural spaces, concert rooms, churches, and large acoustic fields.`
  if (family === 'Room') return `${name} is a room Reverb type for short, natural early reflections and believable close ambience.`
  return `${name} is a special Reverb type from the FM3 firmware 12.00 catalog with a distinct synthetic or environmental character.`
}

function createReverbType(name: string): BlockType {
  const preset = reverbTypePresets[name] ?? {}
  const family = preset.family ?? inferReverbFamily(name)
  const settings = {
    ...reverbLayoutDefaults(name, family),
    ...(preset.layout ?? {}),
  }

  return {
    id: catalogTypeId(name),
    name,
    family,
    basedOn: preset.basedOn,
    description: preset.description ?? defaultReverbDescription(name, family, preset.basedOn),
    notes: preset.notes,
    settingsLayout: reverbLayout(settings),
  }
}

// ───────────── Modulation (Chorus / Flanger / Phaser / Tremolo) ─────────────

interface ModLayoutOpts {
  kind: 'chorus' | 'flanger' | 'phaser' | 'tremolo'
  rate?: string
  depth?: string
  delay?: string
  feedback?: string
  stages?: string
  voices?: string
  mix?: string
  lfoType?: string
  throughZero?: string
  vcrShape?: string
  lfoMode?: string
  notes?: Partial<Record<'rate' | 'depth' | 'delay' | 'feedback' | 'mix' | 'stages' | 'voices' | 'lfoType', string>>
}

// Chorus / Flanger / Phaser / Tremolo layout VERIFIED against FM3-Edit on FM3
// firmware 12.00 (Chorus "Warm Stereo" inspected live, May 2026). Real tabs:
// Basic / Expert (only 2 tabs!) plus a persistent right-side Output column
// with Mix / Level / Balance / Stereo Spread / Bypass Mode.

function modLayout(opts: ModLayoutOpts): TypeParameterGroup[] {
  const basic: TypeParameter[] = [
    { name: 'Rate', range: '0.10–10.00 Hz', default: opts.rate ?? '1.00 Hz', description: opts.notes?.rate ?? 'LFO speed. Use Tempo for synced rates.' },
    { name: 'Tempo', range: 'None / 1/64–1/1 (dotted, triplet)', default: 'None' },
    { name: 'Depth', range: '0.0–100.0 %', default: opts.depth ?? '50.0 %', description: opts.notes?.depth ?? 'LFO modulation amount.' },
  ]

  if (opts.kind !== 'tremolo') {
    basic.unshift({ name: 'Number of Voices', range: '1–8', default: opts.voices ?? '2', description: opts.notes?.voices ?? 'How many LFO-driven voices run inside the engine.' })
  }

  if (opts.kind === 'chorus') {
    basic.push({
      name: 'Delay Time',
      range: '0.00–50.00 ms',
      default: opts.delay ?? '5.00 ms',
      description: opts.notes?.delay ?? 'Center delay around which the LFO modulates — short = chorus, longer = subtle slap.',
    })
  }

  if (opts.kind === 'flanger') {
    basic.push({
      name: 'Manual',
      range: '0.00–10.00',
      default: opts.delay ?? '2.00',
      description:
        opts.notes?.delay ?? 'Firmware 12+ Manual control: center point of the flange sweep. Set Depth to zero for fixed/manual flanging.',
    })
    basic.push({
      name: 'Minimum Time',
      range: '0.340–20.000 ms',
      default: '0.500 ms',
      description: 'Minimum delay time when Depth is controlling the sweep.',
    })
    basic.push({
      name: 'Maximum Time',
      range: '0.340–20.000 ms',
      default: '5.000 ms',
      description: 'Maximum delay time when Depth is controlling the sweep.',
    })
  }

  if (opts.kind === 'phaser') {
    basic.push({
      name: 'Order (Stages)',
      range: '2 / 4 / 6 / 8 / 10 / 12',
      default: opts.stages ?? '4',
      description: opts.notes?.stages ?? 'More stages = deeper notches.',
    })
    basic.push({
      name: 'Manual',
      range: '20 Hz – 20.00 kHz',
      default: '500 Hz',
      description: 'Center point of the phaser sweep. Set Depth to zero for fixed/manual phasing.',
    })
    basic.push({
      name: 'Minimum Frequency',
      range: '20 Hz – 20.00 kHz',
      default: '200 Hz',
      description: 'Lowest frequency reached by the sweep when Depth is up.',
    })
    basic.push({
      name: 'Maximum Frequency',
      range: '20 Hz – 20.00 kHz',
      default: '5.00 kHz',
      description: 'Highest frequency reached by the sweep when Depth is up.',
    })
  }

  if (opts.kind === 'tremolo') {
    basic.push({ name: 'Duty Cycle', range: '0.0–100.0 %', default: '50.0 %', description: 'Asymmetry of the LFO — sub-50 % chops, 50 % is symmetric.' })
  }

  const expert: TypeParameter[] = [
    {
      name: 'Feedback',
      range: '-100.0 – +100.0 %',
      default: opts.feedback ?? (opts.kind === 'flanger' ? '30.0 %' : opts.kind === 'phaser' ? '40.0 %' : '0.0 %'),
      description: opts.notes?.feedback ?? 'Resonance / regeneration. Higher values intensify the comb-filter character.',
    },
    {
      name: 'LFO Type',
      range: 'Sine / Triangle / Square / Sawtooth / Random / Custom',
      default: opts.lfoType ?? 'Sine',
      description: opts.notes?.lfoType,
    },
    { name: 'LFO Phase', range: '0–360°', default: '90°', description: 'Stereo offset between L and R LFOs.' },
    { name: 'Hi-Pass', range: '20 Hz – 2.00 kHz', default: '20 Hz', description: 'HPF on the wet signal.' },
    { name: 'Lo-Pass', range: '200 Hz – 20.00 kHz', default: '20.00 kHz', description: 'LPF on the wet signal.' },
    ...(opts.kind === 'flanger'
      ? [
          { name: 'Focus', range: '0.0–100.0 %', default: '0.0 %', description: 'Cuts bass in the wet path while compensating the dry path.' },
          { name: 'VCO Curve', range: 'Linear / Exponential / Square-Law', default: 'Exponential', description: 'Square-Law matches the old A/DA-style response.' },
          { name: 'Dry Delay', range: '0.0–100.0 %', default: '50.0 %', description: 'Sets the zero-crossing point for through-zero flanging.' },
          { name: 'Through Zero', range: 'Off / Auto / Manual', default: opts.throughZero ?? 'Off', description: 'Tape-style flanger where the dry and wet paths cross through zero delay.' },
        ]
      : []),
    ...(opts.kind === 'phaser'
      ? [
          { name: 'VCR Shape', range: 'Linear / Exponential / JFET / Photocell', default: opts.vcrShape ?? 'JFET', description: 'Virtual control-resistor behavior for pedal accuracy.' },
          { name: 'LFO Mode', range: 'Normal / Uni-Vibe', default: opts.lfoMode ?? 'Normal' },
        ]
      : []),
  ]

  const output: TypeParameter[] = [
    { name: 'Mix', range: '0.0–100.0 %', default: opts.mix ?? '50.0 %', description: opts.notes?.mix },
    { name: 'Level', range: '-80.0 – +20.0 dB', default: '0.00 dB' },
    { name: 'Balance', range: '-1.00 – +1.00', default: '0.0' },
    { name: 'Stereo Spread', range: '0.0–200.0 %', default: '100.0 %', description: 'Width of the wet output. >100 % over-extends past hard L/R.' },
    { name: 'Bypass Mode', range: 'Thru / Mute / Mute In / Mute Out / Mute FX In / Mute FX Out', default: 'Thru' },
  ]

  return [
    {
      title: 'Basic',
      parameters: basic,
    },
    { title: 'Expert', parameters: expert },
    { title: 'Output (persistent column on the right of the editor)', parameters: output },
  ]
}

type TremoloTypePreset = {
  basedOn?: string
  description: string
  layout: ModLayoutOpts
}

const tremoloTypePresets: Record<string, TremoloTypePreset> = {
  'Bias Trem': {
    basedOn: 'Vintage tube-amp bias tremolo',
    description:
      'Tube-amp bias modulation: smooth, rounded volume movement that can add a little nonlinear grit like an old power section.',
    layout: { kind: 'tremolo', rate: '5.50 Hz', depth: '60 %', mix: '100 %', lfoType: 'Sine' },
  },
  'Harmonic Trem': {
    basedOn: 'Fender brownface harmonic tremolo',
    description:
      'Splits the spectrum and modulates low and high bands against each other for the brownface amp tremolo sound.',
    layout: { kind: 'tremolo', rate: '4.50 Hz', depth: '65 %', mix: '100 %', lfoType: 'Sine' },
  },
  'Neon Trem': {
    basedOn: 'Fender blackface neon/LDR optical tremolo',
    description:
      'Classic blackface-amp optical tremolo, using the neon bulb and light-dependent resistor behavior described by the wiki.',
    layout: { kind: 'tremolo', rate: '5.80 Hz', depth: '70 %', mix: '100 %', lfoType: 'Triangle' },
  },
  'Optical Trem 1': {
    basedOn: 'Optical tremolo pedal topology',
    description:
      'Optical pedal-style tremolo where Depth controls LED intensity for a direct, familiar stompbox feel.',
    layout: { kind: 'tremolo', rate: '5.00 Hz', depth: '65 %', mix: '100 %', lfoType: 'Triangle' },
  },
  'Optical Trem 2': {
    basedOn: 'Optical tremolo pedal topology',
    description:
      'Optical tremolo where Depth behaves like a mixer control, giving more pulse and throb than Optical Trem 1.',
    layout: { kind: 'tremolo', rate: '5.00 Hz', depth: '75 %', mix: '100 %', lfoType: 'Triangle' },
  },
  Panner: {
    description: 'Stereo left/right auto-panner using the Tremolo/Panner block LFO.',
    layout: {
      kind: 'tremolo',
      rate: '0.50 Hz',
      depth: '100 %',
      mix: '100 %',
      lfoType: 'Sine',
      notes: { depth: 'Sets the L/R pan range. 100 % is a full hard-left to hard-right sweep.' },
    },
  },
  'VCA Trem': {
    basedOn: 'Voltage-controlled amplifier tremolo topology',
    description:
      'The current name for the older Tremolo type: a clean VCA amplitude-modulation algorithm.',
    layout: { kind: 'tremolo', rate: '5.00 Hz', depth: '55 %', mix: '100 %', lfoType: 'Sine' },
  },
}

function createTremoloType(name: string): BlockType {
  const preset = tremoloTypePresets[name]
  return {
    id: catalogTypeId(name),
    name,
    family: 'Modulation',
    basedOn: preset.basedOn,
    description: preset.description,
    settingsLayout: modLayout(preset.layout),
  }
}

type ChorusTypePreset = {
  basedOn?: string
  description?: string
  notes?: string
  layout?: ModLayoutOpts
}

const chorusTypePresets: Record<string, ChorusTypePreset> = {
  '4-Voice Analog': {
    basedOn: 'Analog BBD multi-voice chorus',
    layout: { kind: 'chorus', voices: '4', rate: '0.55 Hz', depth: '30 %', delay: '12.00 ms', mix: '45 %', lfoType: 'Sine' },
  },
  '8-Voice Analog': {
    basedOn: 'Analog BBD ensemble chorus',
    layout: { kind: 'chorus', voices: '8', rate: '0.45 Hz', depth: '32 %', delay: '14.00 ms', mix: '50 %', lfoType: 'Sine' },
  },
  '8-Voice Stereo': {
    basedOn: 'Stereo analog ensemble chorus',
    layout: { kind: 'chorus', voices: '8', rate: '0.45 Hz', depth: '34 %', delay: '15.00 ms', mix: '50 %', lfoType: 'Sine' },
  },
  "80's Style": {
    basedOn: 'Roland Dimension D / SDD-320 studio chorus',
    description: "Rich 80s studio chorus with subtle movement and wide, polished stereo spread.",
    layout: { kind: 'chorus', rate: '0.50 Hz', depth: '20 %', delay: '18.00 ms', mix: '50 %' },
  },
  'Analog Mono': {
    basedOn: 'BOSS CE-2-style analog chorus',
    description: 'Warm mono BBD chorus with darker repeats and a simple musical sweep.',
    layout: { kind: 'chorus', rate: '0.80 Hz', depth: '30 %', delay: '12.00 ms', mix: '50 %', lfoType: 'Triangle' },
  },
  'Analog Stereo': {
    basedOn: 'BOSS CE-1-style stereo analog chorus',
    description: 'Wide analog stereo chorus with the darker BBD tone associated with classic Roland/BOSS units.',
    layout: { kind: 'chorus', rate: '0.80 Hz', depth: '35 %', delay: '14.00 ms', mix: '50 %', lfoType: 'Triangle' },
  },
  'Dimension 1': {
    basedOn: 'Roland Dimension D / BOSS Dimension C',
    layout: { kind: 'chorus', rate: '0.30 Hz', depth: '25 %', delay: '15.00 ms', mix: '45 %' },
  },
  'Dimension 2': {
    basedOn: 'Roland Dimension D / BOSS Dimension C',
    layout: { kind: 'chorus', rate: '0.30 Hz', depth: '50 %', delay: '15.00 ms', mix: '50 %' },
  },
  'Dimension 3': {
    basedOn: 'Roland Dimension D / BOSS Dimension C',
    layout: { kind: 'chorus', rate: '0.30 Hz', depth: '75 %', delay: '15.00 ms', mix: '55 %' },
  },
  'Dual Chorus': {
    description: 'Two chorus lines running together for a wider, denser stereo modulation bed.',
    layout: { kind: 'chorus', rate: '0.60 Hz', depth: '30 %', delay: '12.00 ms', mix: '50 %' },
  },
  'Japan CE-2': {
    basedOn: 'BOSS CE-2 Chorus',
    description: 'Japanese CE-2-style BBD chorus: compact, warm, and guitar-forward.',
    layout: { kind: 'chorus', rate: '0.70 Hz', depth: '40 %', delay: '12.00 ms', mix: '50 %', lfoType: 'Triangle' },
  },
  'Japan CE-1 Chorus': {
    basedOn: 'BOSS CE-1 Chorus Ensemble',
    description: 'The CE-1 chorus mode, based on the Roland Jazz Chorus circuit packaged as BOSS’s large grey pedal.',
    layout: { kind: 'chorus', rate: '0.50 Hz', depth: '45 %', delay: '9.00 ms', mix: '50 %', lfoType: 'Triangle' },
  },
  'Japan CE-1 Vibrato': {
    basedOn: 'BOSS CE-1 Chorus Ensemble vibrato mode',
    description: 'The CE-1 vibrato mode: chorus architecture with the dry path removed for pitch-only modulation.',
    layout: { kind: 'chorus', voices: '1', rate: '3.00 Hz', depth: '45 %', delay: '6.00 ms', mix: '100 %', lfoType: 'Sine', notes: { mix: 'Vibrato removes the dry signal, so Mix is full wet.' } },
  },
  'Japan CH-1': {
    basedOn: 'BOSS CH-1 Super Chorus',
    description: 'BOSS CH-1-style clear, brighter stereo chorus with more high-end sheen than the CE-2 family.',
    layout: { kind: 'chorus', rate: '0.85 Hz', depth: '35 %', delay: '11.00 ms', mix: '45 %', lfoType: 'Triangle' },
  },
  'Japan CE-2 Bass': {
    basedOn: 'BOSS CE-2B Bass Chorus',
    description: 'CE-2B-style bass chorus that keeps the low end more stable while chorusing upper content.',
    layout: { kind: 'chorus', rate: '0.65 Hz', depth: '35 %', delay: '12.00 ms', mix: '45 %', lfoType: 'Triangle' },
  },
  MX234: {
    basedOn: 'MXR M234 Analog Chorus',
    description: 'MXR M234-style analog chorus with a clear BBD texture and tone shaping.',
    layout: { kind: 'chorus', rate: '0.75 Hz', depth: '38 %', delay: '11.00 ms', mix: '45 %', lfoType: 'Triangle' },
  },
  'MX234 Stereo': {
    basedOn: 'MXR M134 Stereo Chorus',
    description: 'MXR M134-style stereo chorus with a wider, rack-like analog presentation.',
    layout: { kind: 'chorus', rate: '0.65 Hz', depth: '40 %', delay: '13.00 ms', mix: '50 %', lfoType: 'Triangle' },
  },
  'Small Copy': {
    basedOn: 'Electro-Harmonix Small Clone',
    description: 'EHX Small Clone-style analog chorus: simple, deep, and instantly recognizable.',
    layout: { kind: 'chorus', rate: '0.80 Hz', depth: '50 %', delay: '12.00 ms', mix: '50 %', lfoType: 'Triangle' },
  },
  'Stereo Tri-Chorus': {
    basedOn: 'Dytronics CS-5 Tri-Stereo Chorus',
    description: 'Three offset chorus voices in stereo for the classic rack tri-chorus wash.',
    layout: { kind: 'chorus', voices: '6', rate: '0.40 Hz', depth: '30 %', delay: '13.00 ms', mix: '50 %', lfoType: 'Sine' },
  },
  'Tape Chorus': {
    basedOn: 'Tape-machine speed modulation',
    layout: { kind: 'chorus', rate: '0.35 Hz', depth: '20 %', delay: '18.00 ms', mix: '35 %', lfoType: 'Random' },
  },
  'Tape Flanger': {
    basedOn: 'Tape flanging',
    description: 'Tape-style chorus/flange behavior inside the Chorus block, useful for slow comb-filter movement.',
    layout: { kind: 'chorus', rate: '0.20 Hz', depth: '60 %', delay: '5.00 ms', feedback: '45 %', mix: '50 %' },
  },
  'Triangle Chorus': {
    description: 'A chorus variant with triangle LFO sweep for a more linear, even modulation cycle.',
    layout: { kind: 'chorus', rate: '0.70 Hz', depth: '35 %', delay: '10.00 ms', mix: '50 %', lfoType: 'Triangle' },
  },
  Vibrato: {
    description: 'Dedicated vibrato type: chorus modulation with no dry signal for true pitch movement.',
    layout: { kind: 'chorus', voices: '1', rate: '3.00 Hz', depth: '45 %', delay: '6.00 ms', mix: '100 %', lfoType: 'Sine', notes: { mix: 'Vibrato is chorus with the dry signal removed.' } },
  },
  Rockguy: {
    basedOn: 'Rockman X-100 chorus',
    description: 'Rockman X-100-style 80s chorus: bright, compressed, and wide for direct-style clean tones.',
    layout: { kind: 'chorus', rate: '0.70 Hz', depth: '35 %', delay: '14.00 ms', mix: '50 %', lfoType: 'Triangle' },
  },
  'Warm Stereo': {
    description: 'Wide stereo chorus with a darker, BBD-inspired tone.',
    notes:
      'Verified against FM3-Edit on firmware 12.00 from preset 359: 2 voices, Rate 1.00 Hz, Depth 50.0 %, Delay Time 5.00 ms, Stereo Spread 200 %.',
    layout: { kind: 'chorus', rate: '1.00 Hz', depth: '50.0 %', delay: '5.00 ms', mix: '24.4 %', lfoType: 'Sine', notes: { mix: 'Modest Mix keeps the chorus subtle and stereo-wide rather than seasick.' } },
  },
}

function createChorusType(name: string): BlockType {
  const preset = chorusTypePresets[name] ?? {}
  const settings = preset.layout ?? { kind: 'chorus', rate: '0.80 Hz', depth: '30 %', delay: '10.00 ms', mix: '50 %' }

  return {
    id: catalogTypeId(name),
    name,
    family: 'Modulation',
    basedOn: preset.basedOn,
    description: preset.description ?? `${name} is a Chorus block type from the FM3 firmware 12.00 catalog with a type-specific modulation voice count and tone.`,
    notes: preset.notes,
    settingsLayout: modLayout(settings),
  }
}

type ModTypePreset = {
  basedOn?: string
  description?: string
  notes?: string
  layout?: ModLayoutOpts
}

const flangerTypePresets: Record<string, ModTypePreset> = {
  'MXF-117': {
    basedOn: 'MXR M117 Flanger',
    description: 'MXR 117-style flanger with classic jet sweep and strong regeneration.',
    layout: { kind: 'flanger', rate: '0.25 Hz', depth: '20 %', delay: '2.00', feedback: '55 %', mix: '50 %', lfoType: 'Triangle', notes: { depth: 'The wiki recommends low Depth, around 10-20%, for musical flanging.' } },
  },
  'BBF-2': {
    basedOn: 'BOSS BF-2 Flanger',
    description: 'BOSS BF-2-style analog flanger with compact-pedal sweep and bright resonance.',
    layout: { kind: 'flanger', rate: '0.35 Hz', depth: '35 %', delay: '2.50', feedback: '50 %', mix: '50 %', lfoType: 'Triangle' },
  },
  'Electric Mystery': {
    basedOn: 'Electro-Harmonix Electric Mistress',
    description: 'Electric Mistress-style flanger/filter-matrix tone: vocal, glassy, and less metallic than jet flanging.',
    layout: { kind: 'flanger', rate: '0.20 Hz', depth: '30 %', delay: '3.50', feedback: '60 %', mix: '50 %', lfoType: 'Triangle' },
  },
  'Deluxe Mystery': {
    basedOn: 'Electro-Harmonix Deluxe Electric Mistress',
    description: 'Deluxe Electric Mistress-style sweep with a wider range and stronger resonance.',
    layout: { kind: 'flanger', rate: '0.18 Hz', depth: '35 %', delay: '3.50', feedback: '65 %', mix: '50 %', lfoType: 'Triangle' },
  },
  'D/AD 185': {
    basedOn: 'A/DA Flanger',
    description: 'A/DA-style wide-range flanger; the wiki notes Square-Law VCO response matches the original flavor.',
    layout: { kind: 'flanger', rate: '0.30 Hz', depth: '50 %', delay: '3.00', feedback: '70 %', mix: '50 %' },
  },
  'Count of Flanging': {
    basedOn: "Dream Theater's Count of Tuscany flanger tone",
    layout: { kind: 'flanger', rate: '0.20 Hz', depth: '25 %', delay: '2.00', feedback: '55 %', mix: '45 %' },
  },
  'Cuda Flange': {
    basedOn: 'Heart - Barracuda flanger tone',
    layout: { kind: 'flanger', rate: '0.35 Hz', depth: '25 %', delay: '2.00', feedback: '65 %', mix: '50 %' },
  },
  Hemisflange: {
    basedOn: 'Rush - Hemispheres flanger tone',
    layout: { kind: 'flanger', rate: '0.25 Hz', depth: '25 %', delay: '2.20', feedback: '60 %', mix: '45 %' },
  },
  'Spirit Flange': {
    basedOn: 'Rush - The Spirit of Radio flanger tone',
    layout: { kind: 'flanger', rate: '0.30 Hz', depth: '25 %', delay: '2.00', feedback: '55 %', mix: '45 %' },
  },
  'Starship Flanger': {
    basedOn: 'Yes - Starship Trooper flanger tone',
    layout: { kind: 'flanger', rate: '0.22 Hz', depth: '30 %', delay: '2.50', feedback: '55 %', mix: '45 %' },
  },
}

function flangerDefaults(name: string): ModLayoutOpts {
  const throughZero = name.includes('Zero') || name.includes('Thru-Zero') || name.includes('Cancel')
  const stepped = name.includes('Step') || name.includes('Binary')

  return {
    kind: 'flanger',
    rate: stepped ? '0.00 Hz' : '0.30 Hz',
    depth: throughZero ? '100 %' : stepped ? '80 %' : '30 %',
    delay: throughZero ? '5.00' : '2.00',
    feedback: throughZero ? '50 %' : '45 %',
    mix: '50 %',
    lfoType: stepped ? 'Square' : 'Sine',
    throughZero: throughZero ? (name.includes('Manual') ? 'Manual' : 'Auto') : 'Off',
    notes: throughZero
      ? { delay: 'Through-zero types delay the dry path so the wet and dry paths cross at zero delay.' }
      : undefined,
  }
}

function createFlangerType(name: string): BlockType {
  const preset = flangerTypePresets[name] ?? {}
  const settings = { ...flangerDefaults(name), ...(preset.layout ?? {}) }

  return {
    id: catalogTypeId(name),
    name,
    family: 'Modulation',
    basedOn: preset.basedOn,
    description: preset.description ?? `${name} is a Flanger block type from the current firmware catalog, using the firmware-12 Manual/Minimum/Maximum time control model.`,
    notes: preset.notes,
    settingsLayout: modLayout(settings),
  }
}

const phaserTypePresets: Record<string, ModTypePreset> = {
  'Block 90': {
    basedOn: 'MXR Phase 90 / Phase 45 block-logo family',
    description: 'Block-logo MXR-style phaser: stronger feedback and a more accentuated swoosh than the script units.',
    layout: { kind: 'phaser', rate: '0.50 Hz', depth: '90 %', stages: '4', feedback: '55 %', mix: '50 %', lfoType: 'Triangle', vcrShape: 'JFET' },
  },
  'Borg Phaser': {
    basedOn: 'Korg PHS-1 Phaser',
    layout: { kind: 'phaser', rate: '0.60 Hz', depth: '75 %', stages: '4', feedback: '45 %', mix: '50 %', vcrShape: 'JFET' },
  },
  'Classic Vibe': {
    basedOn: 'Fulltone Deja-Vibe / Uni-Vibe-style photocell phaser',
    description: 'Classic Uni-Vibe-style phaser; the wiki notes this model was verified against a Fulltone Deja-Vibe.',
    layout: { kind: 'phaser', rate: '3.00 Hz', depth: '85 %', stages: '4', feedback: '25 %', mix: '50 %', vcrShape: 'Photocell', lfoMode: 'Uni-Vibe' },
  },
  'FAS Vibe': {
    basedOn: 'Fractal Audio custom Uni-Vibe variant',
    layout: { kind: 'phaser', rate: '3.00 Hz', depth: '80 %', stages: '4', feedback: '25 %', mix: '50 %', vcrShape: 'Photocell', lfoMode: 'Uni-Vibe' },
  },
  'Modern Vibe': {
    basedOn: 'Classic Uni-Vibe with modern input buffer and LFO',
    layout: { kind: 'phaser', rate: '3.00 Hz', depth: '85 %', stages: '4', feedback: '25 %', mix: '50 %', vcrShape: 'Photocell', lfoMode: 'Uni-Vibe' },
  },
  'Mutated Twin-Phaser': {
    basedOn: 'Mu-Tron Bi-Phase',
    description: 'Mu-Tron Bi-Phase-style dual phaser. The wiki notes it can be set to 12-stage mono by setting Order to 12 and LFO Phase to 0.',
    layout: { kind: 'phaser', rate: '0.50 Hz', depth: '100 %', stages: '6', feedback: '70 %', mix: '50 %', lfoType: 'Sine', vcrShape: 'JFET' },
  },
  'Naughty Rock': {
    basedOn: 'Electro-Harmonix Bad Stone',
    description: 'Bad Stone-style six-stage phaser with manual shift and feedback-style color.',
    layout: { kind: 'phaser', rate: '0.40 Hz', depth: '90 %', stages: '6', feedback: '60 %', mix: '50 %', vcrShape: 'JFET' },
  },
  'Script 45': {
    basedOn: 'MXR Phase 45 script-logo phaser',
    layout: { kind: 'phaser', rate: '0.45 Hz', depth: '70 %', stages: '2', feedback: '0 %', mix: '50 %', lfoType: 'Triangle', vcrShape: 'JFET' },
  },
  'Script 90': {
    basedOn: 'MXR Phase 90 script-logo phaser',
    description: 'Early script-logo Phase 90-style phaser with subtler, cleaner sweep and no feedback.',
    layout: { kind: 'phaser', rate: '0.45 Hz', depth: '90 %', stages: '4', feedback: '0 %', mix: '50 %', lfoType: 'Triangle', vcrShape: 'JFET' },
  },
  'Stripe 90': {
    basedOn: 'MXR EVH Phase 90',
    layout: { kind: 'phaser', rate: '0.55 Hz', depth: '90 %', stages: '4', feedback: '45 %', mix: '50 %', lfoType: 'Triangle', vcrShape: 'JFET' },
  },
  'Treadle-Phaser': {
    basedOn: 'Morley Pro PFA Phaser',
    layout: { kind: 'phaser', rate: '0.40 Hz', depth: '80 %', stages: '6', feedback: '45 %', mix: '50 %', vcrShape: 'JFET' },
  },
  'Ultra-Super-Mega Phaser': {
    basedOn: 'BOSS Super Phaser-style / Fractal custom phaser',
    layout: { kind: 'phaser', rate: '0.30 Hz', depth: '100 %', stages: '12', feedback: '60 %', mix: '50 %', vcrShape: 'JFET' },
  },
  'Virtuoso Phaser': {
    basedOn: 'Maestro MP-1 phaser',
    description: 'Maestro MP-1-style six-stage phaser; the wiki notes this is the Bob Moog-designed pedal associated with Jimmy Page.',
    layout: { kind: 'phaser', rate: '0.50 Hz', depth: '85 %', stages: '6', feedback: '45 %', mix: '50 %', vcrShape: 'JFET' },
  },
}

function createPhaserType(name: string): BlockType {
  const preset = phaserTypePresets[name] ?? {}
  const settings = preset.layout ?? {
    kind: 'phaser',
    rate: name === 'Barber Pole' ? '0.20 Hz' : '0.50 Hz',
    depth: name === 'Barber Pole' ? '100 %' : '80 %',
    stages: name === 'Stereo 8-Stage' ? '8' : '4',
    feedback: '40 %',
    mix: '50 %',
    vcrShape: 'JFET',
  }

  return {
    id: catalogTypeId(name),
    name,
    family: 'Modulation',
    basedOn: preset.basedOn,
    description: preset.description ?? `${name} is a Phaser block type from the current firmware catalog, using the firmware-12 Manual/Minimum/Maximum frequency control model.`,
    notes: preset.notes,
    settingsLayout: modLayout(settings),
  }
}

interface RotaryLayoutOpts {
  slow?: string
  fast?: string
  horn?: string
  drum?: string
  drive?: string
  micDistance?: string
  notes?: Partial<Record<'slow' | 'fast' | 'drive' | 'horn' | 'drum', string>>
}

function rotaryLayout(opts: RotaryLayoutOpts = {}): TypeParameterGroup[] {
  return [
    {
      title: 'Rotor',
      parameters: [
        { name: 'Speed', range: 'Slow / Fast / Brake', default: 'Slow', description: 'Footswitchable rotor speed.' },
        { name: 'Slow Rate', range: '0.10–10.00 Hz', default: opts.slow ?? '0.80 Hz', description: opts.notes?.slow },
        { name: 'Fast Rate', range: '0.10–10.00 Hz', default: opts.fast ?? '5.50 Hz', description: opts.notes?.fast },
        { name: 'Slow→Fast Acc', range: '0.10–10.00 s', default: '1.50 s' },
        { name: 'Fast→Slow Dec', range: '0.10–10.00 s', default: '3.00 s' },
      ],
    },
    {
      title: 'Mics',
      parameters: [
        { name: 'Horn Level', range: '-80 – +20 dB', default: opts.horn ?? '0.00 dB', description: opts.notes?.horn },
        { name: 'Drum Level', range: '-80 – +20 dB', default: opts.drum ?? '0.00 dB', description: opts.notes?.drum },
        { name: 'Mic Distance', range: '0–100 %', default: opts.micDistance ?? '40 %' },
        { name: 'Mic Width', range: '0–100 %', default: '60 %' },
      ],
    },
    {
      title: 'Preamp',
      parameters: [
        { name: 'Drive', range: '0.00–10.00', default: opts.drive ?? '3.00', description: opts.notes?.drive },
        { name: 'Tube Type', range: '6V6 / 6L6 / EL34 / EL84', default: '6V6' },
        { name: 'Bass / Treble', range: '0.00–10.00', default: '5.00' },
      ],
    },
    {
      title: 'Mix',
      parameters: [
        { name: 'Mix', range: '0–100 %', default: '100 %' },
        { name: 'Level', range: '-80 – +20 dB', default: '0.00 dB' },
        { name: 'Bypass Mode', range: 'Mute / Thru', default: 'Thru' },
      ],
    },
  ]
}

interface PitchLayoutOpts {
  /** Number of active voices for this type (1–4). */
  voices: 1 | 2 | 3 | 4
  shifts?: string[]
  detunes?: string[]
  delays?: string[]
  mix?: string
  intervalType?: 'chromatic' | 'diatonic' | 'whammy' | 'octave' | 'arpeggio' | 'reverse' | 'custom' | 'capo'
  notes?: Partial<Record<'shifts' | 'detunes' | 'delays' | 'mix', string>>
  /** Extras (Whammy needs Heel/Toe; Arpeggiator needs Steps + Pattern; Crystals needs Splice Time). */
  engineExtras?: TypeParameter[]
}

function pitchLayout(opts: PitchLayoutOpts): TypeParameterGroup[] {
  const voiceRows: TypeParameter[] = []
  for (let i = 0; i < opts.voices; i++) {
    const label = `Voice ${i + 1}`
    voiceRows.push(
      { name: `${label} Shift`, range: opts.intervalType === 'diatonic' ? '-25 – +25 scale degrees' : '-24 – +24 st', default: opts.shifts?.[i] ?? '0 st' },
      { name: `${label} Detune`, range: '-50 – +50 cents', default: opts.detunes?.[i] ?? '0 cents' },
      { name: `${label} Delay`, range: '0–2000 ms', default: opts.delays?.[i] ?? '0 ms' },
      { name: `${label} Level`, range: '-80 – +20 dB', default: '0.00 dB' },
      { name: `${label} Pan`, range: '-100 – +100', default: i === 0 ? '0' : i === 1 ? '50' : i === 2 ? '-50' : '0' },
    )
  }

  return [
    {
      title: 'Pitch',
      parameters: [
        { name: 'Mix', range: '0–100 %', default: opts.mix ?? '50 %', description: opts.notes?.mix ?? 'Wet/dry blend.' },
        { name: 'Master Level', range: '-80 – +20 dB', default: '0.00 dB' },
        { name: 'Master Pan', range: '-100 – +100', default: '0' },
        ...(opts.intervalType === 'diatonic'
          ? [
              { name: 'Key', range: 'C – B', default: 'C' },
              { name: 'Scale', range: 'Major / Minor / Dorian / Mixolydian / etc.', default: 'Major' },
            ]
          : []),
        { name: 'Detector Source', range: 'Input / Insert / Send 1 / etc.', default: 'Input', description: 'Where the pitch tracker sniffs the signal — place before drives for accurate tracking.' },
        { name: 'Tracking', range: 'Fast / Medium / Slow / Quad', default: 'Medium' },
        { name: 'Bypass Mode', range: 'Mute / Thru / Mute In / Mute Out', default: 'Thru' },
      ],
    },
    { title: 'Voices', parameters: voiceRows },
    ...(opts.engineExtras && opts.engineExtras.length > 0
      ? [{ title: 'Engine', parameters: opts.engineExtras }]
      : []),
  ]
}

type PitchTypePreset = {
  basedOn?: string
  description: string
  layout: PitchLayoutOpts
  notes?: string
}

const pitchTypePresets: Record<string, PitchTypePreset> = {
  'Advanced Whammy': {
    description: 'Two independent pedal-controlled pitch-bend voices for harmony dives and interval sweeps.',
    layout: {
      voices: 2,
      intervalType: 'whammy',
      shifts: ['0 st', '+7 st'],
      mix: '60 %',
      engineExtras: [
        { name: 'V1 Heel / Toe Shift', range: '-24 – +24 st', default: '0 / +12 st' },
        { name: 'V2 Heel / Toe Shift', range: '-24 – +24 st', default: '+7 / +19 st' },
        { name: 'Control', range: '0.00–10.00', default: '0.00', description: 'Link to an expression pedal modifier.' },
      ],
    },
  },
  Arpeggiator: {
    description: 'Tempo-driven 16-step pitch sequencer for synth-style arpeggios from held notes.',
    layout: {
      voices: 1,
      intervalType: 'arpeggio',
      shifts: ['0 st'],
      mix: '100 %',
      engineExtras: [
        { name: 'Pattern', range: '1–16 of presets / Custom', default: 'Up-Down', description: 'Step pattern.' },
        { name: 'Steps', range: '1–16', default: '8' },
        { name: 'Rate', range: '1/64–1/1 (dotted, triplet)', default: '1/16' },
        { name: 'Per-Step Pitch (x16)', range: '-24 – +24 st', default: 'Octave + fifth movement' },
      ],
    },
  },
  'Classic Whammy': {
    basedOn: 'DigiTech Whammy',
    description: 'Expression-pedal pitch bend for dive bombs, octave sweeps, and classic Whammy parts.',
    layout: {
      voices: 1,
      intervalType: 'whammy',
      shifts: ['0 st'],
      mix: '100 %',
      engineExtras: [
        { name: 'Heel Shift', range: '-24 – +24 st', default: '0 st', description: 'Pitch at pedal heel.' },
        { name: 'Toe Shift', range: '-24 – +24 st', default: '+12 st', description: 'Pitch at pedal toe.' },
        { name: 'Control', range: '0.00–10.00', default: '0.00', description: 'Link to an expression pedal modifier.' },
      ],
    },
  },
  'Crystal Echoes': {
    description: 'Pitch-shifted echo fragments for shimmer, reverse-like pads, and soundscape textures.',
    layout: {
      voices: 2,
      intervalType: 'reverse',
      shifts: ['+12 st', '+19 st'],
      delays: ['350 ms', '520 ms'],
      mix: '50 %',
      engineExtras: [
        { name: 'Feedback', range: '0–100 %', default: '35 %' },
        { name: 'Splice Time', range: '100–2000 ms', default: '600 ms' },
        { name: 'Crossfade', range: '0–100 %', default: '50 %' },
      ],
    },
  },
  'Custom Shifter': {
    description: 'Per-note mapping using the Custom Scales table for non-standard harmonies and retuning tricks.',
    layout: {
      voices: 1,
      intervalType: 'custom',
      shifts: ['0 st'],
      mix: '100 %',
      engineExtras: [
        { name: 'Custom Scale', range: '1–32', default: '1' },
        { name: 'Map Note', range: '-24 – +24 st per input note', default: '0 st' },
      ],
    },
  },
  'Dual Chromatic': {
    description: 'Two fixed chromatic shifter voices with independent intervals.',
    layout: { voices: 2, intervalType: 'chromatic', shifts: ['+7 st', '+12 st'], mix: '50 %' },
  },
  'Dual Detune': {
    description: 'Two micro-shifted voices for chorus-like width without an audible LFO sweep.',
    layout: { voices: 2, shifts: ['0 st', '0 st'], detunes: ['-7 cents', '+7 cents'], mix: '50 %' },
  },
  'Dual Detune Delay': {
    description: 'Two detuned voices with delay and feedback for wider Eventide-style doubling.',
    layout: { voices: 2, shifts: ['0 st', '0 st'], detunes: ['-9 cents', '+9 cents'], delays: ['12 ms', '24 ms'], mix: '45 %' },
  },
  'Dual Diatonic': {
    description: 'Two intelligent harmony voices that follow the selected key and scale.',
    layout: { voices: 2, intervalType: 'diatonic', shifts: ['+3 scale degrees', '+5 scale degrees'], mix: '50 %' },
  },
  'Octave Divider': {
    basedOn: 'Analog octave-divider pedals',
    description: 'Vintage sub-octave divider algorithm for synthy, monophonic octave-down lines.',
    layout: {
      voices: 2,
      intervalType: 'octave',
      shifts: ['-12 st', '-24 st'],
      mix: '50 %',
      engineExtras: [
        { name: 'Filter', range: '20 Hz – 20.00 kHz', default: '800 Hz', description: 'Low-pass on sub-octave voices.' },
      ],
    },
  },
  'Quad Chromatic': {
    description: 'Four fixed chromatic harmony voices for stacked octaves, fifths, and special effects.',
    layout: { voices: 4, intervalType: 'chromatic', shifts: ['+7 st', '+12 st', '-12 st', '+19 st'], mix: '50 %' },
  },
  'Quad Chromatic Delay': {
    description: 'Four chromatic harmony voices with independent delays for cascading shifted repeats.',
    layout: { voices: 4, intervalType: 'chromatic', shifts: ['+7 st', '+12 st', '-12 st', '+19 st'], delays: ['0 ms', '120 ms', '240 ms', '360 ms'], mix: '45 %' },
  },
  'Quad Detune': {
    description: 'Four micro-detuned voices for very wide stereo thickening.',
    layout: { voices: 4, shifts: ['0 st', '0 st', '0 st', '0 st'], detunes: ['-12 cents', '+12 cents', '-7 cents', '+7 cents'], mix: '50 %' },
  },
  'Quad Diatonic': {
    description: 'Four intelligent harmony voices that follow the selected key and scale.',
    layout: { voices: 4, intervalType: 'diatonic', shifts: ['+3 scale degrees', '+5 scale degrees', '-3 scale degrees', '+8 scale degrees'], mix: '50 %' },
  },
  'Quad Diatonic Delay': {
    description: 'Four diatonic harmony voices with per-voice delays for arranged harmony echoes.',
    layout: { voices: 4, intervalType: 'diatonic', shifts: ['+3 scale degrees', '+5 scale degrees', '-3 scale degrees', '+8 scale degrees'], delays: ['0 ms', '125 ms', '250 ms', '375 ms'], mix: '45 %' },
  },
  'Virtual Capo': {
    description: 'Polyphonic pitch shifting for drop tuning or capo-style key changes at the start of the grid.',
    notes: 'Put this before the Amp block for whole-guitar retuning so the amp sees the shifted instrument.',
    layout: {
      voices: 1,
      intervalType: 'capo',
      shifts: ['+2 st'],
      mix: '100 %',
      notes: { shifts: 'Set Voice 1 Shift to the number of frets up or down you want to move.' },
    },
  },
}

function createPitchType(name: string): BlockType {
  const preset = pitchTypePresets[name]
  return {
    id: catalogTypeId(name),
    name,
    family: 'Pitch',
    basedOn: preset.basedOn,
    description: preset.description,
    notes: preset.notes,
    settingsLayout: pitchLayout(preset.layout),
  }
}

interface CompLayoutOpts {
  threshold?: string
  ratio?: string
  amountName?: string
  amountRange?: string
  amountDefault?: string
  amountDescription?: string
  attack?: string
  release?: string
  knee?: string
  output?: string
  mix?: string
  showAutoAttRel?: boolean
  autoAttRelDefault?: string
  autoAttRelDescription?: string
  detectorTypeDefault?: string
  extraBasic?: TypeParameter[]
  sidechainExtras?: TypeParameter[]
  notes?: Partial<Record<'threshold' | 'amount' | 'ratio' | 'attack' | 'release' | 'knee' | 'output' | 'mix', string>>
}

// Compressor layout cross-checked against the current Fractal wiki compressor
// overhaul notes. Dynamics Processor defaults were also inspected live in
// FM3-Edit on FM3 firmware 12.00 (May 2026).

function compLayout(opts: CompLayoutOpts = {}): TypeParameterGroup[] {
  const amountName = opts.amountName ?? 'Ratio'
  const amountRange = opts.amountRange ?? '1.00:1 - Infinite'
  const amountDefault = opts.amountDefault ?? opts.ratio ?? 'Type-specific'
  const amountDescription =
    opts.amountDescription ??
    opts.notes?.amount ??
    opts.notes?.ratio ??
    'Compression amount. Exact behavior changes with the selected compressor topology.'

  return [
    {
      title: 'Basic',
      parameters: [
        { name: 'Threshold', range: '-80.0 – 0.0 dB', default: opts.threshold ?? '-20.0 dB', description: opts.notes?.threshold ?? 'Level above which the compressor engages.' },
        { name: amountName, range: amountRange, default: amountDefault, description: amountDescription },
        { name: 'Attack Time', range: '0.001–500.000 ms', default: opts.attack ?? '10.000 ms', description: opts.notes?.attack ?? 'Time to reach 63 % of full gain reduction.' },
        { name: 'Release Time', range: '5.00–4000.00 ms', default: opts.release ?? '200.00 ms', description: opts.notes?.release },
        ...(opts.showAutoAttRel === false
          ? []
          : [
              {
                name: 'Auto Att/Rel',
                range: 'Off / On',
                default: opts.autoAttRelDefault ?? 'Type-specific',
                description:
                  opts.autoAttRelDescription ??
                  'Adaptive attack/release on supported types. When On, manual Attack/Release Time become nominal targets.',
              },
            ]),
        { name: 'Detector Type', range: 'RMS / Peak / Peak+RMS', default: opts.detectorTypeDefault ?? 'Type-specific', description: 'How the sidechain measures signal level.' },
        { name: 'Look-Ahead Time', range: '0.000–20.000 ms', default: '0.000 ms', description: 'Pre-delays the signal so the comp can react before transients.' },
        { name: 'Knee', range: '0.0–24.0 dB', default: opts.knee ?? 'Type-specific', description: opts.notes?.knee ?? 'Soft knee = smoother onset. Some algorithms expose this as Knee Type or bake it into the model.' },
        ...(opts.extraBasic ?? []),
      ],
    },
    {
      title: 'Sidechain',
      parameters: [
        { name: 'Detector Source', range: 'Input / Send 1 / Send 2 / Insert', default: 'Input', description: 'Where the detector sniffs — change to Send for ducking from another block.' },
        { name: 'Detector Low Cut', range: '20.0 Hz – 2.00 kHz', default: '20.0 Hz', description: 'HPF before the detector — keeps bass from triggering the comp.' },
        { name: 'Detector High Cut', range: '200 Hz – 20.00 kHz', default: '20.00 kHz' },
        { name: 'Detector Pre-Emphasis', range: '0.0–10.0', default: '0.00', description: 'Tilts detector sensitivity toward highs.' },
        ...(opts.sidechainExtras ?? []),
      ],
    },
    {
      title: 'Output (persistent column on the right of the editor)',
      parameters: [
        { name: 'Mix', range: '0.0–100.0 %', default: opts.mix ?? '100.0 %', description: opts.notes?.mix ?? '<100 % is parallel / "New York" compression.' },
        { name: 'Level', range: '-80.0 – +20.0 dB', default: opts.output ?? '0.00 dB', description: opts.notes?.output ?? 'Make-up gain after compression.' },
        { name: 'Input Level', range: 'Instrument / Line', default: 'Instrument', description: 'Sets headroom calibration — switch to Line for FX-loop returns.' },
        { name: 'Bypass Mode', range: 'Thru / Mute / Mute In / Mute Out', default: 'Thru' },
      ],
    },
  ]
}

interface GateLayoutOpts {
  threshold?: string
  ratio?: string
  attack?: string
  release?: string
}

function gateLayout(opts: GateLayoutOpts = {}): TypeParameterGroup[] {
  return [
    {
      title: 'Gate',
      parameters: [
        { name: 'Threshold', range: '-80 – 0 dB', default: opts.threshold ?? '-60 dB' },
        { name: 'Ratio', range: '1 : 1 – ∞ : 1', default: opts.ratio ?? '10 : 1' },
        { name: 'Attack', range: '0.1–100 ms', default: opts.attack ?? '1 ms' },
        { name: 'Release', range: '5–2000 ms', default: opts.release ?? '100 ms' },
        { name: 'Hold', range: '0–500 ms', default: '5 ms' },
        { name: 'Look Ahead', range: '0–20 ms', default: '5 ms' },
      ],
    },
    {
      title: 'Sidechain',
      parameters: [
        { name: 'Detector Source', range: 'Input / Send / Insert', default: 'Input' },
        { name: 'Detector Low Cut', range: '20 Hz – 2.00 kHz', default: '20 Hz' },
        { name: 'Detector High Cut', range: '200 Hz – 20.00 kHz', default: '20.00 kHz' },
      ],
    },
  ]
}

type GateTypePreset = {
  description: string
  layout: GateLayoutOpts
}

const gateTypePresets: Record<string, GateTypePreset> = {
  'Classic Expander': {
    description:
      'Classic analog downward-expander behavior with smoother gain reduction than a hard gate.',
    layout: { threshold: '-55 dB', ratio: '4 : 1', attack: '2 ms', release: '150 ms' },
  },
  'Modern Expander': {
    description:
      'Improved Fractal detector ballistics with hard/soft knee behavior for transparent noise control.',
    layout: { threshold: '-58 dB', ratio: '3 : 1', attack: '3 ms', release: '200 ms' },
  },
  'Classic Gate': {
    description:
      'Harder open/close gating with hold behavior for tight high-gain rhythm stops.',
    layout: { threshold: '-50 dB', ratio: '∞ : 1', attack: '0.5 ms', release: '80 ms' },
  },
  'Modern Gate': {
    description:
      'Constant linear-in-dB gate opening. Useful for traditional gating and controlled swell effects.',
    layout: { threshold: '-52 dB', ratio: '∞ : 1', attack: '5 ms', release: '180 ms' },
  },
}

function createGateType(name: string): BlockType {
  const preset = gateTypePresets[name]
  return {
    id: catalogTypeId(name),
    name,
    family: 'Dynamics',
    description: preset.description,
    settingsLayout: gateLayout(preset.layout),
  }
}

interface FilterLayoutOpts {
  freq?: string
  q?: string
  envDepth?: string
  envAttack?: string
  envRelease?: string
  lfoRate?: string
  lfoDepth?: string
  mix?: string
  notes?: Partial<Record<'freq' | 'q' | 'envDepth' | 'lfoRate' | 'lfoDepth' | 'mix', string>>
}

function filterLayout(opts: FilterLayoutOpts = {}): TypeParameterGroup[] {
  return [
    {
      title: 'Filter',
      parameters: [
        { name: 'Frequency', range: '20 Hz – 20.00 kHz', default: opts.freq ?? '800 Hz', description: opts.notes?.freq },
        { name: 'Q / Resonance', range: '0.1–20.0', default: opts.q ?? '1.00', description: opts.notes?.q ?? 'Filter sharpness. High Q can self-oscillate.' },
        { name: 'Gain', range: '-20 – +20 dB', default: '0.0 dB', description: 'For shelf/peaking filter types only.' },
      ],
    },
    {
      title: 'Envelope',
      parameters: [
        { name: 'Envelope Depth', range: '-100 – +100 %', default: opts.envDepth ?? '0 %', description: opts.notes?.envDepth ?? 'Auto-wah amount. Positive = open up on hard picks.' },
        { name: 'Envelope Attack', range: '0.1–500 ms', default: opts.envAttack ?? '5 ms' },
        { name: 'Envelope Release', range: '5–2000 ms', default: opts.envRelease ?? '200 ms' },
        { name: 'Detector Source', range: 'Input / Send / Insert', default: 'Input' },
      ],
    },
    {
      title: 'LFO',
      parameters: [
        { name: 'LFO Rate', range: '0.10–10.00 Hz', default: opts.lfoRate ?? '1.00 Hz', description: opts.notes?.lfoRate },
        { name: 'LFO Tempo', range: 'None / note value', default: 'None' },
        { name: 'LFO Depth', range: '0–100 %', default: opts.lfoDepth ?? '0 %', description: opts.notes?.lfoDepth },
        { name: 'LFO Type', range: 'Sine / Triangle / Square / Random', default: 'Sine' },
      ],
    },
    {
      title: 'Mix',
      parameters: [
        { name: 'Mix', range: '0–100 %', default: opts.mix ?? '100 %' },
        { name: 'Level', range: '-80 – +20 dB', default: '0.00 dB' },
        { name: 'Bypass Mode', range: 'Mute / Thru', default: 'Thru' },
      ],
    },
  ]
}

function filterDiagram(
  title: string,
  summary: string,
  paths: BlockTypeDiagramPath[],
  extras: Pick<BlockTypeDiagram, 'regions' | 'markers' | 'xLabels' | 'yLabel'> = {},
): BlockTypeDiagram {
  return {
    title,
    summary,
    yLabel: extras.yLabel ?? 'Level',
    xLabels: extras.xLabels ?? { low: 'Low', mid: 'Frequency', high: 'High' },
    regions: extras.regions,
    paths,
    markers: extras.markers,
  }
}

const lowCutRegion: BlockTypeDiagramRegion = { x: 24, width: 74, label: 'cut lows', tone: 'cut' }
const highCutRegion: BlockTypeDiagramRegion = { x: 162, width: 74, label: 'cut highs', tone: 'cut' }
const centerFocusRegion: BlockTypeDiagramRegion = { x: 100, width: 60, label: 'focus', tone: 'focus' }
const highShelfRegion: BlockTypeDiagramRegion = { x: 150, width: 86, label: 'high shelf', tone: 'pass' }
const lowShelfRegion: BlockTypeDiagramRegion = { x: 24, width: 86, label: 'low shelf', tone: 'pass' }

type FilterTypePreset = {
  description: string
  diagram: BlockTypeDiagram
  layout?: FilterLayoutOpts
}

const filterTypePresets: Record<string, FilterTypePreset> = {
  Allpass: {
    description: 'Phase-shift-only filter useful for combing, stereo movement, and phase experiments.',
    diagram: filterDiagram(
      'Flat level, shifted phase',
      'The loudness stays flat while the phase rotates around the selected frequency.',
      [
        { d: 'M 24 61 H 236' },
        { d: 'M 24 31 C 80 31 92 92 130 92 C 168 92 180 31 236 31', tone: 'secondary', dashed: true },
      ],
      {
        yLabel: 'Level / phase',
        markers: [
          { x: 130, y: 61, label: 'Fc' },
          { x: 184, y: 34, label: 'phase shift', tone: 'secondary', anchor: 'end' },
        ],
      },
    ),
    layout: { freq: '800 Hz', q: '1.00' },
  },
  'Auto-Wah': {
    description: 'LFO-driven wah/filter sweep using the same filter circuit family as Envelope Filter.',
    diagram: filterDiagram(
      'LFO sweeps a resonant peak',
      'A resonant band moves automatically across the spectrum at the LFO rate.',
      [
        { d: 'M 24 101 C 74 101 88 84 103 53 C 114 31 126 31 137 53 C 152 84 166 101 236 101', tone: 'secondary', dashed: true },
        { d: 'M 24 101 C 100 101 114 83 130 50 C 142 26 157 26 169 50 C 186 83 198 101 236 101' },
      ],
      {
        regions: [centerFocusRegion],
        markers: [
          { x: 130, y: 24, label: 'LFO sweep', anchor: 'middle' },
          { x: 178, y: 60, label: 'Depth', tone: 'secondary' },
        ],
      },
    ),
    layout: { freq: '800 Hz', q: '4.00', lfoRate: '1.00 Hz', lfoDepth: '75 %' },
  },
  'Band-Pass': {
    description: 'Single passband filter, useful for cocked-wah tones and telephone-band shaping.',
    diagram: filterDiagram(
      'One band passes',
      'Only the area around the selected frequency is passed; lows and highs are reduced.',
      [
        { d: 'M 24 100 C 62 100 78 94 96 68 C 112 42 123 27 136 27 C 151 27 163 43 180 69 C 198 94 214 100 236 100' },
      ],
      {
        regions: [lowCutRegion, centerFocusRegion, highCutRegion],
        markers: [{ x: 136, y: 25, label: 'Fc' }],
      },
    ),
    layout: { freq: '800 Hz', q: '2.00' },
  },
  'Envelope Filter': {
    description: 'Pick-dynamics-controlled filter sweep for auto-wah and funk envelope effects.',
    diagram: filterDiagram(
      'Pick attack opens the filter',
      'The envelope follower moves the resonant peak in response to input level.',
      [
        { d: 'M 24 101 C 78 101 92 85 108 55 C 119 34 132 34 143 55 C 159 85 172 101 236 101', tone: 'secondary', dashed: true },
        { d: 'M 24 101 C 104 101 120 82 136 48 C 148 24 163 24 176 48 C 192 82 204 101 236 101' },
      ],
      {
        regions: [centerFocusRegion],
        markers: [
          { x: 136, y: 22, label: 'harder pick', anchor: 'middle' },
          { x: 176, y: 52, label: 'opens', tone: 'secondary' },
        ],
      },
    ),
    layout: { freq: '800 Hz', q: '4.00', envDepth: '60 %', envAttack: '5 ms', envRelease: '180 ms' },
  },
  'Feedback Comb': {
    description: 'Comb filter with feedback for resonant, metallic peaks and delay-line coloration.',
    diagram: filterDiagram(
      'Repeating resonant teeth',
      'Feedback reinforces the repeating peaks and notches, creating a metallic comb shape.',
      [
        { d: 'M 24 88 L 35 32 L 47 88 L 59 32 L 72 88 L 86 32 L 101 88 L 118 32 L 136 88 L 156 32 L 178 88 L 203 32 L 236 88' },
        { d: 'M 24 98 L 35 56 L 47 98 L 59 56 L 72 98 L 86 56 L 101 98 L 118 56 L 136 98 L 156 56 L 178 98 L 203 56 L 236 98', tone: 'secondary', dashed: true },
      ],
      {
        yLabel: 'Resonance',
        markers: [{ x: 151, y: 31, label: 'feedback', anchor: 'middle' }],
      },
    ),
    layout: { freq: '1.00 kHz', q: '5.00' },
  },
  'Feedforward Comb': {
    description: 'Feedforward comb filter for hollow notches and phasey frequency spacing.',
    diagram: filterDiagram(
      'Hollow repeating notches',
      'Feedforward combing makes evenly spaced cancellations without feedback buildup.',
      [
        { d: 'M 24 52 C 34 52 36 91 45 91 C 54 91 57 52 67 52 C 77 52 80 91 90 91 C 100 91 103 52 114 52 C 126 52 129 91 141 91 C 153 91 156 52 169 52 C 183 52 187 91 202 91 C 217 91 221 52 236 52' },
      ],
      {
        yLabel: 'Level',
        markers: [{ x: 130, y: 95, label: 'notches', anchor: 'middle' }],
      },
    ),
    layout: { freq: '1.00 kHz', q: '5.00' },
  },
  Highpass: {
    description: 'High-pass filter for cutting lows before or after distortion.',
    diagram: filterDiagram(
      'Lows cut, highs pass',
      'Frequencies below the cutoff are reduced while the top end passes through.',
      [
        { d: 'M 24 99 C 68 99 84 98 98 88 C 117 73 121 38 145 30 C 162 24 184 28 236 28' },
      ],
      {
        regions: [lowCutRegion],
        markers: [{ x: 126, y: 67, label: 'Fc' }],
      },
    ),
    layout: { freq: '100 Hz', q: '0.71' },
  },
  'High-Shelf': {
    description: 'Broad high-frequency shelf boost or cut.',
    diagram: filterDiagram(
      'High frequencies are lifted or lowered',
      'The response changes smoothly above the shelf frequency while lows stay flat.',
      [
        { d: 'M 24 62 H 105 C 132 62 133 34 160 34 H 236' },
        { d: 'M 24 62 H 105 C 132 62 133 90 160 90 H 236', tone: 'secondary', dashed: true },
      ],
      {
        regions: [highShelfRegion],
        markers: [{ x: 141, y: 56, label: 'Fc' }],
      },
    ),
    layout: { freq: '6.00 kHz', q: '0.71' },
  },
  'High-Shelf 2': {
    description: 'Analog-style high shelf with musical overshoot, derived from classic console EQ behavior.',
    diagram: filterDiagram(
      'High shelf with analog overshoot',
      'A small resonance around the corner makes the shelf feel more like analog EQ.',
      [
        { d: 'M 24 62 H 92 C 111 62 116 23 136 32 C 151 39 151 34 169 34 H 236' },
        { d: 'M 24 62 H 92 C 111 62 116 96 136 88 C 151 82 151 90 169 90 H 236', tone: 'secondary', dashed: true },
      ],
      {
        regions: [highShelfRegion],
        markers: [{ x: 136, y: 26, label: 'overshoot', anchor: 'middle' }],
      },
    ),
    layout: { freq: '6.00 kHz', q: '0.60' },
  },
  'Low-Pass': {
    description: 'Low-pass filter for cutting highs and building lo-fi or synth-like tone shapes.',
    diagram: filterDiagram(
      'Lows pass, highs cut',
      'Frequencies above the cutoff roll off while the low end passes through.',
      [
        { d: 'M 24 28 H 112 C 136 28 140 64 159 83 C 176 98 194 99 236 99' },
      ],
      {
        regions: [highCutRegion],
        markers: [{ x: 145, y: 61, label: 'Fc' }],
      },
    ),
    layout: { freq: '2.00 kHz', q: '0.71' },
  },
  'Low-Shelf': {
    description: 'Broad low-frequency shelf boost or cut.',
    diagram: filterDiagram(
      'Low frequencies are lifted or lowered',
      'The response changes smoothly below the shelf frequency while highs stay flat.',
      [
        { d: 'M 24 34 H 100 C 127 34 128 62 155 62 H 236' },
        { d: 'M 24 90 H 100 C 127 90 128 62 155 62 H 236', tone: 'secondary', dashed: true },
      ],
      {
        regions: [lowShelfRegion],
        markers: [{ x: 133, y: 56, label: 'Fc' }],
      },
    ),
    layout: { freq: '180 Hz', q: '0.71' },
  },
  'Low-Shelf 2': {
    description: 'Analog-style low shelf with musical overshoot, derived from classic console EQ behavior.',
    diagram: filterDiagram(
      'Low shelf with analog overshoot',
      'A small resonance around the shelf corner gives the low shelf a more analog contour.',
      [
        { d: 'M 24 34 H 89 C 108 34 111 39 126 32 C 146 23 151 62 170 62 H 236' },
        { d: 'M 24 90 H 89 C 108 90 111 82 126 88 C 146 96 151 62 170 62 H 236', tone: 'secondary', dashed: true },
      ],
      {
        regions: [lowShelfRegion],
        markers: [{ x: 126, y: 26, label: 'overshoot', anchor: 'middle' }],
      },
    ),
    layout: { freq: '180 Hz', q: '0.60' },
  },
  Notch: {
    description: 'Narrow band-reject filter for feedback, hum, or resonant-frequency removal.',
    diagram: filterDiagram(
      'A narrow frequency is removed',
      'The notch cuts around the selected frequency while nearby lows and highs pass.',
      [
        { d: 'M 24 30 H 106 C 118 30 120 100 130 100 C 140 100 142 30 154 30 H 236' },
      ],
      {
        regions: [centerFocusRegion],
        markers: [{ x: 130, y: 103, label: 'cut Fc', anchor: 'middle' }],
      },
    ),
    layout: { freq: '60 Hz', q: '10.00' },
  },
  Null: {
    description: 'Null filter mode for clean level, mix, or modifier utility patches.',
    diagram: filterDiagram(
      'No tone-shaping curve',
      'The filter shape is bypassed, leaving a clean utility path for level, mix, or modifiers.',
      [
        { d: 'M 24 61 H 236' },
      ],
      {
        yLabel: 'Level',
        markers: [{ x: 130, y: 55, label: 'flat', anchor: 'middle' }],
      },
    ),
    layout: { freq: '800 Hz', q: '1.00' },
  },
  Peaking: {
    description: 'Constant-Q bell boost/cut at one frequency.',
    diagram: filterDiagram(
      'Bell boost or cut',
      'Gain raises or lowers a bell-shaped band around the selected frequency.',
      [
        { d: 'M 24 62 C 79 62 96 60 111 43 C 122 30 138 30 149 43 C 164 60 181 62 236 62' },
        { d: 'M 24 62 C 79 62 96 64 111 81 C 122 94 138 94 149 81 C 164 64 181 62 236 62', tone: 'secondary', dashed: true },
      ],
      {
        regions: [centerFocusRegion],
        markers: [{ x: 130, y: 28, label: 'Fc / Q', anchor: 'middle' }],
      },
    ),
    layout: { freq: '1.00 kHz', q: '1.00' },
  },
  'Peaking 2': {
    description: 'Variable-Q peaking filter modeled after classic graphic-EQ behavior.',
    diagram: filterDiagram(
      'Variable-Q bell',
      'The second peaking type changes width with gain for graphic-EQ-style behavior.',
      [
        { d: 'M 24 62 C 76 62 96 59 111 44 C 124 31 136 31 149 44 C 164 59 184 62 236 62' },
        { d: 'M 24 62 C 95 62 111 58 123 39 C 128 30 134 30 139 39 C 151 58 167 62 236 62', tone: 'secondary', dashed: true },
      ],
      {
        regions: [centerFocusRegion],
        markers: [{ x: 130, y: 28, label: 'wide / narrow Q', anchor: 'middle' }],
      },
    ),
    layout: { freq: '1.00 kHz', q: '1.00' },
  },
  'Tilt EQ': {
    description: 'Single-knob tonal tilt: brighter one way, darker the other.',
    diagram: filterDiagram(
      'Tone tilts around a pivot',
      'One side of the spectrum rises while the other side falls around the pivot frequency.',
      [
        { d: 'M 24 89 L 130 61 L 236 33' },
        { d: 'M 24 33 L 130 61 L 236 89', tone: 'secondary', dashed: true },
      ],
      {
        markers: [{ x: 130, y: 61, label: 'pivot', anchor: 'middle' }],
      },
    ),
    layout: { freq: '1.00 kHz', q: '0.71' },
  },
  'Touch Wah': {
    description:
      'Touch-sensitive filter with a different detector/voltage-to-frequency response than Envelope Filter.',
    diagram: filterDiagram(
      'Touch dynamics sweep the peak',
      'Playing touch moves the wah peak between two ranges with a softer detector response.',
      [
        { d: 'M 24 101 C 72 101 86 86 101 58 C 112 37 124 37 135 58 C 150 86 164 101 236 101', tone: 'secondary', dashed: true },
        { d: 'M 24 101 C 108 101 124 82 140 47 C 151 25 166 25 177 47 C 194 82 206 101 236 101' },
      ],
      {
        regions: [centerFocusRegion],
        markers: [
          { x: 140, y: 23, label: 'touch sweep', anchor: 'middle' },
          { x: 175, y: 57, label: 'responsive', tone: 'secondary' },
        ],
      },
    ),
    layout: { freq: '900 Hz', q: '4.50', envDepth: '70 %', envAttack: '500 ms', envRelease: '200 ms' },
  },
}

function createFilterType(name: string): BlockType {
  const preset = filterTypePresets[name]
  return {
    id: catalogTypeId(name),
    name,
    family: 'Filter',
    description: preset.description,
    diagram: preset.diagram,
    settingsLayout: filterLayout(preset.layout),
  }
}

function enhancerLayout(typeName: string): TypeParameterGroup[] {
  const isClassic = typeName === 'Classic'
  return [
    {
      title: 'Stereo image',
      parameters: [
        { name: 'Type', range: 'Modern / Classic / Stereoizer', default: typeName },
        { name: 'Width', range: '0–100 %', default: isClassic ? '35 %' : '50 %' },
        { name: 'Depth', range: '0–100 %', default: typeName === 'Stereoizer' ? '20 %' : '0 %' },
        { name: 'Low Cut', range: '20 Hz – 2.00 kHz', default: typeName === 'Modern' ? '120 Hz' : '20 Hz' },
        { name: 'High Cut', range: '200 Hz – 20.00 kHz', default: typeName === 'Modern' ? '8.00 kHz' : '20.00 kHz' },
      ],
    },
    {
      title: 'Output',
      parameters: [
        { name: 'Mix', range: '0–100 %', default: '100 %' },
        { name: 'Level', range: '-80 – +20 dB', default: '0.00 dB' },
        { name: 'Bypass Mode', range: 'Thru / Mute', default: 'Thru' },
      ],
    },
  ]
}

function createEnhancerType(name: string): BlockType {
  const descriptions: Record<string, string> = {
    Modern:
      'Multi-band stereo enhancement that widens stereo signals and stereoizes mono sources while remaining mono-compatible.',
    Classic:
      'Delay-based Haas-effect widening. Powerful but can create phase cancellation when summed to mono.',
    Stereoizer:
      'High-order-filter stereo image generation designed to sound natural and remain mono-compatible.',
  }

  return {
    id: catalogTypeId(name),
    name,
    family: 'Filter',
    description: descriptions[name],
    settingsLayout: enhancerLayout(name),
  }
}

function graphicEqLayout(typeName: string): TypeParameterGroup[] {
  const bandCount = typeName.startsWith('10') ? '10' : typeName.startsWith('8') ? '8' : typeName.startsWith('7') ? '7' : typeName.startsWith('5') ? '5' : typeName.startsWith('4') ? '4' : '3'
  return [
    {
      title: 'Bands',
      parameters: [
        { name: 'Type', range: verifiedTypeCatalogs['graphic-eq'].join(' / '), default: typeName },
        { name: 'Band Sliders', range: `${bandCount} fixed-frequency bands`, default: '0.00 dB each' },
        { name: 'Master Q', range: '0.25–4.00', default: '1.00', description: 'Adjusts the Q of all bands where the selected type supports it.' },
        { name: 'Level', range: '-80 – +20 dB', default: '0.00 dB' },
      ],
    },
  ]
}

function createGraphicEqType(name: string): BlockType {
  const isPedal = name.includes('Pedal')
  const isPassive = name.includes('Passive') || name.includes('Console')
  const isMark = name.includes('Mark')
  return {
    id: catalogTypeId(name),
    name,
    family: 'Filter',
    basedOn: isPedal
      ? name.includes('Bass') ? 'BOSS GE-7B bass graphic EQ pedal' : 'BOSS GE-7 graphic EQ pedal'
      : isMark ? 'MESA/Boogie Mark-series graphic EQ'
        : isPassive ? 'Classic passive/console equalizer topology'
          : undefined,
    description: isPedal
      ? 'Graphic EQ pedal mode based on the BOSS GE-7 family, with fixed bands optimized for quick tone shaping.'
      : isMark
        ? 'Five-band Mark-series style graphic EQ with Fractal-adjusted slider behavior.'
        : isPassive
          ? 'Passive/console-inspired EQ curve for broad analog tone shaping.'
          : 'Constant-Q or variable-Q graphic EQ mode for fixed-band tone shaping.',
    settingsLayout: graphicEqLayout(name),
  }
}

function parametricEqLayout(typeName: string): TypeParameterGroup[] {
  return [
    {
      title: 'Bands',
      parameters: [
        { name: 'Type', range: verifiedTypeCatalogs['parametric-eq'].join(' / '), default: typeName },
        { name: 'Frequency', range: '20 Hz – 20.00 kHz', default: '1.00 kHz' },
        { name: 'Q', range: '0.100–40.000', default: '1.000' },
        { name: 'Gain', range: '-20 – +20 dB', default: '0.00 dB' },
      ],
    },
    {
      title: 'Output',
      parameters: [
        { name: 'Level', range: '-80 – +20 dB', default: '0.00 dB' },
        { name: 'Bypass Mode', range: 'Thru / Mute', default: 'Thru' },
      ],
    },
  ]
}

function createParametricEqType(name: string): BlockType {
  return {
    id: catalogTypeId(name),
    name,
    family: 'Filter',
    description: name === 'Blocking'
      ? 'Steep low/high blocking filter for removing unwanted extremes from a PEQ band.'
      : name.endsWith('2')
        ? `${name} recreates analog-style behavior with musical overshoot and variable-Q character.`
        : `${name} parametric EQ band type for precise frequency, Q, and gain control.`,
    settingsLayout: parametricEqLayout(name),
  }
}

function presetTypeLayout(
  typeName: string,
  catalog: readonly string[],
  coreParameters: TypeParameter[],
): TypeParameterGroup[] {
  return [
    {
      title: 'Type preset',
      parameters: [
        { name: 'Type', range: catalog.join(' / '), default: typeName },
        ...coreParameters,
      ],
    },
    {
      title: 'Output',
      parameters: [
        { name: 'Mix', range: '0–100 %', default: '50 %' },
        { name: 'Level', range: '-80 – +20 dB', default: '0.00 dB' },
        { name: 'Bypass Mode', range: 'Thru / Mute / Mute In / Mute Out', default: 'Thru' },
      ],
    },
  ]
}

function createPlexDelayType(name: string): BlockType {
  const lower = name.toLowerCase()
  const isShimmer = lower.includes('shimmer')
  const isDetune = lower.includes('detune')
  const isReverse = lower.includes('reverse')
  return {
    id: catalogTypeId(name),
    name,
    family: 'Delay Engine',
    description: isShimmer
      ? 'Plex Delay shimmer preset using pitch-shifted delay lines and feedback for ambient octave clouds.'
      : isDetune
        ? 'Plex Delay detune preset for wide, modulated pitch-thickening without a standard chorus sweep.'
        : isReverse
          ? 'Plex Delay reverse preset for backward-textured multi-line echoes.'
          : 'Current Plex Delay type preset for multi-line delay, diffusion, pitch, and feedback-matrix textures.',
    settingsLayout: presetTypeLayout(name, verifiedTypeCatalogs['plex-delay'], [
      { name: 'Master Time', range: '0–8000 ms / Tempo', default: 'Type-specific' },
      { name: 'Decay Time', range: '0–100 % / Infinite with Hold', default: 'Type-specific' },
      { name: 'Diffusion', range: '0–100 %', default: 'Type-specific' },
      { name: 'Pitch / Shimmer', range: '-24 – +24 st per voice', default: isShimmer ? '+12 st emphasis' : 'Type-specific' },
      { name: 'Envelope Threshold', range: '-80 – 0 dB', default: '-70 dB', description: 'Used by swell-style Plex presets.' },
    ]),
  }
}

function createMultitapDelayType(name: string): BlockType {
  const lower = name.toLowerCase()
  return {
    id: catalogTypeId(name),
    name,
    family: 'Delay Engine',
    basedOn: lower.includes('aurora')
      ? 'Keeley HALO Andy Timmons delay pedal'
      : lower.includes('space tape') ? 'Roland Space Echo tape delay'
        : lower.includes('1210') ? 'TC Electronic 1210 Spatial Expander'
          : lower.includes('a.h.') ? 'Allan Holdsworth / Yamaha UD-Stomp style multitap delays'
            : lower.includes('pcm') ? 'Lexicon PCM delay/pan algorithms'
              : undefined,
    description: lower.includes('chorus')
      ? 'Multitap Delay type voiced for chorus and multi-voice modulation textures.'
      : lower.includes('tape')
        ? 'Tape-voiced multitap delay preset with multiple heads/taps and filtered repeats.'
        : lower.includes('diffusor')
          ? 'Diffused multitap delay preset for reverb-like density and smear.'
          : 'Current Multitap Delay type preset for rhythmic, spatial, diffused, or multi-tap echo patterns.',
    settingsLayout: presetTypeLayout(name, verifiedTypeCatalogs['multitap-delay'], [
      { name: 'Algorithm', range: 'Type-specific multitap algorithm', default: name },
      { name: 'Tap Time / Tempo', range: 'Per-tap ms or synced values', default: 'Type-specific' },
      { name: 'Tap Level / Pan', range: '-80 – +20 dB / L-R', default: 'Type-specific' },
      { name: 'Feedback', range: '0–100 %', default: 'Type-specific' },
      { name: 'Diffusion', range: '0–100 %', default: lower.includes('diffusor') ? 'High' : 'Type-specific' },
    ]),
  }
}

function createMegatapType(name: string): BlockType {
  const lower = name.toLowerCase()
  return {
    id: catalogTypeId(name),
    name,
    family: 'Delay Engine',
    description: lower.includes('reverb') || lower.includes('verb')
      ? 'Megatap preset using dense taps as a reverb-like pre-cloud or bloom texture.'
      : lower.includes('swell')
        ? 'Megatap preset shaped for swelling, blooming tap patterns.'
        : 'Current Megatap Delay type preset for dense multi-tap rhythmic and textural patterns.',
    settingsLayout: presetTypeLayout(name, verifiedTypeCatalogs.megatap, [
      { name: 'Number of Taps', range: '1–64 on FM3/FM9; up to 128 on Axe-Fx III', default: 'Type-specific' },
      { name: 'Master Time', range: '0–4000 ms / Tempo', default: 'Type-specific' },
      { name: 'Time Shape', range: 'Linear / Exp-Log / Sigmoid / Cosine / Sine', default: 'Type-specific' },
      { name: 'Level Shape', range: 'Multiple tap-envelope shapes', default: 'Type-specific' },
      { name: 'Diffusion', range: '0–100 %', default: lower.includes('diffusion') ? 'High' : 'Type-specific' },
    ]),
  }
}

function createTenTapType(name: string): BlockType {
  return {
    id: catalogTypeId(name),
    name,
    family: 'Delay Engine',
    description: name === 'Rhythm Tap Delay'
      ? 'Ten-Tap type for custom rhythmic repeat patterns.'
      : 'Ten-Tap type with up to ten separately controlled echoes.',
    settingsLayout: presetTypeLayout(name, verifiedTypeCatalogs['ten-tap'], [
      { name: 'Tap Time (1-10)', range: '0–8000 ms / Tempo', default: 'Type-specific' },
      { name: 'Tap Level (1-10)', range: '-80 – +20 dB', default: 'Type-specific' },
      { name: 'Tap Pan (1-10)', range: 'L100 – R100', default: 'Type-specific' },
      { name: 'Feedback', range: '0–100 %', default: 'Type-specific' },
    ]),
  }
}

interface WahLayoutOpts {
  minFreq?: string
  maxFreq?: string
  q?: string
  notes?: Partial<Record<'minFreq' | 'maxFreq' | 'q', string>>
}

// Wahwah layout cross-checked against the Fractal Blocks Guide and FM3-Edit on
// FM3 firmware 12.00 (Color-Tone type inspected live, May 2026). Real pages:
// Wah / Graphic EQ plus the persistent output controls on the Mix page.

function wahLayout(opts: WahLayoutOpts = {}): TypeParameterGroup[] {
  return [
    {
      title: 'Wah',
      parameters: [
        { name: 'Wah Control', range: '0.00-10.00', default: '5.00', description: 'Pedal position; normally assigned to an expression pedal, LFO, or fixed parked position.' },
        { name: 'Control Taper', range: 'Multiple potentiometer tapers', default: 'Linear', description: 'Defines the sweep feel. Log taper values describe the percentage reached at the halfway point.' },
        { name: 'Minimum Frequency', range: '20 Hz - 2.00 kHz', default: opts.minFreq ?? 'Type-specific', description: opts.notes?.minFreq ?? 'Filter frequency at heel-down / lowest control position.' },
        { name: 'Maximum Frequency', range: '200 Hz - 8.00 kHz', default: opts.maxFreq ?? 'Type-specific', description: opts.notes?.maxFreq ?? 'Filter frequency at toe-down / highest control position.' },
        { name: 'Resonance Q', range: '0.10-20.00', default: opts.q ?? 'Type-specific', description: opts.notes?.q ?? 'Filter resonance; higher values give a more pronounced wah peak.' },
        { name: 'Q Tracking', range: '0.00-10.00', default: '8.50', description: 'Mimics classic wahs whose resonance changes as the pedal sweeps upward.' },
        { name: 'Low Cut Frequency', range: '20 Hz - 2.00 kHz', default: '100 Hz', description: 'Highpass behavior like the internal coupling capacitor of a real wah pedal.' },
        { name: 'Drive', range: '0.00-10.00', default: '0.00', description: 'Simulates overdriving the wah circuit.' },
        { name: 'Inductor Bias', range: '0.00-10.00', default: '4.00', description: 'Adjusts the DC offset of the virtual inductor and interacts with Drive.' },
        { name: 'Fat', range: '0.00-10.00', default: '3.50', description: 'Dry-signal mix inside the wah circuit; maximum Fat is a 50/50 wet/dry blend.' },
        { name: 'Auto Engage', range: 'Off / Volume / Position', default: 'Off', description: 'Auto-bypass at pedal heel-rest.' },
      ],
    },
    {
      title: 'Graphic EQ (8-band, 2/3 octave)',
      parameters: [
        { name: 'EQ On/Off', range: 'Off / On', description: 'Enables or bypasses the built-in wah Graphic EQ.' },
        { name: '8 EQ Bands', range: '-12.0 - +12.0 dB each', default: '0.00 dB', description: 'Built-in 8-band Graphic EQ for balancing the wah model after the sweep/filter section.' },
      ],
    },
    {
      title: 'Mix page output',
      parameters: [
        { name: 'Level', range: '-80.0 - +20.0 dB', default: '0.00 dB', description: 'Changing Type auto-adjusts level because Fractal matched model output to the original pedals.' },
        { name: 'Balance', range: '-1.00 - +1.00', default: '0.0' },
        { name: 'Bypass Mode', range: 'Thru / Mute / Mute In / Mute Out', default: 'Thru' },
      ],
    },
  ]
}

interface SynthLayoutOpts {
  waveform: 'Sine' | 'Triangle' | 'Square' | 'Sawtooth' | 'Random' | 'White Noise' | 'Pink Noise' | 'Off'
  pitch?: string
  filter?: string
}

function synthLayout(opts: SynthLayoutOpts): TypeParameterGroup[] {
  return [
    {
      title: 'Selected Voice',
      parameters: [
        { name: 'Type', range: 'Sine / Triangle / Square / Sawtooth / Random / White Noise / Pink Noise / Off', default: opts.waveform, description: 'Oscillator shape or Off state for the selected voice.' },
        { name: 'Track', range: 'Off / Env Only / Pitch+Env / Quantize', default: 'Pitch+Env', description: 'Controls whether the voice follows input pitch, envelope, both, or quantized pitch.' },
        { name: 'Frequency', range: '20 Hz – 20.00 kHz', default: '440 Hz', description: 'Manual oscillator frequency when Track is Off or Env Only.' },
        { name: 'Shift', range: '-24 – +24 st', default: opts.pitch ?? '0 st' },
        { name: 'Tune', range: '-50 – +50 cents', default: '0 ct' },
        { name: 'Duty Cycle', range: '0–100 %', default: '50 %', description: 'Controls triangle symmetry or square-wave pulse width.' },
        { name: 'Level', range: '-80 – +20 dB', default: '0.00 dB' },
        { name: 'Pan', range: '-100 – +100', default: '0' },
      ],
    },
    {
      title: 'Voices 2 & 3',
      parameters: [
        { name: 'Voice 2 Type', range: 'Sine / Triangle / Square / Sawtooth / Random / White Noise / Pink Noise / Off', default: 'Off' },
        { name: 'Voice 2 Shift', range: '-24 – +24 st', default: '+7 st' },
        { name: 'Voice 2 Level', range: '-80 – +20 dB', default: '-80.00 dB' },
        { name: 'Voice 3 Type', range: 'Sine / Triangle / Square / Sawtooth / Random / White Noise / Pink Noise / Off', default: 'Off' },
        { name: 'Voice 3 Shift', range: '-24 – +24 st', default: '+12 st' },
        { name: 'Voice 3 Level', range: '-80 – +20 dB', default: '-80.00 dB' },
      ],
    },
    {
      title: 'Filter',
      parameters: [
        { name: 'Filter Frequency', range: '20 Hz – 20.00 kHz', default: opts.filter ?? '2.00 kHz' },
        { name: 'Filter Q', range: '0.1–10', default: '0.71' },
        { name: 'Attack', range: '0–4000 ms', default: '5 ms', description: 'Attack time of the input envelope follower.' },
      ],
    },
    {
      title: 'Mix',
      parameters: [
        { name: 'Mix', range: '0–100 %', default: '100 %' },
        { name: 'Level', range: '-80 – +20 dB', default: '0.00 dB' },
        { name: 'Balance', range: '-100 – +100', default: '0' },
        { name: 'Bypass Mode', range: 'Mute / Thru', default: 'Thru' },
      ],
    },
  ]
}

function ampTypeDescription(model: AmpModel): string {
  const facts = [
    model.powerTubes ? `power section: ${model.powerTubes}` : undefined,
    model.matchingDynaCab ? `matching DynaCab: ${model.matchingDynaCab}` : undefined,
    model.originalCab ? `original cab: ${model.originalCab}` : undefined,
  ].filter(Boolean)

  const base = `${model.name} is a ${model.family.toLowerCase()} Amp model based on ${model.basedOn}.`
  return facts.length > 0 ? `${base} Wiki facts include ${facts.join('; ')}.` : base
}

function ampTypeNotes(model: AmpModel): string {
  const cab = model.matchingDynaCab ?? model.originalCab
  const controlHint =
    model.controls.length > 0
      ? `The authentic controls listed by the wiki are ${model.controls.slice(0, 8).join(', ')}.`
      : 'Use the shared Amp block pages with the defaults recalled by the selected model.'

  if (model.family === 'Modern High Gain') {
    return `${controlHint} Keep Master Volume conservative first, then shape tightness with Bass, Depth, Presence, and the cab choice${cab ? ` (${cab})` : ''}.`
  }

  if (model.family === 'Bass') {
    return `${controlHint} Start with the cab match${cab ? ` (${cab})` : ''}, then control low-end weight before post-amp compression or EQ.`
  }

  if (model.family === 'American') {
    return `${controlHint} Treat it like the real circuit: set the bright/normal channel balance first, then let the cab match${cab ? ` (${cab})` : ''} define the body.`
  }

  if (model.family === 'British' || model.family === 'Class A') {
    return `${controlHint} Dial gain and Master together like the original amp, then trim Bass or Cut before adding broad EQ${cab ? `; cab match: ${cab}` : ''}.`
  }

  return `${controlHint} Use the source amp identity and cab match${cab ? ` (${cab})` : ''} as the starting point, then fine-tune shared Amp block controls by ear.`
}

function ampTypeLayout(model: AmpModel): TypeParameterGroup[] {
  const modelFacts: TypeParameter[] = [
    {
      name: 'Type',
      range: `${ampModels.length} current Fractal Audio Wiki amp models`,
      default: model.name,
      description: 'The Amp block Type picker entry.',
    },
    {
      name: 'Modeled Amp',
      range: model.basedOn,
      description: 'Real amplifier, preamp, or Fractal custom model named by the wiki.',
    },
    {
      name: 'Family',
      range: model.family,
      description: 'UI grouping used by this guide for browsing and comparison.',
    },
  ]

  if (model.powerTubes) {
    modelFacts.push({
      name: 'Power Tubes',
      range: model.powerTubes,
      description: 'Power-section tube type listed by the Amp models wiki.',
    })
  }

  if (model.originalCab) {
    modelFacts.push({
      name: 'Original Cab',
      range: model.originalCab,
      description: 'Original speaker/cab pairing listed by the wiki.',
    })
  }

  if (model.matchingDynaCab) {
    modelFacts.push({
      name: 'Matching DynaCab',
      range: model.matchingDynaCab,
      description: 'Automatic Amp+Cab linking target listed by the wiki.',
    })
  }

  const authenticControls: TypeParameter[] =
    model.controls.length > 0
      ? model.controls.map((control) => ({
          name: control,
          range: 'Modeled front-panel control',
          description: 'Authentic control listed by the Amp models wiki for this circuit.',
        }))
      : [
          {
            name: 'Standard Amp Controls',
            range: 'Input Drive / Bass / Mid / Treble / Master / Presence / Depth',
            description:
              'This wiki entry does not list a smaller authentic-control subset; use the shared Amp block pages recalled by the Type.',
          },
        ]

  return [
    { title: 'Model', parameters: modelFacts },
    { title: 'Authentic Controls', parameters: authenticControls },
    {
      title: 'Core Amp Pages',
      parameters: [
        {
          name: 'Input Drive / Overdrive',
          range: '0.00-10.00',
          description:
            'Preamp gain. On vintage non-master amps, treat it like the real volume control.',
        },
        {
          name: 'Bass / Mid / Treble',
          range: '0.00-10.00',
          description:
            'Tone stack values follow the selected model; high-gain Mark-style models usually want low Bass before the gain stages.',
        },
        {
          name: 'Master Volume',
          range: '0.00-10.00',
          description:
            'Power-amp drive and feel. Keep lower for tight high-gain models; raise on vintage non-master circuits.',
        },
        {
          name: 'Presence / Depth',
          range: '0.00-10.00',
          description:
            'Negative-feedback voicing for top-end bite and low-end push where the modeled circuit supports it.',
        },
        {
          name: 'Speaker Impedance Curve',
          range: model.matchingDynaCab ?? model.originalCab ?? 'Auto / Manual',
          description:
            'Use the listed cab match as the first impedance/cab reference, then adjust for the selected Cab block.',
        },
      ],
    },
  ]
}

function createAmpType(model: AmpModel): BlockType {
  return {
    id: model.id,
    name: model.name,
    family: model.family as BlockTypeFamily,
    basedOn: model.basedOn,
    description: ampTypeDescription(model),
    notes: ampTypeNotes(model),
    settingsLayout: ampTypeLayout(model),
  }
}

interface DynaCabModel {
  id: string
  name: string
  family: BlockTypeFamily
  basedOn: string
  speaker: string
  cabinet: string
  description: string
  notes?: string
}

const dynaCabModels: DynaCabModel[] = [
  {
    id: '1x8-5f1-tweed',
    name: '1x8 5F1 Tweed',
    family: 'American',
    basedOn: 'Fender Champ combo',
    speaker: '8" speaker',
    cabinet: 'Small tweed Fender combo',
    description:
      'Compact Champ-style DynaCab with the mid-forward bark and tight low end of a tiny 1x8 tweed combo.',
  },
  {
    id: '1x8-princetone',
    name: '1x8 Princetone',
    family: 'American',
    basedOn: '5F2 Tweed Princeton',
    speaker: '8" Jupiter speaker',
    cabinet: 'Tweed Princeton combo',
    description:
      'Small tweed Princeton-flavored cabinet with a Jupiter 8" speaker: sweeter and a little fuller than the Champ-sized cab.',
  },
  {
    id: '1x10-bf-princetone',
    name: '1x10 BF Princetone',
    family: 'American',
    basedOn: 'Blackface Fender Princeton Reverb combo',
    speaker: '10" speaker',
    cabinet: 'Blackface Princeton combo with reverb',
    description:
      'Blackface Princeton-style 1x10 DynaCab for scooped clean tones, springy edge-of-breakup parts, and small-combo focus.',
  },
  {
    id: '1x10-metro-blues',
    name: '1x10 Metro Blues',
    family: 'American',
    basedOn: 'MESA Subway Blues combo',
    speaker: '10" Eminence Black Shadow speaker',
    cabinet: 'MESA Subway Blues combo',
    description:
      'Compact MESA combo cab with a 10" Black Shadow voice, useful when you need American mids without a large-cab low end.',
  },
  {
    id: '1x10-sf-princetone',
    name: '1x10 SF Princetone',
    family: 'American',
    basedOn: 'Silverface Fender Princeton combo',
    speaker: '10" speaker',
    cabinet: 'Silverface Princeton combo',
    description:
      'Silverface Princeton-style 1x10 DynaCab with a clear top end and leaner low-mids than bigger Fender cabs.',
  },
  {
    id: '1x12-ac20',
    name: '1x12 AC20',
    family: 'Boutique',
    basedOn: 'Morgan AC20 Deluxe combo',
    speaker: '12" Celestion G12 Alnico Blue speaker',
    cabinet: 'Morgan AC20 Deluxe combo',
    description:
      'Alnico Blue 1x12 pairing for Class-A chime, touch-sensitive cleans, and edge-of-breakup AC-style tones.',
  },
  {
    id: '1x12-black-magick',
    name: '1x12 Black Magick',
    family: 'American',
    basedOn: 'Supro Black Magick',
    speaker: 'Jensen P12Q speaker',
    cabinet: 'Supro Black Magick combo',
    description:
      'Supro-inspired 1x12 with Jensen P12Q color for raw roots rhythm parts, slide, and vintage low-watt grind.',
  },
  {
    id: '1x12-car-ambler',
    name: '1x12 Car Ambler',
    family: 'Boutique',
    basedOn: 'Carr Rambler combo',
    speaker: '12" speaker, probably Eminence Elsinore',
    cabinet: 'Carr Rambler combo',
    description:
      'Boutique American 1x12 combo voice with strong clean fundamentals and enough mid character for pedal-platform presets.',
  },
  {
    id: '1x12-deluxe-tweed',
    name: '1x12 Deluxe Tweed',
    family: 'American',
    basedOn: 'Tweed Fender Deluxe combo',
    speaker: '12" Celestion Alnico Blue speaker',
    cabinet: 'Tweed Fender Deluxe combo',
    description:
      'Tweed Deluxe-style 1x12 DynaCab with Alnico Blue compression and bright vintage breakup.',
  },
  {
    id: '1x12-deluxe-verb',
    name: '1x12 Deluxe Verb',
    family: 'American',
    basedOn: 'Fender Deluxe Reverb combo',
    speaker: '12" Jensen C12K speaker',
    cabinet: 'Fender Deluxe Reverb combo',
    description:
      'Core blackface Deluxe Reverb-style 1x12 for polished cleans, edge-of-breakup rhythms, and classic pedal-platform tones.',
  },
  {
    id: '1x12-div13-cj11',
    name: '1x12 Div13 CJ11',
    family: 'Boutique',
    basedOn: 'Divided By 13 CJ11 combo',
    speaker: '12" Celestion G12M speaker',
    cabinet: 'Divided By 13 CJ11 combo',
    description:
      'Boutique 1x12 with Greenback-style midrange, sitting between chimey British compression and American combo punch.',
  },
  {
    id: '1x12-g12t-100',
    name: '1x12 G12T-100',
    family: 'British',
    basedOn: 'Custom 1x12 cabinet',
    speaker: '12" Celestion G12T-100 speaker',
    cabinet: 'Custom 1x12 cabinet',
    description:
      'Single-speaker Celestion G12T-100 cab for tighter modern lows and a more controlled high-power British voice.',
  },
  {
    id: '1x12-hot-kitty',
    name: '1x12 Hot Kitty',
    family: 'Boutique',
    basedOn: 'Bad Cat Hot Cat 30 combo',
    speaker: '12" custom Celestion V30 speaker',
    cabinet: 'Bad Cat Hot Cat 30 combo',
    description:
      'Boutique V30-loaded 1x12 with aggressive upper mids for modern crunch, thick leads, and focused stage tones.',
  },
  {
    id: '1x12-jr-blues',
    name: '1x12 Jr Blues',
    family: 'American',
    basedOn: 'Fender Blues Junior',
    speaker: '12" speaker, probably Eminence or Jensen',
    cabinet: 'Fender Blues Junior combo',
    description:
      'Small American 1x12 combo voice for blues, compact clean presets, and familiar club-amp midrange.',
  },
  {
    id: '1x12-nuclear-tone',
    name: '1x12 Nuclear Tone',
    family: 'Boutique',
    basedOn: 'Swart Atomic Space Tone',
    speaker: '12" Mojotone BV-25M speaker',
    cabinet: 'Swart Atomic Space Tone combo',
    description:
      'Swart-inspired 1x12 with low-watt boutique texture, useful for rootsy ambience and vintage-style breakup.',
  },
  {
    id: '1x12-scholz',
    name: '1x12 Scholz',
    family: 'Boutique',
    basedOn: 'MojoTone West Coast 1x12',
    speaker: '12" Scholz SugarCone / Classic speaker',
    cabinet: 'MojoTone West Coast 1x12 cabinet',
    description:
      'Scholz SugarCone-loaded 1x12 for smooth full-range guitar response and polished direct tones.',
  },
  {
    id: '1x12-tweed-20112',
    name: '1x12 Tweed 20112',
    family: 'American',
    basedOn: 'Victoria 20112 Deluxe Tweed combo',
    speaker: '12" Eminence speaker',
    cabinet: 'Victoria 20112 Deluxe Tweed combo',
    description:
      'Victoria tweed Deluxe-style 1x12 with ceramic Eminence punch for bright vintage crunch and touch-sensitive cleans.',
  },
  {
    id: '1x12-vibrato-lux',
    name: '1x12 Vibrato Lux',
    family: 'American',
    basedOn: 'Brownface Fender Vibrolux combo',
    speaker: '12" speaker',
    cabinet: 'Brownface Fender Vibrolux combo',
    description:
      'Brownface Vibrolux-style 1x12 with warm American mids, excellent for tremolo, roots, and early-60s clean breakup.',
  },
  {
    id: '1x15-heart-key',
    name: '1x15 Heart Key',
    family: 'Bass',
    basedOn: 'Hartke bass combo',
    speaker: '15" HyDrive speaker',
    cabinet: 'Hartke bass combo',
    description:
      'Single 15" Hartke-style bass DynaCab with broad lows and paper/aluminum HyDrive attack.',
  },
  {
    id: '1x15-portabass',
    name: '1x15 Portabass',
    family: 'Bass',
    basedOn: 'Ampeg Portaflex bass cabinet',
    speaker: '15" Eminence speaker',
    cabinet: 'Ampeg Portaflex bass cabinet',
    description:
      'Portaflex-style 1x15 bass cabinet for round vintage lows and direct-friendly bass support.',
  },
  {
    id: '1x15-vibratoverb',
    name: '1x15 Vibratoverb',
    family: 'American',
    basedOn: 'Fender Vibroverb combo',
    speaker: '15" JBL D130 speaker',
    cabinet: 'Fender Vibroverb combo',
    description:
      'Large American 1x15 combo with JBL D130 clarity, useful for big clean guitar, surf, and wide single-coil tones.',
  },
  {
    id: '2x10-heart-key',
    name: '2x10 Heart Key',
    family: 'Bass',
    basedOn: 'Hartke bass combo',
    speaker: '10" HyDrive paper/aluminum cone speakers',
    cabinet: 'Hartke bass combo',
    description:
      'Two-ten Hartke-style bass cab with quicker attack and tighter lows than the 1x15 Heart Key.',
  },
  {
    id: '2x10-super-6g4',
    name: '2x10 Super 6G4',
    family: 'American',
    basedOn: 'Brownface Fender Super combo',
    speaker: 'Two 10" speakers',
    cabinet: 'Brownface Fender Super combo',
    description:
      'Brownface Super-style 2x10 for woody American clean tones, tremolo-heavy presets, and articulate blues rhythm.',
  },
  {
    id: '2x12-5153-stealth',
    name: '2x12 5153 Stealth',
    family: 'Modern High Gain',
    basedOn: 'EVH 5150 III Stealth cabinet',
    speaker: 'Two 12" Celestion G12H speakers',
    cabinet: 'EVH 5150 III Stealth 2x12 cabinet',
    description:
      'Compact EVH-style 2x12 DynaCab for tight modern gain, focused lows, and less spread than a 4x12.',
  },
  {
    id: '2x12-65-bassguy',
    name: '2x12 65 Bassguy',
    family: 'American',
    basedOn: 'Blackface Fender Bassman combo or cabinet',
    speaker: 'Original 12" Fender speakers',
    cabinet: 'Blackface Fender Bassman combo or cabinet',
    description:
      'Blackface Bassman-flavored 2x12 for bigger American cleans, blues drive, and classic pedal-platform sounds.',
  },
  {
    id: '2x12-chiefman',
    name: '2x12 Chiefman',
    family: 'Boutique',
    basedOn: 'Matchless Chieftain combo',
    speaker: 'Two 12" custom Celestion G12H75 speakers',
    cabinet: 'Matchless Chieftain combo',
    description:
      'Boutique 2x12 with custom G12H75 speakers for punchy chime, strong low mids, and premium Class-A-style drive.',
  },
  {
    id: '2x12-class-a-30w',
    name: '2x12 Class-A 30W',
    family: 'British',
    basedOn: '1963 Vox AC-30 combo',
    speaker: 'Two 12" Alnico Silver Bell speakers',
    cabinet: '1963 Vox AC-30 combo',
    description:
      'AC-30-style 2x12 with Alnico Silver speakers for brilliant top end, compression, and classic British chime.',
    notes:
      'The wiki notes this AC30 had beam blockers both vertically and horizontally, which is part of why this DynaCab has a distinctive capture character.',
  },
  {
    id: '2x12-double-verb',
    name: '2x12 Double Verb',
    family: 'American',
    basedOn: 'Blackface Fender Twin Reverb combo',
    speaker: 'Original 12" Fender speakers',
    cabinet: 'Blackface Fender Twin Reverb combo',
    description:
      'Twin Reverb-style 2x12 DynaCab for big blackface cleans, wide pedal platforms, and polished stage direct tones.',
  },
  {
    id: '2x12-lead-80',
    name: '2x12 Lead 80',
    family: 'British',
    basedOn: 'Possibly Bogner Shiva 2x12 cabinet',
    speaker: 'Two 12" Celestion Classic Lead 80 speakers',
    cabinet: '2x12 cabinet',
    description:
      'Classic Lead 80-loaded 2x12 with firm lows and smoother high end, useful for articulate gain and broad clean support.',
  },
  {
    id: '2x12-texas-star',
    name: '2x12 Texas Star',
    family: 'American',
    basedOn: 'MESA Lone Star 2x12 combo or cabinet',
    speaker: 'Two 12" speakers, probably Celestion MC90 / Black Shadow',
    cabinet: 'MESA Lone Star 2x12 combo or cabinet',
    description:
      'MESA Lone Star-flavored 2x12 with Black Shadow-style speakers for full American cleans and thick mid-gain tones.',
  },
  {
    id: '4x10-bassguy-ri',
    name: '4x10 Bassguy RI',
    family: 'American',
    basedOn: '1959 Fender Bassman reissue combo',
    speaker: 'Four 10" Jensen P10 speakers',
    cabinet: '1959 Fender Bassman reissue combo',
    description:
      'Bassman reissue 4x10 DynaCab with fast attack, broad clean spread, and familiar tweed punch.',
  },
  {
    id: '4x12-1960tv',
    name: '4x12 1960TV',
    family: 'British',
    basedOn: 'Marshall 1960TV tall vertical angled cabinet',
    speaker: 'Four 12" G12 Greenback speakers',
    cabinet: 'Marshall 1960TV tall angled cabinet',
    description:
      'Tall Marshall Greenback 4x12 voice for classic rock crunch, vintage lead tones, and chewy British mids.',
  },
  {
    id: '4x12-5153-stealth',
    name: '4x12 5153 Stealth',
    family: 'Modern High Gain',
    basedOn: 'EVH 5150 III Stealth cabinet',
    speaker: 'Four 12" Celestion G12 EVH 20W speakers',
    cabinet: 'EVH 5150 III Stealth 4x12 cabinet',
    description:
      'Full EVH Stealth 4x12 DynaCab for tight palm-mutes, aggressive modern gain, and dense rhythm tracking.',
  },
  {
    id: '4x12-5153',
    name: '4x12 5153',
    family: 'Modern High Gain',
    basedOn: 'EVH 5150 III cabinet',
    speaker: 'Four 12" Celestion speakers',
    cabinet: 'EVH 5150 III 4x12 cabinet',
    description:
      'Standard EVH 5153 4x12 cabinet for modern rock and metal with strong upper-mid cut and controlled lows.',
  },
  {
    id: '4x12-citrus',
    name: '4x12 Citrus',
    family: 'British',
    basedOn: 'Orange 4x12 cabinet',
    speaker: 'Four 12" Celestion V30 speakers',
    cabinet: 'Orange 4x12 cabinet',
    description:
      'Orange-style V30 4x12 with thick low mids and snarling British upper mids for stoner rock, punk, and heavy rhythm.',
  },
  {
    id: '4x12-friedman-gb',
    name: '4x12 Friedman GB',
    family: 'Boutique',
    basedOn: 'Friedman 4x12 cabinet',
    speaker: '12" Celestion Greenback speakers',
    cabinet: 'Friedman 4x12 cabinet',
    description:
      'Greenback side of the Friedman 4x12 captures, voiced for chewy boutique British crunch and vintage-style leads.',
  },
  {
    id: '4x12-friedman-v30',
    name: '4x12 Friedman V30',
    family: 'Boutique',
    basedOn: 'Friedman 4x12 cabinet',
    speaker: '12" Celestion V30 speakers',
    cabinet: 'Friedman 4x12 cabinet',
    description:
      'V30 side of the Friedman 4x12 captures, giving tighter lows and more modern cut than the Greenback variant.',
  },
  {
    id: '4x12-lerxst',
    name: '4x12 Lerxst',
    family: 'British',
    basedOn: 'Lerxst 4x12 cabinet',
    speaker: 'Four 12" Celestion speakers, probably Greenbacks',
    cabinet: 'Lerxst 4x12 cabinet',
    description:
      'Lerxst 4x12 DynaCab with likely Greenback-style speakers for articulate classic-rock grind and smooth lead sustain.',
  },
  {
    id: '4x12-recto-slant',
    name: '4x12 Recto Slant',
    family: 'Modern High Gain',
    basedOn: 'MESA Rectifier slanted 4x12 cabinet',
    speaker: 'Four 12" speakers',
    cabinet: 'Slanted MESA Rectifier 4x12 cabinet',
    description:
      'Slanted Rectifier 4x12 for aggressive modern rhythm tones, forward projection, and familiar V-shaped metal voicing.',
  },
  {
    id: '4x12-recto-straight',
    name: '4x12 Recto Straight',
    family: 'Modern High Gain',
    basedOn: 'MESA Rectifier straight 4x12 cabinet',
    speaker: 'Four 12" speakers',
    cabinet: 'Straight MESA Rectifier 4x12 cabinet',
    description:
      'Straight Rectifier 4x12 with a firmer low-end feel than the slanted variant, suited to tight rhythm and heavy leads.',
  },
  {
    id: '4x12-rumble-ev12l',
    name: '4x12 Rumble EV12L',
    family: 'Boutique',
    basedOn: 'Dumble 4x12 cabinet',
    speaker: 'Four 12" EV-12L speakers',
    cabinet: 'Dumble 4x12 cabinet',
    description:
      'EV-12L-loaded Dumble-style 4x12 with broad clean headroom, strong low mids, and smooth overdrive support.',
  },
  {
    id: '4x12-rumble-ev12s',
    name: '4x12 Rumble EV12S',
    family: 'Boutique',
    basedOn: 'Dumble 4x12 cabinet',
    speaker: 'Four 12" EV-12S speakers',
    cabinet: 'Dumble 4x12 cabinet',
    description:
      'EV-12S-loaded Dumble-style 4x12 for a related but softer Rumble cab response with refined upper mids.',
  },
  {
    id: '4x12-solo-100',
    name: '4x12 Solo 100',
    family: 'Modern High Gain',
    basedOn: 'Soldano 4x12 cabinet',
    speaker: 'Four 12" speakers',
    cabinet: 'Soldano 4x12 cabinet',
    description:
      'Soldano-style 4x12 DynaCab for singing high-gain leads, tight rhythm work, and polished hard-rock tones.',
  },
  {
    id: '4x12-usa-mc90',
    name: '4x12 USA MC90',
    family: 'Modern High Gain',
    basedOn: "Cliff's 1980s MESA 4x12 cabinet",
    speaker: 'Four 12" Celestion MC90 / Black Shadow speakers',
    cabinet: '1980s MESA 4x12 with metal grille',
    description:
      'MESA MC90-loaded 4x12 with Classic Lead 80-like speakers, useful for big American high-gain tones and clear cleans.',
  },
  {
    id: '8x10-sv-bass',
    name: '8x10 SV Bass',
    family: 'Bass',
    basedOn: 'Ampeg SVT bass cabinet',
    speaker: 'Eight 10" speakers',
    cabinet: 'Ampeg SVT 8x10 bass cabinet',
    description:
      'Large SVT-style 8x10 bass DynaCab from the Dr. Bonkers SBB Bass pack, built for punchy rock bass and direct stage tones.',
  },
]

const stockDynaCabMicChoices =
  'Dynamic 1 (Shure SM57) / Dynamic 2 (Shure SM7B) / Ribbon (Royer 121) / Condenser (Soyuz 023)'

function dynaCabTypeLayout(model: DynaCabModel): TypeParameterGroup[] {
  return [
    {
      title: 'DynaCab model',
      parameters: [
        {
          name: 'Cab Mode',
          range: 'DynaCab',
          default: 'DynaCab',
          description:
            'Interactive cabinet mode where cab, microphone, position, and distance select the matching captured IR behind the scenes.',
        },
        {
          name: 'Cabinet Type',
          range: `${dynaCabModels.length} stock DynaCab models`,
          default: model.name,
          description: 'The Cab block Type picker entry for this stock DynaCab.',
        },
        {
          name: 'Physical Source',
          range: model.basedOn,
          description: model.cabinet,
        },
        {
          name: 'Speaker',
          range: model.speaker,
          description: 'Speaker configuration listed for this DynaCab in the Fractal Audio wiki.',
        },
      ],
    },
    {
      title: 'Mic and position',
      parameters: [
        {
          name: 'Mic Type',
          range: stockDynaCabMicChoices,
          description:
            'Stock DynaCab microphone choices available on current generation hardware.',
        },
        {
          name: 'Position',
          range: 'Center to edge of speaker',
          description:
            'Radial microphone position across the speaker; center is brighter, edge is usually warmer and darker.',
        },
        {
          name: 'Distance',
          range: 'Near grille outward',
          default: '0.0 at the grille',
          description:
            'Distance from the grille cloth. Increasing distance typically reduces proximity low end and introduces more room contribution.',
        },
        {
          name: 'Smoothing',
          range: 'Available on devices that support Cab smoothing',
          description:
            'DynaCabs support smoothing where the device exposes that Cab block control.',
        },
      ],
    },
    {
      title: 'Amp interaction',
      parameters: [
        {
          name: 'Auto DynaCab Impedance',
          range: 'Amp block follows Cab slot 1',
          description:
            'When enabled in the Amp block, the speaker impedance curve follows the first DynaCab slot for the associated Cab block.',
        },
        {
          name: 'Mixing',
          range: 'Time-aligned DynaCabs',
          description:
            'Stock DynaCabs are time-aligned, so multiple cabs and microphones can be blended without forcing minimum-phase conversion.',
        },
      ],
    },
  ]
}

function createDynaCabType(model: DynaCabModel): BlockType {
  return {
    id: model.id,
    name: model.name,
    family: model.family,
    basedOn: model.basedOn,
    description: model.description,
    notes:
      model.notes ??
      'Use DynaCab mode to move the selected mic across and away from the speaker instead of browsing fixed legacy IR slots.',
    settingsLayout: dynaCabTypeLayout(model),
  }
}

export const blocks: Block[] = [
  {
    id: 'amp',
    name: 'Amp',
    abbreviation: 'AMP',
    category: 'Amp & Cab',
    fm3Instances: 1,
    types: ampModels.length,
    summary:
      `Component-level models of the current ${ampModels.length}-model Fractal Audio Wiki catalog, powered by Cygnus X-3 with SpectrumTrack™.`,
    description:
      "The Amp block models the entire amplifier signal path — preamp tubes, tonestack, cathode follower, power supply, power amp, phase inverter, and the speaker interaction — using component-level physical modeling. The current Cygnus X-3 algorithm includes SpectrumTrack™ Technology for more accurate harmonic response from clean to high gain, especially on cascaded-gain amps. Each amp has four independent channels (A–D). FM3 supports one Amp block at a time.",
    keyParameters: [
      {
        name: 'Type',
        description:
          'Alphabetical picker of the current Fractal Audio Wiki amp model catalog, grouped here by family with source amp, cab, tube, and authentic-control facts.',
      },
      {
        name: 'Gain',
        description:
          'Preamp distortion / drive. Works with Master Volume to set the clean→broken-up→saturated balance. On no-master amps it acts as the volume.',
      },
      {
        name: 'Bass / Mid / Treble',
        description:
          'Authentic passive tonestack matching the original amp; knob positions correspond to the real-world settings.',
      },
      {
        name: 'Master Volume',
        description:
          'Controls virtual power-amp distortion and feel. Higher settings introduce "bloom" and touch sensitivity. Headroom meter shows when you are overdriving the power tubes.',
      },
      {
        name: 'Presence / Depth',
        description:
          'Shape the negative-feedback frequency response of the power amp — Presence brightens, Depth thickens the lows.',
      },
      {
        name: 'Input Boost',
        description:
          'Built-in clean boost with selectable EQ flavor (modeled drive-pedal voicings). Common substitute for stacking a separate Drive block.',
      },
      {
        name: 'Power Tube Type / Bias / Sag',
        description:
          'Swap tube types (6L6, EL34, EL84, KT88…) and dial in bias, sag, and supply behavior independent of the model.',
      },
      {
        name: 'Speaker Compression / Impedance Curve',
        description:
          'Models the dynamic interaction between the virtual power amp and the cabinet (auto-followed when a Cab block is paired).',
      },
    ],
    typicalPosition: 'After dynamics/drives, before Cab.',
    tips: [
      'Disabling Power Amp Modeling turns Master into a 40 dB level control — useful when running into a real tube power amp.',
      'High-gain amps almost always sound better with Master Volume kept low to avoid muddiness.',
    ],
    typeList: ampModels.map(createAmpType),
  },
  {
    id: 'cab',
    name: 'Cab',
    abbreviation: 'CAB',
    category: 'Amp & Cab',
    fm3Instances: 1,
    types: dynaCabModels.length,
    summary:
      'Speaker cab simulation with the current stock DynaCab™ cabinet models, visual mic positioning, and a built-in preamp/room sim.',
    description:
      "The Cab block uses impulse responses to recreate guitar and bass speakers, mic'd through a chosen microphone, preamp, and room. This guide catalogs the current stock DynaCab™ models: interactive cabinet captures where you pick a cab and mic, then move the mic position and distance while the unit loads the appropriate IR behind the scenes. Legacy factory banks and user IR slots are intentionally not expanded here.",
    keyParameters: [
      {
        name: 'Cab Mode',
        description:
          'Toggle between Legacy IR selection and DynaCab™ — a visual interface where you pick a cab + mic and adjust position/distance dynamically.',
      },
      {
        name: 'Bank / Cab Number (Legacy)',
        description:
          'Legacy factory banks and user IR slots still exist on supported products, but this guide focuses the Cab type catalog on stock DynaCabs only.',
      },
      {
        name: 'Mic Type & Position (DynaCab)',
        description:
          'Selects the modeled microphone and where it sits across the speaker — from CAP (center, bright) to EDGE (warm, darker).',
      },
      {
        name: 'Mic Distance / Proximity',
        description:
          'Distance from the grille (cm) influences directness, low-end proximity, and room ambience. DynaCab IRs are time-aligned so distance changes tone without phase issues.',
      },
      {
        name: 'Auto DynaCab Impedance',
        description:
          'When enabled in the Amp block, the speaker impedance curve follows the DynaCab type in the first slot of the associated Cab block.',
      },
      {
        name: 'Level / Pan / Mute / Solo (per IR)',
        description:
          'Mixer-style controls for each loaded IR. Level changes the blend (the final mix is auto-normalized), Pan places each IR in stereo.',
      },
      {
        name: 'Low-Cut / Hi-Cut (per IR + Master)',
        description:
          'Per-IR shelving filters plus master filters on the Preamp page for shaping the cab response.',
      },
      {
        name: 'Mic Preamp (Drive / Saturation / Tone)',
        description:
          'Models tube, FET, transformer, tape, exciter, etc. Adds harmonic content from a slight warmth to nasty overdrive.',
      },
      {
        name: 'Room Level / Size',
        description:
          'Built-in stereo room reverb simulator. Useful for adding "amp in a room" depth without spending a Reverb block.',
      },
    ],
    typicalPosition: 'Immediately after the Amp block.',
    tips: [
      'Stock DynaCab mic choices are Dynamic 1 (Shure SM57), Dynamic 2 (Shure SM7B), Ribbon (Royer 121), and Condenser (Soyuz 023).',
      'Use the Looper block while moving mic position and distance; each cab has useful bright and warm zones.',
      'For two-cab blends, keep Auto DynaCab Impedance in mind: the first Cab slot controls the matching speaker impedance curve.',
    ],
    typeList: dynaCabModels.map(createDynaCabType),
  },
  {
    id: 'ir-player',
    name: 'IR Player',
    abbreviation: 'IRP',
    category: 'Amp & Cab',
    fm3Instances: 0,
    types: 1,
    summary:
      'Axe-Fx III-only lightweight convolution block for cabinet IRs, room IRs, Tone Match exports, and other impulse responses.',
    description:
      'The IR Player block processes up to two impulse responses with less overhead than the full Cab block. It can run cabinet IRs, room ambience, room correction captures, or Tone Match data exported as an IR. The current Fractal Audio Wiki lists it as Axe-Fx III only for this family.',
    keyParameters: [
      { name: 'IR 1 / IR 2', description: 'Selects the impulse responses to process.' },
      { name: 'Level / Pan', description: 'Independent level and stereo placement for each IR.' },
      { name: 'Mix', description: 'Wet/dry blend; useful when the IR is room ambience or a convolution texture.' },
      { name: 'Mode', description: 'Parallel or Series routing for the two loaded IRs.' },
      { name: 'IR Length', description: 'Length/resolution control; FullRes use is Axe-Fx III territory.' },
    ],
    typicalPosition:
      'After Amp when replacing a Cab, or late in the chain for room/space convolution.',
    tips: [
      'Use it when you need a simple IR loader and do not need the full Cab block mixer/preamp workflow.',
      'Exported Tone Match data can be reused as an IR here on Axe-Fx III.',
    ],
  },
  {
    id: 'tone-match',
    name: 'Tone Match',
    abbreviation: 'TMA',
    category: 'Amp & Cab',
    fm3Instances: 0,
    types: 1,
    summary:
      'Axe-Fx III-only tone matching tool that analyzes a reference source against the local preset and creates corrective EQ data.',
    description:
      'Tone Match compares a reference signal with the sound of the current preset, then generates matching data to close the frequency-response gap. It is commonly used for amp matching, recording matching, acoustic simulation, and forensic comparison between tones. The wiki lists the block as Axe-Fx III only; FM3 and FM9 can use exported Tone Match results as IRs through Cab or IR Player workflows.',
    keyParameters: [
      { name: 'Mode', description: 'Live/Amp matching or offline-style matching workflow.' },
      { name: 'Reference Source', description: 'Chooses the input or signal used as the target reference.' },
      { name: 'Reference Solo', description: 'Auditions the reference signal while matching.' },
      { name: 'Match / Smooth', description: 'Builds and refines the corrective response.' },
      { name: 'Export', description: 'Converts match data to an IR when a cross-device workflow is needed.' },
    ],
    typicalPosition:
      'Usually after Amp/Cab for tone analysis, or in a minimal amp-matching template.',
    tips: [
      'For matching real cabinets, a properly captured IR is still the more portable result.',
    ],
  },
  {
    id: 'drive',
    name: 'Drive',
    abbreviation: 'DRV',
    category: 'Drive',
    fm3Instances: 2,
    // 87 types confirmed on the Drive block wiki revision from 21 May 2026
    types: 87,
    summary:
      '87 current Drive models from the Fractal Audio Wiki — boost, overdrive, distortion, fuzz, bass DI, lo-fi, and tape-style drive types.',
    description:
      "The Drive block models the current Fractal Audio Wiki catalog: Tube Screamer and TS9DX variants, Klon, Rat and 1981 DRV, Big Muff variants, OCD HP/LP, DS-1, BB Pre/BB Pre AT, Tone Bender, Metal Zone, Suhr Riot modes, Tube Driver 3/4/5-Knob, Timothy modes, Swedish Metal, bass DI/preamp models, custom Fractal boosts, Bit Crusher, Shimmer Drive, and Tape Distortion. Each type keeps the shared Drive block pages while loading a type-specific source, family, and baseline control layout.",
    keyParameters: [
      {
        name: 'Type',
        description:
          'The model. Current wiki categories include Boost, Overdrive, Distortion, Fuzz, Bass DI/preamp, Lo-Fi/custom, and tape-style drive models.',
      },
      {
        name: 'Drive',
        description: 'Sets the gain into the clipping stage.',
      },
      {
        name: 'Tone',
        description:
          'Models the original pedal tone control where present (e.g. a Tube Screamer mid hump and high roll-off).',
      },
      {
        name: 'Level',
        description:
          'Output volume from the drive. Use with low Drive to use a pedal as a clean boost into the amp.',
      },
      {
        name: 'Low Cut / High Cut',
        description:
          'Additional EQ that the original pedal does not have. Low Cut tightens fuzzes and dark drives; High Cut tames fizz.',
      },
      {
        name: 'Mix',
        description:
          'Parallel blend of clean and driven signal — useful for keeping low-end clarity on bass and fuzz settings.',
      },
      {
        name: 'Bit Reduction (expert)',
        description:
          'Bit-crusher for lo-fi character on top of the drive.',
      },
    ],
    typicalPosition: 'Before the Amp block (post-compressor, pre-amp).',
    tips: [
      'Stacking two drives is common — a transparent boost (Klone, FAS Boost) before a mid-bump drive (T808) tightens high-gain amps.',
    ],
    typeList: verifiedTypeCatalogs.drive.map(createDriveType),
  },
  {
    id: 'dynamic-distortion',
    name: 'Dynamic Distortion',
    abbreviation: 'DYN',
    category: 'Drive',
    fm3Instances: 0,
    types: 'multiple',
    summary:
      'Axe-Fx III-only dynamic distortion that adds level-dependent harmonic drive in selected frequency ranges.',
    description:
      'Dynamic Distortion distorts the input signal only as level rises through the shaped filter range. Quiet passages remain closer to the dry input, while stronger playing pushes targeted bands into saturation. It is useful for post-amp shaping, mastering-style edge, and adding vintage drive character to modulation or delay paths. The wiki lists this block as Axe-Fx III only.',
    keyParameters: [
      { name: 'Type / Preset', description: 'Loads Fractal preset curves that demonstrate different dynamic drive shapes.' },
      { name: 'Filter Shape', description: 'Chooses the frequency range that receives level-dependent distortion.' },
      { name: 'Drive', description: 'Sets how strongly the selected range distorts as level increases.' },
      { name: 'Mix', description: 'Blends the dynamic distortion with the original signal.' },
      { name: 'Level', description: 'Output trim after the dynamic distortion stage.' },
    ],
    typicalPosition: 'Designed for direct post-Amp use, but also works after delay or modulation.',
    tips: [
      'Treat it like a dynamic post-amp exciter: small settings are more useful than obvious distortion on full mixes.',
    ],
  },
  {
    id: 'delay',
    name: 'Delay',
    abbreviation: 'DLY',
    category: 'Delay',
    fm3Instances: 2,
    // 27 types confirmed on FM3 firmware 12.00 (Type dropdown captured live, May 2026)
    types: 27,
    summary:
      'Up to 8 seconds per block. 27 engines on firmware 12.00: digital, analog, tape, ping-pong, dual, reverse, sweep, ducking, BBD, ambient stereo, surround, wandering, plus the Boss DM-2 / TC 2290 / Echoplex tape models.',
    description:
      "The Delay block covers everything from pristine digital lines to worn-tape echoes and ambient stereo washes. The FM3 firmware 12.00 list has 27 types, including Digital, Analog, Tape, BBD, Ping-Pong, Dual, Reverse, Sweep, Ducking, Vintage Digital, 2290 w/ Modulation, Deluxe/Stereo Mind Guy, DM-Two, Graphite Copy, Stereo Trem, Surround, Wandering, and Worn Tape. Maximum delay time on the FM3 is 8 seconds, and the FM3 Delay block does not expose the diffusion-based Delay types found on larger units.",
    keyParameters: [
      {
        name: 'Type',
        description:
          'Picks the algorithm — each type swaps the underlying engine and exposes its own parameter set (e.g. Tape adds Motor Speed and Wow/Flutter).',
      },
      {
        name: 'Time / Tempo',
        description:
          'Time in ms, or rhythmic subdivision synced to the preset tempo (1/4, dotted 1/8, triplets…). Set Tempo to NONE for free-running delay.',
      },
      {
        name: 'Feedback / Master Feedback',
        description:
          'Number of repeats. Master Feedback can be pushed past 100% for self-oscillating runaway.',
      },
      {
        name: 'Mix / Level',
        description:
          'Wet/dry blend and the block output level.',
      },
      {
        name: 'Drive (in feedback loop)',
        description:
          'Adds harmonic distortion to the repeats — emulates the warmth of overdriven tape or analog circuitry.',
      },
      {
        name: 'Bit Reduction',
        description:
          'Reduces effective bit depth for vintage-digital character. Pair with high-frequency rolloff for classic 80s rack sound.',
      },
      {
        name: 'Compander',
        description:
          'Compresses before the delay line and expands after it for vintage BBD/DMM/DM-2 noise-control behavior.',
      },
      {
        name: 'Ducking',
        description:
          'Lowers the echo volume while you are playing and brings it back during gaps — keeps the dry signal clear.',
      },
      {
        name: 'Stack / Hold',
        description:
          'HOLD freezes the current buffer like a loop; STACK keeps the input open so you can layer over the running repeats.',
      },
    ],
    typicalPosition: 'After amp/cab (post FX loop), often before reverb.',
    typeList: [
      {
        id: '2290-w-modulation',
        name: '2290 W/ Modulation',
        family: 'Delay Engine',
        basedOn: 'TC Electronic 2290 Dynamic Digital Delay',
        description:
          'TC 2290-style dynamic digital delay with built-in modulation. The wiki notes the right channel phase is reversed, so summed-mono rigs can cancel the repeats.',
        settingsLayout: delayLayout({
          stereo: true,
          time: '500 ms',
          feedback: '45 %',
          bitReduction: '0',
          compander: 'Off',
          notes: {
            time: 'Classic 2290 territory is clean tempo-synced delay with modulation and ducking.',
            feedback: 'Use moderate feedback for articulate dotted-eighth and stereo lead delays.',
          },
          engineExtras: [
            {
              name: 'Phase Reverse',
              range: 'None / Left / Right / Both',
              default: 'Right',
              description: 'Wiki note: right-channel phase reverse can disappear when summed to mono.',
            },
          ],
        }),
      },
      {
        id: 'ambient-stereo',
        name: 'Ambient Stereo',
        family: 'Special',
        description:
          'Wide stereo echo wash for pads and clean ambient parts. On FM3 this is not the diffusion-based Axe-Fx/VP4 style; use stereo spread, modulation, and EQ to soften the repeats.',
        settingsLayout: delayLayout({
          stereo: true,
          time: '1200 ms',
          feedback: '60 %',
          mix: '55 %',
          drive: '0.50',
          compander: 'Off',
          notes: { mix: 'Higher mix is useful here because the type is meant as an ambient texture, not a front-and-center repeat.' },
        }),
      },
      {
        id: 'analog-mono',
        name: 'Analog Mono',
        family: 'Delay Engine',
        basedOn: 'Analog bucket-brigade delay behavior',
        description:
          'Mono analog-style delay with narrow bandwidth, darker repeats, and soft feedback-loop drive.',
        settingsLayout: delayLayout({
          time: '350 ms',
          feedback: '50 %',
          mix: '30 %',
          drive: '2.00',
          compander: 'Type-specific',
          notes: {
            drive: 'Adds the compression and grit associated with overdriven analog delay circuitry.',
            feedback: 'High feedback settings move toward musical self-oscillation.',
          },
        }),
      },
      {
        id: 'analog-stereo',
        name: 'Analog Stereo',
        family: 'Delay Engine',
        basedOn: 'Analog bucket-brigade delay behavior',
        description: 'Stereo analog-style delay: warm, bandwidth-limited repeats with independent left/right movement.',
        settingsLayout: delayLayout({
          stereo: true,
          time: '350 ms',
          feedback: '50 %',
          mix: '30 %',
          drive: '2.00',
          compander: 'Type-specific',
        }),
      },
      {
        id: 'deluxe-mind-guy',
        name: 'Deluxe Mind Guy',
        family: 'Delay Engine',
        basedOn: 'Electro-Harmonix Deluxe Memory Man',
        description:
          'Classic Deluxe Memory Man-style analog delay with chorus/vibrato modulation and softened BBD repeats.',
        settingsLayout: delayLayout({
          time: '400 ms',
          feedback: '45 %',
          mix: '35 %',
          drive: '2.50',
          compander: 'On',
          notes: {
            compander: 'The wiki notes the DMM-style type uses compansion by default, matching the real pedal family.',
          },
          engineExtras: [
            { name: 'Modulation Mode', range: 'Chorus / Vibrato', default: 'Chorus' },
            { name: 'Modulation Depth', range: '0.0–100.0 %', default: '35.0 %' },
          ],
        }),
      },
      {
        id: 'digital-mono',
        name: 'Digital Mono',
        family: 'Delay Engine',
        description: 'Single full-range pristine modern digital delay in mono.',
        settingsLayout: delayLayout({ time: '500 ms', feedback: '40 %', mix: '30 %', compander: 'Off' }),
      },
      {
        id: 'digital-stereo',
        name: 'Digital Stereo',
        family: 'Delay Engine',
        description: 'Full-range pristine modern digital delay with stereo input/output and independent L/R rows.',
        settingsLayout: delayLayout({ stereo: true, time: '500 ms', feedback: '40 %', mix: '30 %', compander: 'Off' }),
      },
      {
        id: 'dm-two-delay',
        name: 'Dm-Two Delay',
        family: 'Delay Engine',
        basedOn: 'BOSS DM-2',
        description:
          'Boss DM-2-style analog delay with the pre-emphasis/de-emphasis behavior called out on the Fractal wiki.',
        settingsLayout: delayLayout({
          time: '300 ms',
          feedback: '45 %',
          mix: '32 %',
          drive: '2.50',
          compander: 'On',
          notes: {
            compander: 'DM-2-style compansion is part of the darker, rounded BBD repeat envelope.',
          },
          engineExtras: [
            {
              name: 'Pre/De-Emphasis',
              range: 'Modeled',
              default: 'On',
              description: 'Wiki note: the DM-2 pre-emphasizes before the delay line and de-emphasizes after it.',
            },
          ],
        }),
      },
      {
        id: 'dual-delay',
        name: 'Dual Delay',
        family: 'Delay Engine',
        description:
          'Two delays in one block, each with its own time, feedback, pan, and cross-feedback options.',
        settingsLayout: delayLayout({
          stereo: true,
          time: '1/4',
          feedback: '35 %',
          compander: 'Off',
          notes: {
            time: 'Use one side at dotted eighth and the other at quarter notes for classic rhythmic dual-delay patterns.',
          },
        }),
      },
      {
        id: 'dual-head-tape',
        name: 'Dual Head Tape',
        family: 'Delay Engine',
        basedOn: 'Two-head tape echo deck',
        description:
          'Tape delay with two playback heads. Head spacing creates rhythmic repeats while Motor Speed controls pitch/time behavior.',
        settingsLayout: delayLayout({
          time: '400 ms',
          feedback: '55 %',
          drive: '3.00',
          showBitReduction: false,
          compander: 'Off',
          notes: {
            time: 'In the tape algorithm this represents the head distance at Motor Speed 100%.',
          },
          engineExtras: [
            { name: 'Motor Speed', range: '50–200 %', default: '100 %', description: 'Tape transport speed; changing it warps pitch and delay time.' },
            { name: 'Head 2 Ratio', range: '0.0–100.0 %', default: '50.0 %', description: 'Second playback head distance as a percentage of Head 1.' },
            { name: 'Wow Rate', range: '0.10–6.00 Hz', default: '0.50 Hz' },
            { name: 'Wow Depth', range: '0.0–100.0 %', default: '20.0 %' },
            { name: 'Flutter Rate', range: '6.00–20.00 Hz', default: '8.00 Hz' },
            { name: 'Flutter Depth', range: '0.0–100.0 %', default: '15.0 %' },
          ],
        }),
      },
      {
        id: 'ducking-delay',
        name: 'Ducking Delay',
        family: 'Special',
        description:
          'Stereo delay that lowers echo level while you play harder, then lets repeats bloom during gaps.',
        settingsLayout: delayLayout({
          stereo: true,
          time: '400 ms',
          feedback: '40 %',
          mix: '40 %',
          compander: 'Off',
          notes: { mix: 'Set Mix hotter than normal, then use the ducker to keep the dry part clear.' },
          engineExtras: [
            { name: 'Ducker Attack', range: '1–500 ms', default: '20 ms' },
            { name: 'Ducker Attenuation', range: '0–80 dB', default: '12 dB' },
          ],
        }),
      },
      {
        id: 'graphite-copy-delay',
        name: 'Graphite Copy Delay',
        family: 'Delay Engine',
        basedOn: 'MXR Carbon Copy',
        description:
          'Carbon Copy-style analog delay. The Blocks Guide explicitly identifies this type as based on the Carbon Copy delay.',
        settingsLayout: delayLayout({
          time: '400 ms',
          feedback: '45 %',
          mix: '32 %',
          drive: '2.50',
          compander: 'On',
          notes: {
            compander: 'The wiki notes DMM, DM-2, and Carbon Copy-style delays have companders enabled by default.',
          },
          engineExtras: [
            { name: 'Mod Switch', range: 'Off / On', default: 'On', description: 'Carbon Copy-style modulation in the delay path.' },
            { name: 'Mod Width', range: '0.0–100.0 %', default: '35.0 %' },
          ],
        }),
      },
      {
        id: 'lo-fi-tape',
        name: 'Lo-Fi Tape',
        family: 'Delay Engine',
        basedOn: 'Worn/low-fidelity tape echo',
        description:
          'Low-fidelity tape-style delay with heavy wobble, dark bandwidth, and degraded repeat texture.',
        settingsLayout: delayLayout({
          time: '600 ms',
          feedback: '60 %',
          drive: '4.00',
          showBitReduction: false,
          compander: 'Off',
          engineExtras: [
            { name: 'Motor Speed', range: '50–200 %', default: '100 %' },
            { name: 'Wow Depth', range: '0.0–100.0 %', default: '55.0 %' },
            { name: 'Flutter Depth', range: '0.0–100.0 %', default: '60.0 %' },
          ],
        }),
      },
      {
        id: 'mono-bbd',
        name: 'Mono BBD',
        family: 'Delay Engine',
        basedOn: 'Vintage bucket-brigade delay',
        description:
          'Mono bucket-brigade delay with vintage dark tone, clock-noise behavior, and compander-style dynamics.',
        settingsLayout: delayLayout({
          time: '350 ms',
          feedback: '55 %',
          drive: '4.00',
          compander: 'On',
          companderThreshold: '-60.0 dB',
        }),
      },
      {
        id: 'mono-tape',
        name: 'Mono Tape',
        family: 'Delay Engine',
        basedOn: 'Two-head tape echo deck',
        description:
          'Authentic mono tape echo algorithm with two playback heads, Motor Speed, wow, and flutter. Wiki notes it pitch-warps when time/speed changes.',
        settingsLayout: delayLayout({
          time: '400 ms',
          feedback: '55 %',
          drive: '3.00',
          showBitReduction: false,
          compander: 'Off',
          notes: {
            drive: 'Tape preamp and oxide-style saturation inside the feedback path.',
          },
          engineExtras: [
            { name: 'Motor Speed', range: '50–200 %', default: '100 %', description: 'Tape transport speed. Changes pitch as well as time.' },
            { name: 'Head 2 Ratio', range: '0.0–100.0 %', default: '50.0 %' },
            { name: 'Level 1 / Level 2', range: '0.0–100.0 %', default: '100.0 % / 70.0 %' },
            { name: 'Pan 1 / Pan 2', range: '-100.0 – +100.0', default: '-25.0 / +25.0' },
            { name: 'Wow Rate / Depth', range: 'Rate + Depth', default: '0.50 Hz / 20.0 %' },
            { name: 'Flutter Rate / Depth', range: 'Rate + Depth', default: '8.00 Hz / 15.0 %' },
          ],
        }),
      },
      {
        id: 'pan-delay',
        name: 'Pan Delay',
        family: 'Special',
        description: 'Delay whose wet output pans across the stereo field under LFO control.',
        settingsLayout: delayLayout({
          stereo: true,
          time: '500 ms',
          feedback: '40 %',
          mix: '35 %',
          compander: 'Off',
          engineExtras: [
            { name: 'Pan Rate', range: '0.05–10.00 Hz', default: '0.40 Hz' },
            { name: 'Pan Depth', range: '0.0–100.0 %', default: '100.0 %' },
            { name: 'Pan Phase', range: '0–360°', default: '180°' },
          ],
        }),
      },
      {
        id: 'ping-pong',
        name: 'Ping-Pong',
        family: 'Delay Engine',
        description: 'Repeats bounce left and right automatically, useful for obvious stereo rhythmic delays.',
        settingsLayout: delayLayout({
          stereo: true,
          time: '1/8',
          feedback: '40 %',
          mix: '35 %',
          compander: 'Off',
          notes: {
            feedback: 'Set cross-feedback higher than self-feedback for a clean left-right bounce.',
          },
        }),
      },
      {
        id: 'reverse-delay',
        name: 'Reverse Delay',
        family: 'Special',
        description:
          'Continuously samples input and plays back reversed snippets. The wiki recommends Feedback 0 for the cleanest reverse-only result.',
        settingsLayout: delayLayout({
          time: '1000 ms',
          feedback: '0 %',
          mix: '60 %',
          compander: 'Off',
          notes: {
            feedback: 'Use 0% for clean reverse; send the wet signal into another delay for multiple reverse-only repeats.',
          },
          engineExtras: [
            { name: 'Reverse Window', range: '50–2000 ms', default: '1000 ms' },
            { name: 'Crossfade', range: '0.0–100.0 %', default: '25.0 %', description: 'Smears reverse window boundaries without needing diffusion.' },
          ],
        }),
      },
      {
        id: 'stereo-bbd',
        name: 'Stereo BBD',
        family: 'Delay Engine',
        basedOn: 'Vintage bucket-brigade delay',
        description: 'Stereo bucket-brigade delay pair with darker analog repeats and compander-style dynamics.',
        settingsLayout: delayLayout({
          stereo: true,
          time: '350 ms',
          feedback: '55 %',
          drive: '4.00',
          compander: 'On',
          companderThreshold: '-60.0 dB',
        }),
      },
      {
        id: 'stereo-mind-guy',
        name: 'Stereo Mind Guy',
        family: 'Delay Engine',
        basedOn: 'Electro-Harmonix Deluxe Memory Man',
        description:
          'Stereo version of the Deluxe Memory Man-style delay, with BBD tone and chorus/vibrato-style modulation.',
        settingsLayout: delayLayout({
          stereo: true,
          time: '400 ms',
          feedback: '45 %',
          mix: '35 %',
          drive: '2.50',
          compander: 'On',
          engineExtras: [
            { name: 'Modulation Mode', range: 'Chorus / Vibrato', default: 'Chorus' },
            { name: 'Modulation Depth', range: '0.0–100.0 %', default: '35.0 %' },
          ],
        }),
      },
      {
        id: 'stereo-tape',
        name: 'Stereo Tape',
        family: 'Delay Engine',
        basedOn: 'Stereo tape echo',
        description: 'Stereo delay with tape-echo tone, saturation, and modulation-style movement.',
        settingsLayout: delayLayout({
          stereo: true,
          time: '400 ms',
          feedback: '55 %',
          drive: '3.00',
          showBitReduction: false,
          compander: 'Off',
          engineExtras: [
            { name: 'Motor Speed', range: '50–200 %', default: '100 %' },
            { name: 'Wow / Flutter', range: '0.0–100.0 %', default: '15.0 %' },
            { name: 'Time Offset', range: '0–100 ms', default: '20 ms', description: 'Stereo offset between the virtual tape paths.' },
          ],
        }),
      },
      {
        id: 'stereo-trem-delay',
        name: 'Stereo Trem Delay',
        family: 'Special',
        description:
          'Stereo delay with tremolo on the repeats. Community notes tie this behavior to 2290-style LFO modulation.',
        settingsLayout: delayLayout({
          stereo: true,
          time: '500 ms',
          feedback: '45 %',
          mix: '35 %',
          compander: 'Off',
          engineExtras: [
            { name: 'Tremolo Rate', range: '0.05–10.00 Hz', default: '0.80 Hz' },
            { name: 'Tremolo Depth', range: '0.0–100.0 %', default: '50.0 %' },
            { name: 'Tremolo Phase', range: '0–360°', default: '180°' },
          ],
        }),
      },
      {
        id: 'surround-delay',
        name: 'Surround Delay',
        family: 'Special',
        description:
          'Rotating echo field. The wiki release-note quote says Rotation 100% flips front/back each repeat and 50% rotates around the field in quarter-turns.',
        settingsLayout: delayLayout({
          stereo: true,
          time: '500 ms',
          feedback: '45 %',
          mix: '35 %',
          compander: 'Off',
          engineExtras: [
            {
              name: 'Rotation',
              range: '-100.0 – +100.0 %',
              default: '50.0 %',
              description: 'Positive rotates one direction; negative rotates opposite.',
            },
            { name: 'Front/Rear Balance', range: '-100.0 – +100.0', default: '0.0' },
          ],
        }),
      },
      {
        id: 'sweep-delay',
        name: 'Sweep Delay',
        family: 'Special',
        description:
          'Stereo delay with an LFO-driven bandpass filter at the output. The filter sweep turns repeats into a moving wah-like echo.',
        settingsLayout: delayLayout({
          stereo: true,
          time: '500 ms',
          feedback: '50 %',
          mix: '30 %',
          compander: 'Off',
          engineExtras: [
            { name: 'Start Frequency', range: '20 Hz – 20.00 kHz', default: '400 Hz' },
            { name: 'Stop Frequency', range: '20 Hz – 20.00 kHz', default: '4.00 kHz' },
            { name: 'Resonance', range: '0.10–10.00', default: '2.00' },
            { name: 'Sweep Type', range: 'Sine / Triangle / Square / Sawtooth', default: 'Sine' },
            { name: 'Sweep Rate', range: '0.05–8.00 Hz', default: '0.40 Hz' },
            { name: 'Sweep Phase', range: '0–360°', default: '90°' },
          ],
        }),
      },
      {
        id: 'vintage-digital',
        name: 'Vintage Digital',
        family: 'Delay Engine',
        basedOn: 'Early primitive digital delays',
        description:
          'Early digital-delay character with deliberately crude low-bit conversion artifacts, as described on the Fractal wiki.',
        settingsLayout: delayLayout({
          time: '375 ms',
          feedback: '40 %',
          bitReduction: '8',
          compander: 'Off',
          notes: {
            bitReduction: 'The wiki describes this type as modeling primitive low-bit converters; raise for stronger 8-bit-style artifacts.',
          },
        }),
      },
      {
        id: 'wandering-delays',
        name: 'Wandering Delays',
        family: 'Special',
        description: 'Stereo delay with continuously drifting delay times for unfixed, animated ambient repeats.',
        settingsLayout: delayLayout({
          stereo: true,
          time: '650 ms',
          feedback: '55 %',
          mix: '40 %',
          compander: 'Off',
          engineExtras: [
            { name: 'Wander Rate', range: '0.01–5.00 Hz', default: '0.15 Hz' },
            { name: 'Wander Depth', range: '0.0–100.0 %', default: '45.0 %' },
            { name: 'Wander Randomness', range: '0.0–100.0 %', default: '70.0 %' },
          ],
        }),
      },
      {
        id: 'worn-tape',
        name: 'Worn Tape',
        family: 'Delay Engine',
        basedOn: 'Worn-out tape echo',
        description:
          'Tape echo with reduced frequency response, pitch instability, and aged mechanical character.',
        settingsLayout: delayLayout({
          time: '450 ms',
          feedback: '60 %',
          drive: '4.00',
          showBitReduction: false,
          compander: 'Off',
          engineExtras: [
            { name: 'Motor Speed', range: '50–200 %', default: '100 %' },
            { name: 'Tape Age', range: '0.0–100.0 %', default: '70.0 %' },
            { name: 'Wow Depth', range: '0.0–100.0 %', default: '60.0 %' },
            { name: 'Flutter Depth', range: '0.0–100.0 %', default: '40.0 %' },
          ],
        }),
      },
    ],
  },
  {
    id: 'reverb',
    name: 'Reverb',
    abbreviation: 'REV',
    category: 'Reverb',
    fm3Instances: 1,
    // 79 types confirmed on FM3 firmware 12.00 (Type dropdown captured live, May 2026)
    types: 79,
    summary:
      "World-class digital reverb. 79 types on firmware 12.00 — Halls, Chambers, Rooms, Cathedrals, Studios, Plates, Springs, plus Fractal's 'weather' family (Cirrocumulus, Cumulonimbus, Nimbostratus, Stratocumulus) and zodiac series (Aquarius, Capricorn, Centaurus, Gemini, Pegasus, Pleiades, Sagittarius, Ursa Major).",
    description:
      "The Reverb block uses one of Fractal's most acclaimed algorithms. It produces convincing room/hall/cathedral models, vintage plates and tank springs, classic 80s rack effects, plus integrated pitch shifting for shimmer-style sounds. Reverb is multi-band — low and high frequencies decay at different rates, the way real spaces behave. One Reverb block is available on FM3.",
    keyParameters: [
      {
        name: 'Type',
        description:
          'Dozens of presets across families (Hall, Chamber, Room, Cathedral, Studio, Plate, Spring, Ambience).',
      },
      {
        name: 'Time',
        description:
          'Decay time (t60) — the time for the tail to fall below perception.',
      },
      {
        name: 'Size',
        description:
          'Length of time between virtual reflections. Higher values feel larger and grainier; lower values smooth out but can sound metallic.',
      },
      {
        name: 'Predelay (+ Tempo / Feedback / Mix)',
        description:
          'Time before the reverb starts. Advanced predelay controls let you add tempo-synced repeats before the tail without a separate Delay block.',
      },
      {
        name: 'Low/High Freq Time + Crossover',
        description:
          'Multi-band decay — shorten high-frequency decay to model an absorbent room, lengthen lows for a cathedral-like rumble.',
      },
      {
        name: 'Early Level / Late Level',
        description:
          'Balance of early reflections versus the diffuse tail.',
      },
      {
        name: 'EQ (Low/High Cut, dual peaking)',
        description:
          'Tone-shape the reverb only, without affecting the dry signal.',
      },
      {
        name: 'Mod Depth / Rate',
        description:
          'Chorus-like modulation inside the tail for lush, drifting reverbs. Set depth to zero for percussion.',
      },
      {
        name: 'Pitch Mix / Pitch Shift',
        description:
          'Built-in pitch shifter — set to +12 for classic shimmer, -12 for sub-octave drone reverbs.',
      },
      {
        name: 'Stack / Hold',
        description:
          'HOLD freezes the tail forever; STACK lets you keep adding new material into the freeze.',
      },
      {
        name: 'Quality',
        description:
          'Economy / Normal / High / Ultra-High — trade CPU for smoothness. Most guitar uses fit comfortably on Normal.',
      },
    ],
    typicalPosition: 'Last in the chain (after delay).',
    typeList: verifiedTypeCatalogs.reverb.map(createReverbType),
  },
  {
    id: 'chorus',
    name: 'Chorus',
    abbreviation: 'CHO',
    category: 'Modulation',
    fm3Instances: 2,
    // 27 common Axe-Fx III / FM3 / FM9 types listed on the current Fractal wiki.
    types: 27,
    summary:
      'Classic mono and stereo chorus and vibrato modulation — 27 current types from analog warmth to crystalline digital.',
    description:
      'The Chorus block produces the doubling/thickening effect of a small detuned ensemble, with 27 current Axe-Fx III / FM3 / FM9 types covering analog BBD pedals, 80s rack choruses, the Roland Dimension family, CE-1/CE-2/CH-1 models, MXR choruses, Small Clone, Rockman chorus, and vibrato. Two instances available on FM3.',
    keyParameters: [
      { name: 'Type', description: 'Algorithm selection — Digital Stereo, Analog Stereo, Multi-Voice, Dimension, Vibrato, etc.' },
      { name: 'Rate / Tempo', description: 'LFO speed — free-running in Hz or rhythmically synced.' },
      { name: 'Depth', description: 'How much the delay time modulates — sets the pitch-shift intensity.' },
      { name: 'Delay Time', description: 'Center delay around which the LFO modulates. Short = chorus, longer = subtle slap.' },
      { name: 'Feedback', description: 'Adds flanger-like resonance to the chorus.' },
      { name: 'LFO Phase / Type', description: 'Stereo phase offset and waveform — Sine vs. Triangle alters how the modulation feels.' },
      { name: 'Mix', description: 'Wet/dry blend.' },
    ],
    typicalPosition: 'Either before the amp (clean chorus) or after (post-amp modulation).',
    typeList: verifiedTypeCatalogs.chorus.map(createChorusType),
  },
  {
    id: 'flanger',
    name: 'Flanger',
    abbreviation: 'FLG',
    category: 'Modulation',
    fm3Instances: 2,
    types: 31,
    summary: '31 flanger types — subtle airline sweeps to extreme jet-engine resonance.',
    description:
      'The Flanger block models a short, modulated delay with feedback — producing the classic "comb filter" sweep. Includes through-zero types and stereo variants. Two instances on FM3.',
    keyParameters: [
      { name: 'Type', description: 'Selects model and algorithm flavor.' },
      { name: 'Rate / Depth', description: 'Speed and intensity of the LFO sweep.' },
      { name: 'Feedback', description: 'Resonance — high values give the metallic, ringing flange.' },
      { name: 'Manual / Center', description: 'Sets the center delay time — affects which harmonics get notched.' },
      { name: 'Through Zero', description: 'Enables tape-style through-zero flange where the LFO crosses 0ms.' },
      { name: 'Mix', description: 'Wet/dry blend.' },
    ],
    typicalPosition: 'Either pre-amp (subtle) or post-amp (dramatic).',
    typeList: verifiedTypeCatalogs.flanger.map(createFlangerType),
  },
  {
    id: 'phaser',
    name: 'Phaser',
    abbreviation: 'PHA',
    category: 'Modulation',
    fm3Instances: 2,
    types: 17,
    summary: 'Vintage and modern phasers plus Uni-Vibe — 17 current types including Block/Script/Stripe 90, Mutated Twin-Phaser, Bad Stone, and vibe models.',
    description:
      'The Phaser block models cascaded all-pass filters that produce moving notches in the frequency response. Types include classic 2/4/6/8-stage phasers, Univibe-style models, and modern variations. Two instances on FM3.',
    keyParameters: [
      { name: 'Type', description: 'Vintage or modern phaser model.' },
      { name: 'Stages', description: 'Number of filter stages — more stages = more dramatic notches.' },
      { name: 'Rate / Depth', description: 'LFO speed and how much the notches sweep.' },
      { name: 'Feedback', description: 'Emphasizes the notches for sharper, more resonant phasing.' },
      { name: 'Center / Range', description: 'Sets the frequency range over which the notches sweep.' },
      { name: 'Mix', description: 'Wet/dry blend.' },
    ],
    typicalPosition: 'Either pre or post amp. Pre = vintage, post = ambient.',
    typeList: verifiedTypeCatalogs.phaser.map(createPhaserType),
  },
  {
    id: 'rotary',
    name: 'Rotary',
    abbreviation: 'ROT',
    category: 'Modulation',
    fm3Instances: 2,
    types: 1,
    summary: 'Leslie-style rotary speaker simulation with multi-mic capture and authentic horn/drum behavior.',
    description:
      'The Rotary block models a 2-rotor (horn + drum) rotating speaker cabinet with separate speeds, acceleration/deceleration, and multi-microphone placement. Iconic with organ, but lush on guitar. Two instances on FM3.',
    keyParameters: [
      { name: 'Speed / Slow Rate / Fast Rate', description: 'Toggle Slow/Fast with a footswitch; each speed has its own rate.' },
      { name: 'Acceleration / Deceleration', description: 'How quickly the rotors ramp between speeds.' },
      { name: 'Horn / Drum Balance', description: 'Mix between the high-frequency horn and the low-frequency drum.' },
      { name: 'Mic Distance / Spacing', description: 'Stereo width of the captured rotor sound.' },
      { name: 'Drive', description: 'Built-in preamp overdrive emulating a cranked Leslie.' },
    ],
    typicalPosition: 'Post-amp.',
    typeList: [
      {
        id: 'rotary-speaker',
        name: 'Rotary Speaker',
        family: 'Modulation',
        basedOn: 'Leslie rotating speaker cabinet',
        description: 'Single Rotary block algorithm modeling a two-rotor speaker cabinet with separate horn and drum behavior.',
        settingsLayout: rotaryLayout({ slow: '0.80 Hz', fast: '5.50 Hz', drive: '3.50' }),
      },
    ],
  },
  {
    id: 'tremolo',
    name: 'Tremolo / Panner',
    abbreviation: 'TRM',
    category: 'Modulation',
    fm3Instances: 2,
    types: 7,
    summary: 'Seven current tremolo and panner types — bias, harmonic, neon/optical, VCA, and stereo panning.',
    description:
      'The Tremolo/Panner block produces amplitude modulation — from vintage amp bias and harmonic tremolo to optical pedal/amp throb, clean VCA tremolo, and stereo auto-panning. Two instances available on FM3.',
    keyParameters: [
      { name: 'Type', description: 'Bias Trem, Harmonic Trem, Neon Trem, Optical Trem 1/2, Panner, VCA Trem.' },
      { name: 'Rate / Tempo', description: 'Speed of the LFO, synced or free.' },
      { name: 'Depth', description: 'Volume swing amount.' },
      { name: 'LFO Shape', description: 'Sine, Triangle, Square, Sawtooth — defines the chop character.' },
      { name: 'Duty Cycle', description: 'Asymmetry of the LFO — for chopped/stutter effects.' },
    ],
    typicalPosition: 'Post-amp.',
    typeList: verifiedTypeCatalogs.tremolo.map(createTremoloType),
  },
  {
    id: 'pitch',
    name: 'Pitch',
    abbreviation: 'PIT',
    category: 'Pitch',
    fm3Instances: 1,
    types: 16,
    summary:
      'Detune, harmonizers (chromatic & intelligent diatonic), Whammy, octave divider, virtual capo, arpeggiator and crystal echoes.',
    description:
      "The Pitch block tracks your notes and shifts them with high-speed pitch detection. Types include Dual/Quad Detune (chorus-via-microshift), Dual/Quad Chromatic and Diatonic shifters, Classic & Advanced Whammy, Octave Divider, Crystal Echoes, Arpeggiator with a 16-step sequencer, Custom Shifter (programmable per-input-note mapping), and Virtual Capo (polyphonic key change). One instance on FM3.",
    keyParameters: [
      { name: 'Type', description: 'Algorithm — determines voices, max shift, and whether the shifter is chromatic, diatonic, or splice-based.' },
      { name: 'Shift (per voice)', description: '±24 semitones (chromatic) or ±25 scale degrees (diatonic).' },
      { name: 'Detune (per voice)', description: '±50 cents plus optional LFO for chorus-like motion.' },
      { name: 'Delay (per voice)', description: '0–2000 ms per voice, so harmonized lines can stagger or arpeggiate.' },
      { name: 'Feedback', description: 'For Pitch Delay types — repeats either keep shifting upward (Shift Inside) or stay locked (After Shift).' },
      { name: 'Key / Scale', description: 'For diatonic and Custom types — sets the musical context so the harmonizer stays in key.' },
      { name: 'Detector Source', description: 'Selects which signal feeds the pitch detector (e.g., a clean tap before drives).' },
      { name: 'Mix / Master Level / Master Pan', description: 'Standard wet/dry, plus per-voice spread.' },
    ],
    typicalPosition: 'Pre-amp for Whammy/Octave; post-amp for harmonies and crystals.',
    tips: [
      'For tracking accuracy, place the detector before any distortion using the Detector Source parameter.',
    ],
    typeList: verifiedTypeCatalogs.pitch.map(createPitchType),
  },
  {
    id: 'plex-delay',
    name: 'Plex Delay',
    abbreviation: 'PLX',
    category: 'Delay',
    fm3Instances: 1,
    types: 45,
    summary: 'Up to eight delay lines interacting in a feedback matrix with built-in pitch shifters — gorgeous ambient textures.',
    description:
      "The Plex Delay (Plex = 'multiplex') runs eight delay taps through a cross-coupled feedback matrix. Each tap can have its own delay time, level, pan, and pitch shift, creating clouds, shimmer pads, and harmonized echoes that no single-tap delay can produce.",
    keyParameters: [
      { name: 'Type', description: '45 presets ranging from short diffused ambience to multi-octave cascading shimmer.' },
      { name: 'Diffusion', description: 'How much each tap smears into the others — turns the delay matrix into a reverb cloud.' },
      { name: 'Pitch (per tap)', description: 'Integer semitones; common settings are +7 +12 or +7 +12 +19 for stacked harmonies.' },
      { name: 'Feedback Matrix', description: 'Determines which taps feed which — different routings give very different stereo/depth shapes.' },
      { name: 'Time / Tempo', description: 'Master tap time, free or synced.' },
    ],
    typicalPosition: 'Post-amp / post-reverb for ambient stacks.',
    typeList: verifiedTypeCatalogs['plex-delay'].map(createPlexDelayType),
  },
  {
    id: 'multitap-delay',
    name: 'Multitap Delay',
    abbreviation: 'MTD',
    category: 'Delay',
    fm3Instances: 1,
    types: 39,
    summary: 'Specialized delays — diffuser, quad-tap, band delays, rhythmic patterns and more.',
    description:
      "The Multitap Delay block is a toolbox of specialized multi-tap algorithms: diffusers for reverb-style smearing, quad-tap rhythmic patterns, band delays, Yamaha UD-Stomp/Allan Holdsworth-style presets, HALO/Space Echo-inspired delays, and more.",
    keyParameters: [
      { name: 'Type', description: '39 current presets — 1210, Allan Holdsworth, Aurora, PCM, Space Tape, Quad, Diffusor, and rhythmic types.' },
      { name: 'Tap Times / Levels / Pans', description: 'Per-tap control over timing, volume and stereo placement.' },
      { name: 'Feedback', description: 'How many cycles of the pattern repeat.' },
      { name: 'Filter (per tap or master)', description: 'Shape each tap independently for evolving echoes.' },
    ],
    typicalPosition: 'Post-amp.',
    typeList: verifiedTypeCatalogs['multitap-delay'].map(createMultitapDelayType),
  },
  {
    id: 'megatap',
    name: 'Megatap',
    abbreviation: 'MGT',
    category: 'Delay',
    fm3Instances: 1,
    types: 22,
    summary: '64-tap FM3 delay that creates intricate rhythmic, swell, and reverb-like textures from a single note.',
    description:
      'The Megatap block fires a dense series of taps from a single input event. Current FM3/FM9 firmware provides 64 taps, with 22 presets for cascading patterns, blooming swells, reverb-like tap clouds and tempo-locked rhythmic textures.',
    keyParameters: [
      { name: 'Number of Taps', description: 'Up to 64 on FM3/FM9; up to 128 on Axe-Fx III.' },
      { name: 'Time / Spacing', description: 'Master tap time and how the taps space themselves (linear, increasing, decreasing, sine).' },
      { name: 'Level Shape', description: 'Volume envelope over the taps — fade in, fade out, sustain, etc.' },
      { name: 'Pan Shape', description: 'Movement of taps across the stereo field as the pattern unfolds.' },
    ],
    typicalPosition: 'Post-amp.',
    typeList: verifiedTypeCatalogs.megatap.map(createMegatapType),
  },
  {
    id: 'ten-tap',
    name: 'Ten-Tap Delay',
    abbreviation: 'TTD',
    category: 'Delay',
    fm3Instances: 1,
    types: 2,
    summary: 'Set the time, pan, and spacing of one to ten separate echoes.',
    description:
      'The Ten-Tap Delay is a focused multi-tap with individual time, level, and pan per tap (up to ten). Great for compose-your-own delay patterns where you need precise rhythmic placement.',
    keyParameters: [
      { name: 'Tap Time (1–10)', description: 'Independent time for each tap.' },
      { name: 'Tap Level / Pan', description: 'Per-tap mix.' },
      { name: 'Feedback', description: 'Pattern repeats.' },
    ],
    typicalPosition: 'Post-amp.',
    typeList: verifiedTypeCatalogs['ten-tap'].map(createTenTapType),
  },
  {
    id: 'compressor',
    name: 'Compressor',
    abbreviation: 'CMP',
    category: 'Dynamics',
    fm3Instances: 2,
    // 19 types confirmed on FM3 firmware 12.00 (Type dropdown captured live, May 2026)
    types: 19,
    summary: '19 current firmware types: analog, sustainer, VCA, JFET, optical, tube, compander, and pedal-inspired compressors.',
    description:
      'The Compressor block evens out dynamics, adds sustain, or transparently glues your tone together. Firmware 28.01 overhauled the block around 19 current types, from Dyna Comp and Orange Squeezer-inspired pedals to 1176, LA-2A, Fairchild, SSL-style bus compression, and Fractal-specific dynamics tools.',
    keyParameters: [
      { name: 'Type', description: 'Selects the underlying topology and presents the matching control set.' },
      { name: 'Threshold', description: 'Level above which compression engages.' },
      { name: 'Ratio / Compression / Dynamics', description: 'Main amount control. Name and behavior depend on the selected algorithm.' },
      { name: 'Attack / Release', description: 'How fast the compressor clamps and lets go. Slower attack preserves transients.' },
      { name: 'Knee', description: 'Soft knee = smooth onset; hard knee = abrupt compression.' },
      { name: 'Tone / Drive / Emphasis', description: 'Extra character controls on pedal, JFET, optical, and tube-style algorithms.' },
      { name: 'Detector Source / Side-chain', description: 'Trigger compression from a different signal (e.g. a kick or a clean send).' },
      { name: 'Output Level / Mix', description: 'Make-up gain and parallel/wet blend for NY-style compression.' },
    ],
    typicalPosition: 'Early in the chain (post-input, pre-drive) for sustain; post-amp for studio gluing.',
    typeList: [
      {
        id: 'analog-compressor',
        name: 'Analog Compressor',
        family: 'Dynamics',
        basedOn: 'Classic 1970s/1980s analog compressor',
        description:
          'Current analog compressor model from the firmware overhaul. Use it for classic pedal/rack-style leveling with more color than Modern VCA.',
        settingsLayout: compLayout({
          amountDefault: 'Type-specific',
          extraBasic: [
            {
              name: 'Auto Makeup',
              range: 'Off / On',
              default: 'Type-specific',
              description: 'Automatically compensates level lost to gain reduction.',
            },
          ],
        }),
      },
      {
        id: 'analog-sustainer',
        name: 'Analog Sustainer',
        family: 'Dynamics',
        basedOn: 'Classic 1970s/1980s analog sustainer',
        description:
          'Sustain-focused analog compressor. Best early in the chain when you want long clean notes without a hard studio-compressor feel.',
        settingsLayout: compLayout({
          amountDescription: 'Sustain/compression amount for the analog sustainer model.',
          extraBasic: [{ name: 'Auto Makeup', range: 'Off / On', default: 'Type-specific' }],
        }),
      },
      {
        id: 'citrus-juicer',
        name: 'Citrus Juicer',
        family: 'Dynamics',
        basedOn: 'Dan Armstrong Orange Squeezer',
        description:
          'Orange Squeezer-inspired compressor with the squish and bright squeeze of the classic plug-in pedal.',
        notes:
          'Fractal wiki recommends Threshold -26.0 dB and Compression 8.0 as the starting point; raise threshold more negative if the model feels weaker than the original pedal.',
        settingsLayout: compLayout({
          threshold: '-26.0 dB',
          amountName: 'Compression',
          amountRange: '0.00-10.00',
          amountDefault: '8.0',
          amountDescription: 'Main Orange Squeezer-style squash amount; wiki recommended start is 8.0.',
          knee: 'Type-specific',
          extraBasic: [
            {
              name: 'Emphasis',
              range: '0.00-10.00',
              default: 'Type-specific',
              description: 'Detector/emphasis voicing unique to this model.',
            },
            {
              name: 'Drive',
              range: '0.00-10.00',
              default: 'Type-specific',
              description: 'Adds circuit drive before/inside the compression behavior.',
            },
            {
              name: 'Tone',
              range: '0.00-10.00',
              default: 'Type-specific',
              description: 'Balances the brighter Orange Squeezer-style top end.',
            },
          ],
        }),
      },
      {
        id: 'classic-vca-compressor',
        name: 'Classic VCA Compressor',
        family: 'Dynamics',
        description:
          'Feed-back VCA compressor. Choose this for smoother, more relaxed gain reduction than the feed-forward VCA type.',
        settingsLayout: compLayout({
          amountDescription: 'Ratio/amount for the feed-back VCA detector path.',
          extraBasic: [{ name: 'Auto Makeup', range: 'Off / On', default: 'Type-specific' }],
        }),
      },
      {
        id: 'compander',
        name: 'Compander',
        family: 'Dynamics',
        basedOn: 'NE570 compander topology',
        description:
          'Low-CPU compander loosely based on the NE570 family. Useful when you need lightweight dynamic control rather than a named pedal/studio color.',
        settingsLayout: compLayout({
          amountDescription: 'Compander ratio; wiki notes Ratio, Time, Transients, and Level as the key controls.',
          extraBasic: [
            { name: 'Time', range: 'Type-specific', default: 'Type-specific', description: 'Compander timing control.' },
            {
              name: 'Transients',
              range: 'Type-specific',
              default: 'Type-specific',
              description: 'Controls how strongly transients pass through the compander.',
            },
          ],
        }),
      },
      {
        id: 'dynami-comp-classic',
        name: 'Dynami-Comp Classic',
        family: 'Dynamics',
        basedOn: 'MXR Dyna Comp',
        description:
          'Classic Dyna Comp-style pedal compression: pronounced squeeze, sustain, and pick-leveling for clean country/funk lines.',
        settingsLayout: compLayout({
          amountName: 'Compression',
          amountRange: '0.00-10.00',
          amountDefault: 'Type-specific',
          amountDescription: 'Dyna Comp-style squash amount.',
          extraBasic: [
            { name: 'Tone', range: '0.00-10.00', default: 'Type-specific' },
            { name: 'Drive', range: '0.00-10.00', default: 'Type-specific' },
          ],
        }),
      },
      {
        id: 'dynami-comp-modern',
        name: 'Dynami-Comp Modern',
        family: 'Dynamics',
        basedOn: 'MXR Dyna Comp',
        description:
          'Modernized Dyna Comp variant with the same family behavior but a cleaner, more flexible voicing.',
        settingsLayout: compLayout({
          amountName: 'Compression',
          amountRange: '0.00-10.00',
          amountDefault: 'Type-specific',
          amountDescription: 'Modern Dyna Comp-style compression amount.',
          extraBasic: [
            { name: 'Tone', range: '0.00-10.00', default: 'Type-specific' },
            { name: 'Drive', range: '0.00-10.00', default: 'Type-specific' },
          ],
        }),
      },
      {
        id: 'dynami-comp-soft',
        name: 'Dynami-Comp Soft',
        family: 'Dynamics',
        basedOn: 'MXR Dyna Comp',
        description:
          'Lower-ratio, soft-knee Dyna Comp variant. Keeps the pedal sustain but with a gentler onset.',
        settingsLayout: compLayout({
          amountName: 'Compression',
          amountRange: '0.00-10.00',
          amountDefault: 'Type-specific',
          amountDescription: 'Softer Dyna Comp-style compression amount.',
          knee: 'Soft',
          extraBasic: [
            { name: 'Tone', range: '0.00-10.00', default: 'Type-specific' },
            { name: 'Drive', range: '0.00-10.00', default: 'Type-specific' },
          ],
        }),
      },
      {
        id: 'dynamics-processor',
        name: 'Dynamics Processor',
        family: 'Dynamics',
        description:
          'Legacy bipolar dynamics tool retained after the firmware overhaul. Negative Dynamics compress; positive values expand.',
        notes:
          'Verified against FM3-Edit on firmware 12.00 from preset 359: Threshold -24.9 dB, Dynamics -2.30, Attack 16.253 ms, Release 96.90 ms, Auto Att/Rel ON, Detector Type RMS, Look-Ahead 0.000 ms.',
        settingsLayout: compLayout({
          threshold: '-24.9 dB',
          amountName: 'Dynamics',
          amountRange: '-10.00 - +10.00',
          amountDefault: '-2.30',
          amountDescription: 'Negative values compress; positive values expand.',
          attack: '16.253 ms',
          release: '96.90 ms',
          knee: '6.0 dB',
          output: '0.00 dB',
          mix: '100.0 %',
          autoAttRelDefault: 'On',
          detectorTypeDefault: 'RMS',
        }),
      },
      {
        id: 'econo-dyno-comp',
        name: 'Econo-Dyno-Comp',
        family: 'Dynamics',
        basedOn: 'MXR Dyna Comp',
        description:
          'Low-CPU Dyna Comp-style pedal compressor. Use when you want the stompbox squeeze at lower processor cost.',
        settingsLayout: compLayout({
          amountName: 'Compression',
          amountRange: '0.00-10.00',
          amountDefault: 'Type-specific',
          amountDescription: 'Low-CPU Dyna Comp-style squash amount.',
          extraBasic: [{ name: 'Tone', range: '0.00-10.00', default: 'Type-specific' }],
        }),
      },
      {
        id: 'jfet-pedal-compressor',
        name: 'JFET Pedal Compressor',
        family: 'Dynamics',
        description:
          'Pedal compressor built around an op-amp/JFET feedback-style gain element. Snappy and guitar-forward rather than transparent.',
        settingsLayout: compLayout({
          amountDescription: 'Ratio/amount for the JFET pedal gain-control circuit.',
          extraBasic: [
            { name: 'Drive', range: '0.00-10.00', default: 'Type-specific' },
            { name: 'Tone', range: '0.00-10.00', default: 'Type-specific' },
          ],
        }),
      },
      {
        id: 'jfet-studio-compressor',
        name: 'JFET Studio Compressor',
        family: 'Dynamics',
        basedOn: 'Urei / Universal Audio 1176',
        description:
          '1176-style studio FET compression: fast, assertive, and capable of aggressive parallel sustain. Minimum ratio is 4:1.',
        settingsLayout: compLayout({
          amountRange: '4.00:1 - Infinite',
          amountDefault: '4.00:1',
          amountDescription: '1176-style Ratio; Fractal wiki notes the minimum ratio is 4:1.',
          attack: 'Type-specific',
          release: 'Type-specific',
          knee: 'Type-specific',
          notes: {
            attack: '1176-style FET attack can be extremely fast; tune by ear to preserve or clamp pick transient.',
            release: 'Faster release brings more audible pumping and attitude.',
          },
        }),
      },
      {
        id: 'modern-vca-compressor',
        name: 'Modern VCA Compressor',
        family: 'Dynamics',
        description:
          'Feed-forward VCA compressor with a more modern response and feature set. Use for precise control and cleaner clamp than Classic VCA.',
        settingsLayout: compLayout({
          amountDescription: 'Ratio/amount for the feed-forward VCA detector path.',
          extraBasic: [{ name: 'Auto Makeup', range: 'Off / On', default: 'Type-specific' }],
        }),
      },
      {
        id: 'optical-compressor',
        name: 'Optical Compressor',
        family: 'Dynamics',
        basedOn: 'Teletronix LA-2A',
        description:
          'LA-2A-style optical compressor. Smooth, program-dependent, and musical for bass, vocals, clean guitar, and post-amp glue. Minimum ratio is 4:1.',
        settingsLayout: compLayout({
          amountRange: '4.00:1 - Infinite',
          amountDefault: '4.00:1',
          amountDescription: 'Optical ratio; Fractal wiki notes the minimum ratio is 4:1.',
          attack: 'Type-specific',
          release: 'Type-specific',
          knee: 'Type-specific',
          extraBasic: [
            {
              name: 'Light Type',
              range: '3 optical light behaviors',
              default: 'Type-specific',
              description: 'Selects the virtual light/cell response.',
            },
            {
              name: 'Drive',
              range: '0.00-10.00',
              default: 'Type-specific',
              description: 'Adds optical/tube-style coloration.',
            },
            {
              name: 'Emphasis',
              range: '0.00-10.00',
              default: 'Type-specific',
              description: 'Sidechain emphasis amount.',
            },
            {
              name: 'Emphasis Frequency',
              range: 'Type-specific',
              default: 'Type-specific',
              description: 'Frequency target for the emphasis circuit.',
            },
          ],
        }),
      },
      {
        id: 'rockguy-compressor',
        name: 'Rockguy Compressor',
        family: 'Dynamics',
        basedOn: 'Rockman Guitar Compressor',
        description:
          'Rockman Guitar Compressor-inspired JFET model with dynamic release behavior. Best for clean Rockman-style sustain and leveled leads.',
        settingsLayout: compLayout({
          amountDescription: 'Compression amount for the Rockman-inspired JFET/dynamic-release behavior.',
          release: 'Dynamic',
          extraBasic: [
            { name: 'Drive', range: '0.00-10.00', default: 'Type-specific' },
            { name: 'Tone', range: '0.00-10.00', default: 'Type-specific' },
          ],
        }),
      },
      {
        id: 'vari-mu-tube-compressor',
        name: 'Vari-Mu Tube Compressor',
        family: 'Dynamics',
        basedOn: 'Fairchild 660 / classic Vari-Mu tube compressors',
        description:
          'Vari-Mu tube compressor for smooth, weighty gain reduction. The Compression control adjusts Ratio, Threshold, and Knee together.',
        settingsLayout: compLayout({
          amountName: 'Compression',
          amountRange: '0.00-10.00',
          amountDefault: 'Type-specific',
          amountDescription: 'Simultaneously adjusts Ratio, Threshold, and Knee like the Fractal wiki describes for this type.',
          knee: 'Controlled by Compression',
          extraBasic: [
            {
              name: 'Drive',
              range: '0.00-10.00',
              default: 'Type-specific',
              description: 'Adds tube-style harmonic color.',
            },
          ],
        }),
      },
      {
        id: 'vca-bus-compressor',
        name: 'VCA Bus Compressor',
        family: 'Dynamics',
        basedOn: 'Classic SSL-style VCA bus compressors',
        description:
          'SSL-style mix bus compressor for punch, glue, and post-amp polish. Use lower ratios and modest gain reduction for classic bus behavior.',
        settingsLayout: compLayout({
          amountDefault: 'Type-specific',
          amountDescription: 'Bus-compressor ratio/amount for mix-style glue.',
          showAutoAttRel: false,
          extraBasic: [
            { name: 'Makeup Gain', range: 'Type-specific', default: 'Type-specific' },
            {
              name: 'Sidechain Filter',
              range: 'Type-specific',
              default: 'Type-specific',
              description: 'Keeps low end from over-triggering bus compression when available.',
            },
          ],
        }),
      },
      {
        id: 'vca-fb-sustainer',
        name: 'VCA FB Sustainer',
        family: 'Dynamics',
        description:
          'Upward sustainer based on the Classic VCA compressor. Adds sustain by lifting softer material rather than only clamping peaks.',
        settingsLayout: compLayout({
          amountDescription: 'Sustain amount for the feed-back VCA upward-compression model.',
          extraBasic: [{ name: 'Auto Makeup', range: 'Off / On', default: 'Type-specific' }],
        }),
      },
      {
        id: 'vca-ff-sustainer',
        name: 'VCA FF Sustainer',
        family: 'Dynamics',
        description:
          'Upward sustainer based on the Modern VCA compressor. More precise and modern-feeling than VCA FB Sustainer.',
        settingsLayout: compLayout({
          amountDescription: 'Sustain amount for the feed-forward VCA upward-compression model.',
          extraBasic: [{ name: 'Auto Makeup', range: 'Off / On', default: 'Type-specific' }],
        }),
      },
    ],
  },
  {
    id: 'multiband-comp',
    name: 'Multiband Compressor',
    abbreviation: 'MBC',
    category: 'Dynamics',
    fm3Instances: 1,
    types: 1,
    summary: 'Three-band compressor for dynamic EQ and mastering-style glue.',
    description:
      'The Multiband Compressor splits the signal into three bands and compresses each independently — ideal for taming a boomy low end without squashing the highs, or for adding sparkle by lightly compressing the top band.',
    keyParameters: [
      { name: 'Crossover Frequencies', description: 'Sets low/mid and mid/high split points.' },
      { name: 'Per-Band Threshold / Ratio', description: 'Independent compression on each band.' },
      { name: 'Per-Band Attack / Release', description: 'Different time constants for low vs. high frequencies.' },
      { name: 'Per-Band Gain', description: 'Make-up gain per band — also lets you use the block as a dynamic EQ.' },
    ],
    typicalPosition: 'Last in chain.',
  },
  {
    id: 'gate-expander',
    name: 'Gate / Expander',
    abbreviation: 'GTE',
    category: 'Dynamics',
    fm3Instances: 2,
    types: 4,
    summary: 'Four dedicated Gate/Expander block types — classic/modern expanders and classic/modern gates.',
    description:
      'Beyond the noise gate built into every Input block, the dedicated Gate/Expander gives you a placeable gate anywhere in the chain. Current dedicated block types are Classic Expander, Modern Expander, Classic Gate, and Modern Gate.',
    keyParameters: [
      { name: 'Mode / Type', description: 'Selects Classic/Modern Expander or Classic/Modern Gate behavior.' },
      { name: 'Threshold', description: 'Quietness required for the gate to close.' },
      { name: 'Ratio', description: 'How much quieter the signal becomes when closed.' },
      { name: 'Attack / Release', description: 'Open/close times.' },
    ],
    typicalPosition: 'After high-gain drives or post-amp for "djent" tightness.',
    typeList: verifiedTypeCatalogs['gate-expander'].map(createGateType),
  },
  {
    id: 'graphic-eq',
    name: 'Graphic EQ',
    abbreviation: 'GEQ',
    category: 'EQ & Filter',
    fm3Instances: 2,
    types: 18,
    summary: '18 current modes — console/passive EQs, 5/7/8/10-band graphic EQs, pedal EQs, Mark EQ and JM-PRE.',
    description:
      'Multi-mode graphic EQ for quick corrective or creative EQ moves. Current wiki types include passive/console EQs, constant-Q and variable-Q 5/7/8/10-band layouts, Boss GE-7/GE-7B-style pedal EQs, MESA Mark-style EQ, and JM-PRE.',
    keyParameters: [
      { name: 'Mode', description: 'Selects the band layout — affects center frequencies and number of sliders.' },
      { name: 'Band Gain', description: '±12 dB cut/boost per band.' },
      { name: 'Output Level', description: 'Master make-up gain after the EQ.' },
    ],
    typicalPosition: 'Post-amp/cab for global tone shaping, or pre-amp for cocked-wah-style mid bumps.',
    typeList: verifiedTypeCatalogs['graphic-eq'].map(createGraphicEqType),
  },
  {
    id: 'parametric-eq',
    name: 'Parametric EQ',
    abbreviation: 'PEQ',
    category: 'EQ & Filter',
    fm3Instances: 2,
    types: 5,
    summary: 'Five-band fully parametric EQ with five current band types: Shelving, Peaking, Blocking and analog-style 2 variants.',
    description:
      'Surgical 5-band parametric EQ — each band has independent Frequency, Q, Gain, and a Type selector. Current wiki types are Shelving, Peaking, Blocking, Shelving 2, and Peaking 2.',
    keyParameters: [
      { name: 'Band Frequency (×5)', description: 'Center frequency of each band, 20 Hz–20 kHz.' },
      { name: 'Band Q (×5)', description: 'Bandwidth — high Q = narrow, surgical; low Q = broad, musical.' },
      { name: 'Band Gain (×5)', description: '±20 dB cut or boost.' },
      { name: 'Band Type (×5)', description: 'Peaking / Low Shelf / High Shelf / Low Cut / High Cut.' },
    ],
    typicalPosition: 'Anywhere — surgical EQ before or after amp depending on intent.',
    typeList: verifiedTypeCatalogs['parametric-eq'].map(createParametricEqType),
  },
  {
    id: 'filter',
    name: 'Filter',
    abbreviation: 'FLT',
    category: 'EQ & Filter',
    fm3Instances: 4,
    types: 18,
    summary: '18 current filter types with static EQ, comb/allpass, auto-wah, envelope filter and touch-wah behavior.',
    description:
      'The Filter block is more than a tone shape — it has an envelope follower and an LFO so it can sweep dynamically. Current types include Allpass, Auto-Wah, Band-Pass, Envelope Filter, Feedforward/Feedback Comb, shelf/peaking variants, Tilt EQ and Touch Wah.',
    keyParameters: [
      { name: 'Type', description: 'Allpass, Auto-Wah, Band-Pass, comb filters, high/low pass, shelves, Notch, Null, Peaking, Tilt EQ and Touch Wah.' },
      { name: 'Frequency', description: 'Cutoff/center frequency.' },
      { name: 'Q / Resonance', description: 'Filter sharpness — extreme Q can self-oscillate.' },
      { name: 'Envelope Depth + Attack/Release', description: 'Modulates frequency from your playing dynamics (auto-wah).' },
      { name: 'LFO Rate / Depth / Tempo', description: 'Synced or free modulation of the cutoff.' },
    ],
    typicalPosition: 'Pre or post amp.',
    typeList: verifiedTypeCatalogs.filter.map(createFilterType),
  },
  {
    id: 'crossover',
    name: 'Crossover',
    abbreviation: 'XOV',
    category: 'EQ & Filter',
    fm3Instances: 0,
    types: 1,
    summary:
      'FM9 and Axe-Fx III block for splitting the signal into low/high frequency ranges before separate processing paths.',
    description:
      'The Crossover block divides audio into frequency bands that can be routed, processed, or amplified separately. The wiki lists it as available on FM9 and Axe-Fx III, with no FM3 version; FM3 users can approximate some workflows with Filter blocks and parallel rows.',
    keyParameters: [
      { name: 'Frequency', description: 'Sets the crossover split point between low and high paths.' },
      { name: 'Slope', description: 'Controls how steeply the low/high bands separate.' },
      { name: 'Low Level / High Level', description: 'Balances the two frequency bands after the split.' },
      { name: 'Low Pan / High Pan', description: 'Places each band in the stereo field.' },
    ],
    typicalPosition:
      'Before parallel amp, drive, modulation, or output paths when bi-amping or split-band processing.',
    tips: [
      'For FM3 presets, use Filter blocks to build simpler low/high split workarounds.',
    ],
  },
  {
    id: 'formant',
    name: 'Formant',
    abbreviation: 'FRM',
    category: 'EQ & Filter',
    fm3Instances: 2,
    types: 1,
    summary: 'Vowel filter — turn picking dynamics into "wah-wah-wow" formant changes.',
    description:
      "The Formant block uses a bank of vocal-formant filters that shift between selectable vowel shapes. Modulate it with the envelope or an LFO for a dynamic talking-guitar effect.",
    keyParameters: [
      { name: 'Vowel 1 / Vowel 2', description: 'The two endpoint vowels the filter morphs between (A, E, I, O, U…).' },
      { name: 'Morph Position', description: 'Where between the two vowels the filter sits.' },
      { name: 'Envelope Depth', description: 'Drive the morph from your dynamics.' },
      { name: 'LFO Rate / Depth', description: 'Auto-morph the vowel over time.' },
    ],
    typicalPosition: 'Pre-amp.',
  },
  {
    id: 'wahwah',
    name: 'Wahwah',
    abbreviation: 'WAH',
    category: 'EQ & Filter',
    fm3Instances: 2,
    // 9 types confirmed on FM3 firmware 12.00 (Type dropdown captured live, May 2026)
    types: 9,
    summary: 'Nine Fractal wah types — Clyde, Color-Tone, Cry Babe, FAS Wah, Funk Wah, Mortal, Paragon, Vx845, and Vx846.',
    description:
      "Models the Fractal Wahwah type set with classic pedal-based wahs, Fractal's custom FAS Wah, and the Shaft-inspired Funk Wah. Designed to be driven by an expression pedal connected to one of the FM3's pedal jacks.",
    keyParameters: [
      { name: 'Type', description: 'Clyde, Color-Tone, Cry Babe, FAS Wah, Funk Wah, Mortal, Paragon, Vx845, Vx846.' },
      { name: 'Control', description: 'Pedal position — link this to an Expression Pedal modifier.' },
      { name: 'Min / Max Frequency', description: 'Range of the wah sweep.' },
      { name: 'Q', description: 'Resonance peak — higher Q makes the wah more vocal.' },
      { name: 'Tracking / Auto Engage', description: 'Auto-bypass when the pedal heel-rests.' },
    ],
    typicalPosition: 'First in the chain (post-input, pre-drive).',
    typeList: [
      {
        id: 'clyde',
        name: 'Clyde',
        family: 'Wah',
        basedOn: 'Original Vox Clyde McCoy wah pedal',
        description: 'Original Clyde McCoy-style wah voice: warm, mid-focused and vocal.',
        settingsLayout: wahLayout(),
      },
      {
        id: 'color-tone',
        name: 'Color-Tone',
        family: 'Wah',
        basedOn: 'Sola Colorsound wah pedal',
        description:
          'Colorsound-derived narrow-band wah voicing with built-in Drive and Fat controls. Works as a static cocked-wah filter or a sweeping pedal.',
        notes:
          'Verified against FM3-Edit on firmware 12.00 from preset 359 - Control 10.00 Linear, Freq Min 300 Hz, Freq Max 1500 Hz, Resonance Q 8.06, Inductor Bias 4.00, Low Cut 100 Hz, Drive 0.00, Fat 3.50, Q Tracking 8.50.',
        settingsLayout: wahLayout({ minFreq: '300 Hz', maxFreq: '1.50 kHz', q: '8.06', notes: { q: 'High Q (8+) gives Color-Tone its distinctive sharp peak; pull back below 4 for a softer voicing.' } }),
      },
      {
        id: 'cry-babe',
        name: 'Cry Babe',
        family: 'Wah',
        basedOn: 'Dunlop Cry Baby',
        description: 'The familiar Cry Baby family voice: direct, vocal and instantly recognizable.',
        settingsLayout: wahLayout(),
      },
      {
        id: 'fas-wah',
        name: 'FAS Wah',
        family: 'Wah',
        basedOn: 'Fractal Audio custom Bandpass wah',
        description: 'Fractal Audio custom wah model for a clean, flexible modern wah response.',
        settingsLayout: wahLayout(),
      },
      {
        id: 'funk-wah',
        name: 'Funk Wah',
        family: 'Wah',
        basedOn: 'Wah sound from the Shaft movie',
        description: 'A Shaft-style funk wah voice built for percussive rhythmic sweep and fixed-wah textures.',
        settingsLayout: wahLayout(),
      },
      {
        id: 'mortal',
        name: 'Mortal',
        family: 'Wah',
        basedOn: 'Morley wah/volume pedal',
        description: 'Morley-style wah/volume voice with a broader electro-optical character.',
        settingsLayout: wahLayout(),
      },
      {
        id: 'paragon',
        name: 'Paragon',
        family: 'Wah',
        basedOn: 'Tycobrahe Parapedal',
        description: 'Parapedal-inspired wah with a distinctive broad, sweepable filter character.',
        settingsLayout: wahLayout(),
      },
      {
        id: 'vx845',
        name: 'Vx845',
        family: 'Wah',
        basedOn: 'Vox V845 wah pedal',
        description: 'Vox V845-style workhorse wah with the essential VOX sweep.',
        settingsLayout: wahLayout(),
      },
      {
        id: 'vx846',
        name: 'Vx846',
        family: 'Wah',
        basedOn: 'Vox V846-HW hand-wired wah pedal',
        description: 'Hand-wired V846-style VOX wah voice associated with classic SRV-era wah tones.',
        settingsLayout: wahLayout(),
      },
    ],
  },
  {
    id: 'enhancer',
    name: 'Enhancer',
    abbreviation: 'ENH',
    category: 'EQ & Filter',
    fm3Instances: 2,
    types: 3,
    summary: 'Stereo width and spatial enhancement — classic and modern modes for "bigger" mixes.',
    description:
      'The Enhancer creates and controls stereo image width. Current types are Modern, Classic, and Stereoizer. Modern and Stereoizer are mono-compatible; Classic uses Haas-style micro-delay widening.',
    keyParameters: [
      { name: 'Mode', description: 'Classic / Modern / Stereoizer.' },
      { name: 'Width', description: 'Stereo spread amount.' },
      { name: 'Mix', description: 'Wet/dry blend.' },
    ],
    typicalPosition: 'Last in the chain.',
    typeList: verifiedTypeCatalogs.enhancer.map(createEnhancerType),
  },
  {
    id: 'resonator',
    name: 'Resonator',
    abbreviation: 'RES',
    category: 'EQ & Filter',
    fm3Instances: 2,
    types: 2,
    summary: 'Manual and Chordal resonator modes with parallel comb filters that create pitched overtones.',
    description:
      'The Resonator block runs four parallel comb filters that can be tuned manually or driven from the Chordal type. It creates chord-like ringing from a single note and works well for ambient pads, robotic textures, and unique drone effects.',
    keyParameters: [
      { name: 'Type', description: 'Selects Manual or Chordal resonator behavior.' },
      { name: 'Chord', description: 'In Chordal mode, selects the chord structure used by the resonators.' },
      { name: 'Pitch (×4)', description: 'Tuning of each resonator (in semitones).' },
      { name: 'Decay', description: 'How long each comb rings.' },
      { name: 'Gain (×4)', description: 'Level of each voice in the mix.' },
      { name: 'Mix', description: 'Wet/dry blend.' },
    ],
    typicalPosition: 'Pre-amp for melodic harmonization, post-amp for ambient drones.',
    typeList: [
      {
        id: 'manual',
        name: 'Manual',
        family: 'Filter',
        description:
          'Manual mode exposes the individual resonator voices directly, letting you set the pitch, level, and decay relationship for each comb-filter voice.',
      },
      {
        id: 'chordal',
        name: 'Chordal',
        family: 'Filter',
        description:
          'Chordal mode derives the resonator pitches from a selected chord structure, making it faster to create musical harmonized resonance from a single note.',
      },
    ],
  },
  {
    id: 'ring-mod',
    name: 'Ring Modulator',
    abbreviation: 'RNG',
    category: 'Synthesis',
    fm3Instances: 1,
    types: 3,
    summary: 'Three ring-modulation modes for bell-like, robotic, frequency-shifted and inharmonic textures.',
    description:
      'The Ring Modulator multiplies your signal with an internal oscillator, producing sum and difference frequencies. It offers Classic ring modulation plus SSB Upper and SSB Lower single-sideband modes for upward or downward frequency-shifted textures.',
    keyParameters: [
      { name: 'Type', description: 'Selects Classic, SSB Upper, or SSB Lower.' },
      { name: 'Frequency', description: 'Pitch of the modulator oscillator.' },
      { name: 'Frequency Multiplier', description: 'Scales the oscillator frequency for pitch-tracked and fixed-frequency effects.' },
      { name: 'Pitch Tracking', description: 'Makes the oscillator follow the pitch at the block input.' },
      { name: 'High Cut Frequency', description: 'Filters the bright sidebands for smoother ring-modulated tones.' },
      { name: 'Mix', description: 'Wet/dry — fully wet for the trademark Dalek effect.' },
    ],
    typicalPosition: 'Pre-amp.',
    typeList: [
      {
        id: 'classic',
        name: 'Classic',
        family: 'Synth',
        description:
          'Classic ring modulation keeps the sum and difference frequencies produced by multiplying the input with the internal oscillator.',
      },
      {
        id: 'ssb-upper',
        name: 'SSB Upper',
        family: 'Synth',
        description:
          'Single-sideband upper mode keeps the upper sideband, creating cleaner upward frequency-shifted textures.',
      },
      {
        id: 'ssb-lower',
        name: 'SSB Lower',
        family: 'Synth',
        description:
          'Single-sideband lower mode keeps the lower sideband, creating cleaner downward frequency-shifted textures.',
      },
    ],
  },
  {
    id: 'synth',
    name: 'Synth',
    abbreviation: 'SYN',
    category: 'Synthesis',
    fm3Instances: 1,
    types: 8,
    summary: '3-voice monophonic synthesizer with eight per-voice oscillator Type choices.',
    description:
      'The Synth block uses pitch detection to convert monophonic playing into synthesizer voices. Each of the three voices has its own Type selector with Sine, Triangle, Square, Sawtooth, Random, White Noise, Pink Noise, and Off choices, plus an envelope, filter, and tunable interval.',
    keyParameters: [
      { name: 'Type (per voice)', description: 'Sine, Triangle, Square, Sawtooth, Random, White Noise, Pink Noise, or Off.' },
      { name: 'Track (per voice)', description: 'Off, envelope-only, pitch-and-envelope, or quantized tracking behavior.' },
      { name: 'Frequency (per voice)', description: 'Manual oscillator frequency when pitch tracking is not driving the voice.' },
      { name: 'Pitch (per voice)', description: '±24 semitones — set intervals (e.g. unison, +7, +12) for synth chords.' },
      { name: 'Tune (per voice)', description: 'Fine detune in cents for thicker multi-voice sounds.' },
      { name: 'Duty Cycle', description: 'Adjusts triangle symmetry or square-wave pulse width.' },
      { name: 'Attack', description: 'Attack time of the input envelope follower.' },
      { name: 'Filter Frequency / Q', description: 'Built-in post-oscillator lowpass filter per voice.' },
    ],
    typicalPosition: 'Pre-amp on its own row, often blended with the clean guitar.',
    typeList: [
      {
        id: 'sine',
        name: 'Sine',
        family: 'Synth',
        description: 'Pure-tone sine voice — flute-like, lowest harmonic content.',
        settingsLayout: synthLayout({ waveform: 'Sine', pitch: '0 st', filter: '5.00 kHz' }),
      },
      {
        id: 'triangle',
        name: 'Triangle',
        family: 'Synth',
        description: 'Soft, slightly hollow timbre — between a sine and a square.',
        settingsLayout: synthLayout({ waveform: 'Triangle', pitch: '0 st', filter: '4.00 kHz' }),
      },
      {
        id: 'square',
        name: 'Square',
        family: 'Synth',
        description: 'Hollow, woody tone with odd harmonics and strong pulse-width character.',
        settingsLayout: synthLayout({ waveform: 'Square', pitch: '0 st', filter: '3.00 kHz' }),
      },
      {
        id: 'saw',
        name: 'Sawtooth',
        family: 'Synth',
        description: 'Bright, harmonically rich — the bedrock synth lead/bass voice.',
        settingsLayout: synthLayout({ waveform: 'Sawtooth', pitch: '0 st', filter: '2.50 kHz' }),
      },
      {
        id: 'random',
        name: 'Random',
        family: 'Synth',
        description: 'Random oscillator output for unstable synthetic textures, bursts, and special effects.',
        settingsLayout: synthLayout({ waveform: 'Random', pitch: '0 st', filter: '2.00 kHz' }),
      },
      {
        id: 'white-noise',
        name: 'White Noise',
        family: 'Synth',
        description: 'Full-spectrum noise for percussion, wind, risers, and filtered special effects.',
        settingsLayout: synthLayout({ waveform: 'White Noise', pitch: '0 st', filter: '3.00 kHz' }),
      },
      {
        id: 'pink-noise',
        name: 'Pink Noise',
        family: 'Synth',
        description: 'Darker noise with less high-frequency energy than white noise.',
        settingsLayout: synthLayout({ waveform: 'Pink Noise', pitch: '0 st', filter: '2.50 kHz' }),
      },
      {
        id: 'off',
        name: 'Off',
        family: 'Synth',
        description: 'Disables the selected synth voice, which conserves CPU when fewer oscillators are needed.',
        settingsLayout: synthLayout({ waveform: 'Off', pitch: '0 st', filter: '2.00 kHz' }),
      },
    ],
  },
  {
    id: 'vocoder',
    name: 'Vocoder',
    abbreviation: 'VOC',
    category: 'Synthesis',
    fm3Instances: 0,
    types: 1,
    summary:
      'Axe-Fx III-only vocoder for talkbox-style, robotic, and formant-filtered synth/guitar textures.',
    description:
      'The Vocoder block analyzes a speech or instrument source and applies the resulting formants to the carrier signal. It is built for classic talking-guitar, robot voice, and synthetic vocal textures. The family comparison pages list Vocoder as unavailable on FM3 and FM9.',
    keyParameters: [
      { name: 'Analysis Source', description: 'Chooses the input that provides the vocal/formant analysis signal.' },
      { name: 'Analysis Channel', description: 'Selects the left or right side of the analysis source.' },
      { name: 'Number of Bands', description: 'Sets the vocoder filter-bank resolution.' },
      { name: 'Min / Max Frequency', description: 'Limits the analyzed and synthesized frequency range.' },
      { name: 'Freeze', description: 'Locks the envelope followers for sustained robotic vowel textures.' },
    ],
    typicalPosition:
      'On a parallel row with the analysis input routed into the block and Synth or guitar as carrier.',
  },
  {
    id: 'real-time-analyzer',
    name: 'Real-Time Analyzer',
    abbreviation: 'RTA',
    category: 'Utility',
    fm3Instances: 0,
    types: 1,
    summary:
      'Axe-Fx III-only visual analyzer for reading the spectrum of the current signal in real time.',
    description:
      'The Real-Time Analyzer is an Axe-Fx III utility block used to inspect the frequency content of a signal while building or troubleshooting presets. It is useful for finding resonant peaks, checking EQ decisions, and comparing local/reference tones without leaving the grid.',
    keyParameters: [
      { name: 'Source', description: 'Chooses the signal being analyzed.' },
      { name: 'Display Range', description: 'Sets the visible frequency and level range.' },
      { name: 'Averaging / Hold', description: 'Stabilizes the display or captures peak behavior.' },
    ],
    typicalPosition: 'Placed at the point in the grid you want to measure.',
  },
  {
    id: 'ir-capture',
    name: 'IR Capture',
    abbreviation: 'IRC',
    category: 'Utility',
    fm3Instances: 0,
    types: 1,
    summary:
      'Axe-Fx III-only capture workflow for creating cabinet and device impulse responses from external gear.',
    description:
      'IR Capture creates impulse responses from speakers, cabinets, microphones, rooms, and other devices. The wiki describes Axe-Fx III-specific capture parameters such as conventional deconvolution/reverse filter processing, IR processing, IR type, and delay compensation. Captured IRs can then be loaded into Cab/IR Player workflows.',
    keyParameters: [
      { name: 'Capture Method', description: 'Conventional deconvolution or reverse filter processing.' },
      { name: 'IR Processing', description: 'Minimum-phase, auto-trim, or unprocessed output handling.' },
      { name: 'IR Type', description: 'Standard, UltraRes, or FullRes capture target where supported.' },
      { name: 'Delay Compensation', description: 'Compensates for time-of-flight and routing latency while capturing.' },
    ],
    typicalPosition:
      'A system/tool workflow rather than a normal tone-shaping grid position.',
  },
  {
    id: 'looper',
    name: 'Looper',
    abbreviation: 'LPR',
    category: 'Utility',
    fm3Instances: 1,
    types: 1,
    summary: '60-second mono / 30-second stereo looper with quantize, half-speed, reverse and undo.',
    description:
      "The Looper records, overdubs and plays back audio loops. One instance available on FM3 — controllable from the on-board footswitches, an FC controller, or external MIDI.",
    keyParameters: [
      { name: 'Mode', description: 'Mono (longer) or Stereo (shorter).' },
      { name: 'Record / Play / Overdub / Stop', description: 'Standard looper transport, footswitch-controlled.' },
      { name: 'Undo / Redo', description: 'Roll back the last overdub.' },
      { name: 'Reverse', description: 'Play the loop backwards.' },
      { name: 'Half Speed', description: 'Halves playback speed, doubles length, drops pitch an octave.' },
      { name: 'Quantize', description: 'Snap recording boundary to the tempo for tight loops.' },
      { name: 'Level (Play / Overdub)', description: 'Controls playback and overdub levels independently.' },
    ],
    typicalPosition: 'Anywhere — typically last in chain for "always recording" behavior.',
  },
  {
    id: 'volume-pan',
    name: 'Volume / Pan',
    abbreviation: 'VOL',
    category: 'Utility',
    fm3Instances: 2,
    types: 2,
    summary: 'Volume/Pan and Auto-Swell modes with channel I/O tools for routing, swells, and level control.',
    description:
      'A flexible utility block for volume, pan, mute, and automatic slow-gear-style swells. Use Volume/Pan as an expression-pedal or master-volume target, or switch to Auto-Swell for threshold-triggered note fade-ins.',
    keyParameters: [
      { name: 'Type', description: 'Selects Volume/Pan or Auto-Swell behavior.' },
      { name: 'Volume', description: 'Main volume control — assign a modifier to create a volume pedal.' },
      { name: 'Threshold / Attack', description: 'Auto-Swell trigger level and fade-in speed.' },
      { name: 'Balance', description: 'L/R balance independent of pan.' },
      { name: 'Taper', description: 'Linear, log, or S-taper response for pedal and swell feel.' },
      { name: 'Input Select', description: 'Stereo, left-only, or right-only input handling.' },
    ],
    typicalPosition: 'Anywhere — common at the start (for volume swells) or end (master volume target).',
    typeList: [
      {
        id: 'volume-pan',
        name: 'Volume/Pan',
        family: 'Other',
        description:
          'Simple volume and stereo placement mode for expression-pedal volume, static boosts/cuts, mutes, and balance correction.',
      },
      {
        id: 'auto-swell',
        name: 'Auto-Swell',
        family: 'Other',
        description:
          'Threshold-triggered automatic volume fade-in based on the slow-gear effect, useful for violin-like swells without riding a pedal.',
      },
    ],
  },
  {
    id: 'mixer',
    name: 'Mixer',
    abbreviation: 'MIX',
    category: 'Utility',
    fm3Instances: 4,
    types: 1,
    summary: 'Mix up to six stereo signal sources with per-input level and pan.',
    description:
      'The Mixer block sums multiple grid rows into a single output. Use it to merge parallel processing chains (e.g. wet-only and dry signal paths), or to blend a clean signal with a synth voice.',
    keyParameters: [
      { name: 'Input Level (×6)', description: 'Volume per input.' },
      { name: 'Input Pan (×6)', description: 'Stereo placement per input.' },
      { name: 'Output Level', description: 'Master output level.' },
    ],
    typicalPosition: 'Merging parallel chains back together.',
  },
  {
    id: 'send-return',
    name: 'Send / Return',
    abbreviation: 'SND / RTN',
    category: 'Utility',
    fm3Instances: 2,
    types: 1,
    summary: 'Internal feedback loop — send any signal anywhere on the grid for creative feedback paths.',
    description:
      "The Send block transmits a signal to its paired Return block. Together they let you build feedback loops between non-adjacent parts of the grid — e.g. send a reverb's output back into the drive for runaway shimmer. FM3 supports two Send + two Return blocks.",
    keyParameters: [
      { name: 'Send Level', description: 'Amount of signal sent.' },
      { name: 'Return Level', description: 'Amount received.' },
      { name: 'Feedback Routing', description: 'Cross-connect on the grid to build the loop topology.' },
    ],
    typicalPosition: 'Wherever you need a non-linear signal path.',
  },
  {
    id: 'multiplexer',
    name: 'Multiplexer',
    abbreviation: 'MUX',
    category: 'Utility',
    fm3Instances: 2,
    types: 1,
    summary: 'Input selector — routes one of four channel inputs through to its output. Great for A/B/C/D routing.',
    description:
      "The Multiplexer selects from one of four inputs and passes it to a single output. Combined with scenes or a footswitch, it gives you A/B/C/D-style channel switching from a single grid position. On FM3 the Mux has 4 channels.",
    keyParameters: [
      { name: 'Channel A/B/C/D', description: 'Active input — scene-switchable.' },
    ],
    typicalPosition: 'Wherever a routing branch is needed.',
  },
  {
    id: 'scene-midi',
    name: 'Scene MIDI',
    abbreviation: 'MIDI',
    category: 'Utility',
    fm3Instances: 1,
    types: 1,
    summary: 'Transmits MIDI messages whenever a scene loads — control external gear from the FM3.',
    description:
      "The Scene MIDI block fires up to eight programmable MIDI messages each time a scene is recalled. Use it to switch IEM presets, change DAW scenes, set lighting cues, or recall settings on outboard hardware.",
    keyParameters: [
      { name: 'Message Slots ×8', description: 'Each slot can be a PC, CC, Note, or SysEx message on a chosen MIDI channel.' },
      { name: 'Per-scene values', description: 'Each scene has its own values — switching the scene fires the new values.' },
    ],
    typicalPosition: 'Placed once anywhere on the grid (does not process audio).',
  },
]

const blockAvailabilityOverrides: Record<string, BlockProductAvailability> = {
  amp: {
    fm3: 1,
    fm9: 2,
    axeFxIII: 2,
    note: "FM3 supports one Amp block and does not expose Bias Tremolo or Input Dynamics in the Amp block.",
  },
  cab: {
    fm3: 1,
    fm9: 2,
    axeFxIII: 2,
    note: 'FM3 Cab supports two IRs; FM9 supports two Cab blocks with two IRs; Axe-Fx III supports two Cab blocks with four IRs and FullRes IR workflows.',
  },
  'ir-player': {
    fm3: null,
    fm9: null,
    axeFxIII: 2,
    note: 'IR Player is listed as Axe-Fx III only in the covered FM3/FM9/Axe-Fx III family.',
  },
  'tone-match': {
    fm3: null,
    fm9: null,
    axeFxIII: 1,
    note: 'Tone Match is Axe-Fx III only; FM3 and FM9 can use exported match data as IRs.',
  },
  drive: { fm3: 2, fm9: 3, axeFxIII: 4 },
  'dynamic-distortion': {
    fm3: null,
    fm9: null,
    axeFxIII: 2,
    note: 'Dynamic Distortion was added for Axe-Fx III and is not available on FM3 or FM9.',
  },
  delay: {
    fm3: 2,
    fm9: 2,
    axeFxIII: 4,
    note: 'FM3 Delay tops out at 8 seconds and does not expose diffusion-based Delay types; FM9 and Axe-Fx III reach 16 seconds.',
  },
  reverb: {
    fm3: 1,
    fm9: 2,
    axeFxIII: 2,
    note: 'FM3 Reverb defaults to a lower quality mode than the larger units.',
  },
  chorus: { fm3: 2, fm9: 2, axeFxIII: 2 },
  flanger: { fm3: 2, fm9: 2, axeFxIII: 2 },
  phaser: { fm3: 2, fm9: 2, axeFxIII: 2 },
  rotary: { fm3: 2, fm9: 2, axeFxIII: 2 },
  tremolo: { fm3: 2, fm9: 2, axeFxIII: 2 },
  pitch: { fm3: 1, fm9: 1, axeFxIII: 2 },
  'plex-delay': { fm3: 1, fm9: 1, axeFxIII: 2 },
  'multitap-delay': { fm3: 2, fm9: 2, axeFxIII: 2 },
  megatap: { fm3: 1, fm9: 2, axeFxIII: 2 },
  'ten-tap': { fm3: 1, fm9: 2, axeFxIII: 2 },
  compressor: { fm3: 2, fm9: 2, axeFxIII: 4 },
  'multiband-comp': { fm3: 1, fm9: 2, axeFxIII: 2 },
  'gate-expander': { fm3: 2, fm9: 4, axeFxIII: 4 },
  'graphic-eq': { fm3: 2, fm9: 4, axeFxIII: 4 },
  'parametric-eq': { fm3: 2, fm9: 4, axeFxIII: 4 },
  filter: { fm3: 4, fm9: 4, axeFxIII: 4 },
  crossover: {
    fm3: null,
    fm9: 1,
    axeFxIII: 2,
    note: 'There is no Crossover block on FM3; Filter blocks can cover simpler split-band workarounds.',
  },
  formant: { fm3: 2, fm9: 2, axeFxIII: 2 },
  wahwah: { fm3: 2, fm9: 2, axeFxIII: 2 },
  enhancer: { fm3: 2, fm9: 2, axeFxIII: 2 },
  resonator: { fm3: 2, fm9: 2, axeFxIII: 2 },
  'ring-mod': { fm3: 1, fm9: 1, axeFxIII: 1 },
  synth: { fm3: 1, fm9: 1, axeFxIII: 2 },
  vocoder: {
    fm3: null,
    fm9: null,
    axeFxIII: 1,
    note: 'The current family comparison lists Vocoder as unavailable on FM3 and FM9.',
  },
  'real-time-analyzer': {
    fm3: null,
    fm9: null,
    axeFxIII: 1,
    note: 'Real-Time Analyzer is listed as an Axe-Fx III-only block in the family comparison.',
  },
  'ir-capture': {
    fm3: null,
    fm9: null,
    axeFxIII: 1,
    note: 'IR Capture is an Axe-Fx III workflow; captured IRs can be moved into Cab/IR Player workflows.',
  },
  looper: {
    fm3: 1,
    fm9: 1,
    axeFxIII: 1,
    note: 'Axe-Fx III provides more looping time than FM3.',
  },
  'volume-pan': { fm3: 2, fm9: 4, axeFxIII: 4 },
  mixer: { fm3: 4, fm9: 4, axeFxIII: 4 },
  'send-return': { fm3: 2, fm9: 2, axeFxIII: 2 },
  multiplexer: {
    fm3: 2,
    fm9: 2,
    axeFxIII: 2,
    note: 'Multiplexer channel count differs on FM3 because of the smaller grid.',
  },
  'scene-midi': { fm3: 1, fm9: 1, axeFxIII: 1 },
}

export function getBlockAvailability(block: Block): BlockProductAvailability {
  return blockAvailabilityOverrides[block.id] ?? {
    fm3: block.fm3Instances,
    fm9: block.fm3Instances,
    axeFxIII: block.fm3Instances,
  }
}

export function isProductAvailable(value: number | null): value is number {
  return typeof value === 'number' && value > 0
}

export function formatProductCount(value: number | null): string {
  return isProductAvailable(value) ? `${value}x` : 'n/a'
}

export function formatBlockTypeCount(block: Pick<Block, 'types'>): string {
  if (typeof block.types === 'number') {
    return `${block.types} type${block.types === 1 ? '' : 's'}`
  }

  return `${block.types} types`
}

export function getAvailableProducts(block: Block): FractalProduct[] {
  const availability = getBlockAvailability(block)
  return productOrder.filter((product) => isProductAvailable(availability[product]))
}

export function isBlockLimitedToSpecificProducts(block: Block): boolean {
  return getAvailableProducts(block).length < productOrder.length
}

export function hasProductInstanceDifferences(block: Block): boolean {
  const availability = getBlockAvailability(block)
  const counts = productOrder
    .map((product) => availability[product])
    .filter(isProductAvailable)

  return new Set(counts).size > 1
}

export function getBlockAvailabilitySummary(block: Block): string {
  const availability = getBlockAvailability(block)
  const availableProducts = getAvailableProducts(block)

  if (availableProducts.length === 0) {
    return 'Not available on FM3, FM9, or Axe-Fx III.'
  }

  if (availableProducts.length < productOrder.length) {
    const counts = availableProducts
      .map((product) => `${productLabels[product]} ${formatProductCount(availability[product])}`)
      .join(' · ')
    return `Only on ${joinProductLabels(availableProducts)} · ${counts}`
  }

  if (hasProductInstanceDifferences(block)) {
    return productOrder
      .map((product) => `${productLabels[product]} ${formatProductCount(availability[product])}`)
      .join(' · ')
  }

  return `${joinProductLabels(productOrder)} · ${formatProductCount(availability.fm3)}`
}

function joinProductLabels(products: FractalProduct[]): string {
  const labels = products.map((product) => productLabels[product])
  if (labels.length <= 1) return labels[0] ?? ''
  if (labels.length === 2) return `${labels[0]} and ${labels[1]}`
  return `${labels.slice(0, -1).join(', ')} and ${labels[labels.length - 1]}`
}

export const blockCategories: BlockCategory[] = [
  'Amp & Cab',
  'Drive',
  'Delay',
  'Reverb',
  'Modulation',
  'Pitch',
  'Dynamics',
  'EQ & Filter',
  'Utility',
  'Synthesis',
]

export function getBlock(id: string): Block | undefined {
  return blocks.find((b) => b.id === id)
}

export function blocksByCategory(category: BlockCategory): Block[] {
  return blocks.filter((b) => b.category === category)
}

export function getBlockType(
  blockId: string,
  typeId: string,
): { block: Block; type: BlockType } | undefined {
  const block = getBlock(blockId)
  if (!block || !block.typeList) return undefined
  const type = block.typeList.find((t) => t.id === typeId)
  if (!type) return undefined
  return { block, type }
}
