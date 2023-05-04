import React from "react";

const Button = ({ number, selectedRating, setSelectedRating }) => {
  return (
    <div>
      <button
        className={selectedRating == number ? "btn-selected" : "btn-rating"}
        onClick={() => setSelectedRating(number)}
      >
        {number}
      </button>
    </div>
  );
};

export default Button;
