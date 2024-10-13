import React from "react";


export default function ReviewSlider(){
  const reviews = [
    {
      text: "Great service, highly recommend!",
      user: "User 1",
    },
    {
      text: "I found the perfect business for my needs.",
      user: "User 2",
    },
    {
      text: "Fantastic experience with excellent support.",
      user: "User 3",
    },
    {
      text: "Quick and reliable. Will use again!",
      user: "User 4",
    },
    {
      text: "Exceptional customer service!",
      user: "User 5",
    },
  ];

  return (
    <div className="review-slider">
      <div className="review-slider-inner">
        {reviews.map((review, index) => (
          <div className="review-slide" key={index}>
            <p>"{review.text}"</p>
            <h4>- {review.user}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

;
