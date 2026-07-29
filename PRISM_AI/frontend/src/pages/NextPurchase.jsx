import { useEffect, useState } from "react";
import GlassCard from "../components/GlassCard";
import { ShoppingCart, Clock } from "lucide-react";
import api from "../api/axios";


const NextPurchase = () => {

const [predictions,setPredictions] = useState([]);
const [loading,setLoading] = useState(true);


useEffect(()=>{

    const fetchPredictions = async()=>{

        try{

            const response = await api.get(
                "/next-purchase/next_purchase/"
            );

            setPredictions(response.data);

        }
        catch(error){

            console.log(
                "API ERROR:",
                error
            );

        }
        finally{
            setLoading(false);
        }

    }


    fetchPredictions();


},[]);



if(loading){

return(
<div className="text-white">
Loading AI Predictions...
</div>
)

}



return (

<div className="p-6">


<h1 className="text-3xl font-bold text-white">
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

<span className="
p-3 rounded-xl
bg-purple-500/10
text-purple-400
">

<ShoppingCart/>

</span>


<span className="
bg-emerald-500/10
text-emerald-400
px-3 py-1
rounded-lg
">

{p.likelihood}% Propensity

</span>


</div>



<h2 className="
text-white 
font-semibold 
mt-5
">

{p.customer}

</h2>



<p className="text-slate-400 text-sm mt-2">

Predicted Item:

<span className="text-white ml-2">

{p.product}

</span>

</p>



<div className="
border-t 
border-slate-800
mt-5
pt-4
flex
justify-between
">


<span className="
text-slate-400
flex
gap-2
items-center
">

<Clock size={15}/>

{p.expectedDate}

</span>



<span className="
text-cyan-400
font-bold
">

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