import GlassCard from '../components/GlassCard';
import RiskChart from '../charts/RiskChart';

const Churn = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Churn Prediction & Risk Analysis</h1>
      <GlassCard>
        <p className="text-sm text-slate-400 mb-4">Machine learning predictions on account health and risks.</p>
        <RiskChart />
      </GlassCard>
    </div>
  );
};

export default Churn;