/**
 * AC007-Batala Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source: AC007-Batala.md + AC007-Batala-deep.md
 *
 * Cycle 4 Enhancement: Added Zod validation schemas for runtime type safety
 */

// ============================================================================
// ZOD VALIDATION SCHEMAS
// ============================================================================

import { z } from 'zod';

// Schema: ConstituencyIdentity
export const ConstituencyIdentitySchema = z.object({
  acNumber: z.number().int().min(1).max(500),
  name: z.string().min(1),
  district: z.string().min(1),
  region: z.string().min(1),
  type: z.enum(['GEN', 'SC', 'ST', 'OBC']),
  date: z.string(),
  parliamentarySegment: z.string(),
  city: z.string(),
  area: z.string(),
  significance: z.string(),
});

// Schema: HistoricalContext
export const HistoricalContextSchema = z.object({
  industrialHeritage: z.string(),
  britishEra: z.string(),
  partitionImpact: z.string(),
  sikhHeritage: z.string(),
});

// Schema: EconomicIdentity
export const EconomicIdentitySchema = z.object({
  primaryActivities: z.array(z.string()),
  employment: z.array(z.string()),
  industry: z.string(),
  signatureProducts: z.array(z.string()),
});

// Schema: SocioCulturalIdentity
export const SocioCulturalIdentitySchema = z.object({
  language: z.string(),
  religiousComposition: z.record(z.string(), z.number()),
  casteComposition: z.record(z.string(), z.number()),
  cultural: z.string(),
});

// Schema: AdministrativeSetup
export const AdministrativeSetupSchema = z.object({
  municipalCouncil: z.string(),
  health: z.array(z.string()),
  education: z.array(z.string()),
  industry: z.string(),
});

// Schema: CensusData
export const CensusDataSchema = z.object({
  cityPopulation2011: z.number().int().nullable(),
  urbanAgglomeration: z.number().int().nullable(),
  sexRatio: z.number().int().nullable(),
  literacy: z.number().nullable(),
});

// Schema: ElectoralRollAnalytics
export const ElectoralRollAnalyticsSchema = z.object({
  totalElectors2017: z.number().int().positive(),
  voterTurnout2022: z.number().nullable(),
});

// Schema: SchemePenetration
export const SchemePenetrationSchema = z.object({
  pds: z.string(),
  mgnrega: z.string(),
  industrialSchemes: z.string().nullable(),
});

// Schema: ElectionResult
export const ElectionResultSchema = z.object({
  year: z.number().int().min(1950).max(2030),
  winner: z.string().nullable(),
  party: z.string().nullable(),
  votePercentage: z.number().nullable(),
  margin: z.union([z.string(), z.number()]).nullable(),
  opponent: z.string().nullable().optional(),
  notes: z.string().nullable().optional(),
});

// Schema: VoterBehaviour
export const VoterBehaviourSchema = z.object({
  turnout: z.number().nullable(),
  swing: z.string(),
  urbanFactor: z.string(),
  industryFactor: z.string(),
});

// Schema: CurrentMood
export const CurrentMoodSchema = z.object({
  mla: z.string(),
  party: z.string(),
  term: z.string(),
  expectations: z.array(z.string()),
});

// Schema: KeyIssues
export const KeyIssuesSchema = z.object({
  issue: z.string(),
  segment: z.string(),
});

// Schema: GovernanceGap
export const GovernanceGapSchema = z.object({
  sector: z.string(),
  details: z.array(z.string()),
});

// Schema: Influencers
export const IndustrialInfluencerSchema = z.object({
  type: z.string(),
  name: z.string(),
});

export const PoliticalInfluencerSchema = z.object({
  name: z.string(),
  role: z.string(),
  party: z.string().optional(),
  status: z.string().optional(),
});

export const InfluencersSchema = z.object({
  industrial: z.array(IndustrialInfluencerSchema),
  political: z.array(PoliticalInfluencerSchema),
});

// Schema: SWOTAnalysis
export const SWOTAnalysisSchema = z.object({
  strengths: z.array(z.string()),
  weaknesses: z.array(z.string()),
  opportunities: z.array(z.string()),
  threats: z.array(z.string()),
});

// Schema: StrategicBlueprint
export const StrategicBlueprintSchema = z.object({
  narratives: z.array(z.string()),
  prioritySegments: z.array(z.string()),
});

// Schema: LocalIssue
export const LocalIssueSchema = z.object({
  id: z.number().int().positive(),
  issue: z.string(),
});

// Schema: AttackLine
export const AttackLineSchema = z.object({
  category: z.string(),
  message: z.string(),
});

