// @ts-nocheck
// GIS Constituency Mapping Framework Data
// Source: direct-documentation/cat-1-demography/g30-gis-constituency-mapping-framework.md

import type { GISMappingFramework } from '../types/gis-mapping-types';

export const GIS_MAPPING_DATA: GISMappingFramework = {
  strategicPurpose: {
    congress2022Result: '18 seats, 23.0% vote share',
    aap2022Result: '92 seats, 42.4% vote share',
    congress2027Target: '55-65 seats, 35-38% vote share',
    swingRequired: '+12-15 percentage points',
  },
  requiredLayers: [
    { layer: 'Assembly Constituency boundaries', source: 'Election Commission of India (ECI) Delimitation 2008', resolution: 'Constituency-level polygon', priority: 'Critical', updateFrequency: 'Static (re-delimitation rare)' },
    { layer: 'District boundaries', source: 'Punjab Remote Sensing Centre (PRSC)', resolution: 'Polygon', priority: 'High', updateFrequency: 'Static' },
    { layer: 'Tehsil / Sub-Tehsil boundaries', source: 'Punjab Revenue Department', resolution: 'Polygon', priority: 'High', updateFrequency: 'Static' },
    { layer: 'Village boundaries', source: 'Revenue Department (jamabandi)', resolution: 'Point + Polygon', priority: 'Critical', updateFrequency: 'Annual' },
    { layer: 'Booth / Polling Station Locations', source: 'ECI Punjab electoral rolls', resolution: 'Point (lat/long)', priority: 'Critical', updateFrequency: 'Election cycle' },
    { layer: 'Caste Composition Data', source: 'ECI Electoral Rolls + Census 2011', resolution: 'Village / Booth', priority: 'Critical', updateFrequency: 'Static (no caste census since 1931)' },
    { layer: 'Road Network', source: 'OpenStreetMap (OSM)', resolution: 'Vector', priority: 'Critical', updateFrequency: 'Annual' },
    { layer: 'Key Location Markers (Gurdwaras, Temples, Deras)', source: 'SGPC + Field survey', resolution: 'Point', priority: 'Critical', updateFrequency: 'Static' },
    { layer: 'Police Station Jurisdictions', source: 'Punjab Police (RTI)', resolution: 'Polygon', priority: 'High', updateFrequency: 'Static' },
    { layer: 'Voter Turnout Data (2022, 2017, 2012)', source: 'ECI Results Data', resolution: 'Booth-level', priority: 'Critical', updateFrequency: 'Election cycle' },
  ],
  boothLocationAttributes: ['Booth number', 'Booth name', 'Latitude/Longitude', 'Total electors', 'Male/Female/Third gender electors', 'Urban/Rural classification', 'Assembly constituency code', 'Part number'],
  casteCompositionAttributes: ['SC population % (village/booth via ECI roll demographic proxy)', 'Jat Sikh % (district-level estimate only)', 'OBC % (district-level)', 'Muslim population % (town-level)', 'Mazhabi Sikh sub-caste (village-level)'],
  demographicDataAttributes: ['Rural/Urban/Peri-urban classification', 'Total population', 'Population density', 'Sex ratio', 'Literacy rate', 'Worker type (agricultural/industrial/services)', 'Migration rate (out-migration for employment)', 'BPL families count'],
  roadNetworkAttributes: ['National Highway segments', 'State Highway segments', 'Major District Roads (MDR)', 'Railway network', 'Distance from booth to nearest major road', 'Flood-prone road segments (seasonal)', 'Bridge locations on major routes'],
  keyLocationMarkers: ['Gurdwaras (all SGPC-managed and major Takhts)', 'Major Hindu temples', 'Dera Headquarters (Dera Sachkhand Ballan, Dera Sacha Sauda)', 'Dera follower villages', 'Weekly markets (haats)', 'Major industries/factories', 'Universities and colleges', 'Army/BSF cantonments', 'Border crossing points'],
  policeStationJurisdictions: ['Police station boundary', 'Police station location (lat/long)', 'Law & order incident density per station', 'Drug seizure data by police station'],
  voterDensityAttributes: ['Voter turnout % by booth (2022, 2017, 2012)', 'Margin of victory by booth (2022)', 'Congress vote % by booth (2022)', 'Booth-level trend (2012 → 2017 → 2022)'],
  spatialAnalysis: {
    boothClustering: [
      { type: 'Safe Congress', definition: 'Congress >50% in 2022, margin >10%', campaignAction: 'Protect, maximize turnout', minimumBooths: 50 },
      { type: 'Winnable', definition: 'Congress 35-50%, margin within 10%', campaignAction: 'Intensive focus, door-to-door', minimumBooths: 50 },
      { type: 'Hostile', definition: 'Congress <35%, AAP strong (>50%)', campaignAction: 'Limited investment, message penetration', minimumBooths: 50 },
      { type: 'Low Turnout', definition: 'Turnout <70% in 2022', campaignAction: 'GOTV priority', minimumBooths: 50 },
      { type: 'Swing', definition: 'Margin <3% in 2022', campaignAction: 'Maximum resource deployment', minimumBooths: 50 },
    ],
    casteConcentrationMapping: 'Create interpolated surfaces (kernel density estimation) from booth-level SC% data. Overlay with Jat Sikh dominant areas. Punjab macro geography: Malwa (69 seats): Mixed—highest SC concentration, Jat Sikh dominant rural; Majha (27 seats): Jat Sikh majority, lower SC%; Doaba (23 seats): Highest Valmiki concentration along riverine belts.',
    commuterShiftWorkerAnalysis: 'Map industrial zones and major factories per constituency. Estimate shift worker population by booth proximity (2km buffer). Flag booths with >20% shift worker population as needing off-hours (evening 6-9pm, Sunday morning) campaigning. Cross-reference with Gulf emigration data.',
    marketDayAnalysis: 'Compile weekly market calendar by block. Map market locations with 5km buffer zones. Identify booths within market influence zones. Schedule public meetings and rallies to coincide with market days when footfall is 3-5x normal.',
    borderAreaAnalysis: '20km buffer from International Border. Classify by distance: 0-5km (highly restricted), 5-10km (limited), 10-20km (monitored). Border area voter turnout historically 5-8% lower. Special consideration for postal ballot requests and proxy voting.',
  },
  mappingProducts: [
    {
      name: 'Booth Strength Map',
      priority: 'Critical',
      description: 'Color-coded polygon map of booths within constituency shaded by Congress 2022 vote share',
      classificationScheme: [
        { color: 'Dark Green', range: '>60%', interpretation: 'Stronghold—protect and maximize' },
        { color: 'Green', range: '50-60%', interpretation: 'Safe—maintain' },
        { color: 'Yellow', range: '40-50%', interpretation: 'Contested—intensive focus' },
        { color: 'Orange', range: '30-40%', interpretation: 'Difficult—needs message shift' },
        { color: 'Red', range: '<30%', interpretation: 'Hostile—limited investment' },
      ],
      dataRequired: ['Booth-level ECI results 2022'],
      format: 'PDF atlas, A2 minimum, one per AC',
      use: 'Candidate and karyakarta orientation—immediate visual understanding of where to focus',
    },
    {
      name: 'Demographic Atlas',
      priority: 'Critical',
      description: 'Maps showing SC Population %, Rural/Urban classification, Women Voter %, Youth Index, BPL Families Density',
      dataRequired: ['Census 2011 data', 'ECI roll data'],
      format: 'PDF atlas, 10-15 pages per constituency, printed and spiral-bound',
      use: 'Precise demographic targeting—knowing SC% at booth level tells you exactly where to deploy SC-focused karyakarta',
    },
    {
      name: 'Issue Heat Map',
      priority: 'High',
      description: 'Composite Distress Index overlay on constituency map showing drug abuse, farmer debt, unemployment, water crisis, crime rate, road quality',
      dataRequired: ['Drug seizure data', 'SKM data', 'Groundwater department data', 'Crime Records Bureau data', 'PWD road data'],
      format: 'Heatmap (red = high distress) overlaid on booth locations',
      use: 'Where distress is highest AND Congress was at 35-45% in 2022 = maximum return on investment for issue-based campaigning',
    },
    {
      name: 'Campaign Routing Map',
      priority: 'High',
      description: 'Optimized daily visit routes for candidates within constituency',
      dataRequired: ['Target booths (from cluster analysis)', 'Road network layer (OSM)'],
      format: 'Numbered route with estimated drive time between stops',
      use: 'Candidate has 6 hours on Sunday. Map shows optimal route visiting 15 priority booths in 3 clusters.',
    },
    {
      name: 'GOTV Map',
      priority: 'Critical',
      description: 'Where turnout was below 75% in 2022 AND where Congress had significant support (30%+)',
      dataRequired: ['Turnout data 2022', 'Congress vote share 2022', 'Gulf voter concentration', 'Shift worker zones', 'Border area booths'],
      format: 'Priority ranking with combined score',
      use: 'Gulf diaspora: NRI coordination, WhatsApp groups, postal ballot. Shift workers: Sunday morning visits. Border areas: Coordinate with BSF.',
    },
    {
      name: 'Dera Influence Map',
      priority: 'High',
      description: 'Dera headquarters as point markers with 10km, 25km, 50km influence radius polygons',
      dataRequired: ['Dera locations', 'Follower village intelligence', 'Party endorsement history'],
      format: 'Multi-radius buffer map with voter estimates within each radius',
      use: 'Where Dera influence overlaps with contested booths, party must engage Dera leadership directly before campaigning',
    },
    {
      name: 'Media Market Map',
      priority: 'Medium',
      description: 'Cable TV coverage, FM Radio reach, print circulation, WhatsApp/social media penetration, local cable network',
      dataRequired: ['Cable/DTH coverage data', 'FM station coverage maps', 'Newspaper circulation data', 'Smartphone density estimates'],
      format: 'Coverage polygon overlays',
      use: 'Punjab has near-universal cable TV and high WhatsApp usage. Digital/social media can reach 90%+ voters. Exception: Some border and rural interior areas have limited smartphone access among SC voters aged 45+.',
    },
  ],
  tools: [
    { tool: 'QGIS', cost: 'Free, open source', bestFor: 'Professional map creation, spatial analysis, all mapping products', learningCurve: 'Medium—requires 1-2 weeks practice' },
    { tool: 'Google Earth Pro', cost: 'Free (discontinued but still functional)', bestFor: 'Basic mapping, visualizing booth locations, KML/KMZ export', learningCurve: 'Low—familiar UI' },
    { tool: 'Google My Maps', cost: 'Free', bestFor: 'Simple booth-level maps for field teams, shareable via link', learningCurve: 'Very low' },
    { tool: 'KoboToolbox / ODK Collect', cost: 'Free server + ~$50/mo hosting', bestFor: 'Field data collection (booth surveys, voter contact)', learningCurve: 'Low' },
    { tool: 'Mapbox', cost: 'Free tier + $500+/mo for enterprise', bestFor: 'Web maps, embeddable campaign site', learningCurve: 'Medium' },
    { tool: 'Camelot (Python)', cost: 'Free', bestFor: 'PDF table extraction (for ECI data)', learningCurve: 'Medium' },
  ],
  implementationRoadmap: [
    {
      phase: 'Phase 1: Foundation (Weeks 1-4)',
      goal: 'Have a working booth strength map for each of the 117 constituencies',
      tasks: [
        'Extract ECI booth-level results 2022, 2017, 2012',
        'Geocode all booths (use ECI data + Google Earth Pro verification)',
        'Download Punjab OSM data (roads, boundaries)',
        'Load all data into QGIS',
        'Produce first-draft Booth Strength Maps',
      ],
      deliverable: 'Constituency-level Booth Strength Atlas (draft)',
      staff: '2 GIS-trained volunteers per district (12 total for 12 districts)',
      duration: '4 weeks',
    },
    {
      phase: 'Phase 2: Demographic Layering (Weeks 5-10)',
      goal: 'Full demographic atlas per constituency',
      tasks: [
        'Compile SC% data at booth level (ECI roll proxy + Census village data)',
        'Map urban/rural booth distribution',
        'Compile Dera influence data (field intelligence)',
        'Build caste concentration interpolation maps',
        'Create composite demographic index per booth',
      ],
      deliverable: 'Demographic Atlas (print-ready PDF per constituency)',
      staff: 'District-level GIS coordinators + state-level synthesis',
      duration: '6 weeks',
    },
    {
      phase: 'Phase 3: Issue Integration (Weeks 8-14)',
      goal: 'Issue Heat Maps integrated with booth data',
      tasks: [
        'Collect drug abuse data (Excise + Police)',
        'Collect farmer debt indicators (SKM data)',
        'Collect water table depth data (SGADA)',
        'Collect crime statistics (Crime Records Bureau)',
        'Build composite distress index and overlay with Booth Strength Map',
      ],
      deliverable: 'Issue-Mapped Constituency Plans (one per AC)',
      staff: 'Data collection volunteers + GIS team',
      duration: '7 weeks',
    },
    {
      phase: 'Phase 4: Operational Products (Weeks 12-20)',
      goal: 'Ready-to-use maps for field campaigning',
      tasks: [
        'Campaign routing optimization for each AC',
        'GOTV priority ranking (combined score)',
        'Media market map per constituency',
        'Print production of all map products',
        'Digital versions for WhatsApp distribution to karyakarta',
      ],
      deliverable: 'Campaign Map Kit per constituency (printed + digital)',
      staff: 'Full GIS team + design volunteer',
      duration: '9 weeks',
    },
    {
      phase: 'Phase 5: Continuous Update (Weeks 20-Election)',
      goal: 'Maps reflect real-time developments',
      tasks: [
        'Update with any by-election data',
        'Add voter contact data from field (Kobotoolbox integration)',
        'Mark candidate announcement impacts',
        'Update based on development announcements by government',
        'Revise GOTV priorities as election approaches',
      ],
      deliverable: 'Weekly updated constituency maps (digital only)',
      staff: 'GIS team',
      duration: 'Ongoing until election',
    },
  ],
  budget: [
    {
      category: 'Software',
      items: [
        { item: 'QGIS', estimatedCostINR: 0, notes: 'Free/Open Source - Primary mapping tool' },
        { item: 'Google Earth Pro', estimatedCostINR: 0, notes: 'Free (discontinued but functional)' },
        { item: 'Google Workspace', estimatedCostINR: 0, notes: 'Free tier for cloud storage' },
        { item: 'KoboToolbox', estimatedCostINR: 54000, notes: '~$500/month for server' },
        { item: 'Camelot (Python)', estimatedCostINR: 0, notes: 'Free for PDF extraction' },
      ],
    },
    {
      category: 'Data Collection',
      items: [
        { item: 'ECI data digital extraction', estimatedCostINR: 0, notes: 'Already available (public)' },
        { item: 'OSM data download', estimatedCostINR: 0, notes: 'Free' },
        { item: 'Census 2011 data', estimatedCostINR: 0, notes: 'Public domain' },
        { item: 'Police jurisdiction RTI filing', estimatedCostINR: 5000, notes: '50 RTIs × Rs.100 each' },
        { item: 'Field survey for Deras (travel)', estimatedCostINR: 50000, notes: '12 districts × 2 visits × Rs.2,000' },
        { item: 'Market calendar survey (travel)', estimatedCostINR: 30000, notes: '12 districts × 1 visit × Rs.2,500' },
        { item: 'Booth geocoding field verification', estimatedCostINR: 100000, notes: '5,000 booths × 2 people × 1 day × Rs.1,000/day + travel' },
      ],
    },
    {
      category: 'Hardware',
      items: [
        { item: 'Laptop for GIS team (1-2)', estimatedCostINR: 100000, notes: 'Dell/Lenovo mid-range' },
        { item: 'GPS-enabled smartphones for field (5)', estimatedCostINR: 75000, notes: 'For accurate booth location verification' },
        { item: 'External hard drive (2TB) for backup', estimatedCostINR: 5000, notes: 'Map data backup' },
        { item: 'Printing (constituency atlases, 117 × 5 copies)', estimatedCostINR: 200000, notes: 'A3 color printing, spiral binding' },
      ],
    },
    {
      category: 'Personnel',
      items: [
        { item: 'GIS Coordinator', estimatedCostINR: 360000, notes: '1 person × 6 months × Rs.2,000/day' },
        { item: 'Data Entry Operators', estimatedCostINR: 144000, notes: '2 persons × 3 months × Rs.800/day' },
        { item: 'Field Survey Volunteers', estimatedCostINR: 0, notes: '10 volunteers × 2 months (volunteer)' },
        { item: 'District GIS Representatives', estimatedCostINR: 0, notes: '12 persons × 4 months (volunteer)' },
      ],
    },
    {
      category: 'Contingency',
      items: [
        { item: 'Printing re-runs (updates)', estimatedCostINR: 50000 },
        { item: 'Communication (mobile data for field)', estimatedCostINR: 20000 },
        { item: 'Transport for training sessions', estimatedCostINR: 30000 },
        { item: 'Map mounting / display boards', estimatedCostINR: 20000 },
        { item: 'Unforeseen (10% of above)', estimatedCostINR: 71900 },
      ],
    },
  ],
  successMetrics: [
    { metric: 'Booth geocoding completion', target: '100% of 23,000 booths', measurement: 'Google Earth Pro verification' },
    { metric: 'Booth Strength Maps produced', target: '117/117 constituencies', measurement: 'PDF atlas in hand' },
    { metric: 'Demographic Atlas completed', target: '117/117 constituencies', measurement: 'Printed atlas distributed' },
    { metric: 'District coordinators trained', target: '12/12 districts', measurement: 'Training attendance record' },
    { metric: 'GIS team operational capability', target: '5 trained GIS operators', measurement: 'Independent map production test' },
    { metric: 'Field data collection active', target: '50+ booths/week via Kobotoolbox', measurement: 'Server dashboard' },
    { metric: 'Map-based campaign routing', target: 'Operational in 30 priority constituencies', measurement: 'Candidate feedback' },
    { metric: 'GOTV priority ranking', target: 'Available by Week 20', measurement: 'Constituency plans updated' },
  ],
};

// Helper functions
export function getBudgetTotal(): number {
  return GIS_MAPPING_DATA.budget.reduce((total, category) => {
    return total + category.items.reduce((sum, item) => sum + item.estimatedCostINR, 0);
  }, 0);
}

export function getPerConstituencyCost(): number {
  const total = getBudgetTotal();
  return Math.round(total / 117);
}

export function getBoothClusterByType(type: string) {
  return GIS_MAPPING_DATA.spatialAnalysis.boothClustering.find(
    c => c.type.toLowerCase() === type.toLowerCase()
  );
}

export function getMappingProductByPriority(priority: 'Critical' | 'High' | 'Medium') {
  return GIS_MAPPING_DATA.mappingProducts.filter(p => p.priority === priority);
}

export function getPhaseByName(name: string) {
  return GIS_MAPPING_DATA.implementationRoadmap.find(
    p => p.phase.toLowerCase().includes(name.toLowerCase())
  );
}
