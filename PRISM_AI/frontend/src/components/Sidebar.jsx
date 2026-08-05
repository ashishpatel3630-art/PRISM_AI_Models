import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  TrendingDown,
  PieChart,
  DollarSign,
  ShieldAlert,
  ShoppingCart,
  Settings,
} from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },

  {
    name: "Customer Analytics",
    path: "/analytics",
    icon: Users,
  },

  {
    name: "Churn Prediction",
    path: "/churn",
    icon: TrendingDown,
  },

  {
    name: "Segmentation",
    path: "/segmentation",
    icon: PieChart,
  },

  {
    name: "Lifetime Value",
    path: "/clv",
    icon: DollarSign,
  },

  {
    name: "Next Purchase",
    path: "/next-purchase",
    icon: ShoppingCart,
  },

  {
    name: "Fraud Detection",
    path: "/fraud",
    icon: ShieldAlert,
  },
];

const Sidebar = () => {
  return (
    <aside
      className="
fixed
left-0
top-0
h-screen
w-64
border-r
border-white/10
bg-[#050505]
px-5
py-6
flex
flex-col
"
    >
      {/* Logo */}

      <div className="mb-10">
        <h1
          className="
text-2xl
font-semibold
tracking-tight
text-white
"
        >
          CustomerIQ
          <span className="text-gray-500">AI</span>
        </h1>

        <p
          className="
mt-2
text-xs
text-gray-500
"
        >
          AI Customer Intelligence Platform
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `


flex
items-center
gap-3
rounded-xl
px-4
py-3
text-sm
font-medium
transition-all
duration-300


${
  isActive
    ? "bg-white text-black shadow-lg"
    : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
}


`}
            >
              <Icon
                className="
h-4
w-4
"
              />

              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Settings */}

      <div
        className="
border-t
border-white/10
pt-4
"
      >
        <NavLink
          to="/settings"
          className={({ isActive }) => `

flex
items-center
gap-3
rounded-xl
px-4
py-3
text-sm
transition-all


${
  isActive
    ? "bg-white text-black"
    : "text-gray-400 hover:bg-white/5 hover:text-white"
}


`}
        >
          <Settings
            className="
h-4
w-4
"
          />
          Settings
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
