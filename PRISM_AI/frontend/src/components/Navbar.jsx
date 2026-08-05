import { Search, Sparkles, Bell, ChevronDown, LogOut } from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const searchItems = [
  {
    name: "Dashboard",
    keywords: "home overview",
    path: "/",
  },

  {
    name: "Customer Analytics",
    keywords: "customers analytics users",
    path: "/analytics",
  },

  {
    name: "Churn Prediction",
    keywords: "churn risk prediction retention",
    path: "/churn",
  },

  {
    name: "Customer Segmentation",
    keywords: "segments clusters grouping",
    path: "/segmentation",
  },

  {
    name: "Lifetime Value",
    keywords: "clv revenue value",
    path: "/clv",
  },

  {
    name: "Next Purchase",
    keywords: "recommendation purchase prediction",
    path: "/next-purchase",
  },

  {
    name: "Fraud Detection",
    keywords: "fraud security risk",
    path: "/fraud",
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [results, setResults] = useState([]);

  const handleSearch = (value) => {
    setSearch(value);

    if (!value) {
      setResults([]);

      return;
    }

    const filtered = searchItems.filter((item) =>
      `${item.name} ${item.keywords}`

        .toLowerCase()

        .includes(value.toLowerCase()),
    );

    setResults(filtered);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    // go landing page

    navigate("/");
  };

  return (
    <header
      className="
sticky
top-0
z-30
flex
h-20
items-center
justify-between
border-b
border-white/10
bg-[#050505]/80
px-8
backdrop-blur-xl
"
    >
      {/* SEARCH */}

      <div
        className="
relative
w-full
max-w-md
"
      >
        <div
          className="
flex
items-center
gap-3
rounded-xl
border
border-white/10
bg-white/[0.03]
px-4
py-3
"
        >
          <Search
            className="
h-4
w-4
text-gray-500
"
          />

          <input
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search customers, models..."
            className="
w-full
bg-transparent
text-sm
text-white
outline-none
placeholder:text-gray-600
"
          />
        </div>

        {/* SEARCH RESULTS */}

        {results.length > 0 && (
          <div
            className="
absolute
mt-2
w-full
rounded-xl
border
border-white/10
bg-[#0B0B0B]
p-2
shadow-2xl
"
          >
            {results.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);

                  setSearch("");

                  setResults([]);
                }}
                className="
flex
w-full
items-center
rounded-lg
px-4
py-3
text-left
text-sm
text-gray-300
hover:bg-white/10
hover:text-white
"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}

      <div
        className="
flex
items-center
gap-4
"
      >
        {/* AI ASSISTANT */}

        <button
          className="
flex
items-center
gap-2
rounded-xl
border
border-white/10
bg-white/[0.03]
px-4
py-2.5
text-sm
text-gray-300
hover:bg-white/10
"
        >
          <Sparkles size={16} />
          AI Assistant
        </button>

        {/* Notification */}

        <button
          className="
rounded-xl
border
border-white/10
bg-white/[0.03]
p-3
text-gray-400
hover:text-white
"
        >
          <Bell size={16} />
        </button>

        {/* USER */}

        <div
          className="
flex
items-center
gap-3
rounded-xl
border
border-white/10
bg-white/[0.03]
px-3
py-2
"
        >
          <div
            className="
flex
h-9
w-9
items-center
justify-center
rounded-full
bg-white
font-semibold
text-black
"
          >
            AS
          </div>

          <div className="hidden md:block">
            <p
              className="
text-sm
font-medium
text-white
"
            >
              Ashish
            </p>

            <p
              className="
text-xs
text-gray-500
"
            >
              Enterprise Admin
            </p>
          </div>

          <ChevronDown size={16} className="text-gray-500" />
        </div>

        {/* LOGOUT */}

        <button
          onClick={handleLogout}
          className="
rounded-xl
border
border-white/10
bg-white/[0.03]
p-3
text-gray-400
transition
hover:border-red-500/30
hover:bg-red-500/10
hover:text-red-400
"
        >
          <LogOut size={16} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
