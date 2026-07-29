import {
LayoutDashboard,
Brain,
Users,
DollarSign,
ShieldCheck
} from "lucide-react";


function Sidebar(){

return (

<div className="
w-64
h-screen
bg-black
text-white
p-6
">


<h1 className="
text-2xl
font-bold
mb-10
">
PRISM AI
</h1>



<nav className="space-y-5">


<div className="flex gap-3">
<LayoutDashboard/>
Dashboard
</div>


<div className="flex gap-3">
<Brain/>
Churn AI
</div>


<div className="flex gap-3">
<Users/>
Segmentation
</div>


<div className="flex gap-3">
<DollarSign/>
CLV Prediction
</div>


<div className="flex gap-3">
<ShieldCheck/>
Fraud Detection
</div>



</nav>


</div>

)

}


export default Sidebar;