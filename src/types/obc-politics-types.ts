// OBC Politics and Caste Census Types
// Source: direct-documentation/cat-1-demography/b25-caste-census-obc-politics.md

export type PartyPosition = 'Congress' | 'AAP' | 'SAD' | 'BJP' | 'BSP';

export interface CasteCensusContext {
  nationalDebate: string;
  bjpCentralPosition: string[];
  stateLevelImplications: string[];
  obcEnumerationChallenges: string[];
  secDataUsage: string;
  politicalImplications: string[];
}

export interface OBCDemographics {
  estimatedPercentage: string;
  regionalDistribution: {
    region: string;
    seats: number;
    characteristics: string;
  }[];
  urbanRuralDistribution: string;
  majorCommunities: {
    name: string;
    description: string;
    politicalPositioning?: string;
  }[];
}

export interface OBCReservationPolitics {
  demands: string[];
  creamyLayerDebate: {
    argumentsFor: string[];
    argumentsAgainst: string[];
    punjabConsiderations: string;
  };
  mobilizationPatterns: string;
  partyPositioning: {
    party: PartyPosition;
    position: string;
  }[];
}

export interface CongressOBCElectionStrategy {
  voteConsolidation: string;
  casteCensusPositioning: string;
  welfareSchemeDelivery: string;
  leadershipRepresentation: string;
  subCategorizationSensitivity: string;
  artisanCommunityFocus: string;
  aapDifferentiation: string;
}

export interface OBCPoliticsData {
  casteCensusContext: CasteCensusContext;
  obcDemographics: OBCDemographics;
  reservationPolitics: OBCReservationPolitics;
  congressStrategy: CongressOBCElectionStrategy;
}
