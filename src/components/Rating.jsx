import React from "react";
import star from "../assets/icon-star.svg";
import Button from "./Button.jsx";

const Rating = ({
  isSubmitted,
  setIsSubmitted,
  selectedRating,
  setSelectedRating,
}) => {
  return !isSubmitted ? (
    <div className="wrapper">
      <img className="star" src={star} alt="" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <section className="btn-section">
        <Button
          number={1}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        ></Button>
        <Button
          number={2}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        ></Button>
        <Button
          number={3}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        ></Button>
        <Button
          number={4}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        ></Button>
        <Button
          number={5}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        ></Button>
      </section>
      <button className="btn-action" onClick={() => setIsSubmitted(true)}>
        Submit
      </button>
    </div>
  ) : null;
};

export default Rating;
