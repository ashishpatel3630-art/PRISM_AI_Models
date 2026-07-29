import GlassCard from '../components/GlassCard';
import RevenueChart from '../charts/RevenueChart';
import { DollarSign, TrendingUp, Sparkles, PieChart } from 'lucide-react';

const CLV = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Customer Lifetime Value (CLV) Prediction</h1>
        <p className="text-sm text-slate-400">Predictive 12-month revenue trajectory and account valuation models.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <GlassCard>
          <p className="text-xs text-slate-400">Average Historical CLV</p>
          <h3 className="text-2xl font-bold text-white mt-1">$4,850</h3>
          <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1"><TrendingUp className="h-3 w-3" /> +12% YoY</p>
        </GlassCard>

        <GlassCard>
          <p className="text-xs text-slate-400">Predicted 12-Mo LTV Expansion</p>
          <h3 className="text-2xl font-bold text-cyan-400 mt-1">$6,200</h3>
          <p className="text-xs text-slate-400 mt-2">Based on current retention velocity</p>
        </GlassCard>

        <GlassCard>
          <p className="text-xs text-slate-400">High LTV Segment Concentration</p>
          <h3 className="text-2xl font-bold text-purple-400 mt-1">18.4%</h3>
          <p className="text-xs text-slate-400 mt-2">Drives 68% of total ARR</p>
        </GlassCard>
      </div>

      <GlassCard>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold text-white">Projected Lifetime Revenue Growth</h2>
            <p className="text-xs text-slate-400">Comparison of Actual vs Model Projected Revenue</p>
          </div>
        </div>
        <RevenueChart />
      </GlassCard>
    </div>
  );
};

export default CLV;