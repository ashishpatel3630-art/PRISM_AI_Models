import React, {useEffect, useState} from "react";
import GlassCard from "../components/GlassCard";
import {ShoppingCart, Clock} from "lucide-react";
import api from "../api/axios";


const NextPurchase =()=>{


const [predictions,setPredictions]=useState([]);


useEffect(()=>{

const fetchData=async()=>{

try{

const res = await api.get(
"/next_purchase"
);


console.log(res.data);

setPredictions(res.data);


}
catch(error){

console.log(
"API ERROR:",
error
);

}

};


fetchData();


},[]);



return (

<div>


<h1 className="text-3xl text-white font-bold">
Next Purchase & Expansion Predictor
</h1>


<p className="text-slate-400 mt-2">
Propensity models forecasting upcoming cross-sell and upsell timing.
</p>



<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">


{
predictions.map((p,index)=>(


<GlassCard key={index}>


<div className="flex justify-between">


<div className="p-2 rounded-xl bg-purple-500/10">

<ShoppingCart 
className="text-purple-400"
/>

</div>


<span className="text-emerald-400">
{p.likelihood}%
</span>


</div>



<h2 className="text-white mt-5 text-xl">

{p.customer}

</h2>



<p className="text-slate-400 mt-2">

{p.product}

</p>



<div className="flex justify-between mt-5">


<span className="text-slate-400 flex gap-2">

<Clock size={16}/>

{p.expectedDate}

</span>



<span className="text-cyan-400">

{p.dealValue}

</span>


</div>


</GlassCard>


))


}


</div>


</div>

)

}


export default NextPurchase;