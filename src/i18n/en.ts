const en = {
  common: {
    lang: 'en',
    languageName: 'English',
    support: 'Support',
    privacy: 'Privacy',
    terms: 'Terms',
    deleteAccount: 'Delete account',
    language: 'Language',
    instagram: 'WaveCheck on Instagram',
    tagline: 'Live surf reports · from the lineup',
    rights: 'All rights reserved.',
    appStore: 'Download on the',
    playStore: 'Get it on',
  },

  home: {
    title: 'WaveCheck | Download Today',
    description: 'The fastest way to know what the surf is doing right now. Live reports from surfers at the break with real video, real wave size and real wind.',
    ogTitle: 'WaveCheck | Live surf reports from local surfers',
    ogDescription: 'Live surf reports posted by the community. Real video, wave size and wind from your local break.',
    ogImageAlt: 'WaveCheck live surf reports',
    heroTitle: ["What's it doing", 'right now?'],
    heroText: 'Live surf reports from surfers at the break, posted minutes ago. Real video, real size, real wind. No forecast models.',
  },

  liveFeed: {
    label: 'Surf reports',
    ago: (minutes: number) => {
      return `${minutes} min ago`;
    },
    wind: { offshore: 'Offshore', crossShore: 'Cross-shore' },
    sizes: { '1-2ft': '1-2ft', '2-3ft': '2-3ft', '3-4ft': '3-4ft' },
    notes: {
      Duranbah: 'Clean, swell arriving',
      'Snapper Rocks': 'Crowded but worth it, sets wrapping the point',
      'Main Beach': 'Glassy at sunrise',
      'Burleigh Heads': 'Fun lefts off the point',
      Kirra: 'Glassy lines, long rides',
    },
  },

  forecastVsReport: {
    title: ['Forecasts guess', 'Surfers know.'],
    forecastLabel: 'Forecast model · 5am run',
    forecastSummary: 'Predicted 3-4ft · light offshore',
    forecastNote: 'A guess made hours ago, miles offshore.',
    reportLabel: 'Surf report · 6 min ago',
    photoAlt: 'A surfer on a big teal wave with others waiting in the lineup',
    caption: 'Lucas · standing on the sand',
    chips: { size: '4-6ft', wind: 'Offshore', weather: 'Sunny' },
    note: 'Firing! Way bigger than forecast, clean barrels on the bank',
    hour: (hour: number) => {
      const suffix = hour < 12 ? 'am' : 'pm';

      return `${hour > 12 ? hour - 12 : hour}${suffix}`;
    },
    height: (feet: number) => {
      return String(feet);
    },
  },

  coastSection: {
    title: ['The whole coast', 'in your pocket.'],
    points: [
      { title: 'See it before you drive', text: 'Live video from your break, so the trip is never wasted.' },
      { title: 'Follow surfers you trust', text: 'Build a feed of locals whose calls match what you find out there.' },
      { title: 'Post in seconds', text: 'Video, size and wind, done before your wetsuit is on.' },
    ],
  },

  photoCta: {
    title: ['Stop guessing.', 'Start surfing.'],
    text: 'Real conditions from your local, posted minutes ago.',
  },

  phoneScreens: {
    alt: 'WaveCheck feed of live surf reports',
  },

  stickyDownloadBar: {
    subtitle: 'Live surf reports · Free',
    button: 'Get the app',
  },
};

type Dictionary = typeof en;

export type { Dictionary };

export { en };
