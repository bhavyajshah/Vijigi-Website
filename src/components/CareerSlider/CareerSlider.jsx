import React, { useState, useEffect } from 'react';
import CareerJobListing from '../CareerJobListing/CareerJobListing';
import Image1 from '../../assets/carousel-1.jpg';

const CareerSlider = () => {
    const [showJobListing, setShowJobListing] = useState(false);

    const handleSearchJob = () => {
        setShowJobListing(true);
        window.history.pushState({ showJobListing: true }, '', '');
    };


    useEffect(() => {
        const handlePopState = (event) => {
            if (event.state && event.state.showJobListing) {
                setShowJobListing(true);
            } else {
                setShowJobListing(false);
            }
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    return (
        <div>
            {!showJobListing ? (
                <div
                    className="position-relative"
                    style={{
                        backgroundImage: `linear-gradient(rgba(43, 57, 64, 0.5), rgba(43, 57, 64, 0.5)), url(${Image1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '100vh',
                    }}
                >
                    <div className="position-absolute top-50 start-50 translate-middle">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <h1 className="display-3 text-white mb-4">
                                        Find The Perfect Job That You Deserved
                                    </h1>
                                    <button
                                        className="btn py-md-3 px-md-5 me-3"
                                        style={{
                                            background: '#FFCD5A',
                                            color: 'white',
                                            fontWeight: 'bold',
                                        }}
                                        onClick={handleSearchJob}
                                    >
                                        Search A Job
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <CareerJobListing />
            )}
        </div>
    );
};

export default CareerSlider;
