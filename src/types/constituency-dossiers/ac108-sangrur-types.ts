/**
 * AC108-Sangrur Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source: AC108-Sangrur.md + AC108-Sangrur-deep.md
 */

// Main dossier types

export interface AC108Header {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: "General";
  dataCurrency: string;
}

export interface AC108ExecutiveSummary {
  description: string;
  historicalNote?: string;
  currentStatus: string;
  keyTakeaway: string;
}

export interface AC108ElectionResult {
  year: number;
  winner: string;
  party: string;
  votes?: number;
  margin?: string | number;
  marginVotes?: number;
  runnerUp?: string;
  runnerUpParty?: string;
  status: "Winner" | "Runner-up" | "Verifying";
}

export interface AC108ElectionResults {
  2022: AC108ElectionResult;
  2017: AC108ElectionResult;
  2012: AC108ElectionResult;
}

export interface AC108CasteComposition {
  community: string;
  percentageMin: number;
  percentageMax: number;
  category: "Jat Sikh" | "OBC" | "SC" | "Upper Caste" | "Minority" | "Other";
}

export interface AC108ElectorateData {
  totalElectorsMin: number;
  totalElectorsMax: number;
  voterTurnout2022?: string;
}

export interface AC108KeyLocalIssue {
  id: number;
  issue: string;
  description?: string;
  priority?: "High" | "Medium" | "Low";
}

export interface AC108CongressPosition {
  currentPosition: string;
  historicalStrength: string;
  challenge: string;
  strengths: string[];
  weaknesses: string[];
}

export interface AC108CandidateProfile {
  preferredCaste: string;
  preferredProfile: string;
  attributes: string[];
  backgroundNote: string;
}

export interface AC108AttackLine {
  id: number;
  topic: string;
  description: string;
  impact?: "High" | "Medium" | "Low";
}

export interface AC108MainDossier {
  header: AC108Header;
  executiveSummary: AC108ExecutiveSummary;
  electionResults: AC108ElectionResults;
  casteComposition: AC108CasteComposition[];
  electorateData: AC108ElectorateData;
  keyLocalIssues: AC108KeyLocalIssue[];
  congressPosition: AC108CongressPosition;
  candidateProfile: AC108CandidateProfile;
  attackLines: AC108AttackLine[];
  notes: string[];
}

// Deep research types

export interface AC108ResearchMetadata {
  microTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: "Verified" | "PARTIALLY VERIFIED" | "Needs Verification";
  dataCurrency: string;
}

export interface AC108ConstituencyProfile {
  assemblyConstituencyNo: number;
  district: string;
  region: string;
  type?: string;
}

export interface AC108GeographicContext {
  description: string;
  areaCharacter: string;
  historicalNote: string;
  religiousDiversity: string;
}

export interface AC1082022ElectionDetail {
  winner: {
    candidate: string;
    party: string;
    votes: number;
  };
  runnerUp: {
    candidate: string;
    party: string;
  };
  margin?: string;
  keyContext: string;
  cmContext: string;
}

export interface AC108DistrictDemographics {
  totalPopulation: number;
  male: number;
  female: number;
  hinduPercentage?: string;
  sikhPercentage?: string;
  historicalNote: string;
}

export interface AC108ElectoralTrend {
  "2022Performance": {
    aapWon: boolean;
  };
  historicalPattern?: string;
}

export interface AC108KeyIssuesDeep {
  drugCrisis: string[];
  agrarianDistress: string[];
  developmentGaps: string[];
}

export interface AC108PoliticalLeadership {
  currentMLA: {
    name: string;
    party: string;
    term: string;
  };
  keyPoliticalFigures?: string;
}

export interface AC108VoterOutreach {
  voterTurnout2022?: {
    stateAverage: number;
    constituencySpecific?: string;
  };
}

export interface AC108GovernmentSchemes {
  beneficiaryData?: string;
}

export interface AC108AttackLinesDeep {
  topic: string;
  description: string;
}

export interface AC108IntelligenceGaps {
  requiresVerification: string[];
}

export interface AC108ResearchPriorities {
  priorities: string[];
}

export interface AC108Sources {
  sources: string[];
  urls: string[];
}

export interface AC108DeepResearch {
  researchMetadata: AC108ResearchMetadata;
  constituencyProfile: AC108ConstituencyProfile;
  geographicContext: AC108GeographicContext;
  electionResult2022: AC1082022ElectionDetail;
  districtDemographics: AC108DistrictDemographics;
  electoralTrend: AC108ElectoralTrend;
  keyIssues: AC108KeyIssuesDeep;
  politicalLeadership: AC108PoliticalLeadership;
  voterOutreach: AC108VoterOutreach;
  governmentSchemes: AC108GovernmentSchemes;
  attackLines: AC108AttackLinesDeep[];
  intelligenceGaps: AC108IntelligenceGaps;
  researchPriorities: AC108ResearchPriorities;
  sources: AC108Sources;
}

// Complete export

export interface AC108SangrurTypes {
  mainDossier: AC108MainDossier;
  deepResearch: AC108DeepResearch;
}

export type AC108SangrurType = AC108SangrurTypes;
