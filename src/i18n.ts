const translations = {
  en: {
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
  'pt-br': {
    lang: 'pt-BR',
    languageName: 'Português',
    support: 'Suporte',
    privacy: 'Privacidade',
    terms: 'Termos',
    deleteAccount: 'Excluir conta',
    language: 'Idioma',
    instagram: 'WaveCheck no Instagram',
    tagline: 'Reports de surf ao vivo · direto do pico',
    rights: 'Todos os direitos reservados.',
    appStore: 'Baixar na',
    playStore: 'Disponível no',
  },
};

type Locale = keyof typeof translations;

export type { Locale };

export { translations };
