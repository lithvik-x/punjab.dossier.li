import fs from "fs";
import path from "path";

interface DeepDoc {
  acId: string;
  executiveSummary?: string;
  geographicContext?: string;
  borderProximity?: string;
  floodRisk?: string;
  topographicZone?: string;
  demographics?: {
    totalPopulation?: number;
    male?: number;
    female?: number;
    urban?: number;
    rural?: number;
    sexRatio?: string;
  };
  religionBreakdown?: Record<string, string>;
  keyIssues?: { issue: string; description: string; source?: string }[];
  governanceGap?: string[];
  mlaperformance?: string[];
  influencers?: {
    political?: string[];
    social?: string[];
    religious?: string[];
  };
  mediaLandscape?: {
    local?: string[];
    social?: string[];
  };
  physicalMapping?: {
    voterDemographics?: Record<string, string | number>;
    keyGeography?: string;
  };
  swotAnalysis?: {
    strengths?: string[];
    weaknesses?: string[];
    opportunities?: string[];
    threats?: string[];
  };
  strategicBlueprint?: {
    forAAP?: string[];
    forCongress?: string[];
    forSADBJP?: string[];
  };
  courseChangingFactors?: { factor: string; probability: string; impact: string }[];
  governmentSchemes?: string[];
  voterOutreach?: {
    voterTurnout?: string;
    voterProfile?: string[];
  };
  intelligenceGaps?: string[];
  requiresVerification?: string[];
  sources?: string[];
}

