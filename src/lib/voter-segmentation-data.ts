// @ts-nocheck
// Voter Segmentation and Behavioral Demography Data
// Source: direct-documentation/cat-1-demography/b5-voter-segmentation-behavioral-demography.md

import type { VoterSegmentationData } from '../types/voter-segmentation-types';

export const VOTER_SEGMENTATION_DATA: VoterSegmentationData = {
  demographicSegmentation: {
    ageCohorts: [
      { cohort: '18-25', sizePercentage: '~12-14%', politicalBehavior: 'Lowinfo, high social media exposure, candidate-forward, anti-incumbent drift observed in 2022', strategyNotes: 'Digital outreach, employment messaging, new voter registration drives' },
      { cohort: '26-35', sizePercentage: '~22-25%', politicalBehavior: 'Economic anxiety (jobs, housing, agriculture), dual-influence households, issue-responsive', strategyNotes: 'Employment and agricultural policy messaging, welfare scheme branding' },
      { cohort: '36-50', sizePercentage: '~28-30%', politicalBehavior: 'Established party loyalties, family tradition, incumbency evaluation, breadwinner concerns', strategyNotes: 'Development narrative, local MP/MLA performance framing' },
      { cohort: '51-65', sizePercentage: '~20-22%', politicalBehavior: 'Strong partisan identity, resistance to change, social network influence, conservative', strategyNotes: 'Traditional mobilization, community leaders, stability messaging' },
      { cohort: '65+', sizePercentage: '~10-12%', politicalBehavior: 'High turnout, deference to family elders, memory of old patterns, welfare dependency', strategyNotes: 'Senior citizen schemes, family-based outreach' },
    ],
    genderSegments: [
      { segment: 'Urban Male', turnoutPattern: 'High (~72%)', votingBehavior: 'Issue-aware, media-consuming, ticket-splitting possible', mobilizationNotes: 'Traditional outreach + digital' },
      { segment: 'Urban Female', turnoutPattern: 'Medium (~68%)', votingBehavior: 'Family-centric issues, candidate reputation matters, welfare-linked', mobilizationNotes: 'Women-focused schemes, self-help group networks' },
      { segment: 'Rural Male', turnoutPattern: 'High (~75%)', votingBehavior: 'Community-network influenced, party loyalty stronger, agrarian issues', mobilizationNotes: 'Male heads of household strategy, cooperative networks' },
      { segment: 'Rural Female', turnoutPattern: 'Rising (~70%, increasing)', votingBehavior: 'Male household influence, but growing autonomous decision-making', mobilizationNotes: 'Mahila Congress outreach, scheme benefits in woman name' },
    ],
    casteSegments: [
      { segment: 'Jat Sikh', populationPercentage: '~18-20%', partyLeaning: 'Split: Congress/AAP/SAD', keyDynamics: 'Land-owning, agricultural identity, rural Malwa dominance' },
      { segment: 'Other Sikh', populationPercentage: '~4-5%', partyLeaning: 'Congress, BSP', keyDynamics: 'Service class, artisan occupations' },
      { segment: 'Mazhabi Sikh', populationPercentage: '~4-6%', partyLeaning: 'Congress strong, AAP growing', keyDynamics: 'Rural, agricultural labor, water/parking issues' },
      { segment: 'Valmiki', populationPercentage: '~3-4%', partyLeaning: 'BSP, Congress', keyDynamics: 'Urban, sanitation workers, SC welfare' },
      { segment: 'Ravadasia', populationPercentage: '~5-7%', partyLeaning: 'Congress, AAP', keyDynamics: 'Doaba region, industrial, shoe-making, cycling industry' },
      { segment: 'Ad-Dharmi', populationPercentage: '~2-3%', partyLeaning: 'BSP, Congress', keyDynamics: 'Rural, agricultural labor' },
      { segment: 'Bazigar', populationPercentage: '~1-2%', partyLeaning: 'BSP, Congress', keyDynamics: 'Nomadic origin, rural' },
      { segment: 'OBC Non-Jat', populationPercentage: '~8-10%', partyLeaning: 'Congress, AAP', keyDynamics: 'Agricultural tenants, rural services' },
      { segment: 'OBC Jat', populationPercentage: '~10-12%', partyLeaning: 'Split', keyDynamics: 'Malwa region, landowning' },
      { segment: 'Upper Caste Hindu', populationPercentage: '~10-12%', partyLeaning: 'BJP, Congress (selective)', keyDynamics: 'Urban, business, professional class' },
    ],
    religiousSegments: [
      { religion: 'Sikh', populationPercentage: '~60%', partyLeaning: 'Congress (trad.), AAP (2022 surge), SAD (Malwa)', keyIssues: ['Drug abuse', 'Agricultural distress', 'Dera influence'] },
      { religion: 'Hindu Upper Caste', populationPercentage: '~10-12%', partyLeaning: 'BJP (upper), Congress (some)', keyIssues: ['Urban development', 'Business environment'] },
      { religion: 'Hindu OBC', populationPercentage: '~8-10%', partyLeaning: 'Congress, AAP', keyIssues: ['Agrarian', 'Welfare'] },
      { religion: 'Hindu SC', populationPercentage: '~8-10%', partyLeaning: 'BSP, Congress', keyIssues: ['SC welfare', 'Reservation'] },
      { religion: 'Muslim', populationPercentage: '~2%', partyLeaning: 'Congress (limited presence)', keyIssues: ['Limited electoral significance'] },
      { religion: 'Christian', populationPercentage: '~1.3%', partyLeaning: 'Congress', keyIssues: ['Limited direct impact'] },
    ],
    geographicSegments: [
      { region: 'Malwa', seats: 69, keyDemographics: ['Jat Sikh majority', 'Large SC population (Valmiki, Mazhabi)', 'OBC'], electoralCharacter: 'Highest significance, competitive triangular contests, Congress-SAD-AAP' },
      { region: 'Majha', seats: 27, keyDemographics: ['Border area', 'Mixture', 'More BJP presence'], electoralCharacter: 'Pakistani partition回忆, border security, less volatile' },
      { region: 'Doaba', seats: 23, keyDemographics: ['Highest SC concentration (Ravadasia, Mazhabi)', 'Industrial', 'Highest AAP performance 2022'], electoralCharacter: 'Youth turnout, transnational ties' },
    ],
  },
  psychographicSegmentation: {
    valueOrientations: [
      { orientation: 'Traditional-Familial', estimatedPercentage: '~40-45%', partyLeanings: 'Congress (old), SAD', mobilizationApproach: 'Family elder engagement, religious framing' },
      { orientation: 'Modern-Aspirational', estimatedPercentage: '~30-35%', partyLeanings: 'AAP, Congress (new voters)', mobilizationApproach: 'Achievement narrative, youth appeal' },
      { orientation: 'Secular-Rationalist', estimatedPercentage: '~15-20%', partyLeanings: 'Congress, Left-liberal', mobilizationApproach: 'Social justice framing, reform narrative' },
    ],
    riskTolerance: [
      { profile: 'Risk-Averse', behavior: 'Incumbent preference, stability preference, change-resistant', strategy: 'Reinforce existing, minimal change narrative' },
      { profile: 'Risk-Neutral', behavior: 'Issue-responsive, candidate quality matters', strategy: 'Balanced platform, track record emphasis' },
      { profile: 'Risk-Seeking', behavior: 'Open to new parties, anti-incumbent, change-seeking', strategy: 'Bold new narrative, contrast with incumbents' },
    ],
    authorityOrientation: [
      { orientation: 'Deference-Oriented', behavior: 'Trust in established institutions, respect for hierarchy', appeal: 'Traditional authority, party symbols' },
      { orientation: 'Skeptical-Oriented', behavior: 'Distrust of institutions, anti-elite sentiment', appeal: 'System vs. people framing' },
      { orientation: 'Engaged-Critical', behavior: 'Informed scrutiny, issue-based evaluation', appeal: 'Detailed policy, accountability' },
    ],
  },
  behavioralSegmentation: {
    partyIdentificationStrength: [
      { strength: 'Strong Party ID', turnout: 'Very High (~90%+)', swing: 'Low—vote locked' },
      { strength: 'Weak Party ID', turnout: 'Medium (~75-80%)', swing: 'Medium—persuadable' },
      { strength: 'Independent/No ID', turnout: 'Variable (~60-70%)', swing: 'High—decisive segment' },
    ],
    turnoutBehavior: [
      { type: 'Engaged Voter', characteristics: 'Politically interested, follows news, discusses politics, votes consistently', punjabProfile: '~25-30% of electorate; higher among urban, educated, 36-50 age group', turnoutRate: '>90%', mobilizationStrategy: 'Unnecessary—self-motivated; challenge is persuasion', influenceStrategy: 'Policy detail, debate engagement' },
      { type: 'Clientelistic Voter', characteristics: 'Benefit-driven, transactional relationship with politicians, expects tangible returns', punjabProfile: '~30-35%; concentrated in rural areas, SC communities, dera-affiliated', turnoutRate: 'High when benefits flow (~80%+), lower when disengaged (~60%)', mobilizationStrategy: 'Requires delivery of specific visible benefits, patron-client networks', influenceStrategy: '"Vote for candidate X because sarpanch/pahalwan/dere walla arranged our scheme"' },
      { type: 'Habitual Voter', characteristics: 'Family tradition, party lineage across generations, minimal issue consideration', punjabProfile: '~20-25%; strongest in rural Malwa Jat Sikh, Mazhabi Sikh, upper caste Hindu', turnoutRate: 'High (~85%) and consistent', mobilizationStrategy: 'Family-based outreach, religious/community events, legacy framing', influenceStrategy: 'Anti-incumbent waves can override habit (2022 demonstrated)' },
      { type: 'Protest Voter', characteristics: 'Votes AGAINST a party/candidate rather than FOR an alternative; expression of anger', punjabProfile: '~15-20%; grew significantly in 2022; urban, educated, young', turnoutRate: 'Variable; high when anger peaks', mobilizationStrategy: 'Bold new narrative, contrast with incumbents', influenceStrategy: 'Risk: protest vote may fragment if AAP frames as anti-BJP vehicle' },
      { type: 'Apathetic Voter', characteristics: 'Disconnected from politics, views voting as futile', punjabProfile: '~10-15%; highest among 18-25 first-time voters, migrant laborers, urban poor', turnoutRate: 'Low (~50-60%)', mobilizationStrategy: 'Extremely difficult; requires personal invitation, family pressure, visible candidate credibility', influenceStrategy: '"Kya farak padta hai, sab chor hain"' },
      { type: 'Coerced Voter', characteristics: 'Vote under pressure from family, employer, community leader, money-lender', punjabProfile: '~5-10%; exists in rural areas with strong patron networks, dera affiliations', turnoutRate: 'High when coercion is strong', mobilizationStrategy: 'Dera leader endorsements can deliver followers', influenceStrategy: 'Deredar rahe hain, vote deni padegi' },
    ],
    choiceBehavior: [
      { type: 'Partisan Loyalist', behaviorDescription: 'Always votes for party regardless of candidate quality, local issues', sizeInPunjab: '~40-45% (combined Congress + AAP + SAD core supporters)', stability: 'Very high in short term; vulnerable to generational change', strategicImplication: 'Must identify and protect these bases; minimum contact required' },
      { type: 'Ticket-Splitting Voter', behaviorDescription: 'Votes for different parties in different elections (e.g., Modi for PM, AAP for Assembly)', sizeInPunjab: 'Significant (~20-25%); responsible for 2022 AAP wave', stability: 'Variable depending on national factors', strategicImplication: 'Congress must either contest this split or offer credible state-level narrative' },
      { type: 'Swing Voter', behaviorDescription: 'Genuinely undecided between two or more options; votes based on last-minute factors', sizeInPunjab: '~10-15% (these are decisive voters in ~40 marginal seats)', stability: 'High variability', strategicImplication: 'These voters determine outcomes in 35-45 competitive seats; require high-contact, personalized persuasion' },
      { type: 'Single-Issue Voter', behaviorDescription: 'One issue dominates all others; will vote based solely on that issue', sizeInPunjab: '~15-20% identify as single issue on drugs; drug abuse crosses caste/region lines', stability: 'Issue-dependent', strategicImplication: 'Must have credible specific policy on dominant issue; generalities insufficient' },
      { type: 'Candidate-Centric Voter', behaviorDescription: 'Votes for person not party; local strongmen, popular individuals', sizeInPunjab: '~15-20%; increasing as party identification declines', stability: 'Candidate-dependent', strategicImplication: 'Candidate selection critical; popular local candidates can override party label' },
    ],
    informationBehavior: [
      { type: 'News Seeker', profile: '~20-25%; educated, urban, 30-55 age, higher income', sources: ['TV news (Aaj Tak, India TV, NDTV)', 'Newspapers (Tribune, Hindu)', 'Web portals'], influenceCredibility: 'High credibility once reached; fact-checking important', reachStrategy: 'Media campaigns, detailed policy content' },
      { type: 'Social Media Native', profile: '~25-30%; skews 18-35, urban, educated', sources: ['Facebook (still largest in Punjab)', 'WhatsApp (universal)', 'Instagram', 'YouTube', 'X/Twitter'], influenceCredibility: 'Viral content can shift rapidly; misinformation risk high', reachStrategy: 'Social media campaigns, influencer partnerships' },
      { type: 'Interpersonal Network Voter', profile: '~35-40%; rural, older, lower education, community-oriented', sources: ['Family elder', 'Panchayat', 'Dera leader', 'Neighbor/peer'], influenceCredibility: 'Personal trust > institutional trust', reachStrategy: 'Community events, religious gatherings, WhatsApp voice notes' },
      { type: 'Media Avoider', profile: '~10-15%; migrant laborers, extremely poor, some elderly', sources: ['Actively avoids news/politics'], influenceCredibility: 'Not reachable via media', reachStrategy: 'Personal contact, community events, welfare scheme enrollment' },
      { type: 'Selective Exposure Voter', profile: '~15-20%; aware but self-selecting information to confirm existing beliefs', sources: ['Partisan media only', 'Echo-chamber'], influenceCredibility: 'Persuasion extremely difficult; contact may reinforce', reachStrategy: 'Focus on low-awareness voters instead' },
    ],
    influencePatterns: [
      {
        type: 'Opinion Leadership',
        description: 'Individuals who disproportionately influence others in networks',
        punjabTypology: [
          { leader: 'Traditional Leaders', influence: 'Sarpanch, pensioners, retired officials, elderly respected figures' },
          { leader: 'Modern Leaders', influence: 'Teachers, doctors, NRIs with village ties, successful entrepreneurs' },
          { leader: 'Political Leaders', influence: 'Former MLAs/MPs, local booth-level workers, party karyakarta' },
          { leader: 'Religious Leaders', influence: 'Granthis, dera sadhvis/purohits, pujaris' },
        ],
        influenceRatio: '1:10-50 influence ratio',
      },
      {
        type: 'Household Influence',
        description: 'Decision-making dynamics within households',
        punjabTypology: [
          { leader: 'Male Head Decision', influence: 'Traditional rural, older cohorts; Congress and SAD voter' },
          { leader: 'Joint Decision', influence: 'Middle-class, urban; balanced between candidates' },
          { leader: 'Female-Independent', influence: 'Growing urban, younger, educated; AAP-leaning' },
          { leader: 'Youth Override', influence: 'When youth strongly pro-AAP, can shift household' },
        ],
        influenceRatio: 'Family as unit, not just individual',
      },
      {
        type: 'Community Influence',
        description: 'Biradari and panchayat structures in rural areas',
        punjabTypology: [
          { leader: 'Biradari', influence: 'Caste-family network; older men hold decision power' },
          { leader: 'Panchayat', influence: 'Formal local government; women-headed (50% reservation) in practice male-dominated' },
          { leader: 'Mahila Mandal', influence: 'Women networks; increasingly important for welfare scheme awareness' },
        ],
        influenceRatio: 'Community meetings, wedding/funeral gatherings',
      },
      {
        type: 'Religious Influence',
        description: 'Gurudwara and Dera-based mobilization',
        punjabTypology: [
          { leader: 'SGPC-linked', influence: 'Traditionally Congress-aligned but complex' },
          { leader: 'Dera Sacha Sauda', influence: 'Has fielded candidates, significant following in Malwa' },
          { leader: 'Dera Sachkhand Ballan', influence: 'Neutral-public but followers 20+ lakhs across Malwa/Doaba' },
          { leader: 'Radha Soami Beas', influence: 'Urban professional class; less politically mobilized' },
          { leader: 'Nirankari', influence: 'Traditionally Congress-leaning Sikh reform movement' },
        ],
        influenceRatio: 'Dera leader endorsements can deliver 10,000-100,000+ voters per dera',
      },
      {
        type: 'Economic Influence',
        description: 'Economic networks affecting voting',
        punjabTypology: [
          { leader: 'Employer-Employee', influence: 'In industrial areas (Ludhiana, Jalandhar, Mohali)' },
          { leader: 'Money-Lender/Bank', influence: 'Agricultural credit networks; arhtias in mandis' },
          { leader: 'Contractor Network', influence: 'Construction, brick kiln, migrant labor chains' },
          { leader: 'NRI Remittance', influence: 'Gulf employers affect some families' },
        ],
        influenceRatio: 'Economic dependence affects political loyalty',
      },
    ],
  },
  issueSalience: [
    { rank: 1, issue: 'Drug Abuse', saliencePercentage: '~62%', regionalVariation: 'Malwa > Majha > Doaba', partyBenefit: 'AAP (claimed), Congress (claimed)' },
    { rank: 2, issue: 'Corruption', saliencePercentage: '~55%', regionalVariation: 'Urban > Rural', partyBenefit: 'AAP (strong)' },
    { rank: 3, issue: 'Unemployment', saliencePercentage: '~50%', regionalVariation: 'Doaba > Malwa', partyBenefit: 'AAP, Congress' },
    { rank: 4, issue: 'Agriculture', saliencePercentage: '~45%', regionalVariation: 'Malwa > Doaba', partyBenefit: 'Congress (farmer union link)' },
    { rank: 5, issue: 'Law & Order', saliencePercentage: '~35%', regionalVariation: 'Urban > Rural', partyBenefit: 'Mixed' },
    { rank: 6, issue: 'Water Crisis', saliencePercentage: '~30%', regionalVariation: 'Malwa (central)', partyBenefit: 'Congress' },
  ],
  voteBankTheory: {
    casteVoteBanks: [
      { community: 'Mazhabi Sikh', estimatedSize: '15-20 Lakhs', geographicConcentration: 'Rural Malwa, Doaba', voteBankStability: 'High (traditional)', partyLeaning: 'Congress maintained but AAP gained', keyVariable: 'Dera influence, local development' },
      { community: 'Ravadasia', estimatedSize: '18-22 Lakhs', geographicConcentration: 'Doaba, Urban', voteBankStability: 'High (identity)', partyLeaning: 'AAP gained significantly', keyVariable: 'Identity politics, Dera Ballan connection' },
      { community: 'Jat Sikh', estimatedSize: '55-65 Lakhs', geographicConcentration: 'Malwa rural, Majha', voteBankStability: 'Medium (economically mobile)', partyLeaning: 'AAP surge, swing to SAD-BJP', keyVariable: 'Agricultural policy, drug abuse response' },
      { community: 'Valmiki', estimatedSize: '8-12 Lakhs', geographicConcentration: 'Urban, Malwa', voteBankStability: 'High (SC network)', partyLeaning: 'BSP hold, some Congress', keyVariable: 'SC welfare schemes' },
      { community: 'OBC (non-Jat)', estimatedSize: '20-25 Lakhs', geographicConcentration: 'Rural Malwa, Doaba', voteBankStability: 'Medium', partyLeaning: 'Mixed, Congress traditional', keyVariable: 'Agricultural policies' },
    ],
    religiousVoteBanks: [
      { community: 'Sikh (traditional)', estimatedSize: '~58-60%', geographicConcentration: 'Throughout Punjab', voteBankStability: 'Increasing fluidity', partyLeaning: 'Congress historical, AAP 2022 surge', keyVariable: 'Dera affiliation, youth' },
      { community: 'Sikh (AAP-2022)', estimatedSize: '~5-8% swing', geographicConcentration: 'Urban and rural', voteBankStability: 'High', partyLeaning: 'AAP new', keyVariable: 'Anti-incumbency fade' },
      { community: 'Hindu (upper caste)', estimatedSize: '~10-12%', geographicConcentration: 'Urban', voteBankStability: 'Stable', partyLeaning: 'BJP', keyVariable: 'National factors' },
      { community: 'Hindu (OBC)', estimatedSize: '~8-10%', geographicConcentration: 'Mixed', voteBankStability: 'Medium', partyLeaning: 'Mixed', keyVariable: 'Local candidate' },
      { community: 'Hindu (SC)', estimatedSize: '~8-10%', geographicConcentration: 'Mixed', voteBankStability: 'Medium', partyLeaning: 'BSP, Congress', keyVariable: 'Welfare delivery' },
    ],
    clientelisticVoteBanks: [
      { program: 'MGNREGA', beneficiaries: '~20-25 lakh households', party: 'Congress traditional' },
      { program: 'PM Kisan', beneficiaries: '~17 lakh (Punjab)', party: 'All parties, check distribution' },
      { program: 'Old Age Pension', beneficiaries: '~8-10 lakh', party: 'All parties' },
      { program: 'SC Scholarship', beneficiaries: '~2-3 lakh families', party: 'BSP, Congress' },
      { program: 'Housing (PMAY)', beneficiaries: '~3-4 lakh', party: 'AAP (urban)' },
    ],
    classVoteBanks: [
      { class: 'Agricultural Elite', issues: 'MSP, procurement, electricity', parties: 'SAD, Congress, BJP' },
      { class: 'Progressive Farmers', issues: 'Technology, credit, markets', parties: 'AAP (2022)' },
      { class: 'Urban Middle Class', issues: 'Jobs, economy, development', parties: 'Mixed, AAP, Congress' },
      { class: 'Urban Poor', issues: 'Welfare, jobs, housing', parties: 'AAP, Congress' },
      { class: 'Rural Labor', issues: 'MGNREGA, wages, employment', parties: 'Congress, BSP' },
      { class: 'Industrial Workers', issues: 'Jobs, wages, industry', parties: 'Congress (traditional)' },
    ],
  },
  strategicConsiderations: {
    baseVote: 'Congress base: ~18-22% (Mazhabi Sikh, Hindu SC, traditional Congress families)',
    swingVote: '~15-20% (Jat Sikh drifters, urban middle class, Ravadasia)',
    congress2027Math: {
      baseVote: '~18-22% core supporters',
      swingNeeded: 'Need Jat Sikh or OBC swing of 5-8% to reach majority',
      targetSegments: 'Jat Sikh moderates (AAP → Congress), OBC (mixed → Congress), Dera followers (AAP → Congress possible)',
    },
  },
};

// Helper functions
export function getVoterTypeByName(name: string) {
  return VOTER_SEGMENTATION_DATA.behavioralSegmentation.turnoutBehavior.find(
    v => v.type.toLowerCase() === name.toLowerCase()
  );
}

export function getIssueByRank(rank: number) {
  return VOTER_SEGMENTATION_DATA.issueSalience.find(i => i.rank === rank);
}

export function getTopIssues(count: number = 3) {
  return VOTER_SEGMENTATION_DATA.issueSalience.slice(0, count);
}

export function getCasteVoteBank(name: string) {
  return VOTER_SEGMENTATION_DATA.voteBankTheory.casteVoteBanks.find(
    v => v.community.toLowerCase().includes(name.toLowerCase())
  );
}

export function getCongress2027Targets() {
  return VOTER_SEGMENTATION_DATA.strategicConsiderations.congress2027Math;
}
