import VoiceSample1 from './audio/Thai_UnfortunateWarlord.mp3';
import VoiceSample2 from './audio/ENG_Gang_Leader_L.mp3';
import VoiceSample3 from './audio/ENG_GeneralWarCry_MyName.mp3';
import VoiceSample4 from './audio/Thai_Poem_Sample.mp3';
import VoiceSample5 from './audio/Thai_Sample_emotion.mp3';
import VoiceSample6 from './audio/Thai_Angry_Man_Sample.mp3';
import VoiceSample7 from './audio/Thai_Rumpelstiltskin.mp3';
import VoiceSampleinfosec from './audio/INFOSEC.mp3';
import VoiceSampleswarovski from './audio/Swarovski.mp3';
import VoiceSampleimac from './audio/IMAC.mp3';
// test

import character1 from '../assets/Voiceover_Showcase/An_Unfortunate_Warlord_(2)_Cropped.webp';
import character2 from '../assets/Voiceover_Showcase/Gang_Leader.webp';
import character3 from '../assets/Voiceover_Showcase/General_Samurai_Cropped.webp';
import character4 from '../assets/Voiceover_Showcase/Poem_(2)_Cropped.webp';
import character5 from '../assets/Voiceover_Showcase/Emotions_Cropped.webp';
import character6 from '../assets/Voiceover_Showcase/Angry_Man_Cropped.webp';
import character7 from '../assets/Voiceover_Showcase/Rumpelstiltskin_Cropped.webp';
// import character8 from '../assets/Voiceover_Showcase/Gang_Leader.webp';
// import character9 from '../assets/Voiceover_Showcase/Gang_Leader.webp';

// Logo imports

import logo1 from '../assets/Logo_Clients/Swarovski.webp'
import logo2 from '../assets/Logo_Clients/infosec-logo.webp'
import logo3 from '../assets/Logo_Clients/SinoTruk-Logo.webp'
import logo4 from '../assets/Logo_Clients/IMCA-logo.webp'
import logo5 from '../assets/Logo_Clients/panasonic_connect_logo.webp'

import WBlank from '../assets/Logo_Clients/Blank-rectangle.webp'

// Services Image imports

import infosecpic1 from '../assets/ServiceSection/INFOSEC1.webp';
import infosecpic2 from '../assets/ServiceSection/INFOSEC2.webp';
import infosecpic3 from '../assets/ServiceSection/INFOSEC3.webp';
import infosecpic4 from '../assets/ServiceSection/INFOSEC4.webp';
import swarovski1 from '../assets/ServiceSection/Swarovski1.webp';
import swarovski2 from '../assets/ServiceSection/Swarovski2.webp';
import swarovski3 from '../assets/ServiceSection/Swarovski3.webp';
import swarovski4 from '../assets/ServiceSection/Swarovski4.webp';
import imca1 from '../assets/ServiceSection/IMCA1.webp';
import imca2 from '../assets/ServiceSection/IMCA2.webp';
import imca3 from '../assets/ServiceSection/IMCA3.webp';
import imca4 from '../assets/ServiceSection/IMCA4.webp';
import dyinglight1 from '../assets/ServiceSection/dyinglight1.webp';
import dyinglight2 from '../assets/ServiceSection/dyinglight2.webp';
import dyinglight3 from '../assets/ServiceSection/dyinglight3.webp';
import dyinglight4 from '../assets/ServiceSection/dyinglight4.webp';

const serviceAudioData = [
  {
    id: "01",
    title: 'INFOSEC',
    description: 'Thai Translation Quality Assurance and Thai Voice Over work for INFOSEC on 11 short modules on IT security awareness.',
    audioUrl: VoiceSampleinfosec,
    // audioUrl: 'https://drive.google.com/u/0/uc?id=1L_vKBmVT0HQwkH9AZmrjF0Vg4g6fmR1b&export=download',
    images: [infosecpic1, infosecpic2, infosecpic3, infosecpic4],
  },
  {
    id: "02",
    title: 'SWAROVSKI',
    description: 'Thai Voiceover - Fashion and jewelry history - Styling Specialist training program of Swarovski.',
    audioUrl: VoiceSampleswarovski,
    // audioUrl: 'https://drive.google.com/u/0/uc?id=1vYOMy-ATNN5-ZccW9pRl6f10Eee-IobC&export=download',
    images: [swarovski1, swarovski2, swarovski3, swarovski4],
  },
  {
    id: "03",
    title: 'IMCA',
    description: 'Translated from English into Thai and Thai Voiceover and also Sync and edit background music to replace the audio of the 15 original English safety training Videos.',
    audioUrl: VoiceSampleimac,
    // audioUrl: 'https://drive.google.com/u/0/uc?id=1dNtD62M0P9o0ELjZfS9f9DUVNDpdN0_3&export=download',
    images: [imca1, imca2, imca3, imca4],
  },
  {
    id: "04",
    title: 'Dying Light',
    description: 'An open-world first-person survival horror game - this franchise has sold over 30 million copies. Created the game glossary and translated from English into Thai on the main story quests & User Interfaces.',
    // audioUrl: VoiceSample1,
    audioUrl: '',
    images: [dyinglight1, dyinglight2, dyinglight3, dyinglight4],
  }
]

