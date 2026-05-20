// Demographic Analysis Methodology Data
// Source: direct-documentation/cat-1-demography/b4-demographic-analysis-methodology.md

import type { DemographicMethodologyData } from '../types/demographic-methodology-types';

export const DEMOGRAPHIC_METHODOLOGY_DATA: DemographicMethodologyData = {
  descriptiveStatistics: {
    measures: {
      centralTendency: ['Mean (arithmetic average)', 'Median (middle value)', 'Mode (most frequent value)'],
      dispersion: ['Range', 'Variance', 'Standard deviation', 'Interquartile range'],
      shape: ['Skewness', 'Kurtosis'],
    },
    applicationInPunjab: 'Calculate average voter turnout per constituency, mean vote share across parties, mean age of candidates',
  },
  inferentialStatistics: {
    hypothesisTesting: {
      nullHypothesis: 'No significant difference in voting patterns between demographic groups',
      alternativeHypothesis: 'Significant difference exists between demographic groups',
      testStatistic: 't-test, chi-square, ANOVA depending on variable types',
      pValue: 'Probability of observing test statistic under null hypothesis',
    },
    confidenceIntervals: 'Range within which true population parameter likely falls',
    applicationInPunjab: 'Test significance of caste or region effects on vote share',
  },
  timeSeriesAnalysis: {
    components: ['Trend (long-term direction)', 'Seasonal (cyclical patterns)', 'Cyclical (business cycles)', 'Irregular/Random (unpredictable fluctuations)'],
    methods: ['Moving averages', 'Exponential smoothing', 'ARIMA models', 'Decomposition'],
    applicationInPunjab: 'Congress vote share trend 2012-2022, AAP trajectory 2014-2022, turnout trends by region',
  },
  gisAnalysis: {
    techniques: ['choropleth_mapping', 'buffer_analysis', 'kernel_density', 'hotspot_analysis', 'network_analysis', 'buffer_zone'],
    dataRequirements: ['Administrative boundaries', 'Booth locations with coordinates', 'Caste composition data', 'Road network', 'Key locations (gurudwaras, temples, deras)'],
    PunjabApplication: 'Booth-level vote share mapping, caste concentration interpolation, GOTV routing, market day analysis, border area identification',
  },
  ecologicalInference: {
    methods: ['rxC_optimal', 'ei_mac', 'ei_R2', '直', 'homogeneity'],
    challenges: ['Ecological fallacy risk (assuming uniform behavior within group)', 'MAUP (modifiable areal unit problem)', 'Cross-level inference bias'],
    PunjabApplication: 'Estimate group-level voting from aggregate constituency data, derive SC voter behavior from booth-level results',
  },
  surveyResearch: {
    methods: ['sampling', 'questionnaire_design', 'focus_groups', 'depth_interviews', 'delphi_method'],
    samplingApproaches: ['Simple random sampling', 'Stratified sampling (by region, caste)', 'Cluster sampling (by constituency)', 'Multi-stage sampling'],
    questionnaireDesign: ['Closed-ended questions', 'Likert scales', 'Conjoint analysis', 'Rank ordering'],
    PunjabApplication: 'Issue salience surveys, candidate perception studies, voting intention polls, constituency-level quick counts',
  },
  trendSpotting: {
    statisticalApproaches: [
      {
        name: 'Time Series Decomposition',
        description: 'Separate trend, seasonal, cyclical components',
        PunjabApplication: 'Congress vote share trend (declining 2012-2022), AAP rise trajectory, turnout by region',
      },
      {
        name: 'Moving Averages',
        description: 'Smooth volatility to identify underlying direction',
        PunjabApplication: 'Congress seat count volatility: 27(2002), 56(2007), 46(2012), 18(2017), 13(2022)',
      },
      {
        name: 'Exponential Smoothing',
        description: 'Weight recent observations more heavily',
        PunjabApplication: 'Poll/trend projection giving more weight to recent polling data',
      },
      {
        name: 'Change-Point Detection',
        description: 'Identify moments when underlying trend shifts',
        PunjabApplication: 'Identify if 2022 was new normal or outlier, detect if AAP support solidifying or fragile',
      },
    ],
    machineLearningApproaches: [
      {
        name: 'Clustering Over Time',
        description: 'Group assembly segments by similar voting behavior, track transitions',
        PunjabConstraints: 'N=117 seats, limited training data (6 elections), high variance, risk of overfitting',
      },
      {
        name: 'Anomaly Detection',
        description: 'Identify unusual patterns - unexpected results, abnormal swings',
        PunjabConstraints: 'Small N makes anomaly detection less reliable',
      },
      {
        name: 'Pattern Recognition',
        description: 'Identify features predicting voting outcomes',
        PunjabConstraints: 'Limited elections (N=117), overfitting risk',
      },
      {
        name: 'Predictive Modeling',
        description: 'Classification (seat outcome), regression (vote share), ranking (probability)',
        PunjabConstraints: 'Requires ensemble methods combining statistical with polling data',
      },
    ],
    qualitativeApproaches: [
      {
        name: 'Focus Groups',
        description: '6-8 participants stratified by constituency type, caste, age, gender',
        PunjabContext: 'Punjabi-language facilitation required, sensitive topics (caste, dera affiliation) need skilled moderation',
      },
      {
        name: 'Depth Interviews',
        description: 'Sitting MLAs, former MPs, booth-level workers, dera leaders, sarpanches, teachers',
        PunjabContext: 'Personal networks can facilitate access, existing Congress workers as interviewers',
      },
      {
        name: 'Community Observation',
        description: 'Systematic observation at public spaces - mandis, gurudwaras, dera centers, wedding halls',
        PunjabContext: 'Dera function attendance, religious processions',
      },
      {
        name: 'Delphi Method',
        description: 'Iterative structured consultation with 15-25 Punjab political experts',
        PunjabContext: 'Former bureaucrats, political analysts, senior journalists, academics - has well-documented biases',
      },
    ],
    signalTypes: {
      leadingIndicators: ['Poll trends 6+ months out', 'Enthusiasm gap (worker recruitment, rally attendance)', 'Fundraising speed', 'Social media engagement', 'Defection signals'],
      laggingIndicators: ['Election results', 'Post-poll surveys', 'By-election results', 'Local body results'],
      coincidentIndicators: ['Campaign rally size', 'Media coverage tone', 'Day-of-election reports (turnout, EVM carriage)'],
    },
  },
};

// Helper functions
export function getMethodologyForType(type: 'statistical' | 'spatial' | 'ecological' | 'survey'): string[] {
  switch (type) {
    case 'statistical':
      return DEMOGRAPHIC_METHODOLOGY_DATA.timeSeriesAnalysis.methods;
    case 'spatial':
      return DEMOGRAPHIC_METHODOLOGY_DATA.gisAnalysis.techniques;
    case 'ecological':
      return DEMOGRAPHIC_METHODOLOGY_DATA.ecologicalInference.methods;
    case 'survey':
      return DEMOGRAPHIC_METHODOLOGY_DATA.surveyResearch.methods;
    default:
      return [];
  }
}

export function getLeadingIndicators(): string[] {
  return DEMOGRAPHIC_METHODOLOGY_DATA.trendSpotting.signalTypes.leadingIndicators;
}

export function getPunjabApplicationNotes(): string {
  return 'Key constraints: N=117 seats, limited training data (6 elections), high variance. Use ensemble methods combining statistical (caste-weighted averages) with polling data.';
}
