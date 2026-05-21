import RegionConstituencies from "@/components/dashboard/RegionConstituencies";
import { majhaData } from "@/lib/constituency-data-loader";
import type { ElectionIntelligence } from "@/types/constituency-types";

export default function MajhaPage() {
  // Use all extracted deep data for Majha region
  const majhaConstituencies = majhaData;

  return (
    <div className="space-y-6">
      <RegionConstituencies
        regionName="Majha"
        regionId="majha"
        constituencies={majhaConstituencies}
        regionDescription="North Punjab border region - 25 seats. Historic Congress heartland, Amit Shah's targeted region. Drug corridors, border security, farmer distress dominate."
        totalSeats={25}
      />
    </div>
  );
}
