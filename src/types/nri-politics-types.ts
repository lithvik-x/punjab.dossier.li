// NRI Politics & Overseas Voting Types for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/b35-nri-politics-overseas-voting.md
// Date: 20 May 2026 | Agent: Track B | Task ID: B35

// ==========================================
// NRI DEMOGRAPHICS
// ==========================================

export interface NRIVoterDemographics {
  totalEligibleVoters: string;
  registeredVoters: string;
  actualVotesCast: string;
  concentrationRegion: string;
  concentrationNotes: string;
}

export interface NRIPopulationByCountry {
  country: string;
  estimatedPopulation: string;
  voterPotential: string;
  politicalOrganization: string;
  ppccPresence: string;
}

// ==========================================
// NRI ORGANIZATIONS
// ==========================================

export interface NRIOrganization {
  name: string;
  country: string;
  type: "Cultural" | "Political" | "Community" | "Advocacy";
  alignment: "Congress" | "Sympathetic" | "Neutral" | "Opposition";
  influenceLevel: "High" | "Medium" | "Low";
  membershipEstimate: string;
  activities: string[];
}

export interface WPOCanada {
  name: string;
  chapters: string[];
  congressConnection: string;
  keyActivities: string[];
}

export interface PPCCCanada {
  name: string;
  structure: string;
  nriEngagement: string;
  electionActivities: string[];
}

// ==========================================
// PROXY VOTING MECHANISMS
// ==========================================

export interface ProxyVotingMechanism {
  mechanism: string;
  description: string;
  eligibility: string;
  utilization: string;
  barriers: string[];
}

export interface ERORemittance {
  mechanism: string;
  annualVolume: string;
  electionInfluencePotential: string;
  congressAdvantage: string;
}

// ==========================================
// DOABA NRI IMPACT
// ==========================================

export interface DoabaNRIProfile {
  region: "Doaba";
  nriConnectedHouseholds: string;
  remittanceVolume: string;
  politicalInfluence: string;
  voterRegistrationRate: string;
  actualTurnoutRate: string;
}

export interface DoabaElectoralImpact {
  description: string;
  voteShareInfluence: string;
  keyConstituencies: string[];
  nriCampaignPotential: string;
}

// ==========================================
// NRI CAMPAIGN STRATEGY
// ==========================================

export interface NRICampaignTactic {
  tactic: string;
  platform: string;
  targetAudience: string;
  cost: string;
  effectiveness: string;
  implementationNotes: string;
}

export interface DiasporaPoliticalEngagement {
  strategy: string;
  virtualEngagementChannels: string[];
  groundActivistPotential: string;
  financialContributions: string;
  politicalMessagingApproach: string;
}

// ==========================================
// REMITTANCE INFLUENCE
// ==========================================

export interface RemittanceInfluence {
  annualVolume: string;
  percentOfStateGDP: string;
  householdEconomicInfluence: string;
  politicalClientelismLink: string;
  congressConnection: string;
}

export interface NRIEconomicImpact {
  category: string;
  description: string;
  electoralRelevance: string;
}

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export interface NRIPoliticsConfidence {
  category: string;
  confidenceLevel: "High" | "Medium" | "Low";
  dataSource: string;
  verificationNeeded: string[];
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface NRIPoliticsData {
  documentDate: string;
  agent: string;
  taskId: "B35";
  frameworkSections: string[];

  // Demographics
  nriVoterDemographics: NRIVoterDemographics;
  populationByCountry: NRIPopulationByCountry[];

  // Organizations
  nriOrganizations: NRIOrganization[];
  wpoCanada: WPOCanada;
  ppccCanada: PPCCCanada;

  // Mechanisms
  proxyVotingMechanisms: ProxyVotingMechanism[];
  eroRemittance: ERORemittance;

  // Doaba
  doabaProfile: DoabaNRIProfile;
  doabaElectoralImpact: DoabaElectoralImpact;

  // Strategy
  campaignTactics: NRICampaignTactic[];
  diasporaEngagement: DiasporaPoliticalEngagement;

  // Economic
  remittanceInfluence: RemittanceInfluence;
  economicImpact: NRIEconomicImpact[];

  // Confidence
  knowledgeConfidence: NRIPoliticsConfidence[];
  researchGaps: string[];
}
