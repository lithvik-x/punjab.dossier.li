/**
 * AC096-Mansa Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC096-Mansa.md, AC096-Mansa-deep.md
 */

import type {
  AC096MansaTypes,
  ConstituencyHeader,
  ConstituencyIdentity,
  GeographicProfile,
  ElectionResults,
  Demographics,
  KeyLocalIssue,
  CongressStrategicPosition,
  RecommendedCandidateProfile,
  AttackLinesAgainstAAP,
  DeepResearchData,
  MainDossierData,
  ResearchMetadata,
  ExecutiveSummary,
  ConstituencyProfile,
  GeographicContext,
  DistrictDemographics,
  CasteComposition,
  ReligiousComposition,
  CommunityBreakdown,
  VoterDemographics,
  StrategicData,
  PoliticalSignificance,
  ElectoralHistory,
  DrugCrisis,
  KeyIssues,
  CurrentMLA,
  KeyPoliticalFigures,
  PoliticalDynamics,
  VoterOutreach,
  GovernmentSchemes,
  IntelligenceGaps,
  ResearchPriorities,
  StrategicConsiderations,
  ElectionResult2022,
  ElectionResult2017,
  ElectionResult2012,
  AC096MansaCompleteDossier,
} from "./ac096-mansa-types";

// ============================================================================
// MAIN DOSSIER DATA (from AC096-Mansa.md)
// ============================================================================

