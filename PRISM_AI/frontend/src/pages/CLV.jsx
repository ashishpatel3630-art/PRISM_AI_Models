import { useState } from "react";
import GlassCard from "../components/GlassCard";
import RevenueChart from "../charts/RevenueChart";
import API from "../api/axios";
import { TrendingUp, Sparkles } from "lucide-react";

const CLV = () => {
  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    Income: "",
    Tenure: "",
    TotalSpend: "",
    TotalTransactions: "",
    AverageOrderValue: "",
    PurchaseFrequency: "",
    LastPurchaseDays: "",
    WebsiteVisits: "",
    AppUsageMinutes: "",
    LoginFrequency: "",
    WishlistCount: "",
    SatisfactionScore: "",
    Rating: "",
    CustomerHealthScore: "",
    SupportCalls: "",
    Complaints: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const predictCLV = async () => {
    try {
      setLoading(true);

      const response = await API.post(
        "/clv/predict",

        {
          Income: Number(formData.Income),

          Tenure: Number(formData.Tenure),

          TotalSpend: Number(formData.TotalSpend),

          TotalTransactions: Number(formData.TotalTransactions),

          AverageOrderValue: Number(formData.AverageOrderValue),

          PurchaseFrequency: Number(formData.PurchaseFrequency),

          LastPurchaseDays: Number(formData.LastPurchaseDays),

          WebsiteVisits: Number(formData.WebsiteVisits),

          AppUsageMinutes: Number(formData.AppUsageMinutes),

          LoginFrequency: Number(formData.LoginFrequency),

          WishlistCount: Number(formData.WishlistCount),

          SatisfactionScore: Number(formData.SatisfactionScore),

          Rating: Number(formData.Rating),

          CustomerHealthScore: Number(formData.CustomerHealthScore),

          SupportCalls: Number(formData.SupportCalls),

          Complaints: Number(formData.Complaints),
        },
      );

      setResult(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fields = Object.keys(formData);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Customer Lifetime Value (CLV) Prediction
        </h1>

        <p className="text-slate-400 mt-2">
          Predictive 12-month revenue trajectory and account valuation models.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <GlassCard>
          <p className="text-xs text-slate-400">Average Historical CLV</p>

          <h3 className="text-2xl font-bold text-white mt-1">$4,850</h3>

          <p className="text-xs text-emerald-400 mt-2 flex gap-1 items-center">
            <TrendingUp size={14} />
            +12% YoY
          </p>
        </GlassCard>

        <GlassCard>
          <p className="text-xs text-slate-400">Predicted CLV</p>

          <h3 className="text-2xl font-bold text-cyan-400 mt-1">
            {result ? `$${result.Predicted_CLV}` : "$----"}
          </h3>

          <p className="text-xs text-slate-400 mt-2">
            AI Generated Customer Value
          </p>
        </GlassCard>

        <GlassCard>
          <p className="text-xs text-slate-400">High LTV Segment</p>

          <h3 className="text-2xl font-bold text-purple-400 mt-1">18.4%</h3>

          <p className="text-xs text-slate-400 mt-2">Premium Customer Base</p>
        </GlassCard>
      </div>

      <GlassCard>
        <h2 className="text-lg font-semibold text-white mb-5">
          CLV Prediction Input
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {fields.map((field) => (
            <div key={field}>
              <label className="text-xs text-slate-400">{field}</label>

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
focus:border-cyan-500
"
              />
            </div>
          ))}
        </div>

        <button
          onClick={predictCLV}
          disabled={loading}
          className="
mt-6
w-full
py-4
rounded-xl
bg-gradient-to-r
from-cyan-500
to-purple-600
text-white
font-bold
hover:scale-105
transition
"
        >
          {loading ? "Predicting..." : "Predict Customer CLV 🚀"}
        </button>
      </GlassCard>

      <GlassCard>
        <div className="flex items-center gap-2 mb-5">
          <Sparkles className="text-cyan-400" />

          <h2 className="text-lg font-semibold text-white">
            Projected Lifetime Revenue Growth
          </h2>
        </div>

        <RevenueChart />
      </GlassCard>
    </div>
  );
};

export default CLV;
