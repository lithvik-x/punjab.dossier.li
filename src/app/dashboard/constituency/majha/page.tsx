import RegionConstituencies from "@/components/dashboard/RegionConstituencies";
import { batch1Intelligence } from "@/lib/election-intelligence";

export default function MajhaPage() {
  // Filter Majha constituencies from batch1
  const majhaConstituencies = batch1Intelligence.filter(
    ac => ac.region === "Majha"
  );

  return (
    <div className="space-y-6">
      <RegionConstituencies
        regionName="Majha"
        regionId="majha"
        constituencies={majhaConstituencies}
        regionDescription="Pakistan border region - 25 seats. Border security, drug trafficking, Panthic politics key dynamics. Congress traditionally strong. 4-way contest (AAP-Congress-SAD-BJP)."
        totalSeats={25}
      />
    </div>
  );
}