const mainDossier: MainDossierData = {
  header: {
    acNumber: 96,
    name: "Mansa",
    district: "Mansa",
    region: "Malwa",
    category: "General",
    date: "20 May 2026",
  },

  constituencyOverview:
    "Mansa is a General category assembly constituency in Punjab's Malwa region, part of Bathinda Lok Sabha constituency. The constituency is dominated by agricultural communities with strong presence of Jat Sikhs and other caste groups. AAP won decisively in 2022 with 57.57% vote share. The seat was previously held by Congress with notable victory margin changes over elections.",

  identity: {
    acNumber: 96,
    name: "Mansa",
    district: "Mansa",
    region: "Malwa",
    type: "General",
    parliamentarySegment: "Bathinda Lok Sabha constituency",
    date: "20 May 2026",
  },

  geographicProfile: {
    location: "Mansa district, Punjab",
    region: "Malwa",
    district: "Mansa",
    areaCharacter: "Rural agricultural constituency",
    economy: "Cotton cultivation and agriculture ('Area of White Gold')",
  },

  electionResults: {
    results2022: {
      winner: "Dr. Vijay Singla",
      party: "Aam Aadmi Party (AAP)",
      votes: 100023,
      voteShare: "57.57%",
      margin: 63323,
      marginDescription: "63,323 votes",
      runnerUp: "Shubhdeep Singh Sidhu Moose Wala",
      runnerUpParty: "Indian National Congress (INC)",
      runnerUpVotes: 36700,
      runnerUpVoteShare: "21.3%",
      totalElectors: "~173,000",
      turnout: "~78-80%",
    },
    results2017: {
      winner: "Nazar Singh Manshahia",
      party: "Aam Aadmi Party (AAP)",
      votes: 70586,
      voteShare: "40.5%",
      margin: 20469,
      runnerUp: "Manoj Bala",
      runnerUpParty: "Indian National Congress (INC)",
      status: "verified",
    },
    results2012: {
      winner: "Not available",
      status: "not_available",
    },
    historicalPattern:
      "AAP won in 2017 with 40.5% margin, then massively improved in 2022 to 57.57% with 63K margin despite Moose Wala's candidacy",
  },

  demographics: {
    districtLevel: {
      totalPopulation: "769,751",
      male: "408,732",
      female: "361,019",
      urban: "163,604 (21.2%)",
      rural: "606,147 (78.8%)",
      sexRatio: "883 females per 1000 males",
    },
    casteComposition: {
      sikh: "~70-75%",
      hindu: "~25-30%",
      jatSikh: "~30-35%",
      sc: "~28-30%",
      obc: "~10-12%",
    },
    religiousComposition: {
      sikh: "60-70%",
      hindu: "25-35%",
      muslim: "Less than 1%",
      christian: "Less than 1%",
    },
    communityBreakdown: [
      {
        name: "Jat Sikh",
        description: "Dominant agricultural community, significant vote bank (~30-35%)",
      },
      {
        name: "SC Population",
        description: "Approximately 28-30% (district-wide ~33.6%)",
      },
      {
        name: "OBC",
        description: "Approximately 10-12%",
      },
      {
        name: "Hindu Minority",
        description: "~25-30%",
      },
    ],
  },

  voterDemographics: {
    totalElectors: "~173,000",
    voterTurnout: "~78-80%",
    ruralCharacter: "Rural agricultural constituency",
  },

  keyLocalIssues: [
    {
      rank: 1,
      title: "Drug Menace",
      description:
        "Significant seizures in Mansa district. Every third youth in rural Punjab hooked to drugs other than alcohol/tobacco. Supreme Court has warned about alarming drug abuse levels. Punjab accounts for 21% of national drug deaths, mostly ages 18-30.",
    },
    {
      rank: 2,
      title: "Agricultural Distress",
      description:
        "Cotton belt region facing agricultural challenges. MSP procurement issues. Water table concerns in Malwa region. Indebtedness among farmers.",
    },
    {
      rank: 3,
      title: "Groundwater Crisis",
      description:
        "Declining water table in Malwa region. Cotton belt sustainability concerns.",
    },
    {
      rank: 4,
      title: "Rural Infrastructure",
      description:
        "Roads, irrigation facilities need improvement. Basic infrastructure gaps in rural areas.",
    },
    {
      rank: 5,
      title: "Youth Unemployment",
      description:
        "Limited employment opportunities. NRI emigration is high trend among youth.",
    },
  ],

  strategicData: {
    politicalSignificance: {
      mooseWalaSeat:
        "Famous singer Sidhu Moose Wala contested as INC candidate, drawing national attention",
      aapVictory:
        "Despite Moose Wala's popularity, AAP won by 63K votes - massive victory",
      districtHQ:
        "Mansa town is district capital, administrative importance",
      cottonBelt: 'Known for cotton cultivation ("Area of White Gold")',
    },
    congressPosition: {
      currentStatus: {
        position2022:
          "Lost badly - Moose Wala's popularity didn't translate to votes",
        historicalBase: "Previously competitive in Mansa region",
        challenge:
          "AAP has strong rural base. Congress needs strong local candidate.",
      },
      keyChallenges: [
        "Moose Wala's popularity didn't translate to votes",
        "AAP has strong rural base",
        "Congress needs strong local candidate",
        "Focus on anti-incumbency",
      ],
      opportunities: [
        "AAP government's broken promises on drug crisis",
        "MSP procurement failures for cotton farmers",
        "Water table declining - no action taken",
        "Youth forced to emigrate for jobs",
      ],
      strategicConsiderations: [
        "Moose Wala's Congress candidacy shows youth celebrity candidate impact",
        "Drug crisis is the #1 local issue - any counter-narrative needed",
        "Jat Sikh consolidation important in Malwa",
      ],
    },
    recommendedCandidateProfile: {
      ideal: {
        caste: "Sikh leader preferred",
        background: "Doctor, agriculturalist, or businessman",
        keyTraits: "Known for accessibility, rural connect",
        targetVoter: "Rural voters, farmers, youth",
      },
    },
    attackLines: {
      vulnerabilities: [
        "Moose Wala's murder - justice still pending",
        "Drug addiction destroying families in cotton belt",
        "MSP promises broken for cotton farmers",
        "Water table declining - no action taken",
        "Youth forced to emigrate for jobs",
      ],
      narratives: [
        "Dr. Vijay Singla: 5 years - what did Mansa get?",
        "Drug crisis destroying our youth",
        "Cotton farmers abandoned by AAP government",
        "Groundwater depleting, government sleeping",
        "Our youth have no future - forced to leave",
      ],
    },
  },
};

