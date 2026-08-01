import { useState } from "react";
import GlassCard from "../components/GlassCard";
import SegmentChart from "../charts/SegmentChart";
import API from "../api/axios";

import { Users, Zap, Award, Target } from "lucide-react";

const Segmentation = () => {
  const [result, setResult] = useState(null);

  const [formData, setFormData] = useState({
    Income: "",
    TotalSpend: "",
    TotalTransactions: "",
    AverageOrderValue: "",
    PurchaseFrequency: "",
    LastPurchaseDays: "",
    WebsiteVisits: "",
    AppUsageMinutes: "",
    LoginFrequency: "",
    CustomerHealthScore: "",
    SatisfactionScore: "",
    SupportCalls: "",
    Complaints: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const predictSegment = async () => {
    try {
      const res = await API.post("/segmentation/predict", formData);

      setResult(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const segments = [
    {
      name: "Enterprise Champions",
      icon: Award,
      color: "text-cyan-400",
      description: "High value premium customers",
    },

    {
      name: "Loyal Power Users",
      icon: Zap,
      color: "text-purple-400",
      description: "Frequent active customers",
    },

    {
      name: "At Risk Customers",
      icon: Target,
      color: "text-amber-400",
      description: "Customers requiring attention",
    },

    {
      name: "New Customers",
      icon: Users,
      color: "text-emerald-400",
      description: "Recently acquired users",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">
        AI Cohort & Customer Segmentation
      </h1>

      <p className="text-slate-400">
        Automated multi-dimensional clustering based on customer behaviour and
        RFM metrics.
      </p>

      {/* INPUT FORM */}

      <GlassCard>
        <h2 className="text-xl text-white mb-5">Customer Data</h2>

        <div
          className="
grid
md:grid-cols-3
gap-4
"
        >
          {Object.keys(formData).map((field) => (
            <div key={field}>
              <label className="text-sm text-slate-300">{field}</label>

              <input
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                className="
w-full
mt-2
p-3
rounded-xl
bg-black/40
border
border-white/20
text-white
outline-none
focus:border-purple-500
"
              />
            </div>
          ))}
        </div>

        <button
          onClick={predictSegment}
          className="
mt-6
px-8
py-3
rounded-xl
bg-gradient-to-r
from-purple-600
to-pink-600
text-white
font-bold
hover:scale-105
transition
"
        >
          Predict Segment 🚀
        </button>
      </GlassCard>

      {/* RESULT */}

      {result && (
        <GlassCard>
          <h2 className="text-xl text-white">Prediction Result</h2>

          <p className="mt-3 text-slate-300">
            Segment :
            <span className="ml-2 font-bold text-purple-400">
              {result.segment_name}
            </span>
          </p>

          <p className="text-slate-400">Cluster ID : {result.segment}</p>
        </GlassCard>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-1">
          <h2 className="text-lg font-semibold text-white mb-4">
            Segment Volume Share
          </h2>

          <SegmentChart />
        </GlassCard>

        <div
          className="
lg:col-span-2
grid
md:grid-cols-2
gap-5
"
        >
          {segments.map((seg, index) => {
            const Icon = seg.icon;

            return (
              <GlassCard key={index}>
                <div className="flex items-center gap-3">
                  <div
                    className={`
p-3
rounded-xl
bg-slate-900
border
border-slate-800
${seg.color}
`}
                  >
                    <Icon />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">{seg.name}</h3>

                    <p className="text-xs text-slate-400">{seg.description}</p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Segmentation;
