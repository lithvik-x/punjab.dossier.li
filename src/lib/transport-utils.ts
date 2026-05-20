// Transport Infrastructure Utility Functions
// Derived from: research-M2/MP1-foundational/geography/infra-transport.md

import { transportKPIData } from "./kpi-data";
import type {
  Airport,
  BusOperator,
  ConnectivityGap,
  MajorJunction,
  NewTrainService,
  RailLinkProject,
} from "@/types/infra-transport-types";

/**
 * Get all major junctions by category
 */
export function getJunctionsByCategory(category: "NSG-2" | "NSG-3" | "NSG-4"): MajorJunction[] {
  return transportKPIData.rail.majorJunctions.filter(j => j.category === category);
}

/**
 * Get NSG-2 major junctions (highest category in Punjab)
 */
export function getNSG2Junctions(): MajorJunction[] {
  return getJunctionsByCategory("NSG-2");
}

/**
 * Get airports by IATA code
 */
export function getAirportByIATA(iataCode: string): Airport | undefined {
  return transportKPIData.aviation.operationalAirports.find(a => a.iataCode === iataCode);
}

/**
 * Get all international airports
 */
export function getInternationalAirports(): Airport[] {
  return transportKPIData.aviation.operationalAirports.filter(a => a.type === "International");
}

/**
 * Get all domestic airports
 */
export function getDomesticAirports(): Airport[] {
  return transportKPIData.aviation.operationalAirports.filter(a => a.type === "Domestic");
}

/**
 * Get airports under UDAN scheme
 */
export function getUDANAirports(): Airport[] {
  const udanCities = transportKPIData.aviation.udanCoveredAirports;
  return transportKPIData.aviation.operationalAirports.filter(
    a => udanCities.some(city => a.name.toLowerCase().includes(city.toLowerCase()))
  );
}

/**
 * Get connectivity gaps by transport type
 */
export function getGapsByTransportType(
  transportType: "Rail" | "Road" | "Air" | "Suburban Rail" | "Last-Mile"
): ConnectivityGap[] {
  return transportKPIData.connectivity.criticalGaps.filter(gap => gap.transportType === transportType);
}

/**
 * Get all high severity gaps sorted by region
 */
export function getHighSeverityGapsSorted(): ConnectivityGap[] {
  return transportKPIData.connectivity.criticalGaps
    .filter(gap => gap.severity === "High")
    .sort((a, b) => a.region.localeCompare(b.region));
}

/**
 * Get border benefiting districts
 */
export function getBorderBenefitingDistricts(): string[] {
  return transportKPIData.road.borderRoads.benefitingDistricts;
}

/**
 * Get railway investment comparison
 */
export function getRailwayInvestmentMultiplier(): number {
  return transportKPIData.rail.averageInvestmentComparison.multiplier;
}

/**
 * Get new bus orders by operator
 */
export function getNewBusesByOperator(): { operator: string; buses: number }[] {
  return transportKPIData.publicTransport.stateBusOperators.map(op => ({
    operator: op.name,
    buses: op.newBuses2026,
  }));
}

/**
 * Get electric bus allocation by city
 */
export function getElectricBusAllocation(): { city: string; buses: number }[] {
  return transportKPIData.publicTransport.electricBusDeployment.cities.map(c => ({
    city: c.city,
    buses: c.busesSanctioned,
  }));
}

/**
 * Get total railway ongoing project value in crores
 */
export function getRailwayOngoingProjectValue(): number {
  return transportKPIData.rail.ongoingProjectValue;
}

/**
 * Get NH growth statistics
 */
export function getNHGrowthStats(): {
  length2020: number;
  length2024: number;
  growthPercent: number;
  newProjects: number;
} {
  return {
    length2020: transportKPIData.road.nationalHighways.growthFrom2020.length2020,
    length2024: transportKPIData.road.nationalHighways.growthFrom2020.length2024,
    growthPercent: transportKPIData.road.nationalHighways.growthFrom2020.growthPercent,
    newProjects: transportKPIData.road.nationalHighways.ongoingProjects,
  };
}

/**
 * Get FCI freight statistics
 */
export function getFCIFreightStats(): {
  rakesPerMonth: number;
  tonnagePerRake: string;
  annualCapacity: string;
} {
  return {
    rakesPerMonth: transportKPIData.rail.freightData.fciDispatchesRakesPerMonth,
    tonnagePerRake: transportKPIData.rail.freightData.fciTonnagePerRake,
    annualCapacity: transportKPIData.rail.freightData.annualFreightCapacity,
  };
}

/**
 * Get major highways list
 */
export function getMajorHighways(): { number: string; description: string; significance: string }[] {
  return transportKPIData.road.majorNationalHighways.map(h => ({
    number: h.number,
    description: h.description,
    significance: h.significance,
  }));
}

/**
 * Get rail link projects sorted by cost
 */
export function getRailLinkProjectsSorted(): RailLinkProject[] {
  return [...transportKPIData.rail.railLinkProjects].sort((a, b) => b.cost - a.cost);
}

/**
 * Get new train services by date
 */
export function getNewTrainServicesSorted(): NewTrainService[] {
  return [...transportKPIData.rail.newTrainServices].sort((a, b) => {
    // Put dated services before "Extended" services
    if (a.launchDate === "Extended") return 1;
    if (b.launchDate === "Extended") return -1;
    return a.launchDate.localeCompare(b.launchDate);
  });
}

/**
 * Get station redevelopment cost breakdown
 */
export function getStationRedevelopmentCosts(): { station: string; cost: number }[] {
  return transportKPIData.rail.stationRedevelopment
    .filter(s => s.stationName !== "30 stations total")
    .map(s => ({
      station: s.stationName,
      cost: s.cost,
    }));
}

/**
 * Check if district is in border road benefiting list
 */
export function isBorderBenefitDistrict(district: string): boolean {
  return transportKPIData.road.borderRoads.benefitingDistricts.some(
    d => d.toLowerCase() === district.toLowerCase()
  );
}

/**
 * Get congestion hotspots
 */
export function getCongestionHotspots(): string[] {
  return transportKPIData.road.congestionHotspots;
}

/**
 * Get ROBs/RUBs count since 2014
 */
export function getROBsCount(): number {
  return transportKPIData.road.railCrossings.robsConstructedSince2014;
}

/**
 * Get urban transport modes by status
 */
export function getUrbanTransportByStatus(
  status: "Operational" | "Growing" | "Declining" | "Planned" | "Not Available"
): { mode: string; coverage: string }[] {
  return transportKPIData.publicTransport.urbanLastMile
    .filter(m => m.status === status)
    .map(m => ({ mode: m.mode, coverage: m.coverage }));
}

/**
 * Get bus operator details
 */
export function getBusOperatorDetails(): BusOperator[] {
  return transportKPIData.publicTransport.stateBusOperators;
}

/**
 * Get total freight capacity annual
 */
export function getTotalFreightCapacity(): string {
  return transportKPIData.rail.freightData.annualFreightCapacity;
}
