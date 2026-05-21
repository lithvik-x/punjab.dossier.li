import RegionConstituencies from "@/components/dashboard/RegionConstituencies";
import constituencies from "@/lib/constituencies.json";
import type { ElectionIntelligence } from "@/types/constituency-types";

export default function PowadhPage() {
  // Filter Powadh constituencies from full dataset
  const powadhConstituencies = (constituencies as unknown as ElectionIntelligence[]).filter(
    ac => ac.region === "Powadh"
  );

  return (
    <div className="space-y-6">
      <RegionConstituencies
        regionName="Powadh"
        regionId="powadh"
        constituencies={powadhConstituencies}
        regionDescription="Punjab-Haryana border region - 10 seats. Emerging urban constituencies, IT corridor proximity. Mixed urban-rural dynamics. Swing region with floating voters."
        totalSeats={10}
      />
    </div>
  );
}
