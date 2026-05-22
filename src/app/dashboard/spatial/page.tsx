"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import {
  MapPin,
  Users,
  Vote,
  Map,
  Route,
  Timer,
  Flag,
  Truck,
  Calendar,
  Award,
  Moon,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Droplets,
  Mountain,
  Trees,
  ChevronRight,
  Activity,
} from "lucide-react";
import {
  CAMPAIGN_SPATIAL_METADATA,
  PUNJAB_GEOGRAPHY,
  CAMPAIGN_CORRIDORS,
  INTER_CONSTITUENCY_DISTANCES,
  CAMPAIGN_CIRCUITS,
  RALLY_VENUES,
  ACCESSIBILITY_CONSTRAINTS,
  BOOTH_DISTRIBUTION,
  D2D_CLUSTER_TYPES,
  D2D_PHASES,
  D2D_REQUIREMENTS,
  VEHICLE_FLEET,
  FUEL_BUDGET,
  MARKET_DAYS,
  FESTIVAL_CALENDAR,
  LEADER_CATEGORIES,
  REGIONAL_TIME_ALLOCATION,
  SEAT_TARGETS,
  NIGHT_HALT_HUBS,
  SPATIAL_ADVANTAGES,
  SPATIAL_CHALLENGES,
  PRIORITY_ACTIONS,
  VERIFICATION_ITEMS,
  CAMPAIGN_SPATIAL_STATS,
} from "@/lib/campaign-spatial-data";
import {
  WATER_HAZARDS_METADATA,
  GROUNDWATER_STATS,
  FLOOD_STATS,
  BLOCK_CATEGORIES,
  SAFE_DISTRICTS,
  WATER_TABLE_DECLINE,
  FREE_ELECTRICITY_NEXUS,
  URANIUM_CONTAMINATION,
  CONTAMINANT_DATA,
  MAJOR_CANALS,
  CANAL_RELINING_PROJECTS,
  CANAL_IRRIGATION_DATA,
  MAJOR_RIVERS,
  MAJOR_RESERVOIRS,
  FLOOD_DATA,
  SEISMIC_HAZARD,
  DROUGHT_PRONE_AREAS,
  ELECTORAL_IMPLICATIONS,
} from "@/lib/water-hazards-data";

