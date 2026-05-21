"use client";

import { MetricCard, Badge } from "@/components/ui/MetricCard";

export default function CampaignBudgetPage() {
  return (
    <div className="space-y-8">
      {/* MP4-025: Campaign Budget (from MP4 Section 5) */}
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">
          Campaign Budget Estimate (MP4-025)
        </h3>
        <p className="mt-1 text-sm text-green-600 dark:text-green-400">
          Total: Rs 65-95 Crore
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Digital Campaign</p>
            <p className="text-lg font-bold text-cyan-600">Rs 4-6 Cr</p>
            <p className="text-xs text-slate-500">70% of near-term</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Rallies & Events</p>
            <p className="text-lg font-bold text-cyan-600">Rs 25-35 Cr</p>
            <p className="text-xs text-slate-500">117 constituencies × 3-5 events</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Booth-Level Contact</p>
            <p className="text-lg font-bold text-cyan-600">Rs 15-20 Cr</p>
            <p className="text-xs text-slate-500">25K booth + 1.25L workers</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Media Buy & Ads</p>
            <p className="text-lg font-bold text-cyan-600">Rs 15-25 Cr</p>
            <p className="text-xs text-slate-500">Phase 3-4 paid media</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Manifesto & Comms</p>
            <p className="text-lg font-bold text-cyan-600">Rs 2-3 Cr</p>
            <p className="text-xs text-slate-500">Nyay Patra printing</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Surveys & Analytics</p>
            <p className="text-lg font-bold text-cyan-600">Rs 3-5 Cr</p>
            <p className="text-xs text-slate-500">3 independent surveys</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">NRI Outreach</p>
            <p className="text-lg font-bold text-cyan-600">Rs 1-2 Cr</p>
            <p className="text-xs text-slate-500">IOC activation</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Legal & Rapid Response</p>
            <p className="text-lg font-bold text-cyan-600">Rs 1-2 Cr</p>
            <p className="text-xs text-slate-500">Defamation, rapid rebuttal</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-green-100 p-3 dark:bg-green-900/40">
          <p className="text-sm text-green-700 dark:text-green-300">
            <strong>Note:</strong> Congress-internal estimates. AAP spending may be higher given incumbent advantage and Punjab government resources.
          </p>
        </div>
      </div>

      {/* MP9-003 & MP9-014: Budget Allocation & Cost Benchmarks */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
        <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">
          MP9 Resources — Budget Allocation & Cost Benchmarks
        </h3>
        <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">
          Budget head % • Constituency tiers • Cost-per-vote • AICC allocation (MP9-003, MP9-014)
        </p>

        {/* Budget Head % Allocations */}
        <h4 className="mt-4 font-semibold text-emerald-900 dark:text-emerald-100">Consolidated Budget Allocation (MP9-003)</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Media & Advertising</p>
            <p className="text-xl font-bold text-emerald-600">35-40%</p>
            <p className="text-xs text-slate-500">Rs 17.5-35 Cr</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Transportation & Fleet</p>
            <p className="text-xl font-bold text-emerald-600">20-25%</p>
            <p className="text-xs text-slate-500">Rs 12-20 Cr</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Staffing & Consultants</p>
            <p className="text-xl font-bold text-emerald-600">8-10%</p>
            <p className="text-xs text-slate-500">Rs 4-8 Cr</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Events & Rallies</p>
            <p className="text-xl font-bold text-emerald-600">12-15%</p>
            <p className="text-xs text-slate-500">Rs 7-12 Cr</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Logistics & Infrastructure</p>
            <p className="text-xl font-bold text-emerald-600">5-8%</p>
            <p className="text-xs text-slate-500">Rs 3-6 Cr</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Legal & Compliance</p>
            <p className="text-xl font-bold text-emerald-600">2-3%</p>
            <p className="text-xs text-slate-500">Rs 1.5-3 Cr</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Emergency Reserve</p>
            <p className="text-xl font-bold text-emerald-600">10-15%</p>
            <p className="text-xs text-slate-500">Rs 7.5-12 Cr</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">TOTAL</p>
            <p className="text-xl font-bold text-emerald-600">Rs 52-96 Cr</p>
            <p className="text-xs text-slate-500">Min to Optimal</p>
          </div>
        </div>

        {/* Constituency Tier Allocation */}
        <h4 className="mt-6 font-semibold text-emerald-900 dark:text-emerald-100">Constituency Tier Allocation (MP9-003)</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-emerald-600">Battleground (15-20 seats)</span>
              <Badge variant="danger">2.5-3x</Badge>
            </div>
            <p className="mt-2 text-xs text-slate-500">Swing seats with 8,000 vote margin. 60% of discretionary spend allocated here.</p>
            <p className="mt-1 text-sm font-semibold">Rs 40-50 L per AC</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-yellow-600">Swing (30-40 seats)</span>
              <Badge variant="warning">1.5-2x</Badge>
            </div>
            <p className="mt-2 text-xs text-slate-500">30% of discretionary spend. Targeted outreach.</p>
            <p className="mt-1 text-sm font-semibold">Rs 25-35 L per AC</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-green-600">Safe (60+ seats)</span>
              <Badge variant="success">1x</Badge>
            </div>
            <p className="mt-2 text-xs text-slate-500">10% of discretionary spend. Maintenance mode.</p>
            <p className="mt-1 text-sm font-semibold">Rs 15-20 L per AC</p>
          </div>
        </div>

        {/* Cost-Per-Vote Benchmarks */}
        <h4 className="mt-6 font-semibold text-emerald-900 dark:text-emerald-100">Cost-Per-Vote Benchmarks (MP9-014)</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Congress 2022 Actual</p>
            <p className="text-lg font-bold text-emerald-600">Rs 18.01 L</p>
            <p className="text-xs text-slate-500">Per winning MLA (~45% of limit)</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">AAP 2022 Winning Avg</p>
            <p className="text-lg font-bold text-emerald-600">Rs 17.66 L</p>
            <p className="text-xs text-slate-500">Per winning MLA</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">ECI Spending Limit</p>
            <p className="text-lg font-bold text-red-600">Rs 40 L</p>
            <p className="text-xs text-slate-500">Per candidate (2022 Punjab)</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Competitive Threshold</p>
            <p className="text-lg font-bold text-orange-600">Rs 20-25 L</p>
            <p className="text-xs text-slate-500">Per candidate for viable campaign</p>
          </div>
        </div>

        {/* AICC Allocation Details */}
        <h4 className="mt-6 font-semibold text-emerald-900 dark:text-emerald-100">AICC Allocation to Punjab (MP9-003)</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">National Reserve Estimate</p>
            <div className="mt-2 space-y-1 text-xs">
              <div className="flex justify-between"><span>Congress all-India reserves (2024):</span><span className="font-medium">Rs 133 Cr</span></div>
              <div className="flex justify-between"><span>Punjab allocation (30-40%):</span><span className="font-medium">Rs 40-53 Cr</span></div>
              <div className="flex justify-between"><span>Small donor projection:</span><span className="font-medium">Rs 5-10 Cr</span></div>
              <div className="flex justify-between border-t pt-1"><span>Estimated Punjab total:</span><span className="font-bold">Rs 45-63 Cr</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Fund Release Tranches (MP9-003)</p>
            <div className="mt-2 space-y-1 text-xs">
              <div className="flex justify-between"><span>Tranche 1 (Nominations):</span><span className="font-medium">20% of allocation</span></div>
              <div className="flex justify-between"><span>Tranche 2 (Campaign mid-point):</span><span className="font-medium">50% of allocation</span></div>
              <div className="flex justify-between"><span>Tranche 3 (Final week):</span><span className="font-medium">30% of allocation</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Milestone-based release:</span><span className="font-medium">ECI compliance</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* MP9-004: Peak Staff Structure */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/20">
        <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400">
          MP9-004: Peak Staff Structure — 370 Personnel
        </h3>
        <p className="mt-1 text-sm text-amber-600 dark:text-amber-400">
          War room staffing model • Command structure • Consultant roles
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Core Leadership</p>
            <p className="text-lg font-bold text-amber-600">8-10</p>
            <p className="text-xs text-slate-500">Campaign Mgr, Finance, Field, Comms, Data, Rapid Response</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">State HQ Staff</p>
            <p className="text-lg font-bold text-amber-600">25-35</p>
            <p className="text-xs text-slate-500">Digital, Research, Compliance, Logistics</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">District Coordinators</p>
            <p className="text-lg font-bold text-amber-600">69-92</p>
            <p className="text-xs text-slate-500">23 districts x 3-4 staff (Field, Comms, Data)</p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Constituency Staff</p>
            <p className="text-lg font-bold text-amber-600">117-234</p>
            <p className="text-xs text-slate-500">117 ACs x 1-2 coordinators (optional per AC)</p>
          </div>
        </div>

        <h4 className="mt-4 font-semibold text-amber-900 dark:text-amber-100">War Room Command Structure</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-amber-600">Strategy Unit</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• Message planning</p>
              <p>• Constituency prioritization</p>
              <p>• Voter segmentation</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-amber-600">Data & Analytics Unit</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• Voter data management</p>
              <p>• Booth-level reports</p>
              <p>• Digital metrics, survey inputs</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-amber-600">Media & Communication</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• Press coordination</p>
              <p>• Narrative control</p>
              <p>• Social media operations</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-amber-600">Field Coordination</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• Booth workers</p>
              <p>• Mandal pradhans</p>
              <p>• Ground-level execution</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-amber-600">Rapid Response</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• Misinformation rebuttal</p>
              <p>• Opposition attack response</p>
              <p>• Crisis communication</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-amber-600">Legal & Logistics Cell</p>
            <div className="mt-2 space-y-1 text-xs text-slate-600">
              <p>• ECI compliance</p>
              <p>• EVM management</p>
              <p>• MCC violation response</p>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-amber-100 p-3 dark:bg-amber-900/40">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Note:</strong> Staff costs should not exceed 10% of total campaign budget. Peak 370 includes consultants (Inclusive Minds/I-PAC retainer) and fellowship positions (IIT/IIM recruits).
          </p>
        </div>
      </div>

      {/* Transportation Fleet Section (from MP9-007) */}
      <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
        <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">
          Transportation & Fleet Management
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Vehicle fleet • GOTV logistics • Budget breakdown (MP9-007)
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Statewide Fleet Budget"
            value="₹130-140 Cr"
            subtitle="Total transportation cost statewide"
            color="bg-orange-500"
          />
          <MetricCard
            title="Per Constituency"
            value="₹9.93 L"
            subtitle="Average cost per AC (3-month campaign)"
            color="bg-amber-500"
          />
          <MetricCard
            title="Vehicle Share"
            value="25-35%"
            subtitle="Of total campaign expenditure"
            color="bg-yellow-500"
          />
          <MetricCard
            title="GOTV Transport"
            value="₹75K/AC"
            subtitle="Per AC voter transport (15 days)"
            color="bg-teal-500"
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Vehicle Fleet Composition (Per AC)</h4>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-600">Candidate SUV (6-month lease)</span><span className="font-medium">₹2.7 L</span></div>
              <div className="flex justify-between"><span className="text-slate-600">LED Campaign Van x2 (3-month)</span><span className="font-medium">₹1.92 L</span></div>
              <div className="flex justify-between"><span className="text-slate-600">GOTV Vehicles x10 (15 days)</span><span className="font-medium">₹75 K</span></div>
              <div className="flex justify-between"><span className="text-slate-600">Fuel Fund (3 months)</span><span className="font-medium">₹1.5 L</span></div>
              <div className="flex justify-between"><span className="text-slate-600">Driver Costs x4 (3 months)</span><span className="font-medium">₹2.16 L</span></div>
              <div className="flex justify-between font-semibold border-t pt-2"><span className="text-slate-700">Total Per AC</span><span className="text-orange-600">₹9.93 L</span></div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Procurement Model</h4>
            <div className="mt-3 space-y-3">
              <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">60-70%</div><div><p className="text-sm font-medium">Rental (Primary)</p><p className="text-xs text-slate-500">Tata Ace LED: ₹18-30K/month</p></div></div>
              <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">15-25%</div><div><p className="text-sm font-medium">Lease (Secondary)</p><p className="text-xs text-slate-500">Core fleet vehicles, 6-month commitment</p></div></div>
              <div className="flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">10-15%</div><div><p className="text-sm font-medium">Volunteer Vehicles</p><p className="text-xs text-slate-500">Fuel + maintenance reimbursement</p></div></div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-amber-100 p-3 dark:bg-amber-900/30">
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Key Insight:</strong> LED campaign vans account for 40-50% of vehicle budget. GPS tracking mandatory for all candidate-level vehicles.</p>
        </div>
      </div>
    </div>
  );
}
