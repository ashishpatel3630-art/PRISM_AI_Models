import React from "react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import { Users, Layers } from "lucide-react";

const COLORS = ["#ffffff", "#9ca3af", "#6b7280", "#374151"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
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
          {payload[0].name}
        </p>

        <p
          className="
mt-1
text-xs
text-gray-400
"
        >
          Customers : {payload[0].value}
        </p>
      </div>
    );
  }

  return null;
};

const CustomLegend = ({ payload }) => {
  return (
    <div
      className="
mt-5
flex
flex-wrap
justify-center
gap-4
"
    >
      {payload.map((item, index) => (
        <div
          key={index}
          className="
flex
items-center
gap-2
text-xs
text-gray-400
"
        >
          <span
            className="
h-2
w-2
rounded-full
"
            style={{
              background: item.color,
            }}
          />

          {item.value}
        </div>
      ))}
    </div>
  );
};

const SegmentChart = ({ segments = [] }) => {
  if (!segments.length) {
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
        No Segment Data Available
      </div>
    );
  }

  const totalCustomers = segments.reduce(
    (sum, item) => sum + item.customers,

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
            <Layers size={18} />
            Customer Segments
          </div>

          <h2
            className="
mt-2
text-3xl
font-semibold
text-white
"
          >
            {totalCustomers.toLocaleString()}
          </h2>

          <p
            className="
text-sm
text-gray-500
"
          >
            Customers grouped by AI
          </p>
        </div>

        <div
          className="
rounded-xl
border
border-white/10
bg-white/5
p-3
text-gray-300
"
        >
          <Users size={18} />
        </div>
      </div>

      {/* Donut Chart */}

      <div
        className="
h-[320px]
w-full
"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={segments}
              dataKey="customers"
              nameKey="segment"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={4}
              stroke="none"
            >
              {segments.map((item, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip content={<CustomTooltip />} />

            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <p
        className="
text-xs
text-gray-500
"
      >
        AI clustering model identifies customer behavior patterns
      </p>
    </div>
  );
};

export default React.memo(SegmentChart);