export default function SpatialCampaignPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="border-b border-slate-200 pb-4"
      >
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Spatial Campaign Optimization
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          {CAMPAIGN_SPATIAL_METADATA.pillar} | Task: {CAMPAIGN_SPATIAL_METADATA.task}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <Badge variant="success">{CAMPAIGN_SPATIAL_METADATA.status}</Badge>
          <span className="text-sm text-slate-400">Updated: {CAMPAIGN_SPATIAL_METADATA.date}</span>
        </div>
      </motion.div>

      {/* Key Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Punjab Area"
            value={CAMPAIGN_SPATIAL_STATS.punjabArea}
            subtitle="Across 23 districts"
            color="blue"
          />
          <MetricCard
            title="Constituencies"
            value={CAMPAIGN_SPATIAL_STATS.constituencies}
            subtitle="117 Assembly seats"
            color="emerald"
          />
          <MetricCard
            title="Polling Stations"
            value={CAMPAIGN_SPATIAL_STATS.pollingStations}
            subtitle="~200 booths per constituency"
            color="purple"
          />
          <MetricCard
            title="D2D Volunteers Needed"
            value={CAMPAIGN_SPATIAL_STATS.totalD2DVolunteersNeeded}
            subtitle="Statewide for full coverage"
            color="orange"
          />
        </div>
      </motion.div>

      {/* Road Network */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Map className="h-5 w-5" />
          Punjab Road Network
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <MetricCard
            title="National Highways"
            value={`${PUNJAB_GEOGRAPHY.roadNetwork.nationalHighways} km`}
            subtitle="NH-44 primary spine"
            color="blue"
          />
          <MetricCard
            title="State Highways"
            value={`${PUNJAB_GEOGRAPHY.roadNetwork.stateHighways} km`}
            subtitle="Plus extensive MDRs"
            color="cyan"
          />
          <MetricCard
            title="Average Elevation"
            value={`${PUNJAB_GEOGRAPHY.averageElevation}m`}
            subtitle="Flat alluvial terrain"
            color="cyan"
          />
        </div>
      </motion.section>

      {/* Campaign Corridors */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Route className="h-5 w-5" />
          Key Campaign Corridors
        </h2>
        <DataTable
          headers={["Corridor", "NH/Route", "Distance", "Travel Time", "Constituencies Served"]}
          rows={CAMPAIGN_CORRIDORS.map((c) => [
            c.name,
            c.nh,
            `${c.distance} km`,
            c.travelTime,
            c.constituenciesServed,
          ])}
          caption="Primary routes for campaign routing across Punjab"
        />
      </motion.section>

      {/* Inter-Constituency Distances */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Timer className="h-5 w-5" />
          Inter-Constituency Travel Times
        </h2>
        <DataTable
          headers={["Distance Type", "Range (km)", "Travel Time"]}
          rows={INTER_CONSTITUENCY_DISTANCES.map((d) => [
            d.type.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
            d.distanceRange,
            d.travelTime,
          ])}
        />
      </motion.section>

      {/* Campaign Circuits */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.25 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          5 Campaign Circuits
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {CAMPAIGN_CIRCUITS.map((circuit) => (
            <Card key={circuit.id} className="bg-white dark:bg-slate-800">
              <CardContent className="pt-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Circuit {circuit.id}: {circuit.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Hub: {circuit.hub}
                    </p>
                  </div>
                  <Badge
                    variant={
                      circuit.strategicPriority === "CRITICAL"
                        ? "danger"
                        : circuit.strategicPriority === "HIGH"
                          ? "warning"
                          : "info"
                    }
                  >
                    {circuit.strategicPriority}
                  </Badge>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Constituencies:</span>
                    <span className="font-medium">{circuit.constituencies}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Duration:</span>
                    <span className="font-medium">{circuit.circuitDuration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Coverage:</span>
                    <span className="font-medium text-right text-xs">{circuit.coverage}</span>
                  </div>
                </div>
                <p className="mt-3 border-t border-slate-100 pt-3 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-400">
                  {circuit.strategicNote}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Rally Venues */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Flag className="h-5 w-5" />
          Major Rally Venues
        </h2>
        <DataTable
          headers={["Venue", "Location", "Region", "Capacity", "Accessibility"]}
          rows={RALLY_VENUES.map((v) => [v.name, v.location, v.region, v.capacity, v.accessibility])}
          caption="Recommended rally venues by region"
        />
      </motion.section>

      {/* Accessibility Constraints */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.35 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Accessibility Constraints
        </h2>
        <DataTable
          headers={["Factor", "Impact", "Mitigation"]}
          rows={ACCESSIBILITY_CONSTRAINTS.map((c) => [c.factor, c.impact, c.mitigation])}
          caption="Planning considerations for campaign routing"
        />
      </motion.section>

      {/* Booth Distribution */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Vote className="h-5 w-5" />
          Booth-Level D2D Parameters
        </h2>
        <DataTable
          headers={["Area Type", "Booths/Constituency", "Voters/Booth", "D2D Time/Booth"]}
          rows={BOOTH_DISTRIBUTION.map((b) => [
            b.areaType.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
            b.avgBoothsPerConstituency,
            b.votersPerBooth,
            b.d2dTimePerBooth,
          ])}
        />
      </motion.section>

      {/* D2D Phases */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.45 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Activity className="h-5 w-5" />
          D2D Coverage Phases (Per Constituency)
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {D2D_PHASES.map((phase) => (
            <Card key={phase.phase} className="bg-white dark:bg-slate-800">
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">Phase {phase.phase}</span>
                  <span className="text-xs text-slate-400">{phase.duration}</span>
                </div>
                <p className="mt-2 text-sm font-medium">{phase.activity}</p>
                <p className="mt-1 text-xs text-slate-500">
                  {phase.teamSize} | {phase.targetBooths} booths
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="bg-slate-50 dark:bg-slate-800">
          <CardContent className="pt-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <strong>Total per constituency:</strong> {D2D_REQUIREMENTS.totalDays} | {D2D_REQUIREMENTS.volunteers} volunteers
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <strong>Statewide total:</strong> {D2D_REQUIREMENTS.statewideVolunteers} volunteers
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* D2D Cluster Types */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Users className="h-5 w-5" />
          D2D Cluster Strategy
        </h2>
        <DataTable
          headers={["Cluster Type", "Description", "Team Size", "Completion"]}
          rows={D2D_CLUSTER_TYPES.map((c) => [
            c.type.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
            c.description,
            c.teamSize,
            c.completionTime,
          ])}
        />
      </motion.section>

      {/* Vehicle Fleet */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.55 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Truck className="h-5 w-5" />
          Vehicle Fleet Requirements
        </h2>
        <DataTable
          headers={["Vehicle Type", "Purpose", "Qty", "Range", "Daily Cost"]}
          rows={VEHICLE_FLEET.map((v) => [
            v.vehicleType,
            v.purpose,
            v.qtyNeeded.toString(),
            v.range,
            v.dailyCost,
          ])}
          caption="5-circuit parallel operation fleet"
        />
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {FUEL_BUDGET.map((f) => (
            <MetricCard
              key={f.period}
              title={f.period}
              value={f.cost}
              subtitle={f.note}
              color="amber"
            />
          ))}
        </div>
      </motion.section>

      {/* Market Days */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Market Day Campaign Calendar
        </h2>
        <DataTable
          headers={["Day", "Key Mandi Towns", "Best Activity"]}
          rows={MARKET_DAYS.map((m) => [m.day, m.keyMandiTowns, m.bestCampaignActivity])}
          caption="Fixed weekly schedules - maximum farmer footfall guaranteed"
        />
      </motion.section>

      {/* Festival Calendar */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.65 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Festival Calendar (Oct 2026 - Feb 2027)
        </h2>
        <DataTable
          headers={["Date", "Festival", "Region Focus", "Campaign Opportunity", "Expected Attendance"]}
          rows={FESTIVAL_CALENDAR.map((f) => [
            f.date,
            f.festival,
            f.regionFocus,
            f.campaignOpportunity,
            f.expectedAttendance || "-",
          ])}
          caption="Major political mobilization opportunities"
        />
      </motion.section>

      {/* Leader Time Allocation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Timer className="h-5 w-5" />
          Leader Time Allocation
        </h2>
        <DataTable
          headers={["Category", "Role", "Available Days", "Constituency Allocation"]}
          rows={LEADER_CATEGORIES.map((l) => [
            l.category,
            l.role,
            l.availableDays,
            l.constituencyAllocation,
          ])}
        />
      </motion.section>

      {/* Seat Targets by Region */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.75 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="h-5 w-5" />
          Seat Targets by Region (Congress 2027)
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SEAT_TARGETS.map((s) => (
            <Card key={s.region} className="bg-white dark:bg-slate-800">
              <CardContent className="pt-5">
                <h3 className="font-semibold text-slate-900 dark:text-white">{s.region}</h3>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500">Total Seats:</span>
                    <span className="font-medium">{s.totalSeats}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500">2022 Result:</span>
                    <span className="font-medium text-rose-500">{s.congress2022} seats</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500">2027 Target:</span>
                    <span className="font-bold text-emerald-600">{s.target2027} seats</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500">Gains Needed:</span>
                    <span className="font-medium text-blue-600">+{s.gainsNeeded}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <ProgressBar
                    label="Target Progress"
                    value={parseInt(s.target2027.split("-")[0])}
                    max={s.totalSeats}
                    color="emerald"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
          <CardContent className="pt-4">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <strong>Strategic Focus:</strong> Malwa is the decisive battleground — 69 seats, Congress won only 8 in 2022. To reach 59+, Congress needs 35-40 from Malwa alone.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Regional Campaigner Days */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Campaigner Days by Region
        </h2>
        <DataTable
          headers={["Region", "Seats", "2022", "2027 Target", "CM Face Time", "Star Campaigner Time"]}
          rows={REGIONAL_TIME_ALLOCATION.map((r) => [
            r.region,
            r.seats,
            r.congress2022,
            r.target2027,
            r.campaignerDaysAllocation.split(";")[0],
            r.campaignerDaysAllocation.split(";")[1] || "-",
          ])}
        />
      </motion.section>

      {/* Night-Halt Hubs */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.85 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Moon className="h-5 w-5" />
          Night-Halt Hubs
        </h2>
        <DataTable
          headers={["Hub City", "Region", "Constituencies (60 min)", "Hotels", "Strategic Value"]}
          rows={NIGHT_HALT_HUBS.map((h) => [
            h.hubCity,
            h.region,
            `${h.constituenciesWithin60min}+`,
            h.hotelsDharamshalas,
            h.strategicValue,
          ])}
          caption="Recommended overnight stops for maximum coverage"
        />
      </motion.section>

      {/* Strategic Advantages */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.9 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-emerald-500" />
          Spatial Advantages for Congress
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SPATIAL_ADVANTAGES.map((adv, i) => (
            <Card key={i} className="border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20">
              <CardContent className="pt-4">
                <h3 className="font-medium text-emerald-800 dark:text-emerald-300">
                  {adv.title}
                </h3>
                <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-400">
                  {adv.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Spatial Challenges */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.95 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-rose-500" />
          Spatial Challenges for Congress
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {SPATIAL_CHALLENGES.map((challenge, i) => (
            <Card key={i} className="border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20">
              <CardContent className="pt-4">
                <h3 className="font-medium text-rose-800 dark:text-rose-300">
                  {challenge.title}
                </h3>
                <p className="mt-2 text-sm text-rose-700 dark:text-rose-400">
                  {challenge.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Priority Actions */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.0 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <CheckCircle className="h-5 w-5" />
          Recommended Priority Actions
        </h2>
        <DataTable
          headers={["#", "Action", "Timeline"]}
          rows={PRIORITY_ACTIONS.map((a) => [a.number.toString(), a.action, a.deadline])}
          caption="Immediate action items for spatial campaign readiness"
        />
      </motion.section>

      {/* Verification Items */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.05 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Data Gaps & Verification Items
        </h2>
        <DataTable
          headers={["Item", "Status", "Action Required"]}
          rows={VERIFICATION_ITEMS.map((v) => [
            v.item,
            <Badge
              key={v.item}
              variant={
                v.status === "NOT_BUILT" || v.status === "NOT_COLLECTED"
                  ? "danger"
                  : v.status === "VERIFICATION_NEEDED"
                    ? "warning"
                    : "info"
              }
            >
              {v.status.replace(/_/g, " ")}
            </Badge>,
            v.actionRequired,
          ])}
          caption="Items requiring additional research or verification"
        />
      </motion.section>

      {/* ==========================================
          WATER HAZARDS SECTION
          ========================================== */}

      {/* Water Hazards Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.1 }}
        className="border-b border-slate-200 pb-4"
      >
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Water Resources & Natural Hazards
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          {WATER_HAZARDS_METADATA.pillar} | Task: {WATER_HAZARDS_METADATA.task}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <Badge variant="warning">{WATER_HAZARDS_METADATA.status}</Badge>
          <span className="text-sm text-slate-400">Updated: {WATER_HAZARDS_METADATA.date}</span>
        </div>
      </motion.div>

      {/* Groundwater Crisis Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.15 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Droplets className="h-5 w-5" />
          Groundwater Crisis — The Core Electoral Issue
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Extraction Rate"
            value={GROUNDWATER_STATS.extractionRate}
            subtitle="Highest in India"
            color="rose"
          />
          <MetricCard
            title="Annual Withdrawal"
            value={GROUNDWATER_STATS.annualWithdrawal}
            subtitle="Against 16.8 BCM replenishable"
            color="orange"
          />
          <MetricCard
            title="Overexploited Blocks"
            value={GROUNDWATER_STATS.overexploitedBlocks}
            subtitle={GROUNDWATER_STATS.overexploitedPercentage}
            color="rose"
          />
          <MetricCard
            title="Uranium Exceedance"
            value={GROUNDWATER_STATS.uraniumExceedance}
            subtitle="Samples exceed WHO/BIS 30ppb limit"
            color="purple"
          />
        </div>
      </motion.section>

      {/* Block-Level Groundwater Categories */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Mountain className="h-5 w-5" />
          Groundwater Block Categories (GWRA 2025)
        </h2>
        <DataTable
          headers={["Category", "Threshold", "Blocks", "Percentage"]}
          rows={BLOCK_CATEGORIES.map((b) => [
            b.category,
            b.threshold,
            b.blocks.toString(),
            `${b.percentage}%`,
          ])}
          caption="153 assessment units — 72.55% are overexploited (7x national average)"
        />
      </motion.section>

      {/* Safe Districts */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.25 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-emerald-500" />
          Safe Groundwater Districts
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SAFE_DISTRICTS.map((d) => (
            <Card key={d.name} className="border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20">
              <CardContent className="pt-4">
                <h3 className="font-semibold text-emerald-800 dark:text-emerald-300">{d.name}</h3>
                <div className="mt-2 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-emerald-600 dark:text-emerald-400">Safe Blocks:</span>
                    <span className="font-medium">{d.blocks} ({d.safePercentage}%)</span>
                  </div>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400">{d.reason}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Water Table Decline */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.3 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <TrendingDown className="h-5 w-5" />
          Water Table Decline
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <MetricCard
            title="Statewide Decline"
            value={`${WATER_TABLE_DECLINE.statewideRate} m/year`}
            subtitle="ISADP study"
            color="amber"
          />
          <MetricCard
            title="Peak Decline"
            value={`${WATER_TABLE_DECLINE.localPeakDecline} cm/year`}
            subtitle="In worst-affected blocks"
            color="rose"
          />
          <MetricCard
            title="Area >15m Decline"
            value={`${WATER_TABLE_DECLINE.areaWithDeclineOver15m}%`}
            subtitle="Barnala, Bathinda, Hoshiarpur, Jalandhar"
            color="orange"
          />
        </div>
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
          <CardContent className="pt-4">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <strong>NGT Projection:</strong> Punjab&apos;s groundwater will drop below {WATER_TABLE_DECLINE.ngtProjectionDepth}m by {WATER_TABLE_DECLINE.ngtProjectionYear} at current rates
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Free Electricity Nexus */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.35 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Free Electricity-Groundwater Depletion Nexus
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <MetricCard
            title="Free Electricity Since"
            value={FREE_ELECTRICITY_NEXUS.policyYear}
            subtitle="Tubewells announced"
            color="blue"
          />
          <MetricCard
            title="Tubewell Irrigation"
            value={`${FREE_ELECTRICITY_NEXUS.currentTubewellPercentage}%`}
            subtitle="vs canal irrigation"
            color="cyan"
          />
          <MetricCard
            title="Agricultural Pumps"
            value={(FREE_ELECTRICITY_NEXUS.agriculturalPumpSets / 1000000).toFixed(2) + "M"}
            subtitle="1.45 million pump sets"
            color="purple"
          />
          <MetricCard
            title="Cotton Area Lost"
            value={`${(FREE_ELECTRICITY_NEXUS.cottonArea2024 / 100000).toFixed(0)}%`}
            subtitle="Of 2012 area (6L ha to 1L ha)"
            color="rose"
          />
        </div>
        <DataTable
          headers={["Metric", "Value"]}
          rows={[
            ["Groundwater for irrigation", `${FREE_ELECTRICITY_NEXUS.groundwaterForIrrigation} BCM (${FREE_ELECTRICITY_NEXUS.groundwaterForIrrigationPercentage}%)`],
            ["Paddy water requirement", FREE_ELECTRICITY_NEXUS.paddyWaterRequirement],
            ["Central Punjab paddy area", `${FREE_ELECTRICITY_NEXUS.centralPunjabPaddyAreaPercentage}% of cropped area`],
            ["Tubewell surpassed canal", `${FREE_ELECTRICITY_NEXUS.tubewellSurpassedCanalYear}`],
          ]}
          caption="Political implication: Every party promises free electricity; nobody talks about groundwater crash"
        />
      </motion.section>

      {/* Groundwater Contamination */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.4 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Groundwater Contamination — Public Health Crisis
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <MetricCard
            title="Uranium Exceedance"
            value={`${URANIUM_CONTAMINATION.exceedanceRate}%`}
            subtitle="62.50% post-monsoon (highest in India)"
            color="rose"
          />
          <MetricCard
            title="Districts Above Safe Limit"
            value={`${URANIUM_CONTAMINATION.districtsAboveSafeLimits}/23`}
            subtitle="Uranium >30 ppb WHO/BIS limit"
            color="orange"
          />
          <MetricCard
            title="Samples >100ppb"
            value={`${URANIUM_CONTAMINATION.samplesExceeding100ppb}%`}
            subtitle="Dangerous territory"
            color="rose"
          />
        </div>
        <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">Other Contaminants</h3>
        <DataTable
          headers={["Contaminant", "Safety Limit", "Districts", "Exceedance", "Health Impact"]}
          rows={CONTAMINANT_DATA.filter(c => c.name !== "Iron").map((c) => [
            c.name,
            c.safetyLimit,
            c.districtsAffected.toString(),
            `${c.exceedanceRate}%`,
            c.healthImpact,
          ])}
          caption="Bathinda: 46% samples fail nitrate test — one of India's 15 worst-affected districts"
        />
      </motion.section>

      {/* Canal Irrigation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.45 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Droplets className="h-5 w-5" />
          Canal Irrigation Network
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <MetricCard
            title="Tubewell vs Canal"
            value={`${CANAL_IRRIGATION_DATA.tubewellPercentage}% vs ${CANAL_IRRIGATION_DATA.canalPercentage}%`}
            subtitle="Dramatic reversal from pre-1972"
            color="cyan"
          />
          <MetricCard
            title="Rajasthan Feeder"
            value={`${CANAL_IRRIGATION_DATA.rajasthanFeederFlow.toLocaleString()} cusecs`}
            subtitle="Much flows to Rajasthan"
            color="cyan"
          />
          <MetricCard
            title="Relining Cost"
            value={`Rs ${(CANAL_RELINING_PROJECTS[0].cost + CANAL_RELINING_PROJECTS[1].cost).toLocaleString()} crore`}
            subtitle="Sirhind + Rajasthan Feeder (2018)"
            color="amber"
          />
        </div>
        <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">Major Canal Systems</h3>
        <DataTable
          headers={["Canal", "Source", "Command Area", "Key Districts"]}
          rows={MAJOR_CANALS.map((c) => [
            c.name,
            c.source.split(" (")[0],
            c.commandArea,
            c.keyDistricts.slice(0, 3).join(", ") + (c.keyDistricts.length > 3 ? "..." : ""),
          ])}
          caption="Head-reach farmers get reliable water; tail-end farmers forced to rely on tubewells"
        />
      </motion.section>

      {/* Major Rivers */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.5 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Droplets className="h-5 w-5" />
          Surface Water Resources
        </h2>
        <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">Major Rivers</h3>
        <DataTable
          headers={["River", "Origin", "Flow Through", "Key Districts"]}
          rows={MAJOR_RIVERS.map((r) => [r.name, r.origin, r.flowThrough, r.keyDistricts.slice(0, 3).join(", ")])}
          caption="Sutlej is the largest river in Punjab"
        />
        <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">Major Reservoirs</h3>
        <DataTable
          headers={["Dam", "River", "State", "Relevance"]}
          rows={MAJOR_RESERVOIRS.map((r) => [r.name, r.river, r.state, r.relevance])}
          caption="Bhakra provides irrigation + flood control for entire state"
        />
      </motion.section>

      {/* September 2025 Floods */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.55 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          September 2025 Floods — Worst in 4 Decades
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <MetricCard
            title="Lives Lost"
            value={FLOOD_STATS.livesLost}
            subtitle="September 2025"
            color="rose"
          />
          <MetricCard
            title="People Affected"
            value={FLOOD_STATS.peopleAffected}
            subtitle={`${FLOOD_STATS.villagesAffected}+ villages`}
            color="orange"
          />
          <MetricCard
            title="Agricultural Land"
            value={FLOOD_STATS.agriculturalLand}
            subtitle="Primarily paddy"
            color="amber"
          />
          <MetricCard
            title="Districts Hit"
            value={FLOOD_STATS.districtsHit}
            subtitle="All 23 districts declared flood-hit"
            color="rose"
          />
        </div>
        <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">Worst-Hit Districts</h3>
        <div className="flex flex-wrap gap-2">
          {FLOOD_DATA.impact.worstHitDistricts.map((d) => (
            <Badge key={d} variant="danger">{d}</Badge>
          ))}
        </div>
        <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">Causes</h3>
        <DataTable
          headers={["Factor", "Description"]}
          rows={FLOOD_DATA.causes.factors.slice(0, 5).map((f, i) => [`${i + 1}. ${f.split(" — ")[0]}`, f.split(" — ")[1] || ""])}
          caption="24% surplus monsoon + Himachal runoff + weak Dhussi Bandhs + illegal encroachments"
        />
        <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
          <CardContent className="pt-4">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <strong>Historical Pattern:</strong> Major floods in {FLOOD_DATA.causes.historicalPattern.join(", ")} — increasing frequency
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Seismic Hazard */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.6 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Mountain className="h-5 w-5" />
          Seismic Hazard
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-rose-800 dark:text-rose-300">Zone IV — High Risk</h3>
                <Badge variant="danger">MSK Intensity VIII</Badge>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {SEISMIC_HAZARD.zones[0].districts.map((d) => (
                  <span key={d} className="rounded bg-rose-200 px-2 py-0.5 text-xs text-rose-800 dark:bg-rose-800 dark:text-rose-200">
                    {d}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-amber-800 dark:text-amber-300">Zone III — Moderate Risk</h3>
                <Badge variant="warning">Moderate</Badge>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {SEISMIC_HAZARD.zones[1].districts.map((d) => (
                  <span key={d} className="rounded bg-amber-200 px-2 py-0.5 text-xs text-amber-800 dark:bg-amber-800 dark:text-amber-200">
                    {d}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          <strong>Vulnerable Reason:</strong> {SEISMIC_HAZARD.vulnerableReason}
        </p>
      </motion.section>

      {/* Drought Prone Areas */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.65 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Trees className="h-5 w-5" />
          Drought-Prone Areas
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {DROUGHT_PRONE_AREAS.map((area) => (
            <Card key={area.belt} className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
              <CardContent className="pt-4">
                <h3 className="font-semibold text-amber-800 dark:text-amber-300">{area.belt}</h3>
                <div className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-400">
                  <p><strong>Districts:</strong> {area.districts.join(", ")}</p>
                  <p><strong>Rainfall:</strong> {area.rainfallPattern}</p>
                  <p><strong>Groundwater:</strong> {area.groundwaterDependence}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Strategic Electoral Implications */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.7 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <ChevronRight className="h-5 w-5" />
          Strategic Electoral Implications
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {ELECTORAL_IMPLICATIONS.map((impl, i) => (
            <Card key={i} className="bg-white dark:bg-slate-800">
              <CardContent className="pt-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{impl.issue}</h3>
                  <Badge variant="info">Congress Opportunity</Badge>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  <strong>Electoral Angle:</strong> {impl.electoralAngle}
                </p>
                <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-400">
                  <strong>Opportunity:</strong> {impl.congressOpportunity}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.75 }}
        className="border-t border-slate-200 pt-4 text-center text-sm text-slate-400"
      >
        <p>
          Document prepared by Intelligence Research Agent for Punjab Congress 2027 Election Intelligence Project.
        </p>
        <p className="mt-1">Serves as foundation for operational campaign planning in Phase C (Campaign Strategy).</p>
      </motion.div>
    </div>
  );
}
