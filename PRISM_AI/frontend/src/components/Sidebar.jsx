import {
LayoutDashboard,
Brain,
Users,
DollarSign,
ShieldCheck,
ShoppingCart
} from "lucide-react";


import {Link} from "react-router-dom";


function Sidebar(){

return (

<div className="
w-64
min-h-screen
bg-black
text-white
p-6
">


<h1 className="
text-3xl
font-bold
mb-10
">

PRISM AI

</h1>



<div className="space-y-6">


<Link to="/">
<LayoutDashboard/>
Dashboard
</Link>


<Link to="/churn">
<Brain/>
Churn AI
</Link>


<Link to="/segmentation">
<Users/>
Segmentation
</Link>


<Link to="/clv">
<DollarSign/>
CLV Prediction
</Link>


<Link to="/fraud">
<ShieldCheck/>
Fraud Detection
</Link>


<Link to="/recommendation">
<ShoppingCart/>
Recommendation
</Link>


</div>


</div>

)

}


export default Sidebar;