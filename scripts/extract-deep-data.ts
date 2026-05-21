import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface DeepDoc {
  acId: string;
  name?: string;
  district?: string;
  region?: string;
  acNumber?: number;
  executiveSummary?: string;
  geographicContext?: string;
  demographics?: {
    totalPopulation?: number;
    male?: number;
    female?: number;
    urban?: number;
    rural?: number;
    sexRatio?: string;
    casteComposition?: Record<string, string>;
  };
  religionBreakdown?: Record<string, string>;
  keyIssues?: { issue: string; description: string }[];
  governanceGap?: string[];
  mlaperformance?: string[];
  electionResults?: {
    year: number;
    winner: string;
    party: string;
    margin?: string;
  }[];
  influencers?: {
    political?: string[];
    social?: string[];
    religious?: string[];
  };
  mediaLandscape?: {
    local?: string[];
    social?: string[];
  };
  swotAnalysis?: {
    strengths?: string[];
    weaknesses?: string[];
    opportunities?: string[];
    threats?: string[];
  };
  strategicBlueprint?: {
    narratives?: string[];
    voterSegments?: string[];
  };
  courseChangingFactors?: { factor: string; probability: string; impact: string }[];
  voterOutreach?: {
    voterTurnout?: string;
    voterProfile?: string[];
  };
  intelligenceGaps?: string[];
  requiresVerification?: string[];
  sources?: string[];
}

// Extract content between two section headers
function extractSection(content: string, sectionHeader: RegExp, endHeader?: RegExp): string {
  const startMatch = content.match(sectionHeader);
  if (!startMatch) return "";

  const startIndex = content.indexOf(startMatch[0]);
  let endIndex = content.length;

  if (endHeader) {
    const endMatch = content.slice(startIndex + 1).match(endHeader);
    if (endMatch) {
      endIndex = startIndex + 1 + content.slice(startIndex + 1).indexOf(endMatch[0]);
    }
  } else {
    // Find next ## header
    const nextSection = content.slice(startIndex + 1).match(/##\s*\d+\./);
    if (nextSection) {
      endIndex = startIndex + 1 + content.slice(startIndex + 1).indexOf(nextSection[0]);
    }
  }

  return content.slice(startIndex, endIndex);
}

// Extract bullet points from section text
function extractBullets(text: string): string[] {
  const bullets: string[] = [];
  const lines = text.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('- ')) {
      const clean = trimmed.slice(2).replace(/\*\*/g, '').trim();
      if (clean && clean.length > 3) {
        bullets.push(clean);
      }
    }
  }
  return bullets;
}

