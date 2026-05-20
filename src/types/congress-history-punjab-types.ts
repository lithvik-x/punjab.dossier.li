// Congress Party History in Punjab Types
// Derived from: direct-documentation/cat-3-party-propulsion/b8-congress-party-history-punjab.md
// Research Date: 2026-05-20 | Data Currency: May 2026

// ==========================================
// METADATA
// ==========================================

export interface CongressHistoryMetadata {
  reportDate: string;
  agent: string;
  taskId: string;
  frameworkReference: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// PRE-INDEPENDENCE TYPES
// ==========================================

export interface GhadarPartyConnection {
  description: string;
  region: string;
  districts: string[];
  relationshipWithCongress: string;
}

export interface CongressMovementsPunjab {
  movements: string[];
  leaders: CongressLeader[];
}

export interface CongressLeader {
  name: string;
  role: string;
  notes?: string;
}

export interface FreedomFighters {
  name: string;
  role: string;
  notes?: string;
}

export interface PartitionRole {
  leagueCongressTalks: string;
  boundaryDetermination: string;
  refugeeRehabilitation: string;
  noakhaliConnection: string;
  demographicImpact: string;
}

// ==========================================
// POST-INDEPENDENCE TYPES
// ==========================================

export interface CongressDominance {
  restingFactors: string[];
  competitors: string[];
}

export interface PratapSinghKaironEra {
  tenure: string;
  industrialization: string;
  agriculturalDevelopment: string;
  punjabiSubaMovement: string;
  landReforms: string;
  controversies: string[];
}

export interface GreenRevolution {
  supportSystems: string[];
  punjabAgriculturalUniversity: string;
  cooperativeCredit: string;
  inputSubsidies: string;
  benefitDistribution: string;
}

export interface CongressSplit1966 {
  cause: string;
  congressO: string;
  congressR: string;
  punjabImpact: string;
  keyFigure: string;
}

export interface EmergencyPeriod {
  positiveForCongress: string[];
  negativeConsequences: string[];
  electoralResult: string;
}

// ==========================================
// PUNJAB CRISIS PERIOD TYPES
// ==========================================

export interface CongressRoleMilitancy {
  pre1984: string;
  duringMilitancy: string;
  operationBlueStar: string;
  postBlueStar: string;
}

export interface AntiSikhRiots {
  congressInvolvement: string;
  longTermImpact: string;
}

export interface RajivGandhiPunjab {
  earlyTenure: string;
  rajivLongowalAccord: string;
  accordCollapse: string;
  laterPeriod: string;
  assessment: string;
}

export interface CongressRevivalAttempts {
  period1985_1992: string;
  "1992Election": string;
  beantSinghChiefMinister: string;
  revivalFactors: string[];
  challenges: string[];
}

// ==========================================
// LEADERSHIP TYPES
// ==========================================

export interface KeyCongressLeaders {
  name: string;
  role: string;
  period?: string;
  assessment?: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface CongressHistoryPunjabData {
  metadata: CongressHistoryMetadata;
  preIndependence: {
    ghadarPartyConnection: GhadarPartyConnection;
    congressMovements: CongressMovementsPunjab;
    freedomFighters: FreedomFighters[];
    partitionRole: PartitionRole;
  };
  postIndependence: {
    congressDominance: CongressDominance;
    kaironEra: PratapSinghKaironEra;
    greenRevolution: GreenRevolution;
    congressSplit: CongressSplit1966;
    emergencyPeriod: EmergencyPeriod;
  };
  crisisPeriod: {
    congressRoleMilitancy: CongressRoleMilitancy;
    antiSikhRiots: AntiSikhRiots;
    rajivGandhiPunjab: RajivGandhiPunjab;
    revivalAttempts: CongressRevivalAttempts;
  };
  keyLeaders: KeyCongressLeaders[];
}
