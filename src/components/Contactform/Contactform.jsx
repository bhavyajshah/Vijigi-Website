import React, { useState } from 'react';
import OfficeLocation from '../../assets/office_location.png';
// import ThankYouModal from '../ThankYouModal/ThankYouModal';

const ContactForm = () => {

    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        if (form.checkValidity()) {
            // Perform form submission or AJAX request here
            setShowModal(true);
        } else {
            form.reportValidity();
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <React.Fragment>
            <div className="container shadow-lg mt-4">
                <h1 className="text-center pt-4" style={{ color: '#FFCD5A', fontWeight: 'bold' }}>
                    Contact Us
                </h1>
                <div className="row my-4 col-12">
                    <div className="col-md-6">
                        <img src={OfficeLocation} alt="Contact" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <form action="https://formsubmit.co/websitemaker923@gmail.com" method="POST" enctype="multipart/form-data">
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="form-control"
                                            id="firstName"
                                            placeholder="Enter first name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            className="form-control"
                                            id="lastName"
                                            placeholder="Enter last name"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Enter phone number"
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    id="message"
                                    rows="5"
                                    placeholder="Enter your message"
                                    required
                                ></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="file">File</label>
                                <input type="file" name="attachment" className="form-control" id="file" />
                            </div>
                            <button type="submit" className="btn mb-3" onSubmit={handleSubmit} style={{ color: '#000', background: '#FFCD5A' }}>
                                Submit
                            </button>
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="http://localhost:5173/contact" />
                            <input type="hidden" name="_subject" value="New submission on Contact Us Page" />
                        </form>
                    </div>
                </div>
                <div className="container row m-auto">
                    <div className="col-12">
                        <div className="row gy-4 mb-4">
                            <div className="col-md-5 wow fadeIn" data-wow-delay="0.1s">
                                <div className="d-flex align-items-center bg-light rounded p-4">
                                    <div
                                        className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                                        style={{ width: '45px', height: '45px' }}
                                    >
                                        <i className="fa fa-map-marker-alt" style={{ color: '#FFCD5A' }}></i>
                                    </div>
                                    <span>1219, Swati Clover, S P Ring Road, Ahmedabad, Gujarat (India)</span>
                                </div>
                            </div>
                            <div className="col-md-3 wow fadeIn" data-wow-delay="0.3s">
                                <div className="d-flex align-items-center bg-light rounded p-4">
                                    <div
                                        className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                                        style={{ width: '45px', height: '45px' }}
                                    >
                                        <i className="fa fa-envelope-open" style={{ color: '#FFCD5A' }}></i>
                                    </div>
                                    <span>info@vijigi.com</span>
                                </div>
                            </div>
                            <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="d-flex align-items-center bg-light rounded p-4">
                                    <div
                                        className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                                        style={{ width: '45px', height: '45px' }}
                                    >
                                        <i className="fa fa-phone-alt" style={{ color: '#FFCD5A' }}></i>
                                    </div>
                                    <span>+91 91044 33353</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thank You</h5>
                            <button type="button" className="close" onClick={closeModal}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Your form has been submitted successfully.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="embed-responsive embed-responsive-16by9 container mb-3">
                <iframe
                    title="Map"
                    className="embed-responsive-item"
                    src="https://www.google.com/maps/place/Swati+Clover/@23.0513278,72.4790862,18.27z/data=!4m6!3m5!1s0x395e9b3cb4acbc41:0x62db53e2f8f61360!8m2!3d23.0512066!4d72.4800139!5m1!1e4"
                    allowFullScreen
                ></iframe>
            </div> */}

            {showModal && <ThankYouModal closeModal={closeModal} />}
        </React.Fragment>
    );
};

export default ContactForm;
