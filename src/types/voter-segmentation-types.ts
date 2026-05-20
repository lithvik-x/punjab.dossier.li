// Voter Segmentation and Behavioral Demography Types
// Source: direct-documentation/cat-1-demography/b5-voter-segmentation-behavioral-demography.md

export type AgeCohort = '18-25' | '26-35' | '36-50' | '51-65' | '65+';

export type GenderSegment = 'Urban Male' | 'Urban Female' | 'Rural Male' | 'Rural Female';

export type CasteSegment =
  | 'Jat Sikh'
  | 'Other Sikh'
  | 'Mazhabi Sikh'
  | 'Valmiki'
  | 'Ravadasia'
  | 'Ad-Dharmi'
  | 'Bazigar'
  | 'OBC Non-Jat'
  | 'OBC Jat'
  | 'Upper Caste Hindu';

export type ReligiousSegment = 'Sikh' | 'Hindu Upper Caste' | 'Hindu OBC' | 'Hindu SC' | 'Muslim' | 'Christian';

export type GeographicRegion = 'Malwa' | 'Majha' | 'Doaba';

export type PsychographicOrientation = 'Traditional-Familial' | 'Modern-Aspirational' | 'Secular-Rationalist';

export type RiskProfile = 'Risk-Averse' | 'Risk-Neutral' | 'Risk-Seeking';

export type AuthorityOrientation = 'Deference-Oriented' | 'Skeptical-Oriented' | 'Engaged-Critical';

export type VoterType =
  | 'Engaged Voter'
  | 'Clientelistic Voter'
  | 'Habitual Voter'
  | 'Protest Voter'
  | 'Apathetic Voter'
  | 'Coerced Voter';

export type ChoiceBehaviorType =
  | 'Partisan Loyalist'
  | 'Ticket-Splitting Voter'
  | 'Swing Voter'
  | 'Single-Issue Voter'
  | 'Candidate-Centric Voter';

export type InformationBehavior =
  | 'News Seeker'
  | 'Social Media Native'
  | 'Interpersonal Network Voter'
  | 'Media Avoider'
  | 'Selective Exposure Voter';

export type InfluenceType =
  | 'Opinion Leadership'
  | 'Household Influence'
  | 'Community Influence'
  | 'Religious Influence'
  | 'Economic Influence';

export type IssueCategory = 'Drug Abuse' | 'Corruption' | 'Unemployment' | 'Agriculture' | 'Law & Order' | 'Water Crisis';

export interface SegmentationDimension {
  name: string;
  segments: { segment: string; description: string; strategy?: string }[];
}

export interface AgeCohortData {
  cohort: AgeCohort;
  sizePercentage: string;
  politicalBehavior: string;
  strategyNotes: string;
}

export interface GenderSegmentData {
  segment: GenderSegment;
  turnoutPattern: string;
  votingBehavior: string;
  mobilizationNotes: string;
}

export interface CasteSegmentData {
  segment: CasteSegment;
  populationPercentage: string;
  partyLeaning: string;
  keyDynamics: string;
}

export interface ReligiousSegmentData {
  religion: string;
  denomination?: string;
  populationPercentage: string;
  partyLeaning: string;
  keyIssues: string[];
}

export interface GeographicSegmentData {
  region: GeographicRegion;
  seats: number;
  keyDemographics: string[];
  electoralCharacter: string;
}

export interface PsychographicSegmentData {
  orientation: PsychographicOrientation;
  estimatedPercentage: string;
  partyLeanings: string;
  mobilizationApproach: string;
}

export interface VoterTypology {
  type: VoterType;
  characteristics: string;
  punjabProfile: string;
  turnoutRate: string;
  mobilizationStrategy?: string;
  influenceStrategy?: string;
}

export interface ChoiceBehaviorTypology {
  type: ChoiceBehaviorType;
  behaviorDescription: string;
  sizeInPunjab: string;
  stability: string;
  strategicImplication: string;
}

export interface InformationBehaviorTypology {
  type: InformationBehavior;
  profile: string;
  sources?: string[];
  influenceCredibility: string;
  reachStrategy: string;
}

export interface InfluenceTypology {
  type: InfluenceType;
  description: string;
  punjabTypology: { leader: string; influence: string }[];
  influenceRatio: string;
}

export interface IssueSalience {
  rank: number;
  issue: IssueCategory;
  saliencePercentage: string;
  regionalVariation: string;
  partyBenefit: string;
}

export interface VoteBank {
  community: string;
  estimatedSize: string;
  geographicConcentration: string;
  voteBankStability: string;
  partyLeaning: string;
  keyVariable?: string;
}

export interface BaseSwingCalculus {
  baseVote: string;
  swingNeeded: string;
  targetSegments: string[];
}

export interface VoterSegmentationData {
  demographicSegmentation: {
    ageCohorts: AgeCohortData[];
    genderSegments: GenderSegmentData[];
    casteSegments: CasteSegmentData[];
    religiousSegments: ReligiousSegmentData[];
    geographicSegments: GeographicSegmentData[];
  };
  psychographicSegmentation: {
    valueOrientations: PsychographicSegmentData[];
    riskTolerance: { profile: RiskProfile; behavior: string; strategy: string }[];
    authorityOrientation: { orientation: AuthorityOrientation; behavior: string; appeal: string }[];
  };
  behavioralSegmentation: {
    partyIdentificationStrength: { strength: string; turnout: string; swing: string }[];
    turnoutBehavior: VoterTypology[];
    choiceBehavior: ChoiceBehaviorTypology[];
    informationBehavior: InformationBehaviorTypology[];
    influencePatterns: InfluenceTypology[];
  };
  issueSalience: IssueSalience[];
  voteBankTheory: {
    casteVoteBanks: VoteBank[];
    religiousVoteBanks: VoteBank[];
    clientelisticVoteBanks: { program: string; beneficiaries: string; party: string }[];
    classVoteBanks: { class: string; issues: string; parties: string }[];
  };
  strategicConsiderations: {
    baseVote: string;
    swingVote: string;
    congress2027Math: BaseSwingCalculus;
  };
}