function parseDeepDoc(content: string, acId: string): DeepDoc {
  const doc: DeepDoc = { acId };

  // Extract header metadata from YAML frontmatter
  const yamlMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (yamlMatch) {
    const yaml = yamlMatch[1];
    const acNumMatch = yaml.match(/AC Number:\s*(\d+)/);
    if (acNumMatch) doc.acNumber = parseInt(acNumMatch[1]);
    const nameMatch = yaml.match(/Name:\s*(.+)/);
    if (nameMatch) doc.name = nameMatch[1].trim();
    const districtMatch = yaml.match(/District:\s*(.+)/);
    if (districtMatch) doc.district = districtMatch[1].trim();
    const regionMatch = yaml.match(/Region:\s*(.+)/);
    if (regionMatch) doc.region = regionMatch[1].trim();
  }

  // Extract from title line format like "# AC011 — Ajnala Assembly Constituency Deep Research"
  const titleMatch = content.match(/^#\s*AC\d+\s*[—–-]\s*([^"\n#]+)/);
  if (titleMatch && !doc.name) {
    doc.name = titleMatch[1].replace(/Assembly Constituency Deep Research|Dossier/g, '').trim();
  }

  // Extract metadata from the line with **District:** | **Region:** | **AC No:**
  if (!doc.district) {
    const metaMatch = content.match(/\*\*District:\*\*\s*([^|]+)\s*\|\s*\*\*Region:\*\*\s*([^|]+)\s*\|\s*\*\*AC No:\*\*\s*(\d+)/);
    if (metaMatch) {
      doc.district = metaMatch[1].trim();
      doc.region = metaMatch[2].trim();
      doc.acNumber = parseInt(metaMatch[3]);
    }
  }

  // Extract Geographic Context from section 1
  const section1 = extractSection(content, /##\s*1\.\s*CONSTITUENCY IDENTITY/i, /##\s*2\./);
  if (section1) {
    const geoMatch = section1.match(/\*\*Geographic Profile:\*\*([\s\S]*?)(?=\*\*|###)/i);
    if (geoMatch) {
      doc.geographicContext = geoMatch[1].replace(/\n+/g, ' ').trim();
    }
  }

  // Extract Demographics from section 2
  const section2 = extractSection(content, /##\s*2\.\s*DEMOGRAPHIC/i, /##\s*3\./);
  if (section2) {
    doc.demographics = {};

    // Extract population
    const popMatch = section2.match(/population[^:]*:\s*([\d,]+)/i);
    if (popMatch) {
      doc.demographics.totalPopulation = parseInt(popMatch[1].replace(/,/g, ''));
    }

    // Extract sex ratio
    const sexMatch = section2.match(/Sex Ratio[^:]*:\s*([\d,]+)/i);
    if (sexMatch) {
      doc.demographics.sexRatio = sexMatch[1];
    }

    // Extract caste composition
    const casteMatch = section2.match(/Caste Composition[^\n]*\n([\s\S]*?)(?=\*\*|##)/i);
    if (casteMatch) {
      doc.demographics.casteComposition = {};
      const lines = casteMatch[1].split('\n');
      for (const line of lines) {
        const match = line.match(/[:-]\s*([^:]+):\s*([\d.~]+)/);
        if (match) {
          doc.demographics.casteComposition[match[1].trim()] = match[2].trim();
        }
      }
    }
  }

  // Extract Religion Breakdown
  const section2b = extractSection(content, /##\s*2\.\s*DEMOGRAPHIC/i, /##\s*3\./);
  if (section2b) {
    const religionMatch = section2b.match(/Religion Breakdown[^\n]*\n([\s\S]*?)(?=\*\*##|##)/i);
    if (religionMatch) {
      doc.religionBreakdown = {};
      const lines = religionMatch[1].split('\n');
      for (const line of lines) {
        const match = line.match(/[:-]\s*([^:]+):\s*([\d.~]+)/);
        if (match) {
          doc.religionBreakdown[match[1].trim()] = match[2].trim();
        }
      }
    }
  }

  // Extract Key Issues from section 6
  const section6 = extractSection(content, /##\s*6\.\s*LOCAL ISSUES/i, /##\s*7\./);
  if (section6) {
    doc.keyIssues = [];
    // Extract issue taxonomy items
    const issueMatches = section6.matchAll(/\*\*([^**]+)\*\*\s*-\s*([^\n]+)/g);
    for (const match of issueMatches) {
      doc.keyIssues.push({
        issue: match[1].trim(),
        description: match[2].trim()
      });
    }
  }

  // Extract Governance Gap from section 5
  const section5 = extractSection(content, /##\s*5\.\s*GOVERNANCE GAP/i, /##\s*6\./);
  if (section5) {
    doc.governanceGap = extractBullets(section5);
  }

  // Extract MLA Performance / Electoral History from section 3
  const section3 = extractSection(content, /##\s*3\.\s*ELECTORAL HISTORY/i, /##\s*4\./);
  if (section3) {
    doc.mlaperformance = [];
    doc.electionResults = [];

    // Match table rows
    const tableMatches = section3.matchAll(/\|\s*(\d{4})\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]*)\s*\|/g);
    for (const match of tableMatches) {
      const year = parseInt(match[1]);
      const winner = match[2].trim();
      const party = match[3].trim();
      const margin = match[4].trim();
      doc.electionResults!.push({ year, winner, party, margin });
      doc.mlaperformance!.push(`${year}: ${winner} (${party}) - Margin: ${margin}`);
    }
  }

  // Extract Influencers from section 7
  const section7 = extractSection(content, /##\s*7\.\s*INFLUENCERS/i, /##\s*8\./);
  if (section7) {
    doc.influencers = { political: [], social: [], religious: [] };

    // Split by subsections and extract
    const subsections = section7.split(/###\s*\d+\.\s*/);
    for (const subsection of subsections) {
      const lowerSub = subsection.toLowerCase();
      if (lowerSub.includes('political')) {
        doc.influencers.political = extractBullets(subsection);
      } else if (lowerSub.includes('social')) {
        doc.influencers.social = extractBullets(subsection);
      } else if (lowerSub.includes('caste') || lowerSub.includes('religious')) {
        doc.influencers.religious = extractBullets(subsection);
      }
    }

    // If nothing matched by subsection, just get all bullets
    if (doc.influencers.political!.length === 0 && doc.influencers.religious!.length === 0) {
      const allBullets = extractBullets(section7);
      doc.influencers.political = allBullets.slice(0, Math.ceil(allBullets.length / 2));
      doc.influencers.religious = allBullets.slice(Math.ceil(allBullets.length / 2));
    }
  }

  // Extract Media Landscape from section 8
  const section8 = extractSection(content, /##\s*8\.\s*MEDIA/i, /##\s*9\./);
  if (section8) {
    doc.mediaLandscape = { local: [], social: [] };

    const subsections = section8.split(/###\s*\d+\.\s*/);
    for (const subsection of subsections) {
      const lowerSub = subsection.toLowerCase();
      if (lowerSub.includes('social') || lowerSub.includes('digital')) {
        doc.mediaLandscape.social = extractBullets(subsection);
      } else {
        doc.mediaLandscape.local = extractBullets(subsection);
      }
    }

    // If nothing was categorized, just extract all bullets
    if (doc.mediaLandscape.local!.length === 0) {
      doc.mediaLandscape.local = extractBullets(section8);
    }
  }

  // Extract SWOT Analysis from section 10
  const section10 = extractSection(content, /##\s*10\.\s*SWOT/i, /##\s*11\./);
  if (section10) {
    doc.swotAnalysis = { strengths: [], weaknesses: [], opportunities: [], threats: [] };

    const subsections = section10.split(/###\s*/);
    for (const subsection of subsections) {
      const lowerSub = subsection.toLowerCase();
      if (lowerSub.includes('strength')) {
        doc.swotAnalysis.strengths = extractBullets(subsection);
      } else if (lowerSub.includes('weakness')) {
        doc.swotAnalysis.weaknesses = extractBullets(subsection);
      } else if (lowerSub.includes('opportunit')) {
        doc.swotAnalysis.opportunities = extractBullets(subsection);
      } else if (lowerSub.includes('threat')) {
        doc.swotAnalysis.threats = extractBullets(subsection);
      }
    }
  }

  // Extract Strategic Blueprint from section 11
  const section11 = extractSection(content, /##\s*11\.\s*STRATEGIC/i, /##\s*12\./);
  if (section11) {
    doc.strategicBlueprint = { narratives: [], voterSegments: [] };

    const bullets = extractBullets(section11);
    for (const bullet of bullets) {
      if (bullet.match(/\d+\.\s*\*\*.*\*\*/)) {
        doc.strategicBlueprint.narratives!.push(bullet);
      } else {
        doc.strategicBlueprint.voterSegments!.push(bullet);
      }
    }
  }

  // Extract Course-Changing Factors from section 12
  const section12 = extractSection(content, /##\s*12\.\s*COURSE/i, /---/);
  if (section12) {
    doc.courseChangingFactors = [];
    const tableMatches = section12.matchAll(/\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|/g);
    for (const match of tableMatches) {
      const factor = match[1].trim();
      const probability = match[2].trim();
      const impact = match[3].trim();
      if (factor && !factor.includes('---') && !factor.toLowerCase().includes('factor')) {
        doc.courseChangingFactors.push({ factor, probability, impact });
      }
    }
  }

  // Extract Sources
  const sourcesMatch = content.match(/\*\*Data Sources:\*\*([\s\S]*?)$/i);
  if (sourcesMatch) {
    doc.sources = sourcesMatch[1].split('\n')
      .map(s => s.replace(/^[-*]\s*/, '').trim())
      .filter(s => s.length > 0);
  }

  // Extract Intelligence Gaps
  const gapsMatch = content.match(/\[NEEDS VERIFICATION[^\]]*\]/g);
  if (gapsMatch) {
    doc.requiresVerification = gapsMatch;
    doc.intelligenceGaps = gapsMatch.map(g => g.replace(/[\[\]]/g, '').trim());
  }

  return doc;
}

const deepDir = "/home/lithvik/Projects/dossier.li/punjab/P1/constituency-dossiers-R1";
const files = fs.readdirSync(deepDir).filter(f => f.endsWith("-deep.md"));

const allData: Record<string, DeepDoc> = {};

for (const file of files) {
  const acId = file.replace("-deep.md", "");
  const content = fs.readFileSync(path.join(deepDir, file), "utf-8");
  const parsed = parseDeepDoc(content, acId);
  allData[acId] = parsed;
}

console.log(`Extracted ${Object.keys(allData).length} constituencies`);

// Show sample of what was extracted
const sample = Object.values(allData)[0];
console.log("Sample entry (first):", JSON.stringify(sample, null, 2).substring(0, 800));

// Write to the actual JSON file
const outputPath = path.join(__dirname, "../src/lib/all-extracted-deep-data.json");
fs.writeFileSync(outputPath, JSON.stringify(allData, null, 2));
console.log(`Written to ${outputPath}`);
