"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { MetricCard, DataTable, Badge } from "@/components/ui/MetricCard";
import {
  Users,
  Wheat,
  AlertTriangle,
  Calendar,
  AlertCircle,
  BarChart3,
  Globe,
  Map,
  Star,
  Church,
  CalendarDays,
  Lightbulb,
  HelpCircle,
  FileText,
  Truck,
  UsersRound,
  ArrowRight,
} from "lucide-react";
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
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-white">
              <Users className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Movement & Mobility
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Daily commuters • Seasonal migration • NRI diaspora • Pilgrimage circuits • Mandi schedules • Campaign calendar
          </p>
        </div>
        <Badge variant="info">Punjab 2027</Badge>
      </motion.div>

      {/* Urban Commuter Corridors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card className="border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-900/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white">
                <UsersRound className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-cyan-700 dark:text-cyan-400">Daily Urban Commuter Corridors</CardTitle>
                <p className="text-sm text-cyan-600 dark:text-cyan-300">Major commuter flows into Punjab&apos;s urban centers</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
              <MetricCard
                title="Chandigarh Tricity"
                value="500,000"
                subtitle="Daily commuters"
                color="cyan"
              />
              <MetricCard
                title="Amritsar City"
                value="100,000"
                subtitle="Daily commuters"
                color="cyan"
              />
              <MetricCard
                title="Ludhiana Industrial"
                value="Unquantified"
                subtitle="Textile & manufacturing"
                color="cyan"
              />
              <MetricCard
                title="Jalandhar-Phagwara"
                value="Unquantified"
                subtitle="Manufacturing corridor"
                color="cyan"
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
          </CardContent>
        </Card>
      </motion.div>

      {/* Rural Mandi Commute */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        <Card className="border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white">
                <Wheat className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-emerald-700 dark:text-emerald-400">Rural Mandi Commute Patterns</CardTitle>
                <p className="text-sm text-emerald-600 dark:text-emerald-300">Seasonal agricultural labor movements to grain markets</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              <MetricCard
                title="Distance Range"
                value={mobilityKPI.ruralMandiCommute.distanceRange}
                subtitle="Typical commute distance"
                color="emerald"
              />
              <MetricCard
                title="Wheat Procurement"
                value="April-May"
                subtitle={mobilityKPI.ruralMandiCommute.procurementSeasons[0]}
                color="amber"
              />
              <MetricCard
                title="Paddy Procurement"
                value="Oct-Nov"
                subtitle={mobilityKPI.ruralMandiCommute.procurementSeasons[1]}
                color="orange"
              />
            </div>

            <div className="rounded-lg bg-emerald-100 p-4 dark:bg-emerald-900/30">
              <p className="text-sm text-emerald-700 dark:text-emerald-300">
                <strong>Campaign Note:</strong> {mobilityKPI.ruralMandiCommute.campaignNote}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Seasonal Migration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card className="border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-rose-700 dark:text-rose-400">Inbound Seasonal Migration</CardTitle>
                <p className="text-sm text-rose-600 dark:text-rose-300">Critical: Migrant labor from UP, Bihar, and other states</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
              <MetricCard
                title="Migrant Workers"
                value="1.2-1.3M"
                subtitle="12-13 lakh workers"
                color="rose"
              />
              <MetricCard
                title="Earnings/Season"
                value={seasonalMigration.earningsPerSeason}
                subtitle="Per worker"
                color="orange"
              />
              <MetricCard
                title="Season Duration"
                value={seasonalMigration.seasonDuration}
                subtitle="Typical contract"
                color="amber"
              />
              <MetricCard
                title="Origin States"
                value={seasonalMigration.originStates.length}
                subtitle="Major sending states"
                color="rose"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2 mb-6">
              <Card className="bg-white dark:bg-slate-800">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Origin States</p>
                  <div className="flex flex-wrap gap-2">
                    {seasonalMigration.originStates.map(state => (
                      <Badge key={state} variant="info">{state}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-slate-800">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Source & Vintage</p>
                  <p className="text-xs text-slate-500">{seasonalMigration.source}</p>
                  <p className="text-xs text-slate-500">Data: {seasonalMigration.dataVintage}</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Seasonal Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.25 }}
      >
        <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-orange-700 dark:text-orange-400">Seasonal Migration Calendar</CardTitle>
                <p className="text-sm text-orange-600 dark:text-orange-300">Year-round labor influx patterns</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <DataTable
              headers={["Period", "Activity", "Migrant Influx", "Political Significance"]}
              rows={seasonalCalendar.map(entry => [
                entry.period,
                entry.activity,
                entry.migrantInflux,
                entry.migrantInflux.includes("Peak") ? "HIGH" : entry.migrantInflux.includes("200,000") ? "MEDIUM" : "LOW"
              ])}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Migrant Sentiment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card className="border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-white">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-rose-700 dark:text-rose-400">Migrant Sentiment & Political Dynamics</CardTitle>
                <p className="text-sm text-rose-600 dark:text-rose-300">Rising anti-migrant sentiment and vote bank politics</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 mb-6">
              <MetricCard
                title="Sentiment"
                value={migrantSentiment.sentiment}
                color="rose"
              />
              <MetricCard
                title="Flashpoint Slogan"
                value={migrantSentiment.slogan}
                subtitle={`Year: ${migrantSentiment.year}`}
                color="rose"
              />
            </div>

            <Card className="bg-white dark:bg-slate-800">
              <CardContent className="pt-4">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Flashpoint Incidents:</p>
                <div className="space-y-2">
                  {migrantSentiment.flashpointIncidents.map((incident, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                      {incident}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </motion.div>

      {/* BJP vs Congress: Migrant Voter Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.35 }}
      >
        <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-orange-700 dark:text-orange-400">BJP vs Congress: Migrant Voter Strategy</CardTitle>
                <p className="text-sm text-orange-600 dark:text-orange-300">Competing approaches to migrant labor politics</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-white dark:bg-slate-800">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="danger">BJP Strategy</Badge>
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{bjpMobilization.strategy}</p>
                  <div className="space-y-1 mt-3">
                    <p className="text-xs text-slate-500">Target: {bjpMobilization.targetVoterPool}</p>
                    <p className="text-xs text-slate-500">Origin: {bjpMobilization.originStates.join(", ")}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-slate-800">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="info">Congress Position</Badge>
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{congressPosition.position}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {congressPosition.challenges.map((challenge, idx) => (
                      <Badge key={idx} variant="warning">{challenge}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Emigration & NRI Diaspora */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card className="border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-900/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-cyan-700 dark:text-cyan-400">Emigration & NRI Diaspora</CardTitle>
                <p className="text-sm text-cyan-600 dark:text-cyan-300">International migration patterns and diaspora influence</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
              <MetricCard
                title="Rural Households with Emigrants"
                value={`${emigrationProfile.proportionOfRuralHouseholds}%`}
                subtitle={`Ranking: ${emigrationProfile.ranking}`}
                color="cyan"
              />
              <MetricCard
                title="Total Emigrants"
                value={emigrationProfile.totalEmigrants}
                subtitle={`Period: ${emigrationProfile.period}`}
                color="cyan"
              />
              <MetricCard
                title="NRI Engagement Peak"
                value={nriEngagement.peakSeason}
                subtitle={nriEngagement.coincidesWith}
                color="cyan"
              />
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Primary Destinations:</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {emigrationProfile.primaryDestinations.map(dest => (
                <Badge key={dest} variant="info">{dest}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Emigration Corridors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.45 }}
      >
        <Card className="border-cyan-200 bg-white dark:border-cyan-700 dark:bg-slate-800">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white">
                <Map className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-cyan-700 dark:text-cyan-400">Emigration Corridors by Region</CardTitle>
                <p className="text-sm text-cyan-600 dark:text-cyan-300">Origin-destination migration flows</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <DataTable
              headers={["Region", "Primary Destination", "Secondary", "Notes"]}
              rows={emigrationCorridors.map(c => [
                c.originRegion,
                c.primaryDestination,
                c.secondaryDestination || "—",
                c.notes
              ])}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* NRI Voter Impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card className="border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-900/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white">
                <Star className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-cyan-700 dark:text-cyan-400">NRI Voter Impact Assessment</CardTitle>
                <p className="text-sm text-cyan-600 dark:text-cyan-300">Diaspora influence on Punjab elections</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Card className="bg-white dark:bg-slate-800">
              <CardContent className="pt-4">
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
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </motion.div>

      {/* Sikh Pilgrimage Circuits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.55 }}
      >
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white">
                <Church className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-amber-700 dark:text-amber-400">Sikh Pilgrimage Circuits</CardTitle>
                <p className="text-sm text-amber-600 dark:text-amber-300">Major religious circuits and congregation sites</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pilgrimageCircuits.map(circuit => (
                <Card key={circuit.id} className="bg-white dark:bg-slate-800">
                  <CardContent className="pt-4">
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Weekly Cattle Mandi Schedule */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Card className="border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white">
                <CalendarDays className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-emerald-700 dark:text-emerald-400">Weekly Cattle Mandi Schedule</CardTitle>
                <p className="text-sm text-emerald-600 dark:text-emerald-300">Weekly market days by location</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4 mb-6">
              {cattleMandiSchedule.map(mandi => (
                <Card key={mandi.day} className="bg-white dark:bg-slate-800">
                  <CardContent className="pt-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">{mandi.day}</span>
                    </div>
                    <p className="text-xs text-slate-500">{mandi.locations.join(", ")}</p>
                    <p className="text-xs text-slate-400">{mandi.districts.join(", ")}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="rounded-lg bg-emerald-100 p-4 dark:bg-emerald-900/40">
              <p className="text-sm text-emerald-700 dark:text-emerald-300">
                <strong>Campaign Note:</strong> {mobilityKPI.mandiCampaignNote.note}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Major Fairs & Congregations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.65 }}
      >
        <Card className="border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-white">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-purple-700 dark:text-purple-400">Major Fairs & Congregations</CardTitle>
                <p className="text-sm text-purple-600 dark:text-purple-300">Campaign opportunity calendar highlights</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
              <MetricCard
                title="Hola Mohalla"
                value="500,000+"
                subtitle="March • Anandpur Sahib"
                color="purple"
              />
              <MetricCard
                title="Maghi Mela"
                value="500,000+"
                subtitle="Jan 14 • Muktsar"
                color="rose"
              />
              <MetricCard
                title="Chhapar Mela"
                value="1,000,000+"
                subtitle="Sept • Ludhiana"
                color="amber"
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
          </CardContent>
        </Card>
      </motion.div>

      {/* Campaign Opportunity Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white">
                <CalendarDays className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-blue-700 dark:text-blue-400">Campaign Opportunity Calendar</CardTitle>
                <p className="text-sm text-blue-600 dark:text-blue-300">May 2026 - February 2027</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <DataTable
              headers={["Period", "Mobility Event", "Recommended Campaign Action"]}
              rows={campaignCalendar.map(entry => [
                entry.period,
                entry.mobilityEvent,
                entry.campaignAction
              ])}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Critical Campaign Windows */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.75 }}
      >
        <Card className="border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-white">
                <AlertCircle className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-rose-700 dark:text-rose-400">Critical Campaign Windows</CardTitle>
                <p className="text-sm text-rose-600 dark:text-rose-300">Priority actions for maximum impact</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {criticalCampaignWindows.map((window, idx) => (
                <Card key={idx} className="bg-white dark:bg-slate-800">
                  <CardContent className="pt-4">
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Strategic Insight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        <Card className="border-cyan-200 bg-cyan-100 dark:border-cyan-700 dark:bg-cyan-900/40">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white">
                <Lightbulb className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-cyan-800 dark:text-cyan-300">Strategic Insight</CardTitle>
                <p className="text-sm text-cyan-700 dark:text-cyan-400">Maghi Mela January 2027</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
              <p><strong>Event:</strong> {strategicInsight.event}</p>
              <p><strong>Significance:</strong> {strategicInsight.significance}</p>
              <p><strong>Regional Implication:</strong> {strategicInsight.regionalImplication}</p>
              <p><strong>Recommended Action:</strong> {strategicInsight.congressAction}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Data Gaps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.85 }}
      >
        <Card className="border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-500 text-white">
                <HelpCircle className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-slate-700 dark:text-slate-300">Mobility Data Gaps</CardTitle>
                <p className="text-sm text-slate-500">Areas requiring verification</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mobilityDataGaps.map((gap, idx) => (
                <Card key={idx} className="bg-slate-50 dark:bg-slate-700">
                  <CardContent className="pt-3">
                    <div className="flex items-start gap-3">
                      <Badge variant="warning">NEEDS VERIFICATION</Badge>
                      <div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{gap.dataPoint}</p>
                        <p className="text-xs text-slate-500 mt-1">{gap.verificationNeeded}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Sources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.9 }}
      >
        <Card className="border-slate-200 bg-slate-100 dark:border-slate-600 dark:bg-slate-700">
          <CardContent className="pt-4">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Data Sources</p>
            <div className="space-y-1">
              {mobilityKPI.sources.map((source, idx) => (
                <p key={idx} className="text-xs text-slate-500">{source}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
