import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';

import Dashboard from './pages/Dashboard';
import Churn from './pages/Churn';
import Segmentation from './pages/Segmentation';
import CLV from './pages/CLV';
import Recommendation from './pages/Recommendation';
import NextPurchase from './pages/NextPurchase';
import Fraud from './pages/Fraud';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Dashboard />} />
          <Route path="/churn" element={<Churn />} />
          <Route path="/segmentation" element={<Segmentation />} />
          <Route path="/clv" element={<CLV />} />
          <Route path="/recommendations" element={<Recommendation />} />
          <Route path="/next-purchase" element={<NextPurchase />} />
          <Route path="/fraud" element={<Fraud />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;