// ============================================================================
// DEEP RESEARCH DATA (from AC096-Mansa-deep.md)
// ============================================================================

const deepResearch: DeepResearchData = {
  metadata: {
    dossierId: "AC096-Mansa",
    topic: "Mansa Assembly Constituency - Deep Research",
    tier: 2,
    date: "20 May 2026",
    dataCurrency: "As of May 2026 (2022 election data is most recent)",
    sourcesConsulted: [
      "indiavotes.com",
      "proneta.in",
      "wikipedia.org",
      "bbc.com",
      "cnbctv18.com",
    ],
    verificationStatus: "PARTIALLY VERIFIED",
  },

  executiveSummary: {
    overview:
      "Mansa is a General category assembly constituency in Punjab's Malwa region, part of Bathinda Lok Sabha constituency. The constituency is dominated by agricultural communities with strong presence of Jat Sikhs and other caste groups. AAP won decisively in 2022 with 57.9% vote share. The seat was previously held by Congress with notable victory margin changes over elections.",
    "2022Result":
      "AAP won with Dr. Vijay Singla getting 100,023 votes (57.9%). Runner-up Moose Wala (Congress) got 36,700 votes (21.3%). Victory margin was 63,323 votes.",
    constituencyCharacter:
      "Predominantly rural agricultural constituency in the cotton belt of Punjab, known as the 'Area of White Gold.' Strong Jat Sikh presence with significant SC and OBC populations.",
  },

  constituencyProfile: {
    basicDetails: {
      assemblyConstituencyNo: 96,
      district: "Mansa",
      region: "Malwa",
      lokSabhaSeat: "Bathinda",
      type: "General (Open)",
    },
    geographicContext: {
      cottonBelt:
        "Mansa district lies in the cotton belt of Punjab, often called the 'Area of White Gold'",
      ruralUrbanComposition: {
        rural: "78.8% (606,147 as per 2011 census)",
        urban: "21.2% (163,604 as per 2011 census)",
      },
      districtPopulation: "769,751",
    },
  },

  demographics: {
    districtLevel: {
      totalPopulation: "769,751",
      male: "408,732",
      female: "361,019",
      urban: "163,604 (21.2%)",
      rural: "606,147 (78.8%)",
      sexRatio: "883 females per 1000 males",
    },
    casteComposition: {
      sikh: "60-70%",
      hindu: "25-35%",
      jatSikh: "30-35% (dominant agricultural community)",
      sc: "30-35%",
      obc: "15-20%",
    },
    religiousComposition: {
      sikh: "60-70%",
      hindu: "25-35%",
      muslim: "Less than 1%",
      christian: "Less than 1%",
    },
    communityBreakdown: [
      {
        name: "Jat Sikh",
        description:
          "Dominant agricultural community, significant vote bank",
      },
      {
        name: "Dalit/SC",
        description: "Approximately 30-35% of population",
      },
      {
        name: "OBC",
        description: "Approximately 15-20%",
      },
      {
        name: "Other Backward Communities",
        description: "Various groups",
      },
    ],
  },

  electoralTrends: {
    2022: {
      turnout: "~72% (state average)",
      aapWon: "Yes (Landslide - 57.9%)",
      congressLegacy: "Previously competitive in Mansa region",
    },
    historicalPattern:
      "AAP improved from 40.5% in 2017 to 57.9% in 2022. Moose Wala candidacy didn't help Congress.",
  },

  keyIssues: {
    drugCrisis: {
      severity: "Severe",
      impactOnYouth:
        "Every third youth in rural Punjab hooked to drugs other than alcohol/tobacco (per NIH study)",
      statisticalEvidence:
        "Punjab accounts for 21% of national drug deaths, mostly ages 18-30",
      governmentResponse:
        "Supreme Court has warned about alarming drug abuse levels (May 2026)",
      regionalContext:
        "Mansa and Malwa region heavily affected by drug abuse crisis. Deaths of youngsters due to drug abuse reported in Mansa district.",
    },
    agrarianDistress: {
      cottonBelt: "Region in cotton belt facing agricultural challenges",
      mspProcurement: "MSP procurement issues reported in paddy",
      waterTable: "Water table concerns in Malwa region",
      indebtedness: "Indebtedness among farmers",
    },
    governanceChallenges: {
      employment: "Employment opportunities limited for youth",
      nriEmigration: "NRI emigration a major trend",
      healthcare: "Healthcare infrastructure gaps",
      education: "Education facility shortages",
    },
  },

  politicalLeadership: {
    currentMLA: {
      name: "Dr. Vijay Singla",
      party: "AAP",
      position: "Currently serving",
      term: "2022-2027",
    },
    keyPoliticalFigures: {
      moosesWala: {
        name: "Shubhdeep Singh Sidhu Moose Wala",
        role: "Congress candidate in 2022",
        impact:
          "Youth celebrity candidate - his popularity didn't translate to votes for Congress",
      },
    },
    politicalDynamics: {
      aapDominance:
        "AAP dominance in 2022 with massive margins (63K victory margin)",
      congressPresence:
        "Congress presence through Moose Wala candidacy but lost badly",
      sadBjpImpact: "[NEEDS VERIFICATION - SAD+BJP alliance impact]",
    },
  },

  voterOutreach: {
    voterTurnout2022: "State average: 72%",
    womenParticipation: "[NEEDS VERIFICATION]",
    nriVoters:
      "Significant NRI presence - youth emigration for employment abroad affects voter demographics",
  },

  governmentSchemes: {
    central: ["[NEEDS VERIFICATION - specific beneficiary data for Mansa]"],
    state: ["[NEEDS VERIFICATION - specific beneficiary data for Mansa]"],
    aapInitiatives: {
      womenStipend: "Rs 1000/month for women (promised)",
      implementation: "[NEEDS VERIFICATION]",
    },
  },

  intelligenceGaps: {
    criticalMissingData: [
      "Full 2022 candidate list with party-wise votes",
      "2017 and earlier election results",
      "Constituency-specific caste composition data",
      "Precise voter turnout figures",
      "Local political influencer names and influence",
      "Scheme beneficiary numbers",
      "Opinion polling data for 2027",
    ],
  },

  researchPriorities: {
    priorities: [
      "Verify 2017 result comparison with 2022",
      "Identify specific Dalit and OBC vote bank movements",
      "Map local influential families and their political alignment",
      "Assess AAP MLA performance and local development work",
    ],
  },

  strategicConsiderations: {
    considerations: [
      "Moose Wala's Congress candidacy shows youth celebrity candidate impact",
      "Drug crisis is the #1 local issue - any counter-narrative needed",
      "Jat Sikh consolidation important in Malwa",
    ],
  },
};

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export const ac096MansaData: AC096MansaTypes = {
  mainDossier,

  deepResearch,

  completeDossier: {
    header: mainDossier.header,
    identity: mainDossier.identity,
    geographicProfile: mainDossier.geographicProfile,
    electionResults: mainDossier.electionResults,
    demographics: mainDossier.demographics,
    voterDemographics: mainDossier.voterDemographics,
    keyLocalIssues: mainDossier.keyLocalIssues,
    congressStrategicPosition: mainDossier.strategicData.congressPosition,
    recommendedCandidateProfile:
      mainDossier.strategicData.recommendedCandidateProfile,
    attackLinesAgainstAAP: mainDossier.strategicData.attackLines,
    deepResearchData: deepResearch,
  },
};

// Named exports for flexible importing
export const ac096MansaMainDossier = mainDossier;
export const ac096MansaDeepResearch = deepResearch;
export const ac096MansaCompleteDossier = ac096MansaData.completeDossier;