function parseDeepDoc(content: string, acId: string): DeepDoc {
  const doc: DeepDoc = { acId };

  // Extract Executive Summary
  const execMatch = content.match(/##\s*1\.?\s*Executive Summary\s*\n([\s\S]*?)(?=##|$)/i);
  if (execMatch) {
    doc.executiveSummary = execMatch[1].trim();
  }

  // Extract Geographic Context
  const geoMatch = content.match(/Geographic Context\s*\n([\s\S]*?)(?=##|###|$)/i);
  if (geoMatch) {
    doc.geographicContext = geoMatch[1].trim();
  }

  // Extract Demographics
  const demoMatch = content.match(/##\s*.*Demographics\s*\n([\s\S]*?)(?=##|###|$)/i);
  if (demoMatch) {
    const demoContent = demoMatch[1];
    const popMatch = demoContent.match(/Total Population[\s:]*([\d,]+)/i);
    const maleMatch = demoContent.match(/Male[\s:]*([\d,]+)/i);
    const femaleMatch = demoContent.match(/Female[\s:]*([\d,]+)/i);
    const urbanMatch = demoContent.match(/Urban[\s:]*([\d,]+)/i);
    const ruralMatch = demoContent.match(/Rural[\s:]*([\d,]+)/i);
    const sexRatioMatch = demoContent.match(/Sex Ratio[\s:]*([\d]+)/i);

    if (popMatch || maleMatch || femaleMatch || urbanMatch || ruralMatch) {
      doc.demographics = {};
      if (popMatch) doc.demographics.totalPopulation = parseInt(popMatch[1].replace(/,/g, ""));
      if (maleMatch) doc.demographics.male = parseInt(maleMatch[1].replace(/,/g, ""));
      if (femaleMatch) doc.demographics.female = parseInt(femaleMatch[1].replace(/,/g, ""));
      if (urbanMatch) doc.demographics.urban = parseInt(urbanMatch[1].replace(/,/g, ""));
      if (ruralMatch) doc.demographics.rural = parseInt(ruralMatch[1].replace(/,/g, ""));
      if (sexRatioMatch) doc.demographics.sexRatio = sexRatioMatch[1];
    }
  }

  // Extract Religion Breakdown
  const religionMatch = content.match(/Religion Breakdown[^:]*\n([\s\S]*?)(?=##|###|$)/i);
  if (religionMatch) {
    doc.religionBreakdown = {};
    const lines = religionMatch[1].split("\n");
    for (const line of lines) {
      const match = line.match(/([^:]+)[\s:]+(~?[\d.]+)%/);
      if (match) {
        doc.religionBreakdown[match[1].trim()] = match[2];
      }
    }
  }

  // Extract Key Issues (section 6 or similar)
  const issuesMatch = content.match(/##\s*6\.?\s*Local Issues\s*\n([\s\S]*?)(?=##|### Key Attack|$)/i);
  if (issuesMatch) {
    doc.keyIssues = [];
    const issueBlocks = issuesMatch[1].match(/\d+\.\s*\*\*[^*]+\*\*\s*\n([\s\S]*?)(?=\n\d+\.|##|$)/gi) || [];
    for (const block of issueBlocks) {
      const titleMatch = block.match(/\d+\.\s*\*\*([^*]+)\*\*/);
      const descLines = block.match(/(?:[-•]?\s*[^\n]+\n)+/g) || [];
      const descriptions = descLines.map(l => l.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
      if (titleMatch) {
        doc.keyIssues.push({
          issue: titleMatch[1].trim(),
          description: descriptions.join(" ").trim()
        });
      }
    }
  }

  // Extract Governance Gap
  const govMatch = content.match(/##\s*5\.?\s*Governance Gap\s*\n([\s\S]*?)(?=##|###|$)/i);
  if (govMatch) {
    doc.governanceGap = govMatch[1].split("\n").filter(l => l.trim().startsWith("-") || l.trim().startsWith("•")).map(l => l.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
  }

  // Extract MLA Performance
  const mlaMatch = content.match(/MLA Performance[^\n]*\n([\s\S]*?)(?=##|###|$)/i);
  if (mlaMatch) {
    doc.mlaperformance = mlaMatch[1].split("\n").filter(l => l.trim()).map(l => l.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
  }

  // Extract Influencers
  const influMatch = content.match(/##\s*7\.?\s*Influencers[^&]*&\s*Power Structure\s*\n([\s\S]*?)(?=##|###|$)/i);
  if (influMatch) {
    doc.influencers = { political: [], social: [], religious: [] };
    const sections = influMatch[1].split(/###\s*/);
    for (const section of sections) {
      if (section.toLowerCase().includes("political")) {
        doc.influencers.political = section.split("\n").filter(l => l.trim().startsWith("-") || l.trim().startsWith("•")).map(l => l.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
      }
      if (section.toLowerCase().includes("social") || section.toLowerCase().includes("religious")) {
        doc.influencers.religious = section.split("\n").filter(l => l.trim().startsWith("-") || l.trim().startsWith("•")).map(l => l.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
      }
    }
  }

  // Extract Media Landscape
  const mediaMatch = content.match(/##\s*8\.?\s*Media Landscape\s*\n([\s\S]*?)(?=##|###|$)/i);
  if (mediaMatch) {
    doc.mediaLandscape = { local: [], social: [] };
    const lines = mediaMatch[1].split("\n");
    let currentSection: "local" | "social" = "local";
    for (const line of lines) {
      if (line.toLowerCase().includes("social media")) currentSection = "social";
      if (line.trim().startsWith("-") || line.trim().startsWith("•")) {
        if (currentSection === "local") {
          doc.mediaLandscape.local!.push(line.replace(/^[-•]\s*/, "").trim());
        } else {
          doc.mediaLandscape.social!.push(line.replace(/^[-•]\s*/, "").trim());
        }
      }
    }
  }

  // Extract SWOT Analysis
  const swotMatch = content.match(/##\s*10\.?\s*SWOT[^\n]*\n([\s\S]*?)(?=##|### Strategic|$)/i);
  if (swotMatch) {
    doc.swotAnalysis = { strengths: [], weaknesses: [], opportunities: [], threats: [] };
    const sections = swotMatch[1].split(/###\s*/);
    for (const section of sections) {
      if (section.toLowerCase().includes("strength")) {
        doc.swotAnalysis.strengths = section.split("\n").filter(l => l.trim().startsWith("-") || l.trim().startsWith("•")).map(l => l.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
      }
      if (section.toLowerCase().includes("weakness")) {
        doc.swotAnalysis.weaknesses = section.split("\n").filter(l => l.trim().startsWith("-") || l.trim().startsWith("•")).map(l => l.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
      }
      if (section.toLowerCase().includes("opportunit")) {
        doc.swotAnalysis.opportunities = section.split("\n").filter(l => l.trim().startsWith("-") || l.trim().startsWith("•")).map(l => l.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
      }
      if (section.toLowerCase().includes("threat")) {
        doc.swotAnalysis.threats = section.split("\n").filter(l => l.trim().startsWith("-") || l.trim().startsWith("•")).map(l => l.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
      }
    }
  }

  // Extract Strategic Blueprint
  const stratMatch = content.match(/##\s*11\.?\s*Strategic[^\n]*\n([\s\S]*?)(?=##|###|$)/i);
  if (stratMatch) {
    doc.strategicBlueprint = { forAAP: [], forCongress: [], forSADBJP: [] };
    const sections = stratMatch[1].split(/###\s*For\s*/i);
    for (const section of sections) {
      if (section.toLowerCase().startsWith("aap")) {
        doc.strategicBlueprint.forAAP = section.split("\n").filter(l => l.trim().startsWith("-") || l.trim().startsWith("•")).map(l => l.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
      }
      if (section.toLowerCase().startsWith("congress")) {
        doc.strategicBlueprint.forCongress = section.split("\n").filter(l => l.trim().startsWith("-") || l.trim().startsWith("•")).map(l => l.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
      }
      if (section.toLowerCase().startsWith("sad")) {
        doc.strategicBlueprint.forSADBJP = section.split("\n").filter(l => l.trim().startsWith("-") || l.trim().startsWith("•")).map(l => l.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
      }
    }
  }

  // Extract Course Changing Factors
  const factorsMatch = content.match(/##\s*12\.?\s*Course[- ]Changing[^\n]*\n([\s\S]*?)(?=##|### Intelligence|$)/i);
  if (factorsMatch) {
    doc.courseChangingFactors = [];
    const tableMatch = factorsMatch[1].match(/\|\s*([^\|]+)\s*\|\s*([^\|]+)\s*\|\s*([^\|]+)\s*\|/g);
    if (tableMatch) {
      for (const row of tableMatch.slice(1)) {
        const cols = row.split("|").map(c => c.trim()).filter(Boolean);
        if (cols.length >= 3) {
          doc.courseChangingFactors.push({
            factor: cols[0],
            probability: cols[1],
            impact: cols[2]
          });
        }
      }
    }
  }

  // Extract Government Schemes
  const schemesMatch = content.match(/##\s*9\.?\s*Government[^\n]*\n([\s\S]*?)(?=##|### Key Attack|$)/i);
  if (schemesMatch) {
    doc.governmentSchemes = schemesMatch[1].split("\n").filter(l => l.trim().startsWith("-") || l.trim().startsWith("•")).map(l => l.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
  }

  // Extract Voter Outreach
  const voterMatch = content.match(/##\s*8\.?\s*Voter[^\n]*\n([\s\S]*?)(?=##|### Government|$)/i);
  if (voterMatch) {
    doc.voterOutreach = { voterProfile: [] };
    const lines = voterMatch[1].split("\n");
    for (const line of lines) {
      if (line.match(/Voter Turnout/i)) {
        doc.voterOutreach.voterTurnout = line.split(":")[1]?.trim();
      }
      if (line.trim().startsWith("-") || line.trim().startsWith("•")) {
        doc.voterOutreach.voterProfile.push(line.replace(/^[-•]\s*/, "").trim());
      }
    }
  }

  // Extract Intelligence Gaps
  const gapsMatch = content.match(/##\s*(?:Intelligence Gaps|13\.)\s*[^\n]*\n([\s\S]*?)(?=##|###|$)/i);
  if (gapsMatch) {
    doc.intelligenceGaps = gapsMatch[1].split("\n").filter(l => l.trim().startsWith("-") || l.trim().startsWith("•") || l.includes("[NEEDS")).map(l => l.replace(/^[-•]\s*/, "").replace(/\[[^\]]+\]/g, "").trim()).filter(Boolean);
    doc.requiresVerification = gapsMatch[1].match(/\[NEEDS[^\]]+\]/g)?.map(s => s.replace(/[\[\]]/g, "").trim()) || [];
  }

  // Extract Sources
  const sourcesMatch = content.match(/Sources[^\n]*\n([\s\S]*?)$/i);
  if (sourcesMatch) {
    doc.sources = sourcesMatch[1].split("\n").filter(l => l.trim().startsWith("-") || l.trim().startsWith("•") || l.includes("http")).map(l => l.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
  }

  return doc;
}

const deepDir = "/home/lithvik/Projects/dossier.li/punjab/P1/constituency-dossiers-R1";
const files = fs.readdirSync(deepDir).filter(f => f.endsWith("-deep.md"));

const allData: Record<string, DeepDoc> = {};

for (const file of files) {
  const acId = file.replace("-deep.md", "").replace("AC", "AC");
  const content = fs.readFileSync(path.join(deepDir, file), "utf-8");
  const parsed = parseDeepDoc(content, acId);
  allData[acId] = parsed;
}

console.log(`Extracted ${Object.keys(allData).length} constituencies`);

// Write to the actual JSON file
const outputPath = path.join(__dirname, "../src/lib/all-extracted-deep-data.json");
fs.writeFileSync(outputPath, JSON.stringify(allData, null, 2));
console.log(`Written to ${outputPath}`);
