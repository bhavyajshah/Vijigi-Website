import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Mission.css';

const MissionSection = () => {
    return (
        <section className="mission-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img
                            src="https://media.istockphoto.com/id/823928832/photo/businessman-shows-the-word-mission.jpg?s=612x612&w=0&k=20&c=1hmJC8oDYIifhdUqzQUWNS6-NVhMwgpjo-fZYkWo0BI="
                            alt="Mission"
                            className="img-fluid mission-image"
                        />
                    </div>
                    <div className="col-lg-6">
                        <div className="mission-content">
                            <h2 className="mission-title">Our Mission</h2>
                            <div className="app-quote">
                                <div className="app-quote-text">
                                    To <span className="tp-label-text">democratize</span> zero-emission vehicle development via providing technology and data-driven insights that <span className="tp-label-text">simplifies</span> vehicle architecture, <span className="tp-label-text">improves</span> safety and efficiency, and <span className="tp-label-text">reduces</span> development costs.
                                    <div className="app-tp-wrapper" tabIndex="0">
                                        <span className="app-quote-author">~ Meet Kalola</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