const malevoiceovers = [
  {
    name: '(TH) An Unfortunate Warlord',
    description: 'With his dumb right-hand man',
    audioUrl: VoiceSample1,
    // audioUrl: 'https://drive.google.com/u/0/uc?id=1LrwVltpGXSu4Fvd13DViEMpvzrWNMjU7&export=download',
    imageUrl: character1,
  },
  {
    name: '(EN) Gang Leader',
    description: 'Motivating his gang members',
    audioUrl: VoiceSample2,
    // audioUrl: 'https://drive.google.com/u/0/uc?id=1SMpqNNzHwRmS1c3jtd6Xg8o5VvV59lkQ&export=download',
    imageUrl: character2,
  },
  {
    name: '(EN) General Warcry',
    description: 'A Heroic Warcry Shout',
    audioUrl: VoiceSample3,
    // audioUrl: 'https://drive.google.com/u/0/uc?id=1PLwjaOrKSdmXVMtI8ZVLUDGos9HvWjDr&export=download',
    // The one below just an example that works.
    // audioUrl: 'https://on.soundcloud.com/JRZdc',
    imageUrl: character3,
  },
  {
    name: '(TH) Poem',
    description: 'A Thai Poem',
    audioUrl: VoiceSample4,
    // audioUrl: 'https://drive.google.com/u/0/uc?id=1B0syMlTSadM4x2xPfFZ3MJmTXlpI2Tdv&export=download',
    // The one below just an example that works.
    // audioUrl: 'https://www.computerhope.com/jargon/m/example.mp3',
    imageUrl: character4,
  },
  {
    name: '(TH) Emotions Samples',
    description: 'Excited,Sad,Surprised,Angry,Scared',
    audioUrl: VoiceSample5,
    // audioUrl: 'https://drive.google.com/u/0/uc?id=1qfcGs0_mQCFld08PiVxt-YfiJOcuGH9O&export=download',
    // The one below just an example that works.
    // audioUrl: 'https://drive.google.com/u/0/uc?id=1fiCDN6ZTK-j3XIBgViHzctgMyIKxpiuR&export=download',
    imageUrl: character5,
  },
  {
    name: '(TH) Angry Man',
    description: 'Accuses of someone for being a liar',
    audioUrl: VoiceSample6,
    // audioUrl: 'https://drive.google.com/u/0/uc?id=1C6o3971qf6VFdsXqjSYgA7XXL7V_Av7D&export=download',
    // The one below doesn't work.
    // audioUrl: 'https://drive.google.com/file/d/1fiCDN6ZTK-j3XIBgViHzctgMyIKxpiuR/view?usp=drive_link',
    imageUrl: character6,
  },
  {
    name: 'A Soldier and Rumpelstiltskin',
    description: 'A Soldier found an elf singing happily',
    audioUrl: VoiceSample7,
    // audioUrl: 'https://drive.google.com/u/0/uc?id=1Er6tnmBQRY32i9V94tyWcyv-5HkR2S5r&export=download',
    // The one below just an example that works.
    // audioUrl: 'https://drive.google.com/u/0/uc?id=1fiCDN6ZTK-j3XIBgViHzctgMyIKxpiuR&export=download',
    imageUrl: character7,
  },
  // {
  //   name: 'Voiceover 8',
  //   description: 'Description of Voiceover 2',
  //   // The one below just an example that works.
  //   audioUrl: 'https://drive.google.com/u/0/uc?id=1fiCDN6ZTK-j3XIBgViHzctgMyIKxpiuR&export=download',
  //   imageUrl: character2,
  // },
  // {
  //   name: 'Voiceover 9',
  //   description: 'Description of Voiceover 3',
  //   // The one below doesn't work.
  //   audioUrl: 'https://drive.google.com/file/d/1fiCDN6ZTK-j3XIBgViHzctgMyIKxpiuR/view?usp=drive_link',
  //   imageUrl: character2,
  // },
];

