// Punjabi Language & Linguistics Data
// Source: MP1-foundational/demographics/language-linguistics.md

import type {
  LanguageData,
  LanguageSpeaker,
  FunctionalLanguageLayer,
  DialectInfo,
  ScriptUsage,
  EducationMedium,
  LanguageRecommendation,
  DialectSlogan,
  PunjabiDialect,
  Script,
} from '../types/demographics';

// Mother Tongue Distribution (Census 2011)
export const MOTHER_TONGUE_DISTRIBUTION: LanguageSpeaker[] = [
  { language: 'Punjabi', speakers: 24919067, percentage: 89.82, isOfficial: true },
  { language: 'Hindi', speakers: 2177853, percentage: 7.85 },
  { language: 'Others (Urdu, English, etc.)', speakers: 646418, percentage: 2.83 },
];

// Functional Language Landscape (2026 Estimate)
export const FUNCTIONAL_LAYERS: FunctionalLanguageLayer[] = [
  { layer: 'Official/Government', languages: ['Punjabi (Gurmukhi)'], context: 'All state govt business, assembly, courts (lower)' },
  { layer: 'Education', languages: ['Punjabi', 'Hindi', 'English'], context: 'Punjabi-medium govt schools; English-medium private schools; Hindi as subject' },
  { layer: 'Urban Commerce', languages: ['Punjabi', 'Hindi', 'English'], context: 'Trilingual in Ludhiana, Amritsar, Jalandhar, Mohali' },
  { layer: 'Rural Life', languages: ['Punjabi (dialect varies)'], context: 'Overwhelmingly Punjabi in all 23 rural districts' },
  { layer: 'Social Media', languages: ['Roman Punjabi', 'English', 'Hindi'], context: 'Dominated by Roman Punjabi (Latin script) among youth' },
  { layer: 'Religious', languages: ['Punjabi (Gurmukhi)', 'Sanskrit (Hindu)', 'Arabic/Urdu (Muslim)'], context: 'Gurbani in Gurmukhi; Hindu rituals in Sanskritized Hindi' },
];

// Dialect Region Mapping
export const DIALECT_REGION_MAP: Record<PunjabiDialect, string> = {
  Majhi: 'Majha',
  Malwai: 'Malwa',
  Doabi: 'Doaba',
  Puadhi: 'Powadh',
};

// Majha Dialect Districts
const MAJHA_DISTRICTS = ['Amritsar', 'Tarn Taran', 'Gurdaspur (partial)', 'Pathankot (partial)'];
const MAJHA_CONSTITUENCIES = [
  'Amritsar North', 'Amritsar Central', 'Amritsar South', 'Amritsar East', 'Amritsar West',
  'Ajnala', 'Rajasansi', 'Attari', 'Tarn Taran', 'Khadoor Sahib', 'Patti', 'Zira (partial)',
  'Gurdaspur', 'Pathankot', 'Bhoa', 'Dinanagar', 'Qadian', 'Batala', 'Sri Hargobindpur',
  'Dera Baba Nanak', 'Fatehgarh Churian',
];

// Malwa Dialect Districts
const MALWAI_DISTRICTS = [
  'Ludhiana', 'Moga', 'Sangrur', 'Barnala', 'Faridkot', 'Patiala', 'Fatehgarh Sahib',
  'Mansa', 'Muktsar', 'Bathinda', 'Ferozepur (partial)', 'SAS Nagar (partial)', 'Malerkotla',
];
const MALWAI_CONSTITUENCIES = [
  'Ludhiana North', 'Ludhiana Central', 'Ludhiana South', 'Ludhiana East', 'Ludhiana West',
  'Moga', 'Dharamkot', 'Bagha Purana', 'Nihal Singh Wala', 'Sangrur', 'Barnala', 'Bhadaur',
  'Sunam', 'Lehragaga', 'Faridkot', 'Kotkapura', 'Jaitu', 'Patiala Rural', 'Patiala Urban',
  'Nabha', 'Samana', 'Shutrana', 'Ghanaur', 'Fatehgarh Sahib', 'Bassi Pathana', 'Amloh',
  'Mansa', 'Budhlada', 'Sardulgarh', 'Muktsar', 'Malout', 'Gidderbaha', 'Lambi',
  'Bathinda Rural', 'Bathinda Urban', 'Talwandi Sabo', 'Maur', 'Ferozepur City', 'Ferozepur Rural',
  'Guruharsahai', 'Jalalabad', 'Fazilka', 'Abohar', 'Balluana', 'Mohali', 'Kharar',
  'Rajpura', 'Dhuri', 'Dirba', 'Tapa', 'Mehal Kalan', 'Banga',
];

// Doaba Dialect Districts
const DOABA_DISTRICTS = ['Jalandhar', 'Nawanshahr (SBS Nagar)', 'Kapurthala', 'Hoshiarpur'];
const DOABA_CONSTITUENCIES = [
  'Jalandhar North', 'Jalandhar Central', 'Jalandhar South', 'Jalandhar West', 'Adampur',
  'Kartarpur', 'Phillaur', 'Nakodar', 'Shahkot', 'Nawanshahr', 'Banga', 'Balachaur',
  'Mukerian', 'Dasuya', 'Urmar', 'Chabbewal', 'Hoshiarpur', 'Sham Chaurasi', 'Garhshankar',
  'Kapurthala', 'Sultanpur Lodhi', 'Phagwara', 'Bholath',
];

