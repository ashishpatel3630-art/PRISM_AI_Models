import { useState } from "react";
import API from "../api/axios";
import { ShieldAlert, CheckCircle, TrendingDown, Loader2 } from "lucide-react";

const ChurnPredict = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    Age: "",
    Gender: "",
    Income: "",
    Location: "",
    Membership: "",
    Tenure: "",
    TotalSpend: "",
    TotalTransactions: "",
    AverageOrderValue: "",
    PurchaseFrequency: "",
    LastPurchaseDays: "",
    PreferredCategory: "",
    WebsiteVisits: "",
    AppUsageMinutes: "",
    LoginFrequency: "",
    WishlistCount: "",
    CartAbandonmentRate: "",
    MarketingClicks: "",
    SatisfactionScore: "",
    Rating: "",
    SupportCalls: "",
    Complaints: "",
    Reviews: "",
    CustomerHealthScore: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const predictChurn = async () => {
    try {
      setLoading(true);

      const res = await API.post("/api/churn/predict", formData)
      setResult(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const numericFields = [
    "Age",
    "Income",
    "Tenure",
    "TotalSpend",
    "TotalTransactions",
    "AverageOrderValue",
    "PurchaseFrequency",
    "LastPurchaseDays",
    "WebsiteVisits",
    "AppUsageMinutes",
    "LoginFrequency",
    "WishlistCount",
    "CartAbandonmentRate",
    "MarketingClicks",
    "SupportCalls",
    "Complaints",
    "Reviews",
  ];

  const dropdowns = {
    Gender: ["Male", "Female"],

    Membership: ["Free", "Bronze", "Silver", "Gold", "Platinum"],

    Location: ["California", "Texas", "New York", "Florida"],

    PreferredCategory: ["Electronics", "Fashion", "Beauty", "Sports"],
  };

  return (
    <div
      className="
min-h-screen
bg-gradient-to-br
from-[#0f172a]
via-purple-950
to-black
p-8
"
    >
      <div
        className="
max-w-6xl
mx-auto
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-8
shadow-2xl
"
      >
        <h1
          className="
text-4xl
font-bold
text-white
mb-2
flex
items-center
gap-3
"
        >
          <ShieldAlert className="text-purple-400" />
          Customer Churn Prediction AI
        </h1>

        <p
          className="
text-gray-400
mb-8
"
        >
          Predict customer risk using Machine Learning
        </p>

        <div
          className="
grid
md:grid-cols-2
gap-6
"
        >
          {numericFields.map((field) => (
            <div key={field}>
              <label
                className="
text-gray-300
text-sm
"
              >
                {field}
              </label>

              <input
                type="number"
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
text-white
border
border-white/20
focus:ring-2
focus:ring-purple-500
outline-none
"
              />
            </div>
          ))}

          {Object.keys(dropdowns).map((field) => (
            <div key={field}>
              <label
                className="
text-gray-300
text-sm
"
              >
                {field}
              </label>

              <select
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="
w-full
mt-2
p-3
rounded-xl
bg-black/40
text-white
border
border-white/20
"
              >
                <option value="">Select {field}</option>

                {dropdowns[field].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Scores */}

        <div
          className="
grid
md:grid-cols-3
gap-6
mt-8
"
        >
          {["SatisfactionScore", "Rating", "CustomerHealthScore"].map(
            (field) => (
              <div key={field}>
                <label
                  className="
text-gray-300
"
                >
                  {field}
                </label>

                <input
                  type="range"
                  min="0"
                  max="100"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="
w-full
mt-3
accent-purple-500
"
                />

                <p
                  className="
text-white
text-center
"
                >
                  {formData[field] || 0}
                </p>
              </div>
            ),
          )}
        </div>

        <button
          onClick={predictChurn}
          disabled={loading}
          className="
mt-10
w-full
py-4
rounded-xl
bg-gradient-to-r
from-purple-600
to-pink-600
text-white
font-bold
text-lg
hover:scale-105
transition
flex
justify-center
items-center
gap-3
"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" />
              Predicting...
            </>
          ) : (
            "Predict Customer Risk 🚀"
          )}
        </button>

        {result && (
          <div
            className="
mt-8
p-6
rounded-2xl
bg-black/40
border
border-white/20
text-white
"
          >
            <h2
              className="
text-2xl
font-bold
mb-4
"
            >
              Prediction Result
            </h2>

            <div className="flex gap-3 items-center">
              {result.prediction === 1 ? (
                <ShieldAlert className="text-red-500" />
              ) : (
                <CheckCircle className="text-green-500" />
              )}

              <span
                className="
text-xl
font-bold
"
              >
                {result.status}
              </span>
            </div>

            <div
              className="
mt-4
text-lg
"
            >
              Churn Probability :
              <span className="font-bold text-purple-400">
                {(result.churn_probability * 100).toFixed(2)}%
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChurnPredict;
