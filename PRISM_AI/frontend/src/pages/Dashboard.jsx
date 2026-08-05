import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  RefreshCw,
  Users,
  Activity,
  AlertTriangle,
  DollarSign,
  Sparkles,
} from "lucide-react";

import GlassCard from "../components/GlassCard";

import RevenueChart from "../charts/RevenueChart";
import SegmentChart from "../charts/SegmentChart";
import RiskChart from "../charts/RiskChart";

import API from "../api/axios";

const container = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
    },
  },
};

const Skeleton = ({ height = "h-40" }) => (
  <div
    className={`
${height}
rounded-2xl
bg-white/5
animate-pulse
`}
  ></div>
);

function Dashboard() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    customers: 0,
    health: 0,
    risk: 0,
    revenue: 0,
  });

  const [insights, setInsights] = useState([]);

  const [revenue, setRevenue] = useState([]);

  const [segments, setSegments] = useState([]);

  const [riskData, setRiskData] = useState([]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const [statsData, insightsData, revenueData, segmentData, riskData] =
        await Promise.all([
          API.get("/dashboard"),

          API.get("/insights"),

          API.get("/revenue"),

          API.get("/segment"),

          API.get("/risk"),
        ]);

      setStats(statsData.data || {});

      setInsights(insightsData.data || []);

      setRevenue(revenueData.data || []);

      setSegments(segmentData.data || []);

      setRiskData(riskData.data || []);
    } catch (error) {
      console.log("Dashboard Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="
space-y-10
"
    >
      {/* HEADER */}

      <motion.div
        variants={item}
        className="
flex
flex-col
gap-6
md:flex-row
md:items-center
md:justify-between
"
      >
        <div>
          <div
            className="
flex
items-center
gap-3
"
          >
            <h1
              className="
text-4xl
font-semibold
tracking-tight
text-white
"
            >
              Good Morning, Ashish 👋
            </h1>

            <div
              className="
rounded-full
border
border-white/10
bg-white/5
px-3
py-1
text-xs
text-gray-400
"
            >
              AI Active
            </div>
          </div>

          <p
            className="
mt-3
text-gray-400
"
          >
            Customer intelligence powered by AI models.
          </p>
        </div>

        <button
          onClick={fetchDashboardData}
          className="
flex
items-center
gap-2
rounded-xl
border
border-white/10
bg-white/5
px-5
py-3
text-sm
text-gray-300
transition
hover:bg-white/10
"
        >
          <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
          Refresh
        </button>
      </motion.div>

      {/* STAT CARDS */}

      <motion.div
        variants={item}
        className="
grid
grid-cols-1
gap-6
sm:grid-cols-2
xl:grid-cols-4
"
      >
        <StatsCard
          icon={<Users />}
          title="Customers"
          value={stats.customers?.toLocaleString()}
        />

        <StatsCard
          icon={<Activity />}
          title="Health Score"
          value={`${stats.health || 0}%`}
        />

        <StatsCard
          icon={<AlertTriangle />}
          title="Risk Customers"
          value={stats.risk?.toLocaleString()}
        />

        <StatsCard
          icon={<DollarSign />}
          title="Revenue"
          value={`$${stats.revenue || 0}M`}
        />
      </motion.div>

      {/* AI SECTION */}

      <motion.div
        variants={item}
        className="
grid
gap-6
lg:grid-cols-3
"
      >
        <GlassCard>
          <div
            className="
flex
items-center
gap-3
text-gray-400
"
          >
            <Sparkles size={18} />
            AI Health Score
          </div>

          <h2
            className="
mt-8
text-6xl
font-semibold
text-white
"
          >
            {stats.health || 0}
          </h2>

          <p
            className="
mt-3
text-sm
text-gray-400
"
          >
            Overall customer stability
          </p>
        </GlassCard>

        <GlassCard>
          <h2
            className="
text-lg
font-semibold
"
          >
            AI Insights
          </h2>

          <div
            className="
mt-5
space-y-3
"
          >
            {insights.slice(0, 3).map((data, index) => (
              <div
                key={index}
                className="
rounded-xl
border
border-white/10
bg-black/40
p-4
"
              >
                <p
                  className="
text-sm
text-white
"
                >
                  {data.title}
                </p>

                <p
                  className="
mt-2
text-xs
text-gray-500
"
                >
                  {data.message}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <h2
            className="
text-lg
font-semibold
"
          >
            Model Confidence
          </h2>

          <p
            className="
mt-8
text-6xl
font-semibold
"
          >
            96%
          </p>

          <p
            className="
mt-3
text-gray-400
"
          >
            Prediction accuracy
          </p>
        </GlassCard>
      </motion.div>

      {/* CHARTS */}

      <motion.div
        variants={item}
        className="
grid
gap-6
lg:grid-cols-2
"
      >
        <ChartCard title="Revenue Intelligence">
          {loading ? <Skeleton /> : <RevenueChart data={revenue} />}
        </ChartCard>

        <ChartCard title="Customer Segmentation">
          {loading ? <Skeleton /> : <SegmentChart segments={segments} />}
        </ChartCard>
      </motion.div>

      <motion.div variants={item}>
        <ChartCard title="Risk Distribution">
          {loading ? <Skeleton height="h-72" /> : <RiskChart risk={riskData} />}
        </ChartCard>
      </motion.div>
    </motion.div>
  );
}

function StatsCard({ icon, title, value }) {
  return (
    <GlassCard>
      <div
        className="
flex
items-center
justify-between
"
      >
        <div>
          <p
            className="
text-sm
text-gray-500
"
          >
            {title}
          </p>

          <h2
            className="
mt-3
text-3xl
font-semibold
text-white
"
          >
            {value || 0}
          </h2>
        </div>

        <div
          className="
rounded-xl
border
border-white/10
bg-white/5
p-3
text-gray-300
"
        >
          {icon}
        </div>
      </div>
    </GlassCard>
  );
}

function ChartCard({ title, children }) {
  return (
    <GlassCard>
      <h2
        className="
mb-6
text-xl
font-semibold
text-white
"
      >
        {title}
      </h2>

      {children}
    </GlassCard>
  );
}

export default Dashboard;
