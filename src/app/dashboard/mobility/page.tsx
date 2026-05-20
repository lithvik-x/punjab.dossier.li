"use client";

import { MetricCard, DataTable, Badge } from "@/components/ui/MetricCard";
import {
  mobilityKPI,
  urbanCommuterCorridors,
  seasonalMigration,
  seasonalCalendar,
  migrantSentiment,
  bjpMobilization,
  congressPosition,
  emigrationProfile,
  emigrationCorridors,
  nriEngagement,
  nriVoterImpact,
  pilgrimageCircuits,
  cattleMandiSchedule,
  majorFairs,
  campaignCalendar,
  criticalCampaignWindows,
  strategicInsight,
  mobilityDataGaps,
} from "@/lib/mobility-data";

export default function MobilityPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-white">
              10
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Movement & Mobility
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Daily commuters • Seasonal migration • NRI diaspora • Pilgrimage circuits • Mandi schedules • Campaign calendar
          </p>
        </div>
        <Badge variant="info">Punjab 2027</Badge>
      </div>

      {/* Urban Commuter Corridors */}
      <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-900/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-cyan-700 dark:text-cyan-400">Daily Urban Commuter Corridors</p>
            <p className="text-sm text-cyan-600 dark:text-cyan-300">Major commuter flows into Punjab&apos;s urban centers</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Chandigarh Tricity"
            value="500,000"
            subtitle="Daily commuters"
            color="bg-cyan-500"
          />
          <MetricCard
            title="Amritsar City"
            value="100,000"
            subtitle="Daily commuters"
            color="bg-cyan-500"
          />
          <MetricCard
            title="Ludhiana Industrial"
            value="Unquantified"
            subtitle="Textile & manufacturing"
            color="bg-slate-500"
          />
          <MetricCard
            title="Jalandhar-Phagwara"
            value="Unquantified"
            subtitle="Manufacturing corridor"
            color="bg-slate-500"
          />
        </div>

        <DataTable
          headers={["Corridor", "Daily Commuters", "Worker Profile"]}
          rows={urbanCommuterCorridors.map(c => [
            c.name,
            c.dailyCommuters > 0 ? c.dailyCommuters.toLocaleString() : "Not quantified",
            c.profile.join(", ")
          ])}
        />
      </div>

      {/* Rural Mandi Commute */}
      <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-green-700 dark:text-green-400">Rural Mandi Commute Patterns</p>
            <p className="text-sm text-green-600 dark:text-green-300">Seasonal agricultural labor movements to grain markets</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <MetricCard
            title="Distance Range"
            value={mobilityKPI.ruralMandiCommute.distanceRange}
            subtitle="Typical commute distance"
            color="bg-green-500"
          />
          <MetricCard
            title="Wheat Procurement"
            value="April-May"
            subtitle={mobilityKPI.ruralMandiCommute.procurementSeasons[0]}
            color="bg-amber-500"
          />
          <MetricCard
            title="Paddy Procurement"
            value="Oct-Nov"
            subtitle={mobilityKPI.ruralMandiCommute.procurementSeasons[1]}
            color="bg-orange-500"
          />
        </div>

        <div className="rounded-lg bg-green-100 p-4 dark:bg-green-900/30">
          <p className="text-sm text-green-700 dark:text-green-300">
            <strong>Campaign Note:</strong> {mobilityKPI.ruralMandiCommute.campaignNote}
          </p>
        </div>
      </div>

      {/* Seasonal Migration */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">Inbound Seasonal Migration</p>
            <p className="text-sm text-red-600 dark:text-red-300">Critical: Migrant labor from UP, Bihar, and other states</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Migrant Workers"
            value="1.2-1.3M"
            subtitle="12-13 lakh workers"
            color="bg-red-500"
          />
          <MetricCard
            title="Earnings/Season"
            value={seasonalMigration.earningsPerSeason}
            subtitle="Per worker"
            color="bg-orange-500"
          />
          <MetricCard
            title="Season Duration"
            value={seasonalMigration.seasonDuration}
            subtitle="Typical contract"
            color="bg-amber-500"
          />
          <MetricCard
            title="Origin States"
            value={seasonalMigration.originStates.length}
            subtitle="Major sending states"
            color="bg-slate-500"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Origin States</p>
            <div className="flex flex-wrap gap-2">
              {seasonalMigration.originStates.map(state => (
                <Badge key={state} variant="info">{state}</Badge>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Source & Vintage</p>
            <p className="text-xs text-slate-500">{seasonalMigration.source}</p>
            <p className="text-xs text-slate-500">Data: {seasonalMigration.dataVintage}</p>
          </div>
        </div>
      </div>

      {/* Seasonal Calendar */}
      <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">Seasonal Migration Calendar</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">Year-round labor influx patterns</p>
          </div>
        </div>

        <DataTable
          headers={["Period", "Activity", "Migrant Influx", "Political Significance"]}
          rows={seasonalCalendar.map(entry => [
            entry.period,
            entry.activity,
            entry.migrantInflux,
            entry.migrantInflux.includes("Peak") ? "HIGH" : entry.migrantInflux.includes("200,000") ? "MEDIUM" : "LOW"
          ])}
        />
      </div>

      {/* Migrant Sentiment */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">Migrant Sentiment & Political Dynamics</p>
            <p className="text-sm text-red-600 dark:text-red-300">Rising anti-migrant sentiment and vote bank politics</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <MetricCard
            title="Sentiment"
            value={migrantSentiment.sentiment}
            color="bg-red-500"
          />
          <MetricCard
            title="Flashpoint Slogan"
            value={migrantSentiment.slogan}
            subtitle={`Year: ${migrantSentiment.year}`}
            color="bg-red-500"
          />
        </div>

        <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Flashpoint Incidents:</p>
          <div className="space-y-2">
            {migrantSentiment.flashpointIncidents.map((incident, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                {incident}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BJP vs Congress: Migrant Voter Strategy */}
      <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">BJP vs Congress: Migrant Voter Strategy</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">Competing approaches to migrant labor politics</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="danger">BJP Strategy</Badge>
            </div>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{bjpMobilization.strategy}</p>
            <div className="space-y-1 mt-3">
              <p className="text-xs text-slate-500">Target: {bjpMobilization.targetVoterPool}</p>
              <p className="text-xs text-slate-500">Origin: {bjpMobilization.originStates.join(", ")}</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="info">Congress Position</Badge>
            </div>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{congressPosition.position}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {congressPosition.challenges.map((challenge, idx) => (
                <Badge key={idx} variant="warning">{challenge}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emigration & NRI Diaspora */}
      <div className="rounded-xl border-2 border-teal-200 bg-teal-50 p-6 dark:border-teal-800 dark:bg-teal-900/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-teal-700 dark:text-teal-400">Emigration & NRI Diaspora</p>
            <p className="text-sm text-teal-600 dark:text-teal-300">International migration patterns and diaspora influence</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
          <MetricCard
            title="Rural Households with Emigrants"
            value={`${emigrationProfile.proportionOfRuralHouseholds}%`}
            subtitle={`Ranking: ${emigrationProfile.ranking}`}
            color="bg-teal-500"
          />
          <MetricCard
            title="Total Emigrants"
            value={emigrationProfile.totalEmigrants}
            subtitle={`Period: ${emigrationProfile.period}`}
            color="bg-teal-500"
          />
          <MetricCard
            title="NRI Engagement Peak"
            value={nriEngagement.peakSeason}
            subtitle={nriEngagement.coincidesWith}
            color="bg-cyan-500"
          />
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Primary Destinations:</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {emigrationProfile.primaryDestinations.map(dest => (
            <Badge key={dest} variant="info">{dest}</Badge>
          ))}
        </div>
      </div>

      {/* Emigration Corridors */}
      <div className="rounded-xl border-2 border-teal-200 bg-white p-6 dark:border-teal-700 dark:bg-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-teal-700 dark:text-teal-400">Emigration Corridors by Region</p>
            <p className="text-sm text-teal-600 dark:text-teal-300">Origin-destination migration flows</p>
          </div>
        </div>

        <DataTable
          headers={["Region", "Primary Destination", "Secondary", "Notes"]}
          rows={emigrationCorridors.map(c => [
            c.originRegion,
            c.primaryDestination,
            c.secondaryDestination || "—",
            c.notes
          ])}
        />
      </div>

      {/* NRI Voter Impact */}
      <div className="rounded-xl border-2 border-teal-200 bg-teal-50 p-6 dark:border-teal-800 dark:bg-teal-900/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-teal-700 dark:text-teal-400">NRI Voter Impact Assessment</p>
            <p className="text-sm text-teal-600 dark:text-teal-300">Diaspora influence on Punjab elections</p>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <div>
              <p className="text-xs text-slate-500 mb-1">Mechanism</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">{nriVoterImpact.mechanism}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">Strategic Note</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">{nriVoterImpact.strategicNote}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="warning">Concentration Region:</Badge>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{nriVoterImpact.concentrationRegion}</span>
          </div>
        </div>
      </div>

      {/* Sikh Pilgrimage Circuits */}
      <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-amber-700 dark:text-amber-400">Sikh Pilgrimage Circuits</p>
            <p className="text-sm text-amber-600 dark:text-amber-300">Major religious circuits and congregation sites</p>
          </div>
        </div>

        <div className="space-y-4">
          {pilgrimageCircuits.map(circuit => (
            <div key={circuit.id} className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-medium text-slate-700 dark:text-slate-300">{circuit.name}</h5>
                <Badge variant="info">{circuit.peakEvent}</Badge>
              </div>
              <div className="grid gap-2 md:grid-cols-3 mb-3">
                <div>
                  <p className="text-xs text-slate-500">Sites</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{circuit.sites.length} major sites</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Peak Attendance</p>
                  <p className="text-sm font-medium text-amber-600">{circuit.peakAttendance}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Daily Visitors</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{circuit.totalDailyVisitors}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {circuit.sites.slice(0, 3).map((site, idx) => (
                  <Badge key={idx} variant="default">{site.name}</Badge>
                ))}
                {circuit.sites.length > 3 && <Badge variant="default">+{circuit.sites.length - 3} more</Badge>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Cattle Mandi Schedule */}
      <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-green-700 dark:text-green-400">Weekly Cattle Mandi Schedule</p>
            <p className="text-sm text-green-600 dark:text-green-300">Weekly market days by location</p>
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4 mb-6">
          {cattleMandiSchedule.map(mandi => (
            <div key={mandi.day} className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-green-700 dark:text-green-400">{mandi.day}</span>
              </div>
              <p className="text-xs text-slate-500">{mandi.locations.join(", ")}</p>
              <p className="text-xs text-slate-400">{mandi.districts.join(", ")}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-green-100 p-4 dark:bg-green-900/40">
          <p className="text-sm text-green-700 dark:text-green-300">
            <strong>Campaign Note:</strong> {mobilityKPI.mandiCampaignNote.note}
          </p>
        </div>
      </div>

      {/* Major Fairs & Congregations */}
      <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-purple-700 dark:text-purple-400">Major Fairs & Congregations</p>
            <p className="text-sm text-purple-600 dark:text-purple-300">Campaign opportunity calendar highlights</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
          <MetricCard
            title="Hola Mohalla"
            value="500,000+"
            subtitle="March • Anandpur Sahib"
            color="bg-purple-500"
          />
          <MetricCard
            title="Maghi Mela"
            value="500,000+"
            subtitle="Jan 14 • Muktsar"
            color="bg-red-500"
          />
          <MetricCard
            title="Chhapar Mela"
            value="1,000,000+"
            subtitle="Sept • Ludhiana"
            color="bg-amber-500"
          />
        </div>

        <DataTable
          headers={["Event", "Religion", "Location", "Timing", "Attendance", "Campaign Relevance"]}
          rows={majorFairs.slice(0, 8).map(fair => [
            fair.name,
            fair.religion,
            fair.location,
            fair.timing,
            fair.attendance,
            fair.campaignRelevance ? "HIGH" : "—"
          ])}
        />
      </div>

      {/* Campaign Opportunity Calendar */}
      <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-900/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-indigo-700 dark:text-indigo-400">Campaign Opportunity Calendar</p>
            <p className="text-sm text-indigo-600 dark:text-indigo-300">May 2026 - February 2027</p>
          </div>
        </div>

        <DataTable
          headers={["Period", "Mobility Event", "Recommended Campaign Action"]}
          rows={campaignCalendar.map(entry => [
            entry.period,
            entry.mobilityEvent,
            entry.campaignAction
          ])}
        />
      </div>

      {/* Critical Campaign Windows */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">Critical Campaign Windows</p>
            <p className="text-sm text-red-600 dark:text-red-300">Priority actions for maximum impact</p>
          </div>
        </div>

        <div className="space-y-4">
          {criticalCampaignWindows.map((window, idx) => (
            <div key={idx} className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="danger">CRITICAL</Badge>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{window.period}</span>
                </div>
                <span className="text-sm text-slate-500">Expected: {window.expectedTurnout}</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{window.mobilityEvent}</p>
              <p className="text-sm text-indigo-600 dark:text-indigo-400"><strong>Action:</strong> {window.campaignAction}</p>
              <p className="text-xs text-slate-500 mt-2"><strong>Regional Focus:</strong> {window.regionalFocus}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Insight */}
      <div className="rounded-xl border-2 border-cyan-200 bg-cyan-100 p-6 dark:border-cyan-700 dark:bg-cyan-900/40">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-cyan-800 dark:text-cyan-300">Strategic Insight</p>
            <p className="text-sm text-cyan-700 dark:text-cyan-400">Maghi Mela January 2027</p>
          </div>
        </div>

        <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
          <p><strong>Event:</strong> {strategicInsight.event}</p>
          <p><strong>Significance:</strong> {strategicInsight.significance}</p>
          <p><strong>Regional Implication:</strong> {strategicInsight.regionalImplication}</p>
          <p><strong>Recommended Action:</strong> {strategicInsight.congressAction}</p>
        </div>
      </div>

      {/* Data Gaps */}
      <div className="rounded-xl border-2 border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-slate-700 dark:text-slate-300">Mobility Data Gaps</p>
            <p className="text-sm text-slate-500">Areas requiring verification</p>
          </div>
        </div>

        <div className="space-y-3">
          {mobilityDataGaps.map((gap, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700">
              <Badge variant="warning">NEEDS VERIFICATION</Badge>
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{gap.dataPoint}</p>
                <p className="text-xs text-slate-500 mt-1">{gap.verificationNeeded}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sources */}
      <div className="rounded-xl border border-slate-200 bg-slate-100 p-6 dark:border-slate-600 dark:bg-slate-700">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Data Sources</p>
        <div className="space-y-1">
          {mobilityKPI.sources.map((source, idx) => (
            <p key={idx} className="text-xs text-slate-500">{source}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
