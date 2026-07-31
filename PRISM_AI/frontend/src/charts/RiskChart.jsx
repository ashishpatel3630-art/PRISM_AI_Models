import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip 
} from "recharts";

import {useEffect,useState} from "react";
import API from "../api/axios";


const RiskChart = () => {


  const [risk,setRisk] = useState([]);


  useEffect(()=>{

    API.get("/risk")
    .then(res=>{

      setRisk(res.data);

    })
    .catch(err=>{
      console.log(err);
    })


  },[]);



  return (

    <div className="h-64 w-full">

      <ResponsiveContainer width="100%" height="100%">

        <BarChart data={risk}>

          <XAxis 
            dataKey="risk"
            stroke="#64748b"
            fontSize={12}
            tickLine={false}
          />


          <YAxis
            stroke="#64748b"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />


          <Tooltip 
            contentStyle={{
              backgroundColor:"#0f172a",
              borderColor:"#334155",
              borderRadius:"12px"
            }}
          />


          <Bar 
            dataKey="count"
            fill="#a855f7"
            radius={[8,8,0,0]}
          />


        </BarChart>


      </ResponsiveContainer>


    </div>

  )

}


export default RiskChart;