import { useState } from "react";
import star from "./assets/icon-star.svg";
import Rating from "./components/Rating.jsx";
import Thanks from "./components/Thanks.jsx";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);

  return (
    <div>
      <Rating
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
      ></Rating>
      <Thanks
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        selectedRating={selectedRating}
      ></Thanks>
    </div>
  );
}

export default App;
