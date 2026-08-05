const GlassCard = ({ children, className = "", hover = true }) => {
  return (
    <div
      className={`
rounded-3xl
border
border-white/10
bg-white/[0.03]
backdrop-blur-xl
p-6
shadow-2xl
transition-all
duration-500

${
  hover
    ? "hover:border-white/20 hover:bg-white/[0.05] hover:-translate-y-1"
    : ""
}


${className}

`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
