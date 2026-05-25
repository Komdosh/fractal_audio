import { ampModels } from './ampModels'

export interface EffectVisual {
  imageAlt: string
  imageUrl: string
  modelName: string
  sourceName: string
  sourceUrl: string
}

const ampModelsWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Amp_models'
const driveWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Drive_block'
const delayWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Delay_block'
const reverbWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Reverb_block'
const chorusWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Chorus_block'
const flangerWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Flanger_block'
const phaserWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Phaser_block'
const tremoloWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Tremolo/Panner_block'
const rotaryWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Rotary_block'
const pitchWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Pitch_block'
const compressorWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Compressor_block'
const gateWikiUrl =
  'https://wiki.fractalaudio.com/wiki/index.php?title=Gate%2FExpander_block_and_input_gate'
const wahWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Wah_block'
const filterWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Filter_block'
const graphicEqWikiUrl =
  'https://wiki.fractalaudio.com/wiki/index.php?title=EQ-ing#Graphic_EQ_block_.28GEQ.29'
const parametricEqWikiUrl =
  'https://wiki.fractalaudio.com/wiki/index.php?title=EQ-ing#Parametric_EQ_block_.28PEQ.29'
const enhancerWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Enhancer_block'
const plexDelayWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Plex_Delay_block'
const multitapDelayWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Multitap_Delay_block'
const megatapWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Megatap_Delay_block'
const tenTapWikiUrl = 'https://wiki.fractalaudio.com/wiki/index.php?title=Ten-Tap_Delay_block'

// Non-amp effects only get images when the type maps to a specific real
// device. Algorithm presets, Fractal custom models, editor screenshots, and
// generic topology stand-ins intentionally stay out of this allowlist.
const realWorldEffectVisualKeys = new Set([
  'chorus:80-s-style',
  'chorus:analog-mono',
  'chorus:analog-stereo',
  'chorus:dimension-1',
  'chorus:dimension-2',
  'chorus:dimension-3',
  'chorus:japan-ce-1-chorus',
  'chorus:japan-ce-1-vibrato',
  'chorus:japan-ce-2',
  'chorus:japan-ce-2-bass',
  'chorus:japan-ch-1',
  'chorus:mx234',
  'chorus:mx234-stereo',
  'chorus:rockguy',
  'chorus:small-copy',
  'chorus:stereo-tri-chorus',
  'compressor:citrus-juicer',
  'compressor:dynami-comp-classic',
  'compressor:dynami-comp-modern',
  'compressor:dynami-comp-soft',
  'compressor:econo-dyno-comp',
  'compressor:jfet-studio-compressor',
  'compressor:optical-compressor',
  'compressor:rockguy-compressor',
  'compressor:vari-mu-tube-compressor',
  'compressor:vca-bus-compressor',
  'delay:2290-w-modulation',
  'delay:deluxe-mind-guy',
  'delay:dm-two-delay',
  'delay:graphite-copy-delay',
  'delay:stereo-mind-guy',
  'drive:77-custom-od',
  'drive:angry-chuck',
  'drive:bb-pre',
  'drive:bb-pre-at',
  'drive:bender-fuzz',
  'drive:blackglass-7k',
  'drive:blues-od',
  'drive:bosom-boost',
  'drive:box-o-crunch',
  'drive:colortone-booster',
  'drive:colortone-od',
  'drive:compulsion-distortion-hp',
  'drive:compulsion-distortion-lp',
  'drive:ds1-distortion',
  'drive:ds1-distortion-mod',
  'drive:esoteric-acb',
  'drive:esoteric-bass-rcb',
  'drive:esoteric-rcb',
  'drive:eternal-love',
  'drive:face-fuzz',
  'drive:fat-rat',
  'drive:fet-preamp',
  'drive:full-od',
  'drive:gauss-drive',
  'drive:griddle-cake',
  'drive:guardian-photon-speed',
  'drive:heartpedal-11',
  'drive:hoodoo-drive',
  'drive:horizon-precision-drive',
  'drive:integral-pre',
  'drive:jam-ray',
  'drive:klone-chiron',
  'drive:m-zone-distortion',
  'drive:master-fuzz',
  'drive:maxoff-808',
  'drive:mcmlxxxi-drv',
  'drive:micro-boost',
  'drive:mosfet-distortion',
  'drive:noamp-bass-di',
  'drive:noamp-bass-pre',
  'drive:nobellium-ovd-1',
  'drive:octave-distortion',
  'drive:od-250',
  'drive:od-one-overdrive',
  'drive:paradigm-shifter',
  'drive:pi-fuzz',
  'drive:pi-fuzz-bass',
  'drive:pi-fuzz-ram-s-head',
  'drive:pi-fuzz-russian',
  'drive:pi-fuzz-triangle',
  'drive:plus-distortion',
  'drive:rat-distortion',
  'drive:royal-bass-di',
  'drive:sdd-preamp',
  'drive:shred-distortion',
  'drive:sonic-drive',
  'drive:suhr-riot-ge-r',
  'drive:suhr-riot-led-l',
  'drive:suhr-riot-led-si-m',
  'drive:sunrise-splendor',
  'drive:sunrise-splendor-hi-cut',
  'drive:super-fuzz',
  'drive:super-od',
  'drive:swedish-metal',
  'drive:t808-mod',
  'drive:t808-od',
  'drive:timothy-down',
  'drive:timothy-mid',
  'drive:timothy-up',
  'drive:tone-of-kings',
  'drive:ts9dx',
  'drive:ts9dx-hot',
  'drive:tube-drive-3-knob',
  'drive:tube-drive-4-knob',
  'drive:tube-drive-5-knob',
  'drive:valve-screamer-vs9',
  'drive:zen-master',
  'flanger:bbf-2',
  'flanger:d-ad-185',
  'flanger:deluxe-mystery',
  'flanger:electric-mystery',
  'flanger:mxf-117',
  'graphic-eq:7-band-pedal',
  'graphic-eq:7-band-bass-pedal',
  'phaser:block-90',
  'phaser:classic-vibe',
  'phaser:mutated-twin-phaser',
  'phaser:naughty-rock',
  'phaser:script-45',
  'phaser:script-90',
  'phaser:stripe-90',
  'pitch:classic-whammy',
  'reverb:london-plate',
  'reverb:north-church',
  'reverb:south-church',
  'reverb:tube-spring',
  'rotary:rotary-speaker',
  'wahwah:color-tone',
  'wahwah:cry-babe',
  'wahwah:clyde',
  'wahwah:mortal',
  'wahwah:paragon',
  'wahwah:vx845',
  'wahwah:vx846',
])

const ampEffectVisuals: Record<string, EffectVisual> = Object.fromEntries(
  ampModels.map((model) => [
    `amp:${model.id}`,
    ampVisual(
      model.basedOn ?? model.name,
      `${model.basedOn ?? model.name} amplifier`,
      model.imageUrl,
      model.imageSourceName,
      model.imageSourceUrl,
    ),
  ]),
)