const femalevoiceovers = [
  {
    name: '(TH) An Unfortunate Warlord',
    description: 'With his dumb right-hand man',
    // audioUrl: VoiceSample1,
    audioUrl: 'https://drive.google.com/u/0/uc?id=1LrwVltpGXSu4Fvd13DViEMpvzrWNMjU7&export=download',
    imageUrl: character1,
  },
  {
    name: '(EN) Gang Leader',
    description: 'Motivating his gang members',
    // audioUrl: VoiceSample2,
    audioUrl: 'https://drive.google.com/u/0/uc?id=1SMpqNNzHwRmS1c3jtd6Xg8o5VvV59lkQ&export=download',
    imageUrl: character2,
  },
  {
    name: '(EN) General Warcry',
    description: 'A Heroic Warcry Shout',
    // audioUrl: VoiceSample3,
    audioUrl: 'https://drive.google.com/u/0/uc?id=1PLwjaOrKSdmXVMtI8ZVLUDGos9HvWjDr&export=download',
    // The one below just an example that works.
    // audioUrl: 'https://on.soundcloud.com/JRZdc',
    imageUrl: character3,
  },
  // {
  //   name: '(TH) Poem',
  //   description: 'A Thai Poem',
  //   // audioUrl: VoiceSample4,
  //   audioUrl: 'https://drive.google.com/u/0/uc?id=1B0syMlTSadM4x2xPfFZ3MJmTXlpI2Tdv&export=download',
  //   // The one below just an example that works.
  //   // audioUrl: 'https://www.computerhope.com/jargon/m/example.mp3',
  //   imageUrl: character4,
  // },
  // {
  //   name: '(TH) Emotions Samples',
  //   description: 'Excited,Sad,Surprised,Angry,Scared',
  //   // audioUrl: VoiceSample5,
  //   audioUrl: 'https://drive.google.com/u/0/uc?id=1qfcGs0_mQCFld08PiVxt-YfiJOcuGH9O&export=download',
  //   // The one below just an example that works.
  //   // audioUrl: 'https://drive.google.com/u/0/uc?id=1fiCDN6ZTK-j3XIBgViHzctgMyIKxpiuR&export=download',
  //   imageUrl: character5,
  // },
  // {
  //   name: '(TH) Angry Man',
  //   description: 'Accuses of someone for being a liar',
  //   // audioUrl: VoiceSample6,
  //   audioUrl: 'https://drive.google.com/u/0/uc?id=1C6o3971qf6VFdsXqjSYgA7XXL7V_Av7D&export=download',
  //   // The one below doesn't work.
  //   // audioUrl: 'https://drive.google.com/file/d/1fiCDN6ZTK-j3XIBgViHzctgMyIKxpiuR/view?usp=drive_link',
  //   imageUrl: character6,
  // },
  // {
  //   name: 'A Soldier and Rumpelstiltskin',
  //   description: 'A Soldier found an elf singing happily',
  //   // audioUrl: VoiceSample7,
  //   audioUrl: 'https://drive.google.com/u/0/uc?id=1Er6tnmBQRY32i9V94tyWcyv-5HkR2S5r&export=download',
  //   // The one below just an example that works.
  //   // audioUrl: 'https://drive.google.com/u/0/uc?id=1fiCDN6ZTK-j3XIBgViHzctgMyIKxpiuR&export=download',
  //   imageUrl: character7,
  // },
  // {
  //   name: 'Voiceover 8',
  //   description: 'Description of Voiceover 2',
  //   // The one below just an example that works.
  //   audioUrl: 'https://drive.google.com/u/0/uc?id=1fiCDN6ZTK-j3XIBgViHzctgMyIKxpiuR&export=download',
  //   imageUrl: character2,
  // },
  // {
  //   name: 'Voiceover 9',
  //   description: 'Description of Voiceover 3',
  //   // The one below doesn't work.
  //   audioUrl: 'https://drive.google.com/file/d/1fiCDN6ZTK-j3XIBgViHzctgMyIKxpiuR/view?usp=drive_link',
  //   imageUrl: character2,
  // },
];

const videoUrls = [
  {
    name: 'Video 1',
    description: 'Showreels',
    videoUrl: 'https://www.youtube.com/embed/U_PdMAoY7G0'
  },
  {
    name: 'Video 2',
    description: 'Privacy Devil Advertisement - Full',
    videoUrl: 'https://www.youtube.com/embed/Px32gRZG80k'
  },
  {
    name: 'Video 3',
    description: 'Bedtime Story - Rumplestiltskin - Full',
    videoUrl: 'https://www.youtube.com/embed/Utn0SAXbTl8'
  },
  {
    name: 'Video 4',
    description: 'Panasonic Toughbook Advertisement - Full',
    videoUrl: 'https://www.youtube.com/embed/4H5JsJwet3A'
  },
  {
    name: 'Video 5',
    description: 'Panasonic FacePro i-TEMS (Thai) Advertisement - Full',
    videoUrl: 'https://www.youtube.com/embed/JnZcdiHJ84Q'
  },
  {
    name: 'Video 6',
    description: 'Panasonic Toughbook Advertisement - Full',
    videoUrl: 'https://www.youtube.com/embed/UPzYErBWpO8'
  },
];

const logos = [
  {
    name: 'SWAROVSKI',
    image: logo1
  },
  {
    name: 'INFOSEC',
    image: logo2
  },
  {
    name: 'SINOTRUK',
    image: logo3
  },
  {
    name: 'IMCA',
    image: logo4
  },
  {
    name: 'Panasonic Connect',
    image: logo5
  },
  {
    name: 'And more',
    image: WBlank
  },

]

export default {
  malevoiceovers,
  femalevoiceovers,
  videoUrls,
  logos,
  serviceAudioData
};
