import { useState } from "react";
import { productHighlight } from "../../utils/productHighlight";
import {highlight1} from 'assets/images/highlight15.jpg';

const HeroHighlightedProduct = () => {
  const [imgUrl, setImgUrl] = useState(highlight1);

  const handleClick = (productImg) => {
    if (productImg !== imgUrl) {
      setImgUrl(productImg);
    }
  };

  return (
    <>
      <div className="p-4 shadow-lg rounded-lg bg-white">
        <img
          src={imgUrl}
          alt={imgUrl}
          width={300}
          height={300}
          loading= "lazy"
          className="w-[400px] h-[400px] object-contain transition-transform transform hover:scale-105"
          
        />
      </div>
      <div className="flex justify-center gap-4 mt-4">
        {productHighlight.map((product) => (
          <div
            key={product.id}
            className={`flex items-center justify-center text-white cursor-pointer p-4 max-w-md w-[90%] ${
              imgUrl === product.image ? "rounded shadow-lg bg-gradient-to-br from-white  to-white " : ""
            } transition-transform transform hover:scale-105`}
            onClick={() => handleClick(product.image)}
          >
            <img
              src={product.image}
              alt={product.title}
              width={120}
              height={120}
              loading= "lazy"
              className="w-[100px] h-[100px] object-contain"
            />

            {product.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroHighlightedProduct;
