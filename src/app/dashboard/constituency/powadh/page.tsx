import RegionConstituencies from "@/components/dashboard/RegionConstituencies";
import { powadhData } from "@/lib/constituency-data-loader";
import type { ElectionIntelligence } from "@/types/constituency-types";

export default function PowadhPage() {
  // Use all extracted deep data for Powadh region
  const powadhConstituencies = powadhData;

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