// Schema: CandidateProfile
export const CandidateProfileSchema = z.object({
  profile: z.string(),
  casteConsideration: z.string(),
  keyQualities: z.array(z.string()),
});

// Schema: StrategicPosition
export const StrategicPositionSchema = z.object({
  situation: z.string(),
  requirements: z.string(),
});

// Schema: CasteComposition
export const CasteCompositionSchema = z.object({
  jathSikh: z.number().min(0).max(100),
  sc: z.number().min(0).max(100),
  obc: z.number().min(0).max(100),
  upperCaste: z.number().min(0).max(100),
  minority: z.number().min(0).max(100),
  other: z.number().min(0).max(100),
});

// Schema: Complete Dossier
export const AC007BatalaDossierSchema = z.object({
  identity: ConstituencyIdentitySchema,
  historicalContext: HistoricalContextSchema,
  economicIdentity: EconomicIdentitySchema,
  socioCultural: SocioCulturalIdentitySchema,
  administrative: AdministrativeSetupSchema,
  census: CensusDataSchema,
  electoralRoll: ElectoralRollAnalyticsSchema,
  schemePenetration: SchemePenetrationSchema,
  electionHistory: z.array(ElectionResultSchema),
  voterBehaviour: VoterBehaviourSchema,
  currentMood: CurrentMoodSchema,
  keyIssues: z.array(KeyIssuesSchema),
  governanceGap: z.array(GovernanceGapSchema),
  influencers: InfluencersSchema,
  swot: SWOTAnalysisSchema,
  strategicBlueprint: StrategicBlueprintSchema,
  localIssues: z.array(LocalIssueSchema),
  casteComposition: CasteCompositionSchema,
  strategicPosition: StrategicPositionSchema,
  candidateProfile: CandidateProfileSchema,
  attackLines: z.array(AttackLineSchema),
  sources: z.array(z.string()),
  researchStatus: z.string(),
});

// ============================================================================
// CONSTITUENCY IDENTITY & BASELINE
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: 'GEN' | 'SC' | 'ST' | 'OBC';
  date: string;
  parliamentarySegment: string;
  city: string;
  area: string;
  significance: string;
}

export interface HistoricalContext {
  industrialHeritage: string;
  britishEra: string;
  partitionImpact: string;
  sikhHeritage: string;
}

export interface EconomicIdentity {
  primaryActivities: string[];
  employment: string[];
  industry: string;
  signatureProducts: string[];
}

export interface SocioCulturalIdentity {
  language: string;
  religiousComposition: Record<string, number>;
  casteComposition: Record<string, number>;
  cultural: string;
}

export interface AdministrativeSetup {
  municipalCouncil: string;
  health: string[];
  education: string[];
  industry: string;
}

// ============================================================================
// DEMOGRAPHIC DEEP-DIVE
// ============================================================================

export interface CensusData {
  cityPopulation2011: number | null;
  urbanAgglomeration: number | null;
  sexRatio: number | null;
  literacy: number | null;
}

export interface ElectoralRollAnalytics {
  totalElectors2017: number;
  voterTurnout2022: number | null;
}

export interface SchemePenetration {
  pds: string;
  mgnrega: string;
  industrialSchemes: string | null;
}

// ============================================================================
// ELECTORAL HISTORY
// ============================================================================

export interface ElectionResult {
  year: number;
  winner: string | null;
  party: string | null;
  votePercentage: number | null;
  margin: string | number | null;
  opponent?: string | null;
  notes?: string;
}

export interface VoterBehaviour {
  turnout: number | null;
  swing: string;
  urbanFactor: string;
  industryFactor: string;
}

// ============================================================================
// PUBLIC SENTIMENT
// ============================================================================

export interface CurrentMood {
  mla: string;
  party: string;
  term: string;
  expectations: string[];
}

export interface KeyIssues {
  issue: string;
  segment: string;
}

// ============================================================================
// GOVERNANCE GAP
// ============================================================================

