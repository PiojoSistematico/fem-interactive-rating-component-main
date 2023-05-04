import React from "react";
import illustration from "../assets/illustration-thank-you.svg";

const Thanks = ({ isSubmitted, setIsSubmitted, selectedRating }) => {
  return isSubmitted ? (
    <div className="wrapper-thanks">
      <img src={illustration} alt="" />
      <h2>You selected {selectedRating} out of 5</h2>
      <h1>Thank you!</h1>
      <p className="center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
      <button className="btn-action" onClick={() => setIsSubmitted(false)}>
        Cancel
      </button>
    </div>
  ) : null;
};

export default Thanks;
