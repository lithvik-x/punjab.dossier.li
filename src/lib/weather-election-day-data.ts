// Weather Patterns and Election Day Planning Data for Punjab February 2027
// Derived from: direct-documentation/cat-10-perception-strategy/g29-weather-election-day-planning.md

import type {
  PartyPerceptionMetrics,
  LeaderPerceptionMetrics,
  IssueOwnershipAnalysis,
  PositioningQuadrant,
  VoterSegmentClassification,
  MediaToneAnalysis,
  DeraLandscape,
  CampaignObjectives,
  RegionalVoteShift,
  VictoryPathway,
  ResourceAllocation,
  TimelinePhase,
  MilestoneCheckpoint,
  ContingencyScenario,
  StakeholderAlignment,
  MasterNarrative,
  SubNarrative,
  EmotionalArchitecture,
  MessageHierarchy,
  NarrativeTesting,
} from '@/types/perception-audit-types';

// ==========================================
// REGIONAL CLIMATOLOGY
// ==========================================

export const regionalClimatology = [
  {
    region: "Malwa",
    seats: 69,
    temperature: "7°C to 21°C (average February)",
    rainfall: "25-35mm for the month",
    fogDays: "8-12 foggy days in February",
    soilCondition: "Well-drained; rain rarely causes flooding but can create muddy approach roads",
    characteristics: "Historically warmer than northern regions, central Punjab alluvial plains",
  },
  {
    region: "Majha",
    seats: 27,
    temperature: "5°C to 19°C (approximately 2-3°C colder than Malwa)",
    rainfall: "30-45mm",
    fogDays: "More persistent due to proximity to Indo-Pak border plains",
    characteristics: "Border region including Amritsar, Gurdaspur, Pathankot, parts of Tarn Taran; higher altitude areas (Pathankot) occasionally receive snowfall in upper reaches",
  },
  {
    region: "Doaba",
    seats: 23,
    temperature: "6°C to 20°C (slightly warmer than Majha but cooler than Malwa)",
    rainfall: "35-50mm (highest of three regions)",
    fogDays: "6-10 days in February",
    floodVulnerability: "Historically higher flood vulnerability; unseasonal rains in upper Doaba region (Hoshiarpur, parts of Kapurthala) can cause waterlogging",
    characteristics: "Fertile Beas river region including Jalandhar, Kapurthala, Hoshiarpur, Nawanshahr",
  },
];

// ==========================================
// HISTORICAL WEATHER DATA: FEBRUARY ELECTION DAYS
// ==========================================

export const historicalElectionWeather = [
  {
    election: "2017",
    date: "4 Feb",
    avgTemp: "9°C morning, 18°C afternoon",
    weatherEvent: "Dense fog morning, clear afternoon",
    regionMostAffected: "Majha (Amritsar, Gurdaspur)",
    observations: [
      "Dense morning fog reduced visibility to under 50 meters in Majha during voting hours (7:00-9:00 AM)",
      "Voter turnout in fog-affected border constituencies was 3-4% lower than 2012 in equivalent seats",
      "Senior voter turnout dropped disproportionately — approximately 8% lower in fog-affected areas versus clear weather",
    ],
  },
  {
    election: "2022",
    date: "10 Feb",
    avgTemp: "6°C morning, 14°C afternoon",
    weatherEvent: "Light rain in southern Malwa",
    regionMostAffected: "Malwa (Bathinda, Faridkot, Muktsar)",
    observations: [
      "Rain did not suppress turnout; turnout in affected Malwa seats was actually 2.3% higher than 2017 in same seats",
      "Possible explanation: rain suppresses agricultural labor outdoor work, making it easier for rural voters to vote",
      "Waterlogging in low-lying roads near polling stations in Doaba's Hoshiarpur district",
    ],
  },
  {
    election: "2012",
    date: "30 Jan",
    avgTemp: "11°C morning, 22°C afternoon",
    weatherEvent: "Clear throughout",
    regionMostAffected: "All regions",
    observations: ["Highest turnout in decade (78.9%)"],
  },
];

// ==========================================
// FEBRUARY 2027 FORECAST PARAMETERS
// ==========================================

