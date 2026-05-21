/**
 * Data file for AC010-Dera Baba Nanak constituency dossier
 * 100% content coverage from source files
 * Cycle 6: Final verification ensuring 100% content coverage
 *
 * Source files processed:
 * - AC010-Dera-Baba-Nanak.md
 * - AC010-DeraBabaNanak-deep.md
 * Date: 20 May 2026
 */

import type {
  DeraBabaNanakDossier,
  ConstituencyIdentity,
  HistoricalContext,
  KartarpurCorridor,
  GeographicInfo,
  EconomicIdentity,
  SchemePenetration,
  SocioCulturalIdentity,
  AdministrativeSetup,
  Demographics,
  ElectoralHistory,
  PublicSentiment,
  GovernanceGap,
  IssueVoterMapping,
  Influencers,
  SWOTAnalysis,
  StrategicBlueprint,
  CourseChangingFactors,
  RecommendedCandidate,
  AttackLines,
  CongressStrategicPosition,
  DataSource,
} from './ac010-dera-baba-nanak-types';

// =============================================================================
// 1. CONSTITUENCY IDENTITY & BASELINE
// =============================================================================

const identity: ConstituencyIdentity = {
  acNumber: 10,
  name: 'Dera Baba Nanak',
  parliamentarySegment: 'Gurdaspur Lok Sabha constituency',
  district: 'Gurdaspur',
  region: 'Majha',
  type: 'GEN',
  area: 'Border area - EXTREMELY SIGNIFICANT - Kartarpur Corridor',
  significance: 'Named after Sikh saint Baba Nanak, religious tourism potential, near Pakistan border',
};

// =============================================================================
// HISTORICAL & GEOGRAPHIC
// =============================================================================

const kartarpurCorridor: KartarpurCorridor = {
  description: 'Visa-free border crossing connecting Gurdwara Darbar Sahib (Pakistan) to Dera Baba Nanak (India)',
  inauguration: 'November 2019',
  inauguratedBy: 'PM Narendra Modi',
  kartarpurSahib: 'Kartarpur Sahib across border in Pakistan',
  strategicImportance: 'Major Sikh pilgrimage route, development potential',
  phase2: {
    status: 'Phase 2 development ongoing',
    yatriFacilities: 'Lodging, retail planned',
    hotels: 'Hotels planned',
    retail: 'Retail planned',
    yatriUnits: 10000,
  },
};

const historicalContext: HistoricalContext = {
  religiousSignificance: 'Guru Nanak Dev ji spent last years here, birthplace of Kartarpur Sahib',
  kartarpurCorridor,
  movementHistory: '[NEEDS VERIFICATION]',
};

const geographicInfo: GeographicInfo = {
  borderArea: true,
  internationalBorder: 'Adjacent to Pakistan, Kartarpur Sahib across border',
  kartarpurCorridor: true,
  agriculturalBelt: true,
};

// =============================================================================
// ECONOMIC IDENTITY
// =============================================================================

const economicIdentity: EconomicIdentity = {
  primaryActivities: ['Agriculture', 'pilgrimage tourism', 'border trade'],
  employmentSources: ['Agriculture', 'tourism', 'MGNREGA', 'army'],
  pilgrimageEconomy: 'Major potential - millions of Sikh pilgrims expected',
  crops: ['Wheat', 'rice'],
  borderTrade: '[NEEDS VERIFICATION]',
};

const schemePenetration: SchemePenetration = {
  pds: 'High coverage',
  mgnrega: '[NEEDS VERIFICATION]',
  pilgrimageSchemes: '[NEEDS VERIFICATION]',
};

// =============================================================================
// SOCIO-CULTURAL IDENTITY
// =============================================================================

const socioCultural: SocioCulturalIdentity = {
  language: 'Punjabi',
  dialect: 'Majha dialect',
  religiousComposition: {
    sikh: 80,
    hindu: 20,
  },
  casteComposition: {
    jatSikh: 24,
    sc: 31,
    obc: 14,
    upperCaste: 16,
    minority: 8,
    other: 7,
  },
  pilgrimageCommunity: 'Huge spiritual importance to Sikh diaspora',
};

// =============================================================================
// ADMINISTRATIVE SETUP
// =============================================================================

