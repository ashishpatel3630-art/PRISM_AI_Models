import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  TrendingDown,
  PieChart,
  DollarSign,
  Sparkles,
  ShieldAlert,
  ShoppingCart,
  Settings,
  BrainCircuit
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Customer Analytics', path: '/analytics', icon: Users },
  { name: 'Churn Prediction', path: '/churn', icon: TrendingDown },
  { name: 'Segmentation', path: '/segmentation', icon: PieChart },
  { name: 'Lifetime Value', path: '/clv', icon: DollarSign },
  // { name: 'Recommendations', path: '/recommendations', icon: Sparkles },
  { name: 'Next Purchase', path: '/next-purchase', icon: ShoppingCart },
  { name: 'Fraud Detection', path: '/fraud', icon: ShieldAlert },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-800/60 bg-[#0D111A] p-4 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 px-3 py-4 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/20">
            <BrainCircuit className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            CustomerIQ <span className="text-cyan-400 text-xs px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-800">AI</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 border border-cyan-500/20 shadow-sm'
                      : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom Settings */}
      <div className="border-t border-slate-800/60 pt-4">
        <NavLink
          to="/settings"
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-800/40 hover:text-slate-200 transition-all"
        >
          <Settings className="h-4 w-4" />
          Settings
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;