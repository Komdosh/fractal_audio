// Generated from https://wiki.fractalaudio.com/wiki/index.php?title=Amp_models
// Current wiki parse: 333 Amp models. Keep this data source-only; UI copy lives in blocks.ts.

export interface AmpModel {
  id: string
  name: string
  family: 'American' | 'British' | 'Class A' | 'Boutique' | 'Modern High Gain' | 'Bass' | 'Other'
  basedOn?: string
  imageUrl: string
  imageAlt: string
  imageSourceName?: string
  imageSourceUrl?: string
  originalCab?: string
  matchingDynaCab?: string
  controls: string[]
  powerTubes?: string
}

export const ampModels: AmpModel[] = [
  {
    "id": "5f1-tweed-champlifier",
    "name": "5F1 Tweed Champlifier",
    "family": "American",
    "basedOn": "narrow-panel Fender Tweed Champ, 5F1",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/33/5f1_Fender_t.png/300px-5f1_Fender_t.png",
    "imageAlt": "narrow-panel Fender Tweed Champ, 5F1 amplifier",
    "originalCab": "Fender 1x8",
    "matchingDynaCab": "1x8 5F1 Tweed",
    "controls": [
      "Volume control"
    ],
    "powerTubes": "6V6"
  },
  {
    "id": "5f1-tweed-ec-champlifier",
    "name": "5F1 Tweed EC Champlifier",
    "family": "American",
    "basedOn": "2011 Fender EC Vibro-Champ",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/5/58/EC-Vibro-Champ.jpg",
    "imageAlt": "2011 Fender EC Vibro-Champ amplifier",
    "originalCab": "Fender 1x8",
    "matchingDynaCab": "1x8 5F1 Tweed",
    "controls": [
      "Volume",
      "Tremolo effect"
    ],
    "powerTubes": "6V6"
  },
  {
    "id": "5f8-tweed-bright",
    "name": "5F8 Tweed Bright",
    "family": "American",
    "basedOn": "Keith Urban's 1959 narrow-panel high-power Fender Tweed Twin, 5F8",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/c5/5f8-2.jpg/300px-5f8-2.jpg",
    "imageAlt": "Keith Urban's 1959 narrow-panel high-power Fender Tweed Twin, 5F8 amplifier",
    "originalCab": "Fender 2x12 (P12N). Keith Urban's cab has Two-Rock speakers",
    "matchingDynaCab": "2x12 Double Verb",
    "controls": [
      "Volume Bright",
      "Volume Normal",
      "Presence",
      "Middle",
      "Bass",
      "Treble"
    ],
    "powerTubes": "6L6, cathode follower"
  },
  {
    "id": "5f8-tweed-jumped",
    "name": "5F8 Tweed Jumped",
    "family": "American",
    "basedOn": "Keith Urban's 1959 narrow-panel high-power Fender Tweed Twin, 5F8",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/c5/5f8-2.jpg/300px-5f8-2.jpg",
    "imageAlt": "Keith Urban's 1959 narrow-panel high-power Fender Tweed Twin, 5F8 amplifier",
    "originalCab": "Fender 2x12 (P12N). Keith Urban's cab has Two-Rock speakers",
    "matchingDynaCab": "2x12 Double Verb",
    "controls": [
      "Volume Bright",
      "Volume Normal",
      "Presence",
      "Middle",
      "Bass",
      "Treble"
    ],
    "powerTubes": "6L6, cathode follower"
  },
  {
    "id": "5f8-tweed-normal",
    "name": "5F8 Tweed Normal",
    "family": "American",
    "basedOn": "Keith Urban's 1959 narrow-panel high-power Fender Tweed Twin, 5F8",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/c5/5f8-2.jpg/300px-5f8-2.jpg",
    "imageAlt": "Keith Urban's 1959 narrow-panel high-power Fender Tweed Twin, 5F8 amplifier",
    "originalCab": "Fender 2x12 (P12N). Keith Urban's cab has Two-Rock speakers",
    "matchingDynaCab": "2x12 Double Verb",
    "controls": [
      "Volume Bright",
      "Volume Normal",
      "Presence",
      "Middle",
      "Bass",
      "Treble"
    ],
    "powerTubes": "6L6, cathode follower"
  },
  {
    "id": "6g4-super",
    "name": "6G4 Super",
    "family": "American",
    "basedOn": "1960 brownface Fender Super, 6G4",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/fb/6G4.jpg/300px-6G4.jpg",
    "imageAlt": "1960 brownface Fender Super, 6G4 amplifier",
    "originalCab": "Fender 2x10 with Jensen Alnico 25W P10R, 40W P10Q, Oxford 10K5, or Fender 2x12",
    "matchingDynaCab": "2x10 Super 6G4",
    "controls": [
      "Volume",
      "Bass",
      "Treble",
      "Presence",
      "Vibrato effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "6g12-concert",
    "name": "6G12 Concert",
    "family": "American",
    "basedOn": "1960 brownface Fender Concert, 6G12",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/77/6G12.jpg/300px-6G12.jpg",
    "imageAlt": "1960 brownface Fender Concert, 6G12 amplifier",
    "originalCab": "Fender 4x10 with Jensen Alnico 25W P10R or 40W P10Q, ceramic 25W C10R, or Oxford",
    "matchingDynaCab": "4x10 Bassguy RI",
    "controls": [
      "Volume",
      "Bass",
      "Treble",
      "Presence",
      "Vibrato effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "59-bassguy-bright",
    "name": "59 Bassguy Bright",
    "family": "American",
    "basedOn": "1959 narrow-panel Fender Tweed Bassman, 5F6-A",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/6/68/Bassman.jpg",
    "imageAlt": "1959 narrow-panel Fender Tweed Bassman, 5F6-A amplifier",
    "originalCab": "Fender 4x10 with Jensen Alnico 25W P10R or 40W P10Q",
    "matchingDynaCab": "4x10 Bassguy RI",
    "controls": [
      "Volume Normal",
      "Volume Bright",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "6L6/5881, cathode follower"
  },
  {
    "id": "59-bassguy-jumped",
    "name": "59 Bassguy Jumped",
    "family": "American",
    "basedOn": "1959 narrow-panel Fender Tweed Bassman, 5F6-A",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/6/68/Bassman.jpg",
    "imageAlt": "1959 narrow-panel Fender Tweed Bassman, 5F6-A amplifier",
    "originalCab": "Fender 4x10 with Jensen Alnico 25W P10R or 40W P10Q",
    "matchingDynaCab": "4x10 Bassguy RI",
    "controls": [
      "Volume Normal",
      "Volume Bright",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "6L6/5881, cathode follower"
  },
  {
    "id": "59-bassguy-normal",
    "name": "59 Bassguy Normal",
    "family": "American",
    "basedOn": "1959 narrow-panel Fender Tweed Bassman, 5F6-A",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/6/68/Bassman.jpg",
    "imageAlt": "1959 narrow-panel Fender Tweed Bassman, 5F6-A amplifier",
    "originalCab": "Fender 4x10 with Jensen Alnico 25W P10R or 40W P10Q",
    "matchingDynaCab": "4x10 Bassguy RI",
    "controls": [
      "Volume Normal",
      "Volume Bright",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "6L6/5881, cathode follower"
  },
  {
    "id": "59-bassguy-ri-jumped",
    "name": "59 Bassguy RI Jumped",
    "family": "American",
    "basedOn": "Fender 59 Bassman LTD Vintage Reissue",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/1/19/FENDER_BASSMAN_RI.jpg/275px-FENDER_BASSMAN_RI.jpg",
    "imageAlt": "Fender 59 Bassman LTD Vintage Reissue amplifier",
    "originalCab": "Fender 4x10 with Jensen Alnico 25W P10R or 40W P10Q",
    "matchingDynaCab": "4x10 Bassguy RI",
    "controls": [
      "Volume Normal",
      "Volume Bright",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "65-bassguy-bass",
    "name": "65 Bassguy Bass",
    "family": "Bass",
    "basedOn": "1965 blackface Fender Bassman head, AB165",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f3/Ab165.png/300px-Ab165.png",
    "imageAlt": "1965 blackface Fender Bassman head, AB165 amplifier",
    "originalCab": "Fender 2x12 (Oxford)",
    "matchingDynaCab": "2x12 65 Bassguy",
    "controls": [
      "Volume",
      "Bass",
      "Treble",
      "Bright switch (Normal channel only)"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "65-bassguy-normal",
    "name": "65 Bassguy Normal",
    "family": "American",
    "basedOn": "1965 blackface Fender Bassman head, AB165",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f3/Ab165.png/300px-Ab165.png",
    "imageAlt": "1965 blackface Fender Bassman head, AB165 amplifier",
    "originalCab": "Fender 2x12 (Oxford)",
    "matchingDynaCab": "2x12 65 Bassguy",
    "controls": [
      "Volume",
      "Bass",
      "Treble",
      "Bright switch (Normal channel only)"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "1959slp-jumped",
    "name": "1959SLP Jumped",
    "family": "British",
    "basedOn": "100W Marshall Super Lead Plexi 1959 reissue",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d5/SLP.png/300px-SLP.png",
    "imageAlt": "100W Marshall Super Lead Plexi 1959 reissue amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Volume Normal",
      "Volume Treble",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "1959slp-normal",
    "name": "1959SLP Normal",
    "family": "British",
    "basedOn": "100W Marshall Super Lead Plexi 1959 reissue",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d5/SLP.png/300px-SLP.png",
    "imageAlt": "100W Marshall Super Lead Plexi 1959 reissue amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Volume Normal",
      "Volume Treble",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "1959slp-treble",
    "name": "1959SLP Treble",
    "family": "British",
    "basedOn": "100W Marshall Super Lead Plexi 1959 reissue",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d5/SLP.png/300px-SLP.png",
    "imageAlt": "100W Marshall Super Lead Plexi 1959 reissue amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Volume Normal",
      "Volume Treble",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "1987x-jumped",
    "name": "1987X Jumped",
    "family": "British",
    "basedOn": "50W Marshall 1987X reissue",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/b/b1/1987X.png/300px-1987X.png",
    "imageAlt": "50W Marshall 1987X reissue amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Volume Normal",
      "Volume Treble",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "1987x-normal",
    "name": "1987X Normal",
    "family": "British",
    "basedOn": "50W Marshall 1987X reissue",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/b/b1/1987X.png/300px-1987X.png",
    "imageAlt": "50W Marshall 1987X reissue amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Volume Normal",
      "Volume Treble",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "1987x-treble",
    "name": "1987X Treble",
    "family": "British",
    "basedOn": "50W Marshall 1987X reissue",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/b/b1/1987X.png/300px-1987X.png",
    "imageAlt": "50W Marshall 1987X reissue amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Volume Normal",
      "Volume Treble",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "5153-100w-blue",
    "name": "5153 100W Blue",
    "family": "Modern High Gain",
    "basedOn": "EVH 5150-III",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/0/04/5153.png/300px-5153.png",
    "imageAlt": "EVH 5150-III amplifier",
    "originalCab": "5150 4x12, 2x12 (G12H, G12EVH)",
    "matchingDynaCab": "4x12 5153, 2x12 5153 Stealth",
    "controls": [
      "Gain",
      "Low",
      "Mid",
      "High",
      "Volume",
      "Presence",
      "Resonance",
      "Depth (50w",
      "Stealth models only)"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "5153-100w-green",
    "name": "5153 100W Green",
    "family": "Modern High Gain",
    "basedOn": "EVH 5150-III",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/0/04/5153.png/300px-5153.png",
    "imageAlt": "EVH 5150-III amplifier",
    "originalCab": "5150 4x12, 2x12 (G12H, G12EVH)",
    "matchingDynaCab": "4x12 5153, 2x12 5153 Stealth",
    "controls": [
      "Gain",
      "Low",
      "Mid",
      "High",
      "Volume",
      "Presence",
      "Resonance",
      "Depth (50w",
      "Stealth models only)"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "5153-100w-red",
    "name": "5153 100W Red",
    "family": "Modern High Gain",
    "basedOn": "EVH 5150-III",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/0/04/5153.png/300px-5153.png",
    "imageAlt": "EVH 5150-III amplifier",
    "originalCab": "5150 4x12, 2x12 (G12H, G12EVH)",
    "matchingDynaCab": "4x12 5153, 2x12 5153 Stealth",
    "controls": [
      "Gain",
      "Low",
      "Mid",
      "High",
      "Volume",
      "Presence",
      "Resonance",
      "Depth (50w",
      "Stealth models only)"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "5153-100w-stealth-blue",
    "name": "5153 100W Stealth Blue",
    "family": "Modern High Gain",
    "basedOn": "EVH 5150III 100S 100W",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/fd/5153S.jpg/300px-5153S.jpg",
    "imageAlt": "EVH 5150III 100S 100W amplifier",
    "controls": []
  },
  {
    "id": "5153-100w-stealth-green",
    "name": "5153 100W Stealth Green",
    "family": "Modern High Gain",
    "basedOn": "EVH 5150III 100S 100W",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/fd/5153S.jpg/300px-5153S.jpg",
    "imageAlt": "EVH 5150III 100S 100W amplifier",
    "controls": []
  },
  {
    "id": "5153-100w-stealth-red",
    "name": "5153 100W Stealth Red",
    "family": "Modern High Gain",
    "basedOn": "EVH 5150III 100S 100W",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/fd/5153S.jpg/300px-5153S.jpg",
    "imageAlt": "EVH 5150III 100S 100W amplifier",
    "controls": []
  },
  {
    "id": "5153-50w-blue",
    "name": "5153 50W Blue",
    "family": "Modern High Gain",
    "basedOn": "EVH 5150III 100S 100W",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/fd/5153S.jpg/300px-5153S.jpg",
    "imageAlt": "EVH 5150III 100S 100W amplifier",
    "controls": []
  },
  {
    "id": "ac-20-12ax7-bass",
    "name": "AC-20 12AX7 Bass",
    "family": "Bass",
    "basedOn": "Morgan AC20 Deluxe",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/6/6f/Morgan.jpg",
    "imageAlt": "Morgan AC20 Deluxe amplifier",
    "originalCab": "Morgan 1x12 (G12 Alnico Blue)",
    "matchingDynaCab": "1x12 AC20",
    "controls": [
      "Volume",
      "Cut",
      "Sun",
      "Moon switch (= Bright switch)",
      "Brilliance switch (= Bass Cut)",
      "power scaling",
      "EF86",
      "12AX7 switch"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "ac-20-12ax7-treble",
    "name": "AC-20 12AX7 Treble",
    "family": "American",
    "basedOn": "Morgan AC20 Deluxe",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/6/6f/Morgan.jpg",
    "imageAlt": "Morgan AC20 Deluxe amplifier",
    "originalCab": "Morgan 1x12 (G12 Alnico Blue)",
    "matchingDynaCab": "1x12 AC20",
    "controls": [
      "Volume",
      "Cut",
      "Sun",
      "Moon switch (= Bright switch)",
      "Brilliance switch (= Bass Cut)",
      "power scaling",
      "EF86",
      "12AX7 switch"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "ac-20-ef86-bass",
    "name": "AC-20 EF86 Bass",
    "family": "Bass",
    "basedOn": "Morgan AC20 Deluxe",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/6/6f/Morgan.jpg",
    "imageAlt": "Morgan AC20 Deluxe amplifier",
    "originalCab": "Morgan 1x12 (G12 Alnico Blue)",
    "matchingDynaCab": "1x12 AC20",
    "controls": [
      "Volume",
      "Cut",
      "Sun",
      "Moon switch (= Bright switch)",
      "Brilliance switch (= Bass Cut)",
      "power scaling",
      "EF86",
      "12AX7 switch"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "ac-20-ef86-treble",
    "name": "AC-20 EF86 Treble",
    "family": "American",
    "basedOn": "Morgan AC20 Deluxe",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/6/6f/Morgan.jpg",
    "imageAlt": "Morgan AC20 Deluxe amplifier",
    "originalCab": "Morgan 1x12 (G12 Alnico Blue)",
    "matchingDynaCab": "1x12 AC20",
    "controls": [
      "Volume",
      "Cut",
      "Sun",
      "Moon switch (= Bright switch)",
      "Brilliance switch (= Bass Cut)",
      "power scaling",
      "EF86",
      "12AX7 switch"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "angle-severe-1",
    "name": "Angle Severe 1",
    "family": "Modern High Gain",
    "basedOn": "Engl Savage 120",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/39/Savage.png/300px-Savage.png",
    "imageAlt": "Engl Savage 120 amplifier",
    "originalCab": "Engl 4x12 (V30, V60)",
    "matchingDynaCab": "4x12 Recto Straight",
    "controls": [],
    "powerTubes": "6550"
  },
  {
    "id": "angle-severe-2",
    "name": "Angle Severe 2",
    "family": "Modern High Gain",
    "basedOn": "Engl Savage 120",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/39/Savage.png/300px-Savage.png",
    "imageAlt": "Engl Savage 120 amplifier",
    "originalCab": "Engl 4x12 (V30, V60)",
    "matchingDynaCab": "4x12 Recto Straight",
    "controls": [],
    "powerTubes": "6550"
  },
  {
    "id": "archean",
    "name": "Archean",
    "family": "Modern High Gain",
    "basedOn": "100W PRS Archon",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d0/Archon.jpg/325px-Archon.jpg",
    "imageAlt": "100W PRS Archon amplifier",
    "originalCab": "Celestion V-Type",
    "matchingDynaCab": "4x12 Friedman GB",
    "controls": [
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Bright switch",
      "Volume",
      "Depth",
      "Presence",
      "Output Power"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "archean-bright",
    "name": "Archean Bright",
    "family": "Modern High Gain",
    "basedOn": "100W PRS Archon",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d0/Archon.jpg/325px-Archon.jpg",
    "imageAlt": "100W PRS Archon amplifier",
    "originalCab": "Celestion V-Type",
    "matchingDynaCab": "4x12 Friedman GB",
    "controls": [
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Bright switch",
      "Volume",
      "Depth",
      "Presence",
      "Output Power"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "archean-clean",
    "name": "Archean Clean",
    "family": "Modern High Gain",
    "basedOn": "100W PRS Archon",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d0/Archon.jpg/325px-Archon.jpg",
    "imageAlt": "100W PRS Archon amplifier",
    "originalCab": "Celestion V-Type",
    "matchingDynaCab": "4x12 Friedman GB",
    "controls": [
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Bright switch",
      "Volume",
      "Depth",
      "Presence",
      "Output Power"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "atomica-high",
    "name": "Atomica High",
    "family": "Boutique",
    "basedOn": "Cameron Atomica",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/e/e4/Atomica.jpg/300px-Atomica.jpg",
    "imageAlt": "Cameron Atomica amplifier",
    "originalCab": "cab with G12H speakers",
    "matchingDynaCab": "4x12 5153",
    "controls": [
      "Thump",
      "Depth",
      "Presence",
      "Bass",
      "Middle",
      "Treble",
      "Master",
      "Gain",
      "Edge (= Bright switch)",
      "3-way Gain Voice switch"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "atomica-low",
    "name": "Atomica Low",
    "family": "Boutique",
    "basedOn": "Cameron Atomica",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/e/e4/Atomica.jpg/300px-Atomica.jpg",
    "imageAlt": "Cameron Atomica amplifier",
    "originalCab": "cab with G12H speakers",
    "matchingDynaCab": "4x12 5153",
    "controls": [
      "Thump",
      "Depth",
      "Presence",
      "Bass",
      "Middle",
      "Treble",
      "Master",
      "Gain",
      "Edge (= Bright switch)",
      "3-way Gain Voice switch"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "band-commander",
    "name": "Band-Commander",
    "family": "American",
    "basedOn": "1968 silverface/blackface Fender Bandmaster head, AB763",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/7c/Bandmaster.jpg/300px-Bandmaster.jpg",
    "imageAlt": "1968 silverface/blackface Fender Bandmaster head, AB763 amplifier",
    "originalCab": "Fender 2x12",
    "matchingDynaCab": "2x12 65 Bassguy",
    "controls": [
      "Bright switch",
      "Treble",
      "Bass",
      "Tremolo effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "big-hair",
    "name": "Big Hair",
    "family": "Other",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "blankenship-leeds",
    "name": "Blankenship Leeds",
    "family": "Boutique",
    "basedOn": "Dweezil Zappa's Blankenship Leeds 21",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/30/Blankenship.jpg/300px-Blankenship.jpg",
    "imageAlt": "Dweezil Zappa's Blankenship Leeds 21 amplifier",
    "originalCab": "2x10, 1x12, 2x12 (G12M)",
    "matchingDynaCab": "1x12 Div13 CJ11",
    "controls": [
      "Volume",
      "Tone",
      "Tremolo effect"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "bludojai-clean",
    "name": "Bludojai Clean",
    "family": "Boutique",
    "basedOn": "Bludotone Ojai",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/1/1b/Bludotone_2.jpg/350px-Bludotone_2.jpg",
    "imageAlt": "Bludotone Ojai amplifier",
    "originalCab": "Bludotone 1x12, 2x12 (G12-65, EVM)",
    "matchingDynaCab": "4x12 Rumble EV12L",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "bludojai-lead",
    "name": "Bludojai Lead",
    "family": "Boutique",
    "basedOn": "Bludotone Ojai",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/1/1b/Bludotone_2.jpg/350px-Bludotone_2.jpg",
    "imageAlt": "Bludotone Ojai amplifier",
    "originalCab": "Bludotone 1x12, 2x12 (G12-65, EVM)",
    "matchingDynaCab": "4x12 Rumble EV12L",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "bludojai-lead-pab",
    "name": "Bludojai Lead PAB",
    "family": "Boutique",
    "basedOn": "Bludotone Ojai",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/1/1b/Bludotone_2.jpg/350px-Bludotone_2.jpg",
    "imageAlt": "Bludotone Ojai amplifier",
    "originalCab": "Bludotone 1x12, 2x12 (G12-65, EVM)",
    "matchingDynaCab": "4x12 Rumble EV12L",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "bogfish-brown",
    "name": "Bogfish Brown",
    "family": "Boutique",
    "basedOn": "Bogner Fish preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/fb/Fish.png/300px-Fish.png",
    "imageAlt": "Bogner Fish preamp amplifier",
    "controls": [
      "Master",
      "Gain",
      "Bass",
      "Mid",
      "Treble"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "bogfish-strato",
    "name": "Bogfish Strato",
    "family": "Boutique",
    "basedOn": "Bogner Fish preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/fb/Fish.png/300px-Fish.png",
    "imageAlt": "Bogner Fish preamp amplifier",
    "controls": [
      "Master",
      "Gain",
      "Bass",
      "Mid",
      "Treble"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-800-2204-high",
    "name": "Brit 800 2204 High",
    "family": "British",
    "basedOn": "50W Marshall JCM 800 2204",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/93/2203.png/325px-2203.png",
    "imageAlt": "50W Marshall JCM 800 2204 amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H, G12-75, V30)",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Pre-amp Volume",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Master"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-800-2204-low",
    "name": "Brit 800 2204 Low",
    "family": "British",
    "basedOn": "50W Marshall JCM 800 2204",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/93/2203.png/325px-2203.png",
    "imageAlt": "50W Marshall JCM 800 2204 amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H, G12-75, V30)",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Pre-amp Volume",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Master"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-800-2203-high",
    "name": "Brit 800 2203 High",
    "family": "British",
    "basedOn": "100W Marshall JCM 800 2203 JMP",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/0/05/JCM8002203.jpg/300px-JCM8002203.jpg",
    "imageAlt": "100W Marshall JCM 800 2203 JMP amplifier",
    "originalCab": "Marshall 4x12 (G12M)",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Presence",
      "Bass",
      "Middle",
      "Treble",
      "Master Volume",
      "Pre-Amp Volume"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-800-2203-low",
    "name": "Brit 800 2203 Low",
    "family": "British",
    "basedOn": "100W Marshall JCM 800 2203 JMP",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/0/05/JCM8002203.jpg/300px-JCM8002203.jpg",
    "imageAlt": "100W Marshall JCM 800 2203 JMP amplifier",
    "originalCab": "Marshall 4x12 (G12M)",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Presence",
      "Bass",
      "Middle",
      "Treble",
      "Master Volume",
      "Pre-Amp Volume"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-800-sharp-34",
    "name": "Brit 800 #34",
    "family": "British",
    "basedOn": "50W Marshall JCM 800 with Santiago #34 modifications",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "50W Marshall JCM 800 with Santiago #34 modifications amplifier",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-800-mod",
    "name": "Brit 800 Mod",
    "family": "British",
    "basedOn": "50W Marshall JCM 800 with modifications",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "50W Marshall JCM 800 with modifications amplifier",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-800-studio-20",
    "name": "Brit 800 Studio 20",
    "family": "British",
    "basedOn": "Marshall Studio Classic SC20H",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/cb/JCM800_STUDIO_20.jpg/300px-JCM800_STUDIO_20.jpg",
    "imageAlt": "Marshall Studio Classic SC20H amplifier",
    "controls": [
      "Gain",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Master"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-afs100-1",
    "name": "Brit AFS100 1",
    "family": "British",
    "basedOn": "Marshall AFD100SCE",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/5/58/AFD.jpg/300px-AFD.jpg",
    "imageAlt": "Marshall AFD100SCE amplifier",
    "originalCab": "Marshall 4x12 (V30)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [
      "Gain",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Master",
      "#34",
      "AFD switch",
      "Depth (Brit Super model only)"
    ],
    "powerTubes": "6550"
  },
  {
    "id": "brit-afs100-2",
    "name": "Brit AFS100 2",
    "family": "British",
    "basedOn": "Marshall AFD100SCE",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/5/58/AFD.jpg/300px-AFD.jpg",
    "imageAlt": "Marshall AFD100SCE amplifier",
    "originalCab": "Marshall 4x12 (V30)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [
      "Gain",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Master",
      "#34",
      "AFD switch",
      "Depth (Brit Super model only)"
    ],
    "powerTubes": "6550"
  },
  {
    "id": "brit-brown",
    "name": "Brit Brown",
    "family": "British",
    "basedOn": "custom model: Plexi \"Brown Sound\"",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model: Plexi \"Brown Sound\" amplifier",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-jm45",
    "name": "Brit JM45",
    "family": "British",
    "basedOn": "Marshall JTM 45",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/74/JTM.png/300px-JTM.png",
    "imageAlt": "Marshall JTM 45 amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Volume Normal",
      "Volume High Treble",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-jm45-jumped",
    "name": "Brit JM45 Jumped",
    "family": "British",
    "basedOn": "Marshall JTM 45",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/74/JTM.png/300px-JTM.png",
    "imageAlt": "Marshall JTM 45 amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Volume Normal",
      "Volume High Treble",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-jvm-od1-green",
    "name": "Brit JVM OD1 Green",
    "family": "British",
    "basedOn": "Marshall JVM410H",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/98/Jvm.png/300px-Jvm.png",
    "imageAlt": "Marshall JVM410H amplifier",
    "originalCab": "Marshall 4x12 G12T75 [122]",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Gain",
      "Presence",
      "Resonance",
      "Depth",
      "Reverb effect"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-jvm-od1-orange",
    "name": "Brit JVM OD1 Orange",
    "family": "British",
    "basedOn": "Marshall JVM410H",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/98/Jvm.png/300px-Jvm.png",
    "imageAlt": "Marshall JVM410H amplifier",
    "originalCab": "Marshall 4x12 G12T75 [122]",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Gain",
      "Presence",
      "Resonance",
      "Depth",
      "Reverb effect"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-jvm-od1-red",
    "name": "Brit JVM OD1 Red",
    "family": "British",
    "basedOn": "Marshall JVM410H",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/98/Jvm.png/300px-Jvm.png",
    "imageAlt": "Marshall JVM410H amplifier",
    "originalCab": "Marshall 4x12 G12T75 [122]",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Gain",
      "Presence",
      "Resonance",
      "Depth",
      "Reverb effect"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-jvm-od2-green",
    "name": "Brit JVM OD2 Green",
    "family": "British",
    "basedOn": "Marshall JVM410H",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/98/Jvm.png/300px-Jvm.png",
    "imageAlt": "Marshall JVM410H amplifier",
    "originalCab": "Marshall 4x12 G12T75 [122]",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Gain",
      "Presence",
      "Resonance",
      "Depth",
      "Reverb effect"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-jvm-od2-orange",
    "name": "Brit JVM OD2 Orange",
    "family": "British",
    "basedOn": "Marshall JVM410H",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/98/Jvm.png/300px-Jvm.png",
    "imageAlt": "Marshall JVM410H amplifier",
    "originalCab": "Marshall 4x12 G12T75 [122]",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Gain",
      "Presence",
      "Resonance",
      "Depth",
      "Reverb effect"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-jvm-od2-red",
    "name": "Brit JVM OD2 Red",
    "family": "British",
    "basedOn": "Marshall JVM410H",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/98/Jvm.png/300px-Jvm.png",
    "imageAlt": "Marshall JVM410H amplifier",
    "originalCab": "Marshall 4x12 G12T75 [122]",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Gain",
      "Presence",
      "Resonance",
      "Depth",
      "Reverb effect"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-pre",
    "name": "Brit Pre",
    "family": "British",
    "basedOn": "Marshall JMP-1 preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/2/27/Cliff_JMP-1.jpg/300px-Cliff_JMP-1.jpg",
    "imageAlt": "Marshall JMP-1 preamp amplifier",
    "controls": [
      "Volume",
      "Gain",
      "Bass",
      "Mid",
      "Treble",
      "Presence",
      "Bass Shift"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-silver",
    "name": "Brit Silver",
    "family": "British",
    "basedOn": "Marshall Silver Jubilee, previously: Lerxst Omega",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/98/Silver_Jubilee.jpg/300px-Silver_Jubilee.jpg",
    "imageAlt": "Marshall Silver Jubilee, previously: Lerxst Omega amplifier",
    "originalCab": "Marshall 4x12 (V30)",
    "matchingDynaCab": "4x12 Lerxst",
    "controls": [
      "Presence",
      "Bass",
      "Middle",
      "Treble",
      "Gain",
      "Master"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "brit-super",
    "name": "Brit Super",
    "family": "British",
    "basedOn": "Marshall AFD100 schematics",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/5/58/AFD.jpg/300px-AFD.jpg",
    "imageAlt": "Marshall AFD100 schematics amplifier",
    "controls": [
      "Marshall AFD100 in AFD mode",
      "based on schematics only"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "buddah-duomaster",
    "name": "Buddah Duomaster",
    "family": "Boutique",
    "basedOn": "Budda Twinmaster",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/39/Budda_Twinmaster.jpg/250px-Budda_Twinmaster.jpg",
    "imageAlt": "Budda Twinmaster amplifier",
    "originalCab": "1x15 Budda Phat 15, 1x12 Budda Phat 12",
    "matchingDynaCab": "2x12 Double Verb",
    "controls": [
      "Bass",
      "Treble",
      "Volume"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "ca3-plus-clean",
    "name": "Ca3+ Clean",
    "family": "Other",
    "basedOn": "Custom Audio Amplifiers 3+ SE preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3e/CAE.png/300px-CAE.png",
    "imageAlt": "Custom Audio Amplifiers 3+ SE preamp amplifier",
    "controls": [
      "Gain",
      "Bass",
      "Middle",
      "Treble",
      "Master",
      "Bass"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "ca3-plus-lead",
    "name": "Ca3+ Lead",
    "family": "Other",
    "basedOn": "Custom Audio Amplifiers 3+ SE preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3e/CAE.png/300px-CAE.png",
    "imageAlt": "Custom Audio Amplifiers 3+ SE preamp amplifier",
    "controls": [
      "Gain",
      "Bass",
      "Middle",
      "Treble",
      "Master",
      "Bass"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "ca3-plus-rhythm",
    "name": "Ca3+ Rhythm",
    "family": "Other",
    "basedOn": "Custom Audio Amplifiers 3+ SE preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3e/CAE.png/300px-CAE.png",
    "imageAlt": "Custom Audio Amplifiers 3+ SE preamp amplifier",
    "controls": [
      "Gain",
      "Bass",
      "Middle",
      "Treble",
      "Master",
      "Bass"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "cameron-ccv-1a",
    "name": "Cameron CCV 1A",
    "family": "Boutique",
    "basedOn": "Cameron CCV-100",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f7/Ccv.jpg/300px-Ccv.jpg",
    "imageAlt": "Cameron CCV-100 amplifier",
    "controls": [
      "The 2C"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "cameron-ccv-1b",
    "name": "Cameron CCV 1B",
    "family": "Boutique",
    "basedOn": "Cameron CCV-100",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f7/Ccv.jpg/300px-Ccv.jpg",
    "imageAlt": "Cameron CCV-100 amplifier",
    "controls": [
      "The 2C"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "cameron-ccv-2a",
    "name": "Cameron CCV 2A",
    "family": "Boutique",
    "basedOn": "Cameron CCV-100",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f7/Ccv.jpg/300px-Ccv.jpg",
    "imageAlt": "Cameron CCV-100 amplifier",
    "controls": [
      "The 2C"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "cameron-ccv-2b",
    "name": "Cameron CCV 2B",
    "family": "Boutique",
    "basedOn": "Cameron CCV-100",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f7/Ccv.jpg/300px-Ccv.jpg",
    "imageAlt": "Cameron CCV-100 amplifier",
    "controls": [
      "The 2C"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "cameron-ccv-2c",
    "name": "Cameron CCV 2C",
    "family": "Boutique",
    "basedOn": "Cameron CCV-100",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f7/Ccv.jpg/300px-Ccv.jpg",
    "imageAlt": "Cameron CCV-100 amplifier",
    "controls": [
      "The 2C"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "cameron-ccv-2d",
    "name": "Cameron CCV 2D",
    "family": "Boutique",
    "basedOn": "Cameron CCV-100",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f7/Ccv.jpg/300px-Ccv.jpg",
    "imageAlt": "Cameron CCV-100 amplifier",
    "controls": [
      "The 2C"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "capt-hook-1a",
    "name": "Capt Hook 1A",
    "family": "Boutique",
    "basedOn": "Hook Captain 34",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/91/Capt34.jpg/300px-Capt34.jpg",
    "imageAlt": "Hook Captain 34 amplifier",
    "originalCab": "Hook 2x12 or 4x12 (V30, G12H, G12-65, WGS)",
    "matchingDynaCab": "2x12 5153 Stealth",
    "controls": [
      "Channels 2",
      "Level",
      "Bass",
      "Mid",
      "Treble",
      "Boost switch",
      "Balls"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "capt-hook-1b",
    "name": "Capt Hook 1B",
    "family": "Boutique",
    "basedOn": "Hook Captain 34",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/91/Capt34.jpg/300px-Capt34.jpg",
    "imageAlt": "Hook Captain 34 amplifier",
    "originalCab": "Hook 2x12 or 4x12 (V30, G12H, G12-65, WGS)",
    "matchingDynaCab": "2x12 5153 Stealth",
    "controls": [
      "Channels 2",
      "Level",
      "Bass",
      "Mid",
      "Treble",
      "Boost switch",
      "Balls"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "capt-hook-2a",
    "name": "Capt Hook 2A",
    "family": "Boutique",
    "basedOn": "Hook Captain 34",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/91/Capt34.jpg/300px-Capt34.jpg",
    "imageAlt": "Hook Captain 34 amplifier",
    "originalCab": "Hook 2x12 or 4x12 (V30, G12H, G12-65, WGS)",
    "matchingDynaCab": "2x12 5153 Stealth",
    "controls": [
      "Channels 2",
      "Level",
      "Bass",
      "Mid",
      "Treble",
      "Boost switch",
      "Balls"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "capt-hook-2b",
    "name": "Capt Hook 2B",
    "family": "Boutique",
    "basedOn": "Hook Captain 34",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/91/Capt34.jpg/300px-Capt34.jpg",
    "imageAlt": "Hook Captain 34 amplifier",
    "originalCab": "Hook 2x12 or 4x12 (V30, G12H, G12-65, WGS)",
    "matchingDynaCab": "2x12 5153 Stealth",
    "controls": [
      "Channels 2",
      "Level",
      "Bass",
      "Mid",
      "Treble",
      "Boost switch",
      "Balls"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "capt-hook-3a",
    "name": "Capt Hook 3A",
    "family": "Boutique",
    "basedOn": "Hook Captain 34",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/91/Capt34.jpg/300px-Capt34.jpg",
    "imageAlt": "Hook Captain 34 amplifier",
    "originalCab": "Hook 2x12 or 4x12 (V30, G12H, G12-65, WGS)",
    "matchingDynaCab": "2x12 5153 Stealth",
    "controls": [
      "Channels 2",
      "Level",
      "Bass",
      "Mid",
      "Treble",
      "Boost switch",
      "Balls"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "capt-hook-3b",
    "name": "Capt Hook 3B",
    "family": "Boutique",
    "basedOn": "Hook Captain 34",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/91/Capt34.jpg/300px-Capt34.jpg",
    "imageAlt": "Hook Captain 34 amplifier",
    "originalCab": "Hook 2x12 or 4x12 (V30, G12H, G12-65, WGS)",
    "matchingDynaCab": "2x12 5153 Stealth",
    "controls": [
      "Channels 2",
      "Level",
      "Bass",
      "Mid",
      "Treble",
      "Boost switch",
      "Balls"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "car-ambler",
    "name": "Car Ambler",
    "family": "Boutique",
    "basedOn": "Carr Rambler",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/6/6c/Rambler.jpg/300px-Rambler.jpg",
    "imageAlt": "Carr Rambler amplifier",
    "originalCab": "Carr 1x12 (Eminence Elsinore)",
    "matchingDynaCab": "1x12 Car Ambler",
    "controls": [
      "Volume",
      "Treble",
      "Middle",
      "Bass",
      "Pentode",
      "Triode",
      "Reverb effect",
      "Tremolo effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "carol-ann-od-2",
    "name": "Carol-Ann OD-2",
    "family": "Boutique",
    "basedOn": "Carol-Ann OD-2",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/98/Od2.jpg/300px-Od2.jpg",
    "imageAlt": "Carol-Ann OD-2 amplifier",
    "originalCab": "EV-12L, Classic Lead 80, Scholz",
    "matchingDynaCab": "1x12 Scholz",
    "controls": [
      "Master",
      "Pre Gain",
      "Drive",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Sparkle",
      "Shift switch"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "carol-ann-triptik-classic",
    "name": "Carol-Ann Triptik Classic",
    "family": "Boutique",
    "basedOn": "Carol-Ann Triptik",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/6/69/Triptik.jpg/350px-Triptik.jpg",
    "imageAlt": "Carol-Ann Triptik amplifier",
    "originalCab": "Carol-Ann 1x12 (Scholz Classic)",
    "matchingDynaCab": "1x12 Scholz",
    "controls": [
      "Input Level",
      "Drive on channels 2",
      "3",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Master",
      "Classic",
      "Modern voice switch"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "carol-ann-triptik-clean",
    "name": "Carol-Ann Triptik Clean",
    "family": "Boutique",
    "basedOn": "Carol-Ann Triptik",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/6/69/Triptik.jpg/350px-Triptik.jpg",
    "imageAlt": "Carol-Ann Triptik amplifier",
    "originalCab": "Carol-Ann 1x12 (Scholz Classic)",
    "matchingDynaCab": "1x12 Scholz",
    "controls": [
      "Input Level",
      "Drive on channels 2",
      "3",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Master",
      "Classic",
      "Modern voice switch"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "carol-ann-triptik-modern",
    "name": "Carol-Ann Triptik Modern",
    "family": "Boutique",
    "basedOn": "Carol-Ann Triptik",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/6/69/Triptik.jpg/350px-Triptik.jpg",
    "imageAlt": "Carol-Ann Triptik amplifier",
    "originalCab": "Carol-Ann 1x12 (Scholz Classic)",
    "matchingDynaCab": "1x12 Scholz",
    "controls": [
      "Input Level",
      "Drive on channels 2",
      "3",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Master",
      "Classic",
      "Modern voice switch"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "carol-ann-tucana-clean",
    "name": "Carol-Ann Tucana Clean",
    "family": "Boutique",
    "basedOn": "Carol-Ann Tucana 3",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f3/Tucana.jpg/300px-Tucana.jpg",
    "imageAlt": "Carol-Ann Tucana 3 amplifier",
    "originalCab": "G12M, Classic Lead 80, Scholz",
    "matchingDynaCab": "1x12 Scholz",
    "controls": [
      "Input Level",
      "Bass",
      "Mid",
      "Treble",
      "Gain (Overdrive channels)",
      "Master (all channels)",
      "Presence"
    ],
    "powerTubes": "KT88"
  },
  {
    "id": "carol-ann-tucana-lead",
    "name": "Carol-Ann Tucana Lead",
    "family": "Boutique",
    "basedOn": "Carol-Ann Tucana 3",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f3/Tucana.jpg/300px-Tucana.jpg",
    "imageAlt": "Carol-Ann Tucana 3 amplifier",
    "originalCab": "G12M, Classic Lead 80, Scholz",
    "matchingDynaCab": "1x12 Scholz",
    "controls": [
      "Input Level",
      "Bass",
      "Mid",
      "Treble",
      "Gain (Overdrive channels)",
      "Master (all channels)",
      "Presence"
    ],
    "powerTubes": "KT88"
  },
  {
    "id": "citrus-a30-clean",
    "name": "Citrus A30 Clean",
    "family": "Other",
    "basedOn": "Orange AD30HTC",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/cd/Ad30.jpg/300px-Ad30.jpg",
    "imageAlt": "Orange AD30HTC amplifier",
    "originalCab": "Orange 2x12 (V30)",
    "matchingDynaCab": "4x12 Citrus",
    "controls": [
      "Gain",
      "Master",
      "Bass",
      "Middle",
      "Treble"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "citrus-a30-dirty",
    "name": "Citrus A30 Dirty",
    "family": "Other",
    "basedOn": "Orange AD30HTC",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/cd/Ad30.jpg/300px-Ad30.jpg",
    "imageAlt": "Orange AD30HTC amplifier",
    "originalCab": "Orange 2x12 (V30)",
    "matchingDynaCab": "4x12 Citrus",
    "controls": [
      "Gain",
      "Master",
      "Bass",
      "Middle",
      "Treble"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "citrus-bass-200",
    "name": "Citrus Bass 200",
    "family": "Bass",
    "basedOn": "Orange AD200B bass amp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/1/1f/Orangebass.jpg/300px-Orangebass.jpg",
    "imageAlt": "Orange AD200B bass amp amplifier",
    "originalCab": "Orange bass cab",
    "matchingDynaCab": "1x15 Heart Key",
    "controls": [
      "Volume",
      "Gain",
      "Bass",
      "Middle",
      "Treble"
    ],
    "powerTubes": "6550"
  },
  {
    "id": "citrus-rv50",
    "name": "Citrus RV50",
    "family": "Other",
    "basedOn": "Orange Rockerverb 50 MK II",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/8/83/Rockerverb50.jpg/300px-Rockerverb50.jpg",
    "imageAlt": "Orange Rockerverb 50 MK II amplifier",
    "originalCab": "Orange 4x12 (V30)",
    "matchingDynaCab": "4x12 Citrus",
    "controls": [
      "Gain",
      "Treble",
      "Middle",
      "Bass",
      "Reverb effect"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "citrus-terrier",
    "name": "Citrus Terrier",
    "family": "Other",
    "basedOn": "Orange Tiny Terror",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/5/54/Tinyterror.jpg/300px-Tinyterror.jpg",
    "imageAlt": "Orange Tiny Terror amplifier",
    "originalCab": "Orange 1x12 or 2x12 (G12H)",
    "matchingDynaCab": "2x12 Texas Star",
    "controls": [
      "Volume",
      "Gain",
      "Tone (High Cut)",
      "7w",
      "15w switch"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "class-a-15w-tb",
    "name": "Class-A 15W TB",
    "family": "Class A",
    "basedOn": "Vox AC15 Top Boost",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d1/Ac15.jpg/300px-Ac15.jpg",
    "imageAlt": "Vox AC15 Top Boost amplifier",
    "originalCab": "Vox 1x12 (G12M, Alnico)",
    "matchingDynaCab": "1x12 AC20",
    "controls": [
      "Volume",
      "Cut",
      "Bass",
      "Treble"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "class-a-30w",
    "name": "Class-A 30W",
    "family": "Class A",
    "basedOn": "Vox AC30",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/e/ee/Ac30.jpg/300px-Ac30.jpg",
    "imageAlt": "Vox AC30 amplifier",
    "originalCab": "Vox 2x12 (Alnico, G12M)",
    "matchingDynaCab": "2x12 Class-A 30W",
    "controls": [
      "Volume",
      "Bright switch (Normal channel)",
      "Treble",
      "Bass (Top Boost channel)",
      "Hot",
      "Cool switch (Top Boost channel)",
      "Tone Cut",
      "Master (Hot model only)"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "class-a-30w-bright",
    "name": "Class-A 30W Bright",
    "family": "Class A",
    "basedOn": "Vox AC30",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/e/ee/Ac30.jpg/300px-Ac30.jpg",
    "imageAlt": "Vox AC30 amplifier",
    "originalCab": "Vox 2x12 (Alnico, G12M)",
    "matchingDynaCab": "2x12 Class-A 30W",
    "controls": [
      "Volume",
      "Bright switch (Normal channel)",
      "Treble",
      "Bass (Top Boost channel)",
      "Hot",
      "Cool switch (Top Boost channel)",
      "Tone Cut",
      "Master (Hot model only)"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "class-a-30w-brilliant",
    "name": "Class-A 30W Brilliant",
    "family": "Class A",
    "basedOn": "Vox AC30",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/e/ee/Ac30.jpg/300px-Ac30.jpg",
    "imageAlt": "Vox AC30 amplifier",
    "originalCab": "Vox 2x12 (Alnico, G12M)",
    "matchingDynaCab": "2x12 Class-A 30W",
    "controls": [
      "Volume",
      "Bright switch (Normal channel)",
      "Treble",
      "Bass (Top Boost channel)",
      "Hot",
      "Cool switch (Top Boost channel)",
      "Tone Cut",
      "Master (Hot model only)"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "class-a-30w-hot",
    "name": "Class-A 30W Hot",
    "family": "Class A",
    "basedOn": "Vox AC30",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/e/ee/Ac30.jpg/300px-Ac30.jpg",
    "imageAlt": "Vox AC30 amplifier",
    "originalCab": "Vox 2x12 (Alnico, G12M)",
    "matchingDynaCab": "2x12 Class-A 30W",
    "controls": [
      "Volume",
      "Bright switch (Normal channel)",
      "Treble",
      "Bass (Top Boost channel)",
      "Hot",
      "Cool switch (Top Boost channel)",
      "Tone Cut",
      "Master (Hot model only)"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "class-a-30w-tb",
    "name": "Class-A 30W TB",
    "family": "Class A",
    "basedOn": "Vox AC30",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/e/ee/Ac30.jpg/300px-Ac30.jpg",
    "imageAlt": "Vox AC30 amplifier",
    "originalCab": "Vox 2x12 (Alnico, G12M)",
    "matchingDynaCab": "2x12 Class-A 30W",
    "controls": [
      "Volume",
      "Bright switch (Normal channel)",
      "Treble",
      "Bass (Top Boost channel)",
      "Hot",
      "Cool switch (Top Boost channel)",
      "Tone Cut",
      "Master (Hot model only)"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "comet-60",
    "name": "Comet 60",
    "family": "Boutique",
    "basedOn": "Komet 60",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/1/1f/Komet60.jpg/300px-Komet60.jpg",
    "imageAlt": "Komet 60 amplifier",
    "originalCab": "Komet's 2x12 has Classic Lead 80",
    "matchingDynaCab": "2x12 Lead 80",
    "controls": [
      "Volume",
      "Treble",
      "Middle",
      "Bass",
      "Presence",
      "Hi Cut",
      "Gradual"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "comet-concourse",
    "name": "Comet Concourse",
    "family": "Boutique",
    "basedOn": "Komet Concorde",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d9/Kometconcorde.jpg/300px-Kometconcorde.jpg",
    "imageAlt": "Komet Concorde amplifier",
    "originalCab": "Komet's 2x12 has Classic Lead 80",
    "matchingDynaCab": "2x12 Lead 80",
    "controls": [
      "Volume",
      "Treble",
      "Middle",
      "Bass",
      "Presence",
      "Hi Cut",
      "Gradual"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "cornfed-m50",
    "name": "Cornfed M50",
    "family": "Boutique",
    "basedOn": "Cornford MK50 II",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/4c/CORNFORD.png/350px-CORNFORD.png",
    "imageAlt": "Cornford MK50 II amplifier",
    "originalCab": "Cornford 4x12 (V30)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [
      "Gain",
      "Overdrive",
      "Bass",
      "Middle (500Hz)",
      "Treble",
      "Master",
      "Presence",
      "Resonance",
      "Depth"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "das-metall",
    "name": "Das Metall",
    "family": "Modern High Gain",
    "basedOn": "Diezel VH4 schematics",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/e/e9/Vh4.jpg/300px-Vh4.jpg",
    "imageAlt": "Diezel VH4 schematics amplifier",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "deluxe-6g3",
    "name": "Deluxe 6G3",
    "family": "American",
    "basedOn": "brownface Fender Deluxe, 6G3",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3d/Deluxe.jpg/300px-Deluxe.jpg",
    "imageAlt": "Fender Deluxe amplifier",
    "controls": [
      "Volume",
      "Tone"
    ],
    "powerTubes": "6V6"
  },
  {
    "id": "deluxe-tweed-bright",
    "name": "Deluxe Tweed Bright",
    "family": "American",
    "basedOn": "1957 narrow-panel Fender Tweed Deluxe, 5E3",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3d/Deluxe.jpg/300px-Deluxe.jpg",
    "imageAlt": "1957 narrow-panel Fender Tweed Deluxe, 5E3 amplifier",
    "originalCab": "Fender 1x12 (Jensen P12R or C12N, or Celestion Alnico Blue)",
    "matchingDynaCab": "1x12 Deluxe Tweed",
    "controls": [
      "Volume Normal",
      "Volume Bright",
      "Tone"
    ],
    "powerTubes": "6V6"
  },
  {
    "id": "deluxe-tweed-normal",
    "name": "Deluxe Tweed Normal",
    "family": "American",
    "basedOn": "1957 narrow-panel Fender Tweed Deluxe, 5E3",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3d/Deluxe.jpg/300px-Deluxe.jpg",
    "imageAlt": "1957 narrow-panel Fender Tweed Deluxe, 5E3 amplifier",
    "originalCab": "Fender 1x12 (Jensen P12R or C12N, or Celestion Alnico Blue)",
    "matchingDynaCab": "1x12 Deluxe Tweed",
    "controls": [
      "Volume Normal",
      "Volume Bright",
      "Tone"
    ],
    "powerTubes": "6V6"
  },
  {
    "id": "deluxe-tweed-jumped",
    "name": "Deluxe Tweed Jumped",
    "family": "American",
    "basedOn": "1957 narrow-panel Fender Tweed Deluxe, 5E3",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3d/Deluxe.jpg/300px-Deluxe.jpg",
    "imageAlt": "1957 narrow-panel Fender Tweed Deluxe, 5E3 amplifier",
    "originalCab": "Fender 1x12 (Jensen P12R or C12N, or Celestion Alnico Blue)",
    "matchingDynaCab": "1x12 Deluxe Tweed",
    "controls": [
      "Volume Normal",
      "Volume Bright",
      "Tone"
    ],
    "powerTubes": "6V6"
  },
  {
    "id": "deluxe-verb-normal",
    "name": "Deluxe Verb Normal",
    "family": "American",
    "basedOn": "1965 blackface Fender Deluxe Reverb, AB763",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f7/Deluxereverb.jpg/300px-Deluxereverb.jpg",
    "imageAlt": "1965 blackface Fender Deluxe Reverb, AB763 amplifier",
    "originalCab": "Fender 1x12 with a Jensen C12(K), EVM 12L, or JBL D120. Or Fender 2x10 with Jensen C10N or C10Q, or a Jensen 25W Alnico P10R",
    "matchingDynaCab": "1x12 Deluxe Verb",
    "controls": [
      "Volume",
      "Bass",
      "Treble",
      "Reverb effect",
      "Vibrato effect"
    ],
    "powerTubes": "6V6"
  },
  {
    "id": "deluxe-verb-vibrato",
    "name": "Deluxe Verb Vibrato",
    "family": "American",
    "basedOn": "1965 blackface Fender Deluxe Reverb, AB763",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f7/Deluxereverb.jpg/300px-Deluxereverb.jpg",
    "imageAlt": "1965 blackface Fender Deluxe Reverb, AB763 amplifier",
    "originalCab": "Fender 1x12 with a Jensen C12(K), EVM 12L, or JBL D120. Or Fender 2x10 with Jensen C10N or C10Q, or a Jensen 25W Alnico P10R",
    "matchingDynaCab": "1x12 Deluxe Verb",
    "controls": [
      "Volume",
      "Bass",
      "Treble",
      "Reverb effect",
      "Vibrato effect"
    ],
    "powerTubes": "6V6"
  },
  {
    "id": "diamante-fire",
    "name": "Diamante Fire",
    "family": "Boutique",
    "basedOn": "22W Diamond Del Fuego",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/5/55/FUEGO.jpg/300px-FUEGO.jpg",
    "imageAlt": "22W Diamond Del Fuego amplifier",
    "originalCab": "single GH12H, V30",
    "matchingDynaCab": "1x12 Hot Kitty",
    "controls": [
      "Volume",
      "Tone",
      "Tremolo effect (on one of the channels)"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "dirty-shirley-1",
    "name": "Dirty Shirley 1",
    "family": "Boutique",
    "basedOn": "40W Friedman Dirty Shirley",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/5/53/Dirtyshirley.jpg/325px-Dirtyshirley.jpg",
    "imageAlt": "40W Friedman Dirty Shirley amplifier",
    "originalCab": "Friedman 4x12 (V30, G12M, G12-65, G12H)",
    "matchingDynaCab": "4x12 Friedman GB",
    "controls": [
      "Gain",
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "5881"
  },
  {
    "id": "dirty-shirley-2",
    "name": "Dirty Shirley 2",
    "family": "Boutique",
    "basedOn": "40W Friedman Dirty Shirley",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/5/53/Dirtyshirley.jpg/300px-Dirtyshirley.jpg",
    "imageAlt": "Dirty Shirley 2 amplifier",
    "originalCab": "Friedman 4x12 (V30, G12M, G12-65, G12H)",
    "matchingDynaCab": "4x12 Friedman GB",
    "controls": [
      "Gain",
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "5881"
  },
  {
    "id": "div-13-cj",
    "name": "Div/13 CJ",
    "family": "Boutique",
    "basedOn": "Divided By 13 CJ 11",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/39/Cj11.jpg/300px-Cj11.jpg",
    "imageAlt": "Divided By 13 CJ 11 amplifier",
    "originalCab": "Divided by 13 (G12M)",
    "matchingDynaCab": "1x12 Div13 CJ11",
    "controls": [
      "Treble",
      "Bass",
      "Master"
    ],
    "powerTubes": "6V6"
  },
  {
    "id": "div-13-cj-boost",
    "name": "Div/13 CJ Boost",
    "family": "Boutique",
    "basedOn": "Divided By 13 CJ 11",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/39/Cj11.jpg/300px-Cj11.jpg",
    "imageAlt": "Divided By 13 CJ 11 amplifier",
    "originalCab": "Divided by 13 (G12M)",
    "matchingDynaCab": "1x12 Div13 CJ11",
    "controls": [
      "Treble",
      "Bass",
      "Master"
    ],
    "powerTubes": "6V6"
  },
  {
    "id": "div-13-ft37-high",
    "name": "Div/13 FT37 High",
    "family": "Boutique",
    "basedOn": "Divided By 13 FTR 37",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/fe/Ftr37.jpg/300px-Ftr37.jpg",
    "imageAlt": "Divided By 13 FTR 37 amplifier",
    "originalCab": "Divided by 13 (G12H and Alnico)",
    "matchingDynaCab": "2x12 Chiefman",
    "controls": [
      "Treble",
      "Bass"
    ],
    "powerTubes": "6V6"
  },
  {
    "id": "div-13-ft37-low",
    "name": "Div/13 FT37 Low",
    "family": "Boutique",
    "basedOn": "Divided By 13 FTR 37",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/fe/Ftr37.jpg/300px-Ftr37.jpg",
    "imageAlt": "Divided By 13 FTR 37 amplifier",
    "originalCab": "Divided by 13 (G12H and Alnico)",
    "matchingDynaCab": "2x12 Chiefman",
    "controls": [
      "Treble",
      "Bass"
    ],
    "powerTubes": "6V6"
  },
  {
    "id": "dizzy-v4-blue-2",
    "name": "Dizzy V4 Blue 2",
    "family": "Modern High Gain",
    "basedOn": "Diezel VH4",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/40/VH4_DIEZEL_BLUE.png/325px-VH4_DIEZEL_BLUE.png",
    "imageAlt": "Diezel VH4 amplifier",
    "originalCab": "Diezel 4x12 (V30, G12-100)",
    "matchingDynaCab": "4x12 Recto Straight",
    "controls": [],
    "powerTubes": "KT77"
  },
  {
    "id": "dizzy-v4-blue-3",
    "name": "Dizzy V4 Blue 3",
    "family": "Modern High Gain",
    "basedOn": "Diezel VH4",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/40/VH4_DIEZEL_BLUE.png/325px-VH4_DIEZEL_BLUE.png",
    "imageAlt": "Diezel VH4 amplifier",
    "originalCab": "Diezel 4x12 (V30, G12-100)",
    "matchingDynaCab": "4x12 Recto Straight",
    "controls": [],
    "powerTubes": "KT77"
  },
  {
    "id": "dizzy-v4-blue-4",
    "name": "Dizzy V4 Blue 4",
    "family": "Modern High Gain",
    "basedOn": "Diezel VH4",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/40/VH4_DIEZEL_BLUE.png/325px-VH4_DIEZEL_BLUE.png",
    "imageAlt": "Diezel VH4 amplifier",
    "originalCab": "Diezel 4x12 (V30, G12-100)",
    "matchingDynaCab": "4x12 Recto Straight",
    "controls": [],
    "powerTubes": "KT77"
  },
  {
    "id": "dizzy-v4-silver-2",
    "name": "Dizzy V4 Silver 2",
    "family": "Modern High Gain",
    "basedOn": "Diezel VH4",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f0/VH4_DIEZEL_SILVER.png/325px-VH4_DIEZEL_SILVER.png",
    "imageAlt": "Dizzy V4 Silver 2 amplifier",
    "originalCab": "Diezel 4x12 (V30, G12-100)",
    "matchingDynaCab": "4x12 Recto Straight",
    "controls": [],
    "powerTubes": "KT77"
  },
  {
    "id": "dizzy-v4-silver-3",
    "name": "Dizzy V4 Silver 3",
    "family": "Modern High Gain",
    "basedOn": "Diezel VH4",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/40/VH4_DIEZEL_BLUE.png/325px-VH4_DIEZEL_BLUE.png",
    "imageAlt": "Diezel VH4 amplifier",
    "originalCab": "Diezel 4x12 (V30, G12-100)",
    "matchingDynaCab": "4x12 Recto Straight",
    "controls": [],
    "powerTubes": "KT77"
  },
  {
    "id": "dizzy-v4-silver-4",
    "name": "Dizzy V4 Silver 4",
    "family": "Modern High Gain",
    "basedOn": "Diezel VH4",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/40/VH4_DIEZEL_BLUE.png/325px-VH4_DIEZEL_BLUE.png",
    "imageAlt": "Diezel VH4 amplifier",
    "originalCab": "Diezel 4x12 (V30, G12-100)",
    "matchingDynaCab": "4x12 Recto Straight",
    "controls": [],
    "powerTubes": "KT77"
  },
  {
    "id": "double-verb-normal",
    "name": "Double Verb Normal",
    "family": "American",
    "basedOn": "1966 blackface Fender Twin Reverb",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/78/Twin.jpg/300px-Twin.jpg",
    "imageAlt": "1966 blackface Fender Twin Reverb amplifier",
    "originalCab": "Fender 2x12 with original speakers",
    "matchingDynaCab": "2x12 Double Verb",
    "controls": [
      "Volume",
      "Bass",
      "Middle",
      "Treble",
      "Bright switch",
      "Reverb effect",
      "Vibrato effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "double-verb-silverface",
    "name": "Double Verb Silverface",
    "family": "American",
    "basedOn": "1971 silverface Fender Twin Reverb",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/78/Twin.jpg/300px-Twin.jpg",
    "imageAlt": "Fender Twin Reverb amplifier",
    "originalCab": "Fender 2x12 with original speakers",
    "matchingDynaCab": "2x12 Double Verb",
    "controls": [
      "Volume",
      "Bass",
      "Middle",
      "Treble",
      "Bright switch",
      "Reverb effect",
      "Vibrato effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "double-verb-vibrato",
    "name": "Double Verb Vibrato",
    "family": "American",
    "basedOn": "1966 blackface Fender Twin Reverb",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/78/Twin.jpg/300px-Twin.jpg",
    "imageAlt": "Fender Twin Reverb amplifier",
    "originalCab": "Fender 2x12 with original speakers",
    "matchingDynaCab": "2x12 Double Verb",
    "controls": [
      "Volume",
      "Bass",
      "Middle",
      "Treble",
      "Bright switch",
      "Reverb effect",
      "Vibrato effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "dweezil-s-bassguy",
    "name": "Dweezil's Bassguy",
    "family": "American",
    "basedOn": "Dweezil Zappa's 1965 blackface Fender Bassman, AB165",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f3/Ab165.png/300px-Ab165.png",
    "imageAlt": "Fender Bassman AB165 amplifier",
    "originalCab": "Fender 2x12 (Oxford)",
    "matchingDynaCab": "4x12 1960TV",
    "controls": [
      "Volume",
      "Negative feedback"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "energyball",
    "name": "Energyball",
    "family": "Modern High Gain",
    "basedOn": "Engl Powerball",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/b/b0/Powerball.jpg/300px-Powerball.jpg",
    "imageAlt": "Engl Powerball amplifier",
    "originalCab": "Engl 4x12 (V30, V60)",
    "matchingDynaCab": "4x12 Recto Straight",
    "controls": [
      "Lo",
      "Hi Lead switch",
      "Bass",
      "Mid-Open",
      "Mid-Focused",
      "Treble",
      "Open",
      "Focused switch (boosts 300-500 Hz) mode",
      "Presence",
      "Depth Punch"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "euro-blue",
    "name": "Euro Blue",
    "family": "Boutique",
    "basedOn": "Bogner Ecstasy 20th Anniversary",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/41/Ecstasy.png/325px-Ecstasy.png",
    "imageAlt": "Bogner Ecstasy 20th Anniversary amplifier",
    "originalCab": "Bogner 2x12 or 4x12 (V30)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [],
    "powerTubes": "EL34 (earlier models were based on the 6L6 version)"
  },
  {
    "id": "euro-blue-modern",
    "name": "Euro Blue Modern",
    "family": "Boutique",
    "basedOn": "Bogner Ecstasy 20th Anniversary",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/41/Ecstasy.png/325px-Ecstasy.png",
    "imageAlt": "Bogner Ecstasy 20th Anniversary amplifier",
    "originalCab": "Bogner 2x12 or 4x12 (V30)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [],
    "powerTubes": "EL34 (earlier models were based on the 6L6 version)"
  },
  {
    "id": "euro-red",
    "name": "Euro Red",
    "family": "Boutique",
    "basedOn": "Bogner Ecstasy 20th Anniversary",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/41/Ecstasy.png/325px-Ecstasy.png",
    "imageAlt": "Bogner Ecstasy 20th Anniversary amplifier",
    "originalCab": "Bogner 2x12 or 4x12 (V30)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [],
    "powerTubes": "EL34 (earlier models were based on the 6L6 version)"
  },
  {
    "id": "euro-red-modern",
    "name": "Euro Red Modern",
    "family": "Boutique",
    "basedOn": "Bogner Ecstasy 20th Anniversary",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/41/Ecstasy.png/325px-Ecstasy.png",
    "imageAlt": "Bogner Ecstasy 20th Anniversary amplifier",
    "originalCab": "Bogner 2x12 or 4x12 (V30)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [],
    "powerTubes": "EL34 (earlier models were based on the 6L6 version)"
  },
  {
    "id": "euro-uber",
    "name": "Euro Uber",
    "family": "Boutique",
    "basedOn": "Bogner Uberschall",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/0/0f/Uber.png/300px-Uber.png",
    "imageAlt": "Bogner Uberschall amplifier",
    "originalCab": "Bogner 4x12 Uberkab (G12-T75 and V30)",
    "matchingDynaCab": "4x12 Recto Straight",
    "controls": [
      "Gain",
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Depth (only on Twin-Jet Uberschall",
      "not modeled)"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "fas-6160",
    "name": "FAS 6160",
    "family": "Other",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "fas-bass",
    "name": "FAS Bass",
    "family": "Bass",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "6550"
  },
  {
    "id": "fas-brootalz",
    "name": "FAS Brootalz",
    "family": "Modern High Gain",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "6550"
  },
  {
    "id": "fas-brown",
    "name": "FAS Brown",
    "family": "Other",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "fas-buttery",
    "name": "FAS Buttery",
    "family": "Other",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "EL84"
  },
  {
    "id": "fas-class-a",
    "name": "FAS Class-A",
    "family": "Class A",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "EL84"
  },
  {
    "id": "fas-crunch",
    "name": "FAS Crunch",
    "family": "Other",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "fas-express",
    "name": "FAS Express",
    "family": "Other",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "fas-hot-rod",
    "name": "FAS Hot Rod",
    "family": "Other",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "fas-lead-1",
    "name": "FAS Lead 1",
    "family": "Other",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "fas-lead-2",
    "name": "FAS Lead 2",
    "family": "Other",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "fas-modern",
    "name": "FAS Modern",
    "family": "Modern High Gain",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "fas-modern-ii",
    "name": "FAS Modern II",
    "family": "Modern High Gain",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "fas-modern-iii",
    "name": "FAS Modern III",
    "family": "Modern High Gain",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "fas-rhythm",
    "name": "FAS Rhythm",
    "family": "Other",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "fas-skull-crusher",
    "name": "FAS Skull Crusher",
    "family": "Modern High Gain",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "fas-stealth-blue",
    "name": "FAS Stealth Blue",
    "family": "Modern High Gain",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [
      "See 5153 Stealth Blue"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "fas-wreck",
    "name": "FAS Wreck",
    "family": "Other",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "fox-ods",
    "name": "Fox ODS",
    "family": "Boutique",
    "basedOn": "Fuchs Overdrive Supreme 50",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/90/Fuchs.jpg/300px-Fuchs.jpg",
    "imageAlt": "Fuchs Overdrive Supreme 50 amplifier",
    "originalCab": "Fuchs 2x12 (Eminence)",
    "matchingDynaCab": "4x12 Rumble EV12S",
    "controls": [
      "The AM4 has a single model",
      "based on the amp with PAB engaged",
      "with a Mid Boost switch"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "fox-ods-deep",
    "name": "Fox ODS Deep",
    "family": "Boutique",
    "basedOn": "Fuchs Overdrive Supreme 50",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/90/Fuchs.jpg/300px-Fuchs.jpg",
    "imageAlt": "Fuchs Overdrive Supreme 50 amplifier",
    "originalCab": "Fuchs 2x12 (Eminence)",
    "matchingDynaCab": "4x12 Rumble EV12S",
    "controls": [
      "The AM4 has a single model",
      "based on the amp with PAB engaged",
      "with a Mid Boost switch"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "friedman-be-2010",
    "name": "Friedman BE 2010",
    "family": "Boutique",
    "basedOn": "Friedman BE",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a2/BE.jpg/300px-BE.jpg",
    "imageAlt": "Friedman BE amplifier",
    "originalCab": "Friedman 4x12 (V30 and/or G12M)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "friedman-be-c45",
    "name": "Friedman BE C45",
    "family": "Boutique",
    "basedOn": "Friedman BE",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a2/BE.jpg/300px-BE.jpg",
    "imageAlt": "Friedman BE amplifier",
    "originalCab": "Friedman 4x12 (V30 and/or G12M)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "friedman-be-v1",
    "name": "Friedman BE V1",
    "family": "Boutique",
    "basedOn": "Friedman BE",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a2/BE.jpg/300px-BE.jpg",
    "imageAlt": "Friedman BE amplifier",
    "originalCab": "Friedman 4x12 (V30 and/or G12M)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "friedman-be-v1-fat",
    "name": "Friedman BE V1 Fat",
    "family": "Boutique",
    "basedOn": "Friedman BE",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a2/BE.jpg/300px-BE.jpg",
    "imageAlt": "Friedman BE amplifier",
    "originalCab": "Friedman 4x12 (V30 and/or G12M)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "friedman-be-v2",
    "name": "Friedman BE V2",
    "family": "Boutique",
    "basedOn": "Friedman BE",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a2/BE.jpg/300px-BE.jpg",
    "imageAlt": "Friedman BE amplifier",
    "originalCab": "Friedman 4x12 (V30 and/or G12M)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "friedman-be-v3",
    "name": "Friedman BE V3",
    "family": "Boutique",
    "basedOn": "Friedman BE",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a2/BE.jpg/300px-BE.jpg",
    "imageAlt": "Friedman BE amplifier",
    "originalCab": "Friedman 4x12 (V30 and/or G12M)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "friedman-hbe-2010",
    "name": "Friedman HBE 2010",
    "family": "Boutique",
    "basedOn": "Friedman BE",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a2/BE.jpg/300px-BE.jpg",
    "imageAlt": "Friedman BE amplifier",
    "originalCab": "Friedman 4x12 (V30 and/or G12M)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "friedman-hbe-c45",
    "name": "Friedman HBE C45",
    "family": "Boutique",
    "basedOn": "Friedman BE",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a2/BE.jpg/300px-BE.jpg",
    "imageAlt": "Friedman BE amplifier",
    "originalCab": "Friedman 4x12 (V30 and/or G12M)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "friedman-hbe-v1",
    "name": "Friedman HBE V1",
    "family": "Boutique",
    "basedOn": "Friedman BE",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a2/BE.jpg/300px-BE.jpg",
    "imageAlt": "Friedman BE amplifier",
    "originalCab": "Friedman 4x12 (V30 and/or G12M)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "friedman-hbe-v1-fat",
    "name": "Friedman HBE V1 Fat",
    "family": "Boutique",
    "basedOn": "Friedman BE",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a2/BE.jpg/300px-BE.jpg",
    "imageAlt": "Friedman BE amplifier",
    "originalCab": "Friedman 4x12 (V30 and/or G12M)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "friedman-hbe-v2",
    "name": "Friedman HBE V2",
    "family": "Boutique",
    "basedOn": "Friedman BE",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a2/BE.jpg/300px-BE.jpg",
    "imageAlt": "Friedman BE amplifier",
    "originalCab": "Friedman 4x12 (V30 and/or G12M)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "friedman-hbe-v3",
    "name": "Friedman HBE V3",
    "family": "Boutique",
    "basedOn": "Friedman BE",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a2/BE.jpg/300px-BE.jpg",
    "imageAlt": "Friedman BE amplifier",
    "originalCab": "Friedman 4x12 (V30 and/or G12M)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "friedman-small-box",
    "name": "Friedman Small Box",
    "family": "Boutique",
    "basedOn": "Friedman Smallbox",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/36/Smallbox.jpg/300px-Smallbox.jpg",
    "imageAlt": "Friedman Smallbox amplifier",
    "originalCab": "Friedman 3x12 (V30 and/or G12M)",
    "matchingDynaCab": "4x12 Friedman GB",
    "controls": [
      "Gain",
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Bright switch (channel 1 \"Plexi\" only)"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "fryette-d60-less",
    "name": "Fryette D60 Less",
    "family": "Boutique",
    "basedOn": "Fryette Deliverance 60 Series II",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/48/Fryette.jpg/300px-Fryette.jpg",
    "imageAlt": "Fryette Deliverance 60 Series II amplifier",
    "originalCab": "Fryette 4x12 P50E (Fane F70G)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [
      "Gain 1",
      "Gain 2",
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Depth",
      "More",
      "Less switch",
      "Normal",
      "Bright voicing"
    ],
    "powerTubes": "KT88"
  },
  {
    "id": "fryette-d60-more",
    "name": "Fryette D60 More",
    "family": "Boutique",
    "basedOn": "Fryette Deliverance 60 Series II",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/48/Fryette.jpg/300px-Fryette.jpg",
    "imageAlt": "Fryette Deliverance 60 Series II amplifier",
    "originalCab": "Fryette 4x12 P50E (Fane F70G)",
    "matchingDynaCab": "4x12 Friedman V30",
    "controls": [
      "Gain 1",
      "Gain 2",
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Depth",
      "More",
      "Less switch",
      "Normal",
      "Bright voicing"
    ],
    "powerTubes": "KT88"
  },
  {
    "id": "gibtone-scout",
    "name": "Gibtone Scout",
    "family": "Other",
    "basedOn": "Gibson GA17RVT Scout",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f2/Gibson.jpg/300px-Gibson.jpg",
    "imageAlt": "Gibson GA17RVT Scout amplifier",
    "originalCab": "Gibson 1x10",
    "matchingDynaCab": "1x10 BF Princetone",
    "controls": [
      "Volume",
      "Tremolo effect",
      "Reverb effect"
    ],
    "powerTubes": "6AQ5"
  },
  {
    "id": "herbie-ch2-plus",
    "name": "Herbie Ch2+",
    "family": "Modern High Gain",
    "basedOn": "Diezel Herbert",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d1/Herbert.jpg/300px-Herbert.jpg",
    "imageAlt": "Diezel Herbert amplifier",
    "originalCab": "Diezel 4x12 (V30, G12-K100)",
    "controls": [
      "Gain (not on channel 1)",
      "Bass",
      "Middle (1 kHz)",
      "Treble",
      "Master",
      "Presence (> 3kHz)",
      "Deep (120Hz)",
      "Mid-Cut",
      "Gain Boost switch"
    ],
    "powerTubes": "KT77"
  },
  {
    "id": "herbie-ch2",
    "name": "Herbie Ch2-",
    "family": "Modern High Gain",
    "basedOn": "Diezel Herbert",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d1/Herbert.jpg/300px-Herbert.jpg",
    "imageAlt": "Diezel Herbert amplifier",
    "originalCab": "Diezel 4x12 (V30, G12-K100)",
    "controls": [
      "Gain (not on channel 1)",
      "Bass",
      "Middle (1 kHz)",
      "Treble",
      "Master",
      "Presence (> 3kHz)",
      "Deep (120Hz)",
      "Mid-Cut",
      "Gain Boost switch"
    ],
    "powerTubes": "KT77"
  },
  {
    "id": "herbie-ch3",
    "name": "Herbie Ch3",
    "family": "Modern High Gain",
    "basedOn": "Diezel Herbert",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d1/Herbert.jpg/300px-Herbert.jpg",
    "imageAlt": "Diezel Herbert amplifier",
    "originalCab": "Diezel 4x12 (V30, G12-K100)",
    "controls": [
      "Gain (not on channel 1)",
      "Bass",
      "Middle (1 kHz)",
      "Treble",
      "Master",
      "Presence (> 3kHz)",
      "Deep (120Hz)",
      "Mid-Cut",
      "Gain Boost switch"
    ],
    "powerTubes": "KT77"
  },
  {
    "id": "herbie-mk3",
    "name": "Herbie Mk3",
    "family": "Modern High Gain",
    "basedOn": "Diezel Herbert MKIII",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d1/Herbert.jpg/300px-Herbert.jpg",
    "imageAlt": "Diezel Herbert amplifier",
    "originalCab": "Diezel 4x12 (V30, G12-K100)",
    "controls": [
      "Gain (not on channel 1)",
      "Bass",
      "Middle (1 kHz)",
      "Treble",
      "Master",
      "Presence (> 3kHz)",
      "Deep (120Hz)",
      "Mid-Cut",
      "Gain Boost switch"
    ],
    "powerTubes": "KT77"
  },
  {
    "id": "hipower-brilliant",
    "name": "Hipower Brilliant",
    "family": "British",
    "basedOn": "Hiwatt DR103",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a3/Hiwatt.jpg/300px-Hiwatt.jpg",
    "imageAlt": "Hiwatt DR103 amplifier",
    "originalCab": "Hiwatt 4x12 (Fane)",
    "controls": [
      "Normal Volume",
      "Bright Volume",
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "hipower-jumped",
    "name": "Hipower Jumped",
    "family": "British",
    "basedOn": "Hiwatt DR103",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a3/Hiwatt.jpg/300px-Hiwatt.jpg",
    "imageAlt": "Hiwatt DR103 amplifier",
    "originalCab": "Hiwatt 4x12 (Fane)",
    "controls": [
      "Normal Volume",
      "Bright Volume",
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "hipower-normal",
    "name": "Hipower Normal",
    "family": "British",
    "basedOn": "Hiwatt DR103",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a3/Hiwatt.jpg/300px-Hiwatt.jpg",
    "imageAlt": "Hiwatt DR103 amplifier",
    "originalCab": "Hiwatt 4x12 (Fane)",
    "controls": [
      "Normal Volume",
      "Bright Volume",
      "Master",
      "Bass",
      "Middle",
      "Treble",
      "Presence"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "hot-kitty",
    "name": "Hot Kitty",
    "family": "Boutique",
    "basedOn": "Bad Cat Hot Cat 30",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/5/55/Hotcat.jpg/300px-Hotcat.jpg",
    "imageAlt": "Bad Cat Hot Cat 30 amplifier",
    "originalCab": "BadCat 1x12 (proprietary Celestion)",
    "controls": [
      "Gain",
      "Edge",
      "Level",
      "Bass",
      "Treble",
      "Mid-range switch",
      "Brilliance",
      "Cut",
      "Master"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "jazz-120",
    "name": "Jazz 120",
    "family": "Other",
    "basedOn": "Roland Jazz Chorus 120",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/38/Jc120.jpg/300px-Jc120.jpg",
    "imageAlt": "Roland Jazz Chorus 120 amplifier",
    "originalCab": "Roland 2x12 (\"silver\" AlNiCo)",
    "controls": [
      "Volume",
      "Bass",
      "Mid",
      "Treble",
      "Chorus effect",
      "Reverb effect"
    ],
    "powerTubes": "transistor"
  },
  {
    "id": "jmpre-1-clean-1",
    "name": "JMPRE-1 Clean 1",
    "family": "British",
    "basedOn": "Marshall JMP-1 preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/2/27/Cliff_JMP-1.jpg/300px-Cliff_JMP-1.jpg",
    "imageAlt": "Marshall JMP-1 preamp amplifier",
    "controls": [
      "Volume",
      "Gain",
      "Bass",
      "Mid",
      "Treble",
      "Presence (preamp)",
      "Bass shift",
      "Depth"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "jmpre-1-clean-1-bass-shift",
    "name": "JMPRE-1 Clean 1 Bass Shift",
    "family": "Bass",
    "basedOn": "Marshall JMP-1 preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/2/27/Cliff_JMP-1.jpg/300px-Cliff_JMP-1.jpg",
    "imageAlt": "Marshall JMP-1 preamp amplifier",
    "controls": [
      "Volume",
      "Gain",
      "Bass",
      "Mid",
      "Treble",
      "Presence (preamp)",
      "Bass shift",
      "Depth"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "jmpre-1-clean-2",
    "name": "JMPRE-1 Clean 2",
    "family": "British",
    "basedOn": "Marshall JMP-1 preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/2/27/Cliff_JMP-1.jpg/300px-Cliff_JMP-1.jpg",
    "imageAlt": "Marshall JMP-1 preamp amplifier",
    "controls": [
      "Volume",
      "Gain",
      "Bass",
      "Mid",
      "Treble",
      "Presence (preamp)",
      "Bass shift",
      "Depth"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "jmpre-1-clean-2-bass-shift",
    "name": "JMPRE-1 Clean 2 Bass Shift",
    "family": "Bass",
    "basedOn": "Marshall JMP-1 preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/2/27/Cliff_JMP-1.jpg/300px-Cliff_JMP-1.jpg",
    "imageAlt": "Marshall JMP-1 preamp amplifier",
    "controls": [
      "Volume",
      "Gain",
      "Bass",
      "Mid",
      "Treble",
      "Presence (preamp)",
      "Bass shift",
      "Depth"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "jmpre-1-od1",
    "name": "JMPRE-1 OD1",
    "family": "British",
    "basedOn": "Marshall JMP-1 preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/2/27/Cliff_JMP-1.jpg/300px-Cliff_JMP-1.jpg",
    "imageAlt": "Marshall JMP-1 preamp amplifier",
    "controls": [
      "Volume",
      "Gain",
      "Bass",
      "Mid",
      "Treble",
      "Presence (preamp)",
      "Bass shift",
      "Depth"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "jmpre-1-od1-bass-shift",
    "name": "JMPRE-1 OD1 Bass Shift",
    "family": "Bass",
    "basedOn": "Marshall JMP-1 preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/2/27/Cliff_JMP-1.jpg/300px-Cliff_JMP-1.jpg",
    "imageAlt": "Marshall JMP-1 preamp amplifier",
    "controls": [
      "Volume",
      "Gain",
      "Bass",
      "Mid",
      "Treble",
      "Presence (preamp)",
      "Bass shift",
      "Depth"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "jmpre-1-od2",
    "name": "JMPRE-1 OD2",
    "family": "British",
    "basedOn": "Marshall JMP-1 preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/2/27/Cliff_JMP-1.jpg/300px-Cliff_JMP-1.jpg",
    "imageAlt": "Marshall JMP-1 preamp amplifier",
    "controls": [
      "Volume",
      "Gain",
      "Bass",
      "Mid",
      "Treble",
      "Presence (preamp)",
      "Bass shift",
      "Depth"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "jmpre-1-od2-bass-shift",
    "name": "JMPRE-1 OD2 Bass Shift",
    "family": "Bass",
    "basedOn": "Marshall JMP-1 preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/2/27/Cliff_JMP-1.jpg/300px-Cliff_JMP-1.jpg",
    "imageAlt": "Marshall JMP-1 preamp amplifier",
    "controls": [
      "Volume",
      "Gain",
      "Bass",
      "Mid",
      "Treble",
      "Presence (preamp)",
      "Bass shift",
      "Depth"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "jr-blues",
    "name": "Jr Blues",
    "family": "American",
    "basedOn": "Fender Blues Junior",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/6/6c/Bluesjr.jpg/300px-Bluesjr.jpg",
    "imageAlt": "Fender Blues Junior amplifier",
    "originalCab": "Fender 1x12 (Eminence, Jensen C12N, P12R)",
    "controls": [
      "Bass",
      "Middle",
      "Treble",
      "Gain",
      "Volume",
      "FAT button (boosts gain",
      "midrange frequencies)",
      "Reverb effect"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "jr-blues-fat",
    "name": "Jr Blues Fat",
    "family": "American",
    "basedOn": "Fender Blues Junior",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/6/6c/Bluesjr.jpg/300px-Bluesjr.jpg",
    "imageAlt": "Fender Blues Junior amplifier",
    "originalCab": "Fender 1x12 (Eminence, Jensen C12N, P12R)",
    "controls": [
      "Bass",
      "Middle",
      "Treble",
      "Gain",
      "Volume",
      "FAT button (boosts gain",
      "midrange frequencies)",
      "Reverb effect"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "js410-crunch-orange",
    "name": "JS410 Crunch Orange",
    "family": "British",
    "basedOn": "Joe Satriani's Marshall JVM410HJS",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/ce/Js.jpg/350px-Js.jpg",
    "imageAlt": "Joe Satriani's Marshall JVM410HJS amplifier",
    "originalCab": "Marshall 4x12 (V30 and G12H)",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "js410-crunch-red",
    "name": "JS410 Crunch Red",
    "family": "British",
    "basedOn": "Joe Satriani's Marshall JVM410HJS",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/ce/Js.jpg/350px-Js.jpg",
    "imageAlt": "Joe Satriani's Marshall JVM410HJS amplifier",
    "originalCab": "Marshall 4x12 (V30 and G12H)",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "js410-lead-green",
    "name": "JS410 Lead Green",
    "family": "British",
    "basedOn": "Joe Satriani's Marshall JVM410HJS",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/ce/Js.jpg/350px-Js.jpg",
    "imageAlt": "Joe Satriani's Marshall JVM410HJS amplifier",
    "originalCab": "Marshall 4x12 (V30 and G12H)",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "js410-lead-orange",
    "name": "JS410 Lead Orange",
    "family": "British",
    "basedOn": "Joe Satriani's Marshall JVM410HJS",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/ce/Js.jpg/350px-Js.jpg",
    "imageAlt": "Joe Satriani's Marshall JVM410HJS amplifier",
    "originalCab": "Marshall 4x12 (V30 and G12H)",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "js410-lead-red",
    "name": "JS410 Lead Red",
    "family": "British",
    "basedOn": "Joe Satriani's Marshall JVM410HJS",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/ce/Js.jpg/350px-Js.jpg",
    "imageAlt": "Joe Satriani's Marshall JVM410HJS amplifier",
    "originalCab": "Marshall 4x12 (V30 and G12H)",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "legend-100",
    "name": "Legend 100",
    "family": "Other",
    "basedOn": "Steve Vai's Carvin Legacy VL100",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/40/Legacy.jpg/300px-Legacy.jpg",
    "imageAlt": "Steve Vai's Carvin Legacy VL100 amplifier",
    "originalCab": "Carvin 2x12 or 4x12 (V30)",
    "controls": [
      "Middle",
      "Treble",
      "Presence",
      "Drive",
      "Volume",
      "Master",
      "Boost",
      "Reverb effect",
      "Gain switch"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "legend-100-ii",
    "name": "Legend 100 II",
    "family": "Other",
    "basedOn": "Carvin Legacy VL300",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/5/5b/C_LEGACY_3.png/300px-C_LEGACY_3.png",
    "imageAlt": "Carvin Legacy VL300 amplifier",
    "controls": []
  },
  {
    "id": "matchbox-chieftain-1",
    "name": "Matchbox Chieftain 1",
    "family": "Class A",
    "basedOn": "Matchless Chieftain",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/c0/Chieftain.jpg/300px-Chieftain.jpg",
    "imageAlt": "Matchless Chieftain amplifier",
    "originalCab": "Matchless 2x12 (G12H)",
    "controls": [
      "Volume",
      "Master",
      "Bass",
      "Mid",
      "Treble",
      "Brilliance"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "matchbox-chieftain-2",
    "name": "Matchbox Chieftain 2",
    "family": "Class A",
    "basedOn": "Matchless Chieftain",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/c0/Chieftain.jpg/300px-Chieftain.jpg",
    "imageAlt": "Matchless Chieftain amplifier",
    "originalCab": "Matchless 2x12 (G12H)",
    "controls": [
      "Volume",
      "Master",
      "Bass",
      "Mid",
      "Treble",
      "Brilliance"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "matchbox-d-30",
    "name": "Matchbox D-30",
    "family": "Class A",
    "basedOn": "Matchless DC-30",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/7c/Dc30.jpg/300px-Dc30.jpg",
    "imageAlt": "Matchless DC-30 amplifier",
    "originalCab": "Matchless 2x12 (25w G12M and 30w G12H)",
    "controls": [
      "On the AM4",
      "the Master control is provided",
      "on other products it isn't (bypassed)"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "matchbox-d-30-ef86",
    "name": "Matchbox D-30 EF86",
    "family": "Class A",
    "basedOn": "Matchless DC-30",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/7c/Dc30.jpg/300px-Dc30.jpg",
    "imageAlt": "Matchless DC-30 amplifier",
    "originalCab": "Matchless 2x12 (25w G12M and 30w G12H)",
    "controls": [
      "On the AM4",
      "the Master control is provided",
      "on other products it isn't (bypassed)"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "mr-z-hwy-66",
    "name": "Mr Z Hwy 66",
    "family": "Boutique",
    "basedOn": "Dr. Z Route 66",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/74/Route66.jpg/300px-Route66.jpg",
    "imageAlt": "Dr. Z Route 66 amplifier",
    "originalCab": "Dr. Z 2x12 (V30 and G12H)",
    "controls": [
      "Volume",
      "Bass",
      "Treble"
    ],
    "powerTubes": "KT66"
  },
  {
    "id": "mr-z-mz-38",
    "name": "Mr Z MZ-38",
    "family": "Boutique",
    "basedOn": "Dr. Z Maz 38 SR",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/9d/Maz38.jpg/300px-Maz38.jpg",
    "imageAlt": "Dr. Z Maz 38 SR amplifier",
    "originalCab": "Dr. Z 1x12 (G12H)",
    "controls": [
      "Volume",
      "Master",
      "Bass",
      "Mid",
      "Treble",
      "Cut",
      "Reverb effect on some models"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "mr-z-mz-8",
    "name": "Mr Z MZ-8",
    "family": "Boutique",
    "basedOn": "Dr. Z Maz 8",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/1/1a/Maz8.jpg/300px-Maz8.jpg",
    "imageAlt": "Dr. Z Maz 8 amplifier",
    "originalCab": "Dr. Z 1x12 (G12H)",
    "controls": [
      "Volume",
      "Master",
      "Bass",
      "Mid",
      "Treble",
      "Cut",
      "Reverb effect",
      "Pentode",
      "Triode switch"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "nuclear-tone",
    "name": "Nuclear-Tone",
    "family": "Boutique",
    "basedOn": "Swart Atomic Space Tone",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/1/16/Swart.jpg/300px-Swart.jpg",
    "imageAlt": "Swart Atomic Space Tone amplifier",
    "originalCab": "Swart 1x12 (Mojotone BV-25m)",
    "controls": [
      "Volume",
      "Tone",
      "Tremolo effect",
      "Reverb effect"
    ],
    "powerTubes": "6V6"
  },
  {
    "id": "ods-100-clean",
    "name": "ODS-100 Clean",
    "family": "Boutique",
    "basedOn": "Dumble Overdrive Special",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/c3/Dumble.jpg/300px-Dumble.jpg",
    "imageAlt": "Dumble Overdrive Special amplifier",
    "originalCab": "Dumble 2x12 or 4x12 (G12-65, EVM)",
    "controls": [],
    "powerTubes": "EL34 (HRM), 6L6 (Ford)"
  },
  {
    "id": "ods-100-ford",
    "name": "ODS-100 Ford",
    "family": "Boutique",
    "basedOn": "Dumble Overdrive Special",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/c3/Dumble.jpg/300px-Dumble.jpg",
    "imageAlt": "Dumble Overdrive Special amplifier",
    "originalCab": "Dumble 2x12 or 4x12 (G12-65, EVM)",
    "controls": [],
    "powerTubes": "EL34 (HRM), 6L6 (Ford)"
  },
  {
    "id": "ods-100-ford-pab",
    "name": "ODS-100 Ford PAB",
    "family": "Boutique",
    "basedOn": "Dumble Overdrive Special",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/c3/Dumble.jpg/300px-Dumble.jpg",
    "imageAlt": "Dumble Overdrive Special amplifier",
    "originalCab": "Dumble 2x12 or 4x12 (G12-65, EVM)",
    "controls": [],
    "powerTubes": "EL34 (HRM), 6L6 (Ford)"
  },
  {
    "id": "ods-100-ford-pab-mid",
    "name": "ODS-100 Ford PAB Mid",
    "family": "Boutique",
    "basedOn": "Dumble Overdrive Special",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/c3/Dumble.jpg/300px-Dumble.jpg",
    "imageAlt": "Dumble Overdrive Special amplifier",
    "originalCab": "Dumble 2x12 or 4x12 (G12-65, EVM)",
    "controls": [],
    "powerTubes": "EL34 (HRM), 6L6 (Ford)"
  },
  {
    "id": "ods-100-hrm",
    "name": "ODS-100 HRM",
    "family": "Boutique",
    "basedOn": "Dumble Overdrive Special",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/c3/Dumble.jpg/300px-Dumble.jpg",
    "imageAlt": "Dumble Overdrive Special amplifier",
    "originalCab": "Dumble 2x12 or 4x12 (G12-65, EVM)",
    "controls": [],
    "powerTubes": "EL34 (HRM), 6L6 (Ford)"
  },
  {
    "id": "ods-100-hrm-mid",
    "name": "ODS-100 HRM Mid",
    "family": "Boutique",
    "basedOn": "Dumble Overdrive Special",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/c3/Dumble.jpg/300px-Dumble.jpg",
    "imageAlt": "Dumble Overdrive Special amplifier",
    "originalCab": "Dumble 2x12 or 4x12 (G12-65, EVM)",
    "controls": [],
    "powerTubes": "EL34 (HRM), 6L6 (Ford)"
  },
  {
    "id": "plexi-100w-1970",
    "name": "Plexi 100W 1970",
    "family": "British",
    "basedOn": "1970 100W Marshall Plexi",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d5/SLP.png/300px-SLP.png",
    "imageAlt": "1970 100W Marshall Plexi amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "controls": [
      "Volume Normal",
      "Volume Treble",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Master (Plexi 2204 only)"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "plexi-100w-high",
    "name": "Plexi 100W High",
    "family": "British",
    "basedOn": "1969 100W Marshall Plexi",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a8/69Plexi.jpg/325px-69Plexi.jpg",
    "imageAlt": "1969 100W Marshall Plexi amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "controls": [
      "Volume Normal",
      "Volume Treble",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Master (Plexi 2204 only)"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "plexi-100w-jumped",
    "name": "Plexi 100W Jumped",
    "family": "British",
    "basedOn": "1969 100W Marshall Plexi",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a8/69Plexi.jpg/325px-69Plexi.jpg",
    "imageAlt": "1969 100W Marshall Plexi amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "controls": [
      "Volume Normal",
      "Volume Treble",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Master (Plexi 2204 only)"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "plexi-100w-normal",
    "name": "Plexi 100W Normal",
    "family": "British",
    "basedOn": "1969 100W Marshall Plexi",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a8/69Plexi.jpg/325px-69Plexi.jpg",
    "imageAlt": "1969 100W Marshall Plexi amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "controls": [
      "Volume Normal",
      "Volume Treble",
      "Bass",
      "Middle",
      "Treble",
      "Presence",
      "Master (Plexi 2204 only)"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "plexi-2204",
    "name": "Plexi 2204",
    "family": "British",
    "basedOn": "1981 50W Marshall JMP 2204",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a8/69Plexi.jpg/325px-69Plexi.jpg",
    "imageAlt": "1969 100W Marshall Plexi amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "controls": [
      "This amp",
      "model has a master volume control"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "plexi-50w-6550",
    "name": "Plexi 50W 6550",
    "family": "British",
    "basedOn": "1972 50W Marshall Plexi",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a8/69Plexi.jpg/325px-69Plexi.jpg",
    "imageAlt": "1969 100W Marshall Plexi amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "controls": [
      "High Treble Channel"
    ],
    "powerTubes": "6550"
  },
  {
    "id": "plexi-50w-6ca7",
    "name": "Plexi 50W 6CA7",
    "family": "British",
    "basedOn": "50W Marshall Plexi",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a8/69Plexi.jpg/325px-69Plexi.jpg",
    "imageAlt": "1969 100W Marshall Plexi amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "controls": [
      "High Treble Channel"
    ],
    "powerTubes": "6CA7"
  },
  {
    "id": "plexi-50w-6ca7-jumped",
    "name": "Plexi 50W 6CA7 Jumped",
    "family": "British",
    "basedOn": "50W Marshall Plexi",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a8/69Plexi.jpg/325px-69Plexi.jpg",
    "imageAlt": "1969 100W Marshall Plexi amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "controls": [
      "High Treble Channel"
    ],
    "powerTubes": "6CA7"
  },
  {
    "id": "plexi-50w-high-1",
    "name": "Plexi 50W High 1",
    "family": "British",
    "basedOn": "1967 50W Marshall Plexi",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a8/69Plexi.jpg/325px-69Plexi.jpg",
    "imageAlt": "1969 100W Marshall Plexi amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "controls": [
      "High Treble Channel"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "plexi-50w-high-2",
    "name": "Plexi 50W High 2",
    "family": "British",
    "basedOn": "1967 50W Marshall Plexi",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a8/69Plexi.jpg/325px-69Plexi.jpg",
    "imageAlt": "1969 100W Marshall Plexi amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "controls": [
      "High Treble Channel"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "plexi-50w-jumped",
    "name": "Plexi 50W Jumped",
    "family": "British",
    "basedOn": "1967 50W Marshall Plexi",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a8/69Plexi.jpg/325px-69Plexi.jpg",
    "imageAlt": "1969 100W Marshall Plexi amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "controls": [
      "High Treble Channel"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "plexi-50w-normal",
    "name": "Plexi 50W Normal",
    "family": "British",
    "basedOn": "1967 50W Marshall Plexi",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/a8/69Plexi.jpg/325px-69Plexi.jpg",
    "imageAlt": "1969 100W Marshall Plexi amplifier",
    "originalCab": "Marshall 4x12 (G12M, G12H)",
    "controls": [
      "High Treble Channel"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "plexi-studio-20",
    "name": "Plexi Studio 20",
    "family": "British",
    "basedOn": "Marshall SV20H",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/8/8e/Marshall_SV20H.jpg/400px-Marshall_SV20H.jpg",
    "imageAlt": "Marshall SV20H amplifier",
    "originalCab": "Celestion V-Type",
    "controls": [
      "See 1959SLP"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "porta-bass",
    "name": "Porta-Bass",
    "family": "Bass",
    "basedOn": "Ampeg Portaflex bass amp",
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ampeg%20Portaflex%20B-15N%20%281967-1968%29.jpg",
    "imageAlt": "Ampeg Portaflex B-15N amplifier",
    "imageSourceName": "Wikimedia Commons",
    "imageSourceUrl": "https://commons.wikimedia.org/wiki/File:Ampeg_Portaflex_B-15N_(1967-1968).jpg",
    "originalCab": "SVT cab with one or more 10”, 12” or 15” Eminence speakers",
    "controls": [
      "Single channel model"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "princetone-5f2",
    "name": "Princetone 5F2",
    "family": "American",
    "basedOn": "Fender Tweed Princeton, 5F2-A",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/b/bd/Princeton.jpg/300px-Princeton.jpg",
    "imageAlt": "Fender Tweed Princeton, 5F2-A amplifier",
    "originalCab": "Fender 1x10 (C10n)",
    "controls": [
      "Volume",
      "Tone"
    ],
    "powerTubes": "6V6"
  },
  {
    "id": "princetone-aa964",
    "name": "Princetone Aa964",
    "family": "American",
    "basedOn": "silverface Fender Princeton without reverb, AA964",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/b/bd/Princeton.jpg/300px-Princeton.jpg",
    "imageAlt": "Fender Tweed Princeton, 5F2-A amplifier",
    "originalCab": "Fender 1x10",
    "controls": [
      "Volume",
      "Bass",
      "Treble"
    ],
    "powerTubes": "6V6"
  },
  {
    "id": "princetone-reverb",
    "name": "Princetone Reverb",
    "family": "American",
    "basedOn": "1966 blackface Fender Princeton with reverb, AA964",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/e/e3/Princetonreverb.jpg/300px-Princetonreverb.jpg",
    "imageAlt": "1966 blackface Fender Princeton with reverb, AA964 amplifier",
    "originalCab": "Fender 1x10",
    "controls": [
      "Volume",
      "Bass",
      "Treble",
      "Reverb effect"
    ],
    "powerTubes": "6V6"
  },
  {
    "id": "pvh-6160-block",
    "name": "PVH 6160 Block",
    "family": "Modern High Gain",
    "basedOn": "Peavey \"Block Letter\" EVH 5150",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/7c/5150.jpg/300px-5150.jpg",
    "imageAlt": "Peavey \"Block Letter\" EVH 5150 amplifier",
    "originalCab": "Peavey 4x12 (Sheffield 1200)",
    "controls": [
      "Pre Gain",
      "Post Gain (Master)",
      "Low",
      "Mid",
      "High",
      "Resonance",
      "Depth",
      "Presence",
      "Bright switch (Rhythm channel only)",
      "Crunch switch (Rhythm channel only)"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "pvh-6160-block-clean",
    "name": "PVH 6160 Block Clean",
    "family": "Modern High Gain",
    "basedOn": "Peavey \"Block Letter\" EVH 5150",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/7c/5150.jpg/300px-5150.jpg",
    "imageAlt": "Peavey \"Block Letter\" EVH 5150 amplifier",
    "originalCab": "Peavey 4x12 (Sheffield 1200)",
    "controls": [
      "Pre Gain",
      "Post Gain (Master)",
      "Low",
      "Mid",
      "High",
      "Resonance",
      "Depth",
      "Presence",
      "Bright switch (Rhythm channel only)",
      "Crunch switch (Rhythm channel only)"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "pvh-6160-block-crunch",
    "name": "PVH 6160 Block Crunch",
    "family": "Modern High Gain",
    "basedOn": "Peavey \"Block Letter\" EVH 5150",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/7c/5150.jpg/300px-5150.jpg",
    "imageAlt": "Peavey \"Block Letter\" EVH 5150 amplifier",
    "originalCab": "Peavey 4x12 (Sheffield 1200)",
    "controls": [
      "Pre Gain",
      "Post Gain (Master)",
      "Low",
      "Mid",
      "High",
      "Resonance",
      "Depth",
      "Presence",
      "Bright switch (Rhythm channel only)",
      "Crunch switch (Rhythm channel only)"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "pvh-6160-plus-clean",
    "name": "PVH 6160+ Clean",
    "family": "Modern High Gain",
    "basedOn": "Peavey 6505+ / EVH 5150-II",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/af/6505.jpg/300px-6505.jpg",
    "imageAlt": "Peavey 6505+ / EVH 5150-II amplifier",
    "originalCab": "Peavey 4x12 (V30)",
    "controls": [
      "Low",
      "Mid",
      "High",
      "Post (Master)",
      "Resonance",
      "Presence"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "pvh-6160-plus-clean-bright",
    "name": "PVH 6160+ Clean Bright",
    "family": "Modern High Gain",
    "basedOn": "Peavey 6505+ / EVH 5150-II",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/af/6505.jpg/300px-6505.jpg",
    "imageAlt": "Peavey 6505+ / EVH 5150-II amplifier",
    "originalCab": "Peavey 4x12 (V30)",
    "controls": [
      "Low",
      "Mid",
      "High",
      "Post (Master)",
      "Resonance",
      "Presence"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "pvh-6160-plus-crunch",
    "name": "PVH 6160+ Crunch",
    "family": "Modern High Gain",
    "basedOn": "Peavey 6505+ / EVH 5150-II",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/af/6505.jpg/300px-6505.jpg",
    "imageAlt": "Peavey 6505+ / EVH 5150-II amplifier",
    "originalCab": "Peavey 4x12 (V30)",
    "controls": [
      "Low",
      "Mid",
      "High",
      "Post (Master)",
      "Resonance",
      "Presence"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "pvh-6160-plus-crunch-bright",
    "name": "PVH 6160+ Crunch Bright",
    "family": "Modern High Gain",
    "basedOn": "Peavey 6505+ / EVH 5150-II",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/af/6505.jpg/300px-6505.jpg",
    "imageAlt": "Peavey 6505+ / EVH 5150-II amplifier",
    "originalCab": "Peavey 4x12 (V30)",
    "controls": [
      "Low",
      "Mid",
      "High",
      "Post (Master)",
      "Resonance",
      "Presence"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "pvh-6160-plus-lead",
    "name": "PVH 6160+ Lead",
    "family": "Modern High Gain",
    "basedOn": "Peavey 6505+ / EVH 5150-II",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/a/af/6505.jpg/300px-6505.jpg",
    "imageAlt": "Peavey 6505+ / EVH 5150-II amplifier",
    "originalCab": "Peavey 4x12 (V30)",
    "controls": [
      "Low",
      "Mid",
      "High",
      "Post (Master)",
      "Resonance",
      "Presence"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "recto1-orange-modern",
    "name": "Recto1 Orange Modern",
    "family": "Modern High Gain",
    "basedOn": "MESA Dual Rectifier, 2 channels",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/0/00/Recto.png/300px-Recto.png",
    "imageAlt": "MESA Dual Rectifier, 2 channels amplifier",
    "originalCab": "Mesa 4x12 (V30)",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "recto1-orange-normal",
    "name": "Recto1 Orange Normal",
    "family": "Modern High Gain",
    "basedOn": "MESA Dual Rectifier, 2 channels",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/0/00/Recto.png/300px-Recto.png",
    "imageAlt": "MESA Dual Rectifier, 2 channels amplifier",
    "originalCab": "Mesa 4x12 (V30)",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "recto1-red",
    "name": "Recto1 Red",
    "family": "Modern High Gain",
    "basedOn": "MESA Dual Rectifier, 2 channels",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/0/00/Recto.png/300px-Recto.png",
    "imageAlt": "MESA Dual Rectifier, 2 channels amplifier",
    "originalCab": "Mesa 4x12 (V30)",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "recto2-orange-modern",
    "name": "Recto2 Orange Modern",
    "family": "Modern High Gain",
    "basedOn": "MESA Dual Rectifier, 3 channels",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/0/00/Recto.png/300px-Recto.png",
    "imageAlt": "MESA Dual Rectifier, 2 channels amplifier",
    "originalCab": "Mesa 4x12 (V30)",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "recto2-orange-vintage",
    "name": "Recto2 Orange Vintage",
    "family": "Modern High Gain",
    "basedOn": "MESA Dual Rectifier, 3 channels",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/0/00/Recto.png/300px-Recto.png",
    "imageAlt": "MESA Dual Rectifier, 2 channels amplifier",
    "originalCab": "Mesa 4x12 (V30)",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "recto2-red-modern",
    "name": "Recto2 Red Modern",
    "family": "Modern High Gain",
    "basedOn": "MESA Dual Rectifier, 3 channels",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/0/00/Recto.png/300px-Recto.png",
    "imageAlt": "MESA Dual Rectifier, 2 channels amplifier",
    "originalCab": "Mesa 4x12 (V30)",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "recto2-red-vintage",
    "name": "Recto2 Red Vintage",
    "family": "Modern High Gain",
    "basedOn": "MESA Dual Rectifier, 3 channels",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/0/00/Recto.png/300px-Recto.png",
    "imageAlt": "MESA Dual Rectifier, 2 channels amplifier",
    "originalCab": "Mesa 4x12 (V30)",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "revv-gen-green-1",
    "name": "Revv Gen Green 1",
    "family": "Modern High Gain",
    "basedOn": "REVV GENERATOR 120 MKIII",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3d/Revv_Generator_120.jpg/350px-Revv_Generator_120.jpg",
    "imageAlt": "REVV GENERATOR 120 MKIII amplifier",
    "originalCab": "Revv 4x12 (V30)",
    "controls": [
      "Drive",
      "Bright",
      "Aggression",
      "Cut",
      "Fat"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "revv-gen-green-2",
    "name": "Revv Gen Green 2",
    "family": "Modern High Gain",
    "basedOn": "REVV GENERATOR 120 MKIII",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3d/Revv_Generator_120.jpg/350px-Revv_Generator_120.jpg",
    "imageAlt": "REVV GENERATOR 120 MKIII amplifier",
    "originalCab": "Revv 4x12 (V30)",
    "controls": [
      "Drive",
      "Bright",
      "Aggression",
      "Cut",
      "Fat"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "revv-gen-green-3",
    "name": "Revv Gen Green 3",
    "family": "Modern High Gain",
    "basedOn": "REVV GENERATOR 120 MKIII",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3d/Revv_Generator_120.jpg/350px-Revv_Generator_120.jpg",
    "imageAlt": "REVV GENERATOR 120 MKIII amplifier",
    "originalCab": "Revv 4x12 (V30)",
    "controls": [
      "Drive",
      "Bright",
      "Aggression",
      "Cut",
      "Fat"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "revv-gen-purple-1",
    "name": "Revv Gen Purple 1",
    "family": "Modern High Gain",
    "basedOn": "REVV GENERATOR 120 MKIII",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3d/Revv_Generator_120.jpg/350px-Revv_Generator_120.jpg",
    "imageAlt": "REVV GENERATOR 120 MKIII amplifier",
    "originalCab": "Revv 4x12 (V30)",
    "controls": [
      "Drive",
      "Bright",
      "Aggression",
      "Cut",
      "Fat"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "revv-gen-purple-2",
    "name": "Revv Gen Purple 2",
    "family": "Modern High Gain",
    "basedOn": "REVV GENERATOR 120 MKIII",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3d/Revv_Generator_120.jpg/350px-Revv_Generator_120.jpg",
    "imageAlt": "REVV GENERATOR 120 MKIII amplifier",
    "originalCab": "Revv 4x12 (V30)",
    "controls": [
      "Drive",
      "Bright",
      "Aggression",
      "Cut",
      "Fat"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "revv-gen-purple-3",
    "name": "Revv Gen Purple 3",
    "family": "Modern High Gain",
    "basedOn": "REVV GENERATOR 120 MKIII",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3d/Revv_Generator_120.jpg/350px-Revv_Generator_120.jpg",
    "imageAlt": "REVV GENERATOR 120 MKIII amplifier",
    "originalCab": "Revv 4x12 (V30)",
    "controls": [
      "Drive",
      "Bright",
      "Aggression",
      "Cut",
      "Fat"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "revv-gen-red-1",
    "name": "Revv Gen Red 1",
    "family": "Modern High Gain",
    "basedOn": "REVV GENERATOR 120 MKIII",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3d/Revv_Generator_120.jpg/350px-Revv_Generator_120.jpg",
    "imageAlt": "REVV GENERATOR 120 MKIII amplifier",
    "originalCab": "Revv 4x12 (V30)",
    "controls": [
      "Drive",
      "Bright",
      "Aggression",
      "Cut",
      "Fat"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "revv-gen-red-2",
    "name": "Revv Gen Red 2",
    "family": "Modern High Gain",
    "basedOn": "REVV GENERATOR 120 MKIII",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3d/Revv_Generator_120.jpg/350px-Revv_Generator_120.jpg",
    "imageAlt": "REVV GENERATOR 120 MKIII amplifier",
    "originalCab": "Revv 4x12 (V30)",
    "controls": [
      "Drive",
      "Bright",
      "Aggression",
      "Cut",
      "Fat"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "revv-gen-red-3",
    "name": "Revv Gen Red 3",
    "family": "Modern High Gain",
    "basedOn": "REVV GENERATOR 120 MKIII",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3d/Revv_Generator_120.jpg/350px-Revv_Generator_120.jpg",
    "imageAlt": "REVV GENERATOR 120 MKIII amplifier",
    "originalCab": "Revv 4x12 (V30)",
    "controls": [
      "Drive",
      "Bright",
      "Aggression",
      "Cut",
      "Fat"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "ruby-rocket",
    "name": "Ruby Rocket",
    "family": "Class A",
    "basedOn": "Paul Ruby Rocket",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/9d/Rocket.jpg/300px-Rocket.jpg",
    "imageAlt": "Paul Ruby Rocket amplifier",
    "originalCab": "1x12 (Alnico, G12M)",
    "controls": [
      "Volume",
      "Bass",
      "Treble",
      "Cut",
      "Bright switch"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "ruby-rocket-bright",
    "name": "Ruby Rocket Bright",
    "family": "Class A",
    "basedOn": "Paul Ruby Rocket",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/9d/Rocket.jpg/300px-Rocket.jpg",
    "imageAlt": "Paul Ruby Rocket amplifier",
    "originalCab": "1x12 (Alnico, G12M)",
    "controls": [
      "Volume",
      "Bass",
      "Treble",
      "Cut",
      "Bright switch"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "shiver-clean",
    "name": "Shiver Clean",
    "family": "Boutique",
    "basedOn": "Bogner Shiva 20th Anniversary",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/e/ec/Shiva.png/325px-Shiva.png",
    "imageAlt": "Bogner Shiva 20th Anniversary amplifier",
    "originalCab": "Bogner 1x12 or 2x12 (Classic 80, V30)",
    "controls": [
      "Presence",
      "Excursion",
      "Depth",
      "Boost switch"
    ],
    "powerTubes": "KT88"
  },
  {
    "id": "shiver-lead",
    "name": "Shiver Lead",
    "family": "Boutique",
    "basedOn": "Bogner Shiva 20th Anniversary",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/e/ec/Shiva.png/325px-Shiva.png",
    "imageAlt": "Bogner Shiva 20th Anniversary amplifier",
    "originalCab": "Bogner 1x12 or 2x12 (Classic 80, V30)",
    "controls": [
      "Presence",
      "Excursion",
      "Depth",
      "Boost switch"
    ],
    "powerTubes": "KT88"
  },
  {
    "id": "solo-88-clean",
    "name": "Solo 88 Clean",
    "family": "Modern High Gain",
    "basedOn": "Soldano X88R preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/1/18/X88r.jpg/300px-X88r.jpg",
    "imageAlt": "Soldano X88R preamp amplifier",
    "controls": [
      "Gain",
      "Bass",
      "Middle",
      "Treble",
      "Volume",
      "Bright switch (Clean",
      "Rhythm channels only)"
    ],
    "powerTubes": "same as SLO-100 model (6L6)"
  },
  {
    "id": "solo-88-lead",
    "name": "Solo 88 Lead",
    "family": "Modern High Gain",
    "basedOn": "Soldano X88R preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/1/18/X88r.jpg/300px-X88r.jpg",
    "imageAlt": "Soldano X88R preamp amplifier",
    "controls": [
      "Gain",
      "Bass",
      "Middle",
      "Treble",
      "Volume",
      "Bright switch (Clean",
      "Rhythm channels only)"
    ],
    "powerTubes": "same as SLO-100 model (6L6)"
  },
  {
    "id": "solo-88-rhythm",
    "name": "Solo 88 Rhythm",
    "family": "Modern High Gain",
    "basedOn": "Soldano X88R preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/1/18/X88r.jpg/300px-X88r.jpg",
    "imageAlt": "Soldano X88R preamp amplifier",
    "controls": [
      "Gain",
      "Bass",
      "Middle",
      "Treble",
      "Volume",
      "Bright switch (Clean",
      "Rhythm channels only)"
    ],
    "powerTubes": "same as SLO-100 model (6L6)"
  },
  {
    "id": "solo-99-clean",
    "name": "Solo 99 Clean",
    "family": "Modern High Gain",
    "basedOn": "Soldano/Caswell X99 preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/44/Cliff_X88.jpg/325px-Cliff_X88.jpg",
    "imageAlt": "Soldano/Caswell X99 preamp amplifier",
    "controls": [
      "Gain",
      "Bass",
      "Middle",
      "Treble",
      "Volume",
      "Bright switch"
    ],
    "powerTubes": "same as SLO-100 model (6L6)"
  },
  {
    "id": "solo-99-lead",
    "name": "Solo 99 Lead",
    "family": "Modern High Gain",
    "basedOn": "Soldano/Caswell X99 preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/44/Cliff_X88.jpg/325px-Cliff_X88.jpg",
    "imageAlt": "Soldano/Caswell X99 preamp amplifier",
    "controls": [
      "Gain",
      "Bass",
      "Middle",
      "Treble",
      "Volume",
      "Bright switch"
    ],
    "powerTubes": "same as SLO-100 model (6L6)"
  },
  {
    "id": "solo-99-lead-bright",
    "name": "Solo 99 Lead Bright",
    "family": "Modern High Gain",
    "basedOn": "Soldano/Caswell X99 preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/44/Cliff_X88.jpg/325px-Cliff_X88.jpg",
    "imageAlt": "Soldano/Caswell X99 preamp amplifier",
    "controls": [
      "Gain",
      "Bass",
      "Middle",
      "Treble",
      "Volume",
      "Bright switch"
    ],
    "powerTubes": "same as SLO-100 model (6L6)"
  },
  {
    "id": "solo-100-clean",
    "name": "Solo 100 Clean",
    "family": "Modern High Gain",
    "basedOn": "Soldano SLO-100",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/4e/SOLDANO_SLO-100.jpg/350px-SOLDANO_SLO-100.jpg",
    "imageAlt": "Soldano SLO-100 amplifier",
    "originalCab": "Soldano 4x12 (Eminence)",
    "controls": [
      "Gain",
      "Bass",
      "Middle",
      "Treble",
      "Master",
      "Presence",
      "Bright switch (Normal channel only)",
      "Depth (with Depth mod)"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "solo-100-lead",
    "name": "Solo 100 Lead",
    "family": "Modern High Gain",
    "basedOn": "Soldano SLO-100",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/4e/SOLDANO_SLO-100.jpg/350px-SOLDANO_SLO-100.jpg",
    "imageAlt": "Soldano SLO-100 amplifier",
    "originalCab": "Soldano 4x12 (Eminence)",
    "controls": [
      "Gain",
      "Bass",
      "Middle",
      "Treble",
      "Master",
      "Presence",
      "Bright switch (Normal channel only)",
      "Depth (with Depth mod)"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "solo-100-rhythm",
    "name": "Solo 100 Rhythm",
    "family": "Modern High Gain",
    "basedOn": "Soldano SLO-100",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/4e/SOLDANO_SLO-100.jpg/350px-SOLDANO_SLO-100.jpg",
    "imageAlt": "Soldano SLO-100 amplifier",
    "originalCab": "Soldano 4x12 (Eminence)",
    "controls": [
      "Gain",
      "Bass",
      "Middle",
      "Treble",
      "Master",
      "Presence",
      "Bright switch (Normal channel only)",
      "Depth (with Depth mod)"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "spawn-nitrous-1",
    "name": "Spawn Nitrous 1",
    "family": "Modern High Gain",
    "basedOn": "Splawn Nitro",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/ff/Nitro.gif/300px-Nitro.gif",
    "imageAlt": "Splawn Nitro amplifier",
    "originalCab": "Splawn 4x12 (G12M, G12-65, V30)",
    "controls": [
      "Resonance",
      "Depth",
      "Presence",
      "Bass",
      "Middle",
      "Treble",
      "Master",
      "Gain"
    ],
    "powerTubes": "KT88"
  },
  {
    "id": "spawn-nitrous-2",
    "name": "Spawn Nitrous 2",
    "family": "Modern High Gain",
    "basedOn": "Splawn Nitro",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/ff/Nitro.gif/300px-Nitro.gif",
    "imageAlt": "Splawn Nitro amplifier",
    "originalCab": "Splawn 4x12 (G12M, G12-65, V30)",
    "controls": [
      "Resonance",
      "Depth",
      "Presence",
      "Bass",
      "Middle",
      "Treble",
      "Master",
      "Gain"
    ],
    "powerTubes": "KT88"
  },
  {
    "id": "spawn-q-rod-od1-1",
    "name": "Spawn Q-Rod OD1-1",
    "family": "Modern High Gain",
    "basedOn": "Splawn Quickrod",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/b/be/Quickrod.jpg/300px-Quickrod.jpg",
    "imageAlt": "Splawn Quickrod amplifier",
    "originalCab": "Splawn (G12M, G12-65, V30)",
    "controls": [
      "Presence",
      "Bass",
      "Middle",
      "Treble",
      "Volume",
      "Gain",
      "Mode"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "spawn-q-rod-od1-2",
    "name": "Spawn Q-Rod OD1-2",
    "family": "Modern High Gain",
    "basedOn": "Splawn Quickrod",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/b/be/Quickrod.jpg/300px-Quickrod.jpg",
    "imageAlt": "Splawn Quickrod amplifier",
    "originalCab": "Splawn (G12M, G12-65, V30)",
    "controls": [
      "Presence",
      "Bass",
      "Middle",
      "Treble",
      "Volume",
      "Gain",
      "Mode"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "spawn-q-rod-od1-3",
    "name": "Spawn Q-Rod OD1-3",
    "family": "Modern High Gain",
    "basedOn": "Splawn Quickrod",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/b/be/Quickrod.jpg/300px-Quickrod.jpg",
    "imageAlt": "Splawn Quickrod amplifier",
    "originalCab": "Splawn (G12M, G12-65, V30)",
    "controls": [
      "Presence",
      "Bass",
      "Middle",
      "Treble",
      "Volume",
      "Gain",
      "Mode"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "spawn-q-rod-od2-1",
    "name": "Spawn Q-Rod OD2-1",
    "family": "Modern High Gain",
    "basedOn": "Splawn Quickrod",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/b/be/Quickrod.jpg/300px-Quickrod.jpg",
    "imageAlt": "Splawn Quickrod amplifier",
    "originalCab": "Splawn (G12M, G12-65, V30)",
    "controls": [
      "Presence",
      "Bass",
      "Middle",
      "Treble",
      "Volume",
      "Gain",
      "Mode"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "spawn-q-rod-od2-2",
    "name": "Spawn Q-Rod OD2-2",
    "family": "Modern High Gain",
    "basedOn": "Splawn Quickrod",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/b/be/Quickrod.jpg/300px-Quickrod.jpg",
    "imageAlt": "Splawn Quickrod amplifier",
    "originalCab": "Splawn (G12M, G12-65, V30)",
    "controls": [
      "Presence",
      "Bass",
      "Middle",
      "Treble",
      "Volume",
      "Gain",
      "Mode"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "spawn-q-rod-od2-3",
    "name": "Spawn Q-Rod OD2-3",
    "family": "Modern High Gain",
    "basedOn": "Splawn Quickrod",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/b/be/Quickrod.jpg/300px-Quickrod.jpg",
    "imageAlt": "Splawn Quickrod amplifier",
    "originalCab": "Splawn (G12M, G12-65, V30)",
    "controls": [
      "Presence",
      "Bass",
      "Middle",
      "Treble",
      "Volume",
      "Gain",
      "Mode"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "suhr-badger-18",
    "name": "Suhr Badger 18",
    "family": "Boutique",
    "basedOn": "Suhr Badger 18",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3c/Badger18.jpg/325px-Badger18.jpg",
    "imageAlt": "Suhr Badger 18 amplifier",
    "originalCab": "Suhr 1x12 or 2x12 (V30)",
    "controls": [
      "Bass",
      "Middle",
      "Treble",
      "Gain",
      "Power (controls Power Scaling",
      "not modeled)",
      "Drive (acts as Master with Power at 10)"
    ],
    "powerTubes": "EL84 (Badger 18), EL34 (Badger 30)"
  },
  {
    "id": "suhr-badger-30",
    "name": "Suhr Badger 30",
    "family": "Boutique",
    "basedOn": "Suhr Badger 30",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/c3/Badger30.jpg/325px-Badger30.jpg",
    "imageAlt": "Suhr Badger 30 amplifier",
    "controls": []
  },
  {
    "id": "super-verb-normal",
    "name": "Super Verb Normal",
    "family": "American",
    "basedOn": "1964 Fender Super Reverb, AB763",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/6/62/Superreverb.jpg/300px-Superreverb.jpg",
    "imageAlt": "1964 Fender Super Reverb, AB763 amplifier",
    "originalCab": "Fender 4x10 (C10R, C10Q, P10R)",
    "controls": [
      "Volume",
      "Bass",
      "Middle (Vibrato channel only)",
      "Treble",
      "Bright switch",
      "Reverb effect",
      "Vibrato effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "super-verb-vibrato",
    "name": "Super Verb Vibrato",
    "family": "American",
    "basedOn": "1964 Fender Super Reverb, AB763",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/6/62/Superreverb.jpg/300px-Superreverb.jpg",
    "imageAlt": "1964 Fender Super Reverb, AB763 amplifier",
    "originalCab": "Fender 4x10 (C10R, C10Q, P10R)",
    "controls": [
      "Volume",
      "Bass",
      "Middle (Vibrato channel only)",
      "Treble",
      "Bright switch",
      "Reverb effect",
      "Vibrato effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "supertweed",
    "name": "Supertweed",
    "family": "Other",
    "basedOn": "custom model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "custom model amplifier",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "supremo-trem",
    "name": "Supremo Trem",
    "family": "Boutique",
    "basedOn": "Supro 1964T",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/b/ba/Supro.png/300px-Supro.png",
    "imageAlt": "Supro 1964T amplifier",
    "originalCab": "Supro 2x12",
    "controls": [
      "Volume",
      "Tone"
    ],
    "powerTubes": "6973"
  },
  {
    "id": "supro-black-magick",
    "name": "Supro Black Magick",
    "family": "Boutique",
    "basedOn": "Supro 1695T Black Magick",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/41/SUPRO_1695T_BLACK_HEAD.png/325px-SUPRO_1695T_BLACK_HEAD.png",
    "imageAlt": "Supro 1695T Black Magick amplifier",
    "controls": [
      "Volume",
      "Tone",
      "Tremolo effect"
    ],
    "powerTubes": "6973"
  },
  {
    "id": "sv-bass-1",
    "name": "SV Bass 1",
    "family": "Bass",
    "basedOn": "Ampeg SVT bass amp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/4a/Ampeg.jpg/300px-Ampeg.jpg",
    "imageAlt": "Ampeg SVT bass amp amplifier",
    "originalCab": "SVT 8x10",
    "controls": [
      "Volume",
      "Treble",
      "Midrange",
      "Bass",
      "Master",
      "Midrange switch",
      "Ultra-Hi switch (= Bright)",
      "Ultra-Lo switch"
    ],
    "powerTubes": "6550"
  },
  {
    "id": "sv-bass-2",
    "name": "SV Bass 2",
    "family": "Bass",
    "basedOn": "Ampeg SVT bass amp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/4a/Ampeg.jpg/300px-Ampeg.jpg",
    "imageAlt": "Ampeg SVT bass amp amplifier",
    "originalCab": "SVT 8x10",
    "controls": [
      "Volume",
      "Treble",
      "Midrange",
      "Bass",
      "Master",
      "Midrange switch",
      "Ultra-Hi switch (= Bright)",
      "Ultra-Lo switch"
    ],
    "powerTubes": "6550"
  },
  {
    "id": "texas-star-clean",
    "name": "Texas Star Clean",
    "family": "Modern High Gain",
    "basedOn": "MESA Lone Star Classic",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/e/ef/Lonestar.png/300px-Lonestar.png",
    "imageAlt": "MESA Lone Star Classic amplifier",
    "originalCab": "Mesa 2x12 (C90)",
    "controls": [
      "Gain",
      "Drive (Lead channel)",
      "Treble",
      "Mid",
      "Bass",
      "Presence",
      "Master",
      "Channel Master",
      "Voicing"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "texas-star-lead",
    "name": "Texas Star Lead",
    "family": "Modern High Gain",
    "basedOn": "MESA Lone Star Classic",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/e/ef/Lonestar.png/300px-Lonestar.png",
    "imageAlt": "MESA Lone Star Classic amplifier",
    "originalCab": "Mesa 2x12 (C90)",
    "controls": [
      "Gain",
      "Drive (Lead channel)",
      "Treble",
      "Mid",
      "Bass",
      "Presence",
      "Master",
      "Channel Master",
      "Voicing"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "thordendal-modern",
    "name": "Thordendal Modern",
    "family": "Modern High Gain",
    "basedOn": "custom model of MESA Dual Rectifier",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/2/27/Meshuggah.jpg/300px-Meshuggah.jpg",
    "imageAlt": "custom model of MESA Dual Rectifier amplifier",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "thordendal-vintage",
    "name": "Thordendal Vintage",
    "family": "Modern High Gain",
    "basedOn": "custom model of MESA Dual Rectifier",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/2/27/Meshuggah.jpg/300px-Meshuggah.jpg",
    "imageAlt": "custom model of MESA Dual Rectifier amplifier",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "tremolo-lux",
    "name": "Tremolo Lux",
    "family": "American",
    "basedOn": "blackface Fender Tremolux, AA763",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/6/6d/Tremolux.jpg/300px-Tremolux.jpg",
    "imageAlt": "blackface Fender Tremolux, AA763 amplifier",
    "originalCab": "Fender 2x10",
    "controls": [
      "Bright switch",
      "Treble",
      "Bass",
      "Tremolo effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "triple-crest-2",
    "name": "Triple Crest 2",
    "family": "Modern High Gain",
    "basedOn": "MESA Triple Crown TC-100",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f7/Triplecrown.jpg/300px-Triplecrown.jpg",
    "imageAlt": "MESA Triple Crown TC-100 amplifier",
    "originalCab": "MESA cab with V30 speakers",
    "controls": [
      "Gain",
      "Treble",
      "Mid",
      "Bass",
      "Normal",
      "Tight switch",
      "Presence",
      "Reverb effect",
      "Master",
      "attenuator"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "triple-crest-3",
    "name": "Triple Crest 3",
    "family": "Modern High Gain",
    "basedOn": "MESA Triple Crown TC-100",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/f/f7/Triplecrown.jpg/300px-Triplecrown.jpg",
    "imageAlt": "MESA Triple Crown TC-100 amplifier",
    "originalCab": "MESA cab with V30 speakers",
    "controls": [
      "Gain",
      "Treble",
      "Mid",
      "Bass",
      "Normal",
      "Tight switch",
      "Presence",
      "Reverb effect",
      "Master",
      "attenuator"
    ],
    "powerTubes": "EL34"
  },
  {
    "id": "tube-pre",
    "name": "Tube Pre",
    "family": "Other",
    "basedOn": "generic tube preamp model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/e/ef/Logo_small.png",
    "imageAlt": "generic tube preamp model amplifier",
    "controls": [],
    "powerTubes": "5881"
  },
  {
    "id": "two-stone-j35",
    "name": "Two Stone J35",
    "family": "Boutique",
    "basedOn": "Two-Rock Jet 35",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/47/Jet35.jpg/300px-Jet35.jpg",
    "imageAlt": "Two-Rock Jet 35 amplifier",
    "controls": [
      "Treble",
      "Mid",
      "Bass",
      "Gain",
      "Master",
      "Lead Gain",
      "Pull Bright",
      "Pre Amp Bypass switch"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "two-stone-j35-pab",
    "name": "Two Stone J35 PAB",
    "family": "Boutique",
    "basedOn": "Two-Rock Jet 35",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/47/Jet35.jpg/300px-Jet35.jpg",
    "imageAlt": "Two-Rock Jet 35 amplifier",
    "controls": [
      "Treble",
      "Mid",
      "Bass",
      "Gain",
      "Master",
      "Lead Gain",
      "Pull Bright",
      "Pre Amp Bypass switch"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-bass-400-1",
    "name": "USA Bass 400 1",
    "family": "Bass",
    "basedOn": "MESA Bass 400 bass amp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/6/69/Mesabass400.jpg/300px-Mesabass400.jpg",
    "imageAlt": "MESA Bass 400 bass amp amplifier",
    "originalCab": "Mesa bass speaker cabinet",
    "controls": [
      "Bass",
      "Middle",
      "Treble",
      "Pull Bright",
      "Bass Shift",
      "Treble Shift",
      "7-band GEQ",
      "Master",
      "Volume"
    ],
    "powerTubes": "6550"
  },
  {
    "id": "usa-bass-400-2",
    "name": "USA Bass 400 2",
    "family": "Bass",
    "basedOn": "MESA Bass 400 bass amp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/6/69/Mesabass400.jpg/300px-Mesabass400.jpg",
    "imageAlt": "MESA Bass 400 bass amp amplifier",
    "originalCab": "Mesa bass speaker cabinet",
    "controls": [
      "Bass",
      "Middle",
      "Treble",
      "Pull Bright",
      "Bass Shift",
      "Treble Shift",
      "7-band GEQ",
      "Master",
      "Volume"
    ],
    "powerTubes": "6550"
  },
  {
    "id": "usa-jp-iic-plus-green",
    "name": "USA JP IIC+ Green",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie JP-2C",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/98/Jp2c.jpg/300px-Jp2c.jpg",
    "imageAlt": "MESA/Boogie JP-2C amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Master",
      "Presence",
      "Treble",
      "Mid",
      "Bass",
      "Mid",
      "Boost switch )",
      "graphic EQ",
      "Reverb effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-jp-iic-plus-red",
    "name": "USA JP IIC+ Red",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie JP-2C",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/98/Jp2c.jpg/300px-Jp2c.jpg",
    "imageAlt": "MESA/Boogie JP-2C amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Master",
      "Presence",
      "Treble",
      "Mid",
      "Bass",
      "Mid",
      "Boost switch )",
      "graphic EQ",
      "Reverb effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-jp-iic-plus-red-shred",
    "name": "USA JP IIC+ Red Shred",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie JP-2C",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/98/Jp2c.jpg/300px-Jp2c.jpg",
    "imageAlt": "MESA/Boogie JP-2C amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Master",
      "Presence",
      "Treble",
      "Mid",
      "Bass",
      "Mid",
      "Boost switch )",
      "graphic EQ",
      "Reverb effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-jp-iic-plus-yellow",
    "name": "USA JP IIC+ Yellow",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie JP-2C",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/98/Jp2c.jpg/300px-Jp2c.jpg",
    "imageAlt": "MESA/Boogie JP-2C amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Master",
      "Presence",
      "Treble",
      "Mid",
      "Bass",
      "Mid",
      "Boost switch )",
      "graphic EQ",
      "Reverb effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-jp-iic-plus-yellow-shred",
    "name": "USA JP IIC+ Yellow Shred",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie JP-2C",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/9/98/Jp2c.jpg/300px-Jp2c.jpg",
    "imageAlt": "MESA/Boogie JP-2C amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Master",
      "Presence",
      "Treble",
      "Mid",
      "Bass",
      "Mid",
      "Boost switch )",
      "graphic EQ",
      "Reverb effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-metro-blues",
    "name": "USA Metro Blues",
    "family": "Modern High Gain",
    "basedOn": "MESA Subway Blues",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/6/66/Subwayblues.png",
    "imageAlt": "MESA Subway Blues amplifier",
    "controls": [
      "Volume",
      "Bass",
      "Mid",
      "Treble",
      "FAT switch",
      "Reverb effect"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "usa-mk-iic-plus",
    "name": "USA MK IIC+",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark IIC+",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/7e/Iic%2B.jpg/300px-Iic%2B.jpg",
    "imageAlt": "MESA/Boogie Mark IIC+ amplifier",
    "originalCab": "Mesa 1x12 (C90, EVM)",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-iic-plus-bright",
    "name": "USA MK IIC+ Bright",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark IIC+",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/7e/Iic%2B.jpg/300px-Iic%2B.jpg",
    "imageAlt": "MESA/Boogie Mark IIC+ amplifier",
    "originalCab": "Mesa 1x12 (C90, EVM)",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-iic-plus-deep",
    "name": "USA MK IIC+ Deep",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark IIC+",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/7e/Iic%2B.jpg/300px-Iic%2B.jpg",
    "imageAlt": "MESA/Boogie Mark IIC+ amplifier",
    "originalCab": "Mesa 1x12 (C90, EVM)",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-iic-plus-deep-bright",
    "name": "USA MK IIC+ Deep Bright",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark IIC+",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/7e/Iic%2B.jpg/300px-Iic%2B.jpg",
    "imageAlt": "MESA/Boogie Mark IIC+ amplifier",
    "originalCab": "Mesa 1x12 (C90, EVM)",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-iic-plus-plus",
    "name": "USA MK IIC++",
    "family": "Modern High Gain",
    "basedOn": "custom model of MESA/Boogie IIC+",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/7e/Iic%2B.jpg/300px-Iic%2B.jpg",
    "imageAlt": "MESA/Boogie Mark IIC+ amplifier",
    "originalCab": "Mesa 1x12 (C90, EVM)",
    "controls": [],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-iv-lead-rhythm",
    "name": "USA MK IV Lead / Rhythm",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark IV",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3b/Markiv.jpg/300px-Markiv.jpg",
    "imageAlt": "MESA/Boogie Mark IV amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Pentode",
      "Triode switch",
      "Class-A",
      "Simul-Class switch",
      "Voicing switch (Mid Gain",
      "Harmonics)",
      "Variac"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-iv-lead-bright",
    "name": "USA MK IV Lead Bright",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark IV",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3b/Markiv.jpg/300px-Markiv.jpg",
    "imageAlt": "MESA/Boogie Mark IV amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Pentode",
      "Triode switch",
      "Class-A",
      "Simul-Class switch",
      "Voicing switch (Mid Gain",
      "Harmonics)",
      "Variac"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-iv-lead-mid-gain",
    "name": "USA MK IV Lead Mid Gain",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark IV",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3b/Markiv.jpg/300px-Markiv.jpg",
    "imageAlt": "MESA/Boogie Mark IV amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Pentode",
      "Triode switch",
      "Class-A",
      "Simul-Class switch",
      "Voicing switch (Mid Gain",
      "Harmonics)",
      "Variac"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-iv-lead-mid-gain-bright",
    "name": "USA MK IV Lead Mid Gain Bright",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark IV",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3b/Markiv.jpg/300px-Markiv.jpg",
    "imageAlt": "MESA/Boogie Mark IV amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Pentode",
      "Triode switch",
      "Class-A",
      "Simul-Class switch",
      "Voicing switch (Mid Gain",
      "Harmonics)",
      "Variac"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-iv-rhythm-1",
    "name": "USA MK IV Rhythm 1",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark IV",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3b/Markiv.jpg/300px-Markiv.jpg",
    "imageAlt": "MESA/Boogie Mark IV amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Pentode",
      "Triode switch",
      "Class-A",
      "Simul-Class switch",
      "Voicing switch (Mid Gain",
      "Harmonics)",
      "Variac"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-iv-rhythm-2",
    "name": "USA MK IV Rhythm 2",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark IV",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/3/3b/Markiv.jpg/300px-Markiv.jpg",
    "imageAlt": "MESA/Boogie Mark IV amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Pentode",
      "Triode switch",
      "Class-A",
      "Simul-Class switch",
      "Voicing switch (Mid Gain",
      "Harmonics)",
      "Variac"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-v-green",
    "name": "USA MK V Green",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark V",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d6/MARK_V.jpg/300px-MARK_V.jpg",
    "imageAlt": "MESA/Boogie Mark V amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Bass",
      "Mid",
      "Treble",
      "Presence",
      "Master",
      "Normal",
      "Bright",
      "EQ switch",
      "power switch",
      "pentode",
      "triode switch"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-v-red-iic-plus",
    "name": "USA MK V Red IIC+",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark V",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d6/MARK_V.jpg/300px-MARK_V.jpg",
    "imageAlt": "MESA/Boogie Mark V amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Bass",
      "Mid",
      "Treble",
      "Presence",
      "Master",
      "Normal",
      "Bright",
      "EQ switch",
      "power switch",
      "pentode",
      "triode switch"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-v-red-iic-plus-bright",
    "name": "USA MK V Red IIC+ Bright",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark V",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d6/MARK_V.jpg/300px-MARK_V.jpg",
    "imageAlt": "MESA/Boogie Mark V amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Bass",
      "Mid",
      "Treble",
      "Presence",
      "Master",
      "Normal",
      "Bright",
      "EQ switch",
      "power switch",
      "pentode",
      "triode switch"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-v-red-mkiv",
    "name": "USA MK V Red Mkiv",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark V",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d6/MARK_V.jpg/300px-MARK_V.jpg",
    "imageAlt": "MESA/Boogie Mark V amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Bass",
      "Mid",
      "Treble",
      "Presence",
      "Master",
      "Normal",
      "Bright",
      "EQ switch",
      "power switch",
      "pentode",
      "triode switch"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-v-red-mkiv-bright",
    "name": "USA MK V Red Mkiv Bright",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark V",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d6/MARK_V.jpg/300px-MARK_V.jpg",
    "imageAlt": "MESA/Boogie Mark V amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Bass",
      "Mid",
      "Treble",
      "Presence",
      "Master",
      "Normal",
      "Bright",
      "EQ switch",
      "power switch",
      "pentode",
      "triode switch"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-v-red-xt",
    "name": "USA MK V Red XT",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark V",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d6/MARK_V.jpg/300px-MARK_V.jpg",
    "imageAlt": "MESA/Boogie Mark V amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Bass",
      "Mid",
      "Treble",
      "Presence",
      "Master",
      "Normal",
      "Bright",
      "EQ switch",
      "power switch",
      "pentode",
      "triode switch"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-mk-v-red-xt-bright",
    "name": "USA MK V Red XT Bright",
    "family": "Modern High Gain",
    "basedOn": "MESA/Boogie Mark V",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/d/d6/MARK_V.jpg/300px-MARK_V.jpg",
    "imageAlt": "MESA/Boogie Mark V amplifier",
    "originalCab": "Mesa 1x12 (C90, V30)",
    "controls": [
      "Bass",
      "Mid",
      "Treble",
      "Presence",
      "Master",
      "Normal",
      "Bright",
      "EQ switch",
      "power switch",
      "pentode",
      "triode switch"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "usa-pre-clean",
    "name": "USA Pre Clean",
    "family": "Modern High Gain",
    "basedOn": "MESA TriAxis preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/cc/Triaxis.png/300px-Triaxis.png",
    "imageAlt": "MESA TriAxis preamp amplifier",
    "controls": [],
    "powerTubes": "same as USA Lead model (6L6)"
  },
  {
    "id": "usa-pre-ld1-red",
    "name": "USA Pre LD1 Red",
    "family": "Modern High Gain",
    "basedOn": "MESA TriAxis preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/cc/Triaxis.png/300px-Triaxis.png",
    "imageAlt": "MESA TriAxis preamp amplifier",
    "controls": [],
    "powerTubes": "same as USA Lead model (6L6)"
  },
  {
    "id": "usa-pre-ld2-green",
    "name": "USA Pre LD2 Green",
    "family": "Modern High Gain",
    "basedOn": "MESA TriAxis preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/cc/Triaxis.png/300px-Triaxis.png",
    "imageAlt": "MESA TriAxis preamp amplifier",
    "controls": [],
    "powerTubes": "same as USA Lead model (6L6)"
  },
  {
    "id": "usa-pre-ld2-red",
    "name": "USA Pre LD2 Red",
    "family": "Modern High Gain",
    "basedOn": "MESA TriAxis preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/cc/Triaxis.png/300px-Triaxis.png",
    "imageAlt": "MESA TriAxis preamp amplifier",
    "controls": [],
    "powerTubes": "same as USA Lead model (6L6)"
  },
  {
    "id": "usa-pre-ld2-yellow",
    "name": "USA Pre LD2 Yellow",
    "family": "Modern High Gain",
    "basedOn": "MESA TriAxis preamp",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/c/cc/Triaxis.png/300px-Triaxis.png",
    "imageAlt": "MESA TriAxis preamp amplifier",
    "controls": [],
    "powerTubes": "same as USA Lead model (6L6)"
  },
  {
    "id": "vibra-king",
    "name": "Vibra-King",
    "family": "American",
    "basedOn": "custom Fender Vibro-King",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/78/Vibro-king.jpg/300px-Vibro-king.jpg",
    "imageAlt": "custom Fender Vibro-King amplifier",
    "originalCab": "Fender 3x10",
    "controls": [
      "Volume",
      "Treble",
      "Bass",
      "Middle",
      "Fat switch",
      "Tremolo effect",
      "Reverb effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "vibra-king-fat",
    "name": "Vibra-King Fat",
    "family": "American",
    "basedOn": "custom Fender Vibro-King",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/7/78/Vibro-king.jpg/300px-Vibro-king.jpg",
    "imageAlt": "custom Fender Vibro-King amplifier",
    "originalCab": "Fender 3x10",
    "controls": [
      "Volume",
      "Treble",
      "Bass",
      "Middle",
      "Fat switch",
      "Tremolo effect",
      "Reverb effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "vibrato-lux",
    "name": "Vibrato Lux",
    "family": "American",
    "basedOn": "1962/1963 brownface Fender Vibrolux, 6G11",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/4/4c/Vibrolux.jpg/300px-Vibrolux.jpg",
    "imageAlt": "1962/1963 brownface Fender Vibrolux, 6G11 amplifier",
    "originalCab": "Fender 2x10 or 1x12",
    "controls": [
      "Bass",
      "Treble",
      "Vibrato effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "vibrato-verb",
    "name": "Vibrato Verb",
    "family": "American",
    "basedOn": "Fender Vibroverb, old model",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/3/3d/Vibroverb.jpg",
    "imageAlt": "Fender Vibroverb, old model amplifier",
    "originalCab": "Fender 1x15 (Jensen C15N, JBL D130, Eminence)",
    "controls": [
      "Volume",
      "Bass",
      "Treble",
      "Bright switch",
      "Reverb effect",
      "Tremolo effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "vibrato-verb-aa",
    "name": "Vibrato Verb AA",
    "family": "American",
    "basedOn": "1964 blackface Fender Vibroverb, AA763",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/3/3d/Vibroverb.jpg",
    "imageAlt": "Fender Vibroverb, old model amplifier",
    "originalCab": "Fender 1x15 (Jensen C15N, JBL D130, Eminence)",
    "controls": [
      "Volume",
      "Bass",
      "Treble",
      "Bright switch",
      "Reverb effect",
      "Tremolo effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "vibrato-verb-ab",
    "name": "Vibrato Verb AB",
    "family": "American",
    "basedOn": "Fender Vibroverb, AB763",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/3/3d/Vibroverb.jpg",
    "imageAlt": "Fender Vibroverb, old model amplifier",
    "originalCab": "Fender 1x15 (Jensen C15N, JBL D130, Eminence)",
    "controls": [
      "Volume",
      "Bass",
      "Treble",
      "Bright switch",
      "Reverb effect",
      "Tremolo effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "vibrato-verb-srv",
    "name": "Vibrato Verb SRV",
    "family": "American",
    "basedOn": "Fender Vibroverb Custom Reissue",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/3/3d/Vibroverb.jpg",
    "imageAlt": "Fender Vibroverb, old model amplifier",
    "originalCab": "Fender 1x15 (Jensen C15N, JBL D130, Eminence)",
    "controls": [
      "Volume",
      "Bass",
      "Treble",
      "Bright switch",
      "Reverb effect",
      "Tremolo effect"
    ],
    "powerTubes": "6L6"
  },
  {
    "id": "wrecker-express",
    "name": "Wrecker Express",
    "family": "Class A",
    "basedOn": "Trainwreck Express",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/5/53/Trainwreck.jpg/300px-Trainwreck.jpg",
    "imageAlt": "Trainwreck Express amplifier",
    "originalCab": "Marshall 4x12 (G12-M25)",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "wrecker-express-bright",
    "name": "Wrecker Express Bright",
    "family": "Class A",
    "basedOn": "Trainwreck Express",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/5/53/Trainwreck.jpg/300px-Trainwreck.jpg",
    "imageAlt": "Trainwreck Express amplifier",
    "originalCab": "Marshall 4x12 (G12-M25)",
    "controls": [],
    "powerTubes": "EL34"
  },
  {
    "id": "wrecker-liverpool",
    "name": "Wrecker Liverpool",
    "family": "Class A",
    "basedOn": "Trainwreck Liverpool",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/5/53/Trainwreck.jpg/300px-Trainwreck.jpg",
    "imageAlt": "Trainwreck Liverpool amplifier",
    "originalCab": "Marshall 4x12 (G12-M25)",
    "controls": [
      "Volume",
      "Bass",
      "Mid",
      "Treble",
      "Presence",
      "sparkle"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "wrecker-liverpool-bright",
    "name": "Wrecker Liverpool Bright",
    "family": "Class A",
    "basedOn": "Trainwreck Liverpool",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/5/53/Trainwreck.jpg/300px-Trainwreck.jpg",
    "imageAlt": "Trainwreck Liverpool amplifier",
    "originalCab": "Marshall 4x12 (G12-M25)",
    "controls": [
      "Volume",
      "Bass",
      "Mid",
      "Treble",
      "Presence",
      "sparkle"
    ],
    "powerTubes": "EL84"
  },
  {
    "id": "wrecker-rocket",
    "name": "Wrecker Rocket",
    "family": "Class A",
    "basedOn": "Trainwreck Rocket",
    "imageUrl": "https://wiki.fractalaudio.com/wiki/images/thumb/5/53/Trainwreck.jpg/300px-Trainwreck.jpg",
    "imageAlt": "Trainwreck Rocket amplifier",
    "originalCab": "Marshall 4x12 (G12-M25)",
    "controls": [
      "Volume",
      "Treble",
      "Bass",
      "Cut"
    ],
    "powerTubes": "EL84"
  }
]
