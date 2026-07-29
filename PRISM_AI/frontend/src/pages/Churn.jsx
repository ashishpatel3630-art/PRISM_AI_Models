import {useState} from "react";
import API from "../api/axios";


function Churn(){


const [result,setResult]=useState(null);



const predict=async()=>{


const data={

age:30,

income:50000,

balance:20000,

transactions:40

};


const res =
await API.post(
"/churn/",
data
);


setResult(res.data);


}



return(

<div>


<h1 className="text-3xl font-bold">
Customer Churn Prediction
</h1>



<button

onClick={predict}

className="
bg-black
text-white
px-6
py-3
rounded-lg
mt-5
"

>

Predict

</button>



{
result &&

<div className="mt-6 bg-white p-5 rounded-xl">


<h2>
Prediction:
{result.prediction}
</h2>


<h2>
Probability:
{result.churn_probability}
</h2>


</div>

}


</div>

)


}


export default Churn;