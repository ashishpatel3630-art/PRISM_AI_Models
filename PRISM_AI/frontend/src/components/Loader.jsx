

const Loader = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-12">
      <div className="relative flex h-12 w-12 items-center justify-center">
        <div className="absolute h-full w-full animate-spin rounded-full border-4 border-cyan-500/20 border-t-cyan-500"></div>
        <div className="h-6 w-6 rounded-full border-2 border-purple-500/20 border-b-purple-500 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;