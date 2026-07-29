import Card from "../components/Card";


function Dashboard(){


return(

<div>


<h1 className="
text-4xl
font-bold
">

Executive Dashboard

</h1>



<div className="
grid
grid-cols-4
gap-6
mt-10
">


<Card
title="Total Customers"
value="50K"
/>


<Card
title="Churn Risk"
value="12%"
/>


<Card
title="Revenue"
value="₹25L"
/>


<Card
title="AI Score"
value="94%"
/>


</div>



</div>

)

}


export default Dashboard;