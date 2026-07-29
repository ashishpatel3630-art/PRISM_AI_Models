
const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`glass-panel rounded-2xl p-5 shadow-xl transition-all duration-300 ${
        hover ? 'hover:border-cyan-500/30 hover:shadow-cyan-500/5' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;