import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardCompany from './pages/DashboardCompany';
import JobOfferPage from './pages/JobOfferPage';
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import CompanyLogin from "./pages/auth/CompanyLogin";
import Companyregister from "./pages/auth/Companyregister";

import CandidateDashboard from "./pages/CandidateDashboard";
import { AuthProvider } from './context/AuthContext'; // Asegúrate de importar el AuthProvider



function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/CompanyLogin" element={<CompanyLogin />} />
                    <Route path="/DashboarCompany" element={<DashboardCompany />} />
                    <Route path="/job-offer" element={<JobOfferPage />} />
                    <Route path='CandidateDashboard' element={<CandidateDashboard />} />
                    <Route path="companyregister" element={<Companyregister />} />
                    <Route path="/CompanyLogin" element={<CompanyLogin />} />
                    <Route path="/DashboarCompany" element={<DashboardCompany />} />
                    <Route path="/job-offer" element={<JobOfferPage />} />
                    <Route path='CandidateDashboard' element={<CandidateDashboard />} />
                    
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;





