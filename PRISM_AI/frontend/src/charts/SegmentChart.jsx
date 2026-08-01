import React from "react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";


const COLORS = [
  "#06b6d4",
  "#8b5cf6",
  "#f43f5e",
  "#10b981"
];


const CustomTooltip = ({active,payload})=>{

  if(active && payload && payload.length){

    return (
      <div className="
      bg-slate-900 
      border 
      border-slate-700
      rounded-xl
      p-3
      text-white
      text-sm
      ">

        <p className="font-semibold">
          {payload[0].name}
        </p>

        <p className="text-cyan-400">
          Customers : {payload[0].value}
        </p>

      </div>
    )

  }

  return null;

}



const SegmentChart = ({segments=[]})=>{


if(!segments.length){

return (

<div className="h-64 flex items-center justify-center text-slate-400">

No Segment Data

</div>

)

}



return (

<div className="h-72 w-full">


<ResponsiveContainer width="100%" height="100%">


<PieChart>


<Pie

data={segments}

dataKey="customers"

nameKey="segment"

cx="50%"

cy="50%"

innerRadius={55}

outerRadius={90}

paddingAngle={5}

stroke="none"

>


{
segments.map((item,index)=>(

<Cell

key={index}

fill={COLORS[index % COLORS.length]}

/>

))

}


</Pie>



<Tooltip content={<CustomTooltip/>}/>



<Legend

verticalAlign="bottom"

height={36}

/>



</PieChart>



</ResponsiveContainer>


</div>


)

}


export default React.memo(SegmentChart);