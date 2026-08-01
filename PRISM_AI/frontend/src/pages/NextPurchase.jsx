import { useState } from "react";
import API from "../api/axios";

import GlassCard from "../components/GlassCard";
import { ShoppingCart, Sparkles, TrendingUp } from "lucide-react";

const NextPurchase = () => {
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const predictPurchase = async () => {
    try {
      setLoading(true);

      const response = await API.post("/next-purchase/predict", {
        Age: 35,

        Gender: "Male",

        Income: 80000,

        Location: "California",

        Membership: "Gold",

        Tenure: 24,

        TotalSpend: 50000,

        TotalTransactions: 40,

        AverageOrderValue: 1200,

        PurchaseFrequency: 8,

        LastPurchaseDays: 20,

        PreferredCategory: "Electronics",

        WebsiteVisits: 50,

        AppUsageMinutes: 300,

        LoginFrequency: 40,

        WishlistCount: 10,

        CartAbandonmentRate: 0.2,

        EmailOpenRate: 0.8,

        MarketingClicks: 15,

        SatisfactionScore: 9,

        Rating: 5,

        SupportCalls: 2,

        Complaints: 1,

        Reviews: 20,

        CustomerHealthScore: 90,

        ChurnRisk: 0,

        DiscountUsed: 5,

        CouponUsed: 2,

        ReferralCount: 3,

        PaymentMethod: "Credit Card",

        DeviceType: "Mobile",

        ReturnRate: 0.05,

        LoyaltyPoints: 5000,
      });

      setResult(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Next Purchase Prediction Engine
        </h1>

        <p className="text-slate-400">
          AI predicts customer's next purchase value and buying behavior.
        </p>

        <button
          onClick={predictPurchase}
          className="
mt-5
px-6
py-3
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
          {loading ? "Predicting..." : "Predict Next Purchase 🚀"}
        </button>
      </div>

      {result && (
        <GlassCard>
          <div className="flex items-center gap-3">
            <Sparkles className="text-cyan-400" />

            <h2 className="text-lg font-bold text-white">
              AI Prediction Result
            </h2>
          </div>

          <div className="mt-5">
            <p className="text-slate-400">Expected Next Purchase Amount</p>

            <h1
              className="
text-4xl
font-bold
text-cyan-400
mt-2
"
            >
              ${result["Predicted Next Purchase Amount"]}
            </h1>
          </div>
        </GlassCard>
      )}

      <div className="grid md:grid-cols-3 gap-5">
        <GlassCard>
          <ShoppingCart className="text-purple-400" />

          <p className="text-slate-400 mt-3">Prediction Window</p>

          <h2 className="text-2xl font-bold text-white">30 Days</h2>
        </GlassCard>

        <GlassCard>
          <TrendingUp className="text-green-400" />

          <p className="text-slate-400 mt-3">Customer Intent</p>

          <h2 className="text-2xl font-bold text-white">High</h2>
        </GlassCard>

        <GlassCard>
          <p className="text-slate-400">AI Confidence</p>

          <h2 className="text-2xl font-bold text-cyan-400">92%</h2>
        </GlassCard>
      </div>
    </div>
  );
};

export default NextPurchase;
