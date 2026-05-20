// @ts-nocheck
// Culture, Language, and Anthropology Data
// Source: direct-documentation/cat-1-demography/b3-punjab-culture-language-anthropology.md

import type { CultureAnthropologyData, PunjabiDialect } from '../types/culture-language-types';

export const CULTURE_LANGUAGE_DATA: CultureAnthropologyData = {
  valueSystems: [
    { name: 'Kathak', description: 'North Indian classical dance with regional Punjabi characteristics, absorbed folk elements, pirouetting movements', politicalRelevance: 'Deployed at campaign rallies to appeal to women voters and educated urban electorate' },
    { name: 'Bhangra', description: 'Most recognized folk dance, performed during Vaisakhi, vigorous movements around dhol drum', politicalRelevance: 'Regional variations in Malwa, Majha, Doaba reinforce local identities' },
    { name: 'Giddha', description: 'Female counterpart to Bhangra, performed by women in circle with clapping and folk songs', politicalRelevance: 'Used in women political mobilization in rural constituencies' },
    { name: 'Dohe', description: 'Two-line devotional couplets, associated with Sant tradition including Bulleh Shah', politicalRelevance: 'Used in political discourse to appeal to religious or spiritual voters' },
    { name: 'Sufi Music', description: 'Emphasizes human equality, love, devotion, syncretic tradition with broad appeal', politicalRelevance: 'Used in political messaging to emphasize secular credentials or unity' },
    { name: 'Kisse', description: 'Long narrative folk poems recounting stories of heroes, lovers, saints (Heer Ranjha)', politicalRelevance: 'References to kissa characters common in political discourse as cultural shorthand' },
  ],
  folkTraditions: [
    { type: 'dohe', description: 'Two-line devotional/moralistic couplets, famous practitioners include Bulleh Shah', keyFigures: ['Bulleh Shah'], politicalUsage: 'Parties seeking religious/spiritual voter appeals' },
    { type: 'sufi', description: 'Syncretic tradition emphasizing equality and devotion', keyFigures: ['Bulleh Shah', 'Shah Hussain'], politicalUsage: 'Unity appeals, secular credentials' },
    { type: 'kisse', description: 'Long narrative folk poems recounting stories', keyFigures: ['Heer Ranjha'], politicalUsage: 'Cultural shorthand for values/positions' },
    { type: 'qisse', description: 'Oral storytelling traditions encompassing heroic epics, romantic tragedies, religious narratives', politicalUsage: 'Dhadis (balladeers) at weddings and melas transmit social values' },
    { type: 'proverbe', description: 'Traditional sayings encoding folk wisdom, agricultural life, family honor', politicalUsage: 'Accessible way to communicate complex positions in culturally resonant language' },
  ],
  martialTraditions: [
    { name: 'Nis Bet', description: 'Traditional martial training systems including wrestling, archery, swordsmanship', contemporaryStatus: 'Weakened significantly with urbanization' },
    { name: 'Gatka', description: 'Martial art and performative sword dance using wooden sticks', contemporaryStatus: 'Practiced at weddings, religious gatherings, cultural competitions' },
  ],
  melaCalendar: [
    { name: 'Hoshiarpur Mela', location: 'Hoshiarpur district' },
    { name: 'Sangrur Mela', location: 'Commemorating Bhagat Singh birth anniversary' },
    { name: 'Moga Fair', location: 'Annual cattle fair, significant in Malwa' },
    { name: 'Jallianwala Bagh Mela', location: 'Amritsar, commemorates 1919 massacre' },
    { name: 'Hola Mohalla', location: 'Sikh martial festival, Anandpur Sahib' },
  ],
  symbolSystems: [
    {
      type: 'fiveKs',
      description: 'Five articles of faith worn by initiated Sikhs',
      politicalSignificance: 'BJP calibrated appeals to Sikh voters carefully, Five Ks visible display marks Amritdhari Sikh voter segment',
    },
    {
      type: 'dastaar',
      description: 'Turban varying by region: Amritsar domed, Malwa flat, Majha peaked, Dogri-influenced',
      politicalSignificance: 'Turban color and style signal community affiliation to politically knowledgeable observers',
    },
    {
      type: 'phulkari',
      description: 'Traditional embroidery with floral patterns in reply color silk thread on cotton',
      politicalSignificance: 'Used in campaign symbolism to appeal to women voters, particularly in Malwa',
    },
    {
      type: 'jutti',
      description: 'Traditional shoe with curled-toe design and intricate embroidery',
      politicalSignificance: 'Used less frequently, appears in literature targeting women groups and cultural preservation',
    },
  ],
  regionalVariations: [
    { region: 'Majhi', characteristics: ['Purest Punjabi', 'Dogri influence in northeast', 'Rich in Persian/Sanskrit loanwords'] },
    { region: 'Malwai', characteristics: ['Significant Hindi influence', 'Vocabulary shifts', 'Phonological simplification'] },
    { region: 'Doabi', characteristics: ['Transition zone between Majhi and Malwai', 'Jalandhar urban influence', 'Preserves some archaic forms'] },
    { region: 'Puadhi', characteristics: ['Hindi-Punjabi mixed', 'Tonal features less prominent', 'Morphological simplification'] },
  ],
  rituals: [
    {
      name: 'Marriage Ceremonies',
      type: 'marriage',
      regionalVariations: ['Malwa: More elaborate, stronger Hindu influence, significant maternal uncle role', 'Majha: Cleaner blend of Sikh and Hindu traditions', 'Doaba: Largest celebrations, highest per-capita spending, significant NRI influence'],
      politicalRelevance: 'Wedding season (Nov-Feb) provides concentrated voter contact through family networks',
    },
    {
      name: 'Vaisakhi',
      type: 'festival',
      regionalVariations: ['Marks Sikh New Year and Khalsa creation anniversary', 'Celebrates Rabi harvest', 'Associated with Bhangra, fairs, family gatherings'],
      politicalRelevance: 'Largest single-day public gathering, ideal backdrop for identity-based political appeals, AAP leveraged early phase',
    },
    {
      name: 'Lohri',
      type: 'festival',
      regionalVariations: ['Marks end of winter and approaching spring harvest', 'Bonfires, sesame seeds, rewri, til', 'Major social event for newlyweds and newborns'],
      politicalRelevance: 'Winter timing during campaign season significant for political gatherings',
    },
    {
      name: 'Bandi Chhor Divas',
      type: 'festival',
      regionalVariations: ['Hindu festival of lights + Sikh festival marking Guru Hargobind release'],
      politicalRelevance: 'Demonstrates syncretic matrix, dual appeals to Sikh and Hindu voters',
    },
  ],
  materialCulture: [
    { category: 'dress', traditional: 'Kurta-pajama, traditional tees (turban), salwar-kameez with phulkari dupatta', modern: 'Shirt-trousers in urban areas, western clothing among youth 18-35', politicalSignificance: 'Dress serves as proxy for urban/rural and traditional/modern voter segments' },
    { category: 'food', traditional: 'Wheat-based staples, makki di roti, sarson da saag, lassi', modern: 'Diverse cuisines in urban areas, obesity concerns emerging', politicalSignificance: 'Food habits enter political discourse around healthcare' },
    { category: 'housing', traditional: 'Traditional havelis with courtyard, intricate jali work', modern: 'Pucca houses with concrete roofs, tiled flooring, Western-style bathrooms', politicalSignificance: 'NRI-influenced architecture serves as status symbol in villages' },
    { category: 'transportation', traditional: 'Bicycle', modern: 'High two-wheeler ownership, increasing car ownership, SUVs popular in rural', politicalSignificance: 'Vehicle stickers during campaigns serve as informal voting intention indicators' },
  ],
  dialects: [
    {
      dialect: 'Majhi',
      region: 'Northwest',
      districts: ['Amritsar', 'Gurdaspur', 'Pathankot', 'Hoshiarpur', 'Jalandhar (parts)'],
      assemblySeats: 27,
      keyCharacteristics: ['Preserves historical Punjabi vowel sounds', 'Voiced/unvoiced consonant distinction maintained', 'Rich in Persian and Sanskrit loanwords', 'Dogri influence in northeast'],
      literaryTradition: 'Considered "purer" form, basis for literary Punjabi, Amrita Pritam, Waris Shah origin region',
      politicalSignificance: 'Border identity, international attention from Golden Temple, higher Hindu population, major Sikh institutions',
    },
    {
      dialect: 'Malwai',
      region: 'South/Central',
      districts: ['Bathinda', 'Mansa', 'Muktsar', 'Faridkot', 'Ferozepur', 'Fazilka', 'Sangrur', 'Malerkotla', 'Patiala (part)', 'Fatehgarh Sahib', 'Moga', 'Barnala'],
      assemblySeats: 69,
      keyCharacteristics: ['Significant Hindi influence in vocabulary, pronunciation, grammar', 'Some Punjabi words replaced with Hindi equivalents', 'Distinctive colloquial expressions'],
      folkTraditions: ['Mele: folk songs associated with agricultural cycle', 'Hola: cry raised during Bhangra'],
      politicalSignificance: 'Dominant electoral region (69 seats), agrarian identity, drug abuse concern, Congress historical strength, more rural',
    },
    {
      dialect: 'Doabi',
      region: 'Central/East',
      districts: ['Jalandhar', 'Kapurthala', 'SBS Nagar', 'Hoshiarpur (parts)'],
      assemblySeats: 23,
      keyCharacteristics: ['Transition zone between Majhi and Malwai', 'Jalandhar urban influence on dialect', 'Some archaic Punjabi forms preserved'],
      nriConnection: 'Highest NRI concentration, massive emigration to Canada, UK, USA, Australia since 1970s, remittances transform local economy',
      politicalSignificance: 'NRI voters distinctive voting bloc, immigration policy concerns, candidate NRI family connections advantage',
    },
    {
      dialect: 'Puadhi',
      region: 'Eastern Fringe',
      districts: ['Ropar (Rupnagar)', 'Mohali (Sahibzada Ajit Singh Nagar)', 'Patiala (parts)'],
      assemblySeats: 5, // [NEEDS VERIFICATION]
      keyCharacteristics: ['Hindi-Punjabi mixed continuum', 'Some tonal distinctions less prominent', 'Morphological simplification'],
      politicalSignificance: 'Swing region, Mohali rapid urbanization, Chandigarh influence creates Hindi-speaking exposure',
    },
  ],
  languageAttitudes: {
    script: 'Gurmukhi - official script developed by Guru Angad in 16th century',
    politicalSignificance: 'Associated with Sikh identity, though spoken by significant Hindu population too',
    multilingualPatterns: 'Urban educated: trilingual in Punjabi (dialect), Hindi, English. Rural: bilingual in Punjabi dialect and functional Hindi',
    youthPreferences: 'Urban youth prefer English or English-Hindi bilingual communication, Romanized Punjabi (Punglish) ubiquitous on social media',
    campaignCommunicationNotes: 'Dialectal authenticity expected from candidates, parties use neutral Punjabi for statewide campaigns, NRI communication uses literary Punjabi',
  },
  fiveKs: [
    { name: 'Kara', description: 'Steel bracelet on right wrist', symbolism: 'Restraint, reminder actions should not harm others' },
    { name: 'Kirpan', description: 'Ceremonial sword/dagger', symbolism: 'Dignity, self-defense, resistance against oppression' },
    { name: 'Kanga', description: 'Small wooden comb worn under turban', symbolism: 'Cleanliness and order' },
    { name: 'Kachha', description: 'Cotton shorts', symbolism: 'Mobility, readiness for service, purity' },
    { name: 'Kes', description: 'Uncut hair', symbolism: 'Acceptance of God will and natural state' },
  ],
};

// Helper functions
export function getDialectByRegion(region: string) {
  return CULTURE_LANGUAGE_DATA.dialects.find(
    d => d.region.toLowerCase().includes(region.toLowerCase())
  );
}

export function getDialectByName(dialect: PunjabiDialect) {
  return CULTURE_LANGUAGE_DATA.dialects.find(d => d.dialect === dialect);
}

export function getDialectSeats(dialect: PunjabiDialect): number {
  const dialectData = getDialectByName(dialect);
  return dialectData?.assemblySeats ?? 0;
}

export function getNRIRegion(): string {
  return 'Doaba - highest NRI concentration, massive emigration to Canada, UK, USA, Australia since 1970s';
}
