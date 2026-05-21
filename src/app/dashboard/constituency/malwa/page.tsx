import RegionConstituencies from "@/components/dashboard/RegionConstituencies";
import { malwaData } from "@/lib/constituency-data-loader";
import type { ElectionIntelligence } from "@/types/constituency-types";

export default function MalwaPage() {
  // Use all extracted deep data for Malwa region
  const malwaConstituencies = malwaData;

  return (
    <div className="space-y-6">
      <RegionConstituencies
        regionName="Malwa"
        regionId="malwa"
        constituencies={malwaConstituencies}
        regionDescription="Central/South Punjab - 69 seats. AAP dominant (66/69 in 2022). Drug crisis, groundwater depletion, farmer distress are key issues. Highest volatility region."
        totalSeats={69}
      />
    </div>
  );
}
