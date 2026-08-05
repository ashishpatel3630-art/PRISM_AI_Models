import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Churn from "./pages/Churn";
import Segmentation from "./pages/Segmentation";
import CLV from "./pages/CLV";
import NextPurchase from "./pages/NextPurchase";
import Fraud from "./pages/Fraud";
import ProtectedRoute from "./routers/ProtectedRoute";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard Routes */}

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/analytics" element={<Dashboard />} />

          <Route path="/churn" element={<Churn />} />

          <Route path="/segmentation" element={<Segmentation />} />

          <Route path="/clv" element={<CLV />} />

          <Route path="/next-purchase" element={<NextPurchase />} />

          <Route path="/fraud" element={<Fraud />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
