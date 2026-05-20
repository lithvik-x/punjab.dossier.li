// Education & Digital Access Types for Punjab 2027
// Source: research-M2/MP1-foundational/demographics/education-digital.md

// ==========================================
// LITERACY RATES
// ==========================================

export interface LiteracyRate {
  metric: string;
  census2011: string;
  estimated2024_25: string;
  note?: string;
}

export interface SCLiteracyData {
  district: string;
  scLiteracy: string;
  districtTotal: string;
}

// ==========================================
// SCHOOL INFRASTRUCTURE (UDISE+ 2024-25)
// ==========================================

export interface SchoolInfrastructure {
  indicator: string;
  punjab: string;
  nationalAverage: string;
  note?: string;
}

export interface GERData {
  level: string;
  punjab: string;
  national: string;
}

export interface DropoutData {
  level: string;
  punjab: string;
  national: string;
  note?: string;
}

export interface PTRData {
  level: string;
  punjab: string;
  national: string;
  note?: string;
}

// ==========================================
// SC EDUCATION METRICS
// ==========================================

export interface SCEducationMetrics {
  scPopulationShare: string;
  scEnrolmentShare: string;
  scPrimaryGER: string;
  scSecondaryGER: string;
  scHSGER: string;
  note: string;
}

// ==========================================
// DIGITAL ACCESS & INTERNET
// ==========================================

export interface DigitalAccessData {
  metric: string;
  punjab: string;
  india: string;
  note?: string;
}

export interface DigitalLiteracyTier {
  tier: string;
  description: string;
  estimatedPct: string;
}

// ==========================================
// SOCIAL MEDIA PLATFORMS
// ==========================================

export interface SocialMediaPlatform {
  platform: string;
  indiaMAU: string;
  favoritePct: string;
  punjabEstimate: string;
  demographic: string;
}

// ==========================================
// NETWORK COVERAGE
// ==========================================

export interface NetworkCoverage {
  coverage: string;
  fiveG: string;
  darkZones: string[];
}

// ==========================================
// CAMPAIGN STRATEGIC IMPLICATIONS
// ==========================================

export interface CampaignImplication {
  number: number;
  text: string;
}

// ==========================================
// LEARNING OUTCOMES (ASER 2024)
// ==========================================

export interface LearningOutcomes {
  classIIIReading: string;
  classVReading: string;
  digitalLiteracy: {
    smartphoneAccess: string;
    ownDevice: string;
  };
  stateNote: string;
}

// ==========================================
// TEACHER DATA
// ==========================================

export interface TeacherData {
  singleTeacherSchools: {
    previous: number;
    current: number;
    change: string;
  };
  femaleTeacherShare: string;
  teacherTrainingRate: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface EducationDigitalData {
  literacyRates: LiteracyRate[];
  scLiteracy: SCLiteracyData[];
  schoolInfrastructure: SchoolInfrastructure[];
  gerData: GERData[];
  dropoutData: DropoutData[];
  ptrData: PTRData[];
  digitalAccess: DigitalAccessData[];
  digitalLiteracyTiers: DigitalLiteracyTier[];
  socialMediaPlatforms: SocialMediaPlatform[];
}