const effectVisuals: Record<string, EffectVisual> = {
  ...ampEffectVisuals,
  'amp:59-bassguy-bright': ampVisual(
    '1959 Fender Tweed Bassman',
    '1959 Fender Tweed Bassman amplifier',
    'https://wiki.fractalaudio.com/wiki/images/6/68/Bassman.jpg',
  ),
  'amp:band-commander': ampVisual(
    '1968 Fender Bandmaster',
    'Fender Bandmaster amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/7/7c/Bandmaster.jpg/300px-Bandmaster.jpg',
  ),
  'amp:deluxe-verb-normal': ampVisual(
    '1965 Fender Deluxe Reverb',
    'Fender Deluxe Reverb amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/f/f7/Deluxereverb.jpg/300px-Deluxereverb.jpg',
  ),
  'amp:double-verb-normal': ampVisual(
    '1966 Fender Twin Reverb',
    'Fender Twin Reverb amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/7/78/Twin.jpg/300px-Twin.jpg',
  ),
  'amp:brit-jm45': ampVisual(
    'Marshall JTM 45',
    'Marshall JTM 45 amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/7/74/JTM.png/300px-JTM.png',
  ),
  'amp:1959slp-jumped': ampVisual(
    'Marshall Super Lead Plexi 1959 SLP',
    'Marshall Super Lead Plexi 1959 SLP amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/d/d5/SLP.png/300px-SLP.png',
  ),
  'amp:brit-800-2204-high': ampVisual(
    'Marshall JCM 800 2204',
    'Marshall JCM 800 2204 amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/9/93/2203.png/325px-2203.png',
  ),
  'amp:ac-20-12ax7-bass': ampVisual(
    'Morgan AC20 Deluxe',
    'Morgan AC20 Deluxe amplifier',
    'https://wiki.fractalaudio.com/wiki/images/6/6f/Morgan.jpg',
  ),
  'amp:class-a-30w-tb': ampVisual(
    'Vox AC30',
    'Vox AC30 amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/e/ee/Ac30.jpg/300px-Ac30.jpg',
  ),
  'amp:dirty-shirley-1': ampVisual(
    'Friedman Dirty Shirley',
    'Friedman Dirty Shirley amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/5/53/Dirtyshirley.jpg/325px-Dirtyshirley.jpg',
  ),
  'amp:friedman-be-2010': ampVisual(
    'Friedman BE-100',
    'Friedman BE-100 amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/a/a2/BE.jpg/300px-BE.jpg',
  ),
  'amp:friedman-hbe-2010': ampVisual(
    'Friedman BE-100 HBE mode',
    'Friedman BE-100 amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/a/a2/BE.jpg/300px-BE.jpg',
  ),
  'amp:ods-100-ford': ampVisual(
    'Dumble Overdrive Special',
    'Dumble Overdrive Special amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/c/c3/Dumble.jpg/300px-Dumble.jpg',
  ),
  'amp:wrecker-express': ampVisual(
    'Trainwreck Express',
    'Trainwreck Express amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/5/53/Trainwreck.jpg/300px-Trainwreck.jpg',
  ),
  'amp:5153-100w-blue': ampVisual(
    'EVH 5150-III 100W',
    'EVH 5150-III 100W amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/0/04/5153.png/300px-5153.png',
  ),
  'amp:recto1-orange-modern': ampVisual(
    'MESA Dual Rectifier',
    'MESA Dual Rectifier amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/0/00/Recto.png/300px-Recto.png',
  ),
  'amp:solo-100-lead': ampVisual(
    'Soldano SLO-100',
    'Soldano SLO-100 amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/4/4e/SOLDANO_SLO-100.jpg/350px-SOLDANO_SLO-100.jpg',
  ),
  'amp:usa-mk-iic-plus': ampVisual(
    'MESA/Boogie Mark IIC+',
    'MESA/Boogie Mark IIC+ amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/7/7e/Iic%2B.jpg/300px-Iic%2B.jpg',
  ),
  'amp:usa-jp-iic-plus-red': ampVisual(
    'MESA/Boogie JP-2C',
    'MESA/Boogie JP-2C amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/9/98/Jp2c.jpg/300px-Jp2c.jpg',
  ),
  'amp:sv-bass-2': ampVisual(
    'Ampeg SVT',
    'Ampeg SVT bass amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/4/4a/Ampeg.jpg/300px-Ampeg.jpg',
  ),
  // Canonical Drive wiki model visuals. These entries override older pre-firmware-12 names above.
  'drive:77-custom-od': driveVisual(
    "MXR M77 Custom Badass Modified O.D.",
    "MXR M77 Custom Badass Modified O.D. pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/e/ed/Badass.jpg/100px-Badass.jpg",
  ),
  'drive:angry-chuck': driveVisual(
    "JHS Angry Charlie V3",
    "JHS Angry Charlie V3 pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/8/81/JHSPedalsAngryCharlieV3.jpg/100px-JHSPedalsAngryCharlieV3.jpg",
  ),
  'drive:bb-pre': driveVisual(
    "Xotic BB Preamp",
    "Xotic BB Preamp pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/c/c1/X_BB.jpg/200px-X_BB.jpg",
  ),
  'drive:bb-pre-at': driveVisual(
    "Xotic BB Preamp AT",
    "Xotic BB Preamp AT pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/a/af/BB-AT.jpg/200px-BB-AT.jpg",
  ),
  'drive:bender-fuzz': driveVisual(
    "Sola Sound / Vox Tone Bender",
    "Sola Sound / Vox Tone Bender pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/b/ba/X_Bender.gif/100px-X_Bender.gif",
  ),
  'drive:bit-crusher': driveVisual(
    "Fractal Audio custom bit-depth reducer",
    "Fractal Audio custom bit-depth reducer pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/d/d4/Logo.jpg/100px-Logo.jpg",
  ),
  'drive:blackglass-7k': driveVisual(
    "Darkglass Microtubes B7K",
    "Darkglass Microtubes B7K pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/4/43/X_B7K.png/125px-X_B7K.png",
  ),
  'drive:blues-od': driveVisual(
    "Marshall Bluesbreaker Mk1",
    "Marshall Bluesbreaker Mk1 pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/5/51/X_BBmk1.png/125px-X_BBmk1.png",
  ),
  'drive:bosom-boost': driveVisual(
    "Friedman Buxom Boost",
    "Friedman Buxom Boost pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/0/0d/Buxom.jpg/100px-Buxom.jpg",
  ),
  'drive:box-o-crunch': driveVisual(
    "MI Audio Crunch Box V1",
    "MI Audio Crunch Box V1 pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/e/e3/X_Crunchbox.jpg/200px-X_Crunchbox.jpg",
  ),
  'drive:colortone-booster': driveVisual(
    "Colorsound Power Boost",
    "Colorsound Power Boost pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/4/4e/Colorsound_Power_Boost.jpg/75px-Colorsound_Power_Boost.jpg",
  ),
  'drive:colortone-od': driveVisual(
    "Colorsound Overdriver",
    "Colorsound Overdriver pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/f/f4/Colorsound_Overdriver.jpg/75px-Colorsound_Overdriver.jpg",
  ),
  'drive:compulsion-distortion-hp': driveVisual(
    "Fulltone OCD, high-peak mode",
    "Fulltone OCD, high-peak mode pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/6/6c/X_OCD.jpg/150px-X_OCD.jpg",
  ),
  'drive:compulsion-distortion-lp': driveVisual(
    "Fulltone OCD, low-peak mode",
    "Fulltone OCD, low-peak mode pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/6/6c/X_OCD.jpg/150px-X_OCD.jpg",
  ),
  'drive:ds1-distortion': driveVisual(
    "BOSS DS-1 Distortion",
    "BOSS DS-1 Distortion pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/7/75/X_DS1.jpg/80px-X_DS1.jpg",
  ),
  'drive:ds1-distortion-mod': driveVisual(
    "modded BOSS DS-1 Distortion",
    "modded BOSS DS-1 Distortion pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/7/75/X_DS1.jpg/80px-X_DS1.jpg",
  ),
  'drive:esoteric-acb': driveVisual(
    "Xotic AC Booster",
    "Xotic AC Booster pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/8/81/X_AC.jpg/100px-X_AC.jpg",
  ),
  'drive:esoteric-bass-rcb': driveVisual(
    "Xotic Bass RC Booster",
    "Xotic Bass RC Booster pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/f/f3/RC-Bass.jpg/125px-RC-Bass.jpg",
  ),
  'drive:esoteric-rcb': driveVisual(
    "Xotic RC Booster v1",
    "Xotic RC Booster v1 pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/1/1e/X_RC.jpg/100px-X_RC.jpg",
  ),
  'drive:eternal-love': driveVisual(
    "Lovepedal Eternity",
    "Lovepedal Eternity pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/d/d7/X_Eternal.jpg/125px-X_Eternal.jpg",
  ),
  'drive:face-fuzz': driveVisual(
    "Dallas-Arbiter Fuzz Face",
    "Dallas-Arbiter Fuzz Face pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/2/23/X_Fuzzface.png/100px-X_Fuzzface.png",
  ),
  'drive:fas-boost': driveVisual(
    "Fractal Audio custom clean boost",
    "Fractal Audio custom clean boost pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/d/d4/Logo.jpg/100px-Logo.jpg",
  ),
  'drive:fas-led-drive': driveVisual(
    "Fractal Audio custom LED-clipper drive",
    "Fractal Audio custom LED-clipper drive pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/7/7f/LED.png/70px-LED.png",
  ),
  'drive:fat-rat': driveVisual(
    "modded Pro Co RAT with LED clipping",
    "modded Pro Co RAT with LED clipping pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/5/57/FATRAT.png/100px-FATRAT.png",
  ),
  'drive:fet-boost': driveVisual(
    "Fractal Audio custom FET boost",
    "Fractal Audio custom FET boost pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/d/d4/Logo.jpg/100px-Logo.jpg",
  ),
  'drive:fet-preamp': driveVisual(
    "possibly based on the BOSS FA-1 FET Amplifier",
    "possibly based on the BOSS FA-1 FET Amplifier pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/c/ce/X_FA1.png/100px-X_FA1.png",
  ),
  'drive:full-od': driveVisual(
    "Fulltone Full-Drive 2",
    "Fulltone Full-Drive 2 pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/8/8d/X_FD2.jpg/150px-X_FD2.jpg",
  ),
  'drive:gauss-drive': driveVisual(
    "Mesa Flux-Drive",
    "Mesa Flux-Drive pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/6/6c/Flux-drive.jpg/100px-Flux-drive.jpg",
  ),
  'drive:griddle-cake': driveVisual(
    "Crowther Hot Cake",
    "Crowther Hot Cake pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/f/f2/HotCake.jpg/100px-HotCake.jpg",
  ),
  'drive:guardian-photon-speed': driveVisual(
    "Greer Lightspeed",
    "Greer Lightspeed pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/1/1e/LIGHTSPEED.jpg/100px-LIGHTSPEED.jpg",
  ),
  'drive:hard-fuzz': driveVisual(
    "Fractal Audio custom hard fuzz",
    "Fractal Audio custom hard fuzz pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/d/d4/Logo.jpg/100px-Logo.jpg",
  ),
  'drive:heartpedal-11': driveVisual(
    "Lovepedal OD11 / Amp Eleven",
    "Lovepedal OD11 / Amp Eleven pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/6/6a/X_Amp11.jpg/150px-X_Amp11.jpg",
  ),
  'drive:hoodoo-drive': driveVisual(
    "Voodoo Lab Overdrive",
    "Voodoo Lab Overdrive pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/1/18/X_Hoodoo.jpg/100px-X_Hoodoo.jpg",
  ),
  'drive:horizon-precision-drive': driveVisual(
    "Horizon Devices Precision Drive",
    "Horizon Devices Precision Drive pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/e/ed/X_Precision.png/100px-X_Precision.png",
  ),
  'drive:integral-pre': driveVisual(
    "TC Electronic Integrated Preamp",
    "TC Electronic Integrated Preamp pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/3/37/TC.jpg/100px-TC.jpg",
  ),
  'drive:jam-ray': driveVisual(
    "Venuram Jan Ray",
    "Venuram Jan Ray pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/0/02/X_Jam.jpg/100px-X_Jam.jpg",
  ),
  'drive:klone-chiron': driveVisual(
    "Klon Centaur / KTR",
    "Klon Centaur / KTR pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/8/83/Klon.jpg/125px-Klon.jpg",
  ),
  'drive:m-zone-distortion': driveVisual(
    "BOSS MT-2 Metal Zone",
    "BOSS MT-2 Metal Zone pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/e/e9/X_MT.jpg/100px-X_MT.jpg",
  ),
  'drive:master-fuzz': driveVisual(
    "Gibson Maestro Fuzz-Tone FZ-1A",
    "Gibson Maestro Fuzz-Tone FZ-1A pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/a/a7/X_Maestro.jpg/110px-X_Maestro.jpg",
  ),
  'drive:maxoff-808': driveVisual(
    "Maxon OD-808",
    "Maxon OD-808 pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/8/8c/X_OD808.jpg/150px-X_OD808.jpg",
  ),
  'drive:mcmlxxxi-drv': driveVisual(
    "1981 Inventions DRV",
    "1981 Inventions DRV pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/4/4c/X_1981.png/150px-X_1981.png",
  ),
  'drive:micro-boost': driveVisual(
    "MXR Micro Amp",
    "MXR Micro Amp pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/c/ca/X_Micro.png/100px-X_Micro.png",
  ),
  'drive:mid-boost': driveVisual(
    "Fractal Audio custom mid boost",
    "Fractal Audio custom mid boost pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/d/d4/Logo.jpg/100px-Logo.jpg",
  ),
  'drive:mosfet-distortion': driveVisual(
    "Ibanez MT10 Mostortion",
    "Ibanez MT10 Mostortion pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/0/03/Mt10.jpg/100px-Mt10.jpg",
  ),
  'drive:noamp-bass-di': driveVisual(
    "Tech 21 NYC SansAmp Bass Driver DI",
    "Tech 21 NYC SansAmp Bass Driver DI pedal",
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tech_21_SansAmp_Bass_Driver_DI.jpg?width=625",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Tech_21_SansAmp_Bass_Driver_DI.jpg",
  ),
  'drive:noamp-bass-pre': driveVisual(
    "Tech 21 SansAmp Bass Driver DI",
    "Tech 21 SansAmp Bass Driver DI pedal",
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tech_21_SansAmp_Bass_Driver_DI.jpg?width=625",
    "Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Tech_21_SansAmp_Bass_Driver_DI.jpg",
  ),
  'drive:nobellium-ovd-1': driveVisual(
    "Nobels ODR-1 BC Natural Overdrive",
    "Nobels ODR-1 BC Natural Overdrive pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/7/74/Nobels.jpg/125px-Nobels.jpg",
  ),
  'drive:octave-distortion': driveVisual(
    "Tycobrahe Octavia",
    "Tycobrahe Octavia pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/2/2a/X_Octavia.jpg/100px-X_Octavia.jpg",
  ),
  'drive:od-250': driveVisual(
    "DOD Overdrive Preamp 250 reissue",
    "DOD Overdrive Preamp 250 reissue pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/5/52/X_OD250.jpg/150px-X_OD250.jpg",
  ),
  'drive:od-250-gray': driveVisual(
    "DOD Overdrive Preamp 250 original gray",
    "DOD Overdrive Preamp 250 original gray pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/d/d4/Logo.jpg/100px-Logo.jpg",
  ),
  'drive:od-one-overdrive': driveVisual(
    "BOSS OD-1 Over Drive",
    "BOSS OD-1 Over Drive pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/f/f0/OD-1.jpg/100px-OD-1.jpg",
  ),
  'drive:paradigm-shifter': driveVisual(
    "Barber Electronics Gain Changer",
    "Barber Electronics Gain Changer pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/3/3a/Barber.png/100px-Barber.png",
  ),
  'drive:pi-fuzz': driveVisual(
    "Electro-Harmonix Big Muff Pi, current",
    "Electro-Harmonix Big Muff Pi, current pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/d/df/X_Pi.jpg/100px-X_Pi.jpg",
  ),
  'drive:pi-fuzz-bass': driveVisual(
    "Electro-Harmonix Deluxe Bass Big Muff Pi",
    "Electro-Harmonix Deluxe Bass Big Muff Pi pedal",
    "https://www.ehx.com/wp-content/uploads/2020/11/dxbbmuff-f.jpg",
    "Electro-Harmonix",
    "https://www.ehx.com/products/deluxe-bass-big-muff-pi/",
  ),
  'drive:pi-fuzz-triangle': driveVisual(
    "Electro-Harmonix Triangle Big Muff Pi",
    "Electro-Harmonix Triangle Big Muff Pi pedal",
    "https://www.ehx.com/wp-content/uploads/2020/10/tribm-f.jpg",
    "Electro-Harmonix",
    "https://www.ehx.com/products/triangle-big-muff-pi/",
  ),
  'drive:pi-fuzz-ram-s-head': driveVisual(
    "Electro-Harmonix Ram's Head Big Muff Pi",
    "Electro-Harmonix Ram's Head Big Muff Pi pedal",
    "https://www.ehx.com/wp-content/uploads/2020/10/ramshead-f.jpg",
    "Electro-Harmonix",
    "https://www.ehx.com/products/rams-head-big-muff-pi/",
  ),
  'drive:pi-fuzz-russian': driveVisual(
    "Electro-Harmonix Green Russian Big Muff Pi",
    "Electro-Harmonix Green Russian Big Muff Pi pedal",
    "https://www.ehx.com/wp-content/uploads/2020/10/rusbm-f.jpg",
    "Electro-Harmonix",
    "https://www.ehx.com/products/green-russian-big-muff-pi/",
  ),
  'drive:plus-distortion': driveVisual(
    "MXR Distortion+",
    "MXR Distortion+ pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/3/3a/X_Plus.jpg/100px-X_Plus.jpg",
  ),
  'drive:rat-distortion': driveVisual(
    "Pro Co RAT",
    "Pro Co RAT pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/1/18/X_RAT.jpg/100px-X_RAT.jpg",
  ),
  'drive:royal-bass-di': driveVisual(
    "Noble Bass Preamp DI",
    "Noble Bass Preamp DI pedal",
    "https://nobleamps.com/img/preamp/wood_face.jpg",
    "Noble Amplifier Company",
    "https://nobleamps.com/preamps/",
  ),
  'drive:sdd-preamp': driveVisual(
    "Korg SDD-3000 preamp",
    "Korg SDD-3000 preamp pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/b/bd/X_SDD.jpg/625px-X_SDD.jpg",
  ),
  'drive:shimmer-drive': driveVisual(
    "Fractal Audio custom shimmer drive",
    "Fractal Audio custom shimmer drive pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/d/d4/Logo.jpg/100px-Logo.jpg",
  ),
  'drive:shred-distortion': driveVisual(
    "Marshall Shredmaster",
    "Marshall Shredmaster pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/c/c3/X_Shred.jpg/100px-X_Shred.jpg",
  ),
  'drive:sonic-drive': driveVisual(
    "Maxon/Ibanez SD-9 Sonic Distortion",
    "Maxon/Ibanez SD-9 Sonic Distortion pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/f/fe/X_SD9.jpg/100px-X_SD9.jpg",
  ),
  'drive:suhr-riot-ge-r': driveVisual(
    "Suhr Riot germanium mode",
    "Suhr Riot germanium mode pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/d/d7/X_Riot.jpg/100px-X_Riot.jpg",
  ),
  'drive:suhr-riot-led-l': driveVisual(
    "Suhr Riot LED mode",
    "Suhr Riot LED mode pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/d/d7/X_Riot.jpg/100px-X_Riot.jpg",
  ),
  'drive:suhr-riot-led-si-m': driveVisual(
    "Suhr Riot LED/silicon mode",
    "Suhr Riot LED/silicon mode pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/d/d7/X_Riot.jpg/100px-X_Riot.jpg",
  ),
  'drive:sunrise-splendor': driveVisual(
    "JHS Pedals Morning Glory V4",
    "JHS Pedals Morning Glory V4 pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/7/77/Morning_glory_v4.jpg/100px-Morning_glory_v4.jpg",
  ),
  'drive:sunrise-splendor-hi-cut': driveVisual(
    "JHS Pedals Morning Glory V4 high-cut voice",
    "JHS Pedals Morning Glory V4 high-cut voice pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/7/77/Morning_glory_v4.jpg/100px-Morning_glory_v4.jpg",
  ),
  'drive:super-fuzz': driveVisual(
    "Univox Super-Fuzz",
    "Univox Super-Fuzz pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/1/14/Superfuzz.jpg/200px-Superfuzz.jpg",
  ),
  'drive:super-od': driveVisual(
    "BOSS SD-1 Super OverDrive",
    "BOSS SD-1 Super OverDrive pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/c/c9/X_SD1.jpg/100px-X_SD1.jpg",
  ),
  'drive:swedish-metal': driveVisual(
    "BOSS Waza Craft HM-2W Heavy Metal",
    "BOSS Waza Craft HM-2W Heavy Metal pedal",
    "https://static.roland.com/assets/images/products/main/hm-2w_top_main.jpg",
    "BOSS",
    "https://www.boss.info/global/products/hm-2w/",
  ),
  'drive:t808-od': driveVisual(
    "Ibanez TS-808 Tube Screamer",
    "Ibanez TS-808 Tube Screamer pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/6/6d/X_TS.jpg/100px-X_TS.jpg",
  ),
  'drive:t808-mod': driveVisual(
    "modded Ibanez TS-808 Tube Screamer",
    "modded Ibanez TS-808 Tube Screamer pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/6/6d/X_TS.jpg/100px-X_TS.jpg",
  ),
  'drive:tape-distortion': driveVisual(
    "tape distortion",
    "tape distortion pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/6/68/TDST.png/100px-TDST.png",
  ),
  'drive:timothy-down': driveVisual(
    "Paul Cochrane Timmy V4 clipping switch down",
    "Paul Cochrane Timmy V4 clipping switch down pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/8/8c/X_Timmy.jpg/100px-X_Timmy.jpg",
  ),
  'drive:timothy-mid': driveVisual(
    "Paul Cochrane Timmy V4 clipping switch middle",
    "Paul Cochrane Timmy V4 clipping switch middle pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/8/8c/X_Timmy.jpg/100px-X_Timmy.jpg",
  ),
  'drive:timothy-up': driveVisual(
    "Paul Cochrane Timmy V4 clipping switch up",
    "Paul Cochrane Timmy V4 clipping switch up pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/8/8c/X_Timmy.jpg/100px-X_Timmy.jpg",
  ),
  'drive:tone-of-kings': driveVisual(
    "Analog Man King of Tone",
    "Analog Man King of Tone pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/9/9a/X_KoT.jpg/100px-X_KoT.jpg",
  ),
  'drive:treble-boost': driveVisual(
    "silicon treble booster circuit",
    "silicon treble booster circuit pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/0/0e/X_Treble.jpg/150px-X_Treble.jpg",
  ),
  'drive:ts9dx': driveVisual(
    "Ibanez TS9DX Turbo Tube Screamer + mode",
    "Ibanez TS9DX Turbo Tube Screamer + mode pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/9/95/Ts9dx.jpg/100px-Ts9dx.jpg",
  ),
  'drive:ts9dx-hot': driveVisual(
    "Ibanez TS9DX Turbo Tube Screamer Hot mode",
    "Ibanez TS9DX Turbo Tube Screamer Hot mode pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/9/95/Ts9dx.jpg/100px-Ts9dx.jpg",
  ),
  'drive:tube-drive-3-knob': driveVisual(
    "Butler Tube Driver",
    "Butler Tube Driver pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/a/a8/X_TubeDriver.jpg/100px-X_TubeDriver.jpg",
  ),
  'drive:tube-drive-4-knob': driveVisual(
    "Butler Tube Driver",
    "Butler Tube Driver pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/d/d6/X_Tube4.jpg/100px-X_Tube4.jpg",
  ),
  'drive:tube-drive-5-knob': driveVisual(
    "Butler Tube Driver / Dean Markley Overlord",
    "Butler Tube Driver / Dean Markley Overlord pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/d/d6/X_Tube4.jpg/100px-X_Tube4.jpg",
  ),
  'drive:valve-screamer-vs9': driveVisual(
    "Ibanez TS9 Tube Screamer",
    "Ibanez TS9 Tube Screamer pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/9/9d/Ts9.jpg/100px-Ts9.jpg",
  ),
  'drive:zen-master': driveVisual(
    "Hermida Zendrive",
    "Hermida Zendrive pedal",
    "https://wiki.fractalaudio.com/wiki/images/thumb/f/fb/X_Zen.jpg/100px-X_Zen.jpg",
  ),
  'delay:2290-w-modulation': delayVisual(
    'TC Electronic TC2290',
    'TC Electronic 2290 P dynamic digital delay pedal',
    'https://images.musicstore.de/images/1280/tc-electronic-2290-p-dynamic-digital-delay_1_GIT0061188-000.jpg',
    'Music Store',
    'https://www.musicstore.com/en_US/USD/TC-Electronic-2290-P-Dynamic-Digital-Delay/art-GIT0061188-000',
  ),
  'delay:analog-mono': delayVisual(
    'BOSS DM-2W',
    'BOSS DM-2W analog delay pedal',
    'https://static.roland.com/assets/images/products/main/dm-2w_top_main.jpg',
    'BOSS',
    'https://www.boss.info/us/products/dm-2w/',
  ),
  'delay:analog-stereo': delayVisual(
    'BOSS DM-2W',
    'BOSS DM-2W analog delay pedal',
    'https://static.roland.com/assets/images/products/main/dm-2w_top_main.jpg',
    'BOSS',
    'https://www.boss.info/us/products/dm-2w/',
  ),
  'delay:deluxe-mind-guy': delayVisual(
    'Electro-Harmonix Deluxe Memory Man',
    'Electro-Harmonix Deluxe Memory Man delay pedal',
    'https://www.ehx.com/wp-content/uploads/2020/10/DMM_2022_03.jpg',
    'Electro-Harmonix',
    'https://www.ehx.com/products/deluxe-memory-man/',
  ),
  'delay:dm-two-delay': delayVisual(
    'BOSS DM-2W',
    'BOSS DM-2W analog delay pedal',
    'https://static.roland.com/assets/images/products/main/dm-2w_top_main.jpg',
    'BOSS',
    'https://www.boss.info/us/products/dm-2w/',
  ),
  'delay:dual-head-tape': delayVisual(
    'BOSS RE-202 Space Echo',
    'BOSS RE-202 Space Echo pedal',
    'https://static.roland.com/assets/images/products/main/re-202_main.jpg',
    'BOSS',
    'https://www.boss.info/us/products/re-202/',
  ),
  'delay:graphite-copy-delay': delayVisual(
    'MXR Carbon Copy',
    'MXR Carbon Copy analog delay pedal',
    'https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/500x659/products/607/6299/11169000001.MAIN__89194.1663874794.jpg?c=2',
    'Dunlop',
    'https://www.jimdunlop.com/mxr-carbon-copy-analog-delay/',
  ),
  'delay:lo-fi-tape': delayVisual(
    'BOSS RE-202 Space Echo',
    'BOSS RE-202 Space Echo pedal',
    'https://static.roland.com/assets/images/products/main/re-202_main.jpg',
    'BOSS',
    'https://www.boss.info/us/products/re-202/',
  ),
  'delay:mono-bbd': delayVisual(
    'BOSS DM-2W',
    'BOSS DM-2W analog delay pedal',
    'https://static.roland.com/assets/images/products/main/dm-2w_top_main.jpg',
    'BOSS',
    'https://www.boss.info/us/products/dm-2w/',
  ),
  'delay:mono-tape': delayVisual(
    'BOSS RE-202 Space Echo',
    'BOSS RE-202 Space Echo pedal',
    'https://static.roland.com/assets/images/products/main/re-202_main.jpg',
    'BOSS',
    'https://www.boss.info/us/products/re-202/',
  ),
  'delay:stereo-bbd': delayVisual(
    'BOSS DM-2W',
    'BOSS DM-2W analog delay pedal',
    'https://static.roland.com/assets/images/products/main/dm-2w_top_main.jpg',
    'BOSS',
    'https://www.boss.info/us/products/dm-2w/',
  ),
  'delay:stereo-mind-guy': delayVisual(
    'Electro-Harmonix Deluxe Memory Man',
    'Electro-Harmonix Deluxe Memory Man delay pedal',
    'https://www.ehx.com/wp-content/uploads/2020/10/DMM_2022_03.jpg',
    'Electro-Harmonix',
    'https://www.ehx.com/products/deluxe-memory-man/',
  ),
  'delay:stereo-tape': delayVisual(
    'BOSS RE-202 Space Echo',
    'BOSS RE-202 Space Echo pedal',
    'https://static.roland.com/assets/images/products/main/re-202_main.jpg',
    'BOSS',
    'https://www.boss.info/us/products/re-202/',
  ),
  'delay:stereo-trem-delay': delayVisual(
    'TC Electronic TC2290',
    'TC Electronic 2290 P dynamic digital delay pedal',
    'https://images.musicstore.de/images/1280/tc-electronic-2290-p-dynamic-digital-delay_1_GIT0061188-000.jpg',
    'Music Store',
    'https://www.musicstore.com/en_US/USD/TC-Electronic-2290-P-Dynamic-Digital-Delay/art-GIT0061188-000',
  ),
  'delay:worn-tape': delayVisual(
    'BOSS RE-202 Space Echo',
    'BOSS RE-202 Space Echo pedal',
    'https://static.roland.com/assets/images/products/main/re-202_main.jpg',
    'BOSS',
    'https://www.boss.info/us/products/re-202/',
  ),
  ...visualGroup('delay', [
    'digital-mono',
    'vintage-digital',
  ], delayVisual(
    'Fractal Audio Delay block, Mono type',
    'Fractal Audio Delay block mono editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/6/60/Delay_block_-_Mono.PNG/450px-Delay_block_-_Mono.PNG',
  )),
  ...visualGroup('delay', [
    'ambient-stereo',
    'digital-stereo',
    'ducking-delay',
    'pan-delay',
    'ping-pong',
    'reverse-delay',
    'surround-delay',
    'sweep-delay',
    'wandering-delays',
  ], delayVisual(
    'Fractal Audio Delay block, Stereo type',
    'Fractal Audio Delay block stereo editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/4/4f/Delay_block_-_Stereo.PNG/400px-Delay_block_-_Stereo.PNG',
  )),
  'delay:dual-delay': delayVisual(
    'Fractal Audio Dual Delay type',
    'Fractal Audio Dual Delay editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/f/fd/Dual_Delay.png/200px-Dual_Delay.png',
  ),
  ...visualGroup('reverb', [
    'british-spring',
    'deluxe-spring',
    'large-spring',
    'lush-spring',
    'medium-spring',
    'small-spring',
    'studio-spring',
    'tube-spring',
    'vibrato-king-custom-spring',
    'vibrato-king-spring',
  ], reverbVisual(
    "Fender '63 Tube Reverb",
    "Fender '63 Tube Reverb outboard spring reverb unit",
    'https://cdn.mos.cms.futurecdn.net/bc6471207af1b456b737d3052f5e732d-600-80.jpg',
    'MusicRadar',
    'https://www.musicradar.com/reviews/guitars/fender-63-tube-reverb-621986',
  )),
  ...visualGroup('reverb', [
    'echo-plate',
    'fields-of-pyrite',
    'gold-plate',
    'large-plate',
    'london-plate',
    'medium-plate',
    'small-plate',
    'sun-plate',
    'vocal-plate',
  ], reverbVisual(
    'EMT 140 Classic Plate Reverberator',
    'EMT 140 classic plate reverb unit',
    'https://www.uaudio.com/cdn/shop/files/emt_140_classic_plate_reverberator_gallery_1.png?v=1742249161',
    'Universal Audio',
    'https://www.uaudio.com/products/emt-140',
  )),
  ...visualGroup('reverb', [
    'north-church',
    'south-church',
  ], reverbVisual(
    'Bricasti Design M7',
    'Bricasti Design M7 studio reverb processor',
    'https://www.bricasti.com/images/M7_3.jpg',
    'Bricasti Design',
    'https://www.bricasti.com/en/pro/m7_photos.php',
  )),
  ...visualGroup('reverb', [
    'chorus-hall',
    'echo-hall',
    'echo-room',
    'recording-studio-a',
    'recording-studio-c',
    'studio',
  ], reverbVisual(
    'Lexicon 224 Digital Reverb',
    'Lexicon 224 digital reverb unit',
    'https://www.uaudio.com/cdn/shop/files/lexicon_224_digital_reverb_gallery_1.png?v=1742249116',
    'Universal Audio',
    'https://www.uaudio.com/products/lexicon-224',
  )),
  ...visualGroup('reverb', [
    'ambience',
    'drum-room',
    'gymnasium',
    'hallway',
    'huge-room',
    'large-room',
    'large-tiled-room',
    'large-wooden-room',
    'medium-room',
    'small-room',
    'warehouse',
  ], reverbVisual(
    'Fractal Audio Reverb room algorithms',
    'Fractal Audio Reverb block room algorithm editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/9/93/Reverb_block.png/450px-Reverb_block.png',
  )),
  ...visualGroup('reverb', [
    'asylum-hall',
    'cavern',
    'colosseum',
    'concert-hall',
    'deep-chamber',
    'large-chamber',
    'large-deep-hall',
    'large-hall',
    'marble-hall',
    'mausoleum',
    'mechanic-s-hall',
    'medium-chamber',
    'medium-hall',
    'music-hall',
    'nashville-church',
    'opera-house',
    'small-chamber',
    'small-hall',
    'st-albans-cathedral',
    'st-george-s-church',
    'symphony-hall',
    'wide-hall',
    'york-minster-cathedral',
  ], reverbVisual(
    'Bricasti Design M7',
    'Bricasti Design M7 studio reverb processor',
    'https://www.bricasti.com/images/M7_3.jpg',
    'Bricasti Design',
    'https://www.bricasti.com/en/pro/m7_photos.php',
  )),
  ...visualGroup('reverb', [
    'andromeda',
    'aquarius',
    'capricorn',
    'centaurus',
    'echo-pitch-plate',
    'gemini',
    'pegasus',
    'pleiades',
    'sagittarius',
    'ursa-major',
  ], reverbVisual(
    'Eventide H90 Harmonizer',
    'Eventide H90 Harmonizer pedal for pitch-shifted ambience',
    'https://cdn.eventideaudio.com/uploads/2022/11/H90-amp-1.jpeg',
    'Eventide Audio',
    'https://www.eventideaudio.com/pedals/h90/',
  )),
  ...visualGroup('reverb', [
    'cirrocumulus',
    'cumulonimbus',
    'deep-space',
    'ice-castle',
    'nimbostratus',
    'stone-quarry',
    'stratocumulus',
    'tunnel',
  ], reverbVisual(
    'Fractal Audio Reverb type map',
    'Fractal Audio Reverb type map from the wiki',
    'https://wiki.fractalaudio.com/wiki/images/7/7e/Reverbtypes.png',
  )),
  ...visualGroup('chorus', [
    'analog-mono',
    'japan-ce-2',
    'warm-stereo',
  ], chorusVisual(
    'BOSS CE-2W Chorus',
    'BOSS CE-2W analog chorus pedal',
    'https://static.roland.com/assets/images/products/main/CE-2W_main.jpg',
    'BOSS',
    'https://www.boss.info/us/products/ce-2w/',
  )),
  'chorus:analog-stereo': chorusVisual(
    'BOSS CE-1 Chorus Ensemble',
    'BOSS CE-1 Chorus Ensemble pedal',
    'https://cdn.mos.cms.futurecdn.net/78DBqtwwbcqjC2QkyL29EB-1200-80.jpg',
    'GuitarPlayer',
    'https://www.guitarplayer.com/gear/classic-gear-boss-ce-1-chorus-ensemble',
  ),
  ...visualGroup('chorus', [
    'japan-ce-1-chorus',
    'japan-ce-1-vibrato',
  ], chorusVisual(
    'BOSS CE-1 Chorus Ensemble',
    'BOSS CE-1 Chorus Ensemble pedal',
    'https://cdn.mos.cms.futurecdn.net/78DBqtwwbcqjC2QkyL29EB-1200-80.jpg',
    'GuitarPlayer',
    'https://www.guitarplayer.com/gear/classic-gear-boss-ce-1-chorus-ensemble',
  )),
  'chorus:japan-ch-1': chorusVisual(
    'BOSS CH-1 Super Chorus',
    'BOSS CH-1 Super Chorus pedal',
    'https://static.roland.com/products/ch-1/images/ch-1_top.png',
    'BOSS',
    'https://www.boss.info/us/products/CH-1/',
  ),
  'chorus:japan-ce-2-bass': chorusVisual(
    'BOSS CE-2B Bass Chorus',
    'BOSS CE-2B Bass Chorus pedal',
    'https://upload.wikimedia.org/wikipedia/commons/4/46/Boss_CE-2B_Bass_chorus.jpg',
    'Wikimedia Commons',
    'https://commons.wikimedia.org/wiki/File:Boss_CE-2B_Bass_chorus.jpg',
  ),
  'chorus:mx234': chorusVisual(
    'MXR M234 Analog Chorus',
    'MXR M234 Analog Chorus pedal',
    'https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/500x659/products/629/6423/11234000001.MAIN__89220.1663874795.jpg?c=2',
    'Dunlop',
    'https://www.jimdunlop.com/mxr-analog-chorus/',
  ),
  'chorus:mx234-stereo': chorusVisual(
    'MXR M134 Stereo Chorus',
    'MXR M134 Stereo Chorus pedal',
    'https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/500x659/products/604/6281/11134000001.MAIN__52719.1663874794.jpg?c=2',
    'Dunlop',
    'https://www.jimdunlop.com/mxr-stereo-chorus/',
  ),
  'chorus:small-copy': chorusVisual(
    'Electro-Harmonix Small Clone',
    'Electro-Harmonix Small Clone chorus pedal',
    'https://www.ehx.com/wp-content/uploads/2020/10/clone-f-1.jpg',
    'Electro-Harmonix',
    'https://www.ehx.com/products/small-clone/',
  ),
  'chorus:vibrato': chorusVisual(
    'BOSS CE-2W Chorus',
    'BOSS CE-2W analog chorus and vibrato pedal',
    'https://static.roland.com/assets/images/products/main/CE-2W_main.jpg',
    'BOSS',
    'https://www.boss.info/us/products/ce-2w/',
  ),
  'chorus:rockguy': chorusVisual(
    'MXR Rockman X100',
    'MXR Rockman X100 analog tone processor pedal',
    'https://cdn.mos.cms.futurecdn.net/ys6LkaGYr8xkrBWmMyFDNd-720-80.jpg',
    'MusicRadar',
    'https://www.musicradar.com/guitars/mxr-rockman-x100-pedal-review',
  ),
  'chorus:80-s-style': chorusVisual(
    'Roland SDD-320 Dimension D',
    'Roland SDD-320 Dimension D studio chorus rack unit',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Roland_SDD-320_Dimension_D.jpg/960px-Roland_SDD-320_Dimension_D.jpg',
    'Wikimedia Commons',
    'https://commons.wikimedia.org/wiki/File:Roland_SDD-320_Dimension_D.jpg',
  ),
  ...visualGroup('chorus', [
    'dimension-1',
    'dimension-2',
    'dimension-3',
  ], chorusVisual(
    'BOSS DC-2W Dimension C',
    'BOSS DC-2W Dimension C chorus pedal',
    'https://static.roland.com/assets/images/products/main/dc-2w_main.jpg',
    'BOSS',
    'https://www.boss.info/us/products/dc-2w/',
  )),
  ...visualGroup('chorus', [
    'digital-mono',
    'digital-stereo',
    'triangle-chorus',
    '8-voice-stereo',
    '4-voice-analog',
    '8-voice-analog',
    'dual-chorus',
  ], chorusVisual(
    'Fractal Audio Chorus block algorithms',
    'Fractal Audio Chorus block editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/f/f7/Chorus_block.PNG/400px-Chorus_block.PNG',
  )),
  'chorus:stereo-tri-chorus': chorusVisual(
    'Dytronics CS-5 Tri-Stereo Chorus/Splitter',
    'Dytronics CS-5 Tri-Stereo Chorus rack unit',
    'https://www.vintagedigital.com.au/wp-content/uploads/Dytronics-CS-5-Copyright-VIntage-DIgital.webp',
    'Vintage Digital',
    'https://www.vintagedigital.com.au/dytronics-cs-5/',
  ),
  ...visualGroup('chorus', [
    'tape-chorus',
    'tape-flanger',
  ], chorusVisual(
    'Fractal Audio Chorus block tape algorithms',
    'Fractal Audio Chorus block tape algorithm editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/f/f7/Chorus_block.PNG/400px-Chorus_block.PNG',
  )),
  ...visualGroup('flanger', [
    'analog-mono',
    'analog-stereo',
    'fas-flanger',
    'mxf-117',
    'pop-flanger',
    'stereo-jet',
  ], flangerVisual(
    'MXR M117R Flanger',
    'MXR M117R Flanger pedal',
    'https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/500x659/products/601/6263/11117000101.MAIN__57059.1663874794.jpg?c=2',
    'Dunlop',
    'https://www.jimdunlop.com/mxr-flanger/',
  )),
  'flanger:bbf-2': flangerVisual(
    'BOSS BF-2 Flanger',
    'BOSS BF-2 Flanger pedal',
    'https://static.roland.com/assets/images/products/main/bf_2_top_main.jpg',
    'BOSS',
    'https://www.boss.info/se/products/bf-2/',
  ),
  ...visualGroup('flanger', [
    'electric-mystery',
    'deluxe-mystery',
  ], flangerVisual(
    'Electro-Harmonix Deluxe Electric Mistress',
    'Electro-Harmonix Deluxe Electric Mistress flanger pedal',
    'https://www.ehx.com/wp-content/uploads/2020/10/mistressxo-f.jpg',
    'Electro-Harmonix',
    'https://www.ehx.com/products/deluxe-electric-mistress/',
  )),
  'flanger:d-ad-185': flangerVisual(
    'A/DA PBF Flanger',
    'A/DA PBF Flanger pedal',
    'https://cdn.mos.cms.futurecdn.net/f56bd66e056990db8e652fc38536f482-1200-80.jpg',
    'MusicRadar',
    'https://www.musicradar.com/news/guitars/a-da-makes-its-legendary-flanger-stompbox-pedalboard-friendly-631151',
  ),
  ...visualGroup('flanger', [
    'digital-mono',
    'digital-stereo',
    'thru-zero',
    'zero-flanger',
    'manual-thru-zero-flanger',
    'step-flanger',
    'binary-flange',
    'cancel-flange',
    'lofty-flange',
    'melodic-flange',
    '80-s-rack-flanger',
    'scion-stereo-flange',
    'trippy-flanger',
    'tubular',
    'vowel-flanger',
  ], flangerVisual(
    'Fractal Audio Flanger block algorithms',
    'Fractal Audio Flanger block editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/8/86/Flanger_block.PNG/400px-Flanger_block.PNG',
  )),
  ...visualGroup('flanger', [
    'count-of-flanging',
    'cuda-flange',
    'harmonoflange',
    'hemisflange',
    'spirit-flange',
    'starship-flanger',
  ], flangerVisual(
    'Fractal Audio song-style Flanger presets',
    'Fractal Audio Flanger block song-style preset editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/8/86/Flanger_block.PNG/400px-Flanger_block.PNG',
  )),
  'phaser:block-90': phaserVisual(
    'MXR Phase 90',
    'MXR Phase 90 phaser pedal',
    'https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/500x659/products/589/6193/11101000001.MAIN__38391.1663874793.jpg?c=2',
    'Dunlop',
    'https://www.jimdunlop.com/mxr-phase-90/',
  ),
  'phaser:script-45': phaserVisual(
    "MXR '75 Vintage Phase 45",
    "MXR '75 Vintage Phase 45 script-logo phaser pedal",
    'https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/500x659/products/689/6727/16045001001.MAIN__55720.1663874799.jpg?c=2',
    'Dunlop',
    'https://www.jimdunlop.com/mxr-75-vintage-phase-45/',
  ),
  'phaser:script-90': phaserVisual(
    "MXR '74 Vintage Phase 90",
    "MXR '74 Vintage Phase 90 script-logo phaser pedal",
    'https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/500x659/products/691/6739/16101003001.MAIN__44494.1663874799.jpg?c=2',
    'Dunlop',
    'https://www.jimdunlop.com/mxr-74-vintage-phase-90/',
  ),
  ...visualGroup('phaser', [
    'digital-mono',
    'digital-stereo',
    'stereo-8-stage',
  ], phaserVisual(
    'Fractal Audio Phaser block algorithms',
    'Fractal Audio Phaser block editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/7/7b/Phaser_block.png/350px-Phaser_block.png',
  )),
  'phaser:stripe-90': phaserVisual(
    'MXR EVH Phase 90',
    'MXR EVH Phase 90 phaser pedal',
    'https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/500x659/products/590/9158/EVH90.MAIN__19907.1663874793.jpg?c=2',
    'Dunlop',
    'https://www.jimdunlop.com/mxr-evh-phase-90/',
  ),
  'phaser:mutated-twin-phaser': phaserVisual(
    'Mu-Tron Bi-Phase',
    'Mu-Tron Bi-Phase dual phaser unit',
    'https://mu-tron.com/wp-content/uploads/2017/12/Bi-Phase-1-e1516437515614.jpg',
    'Musitronics Mu-Tron',
    'https://mu-tron.com/vintage-musitronics/mu-tron-bi-phase/',
  ),
  'phaser:naughty-rock': phaserVisual(
    'Electro-Harmonix Bad Stone',
    'Electro-Harmonix Bad Stone phaser pedal',
    'https://www.ehx.com/wp-content/uploads/2020/10/badstone-f.jpg',
    'Electro-Harmonix',
    'https://www.ehx.com/products/bad-stone/',
  ),
  ...visualGroup('phaser', [
    'classic-vibe',
    'fas-vibe',
    'modern-vibe',
  ], phaserVisual(
    'Fulltone Deja Vibe',
    'Fulltone Deja Vibe pedal',
    'https://www.soundpure.com/resources/org.apache.wicket.Application/productImage?id=10042-fulltone-deja-vibe-stereo-pedal-used-14639dd85dc-57.jpg',
    'Soundpure',
    'https://www.soundpure.com/p/fulltone-deja-vibe-stereo-pedal-used/10042',
  )),
  ...visualGroup('phaser', [
    'barber-pole',
    'ultra-super-mega-phaser',
  ], phaserVisual(
    'Fractal Audio Phaser block algorithms',
    'Fractal Audio Phaser block editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/7/7b/Phaser_block.png/350px-Phaser_block.png',
  )),
  ...visualGroup('phaser', [
    'borg-phaser',
    'treadle-phaser',
    'virtuoso-phaser',
  ], phaserVisual(
    'Fractal Audio Phaser block physical-pedal models',
    'Fractal Audio Phaser block physical-pedal model editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/7/7b/Phaser_block.png/350px-Phaser_block.png',
  )),
  'rotary:rotary-speaker': rotaryVisual(
    'Leslie 122',
    'Leslie 122 rotating speaker cabinet',
    'https://upload.wikimedia.org/wikipedia/commons/e/e0/Leslie_122.jpg',
    'Wikimedia Commons',
    'https://commons.wikimedia.org/wiki/File:Leslie_122.jpg',
  ),
  ...visualGroup('tremolo', [
    'optical-trem-1',
    'optical-trem-2',
    'panner',
    'vca-trem',
  ], tremoloVisual(
    'BOSS TR-2 Tremolo',
    'BOSS TR-2 tremolo pedal',
    'https://static.roland.com/assets/images/products/main/tr2_main.jpg',
    'BOSS',
    'https://www.boss.info/global/products/tr-2/',
  )),
  ...visualGroup('tremolo', [
    'bias-trem',
    'harmonic-trem',
    'neon-trem',
  ], tremoloVisual(
    'Fender Twin Reverb',
    'Fender Twin Reverb amplifier',
    'https://wiki.fractalaudio.com/wiki/images/thumb/7/78/Twin.jpg/300px-Twin.jpg',
  )),
  ...visualGroup('pitch', [
    'arpeggiator',
    'crystal-echoes',
    'custom-shifter',
    'dual-chromatic',
    'dual-detune',
    'dual-detune-delay',
    'dual-diatonic',
    'quad-chromatic',
    'quad-chromatic-delay',
    'quad-detune',
    'quad-diatonic',
    'quad-diatonic-delay',
    'virtual-capo',
  ], pitchVisual(
    'Eventide H90 Harmonizer',
    'Eventide H90 Harmonizer pedal',
    'https://cdn.eventideaudio.com/uploads/2022/11/H90-amp-1.jpeg',
    'Eventide Audio',
    'https://www.eventideaudio.com/pedals/h90/',
  )),
  ...visualGroup('pitch', [
    'advanced-whammy',
    'classic-whammy',
  ], pitchVisual(
    'DigiTech Whammy',
    'DigiTech Whammy pitch-shifting pedal',
    'https://eadn-wc05-7545739.nxedge.io/wp-content/uploads/2022/08/DigiTech_Whammy_5-guitar-pedal_Top_1200x1200-300x300.jpg',
    'DigiTech',
    'https://digitech.com/dp/whammy/',
  )),
  'pitch:octave-divider': pitchVisual(
    'BOSS OC-5 Octave',
    'BOSS OC-5 octave pedal',
    'https://static.roland.com/assets/images/products/main/oc-5_main.jpg',
    'BOSS',
    'https://www.boss.info/global/products/oc-5/',
  ),
  ...visualGroup('gate-expander', [
    'classic-expander',
    'modern-expander',
    'classic-gate',
    'modern-gate',
  ], gateVisual(
    'BOSS NS-2 Noise Suppressor',
    'BOSS NS-2 noise suppressor pedal',
    'https://static.roland.com/products/ns-2/image/ns-2_hero.jpg',
    'BOSS',
    'https://www.boss.info/global/products/ns-2/',
  )),
  ...visualGroup('filter', [
    'auto-wah',
    'envelope-filter',
    'touch-wah',
  ], filterVisual(
    'Electro-Harmonix Q-Tron Plus',
    'Electro-Harmonix Q-Tron Plus envelope filter pedal',
    'https://www.ehx.com/wp-content/uploads/2020/10/qtron-f.jpg',
    'Electro-Harmonix',
    'https://www.ehx.com/products/q-tron-plus/',
  )),
  ...visualGroup('filter', [
    'allpass',
    'band-pass',
    'feedback-comb',
    'feedforward-comb',
    'highpass',
    'high-shelf',
    'high-shelf-2',
    'low-pass',
    'low-shelf',
    'low-shelf-2',
    'notch',
    'null',
    'peaking',
    'peaking-2',
    'tilt-eq',
  ], filterVisual(
    'Fractal Audio Filter block response shapes',
    'Fractal Audio filter response slope diagram',
    'https://wiki.fractalaudio.com/wiki/images/thumb/0/0b/Slope.gif/400px-Slope.gif',
  )),
  'graphic-eq:7-band-pedal': graphicEqVisual(
    'BOSS GE-7 Equalizer',
    'BOSS GE-7 graphic equalizer pedal',
    'https://static.roland.com/products/ge-7/image/ge-7_hero.jpg',
    'BOSS',
    'https://www.boss.info/global/products/ge-7/',
  ),
  'graphic-eq:7-band-bass-pedal': graphicEqVisual(
    'BOSS GEB-7 Bass Equalizer',
    'BOSS GEB-7 bass graphic equalizer pedal',
    'https://static.roland.com/assets/images/products/gallery/geb_7_gal.jpg',
    'BOSS',
    'https://www.boss.info/global/products/geb-7/',
  ),
  ...visualGroup('graphic-eq', [
    '3-band-console',
    '3-band-passive',
    '4-band-passive',
    '5-band-constant-q',
    '5-band-passive',
    '5-band-variable-q',
    '7-band-constant-q',
    '7-band-variable-q',
    '8-band-constant-q',
    '8-band-variable-q',
    'band-2-3-octave-constant-q',
    'band-2-3-octave-variable-q',
    '10-band-constant-q',
    '10-band-variable-q',
    '5-band-mark',
    '4-band-jm-pre-1',
  ], graphicEqVisual(
    'Fractal Audio Graphic EQ block',
    'Fractal Audio EQ response slope diagram',
    'https://wiki.fractalaudio.com/wiki/images/thumb/0/0b/Slope.gif/400px-Slope.gif',
  )),
  ...visualGroup('parametric-eq', [
    'shelving',
    'peaking',
    'blocking',
    'shelving-2',
    'peaking-2',
  ], parametricEqVisual(
    'Fractal Audio Parametric EQ block',
    'Fractal Audio EQ response slope diagram',
    'https://wiki.fractalaudio.com/wiki/images/thumb/0/0b/Slope.gif/400px-Slope.gif',
  )),
  'compressor:citrus-juicer': compressorVisual(
    'Dan Armstrong Orange Squeezer',
    'Dan Armstrong Orange Squeezer compressor pedal',
    'https://media.guitarcenter.com/is/image/MMGS7/150598000009000-00-600x600.jpg',
    'Guitar Center',
    'https://www.guitarcenter.com/Dan-Armstrong/Orange-Squeezer-Compressor-Guitar-Effects-Pedal-Orange-1274115028053.gc',
  ),
  'compressor:dynami-comp-classic': compressorVisual(
    'MXR Dyna Comp',
    'MXR Dyna Comp compressor pedal',
    'https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/500x659/products/591/6205/11102000001.MAIN__44037.1663874793.jpg?c=2',
    'Dunlop',
    'https://www.jimdunlop.com/mxr-dyna-comp-compressor/',
  ),
  'compressor:dynami-comp-modern': compressorVisual(
    'MXR Dyna Comp',
    'MXR Dyna Comp compressor pedal',
    'https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/500x659/products/591/6205/11102000001.MAIN__44037.1663874793.jpg?c=2',
    'Dunlop',
    'https://www.jimdunlop.com/mxr-dyna-comp-compressor/',
  ),
  'compressor:dynami-comp-soft': compressorVisual(
    'MXR Dyna Comp',
    'MXR Dyna Comp compressor pedal',
    'https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/500x659/products/591/6205/11102000001.MAIN__44037.1663874793.jpg?c=2',
    'Dunlop',
    'https://www.jimdunlop.com/mxr-dyna-comp-compressor/',
  ),
  'compressor:econo-dyno-comp': compressorVisual(
    'MXR Dyna Comp',
    'MXR Dyna Comp compressor pedal',
    'https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/500x659/products/591/6205/11102000001.MAIN__44037.1663874793.jpg?c=2',
    'Dunlop',
    'https://www.jimdunlop.com/mxr-dyna-comp-compressor/',
  ),
  'compressor:jfet-studio-compressor': compressorVisual(
    'Universal Audio 1176LN',
    'Universal Audio 1176LN compressor',
    'https://www.uaudio.com/cdn/shop/files/1176ln_classic_limiting_amplifier_gallery_1_24f538ee-9b33-46e3-87f0-7aa4c54f58ee.png?crop=center&height=620&v=1742246800&width=620',
    'Universal Audio',
    'https://www.uaudio.com/products/1176ln-classic-limiting-amplifier',
  ),
  'compressor:optical-compressor': compressorVisual(
    'Teletronix LA-2A',
    'Teletronix LA-2A optical compressor',
    'https://www.uaudio.com/cdn/shop/files/teletronix_la-2a_classic_leveling_amplifier_gallery_1_5fa986bf-c28a-4d52-882a-a2a795d257a4.png?crop=center&height=620&v=1742246855&width=620',
    'Universal Audio',
    'https://www.uaudio.com/products/teletronix-la-2a-classic-leveling-amplifier',
  ),
  'compressor:vari-mu-tube-compressor': compressorVisual(
    'Fairchild 660 / 670',
    'Fairchild compressor',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fairchild_Model_670_Compressor.jpg/1280px-Fairchild_Model_670_Compressor.jpg',
    'Wikimedia Commons',
    'https://en.wikipedia.org/wiki/Fairchild_660',
  ),
  'compressor:vca-bus-compressor': compressorVisual(
    'SSL THE BUS+',
    'SSL THE BUS+ compressor',
    'https://solidstatelogic.com/assets/components/phpthumbof/cache/Bus%2B-Straight-Image---2200px.db8845e0fd8e9f93c0c1b7b22382cb67.jpg',
    'Solid State Logic',
    'https://solidstatelogic.com/products/the-bus-plus',
  ),
  ...visualGroup('compressor', [
    'analog-compressor',
    'analog-sustainer',
    'classic-vca-compressor',
    'compander',
    'dynamics-processor',
    'jfet-pedal-compressor',
    'modern-vca-compressor',
    'vca-fb-sustainer',
    'vca-ff-sustainer',
  ], compressorVisual(
    'Fractal Audio Compressor block algorithms',
    'Fractal Audio Compressor block editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/8/86/Compressor_block.PNG/300px-Compressor_block.PNG',
  )),
  'compressor:rockguy-compressor': compressorVisual(
    'Rockman Guitar Compressor',
    'Rockman Guitar Compressor rack module',
    'https://www.rockman.fr/Reviews/GC.jpg',
    'Rockman.fr',
    'https://www.rockman.fr/Reviews/GC.htm',
  ),
  'wahwah:clyde': wahVisual(
    'VOX Real McCoy VRM1 (Clyde McCoy recreation)',
    'VOX Real McCoy wah pedal',
    'https://voxamps.com/wp-content/uploads/2024/01/Vox-Real-McCoy-Wah-pedal-Slant-main.png',
    'VOX',
    'https://voxamps.com/product/real-mccoy-wah-effects-pedal/',
  ),
  'wahwah:color-tone': wahVisual(
    'Sola Colorsound Wah',
    'Colorsound wah pedal',
    'https://www.vintage-guitar.de/img/vintage/1619/Colorsound-Wah-001.JPG',
    'Vintage Guitar',
    'https://www.vintage-guitar.de/fullresolution_1619_en.html',
  ),
  'wahwah:cry-babe': wahVisual(
    'Dunlop Cry Baby',
    'Dunlop Cry Baby wah pedal',
    'https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/500x659/products/583/6157/11095000001.MAIN__82256.1663874792.jpg?c=2',
    'Dunlop',
    'https://www.jimdunlop.com/cry-baby-standard-wah/',
  ),
  'wahwah:mortal': wahVisual(
    'Morley Power Wah Volume',
    'Morley Power Wah Volume pedal',
    'https://www.morleyproducts.com/wp-content/uploads/2019/08/POWER-WAH-VOLUME.jpg',
    'Morley',
    'https://www.morleyproducts.com/2020-power-wah-volume/',
  ),
  'wahwah:paragon': wahVisual(
    'Chicago Iron Parachute Wah / Tycobrahe Parapedal recreation',
    'Chicago Iron Parachute Wah pedal',
    'https://images.equipboard.com/uploads/item/image/27503/chicago-iron-parachute-wah-s.webp?v=1754868145',
    'RockBoard PedalPedia',
    'https://www.rockboard.de/en/pedalPedia/Chicago-Iron/Parachute-Wah/8050930489/',
  ),
  'wahwah:vx845': wahVisual(
    'VOX V845',
    'VOX V845 wah pedal',
    'https://voxamps.com/wp-content/uploads/2019/01/V845-WAH-PEDAL.png',
    'VOX',
    'https://voxamps.com/product/v845-wah-pedal/',
  ),
  'wahwah:vx846': wahVisual(
    'VOX V846-HW',
    'VOX V846-HW wah pedal',
    'https://voxamps.com/wp-content/uploads/2019/01/V846HW-WAH-PEDAL.png',
    'VOX',
    'https://voxamps.com/product/v846-hw-wah-pedal/',
  ),
  'wahwah:fas-wah': wahVisual(
    'Fractal Audio custom wah',
    'Fractal Audio custom wah model',
    'https://wiki.fractalaudio.com/wiki/images/thumb/d/d4/Logo.jpg/100px-Logo.jpg',
  ),
  'wahwah:funk-wah': wahVisual(
    'Shaft-style funk wah',
    'Dunlop Cry Baby wah pedal used as a classic wah reference',
    'https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/500x659/products/583/6157/11095000001.MAIN__82256.1663874792.jpg?c=2',
    'Dunlop',
    'https://www.jimdunlop.com/cry-baby-standard-wah/',
  ),
  ...visualGroup('enhancer', [
    'modern',
    'classic',
    'stereoizer',
  ], enhancerVisual(
    'Fractal Audio Enhancer block',
    'Fractal Audio Enhancer block editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/8/82/Enhancer_block.png/225px-Enhancer_block.png',
  )),
  ...visualGroup('plex-delay', [
    'ambient-depths',
    'bronze-harps',
    'cacophonizer',
    'celestial-shimmer',
    'critters',
    'dancing-detune',
    'delay-swell',
    'demi-semi-delay',
    'detuned-space',
    'detuned-space-2',
    'discrete-echoes',
    'dissolving-16ths',
    'echo-hall',
    'econo-shimmer',
    'econo-shimmer-2',
    'ganymede',
    'gnome-shifter',
    'gold-harps',
    'golden-delay',
    'golden-detune',
    'golden-shimmer',
    'granular-echoes',
    'gritty-shimmer',
    'helium-shimmer',
    'intrigue',
    'lunar-detuner',
    'melting-delays',
    'mod-wash',
    'occult-verb',
    'occult-verb-2',
    'ping-pong-reverse',
    'plex-delay',
    'plex-detune',
    'plex-shift',
    'plex-tape-echoes',
    'plex-verb',
    'reverse-oct-4',
    'reverse-oct-8',
    'reverse-plex',
    'scintillation',
    'shimmer-verb',
    'sirocco',
    'subtone-shimmer',
    'the-cyntherians',
    'sample-hold-delay',
  ], plexDelayVisual(
    'Fractal Audio Plex Delay block',
    'Fractal Audio Plex Delay block editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/c/c9/Plex_Delay_block.png/600px-Plex_Delay_block.png',
  )),
  'multitap-delay:quad-parallel-delay': multitapDelayVisual(
    'Fractal Audio Quad Parallel Delay',
    'Fractal Audio Quad Parallel Delay editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/3/30/Quad-Parallel_Delay.png/400px-Quad-Parallel_Delay.png',
  ),
  'multitap-delay:quad-series-delay': multitapDelayVisual(
    'Fractal Audio Quad Series Delay',
    'Fractal Audio Quad Series Delay editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/a/a6/Quad-Series_Delay.png/450px-Quad-Series_Delay.png',
  ),
  ...visualGroup('multitap-delay', [
    '1210',
    'a-h-clean-long',
    'a-h-clean-short',
    'a-h-lead-long',
    'a-h-lead-short',
    'a-h-swell-long',
    'a-h-swell-short',
    'aerosol',
    'ambient-quad-tape',
    'ambient-tape-delay',
    'aurora-delay',
    'circular-delays',
    'comb-filter-delay',
    'dub-echo',
    'filtered-mod-band-delay',
    'l-c-r-c',
    'md-chorus',
    'mono-diffusor',
    'pcm-circular',
    'pcm-pan',
    'pealing-bells',
    'quad-chorus',
    'quad-diffusor',
    'quad-tape-band-delay',
    'quad-tape-delay',
    'quad-tap-delay',
    'rhythmic-bands',
    'shadows-taps',
    'space-tape',
    'stereo-shadows',
    'swing-ping',
    'ya-ya-delay',
    'matterhorn',
    'centaurus-x-3',
    'kilmanjaro',
    'strange-things',
    'camera-obscura',
  ], multitapDelayVisual(
    'Fractal Audio Multitap Delay block',
    'Fractal Audio Quad-Tap Delay editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/7/7e/Quad-Tap_Delay.png/450px-Quad-Tap_Delay.png',
  )),
  ...visualGroup('megatap', [
    'bounce',
    'bounce-reverb',
    'brute-force-reverb',
    'creaky',
    'deceptions',
    'diffused-ping-pong-echo',
    'diffusion-swirl',
    'echo-room',
    'gated-reverb',
    'late-bloomer',
    'lazer-zaps',
    'megaverb',
    'motion-echoes',
    'ping-pong-echo-verb',
    'reverb-pre-swell',
    'reverse-reverb-echo',
    'serpentine-swells',
    'staccato-spread',
    'tank-taps',
    'tap-verb-grit',
    'tap-verb-plush',
    'take-five',
  ], megatapVisual(
    'Fractal Audio Megatap Delay block',
    'Fractal Audio Megatap Delay editor',
    'https://wiki.fractalaudio.com/wiki/images/thumb/4/4a/Megatap_Delay.png/400px-Megatap_Delay.png',
  )),
  ...visualGroup('ten-tap', [
    'rhythm-tap-delay',
    'ten-tap-delay',
  ], tenTapVisual(
    'Fractal Audio Ten-Tap Delay block',
    'Fractal Audio Quad-Tap Delay editor used as a tap-delay reference',
    'https://wiki.fractalaudio.com/wiki/images/thumb/7/7e/Quad-Tap_Delay.png/450px-Quad-Tap_Delay.png',
    'Fractal Audio Wiki',
    multitapDelayWikiUrl,
  )),
}

