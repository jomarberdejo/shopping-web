import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import {AddCartButton} from './AddCartButton';

import { FaDollarSign } from "react-icons/fa";

  const ProductData = (props) => {
  const navigate = useNavigate();
  

  const { id, title, price, image, description, rating, highestRating } = props;

  

  return (
    <>
      <div className="flex flex-col justify-start items-start gap-4 hover:outline outline-2 outline-orange-500 outline-offset-2 p-4 shadow-md cursor-pointer bg-white">
        <div className='self-center'>
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-60 h-60"
            width={250}
            height={250}
          />
        </div>
        <h3 
        onClick= {()=> navigate(`/single/${id}`)}
        className="max-h-10 overflow-hidden overflow-ellipsis font-medium text-xl truncate w-full">
          {title}
        </h3>
        <div className="flex justify-between w-full items-center">
          <div>
            <StarRating
              productRating={rating.rate}
              highestRating={highestRating}
            />
          </div>
          <div className="flex items-center font-medium text-xl">
            <FaDollarSign /> <p> {price} </p>
          </div>
        </div>
      
         <AddCartButton {...props} />
        
      </div>
    </>
  );
};

export default ProductData;
