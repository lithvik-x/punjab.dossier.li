import RegionConstituencies from "@/components/dashboard/RegionConstituencies";
import { doabaData } from "@/lib/constituency-data-loader";
import type { ElectionIntelligence } from "@/types/constituency-types";

export default function DoabaPage() {
  // Use all extracted deep data for Doaba region
  const doabaConstituencies = doabaData;

  return (
    <div className="space-y-6">
      <RegionConstituencies
        regionName="Doaba"
        regionId="doaba"
        constituencies={doabaConstituencies}
        regionDescription="Punjab's central region - 23 seats. Known as 'Land of Warriors' - NRI voter impact. Drug crisis severe. Three-way contests common. Channi's home region."
        totalSeats={23}
      />
    </div>
  );
}