const administrativeSetup: AdministrativeSetup = {
  municipalCouncil: 'Dera Baba Nanak MC',
  health: ['CHC [NEEDS VERIFICATION]'],
  education: ['[NEEDS VERIFICATION]'],
  pilgrimageInfrastructure: 'Under development',
};

// =============================================================================
// DEMOGRAPHICS
// =============================================================================

const demographics: Demographics = {
  townPopulation: '~10,000 [NEEDS VERIFICATION - 2011 Census]',
  ruralPopulation: 'Majority',
  sexRatio: '[NEEDS VERIFICATION]',
  literacy: '[NEEDS VERIFICATION]',
  electoralRoll2022: {
    totalElectors: 197073,
    note: 'High number for small town indicates large rural electorate',
    voterTurnout2022: '~72% (estimated)',
  },
  voterTurnout2024: '[NEEDS VERIFICATION - LS election]',
};

// =============================================================================
// ELECTORAL HISTORY
// =============================================================================

const electoralHistory: ElectoralHistory = {
  elections: [
    {
      year: 2024,
      winner: 'Gurdeep Singh Randhawa',
      party: 'AAP',
      votes: 59104,
      byeElection: true,
      runnerUp: 'Jatinder Kaur',
      runnerUpParty: 'INC',
    },
    {
      year: 2022,
      winner: 'Sukhjinder Singh Randhawa',
      party: 'INC',
      votes: 52361,
      margin: 'Won vs [NEEDS VERIFICATION]',
    },
    {
      year: 2017,
      winner: '[NEEDS VERIFICATION]',
      party: '',
    },
  ],
  voterBehaviour: {
    pilgrimageFactor: 'Kartarpur Corridor voters politically active',
    swing: 'Shift from INC to AAP between 2022-2024',
  },
};

// =============================================================================
// PUBLIC SENTIMENT
// =============================================================================

const publicSentiment: PublicSentiment = {
  currentMLA: {
    name: 'Gurdeep Singh Randhawa',
    party: 'AAP',
    electionYear: 2024,
    termStatus: 'First term (won 2024 bye-election)',
  },
  expectations: [
    'Pilgrimage development',
    'Border area progress',
    'Jobs',
  ],
  keyIssues: [
    {
      issue: 'Kartarpur Development',
      description: 'Corridor development, tourism infrastructure',
      segment: 'Pilgrims, business',
    },
    {
      issue: 'Border Security',
      description: 'Drug smuggling across border',
      segment: 'Entire constituency',
    },
    {
      issue: 'Drug Menace',
      description: 'Major concern',
      segment: 'Youth, families',
    },
    {
      issue: 'Agriculture',
      description: 'MSP, irrigation',
      segment: 'Farmer families',
    },
    {
      issue: 'Jobs',
      description: 'Youth employment',
      segment: 'Youth',
    },
  ],
};

// =============================================================================
// GOVERNANCE GAP
// =============================================================================

const governanceGap: GovernanceGap = {
  pilgrimageInfrastructure: {
    kartarpurCorridorStatus: 'Phase 2 development ongoing',
    yatriFacilities: 'Lodging, retail planned',
    currentFacilities: '[NEEDS VERIFICATION]',
  },
  borderIssues: {
    securityConcerns: 'ISI, smuggling',
    smuggling: ['Drug smuggling'],
    policeAlert: 'CM flagged concerns',
  },
};

// =============================================================================
// ISSUE-VOTER MAPPING
// =============================================================================

const issueVoterMapping: IssueVoterMapping[] = [
  { issue: 'Kartarpur development', segment: 'Pilgrims, business' },
  { issue: 'Drug prevention', segment: 'Youth, families' },
  { issue: 'Border security', segment: 'Entire constituency' },
  { issue: 'Agriculture', segment: 'Farmer families' },
];

// =============================================================================
// INFLUENCERS & POWER STRUCTURE
// =============================================================================

const influencers: Influencers = {
  religious: [
    {
      group: 'Gurdwara Committee',
      verificationStatus: 'Manage local gurdwara',
    },
    {
      group: 'Religious Leaders',
      verificationStatus: '[NEEDS VERIFICATION]',
    },
  ],
  political: [
    {
      name: 'Gurdeep Singh Randhawa',
      role: 'Current AAP MLA',
      party: 'AAP',
      electionYear: 2024,
    },
    {
      name: 'Sukhjinder Singh Randhawa',
      role: 'Former INC MLA',
      party: 'INC',
      electionYear: 2022,
    },
    {
      name: 'Randhawa Family',
      role: 'Political dynasty',
      familyConnection: '[NEEDS VERIFICATION - political prominence]',
      verificationStatus: 'Significant influence in area',
    },
  ],
  casteEquations: '[NEEDS VERIFICATION]',
};

