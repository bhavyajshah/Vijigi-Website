import React, { useState } from 'react';
import Image1 from '../../assets/carousel-1.jpg';

const jobData = [
    {
        companyLogo: Image1,
        jobTitle: 'Hardware Engineer',
        location: 'Ahmedabad, INDIA',
        employmentType: 'Full Time',
        dateLine: '10 May, 2023',
        linkedinUrl: 'https://www.linkedin.com/jobs/view/3603174033/',
    },
];

const CareerJobListing = () => {
    const [keyword, setKeyword] = useState('');
    const [showAllJobs, setShowAllJobs] = useState(false);

    const filteredJobs = showAllJobs ? jobData : jobData.slice(0, 3);

    const handleBrowseMore = () => {
        setShowAllJobs(true);
    };

    const handleSearch = () => {
        const results = jobData.filter((job) =>
            job.jobTitle.toLowerCase().includes(keyword.toLowerCase())
        );
        return results;
    };

    const renderJobItems = (jobs) => {
        return jobs.map((job, index) => (
            <div key={index} className="job-item p-4 mb-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                        <img
                            className="flex-shrink-0 img-fluid border rounded"
                            src={job.companyLogo}
                            alt=""
                            style={{ width: '80px', height: '80px' }}
                        />
                        <div className="text-start ps-4">
                            <h5 className="mb-3">{job.jobTitle}</h5>
                            <span className="text-truncate me-3">
                                <i className="fa fa-map-marker-alt me-2" style={{ color: '#FFCD5A' }}></i>
                                {job.location}
                            </span>
                            <span className="text-truncate me-3">
                                <i className="far fa-clock me-2" style={{ color: '#FFCD5A' }}></i>
                                {job.employmentType}
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                        <div className="d-flex mb-3">
                            <a className="btn" href={job.linkedinUrl} style={{ background: '#FFCD5A' }}>
                                Apply Now with Linkedin
                            </a>
                        </div>
                        <small className="text-truncate">
                            <i className="far fa-calendar-alt me-2" style={{ color: '#FFCD5A' }}></i>
                            Date Line: {job.dateLine}
                        </small>
                    </div>
                </div>
            </div>
        ));
    };

    return (
    <>
            <div className="container-xxl">
                <div className="container-fluid bg wow fadeIn" data-wow-delay="0.1s" style={{ padding: '35px', backgroundColor: '#FFCD5A' }}>
                    <div className="container">
                        <div className="row g-2">
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    className="form-control border-0"
                                    placeholder="Keyword"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                />
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-dark border-0 w-100" onClick={handleSearch}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h1 className="text-center mt-5 wow fadeInUp" data-wow-delay="0.1s">
                        Career Job Listing
                    </h1>
                    <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.3s">
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                {keyword !== '' ? (
                                    <>
                                        {renderJobItems(handleSearch())}
                                        {jobData.length > 3 && !showAllJobs && (
                                            <button
                                                className="btn py-3 px-5"
                                                style={{ background: '#FFCD5A' }}
                                                onClick={handleBrowseMore}
                                            >
                                                Browse More Jobs
                                            </button>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {renderJobItems(filteredJobs)}
                                        {jobData.length > 3 && !showAllJobs && (
                                            <button
                                                className="btn py-3 px-5"
                                                style={{ background: '#FFCD5A' }}
                                                onClick={handleBrowseMore}
                                            >
                                                Browse More Jobs
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CareerJobListing;