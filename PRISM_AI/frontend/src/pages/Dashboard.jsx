import
 React
 
, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  Sparkles,
  // TrendingUp,
  // Users,
  // AlertTriangle,
  RefreshCw,
} from "lucide-react";

import GlassCard from "../components/GlassCard";

import RevenueChart from "../charts/RevenueChart";
import SegmentChart from "../charts/SegmentChart";
import RiskChart from "../charts/RiskChart";

import API from "../api/axios";

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,

    y: 0,

    transition: {
      duration: 0.4,
    },
  },
};

const Skeleton = ({ className = "" }) => (
  <div
    className={`
animate-pulse
rounded-xl
bg-slate-800/70
${className}
`}
  />
);

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    customers: 0,
    health: 0,
    risk: 0,
    revenue: 0,
  });

  const [segments, setSegments] = useState([]);

  const [riskData, setRiskData] = useState([]);

  const [insights, setInsights] = useState([]);

  const [revenue, setRevenue] = useState([]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const [statsRes, insightsRes, revenueRes, segmentRes, riskRes] =
        await Promise.all([
          API.get("/dashboard"),

          API.get("/insights"),

          API.get("/revenue"),

          API.get("/segment"),

          API.get("/risk"),
        ]);

      setStats(statsRes.data || {});

      setInsights(insightsRes.data || []);

      setRevenue(revenueRes.data || []);

      setSegments(segmentRes.data || []);

      setRiskData(riskRes.data || []);
    } catch (error) {
      console.log("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* HERO */}

      <motion.div
        variants={itemVariants}
        className="
flex
justify-between
items-center
"
      >
        <div>
          <h1
            className="
text-2xl
font-bold
text-white
"
          >
            Good Morning, Ashish 👋
          </h1>

          <p
            className="
text-sm
text-slate-400
mt-2
"
          >
            AI-powered customer intelligence and real-time updates.
          </p>
        </div>

        <button
          onClick={fetchDashboardData}
          className="
flex
items-center
gap-2
px-4
py-2
rounded-xl
bg-slate-900
border
border-slate-700
text-white
text-sm
hover:border-cyan-400
transition
"
        >
          <RefreshCw
            className={`
h-4
w-4
${loading ? "animate-spin" : ""}
`}
          />
          Refresh
        </button>
      </motion.div>

      {/* STATS */}

      <motion.div
        variants={itemVariants}
        className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-5
"
      >
        <GlassCard>
          {loading ? (
            <Skeleton className="h-20" />
          ) : (
            <div>
              <p className="text-xs text-slate-400">Total Customers</p>

              <h2
                className="
text-3xl
font-bold
text-white
mt-2
"
              >
                {(stats.customers || 0).toLocaleString()}
              </h2>
            </div>
          )}
        </GlassCard>

        <GlassCard>
          {loading ? (
            <Skeleton className="h-20" />
          ) : (
            <div>
              <p className="text-xs text-slate-400">Average Health Score</p>

              <h2
                className="
text-3xl
font-bold
text-emerald-400
mt-2
"
              >
                {stats.health || 0}/100
              </h2>
            </div>
          )}
        </GlassCard>

        <GlassCard>
          {loading ? (
            <Skeleton className="h-20" />
          ) : (
            <div>
              <p className="text-xs text-slate-400">High Risk Customers</p>

              <h2
                className="
text-3xl
font-bold
text-rose-400
mt-2
"
              >
                {(stats.risk || 0).toLocaleString()}
              </h2>
            </div>
          )}
        </GlassCard>

        <GlassCard>
          {loading ? (
            <Skeleton className="h-20" />
          ) : (
            <div>
              <p className="text-xs text-slate-400">Predicted Revenue</p>

              <h2
                className="
text-3xl
font-bold
text-purple-400
mt-2
"
              >
                ${stats.revenue || 0}M
              </h2>
            </div>
          )}
        </GlassCard>
      </motion.div>

      {/* MAIN SECTION */}

      <motion.div
        variants={itemVariants}
        className="
grid
grid-cols-1
lg:grid-cols-3
gap-6
"
      >
        <GlassCard className="lg:col-span-2">
          <h2
            className="
text-lg
font-semibold
text-white
mb-4
"
          >
            Revenue Growth Forecast
          </h2>

          {loading ? (
            <Skeleton className="h-72" />
          ) : (
            <RevenueChart data={revenue} />
          )}
        </GlassCard>

        <GlassCard>
          <div
            className="
flex
items-center
gap-2
text-cyan-400
font-semibold
mb-4
"
          >
            <Sparkles size={18} />
            AI Insights Engine
          </div>

          {loading ? (
            <Skeleton className="h-72" />
          ) : (
            <ul className="space-y-3">
              {insights.map((item, index) => (
                <li
                  key={index}
                  className="
p-3
rounded-xl
bg-slate-900/60
border
border-slate-800
text-sm
"
                >
                  <p className="text-white font-semibold">⚡ {item.title}</p>

                  <p className="text-slate-400 mt-1">{item.message}</p>
                </li>
              ))}
            </ul>
          )}
        </GlassCard>
      </motion.div>

      {/* BOTTOM CHARTS */}

      <motion.div
        variants={itemVariants}
        className="
grid
grid-cols-1
md:grid-cols-2
gap-6
"
      >
        <GlassCard>
          <h2
            className="
text-lg
font-semibold
text-white
mb-4
"
          >
            Customer Segmentation
          </h2>

          {loading ? (
            <Skeleton className="h-72" />
          ) : (
            <SegmentChart segments={segments} />
          )}
        </GlassCard>

        <GlassCard>
          <h2
            className="
text-lg
font-semibold
text-white
mb-4
"
          >
            Risk Distribution
          </h2>

          {loading ? (
            <Skeleton className="h-72" />
          ) : (
            <RiskChart risk={riskData} />
          )}
        </GlassCard>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