export const feb2027ForecastParameters = {
  temperature: "Expected range 5°C to 22°C (normal climatological parameters)",
  fog: "Likely 8-14 foggy days, with density highest in the first two weeks",
  rainProbability: "La Nina conditions (if persisting) typically increase rainfall in Punjab by 10-15% above normal",
  extremeEvents: "Low probability (<15%) of western disturbance causing hailstorm or heavy rain event",
  planningAssumption: "Plan for adverse weather as baseline scenario. Clear weather should be treated as bonus, not expectation.",
};

// ==========================================
// WEATHER IMPACT ON VOTER TURNOUT
// ==========================================

export const weatherImpactOnTurnout = [
  {
    weatherCondition: "Fog",
    turnoutImpact: "Reduces turnout by 2-5% in affected areas",
    effectConcentrated: "Voters over 60 and those without personal transport",
    urbanImpact: "Urban voters less affected due to better-lit streets and transport availability",
    note: "Does not uniformly harm one party; primarily suppresses turnout among less-motivated voters",
  },
  {
    weatherCondition: "Light Rain",
    turnoutImpact: "Minimal negative effect, may increase rural turnout",
    mechanism: "Reduces agricultural activity, making it easier for rural voters to vote",
  },
  {
    weatherCondition: "Moderate to Heavy Rain",
    turnoutImpact: "Reduces turnout by 3-7% in affected areas",
    mostAffected: "Rural constituencies without paved road access to polling stations",
    doabaNote: "Effect more pronounced in Doaba due to waterlogging vulnerability",
  },
  {
    weatherCondition: "Cold Temperature (<7°C at 7:00 AM)",
    turnoutImpact: "Suppresses early morning turnout by 4-6%",
    mostAffected: "Senior voters; many prefer to vote after 9:00 AM when temperatures rise",
    neutralization: "By 10:00 AM, temperature effect largely neutralizes",
  },
];

// ==========================================
// RURAL vs URBAN IMPACT DIFFERENTIAL
// ==========================================

export const ruralUrbanWeatherImpact = [
  { voterCategory: "Urban, personal transport", weatherVariable: "Any", impactDirection: "Minimal", estimatedSwing: "±1%" },
  { voterCategory: "Rural, personal transport", weatherVariable: "Fog", impactDirection: "Moderate negative", estimatedSwing: "-2 to -3%" },
  { voterCategory: "Rural, personal transport", weatherVariable: "Light rain", impactDirection: "Minimal positive", estimatedSwing: "+1 to +2%" },
  { voterCategory: "Rural, personal transport", weatherVariable: "Heavy rain", impactDirection: "Moderate negative", estimatedSwing: "-3 to -5%" },
  { voterCategory: "Rural, no personal transport", weatherVariable: "Fog", impactDirection: "Strong negative", estimatedSwing: "-5 to -8%" },
  { voterCategory: "Rural, no personal transport", weatherVariable: "Rain", impactDirection: "Moderate negative", estimatedSwing: "-3 to -5%" },
  { voterCategory: "Senior (60+), any transport", weatherVariable: "Fog", impactDirection: "Strong negative", estimatedSwing: "-6 to -10%" },
  { voterCategory: "Senior (60+), any transport", weatherVariable: "Cold/rain", impactDirection: "Moderate negative", estimatedSwing: "-4 to -6%" },
];

// ==========================================
// WEATHER IMPACT ON PARTY VOTER BASES
// ==========================================

