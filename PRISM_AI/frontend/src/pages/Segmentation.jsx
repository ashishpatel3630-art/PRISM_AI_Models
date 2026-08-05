import { useState } from "react";

import GlassCard from "../components/GlassCard";
import SegmentChart from "../charts/SegmentChart";
import API from "../api/axios";

import {
  Users,
  Zap,
  Award,
  Target,
  Sparkles,
  Loader2,
  Brain,
} from "lucide-react";


const Segmentation = () => {


const [result,setResult] = useState(null);

const [loading,setLoading] = useState(false);



const [formData,setFormData] = useState({

Income:"",

TotalSpend:"",

TotalTransactions:"",

AverageOrderValue:"",

PurchaseFrequency:"",

LastPurchaseDays:"",

WebsiteVisits:"",

AppUsageMinutes:"",

LoginFrequency:"",

CustomerHealthScore:"",

SatisfactionScore:"",

SupportCalls:"",

Complaints:"",

});





const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};





const predictSegment = async()=>{


try{


setLoading(true);



const payload={};


Object.keys(formData).forEach((key)=>{


payload[key] = 
formData[key]===""
?
0
:
Number(formData[key]);


});



const response = await API.post(
"/api/segmentation/predict",
payload
);



setResult(response.data);



}catch(error){

console.log(error);


}finally{

setLoading(false);

}


};





const segments=[


{
name:"Enterprise Champions",
icon:Award,
color:"text-cyan-400",
description:"High value premium customers",
},


{
name:"Loyal Power Users",
icon:Zap,
color:"text-purple-400",
description:"Frequent active customers",
},


{
name:"At Risk Customers",
icon:Target,
color:"text-red-400",
description:"Customers requiring retention",
},


{
name:"New Customers",
icon:Users,
color:"text-green-400",
description:"Recently acquired users",
},


];





return (


<div className="
min-h-screen
bg-black
text-white
p-6
">



{/* Header */}


<div className="mb-10">


<div className="flex gap-3 items-center">


<div className="
p-3
rounded-xl
bg-purple-500/10
border
border-purple-400/20
">

<Brain
className="text-purple-400"
/>


</div>


<div>


<h1 className="
text-3xl
font-bold
bg-gradient-to-r
from-cyan-400
via-purple-400
to-pink-400
bg-clip-text
text-transparent
">


AI Customer Segmentation


</h1>


<p className="text-gray-400 mt-2">

AI powered clustering and customer behaviour intelligence

</p>


</div>


</div>


</div>







{/* Input */}


<GlassCard>


<h2 className="
text-xl
font-bold
mb-6
flex
items-center
gap-2
">


<Sparkles
className="text-yellow-400"
/>


Customer Behaviour Data


</h2>



<div className="
grid
md:grid-cols-4
gap-5
">


{
Object.keys(formData).map((field)=>(


<div key={field}>


<label className="
text-xs
text-gray-400
">

{field}

</label>



<input

name={field}

value={formData[field]}

onChange={handleChange}


placeholder={`Enter ${field}`}


className="
w-full
mt-2
p-3
rounded-xl
bg-black/50
border
border-white/10
text-white
outline-none
transition
focus:border-cyan-400
focus:ring-2
focus:ring-cyan-400/20
"

/>



</div>



))

}



</div>




<button

onClick={predictSegment}

disabled={loading}


className="
mt-8
w-full
py-4
rounded-2xl
bg-gradient-to-r
from-cyan-500
via-purple-600
to-pink-600
font-bold
text-lg
hover:scale-[1.02]
transition
flex
justify-center
items-center
gap-3
"


>



{
loading ?

<>

<Loader2
className="animate-spin"
/>

Analyzing Customers...


</>


:


<>

<Sparkles/>

Predict Customer Segment 🚀

</>

}


</button>



</GlassCard>








{/* Result */}


{
result && (


<GlassCard>


<div className="
flex
items-center
gap-3
">


<Sparkles
className="text-yellow-400"
/>


<h2 className="
text-xl
font-bold
">

AI Segmentation Result

</h2>


</div>




<div className="
mt-6
grid
md:grid-cols-2
gap-5
">



<div className="
bg-white/5
p-5
rounded-xl
border
border-white/10
">


<p className="text-gray-400 text-sm">

Customer Segment

</p>



<h2 className="
text-2xl
font-bold
text-cyan-400
mt-2
">


{
result.segment_name
}


</h2>


</div>





<div className="
bg-white/5
p-5
rounded-xl
border
border-white/10
">


<p className="text-gray-400 text-sm">

Cluster ID

</p>



<h2 className="
text-2xl
font-bold
text-purple-400
mt-2
">


{
result.segment
}


</h2>



</div>



</div>



</GlassCard>



)

}








{/* Analytics */}


<div className="
grid
lg:grid-cols-3
gap-6
mt-8
">



<GlassCard>


<h2 className="
text-lg
font-bold
mb-5
">

Segment Distribution

</h2>


<SegmentChart/>


</GlassCard>






<div className="
lg:col-span-2
grid
md:grid-cols-2
gap-5
">


{
segments.map((seg,index)=>{


const Icon=seg.icon;


return (


<GlassCard key={index}>


<div className="
flex
items-center
gap-4
">


<div className="
p-3
rounded-xl
bg-white/5
border
border-white/10
">


<Icon
className={seg.color}
/>


</div>




<div>


<h3 className="
font-bold
text-white
">

{seg.name}

</h3>


<p className="
text-sm
text-gray-400
">

{seg.description}

</p>


</div>



</div>



</GlassCard>


)


})

}



</div>



</div>







</div>


);


};


export default Segmentation;