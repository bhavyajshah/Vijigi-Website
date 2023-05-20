import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Integration1 from '../../assets/Integrated electrical & controls platform Benefits.png';
import Integration2 from '../../assets/process_technology.png';
import Integration3 from '../../assets/technology_works.png';
import News1 from '../../assets/news1.webp';
import News2 from '../../assets/news2.webp';
import TwoW from '../../assets/bike.png';
import ThreeW from '../../assets/auto.png';
import Cars from '../../assets/cars.png';
import CommercialVehicles from '../../assets/truck.png';
import './TechnologyPage.css';

SwiperCore.use([Navigation, Pagination]);

const TechnologyPage = () => {
    const newsItems = [
        {
            image: News1,
            title: 'News 1 Title',
            description: 'News 1 description',
        },
        {
            image: News2,
            title: 'News 2 Title',
            description: 'News 2 description',
        },
    ];

    const features = [
        { image: TwoW, title: '2W' },
        { image: ThreeW, title: '3W' },
        { image: Cars, title: 'Cars' },
        { image: CommercialVehicles, title: 'Commercial Vehicles' },
    ];

    return (
        <div className="containers">
            <h1 className="animated-text">Integrated Electrical and Controls Platform</h1>

            <h2 className="heading2">1. Integrated Electrical and Controls Platform Benefits</h2>
            <div className="benefits-image">
                <img src={Integration1} alt="Benefits" />
            </div>

            <h2 className="heading2">2. How Vijigi Platform Process Works?</h2>
            <div className="benefits-image">
                <img src={Integration2} alt="Benefits" />
            </div>

            <h2 className="heading2">3. How Vijigi Platform Technology Works?</h2>
            <div className="benefits-image">
                <img src={Integration3} alt="Benefits" />
            </div>

            <h2 className="heading2 mb-4">Vijigi Platform Applications</h2>
            <div className="container">
                <div className="row">
                    {features.map((feature, index) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={index}>
                            <div className="container cards p-3">
                                <img src={feature.image} alt={feature.title} className="card-img-top" />
                                <div className="card-body">
                                    <h3 className="card-title text-center">{feature.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                <h1 className="animated-text">Latest Technology News</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <h2>First Runner-up in India's Largest EV Innovation Challenge, organized by iCreate</h2>
                        <p>December 20, 2022</p>
                        <p>
                            Vijigi Energy received ₹7.5 Lakh Cash award and a trophy as a first runner-up winner of India's largest EV
                            Innovation Challenge - EVangelise'22. The challenge was organized by iCreate, an Incubation centre in India
                            with a mission to facilitate innovation in the clean energy, e-mobility and transportation sectors.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            loop
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            className="mySwiper"
                        >
                            {newsItems.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img src={item.image} alt={`News Slide ${index + 1}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologyPage;
