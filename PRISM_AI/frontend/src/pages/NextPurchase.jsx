import { useState } from "react";
import API from "../api/axios";

import GlassCard from "../components/GlassCard";
import { ShoppingCart, Sparkles, 
    // TrendingUp

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

      const response = await API.post(
        "/next-purchase/predict",

        {
          ...formData,

          Age: Number(formData.Age),
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
          CartAbandonmentRate: Number(formData.CartAbandonmentRate),
          EmailOpenRate: Number(formData.EmailOpenRate),
          MarketingClicks: Number(formData.MarketingClicks),
          SatisfactionScore: Number(formData.SatisfactionScore),
          Rating: Number(formData.Rating),
          SupportCalls: Number(formData.SupportCalls),
          Complaints: Number(formData.Complaints),
          Reviews: Number(formData.Reviews),
          CustomerHealthScore: Number(formData.CustomerHealthScore),
          ChurnRisk: Number(formData.ChurnRisk),
          DiscountUsed: Number(formData.DiscountUsed),
          CouponUsed: Number(formData.CouponUsed),
          ReferralCount: Number(formData.ReferralCount),
          ReturnRate: Number(formData.ReturnRate),
          LoyaltyPoints: Number(formData.LoyaltyPoints),
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
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Next Purchase Prediction Engine
        </h1>

        <p className="text-slate-400">
          AI predicts customer's next expected purchase amount.
        </p>
      </div>

      {result && (
        <GlassCard>
          <div className="flex items-center gap-3">
            <Sparkles className="text-cyan-400" />

            <h2 className="text-lg font-bold text-white">
              AI Prediction Result
            </h2>
          </div>

          <h3 className="text-4xl font-bold text-cyan-400 mt-5">
            ${Number(result["Next Purchase Amount"]).toFixed(2)}
          </h3>

          <p className="text-slate-400 mt-2">
            Predicted future customer spending
          </p>
        </GlassCard>
      )}

      <GlassCard>
        <h2 className="text-lg font-semibold text-white mb-5">
          Customer Behavior Input
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {fields.map((field) => (
            <div key={field}>
              <label className="text-xs text-slate-400">{field}</label>

              <input
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="
w-full
mt-2
p-3
rounded-xl
bg-black/40
border
border-white/20
text-white
"
              />
            </div>
          ))}
        </div>

        <button
          onClick={predictPurchase}
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
"
        >
          {loading ? "Predicting..." : "Predict Next Purchase 🚀"}
        </button>
      </GlassCard>

      <GlassCard>
        <div className="flex gap-3 items-center">
          <ShoppingCart className="text-purple-400" />

          <h2 className="text-lg font-semibold text-white">
            Purchase Intelligence
          </h2>
        </div>

        <div className="mt-5 grid md:grid-cols-2 gap-5">
          <div>
            <p className="text-slate-400 text-sm">Customer Value Trend</p>

            <p className="text-white font-bold text-xl">Growing Customer 📈</p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">Prediction Model</p>

            <p className="text-white font-bold text-xl">AI Regression Model</p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default NextPurchase;
