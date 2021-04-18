import React, { useEffect, useState } from "react";
import ShowReview from "../ShowReview/ShowReview";
import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allReview")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [reviews]);

  return (
    <div className="container review">
      <h3 className="title">TESTIMONIALS</h3>
      <div className="row">
        {
          reviews.map(review => <ShowReview key={review._id} review = {review}></ShowReview>)
        }
      </div>
    </div>
  );
};

export default Review;
