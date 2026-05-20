// Caste Dynamics & Political Organizations Types for Punjab 2027
// Source: research-M2/MP1-foundational/demographics/caste-dynamics.md

// ==========================================
// CASTE ORGANIZATION LANDSCAPE
// ==========================================

export interface CasteGroup {
  name: string;
  nature: string;
  keyMechanism: string;
  politicalVehicle?: string;
  politicalAlignment?: string;
  concentration?: string;
  notes?: string;
}

export interface Dera {
  name: string;
  location: string;
  community: string;
  head?: string;
  recognition?: string;
  politicalSignificance: string;
}

export interface CasteOrganizationLandscape {
  jatSikh: CasteGroup;
  dalitSC: {
    adDharm: CasteGroup;
    deraSachkhandBallan: Dera;
    ravidassiaDeras: string;
    bspPunjab: {
      recentWins: string;
      seatsWon: string;
    };
    sikhSCSubgroups: string;
  };
  obc: {
    overview: string;
    keyCastes: { name: string; notes?: string }[];
    sainiSignificance: string;
    ramgarhiaSabha: string;
  };
  hinduUpperCaste: CasteGroup;
  derasAsPoliticalInstitutions: {
    insight: string;
    majorDeras: Dera[];
  };
}

// ==========================================
// DOMINANT CASTE BY REGION
// ==========================================

export interface RegionalCasteDominance {
  region: string;
  seats: number;
  dominantCaste: string;
  keyDynamic: string;
}

export interface ReservedSeatsInfo {
  total: number;
  percentOfTotal: string;
  distribution: string;
  congress2022Result: string;
}

export interface DominantCasteData {
  regions: RegionalCasteDominance[];
  reservedSeats: ReservedSeatsInfo;
}

// ==========================================
// WINNING COALITION ARITHMETIC
// ==========================================

export interface CastePopulationGroup {
  caste: string;
  populationPercent: number;
  politicalBehavior: string;
}

export interface HistoricalWinningFormula {
  year: number;
  party: string;
  seats: number;
  coalition: string;
  keyLesson: string;
}

export interface CongressRequirement {
  target: string;
  percent: number;
  action: string;
  seats?: string;
}

export interface WinningCoalitionData {
  populationArithmetic: CastePopulationGroup[];
  historicalFormulas: HistoricalWinningFormula[];
  congressRequirements: CongressRequirement[];
  keyLesson: string;
}

// ==========================================
// CASTE TENSIONS & CONFLICTS
// ==========================================

export interface CasteTension {
  incident: string;
  date: string;
  description: string;
  rootCause?: string;
}

export interface InterCasteMarriageData {
  punjabRate: number;
  nationalAverage: number;
  ranking: string;
  implication: string;
}

export interface CasteClassIntersection {
  dynamic: string;
  description: string;
}

export interface CasteTensionsData {
  majorTensionPoints: CasteTension[];
  interCasteMarriage: InterCasteMarriageData;
  casteClassIntersection: CasteClassIntersection[];
  migrantLaborImpact: string;
}

// ==========================================
// CASTE-VOTE BLOC ANALYSIS
// ==========================================

export interface VoteBlocPattern {
  election: string;
  patterns: string[];
  additionalNotes?: string;
}

export interface LocalBodyElectionResult {
  party: string;
  blockSamitiSeats: number;
  zilaParishadSeats: number;
  date: string;
}

export interface CasteVoteBlocData {
  exitPollPatterns: VoteBlocPattern[];
  lokSabha2024Shift: {
    bjpVoteShare: string;
    seatsLed: number;
    note: string;
  };
  localBody2025: LocalBodyElectionResult[];
}

// ==========================================
// CROSS-CASTE POLITICAL LEADERSHIP
// ==========================================

export interface CrossCasteLeader {
  name: string;
  party: string;
  casteBackground: string;
  crossCasteAcceptability: string;
  currentStatus?: string;
}

export interface LeadershipData {
  leaders: CrossCasteLeader[];
  verificationNeeded: string;
}

// ==========================================
// STRATEGIC IMPLICATIONS FOR CONGRESS
// ==========================================

export interface CasteStrategyPriority {
  priority: number;
  name: string;
  populationTarget: string;
  description: string;
  targetSeats?: string;
  keyActions: string[];
}

export interface AntiCoalitionIntelligence {
  party: string;
  strategy: string;
  tactics: string[];
  voteShareChange?: string;
}

export interface CongressCasteStrategy {
  coreChallenge: string;
  priorities: CasteStrategyPriority[];
  antiCoalitionIntelligence: AntiCoalitionIntelligence[];
}

// ==========================================
// KEY DATA POINTS
// ==========================================

export interface CasteDataPoint {
  metric: string;
  value: string;
  source: string;
  year: string;
}

export interface CasteDataPoints {
  entries: CasteDataPoint[];
}

// ==========================================
// DATA GAPS & VERIFICATION
// ==========================================

export interface CasteDataGap {
  gap: string;
  status: string;
  verificationNeeded: string;
}

export interface CasteDataQuality {
  gaps: CasteDataGap[];
  overallConfidence: string;
  sourcesConsulted: number;
  mostRecentSource: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface CasteDynamicsData {
  casteOrganization: CasteOrganizationLandscape;
  dominantCasteByRegion: DominantCasteData;
  winningCoalition: WinningCoalitionData;
  casteTensions: CasteTensionsData;
  casteVoteBlocs: CasteVoteBlocData;
  crossCasteLeadership: LeadershipData;
  congressStrategy: CongressCasteStrategy;
  dataPoints: CasteDataPoints;
  dataQuality: CasteDataQuality;
}