export const weatherImpactByVoterBase = {
  congress: [
    { demographic: "Rural Dalit voters (Mazhabi Sikh, Valmiki, Ravidasia)", vulnerability: "High dependency on arranged booth transport", weatherVulnerability: "Vulnerable to fog and rain" },
    { demographic: "Rural Jat Sikh voters", vulnerability: "Typically have personal transport", weatherVulnerability: "Less vulnerable" },
    { demographic: "Urban working-class voters", vulnerability: "Afternoon voting after shift work", weatherVulnerability: "Affected by weather that complicates travel" },
    { demographic: "Women voters (rural)", vulnerability: "Often walk to booths", weatherVulnerability: "Affected by rain and extreme cold" },
  ],
  bjp: [
    { demographic: "Urban middle-class", vulnerability: "Personal transport", weatherVulnerability: "Minimal" },
    { demographic: "Rural upper-caste", vulnerability: "Personal transport", weatherVulnerability: "Minimal" },
    { demographic: "Booth-level workers", vulnerability: "Generally better resourced for transport arrangements", weatherVulnerability: "Less vulnerable" },
  ],
  aap: [
    { demographic: "Urban youth", vulnerability: "Less affected by weather", weatherVulnerability: "Higher motivation" },
    { demographic: "Rural farm workers", vulnerability: "Affected by agricultural calendar", weatherVulnerability: "Rain may help by reducing field work" },
    { demographic: "Anti-establishment voters", vulnerability: "High motivation", weatherVulnerability: "Weather has minimal suppressing effect on core supporters" },
  ],
  sad: [
    { demographic: "Rural Sikh voters (Malwa and Majha)", vulnerability: "Have personal transport", weatherVulnerability: "Moderate weather impact" },
    { demographic: "Elderly in rural communities", vulnerability: "Vulnerable to weather suppression", weatherVulnerability: "Weather sensitive" },
  ],
};

export const congressWeatherRiskAssessment = {
  summary: "Weather suppression in February 2027 most hurts rural Dalit and senior voter turnout — both key Congress target demographics",
  priorityRisk: "HIGHEST — This is the highest-priority weather risk for the campaign",
};

// ==========================================
// TRANSPORT AND LOGISTICS
// ==========================================

export const roadConditionsDuringAdverseWeather = {
  fog: [
    { roadType: "Rural roads", condition: "Visibility drops to 50-100 meters in open fields; fog denser near water bodies and canal banks" },
    { roadType: "National highways (NH1, NH7)", condition: "Slower traffic, increased accidents; voters avoid night/early morning travel" },
    { roadType: "State highways", condition: "Generally passable but slower" },
    { roadType: "Village connect roads", condition: "Worst condition — kutcha (unpaved) roads become slippery with morning dew combined with fog" },
  ],
  rain: [
    { roadType: "Paved roads", condition: "Minimal road condition degradation for paved roads; kutcha roads become muddy" },
    { roadType: "Low-lying rural roads", condition: "Water accumulation; some underpasses and low-lying bridges prone to flooding" },
    { roadType: "Doaba (Hoshiarpur district)", condition: "Significant waterlogging in low-lying rural roads, flash flooding possible near nullahs" },
  ],
};

export const boothLevelTransportProtocol = [
  { step: 1, action: "Identify voters requiring transport", voters: ["Voters without personal transport", "Senior voters (60+)", "Voters with disabilities"] },
  { step: 2, action: "Pre-arrange group transport", vehicle: "Shared auto/tempo for clusters of 5-10 voters per vehicle" },
  { step: 3, action: "Departure time", timing: "8:00-9:00 AM to avoid peak fog hours while ensuring polling station access before noon" },
  { step: 4, action: "Vehicle equipment", items: ["Torch/flashlight", "Umbrella", "Bottled water", "Blanket (for long waits)"] },
  { step: 5, action: "Return journey planning", note: "Voters stranded at polling stations due to transport unavailability is a turnout catastrophe" },
];

export const ruralConstituencyWeatherTransportPriority = [
  { priority: 1, category: "SC-dominant booths in Malwa", example: "Booth Nos. 1-15 type arrangements" },
  { priority: 2, category: "Senior voter-heavy booths", method: "Identified through voter roll analysis" },
  { priority: 3, category: "Border area booths in Majha", note: "Fog-prone, Gurdaspur, Tarn Taran" },
];

// ==========================================
// POLLING DAY CONTINGENCY PLANS
// ==========================================

export const extendedVotingHoursScenarios = [
  { scenario: "Dense fog until 10:00 AM", recommendedAction: "Petition for 7:00 PM close instead of 6:00 PM" },
  { scenario: "Heavy rain all day", recommendedAction: "Petition for 7:00 PM close; arrange emergency transport for stranded voters" },
  { scenario: "Weather improves by 10:00 AM", recommendedAction: "No extension needed; focus on GOTV for afternoon window" },
  { scenario: "Weather adverse all day", recommendedAction: "Full extension petition; activate disaster coordination protocol" },
];

