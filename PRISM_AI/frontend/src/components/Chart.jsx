import GlassCard from './GlassCard';

const Chart = ({ title, subtitle, children }) => {
  return (
    <GlassCard className="w-full flex flex-col justify-between">
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-base font-semibold text-slate-100">{title}</h3>}
          {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
        </div>
      )}
      <div className="w-full">{children}</div>
    </GlassCard>
  );
};

export default Chart;