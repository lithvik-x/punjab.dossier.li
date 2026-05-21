import RegionConstituencies from "@/components/dashboard/RegionConstituencies";
import { batch1Intelligence } from "@/lib/election-intelligence";

export default function PowadhPage() {
  // Filter Powadh constituencies from batch1
  const powadhConstituencies = batch1Intelligence.filter(
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
