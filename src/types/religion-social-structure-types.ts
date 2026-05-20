// Religion and Social Structure Types
// Source: direct-documentation/cat-1-demography/b2-punjab-religion-social-structure.md

export type SikhDenomination =
  | 'Amritdhari'
  | 'Sehajdhari'
  | 'Nirankari'
  | 'Namdhari'
  | 'Ravidassia'
  | 'Nirmala'
  | 'Udasi'
  | 'Nihang';

export type HinduSect = 'Sanatani' | 'Arya Samaj' | 'Dev Samaj';

export type MuslimSect = 'Sunni' | 'Shia' | 'Deobandi' | 'Barelvi';

export type ChristianDenomination = 'Catholic' | 'Protestant' | 'Pentecostal';

export interface ReligiousDemographic {
  religion: string;
  percentage: string;
  population?: number;
  denominations?: string[];
  geographicDistribution?: string[];
  keyInstitutions?: string[];
  politicalSignificance?: string;
}

export interface DeraProfile {
  name: string;
  headquarters: string;
  foundedBy?: string;
  currentHead?: string;
  communityConnection?: string;
  primaryCommunities?: string[];
  malwaDistricts?: string[];
  followerEstimate?: string;
  politicalSignificance?: string;
  currentStatus?: string;
  officialStance?: string;
}

export interface SikhReligiousInstitution {
  name: string;
  type: 'gurdwara' | 'takht' | 'sgpc';
  location: string;
  politicalSignificance?: string;
}

export interface HinduReligiousInstitution {
  name: string;
  type: 'temple' | 'samaj';
  location: string;
  politicalSignificance?: string;
}

export interface KinshipSystem {
  type: 'joint_family' | 'nuclear_family' | 'biradari' | 'gotra';
  description: string;
  politicalRole?: string;
}

export interface SocialHierarchy {
  category: string;
  approximatePopulation: string;
  casteCommunities: string[];
}

export interface InstitutionalPowerCenter {
  name: string;
  type: string;
  description: string;
  electoralSignificance?: string;
  resources?: string[];
}

export interface ReligionSocialStructure {
  sikhism: {
    percentage: string;
    denominations: { type: SikhDenomination; description: string }[];
    keyPractices: string[];
    sgpcSignificance: string;
    akalTakhtRole: string;
  };
  hinduism: {
    percentage: string;
    sects: { type: HinduSect; description: string }[];
    majorTemples: string[];
    aryaSamajInstitutions: string[];
  };
  islam: {
    percentage: string;
    sectarianDistribution?: string;
    geographicConcentration: string[];
  };
  christianity: {
    percentage: string;
    denominations: ChristianDenomination[];
    geographicDistribution: string[];
  };
  otherReligions: {
    buddhism: string;
    jainism: string;
    sikhSects: string[];
  };
  deras: DeraProfile[];
  familySystems: KinshipSystem[];
  kinshipNetworks: {
    type: string;
    description: string;
    electoralRole: string;
  }[];
  socialHierarchy: SocialHierarchy[];
  institutionalPowerCenters: InstitutionalPowerCenter[];
}
