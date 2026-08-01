import { useState } from "react";
import API from "../api/axios";

import GlassCard from "../components/GlassCard";
import {
  ShieldAlert,
  AlertOctagon,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";


const Fraud = () => {


const [result,setResult] = useState(null);
const [loading,setLoading] = useState(false);



const predictFraud = async()=>{

try{

setLoading(true);


const response = await API.post(
"/fraud/predict",
{

Age:35,
Income:80000,
AccountAgeDays:730,
TransactionFrequency:20,
FailedLoginAttempts:2,
CustomerHealthScore:90,
CustomerTotalSpend:50000,
CustomerRating:5,
Quantity:2,
Price:5000,
TotalAmount:10000

}
);


setResult(response.data);


}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}

};



const anomalies = [
{
id:"TXN-9021",
customer:"Global Trade",
amount:"$42,500",
reason:"High-Velocity IP Switching + New Device",
riskLevel:"Critical"
},

{
id:"TXN-8812",
customer:"User_4102",
amount:"$8,200",
reason:"Unusual International Card Origin",
riskLevel:"High"
},

{
id:"TXN-7401",
customer:"TechStart LLC",
amount:"$15,000",
reason:"Failed Login Spikes prior to Payment",
riskLevel:"Medium"
}

];



return (

<div className="space-y-8">


<div>

<h1 className="text-2xl font-bold text-white">
Fraud & Anomaly Detection Engine
</h1>


<p className="text-sm text-slate-400">
Real-time isolation of suspicious activity and payment risk signals.
</p>


<button

onClick={predictFraud}

className="
mt-5
px-6
py-3
rounded-xl
bg-gradient-to-r
from-red-500
to-purple-600
text-white
font-bold
hover:scale-105
transition
"

>

{
loading
?
"Analyzing..."
:
"Run AI Fraud Detection 🚀"
}


</button>


</div>




{
result && (

<GlassCard>


<h2 className="text-lg font-bold text-white mb-4">
AI Fraud Result
</h2>



<div className="space-y-2 text-slate-300">


<p>

Prediction :

<span className="ml-2 font-bold text-white">

{
result["Fraud Prediction"] === 1
?
"Fraud Detected 🚨"
:
"Safe Transaction ✅"
}

</span>

</p>



<p>

Fraud Probability :

<span className="ml-2 text-red-400 font-bold">

{
(result["Fraud Probability"]*100).toFixed(2)
}%

</span>

</p>


<p>

Risk :

<span className="ml-2 text-yellow-400 font-bold">

{
result.Risk
}

</span>

</p>


</div>


</GlassCard>

)

}




<div className="grid grid-cols-1 gap-5 md:grid-cols-3">


<GlassCard>

<div className="flex justify-between items-center">

<p className="text-xs text-slate-400">
Flagged Anomalies (24h)
</p>

<ShieldAlert className="text-red-400"/>

</div>


<h3 className="text-2xl font-bold text-white mt-2">
14 Alerts
</h3>


<p className="text-xs text-red-400">
3 Critical severity
</p>


</GlassCard>





<GlassCard>

<div className="flex justify-between items-center">

<p className="text-xs text-slate-400">
Prevented Chargebacks
</p>

<ShieldCheck className="text-green-400"/>

</div>


<h3 className="text-2xl font-bold text-white mt-2">
$128,400
</h3>


<p className="text-xs text-green-400">
AI Protection Active
</p>


</GlassCard>






<GlassCard>

<div className="flex justify-between items-center">

<p className="text-xs text-slate-400">
False Positive Rate
</p>


<CheckCircle2 className="text-cyan-400"/>

</div>


<h3 className="text-2xl font-bold text-white mt-2">
0.12%
</h3>


<p className="text-xs text-slate-400">
Model Performance
</p>


</GlassCard>


</div>






<GlassCard>

<h2 className="text-lg font-semibold text-white mb-4">
Real-Time Risk Feeds
</h2>



<div className="space-y-3">


{
anomalies.map((a)=>(


<div

key={a.id}

className="
flex
flex-col
md:flex-row
justify-between
md:items-center
p-3.5
rounded-xl
bg-slate-900/60
border
border-slate-800
text-xs
gap-3
"


>


<div className="flex items-center gap-3">


<AlertOctagon

className={`h-5 w-5 ${
a.riskLevel==="Critical"
?
"text-red-500"
:
"text-yellow-500"
}`}

/>


<div>


<div className="flex gap-2">

<span className="font-bold text-white">

{a.id}

</span>


<span className="text-slate-400">

• {a.customer}

</span>


</div>


<p className="text-slate-400">

{a.reason}

</p>


</div>


</div>




<div className="flex items-center gap-4">


<span className="font-semibold text-white">

{a.amount}

</span>



<button

className="
px-3
py-1
rounded
bg-red-500/20
text-red-300
border
border-red-500/30
"

>

Block & Review

</button>


</div>



</div>


))

}



</div>


</GlassCard>



</div>

);

};


export default Fraud;