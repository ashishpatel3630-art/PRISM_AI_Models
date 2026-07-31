import {
 ResponsiveContainer,
 PieChart,
 Pie,
 Cell,
 Tooltip
} from "recharts";


import {useEffect,useState} from "react";
import API from "../api/axios";



const colors=[
"#06b6d4",
"#a855f7",
"#f43f5e"
];



const SegmentChart =()=>{


const [segments,setSegments]=useState([]);



useEffect(()=>{


API.get("/segment")
.then(res=>{

setSegments(res.data)

})
.catch(err=>{
console.log(err)
})


},[])



return (

<div className="h-64 w-full">

<ResponsiveContainer width="100%" height="100%">


<PieChart>


<Pie

data={segments}

dataKey="customers"

nameKey="segment"

cx="50%"

cy="50%"

outerRadius={90}


/>


{
segments.map((entry,index)=>(

<Cell

key={index}

fill={colors[index % colors.length]}

/>

))

}



<Tooltip

contentStyle={{
backgroundColor:"#0f172a",
borderColor:"#334155",
borderRadius:"12px"
}}

/>



</PieChart>


</ResponsiveContainer>


</div>


)


}


export default SegmentChart;