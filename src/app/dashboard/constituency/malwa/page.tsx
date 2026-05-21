import RegionConstituencies from "@/components/dashboard/RegionConstituencies";
import { batch1Intelligence } from "@/lib/election-intelligence";

export default function MalwaPage() {
  // Filter Malwa constituencies from batch1
  const malwaConstituencies = batch1Intelligence.filter(
    ac => ac.region === "Malwa"
  );

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
