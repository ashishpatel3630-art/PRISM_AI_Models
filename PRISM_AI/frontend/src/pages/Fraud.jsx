import { useState } from "react";
import API from "../api/axios";

import GlassCard from "../components/GlassCard";

import {
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Brain,
  Loader2,
  Activity
} from "lucide-react";



const Fraud = () => {


const [result,setResult]=useState(null);

const [loading,setLoading]=useState(false);



const [formData,setFormData]=useState({

Age:"",
Gender:"Male",
Income:"",

Location:"Bhopal",

AccountAgeDays:"",

Membership:"Gold",

ProductID:"101",

Category:"Electronics",

Quantity:"",

Price:"",

TotalAmount:"",

PaymentMethod:"Card",

CardType:"Visa",

TransactionChannel:"Online",

DeviceType:"Mobile",

Browser:"Chrome",

IPAddress:"",

PreviousTransactionCount:"",

AverageTransactionAmount:"",

TransactionFrequency:"",

TimeSinceLastTransaction:"",

FailedLoginAttempts:"",

PasswordChangeCount:"",

NewDeviceLogin:"",

IsInternational:"",

DistanceFromHome:"",

CustomerTotalSpend:"",

CustomerAverageSpend:"",

CustomerComplaints:"",

CustomerRating:"",

CustomerHealthScore:"",

RefundCount:"",

ChargebackCount:"",

SuspiciousActivityCount:"",

TransactionMonth:"",

TransactionDay:"",

TransactionHour:""

});





const handleChange=(e)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};





const predictFraud=async()=>{


try{


setLoading(true);



const response=await API.post(

"/api/fraud/predict",

Object.fromEntries(

Object.entries(formData).map(([key,value])=>[

key,

Number(value) || value

])

)

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





const fields=Object.keys(formData);






return (

<div className="
min-h-screen
bg-[#050505]
text-white
p-6
md:p-10
">







{/* HEADER */}


<div className="mb-10">


<div className="
flex
items-center
gap-4
">


<div className="
p-4
rounded-2xl
bg-white/[0.04]
border
border-white/10
">


<Brain

className="text-cyan-400"

/>


</div>




<div>


<h1 className="
text-3xl
font-bold
">

Fraud Intelligence AI

</h1>


<p className="
text-gray-500
mt-2
">

AI powered transaction risk analysis engine

</p>



</div>



</div>



</div>









{/* RESULT CARD */}



{

result && (


<GlassCard className="mb-8">


<div className="
flex
items-center
gap-3
">


<Sparkles

className="text-cyan-400"

/>


<h2 className="
text-xl
font-semibold
">

AI Fraud Result

</h2>


</div>






<div className="
mt-6
flex
items-center
gap-5
">


{

result["Fraud Prediction"]===1 ?


<ShieldAlert

size={55}

className="text-red-400"

/>


:


<ShieldCheck

size={55}

className="text-green-400"

/>



}





<div>


<h2 className="
text-3xl
font-bold
">


{

result["Fraud Prediction"]===1 ?

"Fraud Detected 🚨"

:

"Transaction Safe ✅"

}



</h2>



<p className="
text-gray-400
mt-3
">


Fraud Probability


<span className="
ml-2
font-bold
text-white
">


{

(result["Fraud Probability"]*100)

.toFixed(2)

}%

</span>


</p>



</div>



</div>



</GlassCard>



)

}









{/* INPUT CARD */}




<GlassCard>




<div className="
flex
items-center
gap-3
mb-8
">


<Activity

className="text-cyan-400"

/>


<h2 className="
text-xl
font-semibold
">

Transaction Risk Input

</h2>



</div>







<div className="
grid
md:grid-cols-4
gap-5
">



{


fields.map(field=>(


<div key={field}>


<label className="
text-xs
text-gray-500
">

{field}

</label>




<input


name={field}


value={formData[field]}


onChange={handleChange}


placeholder={field}



className="

mt-2

w-full

rounded-xl

bg-black

border

border-white/10

px-4

py-3

text-white

outline-none

focus:border-cyan-400

transition

"



/>



</div>



))


}





</div>








<button

onClick={predictFraud}

disabled={loading}


className="

mt-10

w-full

rounded-2xl

py-4

bg-white

text-black

font-bold

text-lg

hover:bg-gray-200

hover:scale-[1.02]

transition

flex

items-center

justify-center

gap-3

"

>



{

loading ?

<>

<Loader2 className="animate-spin"/>

Analyzing Transaction...

</>


:

<>

<Sparkles/>

Run Fraud Detection

</>



}



</button>







</GlassCard>









{/* MODEL INFO */}




<GlassCard className="mt-8">


<div className="
flex
items-center
gap-3
">


{

result?.["Fraud Prediction"]===1 ?

<ShieldAlert className="text-red-400"/>

:

<ShieldCheck className="text-green-400"/>

}



<h2 className="
text-xl
font-semibold
">

Risk Intelligence

</h2>


</div>




<p className="
text-gray-500
mt-4
">

CatBoost based real-time fraud classification model powering transaction security.

</p>



</GlassCard>








</div>


);


};


export default Fraud;