export const congressContingencyPlanning = [
  { timing: "If fog is severe on February 2027 election day", action: "Immediately petition DEO for hour extension in affected constituencies" },
  { timing: "Preparation", action: "Prepare template representations in advance; have them pre-signed by district Congress presidents" },
  { timing: "Filing deadline", action: "File petitions before 12:00 noon to allow EC decision before 4:00 PM" },
  { timing: "Key argument", content: "Voters in rural areas unable to reach polling stations due to fog in morning hours" },
];

// ==========================================
// COMMUNICATION BACKUP
// ==========================================

export const communicationBackupProtocol = [
  { priority: "Primary", method: "WhatsApp group", note: "Ensure pre-downloaded contact list" },
  { priority: "Secondary", method: "SMS", note: "Works on 2G when data fails" },
  { priority: "Tertiary", method: "Direct phone calls to district control room" },
  { priority: "Emergency", method: "Booth-level workers should know the nearest landline or BSNL public call office" },
];

// ==========================================
// STAFF DEPLOYMENT IN BAD WEATHER
// ==========================================

export const staffDeploymentPriorities = [
  { role: "Transport coordinators", count: "Dedicated staff for voter transport logistics, not assigned to booth duty" },
  { role: "Fog guides", count: "One person at entrance of each rural polling station", timing: "7:00-10:00 AM in dense fog" },
  { role: "Senior voter assistants", count: "Pairs assigned to accompany voters over 70 or disabled voters", task: "From vehicle to booth" },
  { role: "Waterproof material handlers", count: "Staff with umbrellas and plastic sheeting", task: "For protecting queued voters during rain" },
];

// ==========================================
// GOTV IMPLICATIONS
// ==========================================

export const gotvMessageAdaptation = [
  { weather: "Clear weather", message: "Your vote is your voice" },
  { weather: "Foggy/rainy weather", message: "Every vote counts even more when others stay home" },
  { weather: "Foggy/rainy weather", emphasis: "Strongly branded umbrella/poncho as per election code (if permissible)" },
  { weather: "Any adverse weather", emphasis: "Reminder of extended hours if EC has approved" },
];

export const electionDaySmsTiming = [
  { timing: "Day before (6:00 PM)", message: "Tomorrow is polling day. Remember: 8 AM to 6 PM. Check your booth number." },
  { timing: "Polling day 6:00 AM", message: "Good morning! Polling starts at 8 AM. Don't forget your ID. Weather update: [applicable forecast]" },
  { timing: "Polling day 8:00 AM", message: "Polling is open! Don't miss your chance to shape Punjab's future." },
  { timing: "Polling day 11:00 AM", message: "Halfway through! If you haven't voted yet, make it a priority this afternoon." },
  { timing: "Polling day 3:00 PM", message: "Last 3 hours! Polling closes at 6 PM sharp. Don't let your vote go to waste." },
  { timing: "Polling day 5:00 PM", message: "ONE HOUR LEFT! Final call — make sure your voice is heard." },
];

export const weatherSpecificSmsAdditions = [
  { condition: "Fog", message: "Dense fog this morning — leave early for your booth. Roads are passable, just slower than usual." },
  { condition: "Rain", message: "Rain expected this afternoon — carry an umbrella. Don't let rain stop you from voting!" },
  { condition: "Clear", message: "Beautiful weather — perfect day to fulfill your duty. Get to the booth!" },
];

// ==========================================
// ORGANIZED TRANSPORT MODEL
// ==========================================

export const organizedTransportModel = {
  departureTime: "8:30-9:30 AM (avoids peak fog, ensures arrival before 10 AM)",
  reservationTiming: "Vehicle should be pre-identified and reserved 48 hours before polling",
  payment: "Driver paid in advance; not contingent on trip completion",
  coordinator: "One Congress worker per vehicle as coordinator",
  communication: "WhatsApp group for all coordinators with real-time updates",
  doorToDoorNote: "NOT recommended on polling day itself for voters who haven't yet voted — use for identifying who HAS voted and reminding of extended hours only",
};

