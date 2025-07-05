import React, { useEffect, useState } from 'react';
import { getJobOffers } from '../services/api';
import CreateJobOffer from '../components/CreateOffer';
import './auth/register.css';


const DashboardCompany = () => {
    const [jobOffers, setJobOffers] = useState([]);

    // Función para obtener las ofertas de trabajo
    const fetchJobOffers = async () => {
        try {
            const data = await getJobOffers();
            setJobOffers(data);
        } catch (error) {
            console.error('Error fetching job offers:', error);
        }
    };

    // Carga inicial de las ofertas de trabajo
    useEffect(() => {
        fetchJobOffers();
    }, []);

    return (
        <div className="dashboard-company-container">
            <header className="dashboard-header">
                <h1>Company Dashboard</h1>
                <p>Manage your job offers and find the best candidates.</p>
            </header>

            {/* Sección para crear nuevas ofertas */}
            <section className="create-job-offer-section">
                
                <CreateJobOffer onOfferCreated={fetchJobOffers} />
            </section>

            {/* Sección para listar las ofertas de trabajo */}
            <section className="job-offers-section">
                <h2>Your Job Offers</h2>
                {jobOffers.length > 0 ? (
                    <ul className="job-offers-list">
                        {jobOffers.map((offer) => (
                            <li key={offer.id} className="job-offer-item">
                                <h2>{offer.title}</h2>
                                <p>{offer.description}</p>
                                <span>Applications: {offer.applicationsCount}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No job offers available. Create a new one to get started!</p>
                )}
            </section>
        </div>
    );
};

export default DashboardCompany;

