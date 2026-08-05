import { useState } from "react";
import API from "../api/axios";

import {
  ShieldAlert,
  CheckCircle,
  Loader2,
  Brain,
  Activity,
  TrendingDown,
} from "lucide-react";

const ChurnPredict = () => {
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

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
    SatisfactionScore: 50,
    Rating: 50,
    SupportCalls: "",
    Complaints: "",
    Reviews: "",
    CustomerHealthScore: 50,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const predictChurn = async () => {
    try {
      setLoading(true);

      const res = await API.post("/api/churn/predict", formData);

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
bg-[#050505]
text-white
p-6
md:p-10
"
    >
      {/* Header */}

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
tracking-tight
"
            >
              Customer Churn AI
            </h1>

            <p
              className="
text-gray-500
mt-1
"
            >
              Machine Learning Customer Risk Intelligence
            </p>
          </div>
        </div>
      </div>

      {/* Main Card */}

      <div
        className="

bg-[#0B0B0B]

border

border-white/10

rounded-3xl

p-6

md:p-10

shadow-2xl

"
      >
        <h2
          className="
flex
items-center
gap-3
text-xl
font-semibold
mb-8
"
        >
          <Activity className="text-cyan-400" />
          Customer Profile
        </h2>

        <div
          className="
grid
md:grid-cols-3
gap-6
"
        >
          {numericFields.map((field) => (
            <div key={field}>
              <label
                className="
text-sm
text-gray-400
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

          {Object.keys(dropdowns).map((field) => (
            <div key={field}>
              <label
                className="
text-sm
text-gray-400
"
              >
                {field}
              </label>

              <select
                name={field}
                value={formData[field]}
                onChange={handleChange}
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

focus:border-white

"
              >
                <option>Select {field}</option>

                {dropdowns[field].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* AI Score Section */}

        <div
          className="
grid
md:grid-cols-3
gap-6
mt-10
"
        >
          {["SatisfactionScore", "Rating", "CustomerHealthScore"].map(
            (field) => (
              <div
                key={field}
                className="

bg-black

border

border-white/10

rounded-2xl

p-5

"
              >
                <div
                  className="
flex
justify-between
"
                >
                  <span
                    className="
text-gray-400
"
                  >
                    {field}
                  </span>

                  <span
                    className="
font-bold
text-cyan-400
"
                  >
                    {formData[field]}
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="

w-full

mt-5

accent-cyan-400

"
                />
              </div>
            ),
          )}
        </div>

        {/* Button */}

        <button
          onClick={predictChurn}
          disabled={loading}
          className="

mt-10

w-full

rounded-2xl

py-4

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
              Analyzing...
            </>
          ) : (
            <>
              <TrendingDown />
              Predict Churn Risk
            </>
          )}
        </button>
      </div>

      {/* RESULT */}

      {result && (
        <div
          className="

mt-8

bg-[#0B0B0B]

border

border-white/10

rounded-3xl

p-8

shadow-xl

"
        >
          <h2
            className="
text-xl
font-semibold
mb-6
"
          >
            Prediction Result
          </h2>

          <div
            className="
flex
items-center
gap-5
"
          >
            {result.prediction === 1 ? (
              <ShieldAlert size={50} className="text-red-400" />
            ) : (
              <CheckCircle size={50} className="text-green-400" />
            )}

            <div>
              <p
                className="
text-2xl
font-bold
"
              >
                {result.status}
              </p>

              <p
                className="
text-gray-500
mt-2
"
              >
                Churn Probability
              </p>

              <p
                className="
text-4xl
font-bold
mt-2
"
              >
                {(result.churn_probability * 100).toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChurnPredict;
