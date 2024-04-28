import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    // var settings = {
    //     dots: true,
    //     infinite: true,

    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 initialSlide: 2
    //             }
    //         }
    //     ]
    // };
    return (
        <div className="">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 slider-container">
                {/* <Slider {...settings}> */}
                {
                    reviews.map((review, idx) => (
                        <div key={idx} >
                            <div className="flex h-52 gap-8 border border-cyan-400 card card-side pt-5 pl-5">
                                <div>
                                    <div className="avatar w-20 md:w-28">
                                        <div className="rounded-full">
                                            <img className="w-16 md:w-20" src={review.image} />
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <h1 className="text-xl font-extrabold">{review.name}</h1>
                                    <p className="text-slate-700">{review.review}</p>
                                    <img className="w-28 mt-3" src="https://i.ibb.co/bQPL42G/star.png" alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                }
                {/* </Slider> */}
            </div>
        </div>
    );
};

const reviews = [
    {
        name: "John Doe",
        image: "https://i.ibb.co/2kZggMZ/young-bearded-man-with-striped-shirt.jpg",
        review: "Amazing view! Loved every moment of my visit.",
    },
    {
        name: "Jane Smith",
        image: "https://i.ibb.co/k43R4LV/960x0.webp",
        review: "Incredible experience! Will definitely come back again.",
    },
    {
        name: "Alice Johnson",
        image: "https://i.ibb.co/KDnpsw5/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confide.jpg",
        review: "Breathtaking scenery! A must-visit destination for everyone.",
    },
    // {
    //     name: "Michael Brown",
    //     image: "https://i.ibb.co/VmW1VGZ/curl-hair.jpg",
    //     review: "Unforgettable trip! The beauty of this place is beyond words.",
    // },
    // {
    //     name: "Emily Davis",
    //     image: "https://i.ibb.co/mTTpq2j/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.jpg",
    //     review: "Absolutely stunning! Couldn't have asked for a better vacation spot.",
    // },
];


export default Reviews;