// Puadhi Dialect Districts
const PUADHI_DISTRICTS = ['Rupnagar', 'SAS Nagar (Mohali -- partial)', 'Fatehgarh Sahib (partial)', 'Patiala (partial -- Rajpura belt)'];
const PUADHI_CONSTITUENCIES = [
  'Rupnagar', 'Chamkaur Sahib', 'Anandpur Sahib', 'Nangal', 'Kharar (partial)',
  'Rajpura (partial)', 'Mohali (partial)', 'Samrala (partial)',
];

export const DIALECTS: Record<PunjabiDialect, DialectInfo> = {
  Majhi: {
    name: 'Majhi',
    region: 'Majha (central Punjab, India-Pakistan border belt)',
    districts: MAJHA_DISTRICTS,
    constituencies: MAJHA_CONSTITUENCIES,
    seatCount: 25,
    characteristics: 'Prestige dialect; basis of standard written Punjabi. Closest to literary Gurmukhi. Influenced by Urdu vocabulary near Pakistan border. Perceived as "pure" Punjabi.',
    campaignMarkers: 'Use standard Punjabi -- this dialect IS campaign Punjabi. "Ki haal ae?", "Tenu mil ke khushi hoyi."',
    campaignPriority: 'Border security, religious sentiment',
  },
  Malwai: {
    name: 'Malwai',
    region: 'Malwa (southern/central Punjab -- largest region, 69 seats)',
    districts: MALWAI_DISTRICTS,
    constituencies: MALWAI_CONSTITUENCIES,
    seatCount: 69,
    characteristics: 'Largest dialect by speaker count and constituency count. Influenced by proximity to Haryana/Rajasthan -- some Hindi/Haryanvi loan words. Softer tone than Majhi. Sub-dialect variations: Bathinda/Mansa sounds different from Patiala/Ludhiana.',
    campaignMarkers: 'Slightly different vocabulary. "Ki karde aa?" instead of "Ki karde paye o?" Use words like "konsa" (which) vs Majhi "kehda". Avoid overly Persianized vocabulary.',
    campaignPriority: 'Critical',
  },
  Doabi: {
    name: 'Doabi',
    region: 'Doaba (between Beas and Sutlej rivers)',
    districts: DOABA_DISTRICTS,
    constituencies: DOABA_CONSTITUENCIES,
    seatCount: 23,
    characteristics: 'Sweet-sounding, perceived as melodious. Tonal modulation distinct from Majhi and Malwai. "Ki karda aa?" (vs Majhi "Ki karda pya ae?"). Uses "aa" as sentence-ending particle.',
    campaignMarkers: 'Use softer formulations. "Terian/Tohanian" instead of "Tuhadi". Play on Doabi pride -- Doaba is the NRI belt, connect language with prosperity/abroad connections.',
    campaignPriority: 'NRI influence, development',
  },
  Puadhi: {
    name: 'Puadhi',
    region: 'Powadh (between Sutlej and Ghaggar rivers -- southeastern Punjab)',
    districts: PUADHI_DISTRICTS,
    constituencies: PUADHI_CONSTITUENCIES,
    seatCount: 5,
    characteristics: 'Transitional dialect -- blends Malwai with Haryanvi influences. Least distinct of the four; many speakers switch between Puadhi and Malwai/Hindi fluidly. Small geographic footprint but important as it includes the rapidly urbanizing Mohali belt.',
    campaignMarkers: 'Can use standard Punjabi here without dialect penalty. The Mohali urban voter is comfortable with Hindi/English mix. Rural Puadh areas respond to Malwai-adjacent messaging.',
    campaignPriority: 'Urban/IT corridor messaging',
  },
};

export const SCRIPTS: Record<Script, ScriptUsage> = {
  Gurmukhi: {
    script: 'Gurmukhi',
    description: 'Official script of Punjab; used in all government communication, education (Punjabi-medium), and print media.',
    literacy: 'Punjab literacy rate 83.4% (PLFS 2024). Gurmukhi literacy likely 75-80% among adults.',
    sacredAssociation: 'Gurmukhi is the script of Guru Granth Sahib -- deep emotional/cultural resonance for Sikh voters (57.69% of population).',
    campaignImplication: 'All printed material (posters, pamphlets, manifestos) MUST use Gurmukhi for credibility and cultural respect.',
  },
  'Roman Punjabi': {
    script: 'Roman Punjabi',
    description: 'Dominant on social media. The vast majority of Punjabi-language content on Facebook, Instagram, WhatsApp, X/Twitter, and YouTube is written in Roman Punjabi (Latin alphabet).',
    campaignImplication: 'ALL social media messaging must be in Roman Punjabi. Gurmukhi posts get lower engagement among the target demographic. A/B test but default to Roman.',
  },
  Shahmukhi: {
    script: 'Shahmukhi',
    description: 'Used in Pakistani Punjab; limited use in Indian Punjab. Relevant in Malerkotla (only Muslim-majority town in Punjab) and some border communities.',
    campaignImplication: 'Minimal relevance for Indian Punjab election. Only consider for Malerkotla constituency (AC 109 - Malerkotla) if micro-targeting Muslim voters.',
  },
  Devanagari: {
    script: 'Devanagari',
    description: 'Used by ~7.85% mother tongue speakers and understood by most urban Punjabis. Relevant for: Pathankot (Hindi belt influence), Fazilka border areas, Mohali IT corridor, Hindu-majority urban wards.',
    campaignImplication: 'Use Hindi for targeted outreach to Hindu urban voters. Do NOT use Hindi as primary campaign language -- it triggers "Hindi imposition" sensitivities.',
  },
};

