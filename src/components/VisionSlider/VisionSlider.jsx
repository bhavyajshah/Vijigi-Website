import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import "swiper/components/navigation/navigation.min.css";
import "./VisionSlider.css";
import { Link } from "react-router-dom";
import DataSlider from "./DataSlider";

// Initialize Swiper plugins
SwiperCore.use([Autoplay, Navigation]);

const renderSlides = () => {
    return DataSlider.map((slide, index) => (
        <SwiperSlide key={index}>
            <div className="carousel-slide">
                <LazyLoadImage
                    src={slide.bgImage}
                    alt={`Slider Image ${index + 1}`}
                    className="carousel-image"
                />
                <div className="neomorphism-card">
                    <div className="carousel-content">
                        {slide.quote && (
                            <span className="quote">
                                <span className="quote-mark">"</span>
                                {slide.quote}
                                <span className="quote-mark">"</span>
                            </span>
                        )}
                        <h3 className="text mb-3 fw">Our {slide.heading}</h3>
                        <h3 style={{ fontSize: "1.8em" }}>{slide.subHeading}</h3>
                        <Link
                            to="/contact"
                            className="btn btn-slider"
                            style={{ backgroundColor: slide.buttonColor }}
                        >
                            {slide.buttonLabel}
                        </Link>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    ));
};

const VisionSlider = () => {
    const swiperRef = React.useRef(null);

    React.useEffect(() => {
        swiperRef.current.autoplay.start();
    }, []);

    return (
        <div className="carousel-container">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="mySwiper"
                onSwiper={(swiperInstance) => (swiperRef.current = swiperInstance)}
            >
                {React.useMemo(() => renderSlides(), [])}
            </Swiper>
        </div>
    );
};

export default VisionSlider;