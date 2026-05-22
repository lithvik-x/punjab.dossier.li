"use client";

import { Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Megaphone, Smartphone, Car, Flag, Shield, FileCheck, AlertTriangle, CheckCircle } from "lucide-react";

export default function ResourcesLogisticsPage() {
  return (
    <div className="space-y-8">
      {/* MP9-008: Rally Venue & Device Procurement */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Megaphone className="h-5 w-5 text-rose-600" />
              MP9-008: Rally Venue Specifications & Device Procurement
            </CardTitle>
            <p className="text-sm text-rose-600 dark:text-rose-400">
              Event logistics • Material management • Vendor strategy
            </p>
          </CardHeader>
          <CardContent>
            {/* Rally Venue Specifications */}
            <h4 className="mt-4 font-semibold text-rose-900 dark:text-rose-100">Rally Venue Specifications (MP9-008)</h4>
            <div className="mt-3 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-semibold text-rose-600">Jumbo Rally (State-Level)</p>
                <div className="mt-2 space-y-1 text-xs text-slate-600">
                  <p>Expected turnout: 25,000-50,000</p>
                  <p>Venue: Stadium/open ground (2-5 acres)</p>
                  <p>Stage: 30x20 ft with LED backdrop</p>
                  <p>Sound: 50,000W system (2 speakers)</p>
                  <p>Security: 200+ personnel</p>
                  <p>Budget: Rs 8-15 L per event</p>
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-semibold text-rose-600">District Rally</p>
                <div className="mt-2 space-y-1 text-xs text-slate-600">
                  <p>Expected turnout: 5,000-15,000</p>
                  <p>Venue: College ground/public park</p>
                  <p>Stage: 20x15 ft standard</p>
                  <p>Sound: 20,000W system</p>
                  <p>Security: 75-100 personnel</p>
                  <p>Budget: Rs 2-5 L per event</p>
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-semibold text-rose-600">Nukkad Sabah (Booth-Level)</p>
                <div className="mt-2 space-y-1 text-xs text-slate-600">
                  <p>Expected turnout: 200-500</p>
                  <p>Venue: Village chaupal/intersection</p>
                  <p>Stage: Portable podium (6x4 ft)</p>
                  <p>Sound: Portable 5,000W system</p>
                  <p>Security: 10-15 volunteers</p>
                  <p>Budget: Rs 15-30 K per event</p>
                </div>
              </div>
            </div>

            {/* Device Procurement Table */}
            <h4 className="mt-6 font-semibold text-rose-900 dark:text-rose-100">Device Procurement Table (MP9-006, MP9-008)</h4>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-white dark:bg-slate-800">
                    <th className="px-3 py-2 text-left font-medium text-slate-600">Item</th>
                    <th className="px-3 py-2 text-left font-medium text-slate-600">Quantity</th>
                    <th className="px-3 py-2 text-left font-medium text-slate-600">Unit Cost</th>
                    <th className="px-3 py-2 text-left font-medium text-slate-600">Total (117 ACs)</th>
                    <th className="px-3 py-2 text-left font-medium text-slate-600">Vendor</th>
                  </tr>
                </thead>
                <tbody className="space-y-1">
                  <tr className="bg-white dark:bg-slate-800">
                    <td className="px-3 py-2">Smartphone (Field Staff)</td>
                    <td className="px-3 py-2">350-400 units</td>
                    <td className="px-3 py-2">Rs 8-12K</td>
                    <td className="px-3 py-2">Rs 28-48 L</td>
                    <td className="px-3 py-2">Bulk corporate deal</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <td className="px-3 py-2">4G Data SIMs (Annual)</td>
                    <td className="px-3 py-2">400-500</td>
                    <td className="px-3 py-2">Rs 3-5K/yr</td>
                    <td className="px-3 py-2">Rs 12-25 L</td>
                    <td className="px-3 py-2">Airtel/Jio B2B</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800">
                    <td className="px-3 py-2">Portable Projector + Screen</td>
                    <td className="px-3 py-2">117 sets</td>
                    <td className="px-3 py-2">Rs 25-40K</td>
                    <td className="px-3 py-2">Rs 29-47 L</td>
                    <td className="px-3 py-2">Rate contract</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <td className="px-3 py-2">Portable Sound System</td>
                    <td className="px-3 py-2">117 sets</td>
                    <td className="px-3 py-2">Rs 15-25K</td>
                    <td className="px-3 py-2">Rs 18-29 L</td>
                    <td className="px-3 py-2">Rate contract</td>
                  </tr>
                  <tr className="bg-white dark:bg-slate-800">
                    <td className="px-3 py-2">LED Display Van (Rental)</td>
                    <td className="px-3 py-2">234 units (2/AC)</td>
                    <td className="px-3 py-2">Rs 18-30K/mo</td>
                    <td className="px-3 py-2">Rs 1.9 L/AC (3mo)</td>
                    <td className="px-3 py-2">Local vendors</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <td className="px-3 py-2">Vehicle GPS Tracker</td>
                    <td className="px-3 py-2">350-400 units</td>
                    <td className="px-3 py-2">Rs 2-3K</td>
                    <td className="px-3 py-2">Rs 7-12 L</td>
                    <td className="px-3 py-2">TrackoMate/Geo-fy</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Material Cost Breakdown */}
            <h4 className="mt-6 font-semibold text-rose-900 dark:text-rose-100">Per Constituency Campaign Materials (MP9-008)</h4>
            <div className="mt-3 grid gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <p className="text-xs text-slate-500">Banners/Posters</p>
                <p className="text-lg font-bold text-rose-600">Rs 50K-1.5L</p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <p className="text-xs text-slate-500">T-Shirts/Apparel</p>
                <p className="text-lg font-bold text-rose-600">Rs 75K-2L</p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <p className="text-xs text-slate-500">Flags/Badges</p>
                <p className="text-lg font-bold text-rose-600">Rs 25K-75K</p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <p className="text-xs text-slate-500">Giveaways/Custom</p>
                <p className="text-lg font-bold text-rose-600">Rs 1-3L</p>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-rose-100 p-3 dark:bg-rose-900/40">
              <p className="text-sm text-rose-700 dark:text-rose-300">
                <strong>Total statewide material:</strong> Rs 3.6-10.6 Cr | Vendor panels: 3+ vendors per district, 24-48hr rush order capability required.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* MP9-009: Nomination Filing & MCC Response */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card className="border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-purple-600" />
              MP9-009: Nomination Filing Assistance & MCC Violation Response
            </CardTitle>
            <p className="text-sm text-purple-600 dark:text-purple-400">
              ECI compliance • Pre-certification • 48-hour silence period • cVIGIL protocols
            </p>
          </CardHeader>
          <CardContent>
            {/* Nomination Filing Assistance */}
            <h4 className="mt-4 font-semibold text-purple-900 dark:text-purple-100">Nomination Filing Assistance (MP9-009)</h4>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-semibold text-purple-600">Required Documents Checklist</p>
                <div className="mt-2 space-y-1 text-xs text-slate-600">
                  <p>Form A: Nomination paper (Schedule III)</p>
                  <p>Form B: Affidavit (criminal records, assets)</p>
                  <p>Photo ID: Aadhaar/Voter ID/Passport</p>
                  <p>Address proof: Utility bill/bank statement</p>
                  <p>Party affiliation: Congress ticket letter</p>
                  <p>Symbol allotment: AICC authority letter</p>
                  <p>Filing date: 4th to 10th day after notice</p>
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-semibold text-purple-600">Filing Support Structure</p>
                <div className="mt-2 space-y-1 text-xs text-slate-600">
                  <p>23 District Legal Nodal Points (5 lawyers each)</p>
                  <p>115 total lawyers for Punjab</p>
                  <p>10 Senior Advocates: Punjab & Haryana HC</p>
                  <p>2-3 Senior Advocates on standby: Supreme Court</p>
                  <p>Real-time legal ops center at PPCC (MCC period)</p>
                  <p>12-hour shifts during filing window</p>
                </div>
              </div>
            </div>

            {/* MCC Violation Response Protocols */}
            <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">MCC Violation Response Protocols (MP9-009)</h4>
            <div className="mt-3 grid gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <Badge variant="danger">Level 1: Prevent</Badge>
                <p className="mt-2 text-xs text-slate-600">Pre-certification workflow for all ads. 72hr advance submission to DEO. Mandatory legal review for attack scripts.</p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <Badge variant="warning">Level 2: Detect</Badge>
                <p className="mt-2 text-xs text-slate-600">230+ cVIGIL operators (10/district). GPS-verified complaint filing. Evidence capture training.</p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <Badge variant="info">Level 3: Report</Badge>
                <p className="mt-2 text-xs text-slate-600">cVIGIL app to DEO. Target: AAP Rs 1,000/mo women entitlement, broken promises documentation.</p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <Badge variant="success">Level 4: Respond</Badge>
                <p className="mt-2 text-xs text-slate-600">3 advocate teams per administrative division. 2-hour on-ground response. Post-election use for petitions.</p>
              </div>
            </div>

            {/* 48-Hour Silence Period */}
            <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">48-Hour Silence Period Rules (MP9-009)</h4>
            <div className="mt-3 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-rose-600">PROHIBITED Activities</p>
                  <div className="mt-2 space-y-1 text-xs text-slate-600">
                    <p>Public rallies, meetings, processions</p>
                    <p>Print/electronic/social media ads</p>
                    <p>Door-to-door canvassing</p>
                    <p>Campaign material distribution</p>
                    <p>Opinion polls, exit polls</p>
                    <p>Likes/shares/engagement with political content</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-600">PERMITTED Activities</p>
                  <div className="mt-2 space-y-1 text-xs text-slate-600">
                    <p>Static hoardings (installed before silence)</p>
                    <p>Candidate at own residence</p>
                    <p>Essential election official duties</p>
                    <p>Media reporting (without campaigning)</p>
                    <p>EVM counting on polling day</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pre-Certification Workflow */}
            <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">Pre-Certification Workflow (Updated March 2026)</h4>
            <div className="mt-3 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white font-bold">1</div>
                  <span className="text-slate-600">Content draft + legal review</span>
                </div>
                <div className="h-px flex-1 bg-slate-300 mx-2"></div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white font-bold">2</div>
                  <span className="text-slate-600">Submit to CEO/DEO (72hr before)</span>
                </div>
                <div className="h-px flex-1 bg-slate-300 mx-2"></div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white font-bold">3</div>
                  <span className="text-slate-600">Platform submission (Meta/Google)</span>
                </div>
                <div className="h-px flex-1 bg-slate-300 mx-2"></div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white font-bold">4</div>
                  <span className="text-slate-600">Deploy after certificate</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
