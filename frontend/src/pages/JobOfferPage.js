// JobOfferPage.js
import React, { useEffect, useState } from 'react';
import { fetchJobOffers } from '../services/api';
import '../styles/pages/JobOfferPage.css';

const JobOfferPage = () => {
    const [jobOffers, setJobOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadJobOffers = async () => {
            try {
                const offers = await fetchJobOffers();
                setJobOffers(offers);
            } catch (err) {
                console.error('Error loading job offers:', err);
                setError('Failed to load job offers. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        loadJobOffers();
    }, []);

    return (
        <div className="job-offer-page">
            <header className="job-offer-header">
                <h1>Available Job Offers</h1>
                <p>Browse and apply to the offers that suit you best.</p>
            </header>
            <main className="job-offer-list">
                {isLoading ? (
                    <p>Loading job offers...</p>
                ) : error ? (
                    <p className="error-message">{error}</p>
                ) : jobOffers.length > 0 ? (
                    jobOffers.map((offer) => (
                        <div key={offer.id} className="job-offer-card">
                            <h2>{offer.title}</h2>
                            <p>{offer.description}</p>
                            <p><strong>Location:</strong> {offer.location}</p>
                            <p><strong>Salary:</strong> ${offer.salary}</p>
                            <button className="apply-button">Apply Now</button>
                        </div>
                    ))
                ) : (
                    <p>No job offers available at the moment. Please check back later!</p>
                )}
            </main>
        </div>
    );
};

export default JobOfferPage;


