import { en } from './en';
import { ptBr } from './pt-br';

const translations = {
  en,
  'pt-br': ptBr,
};

type Locale = keyof typeof translations;

export type { Locale };

export { translations };