export function getEffectVisual(
  blockId: string | undefined,
  typeId: string | undefined,
): EffectVisual | undefined {
  if (!blockId || !typeId) return undefined
  const key = `${blockId}:${typeId}`
  const visual = effectVisuals[key]
  if (!visual || isPlaceholderVisual(visual)) return undefined
  if (blockId === 'amp') return visual
  return realWorldEffectVisualKeys.has(key) ? visual : undefined
}

function isPlaceholderVisual(visual: EffectVisual): boolean {
  const modelName = visual.modelName.toLowerCase()
  const alt = visual.imageAlt.toLowerCase()
  const url = visual.imageUrl.toLowerCase()

  return (
    modelName === 'custom model' ||
    modelName.startsWith('custom model') ||
    modelName.includes('fractal audio custom') ||
    modelName.startsWith('fractal audio ') ||
    modelName.includes('generic tube preamp') ||
    alt.includes('block editor') ||
    alt.includes('algorithm editor') ||
    alt.includes('slope diagram') ||
    url.includes('logo.jpg') ||
    url.includes('logo_small.png') ||
    url.includes('slope.gif') ||
    url.includes('reverbtypes.png') ||
    url.includes('_block') ||
    url.includes('block.png') ||
    url.includes('block_-') ||
    url.includes('quad-tap_delay') ||
    url.includes('quad-parallel_delay') ||
    url.includes('quad-series_delay') ||
    url.includes('megatap_delay') ||
    url.includes('plex_delay_block')
  )
}

function ampVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = ampModelsWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function driveVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = driveWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function delayVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = delayWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function reverbVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = reverbWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function chorusVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = chorusWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function flangerVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = flangerWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function phaserVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = phaserWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function tremoloVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = tremoloWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function rotaryVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = rotaryWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function pitchVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = pitchWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function filterVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = filterWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function graphicEqVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = graphicEqWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function parametricEqVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = parametricEqWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function enhancerVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = enhancerWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function compressorVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = compressorWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function plexDelayVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = plexDelayWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function multitapDelayVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = multitapDelayWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function megatapVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = megatapWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function tenTapVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = tenTapWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function gateVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = gateWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}

function visualGroup(
  blockId: string,
  typeIds: string[],
  visual: EffectVisual,
): Record<string, EffectVisual> {
  return Object.fromEntries(typeIds.map((typeId) => [`${blockId}:${typeId}`, visual]))
}

function wahVisual(
  modelName: string,
  imageAlt: string,
  imageUrl: string,
  sourceName = 'Fractal Audio Wiki',
  sourceUrl = wahWikiUrl,
): EffectVisual {
  return {
    imageAlt,
    imageUrl,
    modelName,
    sourceName,
    sourceUrl,
  }
}
