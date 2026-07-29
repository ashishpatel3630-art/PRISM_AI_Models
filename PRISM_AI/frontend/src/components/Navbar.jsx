import { Search, Sparkles, Bell, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-800/60 bg-[#0B0F17]/80 px-8 backdrop-blur-md">
      {/* Search Input */}
      <div className="relative w-96">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search customers, predictions, segments..."
          className="w-full rounded-xl border border-slate-800 bg-slate-900/60 py-2 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-opacity">
          <Sparkles className="h-3.5 w-3.5" />
          AI Assistant
        </button>

        <button className="relative rounded-xl border border-slate-800 bg-slate-900/60 p-2 text-slate-400 hover:text-slate-200 transition-colors">
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
        </button>

        <div className="h-6 w-px bg-slate-800"></div>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-xs text-white">
            AS
          </div>
          <div className="hidden text-left md:block">
            <p className="text-xs font-medium text-slate-200">Ashish</p>
            <p className="text-[10px] text-slate-400">Enterprise Admin</p>
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;