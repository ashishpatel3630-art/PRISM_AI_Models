import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Enterprise', value: 400, color: '#06b6d4' },
  { name: 'SMB', value: 300, color: '#a855f7' },
  { name: 'Startup', value: 300, color: '#3b82f6' },
];

const SegmentChart = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SegmentChart;