import React from 'react';
import OfficeLocation from '../../assets/office_location.png';
import { formFields, contactInfo } from '../../api/ContactInfodata';

const ContactForm = () => {


    return (
        <div className="container shadow-lg mt-4 mb-4">
            <h1 className="text-center pt-4" style={{ color: '#FFCD5A', fontWeight: 'bold' }}>Contact Us</h1>
            <div className="row my-4">
                <div className="col-md-6">
                    <img src={OfficeLocation} alt="Contact" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <form action="https://formsubmit.co/meet@vijigi.com" method="POST" encType="multipart/form-data">
                        <div className="row mb-3">
                            {formFields.map(({ type, ...fieldProps }, index) => (
                                <div className="col-md-6" key={index}>
                                    <div className="form-group">
                                        <label htmlFor={fieldProps.name}>{fieldProps.label}</label>
                                        {type === 'textarea' ? (
                                            <textarea
                                                className="form-control"
                                                name={fieldProps.name}
                                                id={fieldProps.name}
                                                rows={fieldProps.rows}
                                                placeholder={fieldProps.placeholder}
                                                required={fieldProps.required}
                                            ></textarea>
                                        ) : (
                                            <input
                                                type={type}
                                                name={fieldProps.name}
                                                className="form-control"
                                                id={fieldProps.name}
                                                placeholder={fieldProps.placeholder}
                                                required={fieldProps.required}
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary" style={{ background: '#FFCD5A', borderRadius: '25px', padding: '10px 40px', border: 'none' }}>Submit</button>
                        </div>
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_subject" value="New submission on Contact Us Page" />
                    </form>
                </div>
            </div>
            <div className="row my-4 mb-4">
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <i className="fa fa-map-marker-alt" style={{ color: '#FFCD5A', fontSize: '36px', marginBottom: '10px' }}></i>
                            <p className="card-text">{contactInfo[0].text}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <i className="fa fa-envelope-open" style={{ color: '#FFCD5A', fontSize: '36px', marginBottom: '10px' }}></i>
                            <p className="card-text">{contactInfo[1].text}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <i className="fa fa-phone-alt" style={{ color: '#FFCD5A', fontSize: '36px', marginBottom: '10px' }}></i>
                            <p className="card-text">{contactInfo[2].text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