export const EDUCATION_MEDIA: EducationMedium[] = [
  { medium: 'Punjabi (Gurmukhi)', schools: 'Govt primary/secondary', reach: 'Majority of rural students' },
  { medium: 'English', schools: 'Private schools, CBSE, ICSE', reach: 'Growing rapidly, urban' },
  { medium: 'Hindi', schools: 'Some central govt schools', reach: 'Minor share' },
];

export const CHANNEL_RECOMMENDATIONS: LanguageRecommendation[] = [
  { channel: 'WhatsApp forwards', primaryScript: 'Roman Punjabi', secondaryScript: 'Gurmukhi', notes: 'Youth/village both use Roman' },
  { channel: 'Facebook/Instagram', primaryScript: 'Roman Punjabi', secondaryScript: 'Hindi', notes: 'Video captions in Roman' },
  { channel: 'Print pamphlets/posters', primaryScript: 'Gurmukhi', secondaryScript: 'Hindi', notes: 'Gurmukhi signals authenticity' },
  { channel: 'TV ads', primaryScript: 'Gurmukhi', secondaryScript: 'Hindi', notes: 'Dialect matching crucial' },
  { channel: 'Door-to-door / Jorha', primaryScript: 'Gurmukhi', notes: 'Train workers in local dialect' },
  { channel: 'Loudspeaker jingles', primaryScript: 'Gurmukhi', notes: 'Malwai for Malwa, etc.' },
  { channel: 'YouTube/TikTok reels', primaryScript: 'Roman Punjabi', secondaryScript: 'English', notes: 'Youth-driven, Roman mandatory' },
  { channel: 'Manifesto', primaryScript: 'Gurmukhi', secondaryScript: 'Hindi', notes: 'Gurmukhi version is the primary' },
];

export const DIALECT_SLOGANS: DialectSlogan[] = [
  { messageTheme: 'Congress will win', majhi: 'Congress jeetugi', malwai: 'Congress jeetuga', doabi: 'Congress jeetuga ae', puadhi: 'Congress jeetuga' },
  { messageTheme: 'Your vote matters', majhi: 'Tuhada vote bahar hai', malwai: 'Tuhada vote faisla karega', doabi: 'Tuhada vote masle aa', puadhi: 'Tuhada vote matters aa' },
  { messageTheme: 'Development for all', majhi: 'Sab da vikas', malwai: 'Sab layi vikas', doabi: 'Sab de layi taraqqi', puadhi: 'Sab nu vikas' },
  { messageTheme: 'Proud Punjab', majhi: 'Punjab maan da', malwai: 'Punjab garv wala', doabi: 'Punjab naaz da', puadhi: 'Punjab maan wala' },
];

// Complete Language Data Object
export const LANGUAGE_DATA: LanguageData = {
  motherTongueDistribution: MOTHER_TONGUE_DISTRIBUTION,
  functionalLayers: FUNCTIONAL_LAYERS,
  dialects: DIALECTS,
  scripts: SCRIPTS,
  educationMedia: EDUCATION_MEDIA,
  recommendations: CHANNEL_RECOMMENDATIONS,
  slogans: DIALECT_SLOGANS,
};

// Helper functions
export function getDialectByConstituency(constituency: string): PunjabiDialect | null {
  for (const [dialect, info] of Object.entries(DIALECTS)) {
    if (info.constituencies.some(c => c.toLowerCase().includes(constituency.toLowerCase()) || constituency.toLowerCase().includes(c.toLowerCase()))) {
      return dialect as PunjabiDialect;
    }
  }
  return null;
}

export function getDialectByRegion(region: string): PunjabiDialect | null {
  const regionMap: Record<string, PunjabiDialect> = {
    'majha': 'Majhi',
    'malwa': 'Malwai',
    'doaba': 'Doabi',
    'powadh': 'Puadhi',
  };
  return regionMap[region.toLowerCase()] || null;
}

export function getScriptForChannel(channel: string): { primary: Script; secondary?: Script } | null {
  const rec = CHANNEL_RECOMMENDATIONS.find(r => r.channel.toLowerCase().includes(channel.toLowerCase()));
  if (!rec) return null;
  return { primary: rec.primaryScript as Script, secondary: rec.secondaryScript as Script | undefined };
}
