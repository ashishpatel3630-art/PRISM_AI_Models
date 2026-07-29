import GlassCard from '../components/GlassCard';
import SegmentChart from '../charts/SegmentChart';
import { Layers, Users, Zap, Award, Target } from 'lucide-react';

const Segmentation = () => {
  const segments = [
    { name: 'Enterprise Champions', size: '1,240 Users', share: '32%', avgLTV: '$12,400', icon: Award, color: 'text-cyan-400' },
    { name: 'Loyal Power Users', size: '4,850 Users', share: '41%', avgLTV: '$4,100', icon: Zap, color: 'text-purple-400' },
    { name: 'At Risk SMBs', size: '920 Users', share: '12%', avgLTV: '$1,800', icon: Target, color: 'text-amber-400' },
    { name: 'New Onboarded', size: '2,100 Users', share: '15%', avgLTV: '$650', icon: Users, color: 'text-emerald-400' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">AI Cohort & Customer Segmentation</h1>
        <p className="text-sm text-slate-400">Automated multi-dimensional clustering based on behavior and RFM metrics.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-1">
          <h2 className="text-lg font-semibold text-slate-100 mb-2">Segment Volume Share</h2>
          <SegmentChart />
        </GlassCard>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {segments.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <GlassCard key={idx}>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 ${seg.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{seg.name}</h3>
                      <p className="text-xs text-slate-400">{seg.size}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-300">{seg.share}</span>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex justify-between text-xs">
                  <span className="text-slate-400">Avg LTV</span>
                  <span className="font-semibold text-white">{seg.avgLTV}</span>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Segmentation;