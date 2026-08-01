import GlassCard from "../components/GlassCard";
import RevenueChart from "../charts/RevenueChart";
import SegmentChart from "../charts/SegmentChart";
import RiskChart from "../charts/RiskChart";

import { useEffect, useState } from "react";
import API from "../api/axios";

import { Sparkles, TrendingUp, Users, AlertTriangle } from "lucide-react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    customers: 0,
    health: 0,
    risk: 0,
    revenue: 0,
  });

  useEffect(() => {
    API.get("/dashboard")
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
useEffect(()=>{

API.get("/insights")
.then(res=>{
setInsights(res.data)
})

},[])
  return (
    <div>
      {/* Hero Welcome */}
      <h1 className="text-6xl text-white ">Good Morning, Ashish </h1>
      <br></br>
      <h3 className="text-4xl text-white mb-10">AI-powered customer intelligence at your
      fingertips.</h3>
      {/* Metric Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <GlassCard>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-slate-400 font-medium">
                Total Customers
              </p>

              <h3 className="text-2xl font-bold text-white mt-1">
                {stats.customers.toLocaleString()}
              </h3>
            </div>

            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Users className="h-5 w-5" />
            </div>
          </div>

          <p className="mt-3 text-xs text-emerald-400 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            +5.2% from last month
          </p>
        </GlassCard>

        <GlassCard>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-slate-400 font-medium">
                Avg Health Score
              </p>

              <h3 className="text-2xl font-bold text-white mt-1">
                {stats.health}/100
              </h3>
            </div>

            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-slate-400 font-medium">
                High Risk Customers
              </p>

              <h3 className="text-2xl font-bold text-white mt-1">
                {stats.risk.toLocaleString()}
              </h3>
            </div>

            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
              <AlertTriangle className="h-5 w-5" />
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-slate-400 font-medium">
                Predicted Revenue
              </p>

              <h3 className="text-2xl font-bold text-white mt-1">
                ${stats.revenue}M
              </h3>
            </div>

            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <TrendingUp className="h-5 w-5" />
            </div>
          </div>
        </GlassCard>
      </div>
      {/* Main Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-100 mb-4">
            Revenue & Growth Forecast
          </h2>

          <RevenueChart />
        </GlassCard>

        <GlassCard className="bg-gradient-to-b from-purple-900/20 to-cyan-900/10 border-cyan-500/20">
          <div className="flex items-center gap-2 mb-4 text-cyan-400 font-semibold">
            <Sparkles className="h-5 w-5" />

            <span>AI Insights Engine</span>
          </div>

          <ul className="space-y-4 text-xs text-slate-300">
            <li className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              ⚡ <strong className="text-white">High Churn Risk:</strong>
              245 enterprise customers showed a drop in activity.
            </li>

            <li className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              💎 <strong className="text-white">Upsell Opportunity:</strong>
              Offer premium plan to top 112 loyal users.
            </li>
          </ul>
        </GlassCard>
      </div>
      {/* Bottom Visualization Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <GlassCard>
          <h2 className="text-lg font-semibold text-slate-100 mb-4">
            Customer Segmentation
          </h2>

          <SegmentChart />
        </GlassCard>

        <GlassCard>
          <h2 className="text-lg font-semibold text-slate-100 mb-4">
            Risk Distribution
          </h2>

          <RiskChart />
        </GlassCard>
      </div>
    </div>
  );
};

export default Dashboard;
