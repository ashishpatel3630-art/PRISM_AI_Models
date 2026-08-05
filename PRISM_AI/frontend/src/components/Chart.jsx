import GlassCard from "./GlassCard";

const Chart = ({ title, subtitle, children }) => {
  return (
    <GlassCard
      className="
w-full
flex
flex-col
justify-between
"
    >
      {(title || subtitle) && (
        <div
          className="
mb-6
"
        >
          {title && (
            <h3
              className="
text-lg
font-semibold
tracking-tight
text-white
"
            >
              {title}
            </h3>
          )}

          {subtitle && (
            <p
              className="
mt-2
text-sm
text-gray-500
"
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div
        className="
w-full
min-h-[280px]
"
      >
        {children}
      </div>
    </GlassCard>
  );
};

export default Chart;
