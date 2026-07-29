import Sidebar from "../components/Sidebar";


function DashboardLayout({children}){


return (

<div className="flex">


<Sidebar/>


<main className="
flex-1
bg-gray-100
p-8
">


{children}


</main>


</div>

)

}


export default DashboardLayout;