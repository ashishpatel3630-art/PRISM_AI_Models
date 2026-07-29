import GlassCard from '../components/GlassCard';
import RiskChart from '../charts/RiskChart';
import { AlertTriangle, TrendingDown, ArrowUpRight, ShieldAlert, } from 'lucide-react';

const Churn = () => {
  const atRiskCustomers = [
    { id: 'CUST-1092', name: 'Acme Corp', riskScore: '92%', healthScore: 32, ltv: '$48,000', factor: 'Drop in Usage (75%)' },
    { id: 'CUST-2410', name: 'Starlight Media', riskScore: '88%', healthScore: 41, ltv: '$32,500', factor: '3 Open Support Tickets' },
    { id: 'CUST-3891', name: 'Nexus Tech', riskScore: '84%', healthScore: 45, ltv: '$89,000', factor: 'Payment Decline' },
    { id: 'CUST-4102', name: 'Global Logistics', riskScore: '79%', healthScore: 49, ltv: '$12,000', factor: 'No Admin Logins (30d)' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Churn Prediction & Prevention</h1>
        <p className="text-sm text-slate-400">ML-driven early warning system for customer retention.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <GlassCard>
          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-400">Predicted Monthly Churn</p>
            <span className="p-2 rounded-lg bg-rose-500/10 text-rose-400"><TrendingDown className="h-4 w-4" /></span>
          </div>
          <h3 className="text-2xl font-bold text-white mt-2">2.4%</h3>
          <p className="text-xs text-emerald-400 mt-1">-0.5% vs last month</p>
        </GlassCard>

        <GlassCard>
          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-400">Revenue at Risk</p>
            <span className="p-2 rounded-lg bg-amber-500/10 text-amber-400"><AlertTriangle className="h-4 w-4" /></span>
          </div>
          <h3 className="text-2xl font-bold text-white mt-2">$181,500</h3>
          <p className="text-xs text-slate-400 mt-1">Across 142 enterprise accounts</p>
        </GlassCard>

        <GlassCard>
          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-400">Churn Recovered (30d)</p>
            <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400"><ShieldAlert className="h-4 w-4" /></span>
          </div>
          <h3 className="text-2xl font-bold text-white mt-2">$94,200</h3>
          <p className="text-xs text-cyan-400 mt-1">Via automated AI plays</p>
        </GlassCard>
      </div>

      {/* Risk Distribution & Table */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-1">
          <h2 className="text-lg font-semibold text-slate-100 mb-4">Risk Severity Distribution</h2>
          <RiskChart />
        </GlassCard>

        <GlassCard className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-100">Top High-Risk Accounts</h2>
            <button className="text-xs text-cyan-400 hover:underline flex items-center gap-1">
              View All <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                <tr>
                  <th className="py-3 px-2">Account</th>
                  <th className="py-3 px-2">Churn Risk</th>
                  <th className="py-3 px-2">Health Score</th>
                  <th className="py-3 px-2">Contract LTV</th>
                  <th className="py-3 px-2">Primary Risk Driver</th>
                  <th className="py-3 px-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {atRiskCustomers.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-800/30">
                    <td className="py-3 px-2 font-medium text-white">{c.name}</td>
                    <td className="py-3 px-2"><span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold">{c.riskScore}</span></td>
                    <td className="py-3 px-2">{c.healthScore}/100</td>
                    <td className="py-3 px-2 font-semibold text-slate-200">{c.ltv}</td>
                    <td className="py-3 px-2 text-slate-400">{c.factor}</td>
                    <td className="py-3 px-2 text-right">
                      <button className="rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-2.5 py-1 text-[11px] font-medium border border-cyan-500/30">
                        Engage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Churn;