export interface GovernanceGap {
  sector: string;
  details: string[];
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface IndustrialInfluencer {
  type: string;
  name: string;
}

export interface PoliticalInfluencer {
  name: string;
  role: string;
  party?: string;
  status?: string;
}

export interface Influencers {
  industrial: IndustrialInfluencer[];
  political: PoliticalInfluencer[];
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface SWOTAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface StrategicBlueprint {
  narratives: string[];
  prioritySegments: string[];
}

// ============================================================================
// KEY LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  id: number;
  issue: string;
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AttackLine {
  category: string;
  message: string;
}

// ============================================================================
// CANDIDATE PROFILE
// ============================================================================

export interface CandidateProfile {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface StrategicPosition {
  situation: string;
  requirements: string;
}

// ============================================================================
// CASTE COMPOSITION (Gurdaspur District)
// ============================================================================

export interface CasteComposition {
  jathSikh: number;
  sc: number;
  obc: number;
  upperCaste: number;
  minority: number;
  other: number;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC007BatalaDossier {
  // Identity
  identity: ConstituencyIdentity;
  historicalContext: HistoricalContext;
  economicIdentity: EconomicIdentity;
  socioCultural: SocioCulturalIdentity;
  administrative: AdministrativeSetup;

  // Demographics
  census: CensusData;
  electoralRoll: ElectoralRollAnalytics;
  schemePenetration: SchemePenetration;

  // Electoral
  electionHistory: ElectionResult[];
  voterBehaviour: VoterBehaviour;

  // Public Sentiment
  currentMood: CurrentMood;
  keyIssues: KeyIssues[];

  // Governance
  governanceGap: GovernanceGap[];

  // Influencers
  influencers: Influencers;

  // Analysis
  swot: SWOTAnalysis;
  strategicBlueprint: StrategicBlueprint;

  // Tactical
  localIssues: LocalIssue[];
  casteComposition: CasteComposition;
  strategicPosition: StrategicPosition;
  candidateProfile: CandidateProfile;
  attackLines: AttackLine[];

  // Metadata
  sources: string[];
  researchStatus: string;
}

// ============================================================================
// INFERRED TYPES FROM ZOD SCHEMAS
// ============================================================================

export type ConstituencyIdentityType = z.infer<typeof ConstituencyIdentitySchema>;
export type HistoricalContextType = z.infer<typeof HistoricalContextSchema>;
export type EconomicIdentityType = z.infer<typeof EconomicIdentitySchema>;
export type SocioCulturalIdentityType = z.infer<typeof SocioCulturalIdentitySchema>;
export type AdministrativeSetupType = z.infer<typeof AdministrativeSetupSchema>;
export type CensusDataType = z.infer<typeof CensusDataSchema>;
export type ElectoralRollAnalyticsType = z.infer<typeof ElectoralRollAnalyticsSchema>;
export type SchemePenetrationType = z.infer<typeof SchemePenetrationSchema>;
export type ElectionResultType = z.infer<typeof ElectionResultSchema>;
export type VoterBehaviourType = z.infer<typeof VoterBehaviourSchema>;
export type CurrentMoodType = z.infer<typeof CurrentMoodSchema>;
export type KeyIssuesType = z.infer<typeof KeyIssuesSchema>;
export type GovernanceGapType = z.infer<typeof GovernanceGapSchema>;
export type IndustrialInfluencerType = z.infer<typeof IndustrialInfluencerSchema>;
export type PoliticalInfluencerType = z.infer<typeof PoliticalInfluencerSchema>;
export type InfluencersType = z.infer<typeof InfluencersSchema>;
export type SWOTAnalysisType = z.infer<typeof SWOTAnalysisSchema>;
export type StrategicBlueprintType = z.infer<typeof StrategicBlueprintSchema>;
export type LocalIssueType = z.infer<typeof LocalIssueSchema>;
export type AttackLineType = z.infer<typeof AttackLineSchema>;
export type CandidateProfileType = z.infer<typeof CandidateProfileSchema>;
export type StrategicPositionType = z.infer<typeof StrategicPositionSchema>;
export type CasteCompositionType = z.infer<typeof CasteCompositionSchema>;
export type AC007BatalaDossierType = z.infer<typeof AC007BatalaDossierSchema>;

// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

/**
 * Validates the complete AC007-Batala dossier against Zod schema
 * Returns { success: true, data: AC007BatalaDossier } if valid
 * Returns { success: false, error: ZodError } if invalid
 */
export function validateAC007BatalaDossier(
  data: unknown
): { success: true; data: AC007BatalaDossier } | { success: false; error: z.ZodError } {
  return AC007BatalaDossierSchema.safeParse(data) as {
    success: true;
    data: AC007BatalaDossier;
  } | { success: false; error: z.ZodError };
}

/**
 * Validates a partial update to the dossier (e.g., election results)
 */
export function validatePartialDossier(partial: unknown) {
  return AC007BatalaDossierSchema.partial().safeParse(partial);
}

/**
 * Creates a typed getter for dossier sections
 */
export function getDossierSection<K extends keyof AC007BatalaDossier>(
  dossier: AC007BatalaDossier,
  section: K
): AC007BatalaDossier[K] {
  return dossier[section];
}
