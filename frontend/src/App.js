import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardCompany from './pages/DashboardCompany';
import JobOfferPage from './pages/JobOfferPage';
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Companyregister from "./pages/auth/Companyregister";
import Candidateregister from "./pages/auth/Candidateregister.js"
import CompanyLogin from "./pages/auth/CompanyLogin";
import CandidateDashboard from "./pages/CandidateDashboard"
import { AuthProvider } from './context/AuthContext'; // Asegúrate de importar el AuthProvider



function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="candidateregister" element={<Candidateregister />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='CandidateDashboard' element={<CandidateDashboard />} />
                    <Route path="companyregister" element={<Companyregister />} />
                    <Route path="/login" element={<CompanyLogin />} />
                    <Route path="/dashboard-company" element={<DashboardCompany />} />
                    <Route path="/job-offer" element={<JobOfferPage />} />
                    <Route path='CandidateDashboard' element={<CandidateDashboard />} />
                    
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;