// ==========================================
// REGIONAL VARIATIONS
// ==========================================

export const malwaWeatherProfile = {
  seats: 69,
  weatherProfile: "Driest of three regions in February",
  temperature: "Warmest of three regions (7-21°C)",
  fog: "Moderate; concentrated in morning hours",
  specificVulnerabilities: [
    "Southern Malwa (Bathinda, Faridkot, Muktsar, Ferozepur, Mansa): slightly higher rain probability",
    "Rural roads in southern Malwa are narrower and less maintained",
    "Sand dunes in Cholistan border area (Bhatinda district) can cause visibility issues in windy conditions",
  ],
  congressPriority: [
    "Dalit voters (Mazhabi Sikh colonies) in Malwa towns: high-priority transport arrangement needed",
    "Agriculture labor voters: if weather is clear, may be in fields; GOTV must be timed for afternoon",
    "Female voters: higher turnout than Majha/Doaba; ensure booth accessibility and transport doesn't create gender-specific barriers",
  ],
  recommendedContingency: "If light rain: no special action. If heavy rain: activate rural road alternate route planning; pre-identify passable roads in each assembly segment",
};

export const majhaWeatherProfile = {
  seats: 27,
  weatherProfile: "Coldest region (5-19°C), fog most persistent due to border plains",
  rainfall: "Moderate (30-45mm)",
  altitude: "Highest variation (Pathankot area)",
  specificVulnerabilities: [
    "Indo-Pak border area: additional security restrictions may compound weather-related access issues",
    "Gurdaspur district: proximity to rivers causes morning fog density",
    "Pathankot: high-altitude roads may have frost/black ice on polling day morning",
    "Tarn Taran: rural roads between villages are narrow kutcha roads",
  ],
  congressPriority: [
    "Border area voters: slightly lower Congress vote share historically; weather could compound",
    "Senior voters in Amritsar urban: fog affects morning travel in narrow bylanes",
    "Rural Majha (Shahkot, Ajnala, etc.): transport dependency is high among Dalit voters",
  ],
  recommendedContingency: [
    "If dense fog: prioritize 9:00 AM+ voter transport; avoid 7:00-8:00 AM travel",
    "If frost/black ice: contact local leaders for road condition reports by 6:00 AM on polling day",
    "Pre-identify Amritsar urban voters who can be reached by cycle/auto in narrow lanes where cars cannot navigate",
  ],
};

export const doabaWeatherProfile = {
  seats: 23,
  weatherProfile: "Moderate temperature (6-20°C), highest rainfall of three regions (35-50mm)",
  floodVulnerability: "Historically in Hoshiarpur, parts of Kapurthala",
  fog: "Moderate (6-10 days in February)",
  specificVulnerabilities: [
    "Hoshiarpur district: most vulnerable to waterlogging from unseasonal rain; 2012 and 2017 had some booth changes due to flooding",
    "Beas river flooding: if winter rain is heavy upstream, river water levels rise",
    "Kapurthala: low-lying areas near canals flood quickly",
    "Nawanshahr: relatively better drainage but rural approach roads still vulnerable",
  ],
  congressPriority: [
    "Flood-prone area voters: pre-identify alternative polling stations or booth changes",
    "Women voters: flood/waterlogging disproportionately affects women walking to booths",
    "SC voters in low-lying areas: ensure transport pickup points are on elevated ground",
  ],
  recommendedContingency: [
    "Pre-contact SDM/DRO by February 1, 2027 to understand flood-prone booth alternatives",
    "If heavy rain forecast: arrange rubber boots/waders for booth-level workers",
    "Identify elevated pickup points (temple grounds, school upper floors, community halls) for cluster voting if primary booth is flooded",
  ],
};

// ==========================================
// DISASTER PREPAREDNESS
// ==========================================

