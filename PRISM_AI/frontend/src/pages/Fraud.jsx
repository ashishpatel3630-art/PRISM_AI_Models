import GlassCard from '../components/GlassCard';
import { ShieldAlert, AlertOctagon, CheckCircle2, ShieldCheck } from 'lucide-react';

const Fraud = () => {
  const anomalies = [
    { id: 'TXN-9021', customer: 'Global Trade', amount: '$42,500', reason: 'High-Velocity IP Switching + New Device', riskLevel: 'Critical' },
    { id: 'TXN-8812', customer: 'User_4102', amount: '$8,200', reason: 'Unusual International Card Origin', riskLevel: 'High' },
    { id: 'TXN-7401', customer: 'TechStart LLC', amount: '$15,000', reason: 'Failed Login Spikes prior to Payment', riskLevel: 'Medium' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Fraud & Anomaly Detection Engine</h1>
        <p className="text-sm text-slate-400">Real-time isolation of suspicious activity and payment risk signals.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <GlassCard>
          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-400">Flagged Anomalies (24h)</p>
            <span className="p-2 rounded-lg bg-rose-500/10 text-rose-400"><ShieldAlert className="h-4 w-4" /></span>
          </div>
          <h3 className="text-2xl font-bold text-white mt-2">14 Alerts</h3>
          <p className="text-xs text-rose-400 mt-1">3 Critical severity</p>
        </GlassCard>

        <GlassCard>
          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-400">Prevented Chargebacks</p>
            <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400"><ShieldCheck className="h-4 w-4" /></span>
          </div>
          <h3 className="text-2xl font-bold text-white mt-2">$128,400</h3>
          <p className="text-xs text-emerald-400 mt-1">100% precision accuracy</p>
        </GlassCard>

        <GlassCard>
          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-400">False Positive Rate</p>
            <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400"><CheckCircle2 className="h-4 w-4" /></span>
          </div>
          <h3 className="text-2xl font-bold text-white mt-2">0.12%</h3>
          <p className="text-xs text-slate-400 mt-1">Industry standard benchmark</p>
        </GlassCard>
      </div>

      <GlassCard>
        <h2 className="text-lg font-semibold text-white mb-4">Real-Time Risk Feeds</h2>
        <div className="space-y-3">
          {anomalies.map((a) => (
            <div key={a.id} className="flex flex-col md:flex-row justify-between md:items-center p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs gap-3">
              <div className="flex items-center gap-3">
                <AlertOctagon className={`h-5 w-5 ${a.riskLevel === 'Critical' ? 'text-rose-500' : 'text-amber-500'}`} />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">{a.id}</span>
                    <span className="text-slate-400">• {a.customer}</span>
                  </div>
                  <p className="text-slate-400 mt-0.5">{a.reason}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-white">{a.amount}</span>
                <button className="px-3 py-1 rounded bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 font-medium border border-rose-500/30">
                  Block & Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

export default Fraud;