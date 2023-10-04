import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import StarRating from "./StarRating";
import { RenderSkeletonLoading } from "./RenderSkeletonLoading";
import {AddCartButton} from './AddCartButton';
import { highestRating } from "../utils/highestRating";
import { FaDollarSign } from "react-icons/fa";
const SingleProduct = () => {
  const { id } = useParams();
  const qKey = "/products/" + id;

  const { data, isLoading, isError } = useQuery({
    queryKey: [qKey],
  });

  const { data: allProductsData, isLoading: allProductsLoading } = useQuery({
    queryKey: ["/products"],
  });

  if (isLoading || allProductsLoading) {
    const skeletonCount = 1;
    return (
      <div className="max-w-lg my-10 mx-auto p-4">
        <RenderSkeletonLoading count={skeletonCount} />
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const productHighestRating = highestRating(allProductsData);

  return (
    <>
      <div className="max-w-lg mx-auto my-10 p-4">
        <div className="flex flex-col justify-start md:items-start gap-4 border border-gray-200 p-4 shadow-md bg-white">
          <div className="self-center">
            <img
              loading="lazy"
              src={data.image}
              alt={data.title}
              className=" w-60 h-60 "
              width={250}
              height={250}
            />
          </div>

          <h3 className="max-h-72 font-medium text-xl">{data.title}</h3>
          <p className="max-w-2/4 m-auto">{data.description}</p>

          <div className="flex justify-between w-full items-center">
            <div>
              <StarRating
                productRating={data.rating.rate}
                highestRating={productHighestRating}
              />
            </div>
            <div className="flex items-center font-medium text-xl">
              <FaDollarSign /> <p> {data.price} </p>
            </div>
          </div>
          <AddCartButton {...data} />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