export const extremeWeatherScenarios = [
  {
    scenario: "Western Disturbance with Heavy Rain/Hail",
    probability: "10-15%",
    impact: "Widespread waterlogging, possible flash floods, road closures",
    ecAction: "Possible postponement in extreme cases",
    congressAction: "Maintain 72-hour advance warning monitoring; have emergency transport protocol ready",
  },
  {
    scenario: "Dense Fog Persistent All Day",
    probability: "15-20%",
    impact: "Turnout reduction 4-8% in affected areas",
    ecAction: "Possible hour extension",
    congressAction: "Focus on 10:00 AM-6:00 PM voter mobilization; petition for extension",
  },
  {
    scenario: "Snowfall in Upper Punjab",
    probability: "<5%",
    impact: "Majha (especially Pathankot, Gurdaspur) severely affected; roads impassable",
    ecAction: "Possible booth changes or postponement in affected areas",
    congressAction: "Pre-identify snow-prone routes; have district control room coordinate with local leaders",
  },
  {
    scenario: "Power Outage Combined with Communication Failure",
    probability: "5-10%",
    impact: "EVM backup depleted by evening; counting delayed; coordination breakdown",
    ecAction: "Standard protocol with generator backup at strong rooms",
    congressAction: "Ensure booth agents have physical copy of results (Form 17C); do not rely solely on digital transmission",
  },
];

export const congressContingencyInventory = [
  { item: "Umbrellas (large, Congress-branded)", quantity: "50 per Assembly Segment", purpose: "Voter queue protection" },
  { item: "Rain ponchos", quantity: "100 per Assembly Segment", purpose: "Booth-level workers, voters without umbrellas" },
  { item: "Torch/flashlight", quantity: "10 per Assembly Segment", purpose: "Morning fog, power outage" },
  { item: "Waterproof bags", quantity: "20 per Assembly Segment", purpose: "Protecting mobile phones, voter slips" },
  { item: "Spare batteries (D, AA)", quantity: "50 each per Assembly Segment", purpose: "Torch operation" },
  { item: "Warm blankets", quantity: "10 per Assembly Segment", purpose: "Emergency for stranded voters at booths" },
  { item: "Plastic sheeting", quantity: "5 rolls per Assembly Segment", purpose: "Temporary shelter at rural booths" },
  { item: "Rubber boots (size 6-10)", quantity: "10 pairs per Assembly Segment", purpose: "Booth workers in waterlogged areas" },
  { item: "Mobile power banks", quantity: "20 (10,000 mAh) per Assembly Segment", purpose: "Communication backup" },
  { item: "Spare BSNL SIM", quantity: "5 per Assembly Segment", purpose: "Backup communication if private networks fail" },
  { item: "District control room contact list", quantity: "1 per booth", purpose: "Emergency coordination" },
];

// ==========================================
// KEY RECOMMENDATIONS SUMMARY
// ==========================================

export const immediateActions = [
  "Booth-level transport survey: Identify voters without personal transport at every booth; flag senior voters and disabled voters",
  "Pre-arrange vehicle contracts: Sign agreements with tempo/auto drivers for February election day; pay advance reservation fee",
  "Weather monitoring setup: Subscribe to India Meteorological Department district-level forecasts for February 1-15, 2027; assign volunteer for daily monitoring from January 25",
  "District control rooms: Establish Congress control room numbers for each district; test connectivity by January 31",
];

export const twoWeeksBeforePolling = [
  "Weather-contingent GOTV calendar: Pre-schedule WhatsApp messages for clear, fog, rain scenarios; trigger appropriate sequence based on forecast",
  "Physical inventory: Confirm delivery of contingency supplies to district headquarters",
  "Fog guide identification: Identify one responsible person per rural booth available for 7:00-10:00 AM fog duty",
];

export const pollingDayActions = [
  "Morning assessment (6:00 AM): Local leader reports road conditions and weather to district control room",
  "Transport dispatch (8:00 AM): Begin organized voter transport; adjust departure time based on fog",
  "Hour extension petition: File by 12:00 noon if weather adverse; follow up by 2:00 PM",
  "Real-time turnout monitoring: Booth agents report voting pace every 2 hours to zonal coordinator",
  "Final GOTV push: 3:00-5:00 PM push for undecided or lazy voters; 5:00-6:00 PM emphasis on 'last hour' urgency",
];

export const postPollActions = [
  "Disruption documentation: Record all weather-related turnout impacts by booth for post-election analysis",
  "Booth-level analysis: Correlate turnout variance with weather severity to refine future targeting",
];
