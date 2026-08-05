import { useState } from "react";

import GlassCard from "../components/GlassCard";
import RevenueChart from "../charts/RevenueChart";
import API from "../api/axios";

import { TrendingUp, Sparkles, Brain, DollarSign, Loader2 } from "lucide-react";

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
        "/api/clv/predict",

        Object.fromEntries(
          Object.entries(formData).map(([key, value]) => [key, Number(value)]),
        ),
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
    <div
      className="
min-h-screen
bg-[#050505]
text-white
p-6
md:p-10
"
    >
      {/* HEADER */}

      <div className="mb-10">
        <div
          className="
flex
items-center
gap-4
"
        >
          <div
            className="
p-4
rounded-2xl
bg-white/[0.04]
border
border-white/10
"
          >
            <Brain className="text-cyan-400" />
          </div>

          <div>
            <h1
              className="
text-3xl
font-bold
"
            >
              Customer Lifetime Value AI
            </h1>

            <p
              className="
text-gray-500
mt-2
"
            >
              Predictive 12-month revenue trajectory and customer valuation
              model
            </p>
          </div>
        </div>
      </div>

      {/* KPI CARDS */}

      <div
        className="
grid
md:grid-cols-3
gap-6
mb-8
"
      >
        <GlassCard>
          <p
            className="
text-sm
text-gray-500
"
          >
            Average Historical CLV
          </p>

          <h2
            className="
text-3xl
font-bold
mt-3
"
          >
            $4,850
          </h2>

          <p
            className="
flex
items-center
gap-2
text-green-400
text-sm
mt-3
"
          >
            <TrendingUp size={15} />
            +12% YoY
          </p>
        </GlassCard>

        <GlassCard>
          <p
            className="
text-sm
text-gray-500
"
          >
            Predicted CLV
          </p>

          <h2
            className="
text-3xl
font-bold
text-white
mt-3
"
          >
            {result ? `$${result.Predicted_CLV}` : "----"}
          </h2>

          <p
            className="
text-gray-500
text-sm
mt-3
"
          >
            AI Generated Customer Value
          </p>
        </GlassCard>

        <GlassCard>
          <p
            className="
text-sm
text-gray-500
"
          >
            High LTV Segment
          </p>

          <h2
            className="
text-3xl
font-bold
mt-3
"
          >
            18.4%
          </h2>

          <p
            className="
text-gray-500
text-sm
mt-3
"
          >
            Premium Customer Base
          </p>
        </GlassCard>
      </div>

      {/* FORM */}

      <GlassCard>
        <div
          className="
flex
items-center
gap-3
mb-8
"
        >
          <DollarSign className="text-cyan-400" />

          <h2
            className="
text-xl
font-semibold
"
          >
            CLV Prediction Input
          </h2>
        </div>

        <div
          className="
grid
md:grid-cols-4
gap-5
"
        >
          {fields.map((field) => (
            <div key={field}>
              <label
                className="
text-xs
text-gray-500
"
              >
                {field}
              </label>

              <input
                name={field}
                value={formData[field]}
                onChange={handleChange}
                type="number"
                placeholder={`Enter ${field}`}
                className="

mt-2

w-full

rounded-xl

bg-black

border

border-white/10

px-4

py-3

text-white

outline-none

focus:border-cyan-400

transition

"
              />
            </div>
          ))}
        </div>

        <button
          onClick={predictCLV}
          disabled={loading}
          className="

mt-8

w-full

py-4

rounded-2xl

bg-white

text-black

font-bold

text-lg

hover:bg-gray-200

hover:scale-[1.02]

transition

flex

items-center

justify-center

gap-3

"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" />
              Predicting CLV...
            </>
          ) : (
            <>
              <Sparkles />
              Predict Customer CLV
            </>
          )}
        </button>
      </GlassCard>

      {/* RESULT */}

      {result && (
        <GlassCard className="mt-8">
          <h2
            className="
text-xl
font-semibold
mb-5
"
          >
            AI Valuation Result
          </h2>

          <div
            className="
bg-black
rounded-2xl
border
border-white/10
p-6
"
          >
            <p
              className="
text-gray-500
"
            >
              Predicted Customer Lifetime Value
            </p>

            <h1
              className="
text-5xl
font-bold
mt-3
"
            >
              ${result.Predicted_CLV}
            </h1>
          </div>
        </GlassCard>
      )}

      {/* CHART */}

      <GlassCard className="mt-8">
        <div
          className="
flex
items-center
gap-3
mb-6
"
        >
          <Sparkles className="text-cyan-400" />

          <h2
            className="
text-xl
font-semibold
"
          >
            Projected Lifetime Revenue Growth
          </h2>
        </div>

        <RevenueChart />
      </GlassCard>
    </div>
  );
};

export default CLV;
