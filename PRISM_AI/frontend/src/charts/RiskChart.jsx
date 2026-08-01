import React from "react";


import {

ResponsiveContainer,

BarChart,

Bar,

XAxis,

YAxis,

Tooltip,

CartesianGrid,

Cell

} from "recharts";



const COLORS={

Low:"#06b6d4",

Medium:"#f59e0b",

High:"#f43f5e"

}



const CustomTooltip=({active,payload})=>{


if(active && payload && payload.length){


return (

<div className="
bg-slate-900
border
border-slate-700
rounded-xl
p-3
text-white
">


<p>

{payload[0].payload.risk}

</p>


<p className="text-cyan-400">

Count : {payload[0].value}

</p>


</div>

)


}


return null;


}




const RiskChart = ({risk=[]})=>{


if(!risk.length){


return (

<div className="h-64 flex items-center justify-center text-slate-400">

No Risk Data

</div>

)

}



return (

<div className="h-72 w-full">


<ResponsiveContainer width="100%" height="100%">


<BarChart

data={risk}

margin={{

top:10,

right:10,

left:-20,

bottom:5

}}

>


<CartesianGrid

strokeDasharray="3 3"

stroke="#1e293b"

/>



<XAxis

dataKey="risk"

stroke="#94a3b8"

/>



<YAxis

stroke="#94a3b8"

/>



<Tooltip

content={<CustomTooltip/>}

/>



<Bar

dataKey="count"

radius={[10,10,0,0]}

>


{

risk.map((item,index)=>(


<Cell

key={index}

fill={COLORS[item.risk] || "#8b5cf6"}

/>


))

}



</Bar>



</BarChart>


</ResponsiveContainer>


</div>

)

}



export default React.memo(RiskChart);