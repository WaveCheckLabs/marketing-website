import type { Dictionary } from './en';

const ptBr: Dictionary = {
  common: {
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

  home: {
    title: 'WaveCheck | Baixe agora',
    description: 'O jeito mais rápido de saber como está o mar agora. Reports ao vivo de surfistas no pico, com vídeo real, tamanho real das ondas e vento real.',
    ogTitle: 'WaveCheck | Reports de surf ao vivo, direto dos surfistas locais',
    ogDescription: 'Reports de surf ao vivo, postados pela comunidade. Vídeo real, tamanho das ondas e vento do seu pico.',
    ogImageAlt: 'WaveCheck, reports de surf ao vivo',
    heroTitle: ['Como está o mar', 'agora?'],
    heroText: 'Reports de surf ao vivo, direto de surfistas no pico, postados há poucos minutos. Vídeo real, tamanho real, vento real. Sem modelos de previsão.',
  },

  liveFeed: {
    label: 'Reports de surf',
    ago: (minutes: number) => {
      return `há ${minutes} min`;
    },
    wind: { offshore: 'Terral', crossShore: 'Lateral' },
    sizes: { '1-2ft': '0,3-0,6m', '2-3ft': '0,6-1m', '3-4ft': '1-1,2m' },
    notes: {
      Duranbah: 'Liso, swell entrando',
      'Snapper Rocks': 'Crowd, mas vale a pena, séries contornando a ponta',
      'Main Beach': 'Espelhado no nascer do sol',
      'Burleigh Heads': 'Esquerdas divertidas na ponta',
      Kirra: 'Linhas espelhadas, ondas longas',
    },
  },

  forecastVsReport: {
    title: ['A previsão chuta', 'O surfista sabe.'],
    forecastLabel: 'Modelo de previsão · rodada das 5h',
    forecastSummary: 'Previsto 1-1,2m · terral fraco',
    forecastNote: 'Um palpite feito horas atrás, longe da costa.',
    reportLabel: 'Report de surf · há 6 min',
    photoAlt: 'Um surfista numa onda grande e verde, com outros esperando no line-up',
    caption: 'Lucas · direto da areia',
    chips: { size: '1,2-1,8m', wind: 'Terral', weather: 'Ensolarado' },
    note: 'Tá clássico! Bem maior que a previsão, tubos limpos no banco de areia',
    hour: (hour: number) => {
      return `${hour}h`;
    },
    height: (feet: number) => {
      return (feet * 0.3048).toLocaleString('pt-BR', { maximumFractionDigits: 1 });
    },
  },

  coastSection: {
    title: ['O litoral inteiro', 'no seu bolso.'],
    points: [
      { title: 'Veja antes de sair de casa', text: 'Vídeo ao vivo do seu pico, para nunca perder a viagem.' },
      { title: 'Siga surfistas em quem você confia', text: 'Monte um feed com os locais cujos reports batem com o que você encontra no mar.' },
      { title: 'Publique em segundos', text: 'Vídeo, tamanho e vento, antes mesmo de vestir a roupa de borracha.' },
    ],
  },

  photoCta: {
    title: ['Pare de chutar.', 'Vá surfar.'],
    text: 'Condições reais do seu pico, postadas há poucos minutos.',
  },

  phoneScreens: {
    alt: 'Feed do WaveCheck com reports de surf ao vivo',
  },

  stickyDownloadBar: {
    subtitle: 'Reports de surf ao vivo · Grátis',
    button: 'Baixar o app',
  },
};

export { ptBr };
