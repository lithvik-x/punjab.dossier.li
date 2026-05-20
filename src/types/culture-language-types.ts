// Culture, Language, and Anthropology Types
// Source: direct-documentation/cat-1-demography/b3-punjab-culture-language-anthropology.md

export type PunjabiDialect = 'Majhi' | 'Malwai' | 'Doabi' | 'Puadhi';

export type FolkDance = 'Bhangra' | 'Giddha' | 'Gatka';

export type Festival = 'Vaisakhi' | 'Lohri' | 'Bandi Chhor Divas' | 'Guru Parva' | 'Hola Mohalla';

export type FiveKs = 'Kara' | 'Kirpan' | 'Kanga' | 'Kachha' | 'Kes';

export interface CulturalValueSystem {
  name: string;
  description: string;
  politicalRelevance?: string;
}

export interface FolkTradition {
  type: 'dohe' | 'sufi' | 'kisse' | 'qisse' | 'proverbe';
  description: string;
  keyFigures?: string[];
  politicalUsage?: string;
}

export interface MartialTradition {
  name: string;
  description: string;
  contemporaryStatus?: string;
}

export interface MelaCalendar {
  name: string;
  location: string;
  politicalMobilizationPotential?: string;
}

export interface SymbolSystem {
  type: 'fiveKs' | 'dastaar' | 'phulkari' | 'jutti';
  description: string;
  politicalSignificance?: string;
}

export interface RegionalVariation {
  region: PunjabiDialect;
  characteristics: string[];
  folkTraditions?: string[];
}

export interface RitualPractice {
  name: string;
  type: 'marriage' | 'birth' | 'death' | 'festival';
  regionalVariations?: string[];
  politicalRelevance?: string;
}

export interface MaterialCulture {
  category: 'dress' | 'food' | 'housing' | 'transportation';
  traditional: string;
  modern: string;
  politicalSignificance?: string;
}

export interface DialectData {
  dialect: PunjabiDialect;
  region: string;
  districts: string[];
  assemblySeats: number;
  keyCharacteristics: string[];
  literaryTradition?: string;
  politicalSignificance?: string;
  nriConnection?: string;
}

export interface LanguageAttitudes {
  script: string;
  politicalSignificance: string;
  multilingualPatterns: string;
  youthPreferences: string;
  campaignCommunicationNotes: string;
}

export interface CultureAnthropologyData {
  valueSystems: CulturalValueSystem[];
  folkTraditions: FolkTradition[];
  martialTraditions: MartialTradition[];
  melaCalendar: MelaCalendar[];
  symbolSystems: SymbolSystem[];
  regionalVariations: RegionalVariation[];
  rituals: RitualPractice[];
  materialCulture: MaterialCulture[];
  dialects: DialectData[];
  languageAttitudes: LanguageAttitudes;
  fiveKs: { name: FiveKs; description: string; symbolism: string }[];
}
