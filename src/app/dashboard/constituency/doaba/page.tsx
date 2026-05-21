import RegionConstituencies from "@/components/dashboard/RegionConstituencies";
import constituencies from "@/lib/constituencies.json";
import type { ElectionIntelligence } from "@/types/constituency-types";

export default function DoabaPage() {
  // Filter Doaba constituencies from full dataset
  const doabaConstituencies = (constituencies as unknown as ElectionIntelligence[]).filter(
    ac => ac.region === "Doaba"
  );

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
