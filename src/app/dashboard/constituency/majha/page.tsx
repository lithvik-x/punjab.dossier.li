import RegionConstituencies from "@/components/dashboard/RegionConstituencies";
import constituencies from "@/lib/constituencies.json";

export default function MajhaPage() {
  // Filter Majha constituencies from full dataset
  const majhaConstituencies = (constituencies as any[]).filter(
    ac => ac.region === "Majha"
  );

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
