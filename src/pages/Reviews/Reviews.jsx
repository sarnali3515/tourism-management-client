
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {

    return (
        <div className="">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 slider-container">

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

];


export default Reviews;