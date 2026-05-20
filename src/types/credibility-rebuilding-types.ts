// Credibility Rebuilding Strategy Types
// Derived from: direct-documentation/cat-3-party-propulsion/g17-credibility-rebuilding-strategy.md
// Research Date: 2026-05-20 | Data Currency: May 2026

// ==========================================
// METADATA
// ==========================================

export interface CredibilityRebuildingMetadata {
  reportDate: string;
  documentClassification: string;
  reference: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// 2017-2022 FAILURE TYPES
// ==========================================

export interface DrugCrisisFailure {
  promise: string;
  reality: string;
  policeComplicity: string;
  outcome: string;
}

export interface FarmerDistressFailure {
  promise: string;
  reality: string;
  procurementFailures: string;
  stubbleBurning: string;
  incomeStagnation: string;
}

export interface EconomicEmploymentFailure {
  youthUnemployment: string;
  industrialDevelopment: string;
  formalSectorJobs: string;
  msmeSector: string;
}

export interface GovernanceDeliveryFailure {
  mlasLostDeposits: number;
  ministerCorruption: string;
  schemeImplementation: string;
  basicServices: string;
}

export interface LawOrderFailure {
  deraEmboldened: string;
  sacrilegeIncidents: string;
  policeReforms: string;
  mobViolence: string;
}

// ==========================================
// ACKNOWLEDGMENT TYPES
// ==========================================

export interface AcknowledgmentMessage {
  title: string;
  statement: string;
  principle: string;
  dos: string[];
  donts: string[];
  keyPhraseFramework: string[];
}

export interface SpecificAcknowledgments {
  drugPromise: string;
  farmDebtWaiver: string;
  serviceDelivery: string;
  corruption: string;
  "2022Loss": string;
}

// ==========================================
// LESSONS LEARNED TYPES
// ==========================================

export interface InternalReviewFindings {
  overpromising: string;
  ticketDistribution: string;
  localOrganization: string;
  socialMedia: string;
  antiCorruptionPositioning: string;
  developmentContrast: string;
}

export interface StructuralChanges {
  decentralization: string;
  accountabilityCells: string;
  pratibhaVikaas: string;
  policyTicketSeparation: string;
}

export interface GrassrootsStructure {
  congressMitra: string;
  sevaDal: string;
  kisanCell: string;
  youthCell: string;
  newMemberQuota: string;
}

export interface LeadershipTransitions {
  sidhuRemoval: string;
  amarinderRemoval: string;
  channiElevation: string;
  localLeadership: string;
}

export interface PolicyPositionChanges {
  "2017Position": string;
  "2027Position": string;
  rationale: string;
}

// ==========================================
// PROMISE ACCOUNTABILITY TYPES
// ==========================================

export interface PromiseTest {
  fiscallyRealistic: string;
  administrativelyFeasible: string;
  legallyPermissible: string;
}

export interface PromiseCategories {
  commitment: string;
  aspiration: string;
  intention: string;
}

export interface ThirdPartyVerification {
  expertCommittees: string;
  citizenJuries: string;
  lokpalMechanism: string;
}

export interface SunsetClauses {
  description: string;
  deadlineTypes: string[];
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface CredibilityRebuildingData {
  metadata: CredibilityRebuildingMetadata;
  executiveSummary: string;
  failures2017_2022: {
    drugCrisis: DrugCrisisFailure;
    farmerDistress: FarmerDistressFailure;
    economicEmployment: EconomicEmploymentFailure;
    governanceDelivery: GovernanceDeliveryFailure;
    lawOrder: LawOrderFailure;
  };
  acknowledgments: {
    specificAcknowledgments: SpecificAcknowledgments;
    messaging: AcknowledgmentMessage;
  };
  lessonsLearned: {
    internalReviewFindings: InternalReviewFindings;
    structuralChanges: StructuralChanges;
    grassrootsStructure: GrassrootsStructure;
    leadershipTransitions: LeadershipTransitions;
    policyPositionChanges: PolicyPositionChanges[];
  };
  promiseAccountability: {
    threePartTest: PromiseTest;
    promiseCategories: PromiseCategories;
    thirdPartyVerification: ThirdPartyVerification;
    sunsetClauses: SunsetClauses;
  };
}
