// Census 2011 and Caste Classification Framework Types
// Source: direct-documentation/cat-1-demography/b1-punjab-census-2011-caste-framework.md

export interface PunjabCensus2011StateSummary {
  totalPopulation: number;
  malePopulation: number;
  femalePopulation: number;
  sexRatio: number;
  urbanPopulation: number;
  urbanPercentage: number;
  ruralPopulation: number;
  ruralPercentage: number;
  literacyRate: number;
  maleLiteracy: number;
  femaleLiteracy: number;
  scPopulation: number;
  scPercentage: number;
  stPopulation: number;
  stPercentage: number;
}

export interface DistrictCensusData {
  name: string;
  totalPopulation: number;
  male: number;
  female: number;
  urbanPercentage: number;
  literacyPercentage: number;
  scPercentage: string; // Range like "~28-30%"
}

export interface WorkParticipationRate {
  region: string;
  wprTotal: string;
  wprMale: string;
  wprFemale: string;
}

export type JatSikhSubCluster =
  | 'Rewari'
  | 'Awan'
  | 'Ghotia'
  | 'Sandhu'
  | 'Maan'
  | 'Sandi';

export type SCSubCaste =
  | 'Mazhabi Sikh'
  | 'Valmiki'
  | 'Ravidasia'
  | 'Ad-Dharmi'
  | 'Bazigar'
  | 'Rai Sikh'
  | 'Khatik'
  | 'Bhil'
  | 'Mochi';

export type OBCGroup =
  | 'Saini'
  | 'Kamboj'
  | 'Labana'
  | 'Tarkhan'
  | 'Kumhar'
  | 'Nai'
  | 'Jatia'
  | 'Gollo'
  | 'Jhija'
  | 'Mochi'
  | 'Sansi'
  | 'Bhanwra';

export type UpperCasteHindu =
  | 'Brahmin'
  | 'Khatri'
  | 'Arora'
  | 'Bania'
  | 'Rajput';

export type Region = 'Malwa' | 'Majha' | 'Doaba';

export interface CasteGroupBase {
  name: string;
  populationEstimate: string;
  populationPercentage: string;
  geographicDistribution: string[];
  historicalOccupation: string;
  politicalBehavior?: string;
}

export interface JatSikhData extends CasteGroupBase {
  populationShare: string;
  subClusters: JatSikhSubCluster[];
  politicalSignificance: string[];
  historicalContext: string[];
}

export interface SCSubCasteData extends CasteGroupBase {
  subCaste: SCSubCaste;
  deraConnections?: string[];
  keyReservedConstituencies?: string[];
}

export interface OBCGroupData extends CasteGroupBase {
  community: OBCGroup;
  politicalSignificance: string[];
}

export interface UpperCasteHinduData extends CasteGroupBase {
  subCaste: UpperCasteHindu;
  contemporaryStatus: string;
}

export interface ReligiousMinorityData {
  community: string;
  population: number;
  percentage: string;
  geographicConcentration: string[];
  historicalContext?: string;
  politicalSignificance: string;
}

export interface RegionalCharacteristic {
  name: Region;
  totalSeats: number;
  keyFeatures: string[];
  dominantCasteGroups: string[];
  electoralCharacter?: string;
}

export interface CasteClassificationFramework {
  stateSummary: PunjabCensus2011StateSummary;
  districts: DistrictCensusData[];
  workParticipationRates: WorkParticipationRate[];
  jatSikh: JatSikhData;
  scSubCastes: SCSubCasteData[];
  obcGroups: OBCGroupData[];
  upperCasteHindus: UpperCasteHinduData[];
  religiousMinorities: ReligiousMinorityData[];
  regionalCharacteristics: RegionalCharacteristic[];
  highSCConcentrationDistricts: string[];
  lowSCConcentrationDistricts: string[];
  highLiteracyDistricts: string[];
  lowLiteracyDistricts: string[];
}
