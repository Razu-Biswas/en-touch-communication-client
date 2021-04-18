import React, { useEffect, useState } from "react";
// import SingleReview from "../SingleReview/SingleReview";
import Slider from "react-slick";
import SingleReview from "../SingleReview/SingleReview";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Reviews = () => {
    const [reviews, SetReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/getReviews")
            .then(res => res.json())
            .then(getReviews => {
                console.log(getReviews)
                SetReviews(getReviews.slice(0, 6));
            });
    }, []);
    return (
        <section className='review' style={{ margin: "3rem 0" }}>
            <div className='container'>
                <h3
                    className='text-center'
                    style={{
                        fontWeight: "700",
                        fontSize: "36px",
                        marginBottom: "3rem",
                        color: "#171B4E",
                    }}>
                    Client <span style={{ color: "#7AB259" }}>Feedback</span>{" "}
                </h3>

                <div className='row justify-content-around'>
                    <Slider {...settings}>

                        {reviews.map(review => (
                            <SingleReview key={review._id} reviews={review} />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Reviews;