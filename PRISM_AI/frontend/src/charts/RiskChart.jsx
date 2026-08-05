import React from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

import { ShieldAlert, TrendingDown } from "lucide-react";

const RISK_STYLE = {
  Low: "#ffffff",

  Medium: "#9ca3af",

  High: "#ef4444",
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <div
        className="
rounded-xl
border
border-white/10
bg-[#0B0B0B]
px-4
py-3
shadow-xl
"
      >
        <p
          className="
text-sm
font-medium
text-white
"
        >
          {data.risk} Risk
        </p>

        <p
          className="
mt-1
text-xs
text-gray-400
"
        >
          Customers : {data.count}
        </p>
      </div>
    );
  }

  return null;
};

const RiskChart = ({ risk = [] }) => {
  if (!risk.length) {
    return (
      <div
        className="
flex
h-64
items-center
justify-center
rounded-2xl
border
border-white/10
bg-white/[0.03]
text-gray-500
"
      >
        No Risk Data Available
      </div>
    );
  }

  const total = risk.reduce(
    (sum, item) => sum + item.count,

    0,
  );

  return (
    <div
      className="
space-y-6
"
    >
      {/* Header */}

      <div
        className="
flex
items-center
justify-between
"
      >
        <div>
          <div
            className="
flex
items-center
gap-2
text-gray-400
"
          >
            <ShieldAlert size={18} />
            Risk Intelligence
          </div>

          <h2
            className="
mt-2
text-3xl
font-semibold
text-white
"
          >
            {total.toLocaleString()}
          </h2>

          <p
            className="
text-sm
text-gray-500
"
          >
            Customers analyzed
          </p>
        </div>

        <div
          className="
flex
items-center
gap-2
rounded-full
border
border-white/10
bg-white/5
px-3
py-2
text-xs
text-gray-300
"
        >
          <TrendingDown size={14} />
          AI Monitoring
        </div>
      </div>

      {/* Chart */}

      <div
        className="
h-[280px]
w-full
rounded-2xl
border
border-white/10
bg-black/20
p-4
"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={risk}
            margin={{
              top: 20,

              right: 10,

              left: -20,

              bottom: 10,
            }}
          >
            <CartesianGrid
              stroke="rgba(255,255,255,0.06)"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="risk"
              stroke="#666"
              tickLine={false}
              axisLine={false}
            />

            <YAxis stroke="#666" tickLine={false} axisLine={false} />

            <Tooltip content={<CustomTooltip />} />

            <Bar dataKey="count" radius={[12, 12, 0, 0]}>
              {risk.map((item, index) => (
                <Cell key={index} fill={RISK_STYLE[item.risk] || "#666"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p
        className="
text-xs
text-gray-500
"
      >
        AI fraud and churn risk monitoring model
      </p>
    </div>
  );
};

export default React.memo(RiskChart);
