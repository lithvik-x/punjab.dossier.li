import RegionConstituencies from "@/components/dashboard/RegionConstituencies";
import { batch1Intelligence } from "@/lib/election-intelligence";

export default function DoabaPage() {
  // Filter Doaba constituencies from batch1
  const doabaConstituencies = batch1Intelligence.filter(
    ac => ac.region === "Doaba"
  );

  return (
    <div className="space-y-6">
      <RegionConstituencies
        regionName="Doaba"
        regionId="doaba"
        constituencies={doabaConstituencies}
        regionDescription="Dual river region - 23 seats. Highest SC concentration (37%). Dera Ballan influence critical. NRI remittances. BSP factor in SC-reserved seats."
        totalSeats={23}
      />
    </div>
  );
}
