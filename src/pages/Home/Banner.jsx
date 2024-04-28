import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const Banner = () => {
    const slides = [
        { backgroundImage: 'url(https://i.ibb.co/M5PPzmN/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg)' },
        { backgroundImage: 'url(https://i.ibb.co/ydpGCgJ/andrew-coelho-m6t-Aq-Zvy4-RM-unsplash.jpg)' },
        { backgroundImage: 'url(https://i.ibb.co/QMksV3W/amjad-rana-Mr-KPi-yaj-C0-unsplash.jpg)' },
        { backgroundImage: 'url(https://i.ibb.co/K5dJR80/s-m-ibrahim-1-NEJki-TTu-LU-unsplash.jpg)' }
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className='z-0'
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="hero rounded-lg min-h-screen" style={{ backgroundImage: slide.backgroundImage }}>
                        <div className="hero-overlay rounded-lg bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-2xl">
                                <h1 className='text-3xl md:text-5xl font-semibold'>
                                    <Typewriter
                                        words={['Discover the Worlds Wonders with Travel Trails']}
                                        loop={false}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={2000}
                                        onType={(text) => (
                                            <h1 className="mb-5 text-5xl font-bold animate__animated animate__shakeX" style={{ fontSize: '3rem' }}>{text}</h1>
                                        )}
                                    />
                                </h1>
                                <p className="mb-5">Explore the vast diversity of cultures, landscapes, and experiences the world has to offer. From bustling cities to serene natural wonders, there is something for every traveler to discover.</p>
                                <div className='space-x-5'>
                                    <Link to="/allSpots"><button className="btn bg-cyan-600 text-white font-semibold">All Spots</button></Link>
                                    <button className="btn bg-transparent text-white font-semibold">Explore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;
