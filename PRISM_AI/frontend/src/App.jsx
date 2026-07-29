import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";


import DashboardLayout from "./layout/DashboardLayout";


import Dashboard from "./pages/Dashboard";
import Churn from "./pages/Churn";
import Segmentation from "./pages/Segmentation";
import CLV from "./pages/CLV";
import Fraud from "./pages/Fraud";
import Recommendation from "./pages/Recommendation";



function App(){


return(

<BrowserRouter>


<DashboardLayout>


<Routes>


<Route path="/" element={<Dashboard/>}/>

<Route path="/churn" element={<Churn/>}/>

<Route path="/segmentation" element={<Segmentation/>}/>

<Route path="/clv" element={<CLV/>}/>

<Route path="/fraud" element={<Fraud/>}/>

<Route path="/recommendation" element={<Recommendation/>}/>


</Routes>


</DashboardLayout>


</BrowserRouter>

)


}


export default App;