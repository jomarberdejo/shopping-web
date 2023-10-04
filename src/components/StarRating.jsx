import { renderStars } from "../utils/renderStars";
import { AiFillStar } from "react-icons/ai";

const StarRating = ({ productRating, highestRating }) => {
  const stars = renderStars(highestRating);

  const filledStars = stars.map((star, index) => (
    <AiFillStar
      key={index}
      className={`inline ${
        index < productRating ? "text-yellow-700" : "text-black-600"
      }`}
    />
  ));

  return filledStars;
};

export default StarRating;
