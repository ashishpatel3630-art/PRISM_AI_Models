import {
ResponsiveContainer,
AreaChart,
Area,
XAxis,
YAxis,
Tooltip,
CartesianGrid
} from "recharts";


const RevenueChart = ({data=[]}) => {


return (

<div className="h-72 w-full">


<ResponsiveContainer width="100%" height="100%">


<AreaChart data={data}>


<defs>

<linearGradient 
id="revenueGradient"
x1="0"
y1="0"
x2="0"
y2="1"
>

<stop 
offset="0%"
stopColor="#06b6d4"
stopOpacity={0.35}
/>


<stop
offset="100%"
stopColor="#06b6d4"
stopOpacity={0}
/>


</linearGradient>


</defs>




<CartesianGrid
stroke="#1e293b"
strokeDasharray="4 4"
/>




<XAxis

dataKey="month"

stroke="#64748b"

tickLine={false}

axisLine={false}

/>




<YAxis

stroke="#64748b"

tickLine={false}

axisLine={false}

/>





<Tooltip


contentStyle={{

background:"#020617",

border:"1px solid #334155",

borderRadius:"14px",

color:"#fff"

}}



/>




<Area

type="monotone"

dataKey="revenue"

stroke="#06b6d4"

strokeWidth={3}

fill="url(#revenueGradient)"

dot={{
r:4,
fill:"#06b6d4"
}}

/>




</AreaChart>


</ResponsiveContainer>


</div>

)

}


export default RevenueChart;