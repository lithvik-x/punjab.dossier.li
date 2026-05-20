// Demographic Analysis Methodology Types
// Source: direct-documentation/cat-1-demography/b4-demographic-analysis-methodology.md

export type StatisticalMethod =
  | 'descriptive_statistics'
  | 'time_series'
  | 'regression'
  | 'correlation'
  | 'hypothesis_testing';

export type SpatialAnalysisMethod =
  | 'choropleth_mapping'
  | 'buffer_analysis'
  | 'kernel_density'
  | 'hotspot_analysis'
  | 'network_analysis'
  | 'buffer_zone';

export type EcologicalInferenceMethod =
  | 'rxC_optimal'
  | 'ei_mac'
  | 'ei_R2'
  | '直'
  | 'homogeneity';

export type SurveyMethod =
  | 'sampling'
  | 'questionnaire_design'
  | 'focus_groups'
  | 'depth_interviews'
  | 'delphi_method';

export interface DescriptiveStatistics {
  measures: {
    centralTendency: string[];
    dispersion: string[];
    shape: string[];
  };
  applicationInPunjab: string;
}

export interface InferentialStatistics {
  hypothesisTesting: {
    nullHypothesis: string;
    alternativeHypothesis: string;
    testStatistic: string;
    pValue: string;
  };
  confidenceIntervals: string;
  applicationInPunjab: string;
}

export interface TimeSeriesAnalysis {
  components: string[];
  methods: string[];
  applicationInPunjab: string;
}

export interface GISAnalysis {
  techniques: SpatialAnalysisMethod[];
  dataRequirements: string[];
  PunjabApplication: string;
}

export interface EcologicalInference {
  methods: EcologicalInferenceMethod[];
  challenges: string[];
  PunjabApplication: string;
}

export interface SurveyResearch {
  methods: SurveyMethod[];
  samplingApproaches: string[];
  questionnaireDesign: string[];
  PunjabApplication: string;
}

export interface TrendSpottingMethodology {
  statisticalApproaches: {
    name: string;
    description: string;
    PunjabApplication: string;
  }[];
  machineLearningApproaches: {
    name: string;
    description: string;
    PunjabConstraints: string;
  }[];
  qualitativeApproaches: {
    name: string;
    description: string;
    PunjabContext: string;
  }[];
  signalTypes: {
    leadingIndicators: string[];
    laggingIndicators: string[];
    coincidentIndicators: string[];
  };
}

export interface DemographicMethodologyData {
  descriptiveStatistics: DescriptiveStatistics;
  inferentialStatistics: InferentialStatistics;
  timeSeriesAnalysis: TimeSeriesAnalysis;
  gisAnalysis: GISAnalysis;
  ecologicalInference: EcologicalInference;
  surveyResearch: SurveyResearch;
  trendSpotting: TrendSpottingMethodology;
}
