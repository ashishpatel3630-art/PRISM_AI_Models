import { useState } from "react";
import API from "../api/axios";

import GlassCard from "../components/GlassCard";

import {
  ShieldAlert,
  ShieldCheck,
  // AlertTriangle,
  Sparkles,
} from "lucide-react";

const Fraud = () => {
  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    Age: "",
    Gender: "Male",
    Income: "",

    Location: "Bhopal",

    AccountAgeDays: "",

    Membership: "Gold",

    ProductID: "101",

    Category: "Electronics",

    Quantity: "",

    Price: "",

    TotalAmount: "",

    PaymentMethod: "Card",

    CardType: "Visa",

    TransactionChannel: "Online",

    DeviceType: "Mobile",

    Browser: "Chrome",

    IPAddress: "",

    PreviousTransactionCount: "",

    AverageTransactionAmount: "",

    TransactionFrequency: "",

    TimeSinceLastTransaction: "",

    FailedLoginAttempts: "",

    PasswordChangeCount: "",

    NewDeviceLogin: "",

    IsInternational: "",

    DistanceFromHome: "",

    CustomerTotalSpend: "",

    CustomerAverageSpend: "",

    CustomerComplaints: "",

    CustomerRating: "",

    CustomerHealthScore: "",

    RefundCount: "",

    ChargebackCount: "",

    SuspiciousActivityCount: "",

    TransactionMonth: "",

    TransactionDay: "",

    TransactionHour: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const predictFraud = async () => {
    try {
      setLoading(true);

      const response = await API.post(
        "/api/fraud/predict",

        {
          ...formData,

          Age: Number(formData.Age),
          Income: Number(formData.Income),

          AccountAgeDays: Number(formData.AccountAgeDays),

          Quantity: Number(formData.Quantity),

          Price: Number(formData.Price),

          TotalAmount: Number(formData.TotalAmount),

          PreviousTransactionCount: Number(formData.PreviousTransactionCount),

          AverageTransactionAmount: Number(formData.AverageTransactionAmount),

          TransactionFrequency: Number(formData.TransactionFrequency),

          TimeSinceLastTransaction: Number(formData.TimeSinceLastTransaction),

          FailedLoginAttempts: Number(formData.FailedLoginAttempts),

          PasswordChangeCount: Number(formData.PasswordChangeCount),

          NewDeviceLogin: Number(formData.NewDeviceLogin),

          IsInternational: Number(formData.IsInternational),

          DistanceFromHome: Number(formData.DistanceFromHome),

          CustomerTotalSpend: Number(formData.CustomerTotalSpend),

          CustomerAverageSpend: Number(formData.CustomerAverageSpend),

          CustomerComplaints: Number(formData.CustomerComplaints),

          CustomerRating: Number(formData.CustomerRating),

          CustomerHealthScore: Number(formData.CustomerHealthScore),

          RefundCount: Number(formData.RefundCount),

          ChargebackCount: Number(formData.ChargebackCount),

          SuspiciousActivityCount: Number(formData.SuspiciousActivityCount),

          TransactionMonth: Number(formData.TransactionMonth),

          TransactionDay: Number(formData.TransactionDay),

          TransactionHour: Number(formData.TransactionHour),
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
          Fraud & Anomaly Detection Engine
        </h1>

        <p className="text-slate-400">AI powered transaction risk analysis.</p>
      </div>

      {result && (
        <GlassCard>
          <div className="flex items-center gap-3">
            <Sparkles className="text-cyan-400" />

            <h2 className="text-lg font-bold text-white">AI Fraud Result</h2>
          </div>

          <h3 className="text-3xl font-bold mt-5">
            {result["Fraud Prediction"] === 1 ? (
              <span className="text-red-400">Fraud Detected 🚨</span>
            ) : (
              <span className="text-green-400">Transaction Safe ✅</span>
            )}
          </h3>

          <p className="text-slate-300 mt-3">
            Fraud Probability :
            <span className="text-red-400 font-bold ml-2">
              {(result["Fraud Probability"] * 100).toFixed(2)}%
            </span>
          </p>
        </GlassCard>
      )}

      <GlassCard>
        <h2 className="text-lg font-semibold text-white mb-5">
          Transaction Risk Input
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {fields.map((field) => (
            <div key={field}>
              <label className="text-xs text-slate-400">{field}</label>

              <input
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field}
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
          onClick={predictFraud}
          disabled={loading}
          className="
mt-6
w-full
py-4
rounded-xl
bg-gradient-to-r
from-red-500
to-purple-600
text-white
font-bold
"
        >
          {loading ? "Analyzing Transaction..." : "Run Fraud Detection 🚀"}
        </button>
      </GlassCard>

      <GlassCard>
        <div className="flex items-center gap-3">
          {result?.["Fraud Prediction"] === 1 ? (
            <ShieldAlert className="text-red-400" />
          ) : (
            <ShieldCheck className="text-green-400" />
          )}

          <h2 className="text-lg font-semibold text-white">
            Risk Intelligence
          </h2>
        </div>

        <p className="text-slate-400 mt-4">
          CatBoost based real-time fraud classification model.
        </p>
      </GlassCard>
    </div>
  );
};

export default Fraud;
