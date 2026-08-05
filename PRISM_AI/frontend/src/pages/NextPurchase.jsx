import { useState } from "react";
import API from "../api/axios";

import GlassCard from "../components/GlassCard";

import {
  ShoppingCart,
  Sparkles,
  Brain,
  TrendingUp,
  Loader2,
  Target,
} from "lucide-react";

const NextPurchase = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    Age: "",
    Gender: "Male",
    Income: "",

    Location: "Bhopal",

    Membership: "Gold",

    Tenure: "",
    TotalSpend: "",
    TotalTransactions: "",
    AverageOrderValue: "",
    PurchaseFrequency: "",
    LastPurchaseDays: "",

    PreferredCategory: "Electronics",

    WebsiteVisits: "",
    AppUsageMinutes: "",
    LoginFrequency: "",
    WishlistCount: "",

    CartAbandonmentRate: "",
    EmailOpenRate: "",
    MarketingClicks: "",

    SatisfactionScore: "",
    Rating: "",

    SupportCalls: "",
    Complaints: "",
    Reviews: "",

    CustomerHealthScore: "",
    ChurnRisk: "",

    DiscountUsed: "",
    CouponUsed: "",

    ReferralCount: "",

    PaymentMethod: "Card",

    DeviceType: "Mobile",

    ReturnRate: "",
    LoyaltyPoints: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const predictPurchase = async () => {
    try {
      setLoading(true);

      const payload = {};

      Object.keys(formData).forEach((key) => {
        payload[key] =
          isNaN(formData[key]) || formData[key] === ""
            ? formData[key]
            : Number(formData[key]);
      });

      const response = await API.post("/api/next-purchase/predict", payload);

      setResult(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fields = Object.keys(formData);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}

      <div className="mb-10">
        <div className="flex items-center gap-3">
          <div
            className="
p-3
rounded-xl
bg-cyan-500/10
border
border-cyan-400/20
"
          >
            <ShoppingCart className="text-cyan-400" />
          </div>

          <div>
            <h1
              className="
text-3xl
font-bold
bg-gradient-to-r
from-cyan-400
via-purple-400
to-pink-400
bg-clip-text
text-transparent
"
            >
              Next Purchase Intelligence
            </h1>

            <p className="text-gray-400 mt-2">
              AI powered customer spending prediction engine
            </p>
          </div>
        </div>
      </div>

      {/* Result */}

      {result && (
        <GlassCard>
          <div className="flex items-center gap-3">
            <Sparkles className="text-yellow-400" />

            <h2
              className="
text-xl
font-bold
"
            >
              AI Prediction Result
            </h2>
          </div>

          <div
            className="
mt-6
grid
md:grid-cols-3
gap-5
"
          >
            <div
              className="
bg-white/5
rounded-xl
p-5
border
border-white/10
"
            >
              <p className="text-gray-400 text-sm">Predicted Purchase Value</p>

              <h3
                className="
text-3xl
font-bold
text-cyan-400
mt-2
"
              >
                ${Number(result["Next Purchase Amount"] || 0).toFixed(2)}
              </h3>
            </div>

            <div
              className="
bg-white/5
rounded-xl
p-5
border
border-white/10
"
            >
              <p className="text-gray-400 text-sm">Customer Trend</p>

              <h3
                className="
text-xl
font-bold
text-green-400
mt-3
flex
gap-2
items-center
"
              >
                <TrendingUp size={20} />
                Growing
              </h3>
            </div>

            <div
              className="
bg-white/5
rounded-xl
p-5
border
border-white/10
"
            >
              <p className="text-gray-400 text-sm">AI Model</p>

              <h3
                className="
text-xl
font-bold
text-purple-400
mt-3
"
              >
                Regression AI
              </h3>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Input */}

      <GlassCard>
        <div className="flex items-center gap-3 mb-6">
          <Brain className="text-purple-400" />

          <h2
            className="
text-xl
font-bold
"
          >
            Customer Behaviour Analysis
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
text-gray-400
"
              >
                {field}
              </label>

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

bg-black/50

border

border-white/10

text-white

outline-none

transition

focus:border-cyan-400

focus:ring-2

focus:ring-cyan-400/20

"
              />
            </div>
          ))}
        </div>

        <button
          onClick={predictPurchase}
          disabled={loading}
          className="

mt-10

w-full

py-4

rounded-2xl

bg-gradient-to-r

from-cyan-500

via-purple-600

to-pink-600

font-bold

text-lg

hover:scale-[1.02]

transition

flex

items-center

justify-center

gap-3

shadow-lg

shadow-purple-500/20

"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" />
              Predicting...
            </>
          ) : (
            <>
              <Target />
              Predict Next Purchase 🚀
            </>
          )}
        </button>
      </GlassCard>
    </div>
  );
};

export default NextPurchase;