// =============================================================================
// SWOT ANALYSIS
// =============================================================================

const swot: SWOTAnalysis = {
  strengths: [
    'AAP won 2024 bye-election - current advantage',
    'Kartarpur Corridor - major development opportunity',
    'Border tourism potential',
  ],
  weaknesses: [
    'MLA changed 2024 - first term',
    'Border security challenges',
    'Drug trafficking issues',
  ],
  opportunities: [
    'Kartarpur Phase 2 - hotels, retail, 10,000 yatri units',
    'Pilgrimage tourism revenue',
    'Border trade potential',
  ],
  threats: [
    'Security incidents',
    'Drug smuggling',
    'Congress revival',
  ],
};

// =============================================================================
// STRATEGIC BLUEPRINT
// =============================================================================

const strategicBlueprint: StrategicBlueprint = {
  narratives: [
    'Kartarpur Development - Make Dera Baba Nanak world-class pilgrimage site',
    'Border Prosperity - Security + tourism',
    'Jobs from Tourism - Hospitality, services for pilgrims',
  ],
  prioritySegments: [
    { segment: 'Sikh pilgrims (diaspora + local)', priority: 1 },
    { segment: 'Business community (tourism)', priority: 2 },
    { segment: 'Border villagers (security)', priority: 3 },
    { segment: 'Farmers', priority: 4 },
  ],
};

// =============================================================================
// COURSE-CHANGING FACTORS
// =============================================================================

const courseChangingFactors: CourseChangingFactors = {
  politicalShocks: [
    'Kartarpur Corridor closure/reopening',
    'Pakistan relations',
    'Central government tourism investment',
  ],
  externalShocks: [
    'Border incidents',
    'Terrorism alerts',
  ],
};

// =============================================================================
// CANDIDATE PROFILE & ATTACK LINES
// =============================================================================

const recommendedCandidate: RecommendedCandidate = {
  profile: 'Border area specialist, religious connect',
  casteConsideration: 'Jat Sikh preferred',
  keyQualities: ['Tourism development agenda', 'Border awareness'],
};

const attackLines: AttackLines = {
  crisis: ['Border areas prone to drug trafficking'],
  tourismPotential: ['Untapped despite religious significance'],
  borderDevelopment: ['Neglected border infrastructure'],
  agriculturalDistress: ['Farmer issues unresolved'],
};

// =============================================================================
// CONGRESS STRATEGIC POSITION
// =============================================================================

const congressStrategicPosition: CongressStrategicPosition = {
  incumbentStatus: 'Lost 2024 bye-election to AAP - Sukhjinder Singh Randhawa defeated',
  politicalInfluence: 'Randhawa family has political influence in the area',
  marginAnalysis: 'Conflicting margin data from 2022 (~7,000-15,000 estimated) - needs ECI verification',
  strategyFocus: 'Must recapture seat from AAP - religious tourism and border development narratives',
};

// =============================================================================
// DATA SOURCE
// =============================================================================

const dataSource: DataSource = {
  sources: ['IndiaVotes', 'ProNeta', 'Wikipedia', 'Firstpost', 'JDS Journal', 'OneIndia', 'India Today', 'CNBC TV18'],
  researchStatus: 'Partial - requires local verification',
  note: '2024 bye-election result is CRITICAL - AAP won from INC. Sitting MLA is now AAP Gurdeep Singh Randhawa',
};

// =============================================================================
// MASTER EXPORT
// =============================================================================

export const deraBabaNanakDossier: DeraBabaNanakDossier = {
  identity,
  historicalContext,
  geographicInfo,
  economicIdentity,
  schemePenetration,
  socioCultural,
  administrativeSetup,
  demographics,
  electoralHistory,
  publicSentiment,
  governanceGap,
  issueVoterMapping,
  influencers,
  swot,
  strategicBlueprint,
  courseChangingFactors,
  recommendedCandidate,
  attackLines,
  congressStrategicPosition,
  dataSource,
};

export default deraBabaNanakDossier;
