// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1>Welcome to Interview Scheduler</h1>
                <p>Your gateway to seamless job matching and interview scheduling.</p>
            </header>
            <nav className="homepage-nav">
                <Link to="/dashboard-company" className="nav-link">Companies</Link>
                <Link to="/job-offer" className="nav-link">Candidates</Link>
                <Link to="/CandidateDashboard" className="nav-link">Portal Candidatos</Link>
            </nav>
        </div>
    );
};

export default HomePage;
