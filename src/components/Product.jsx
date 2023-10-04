import { useQuery } from "@tanstack/react-query";
import ProductData from "./ProductData";
import { highestRating } from "../utils/highestRating";
import { RenderSkeletonLoading } from "./RenderSkeletonLoading";

const Product = ({ queryKey }) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKey],
  });

  if (isLoading) {
    const skeletonCount = 4;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        <RenderSkeletonLoading count={skeletonCount} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
      {data?.map((item) => (
        <ProductData
          key={item.id}
          {...item}
          highestRating={highestRating(data)}
        />
      ))}
    </div>
  );
};

export default Product;
