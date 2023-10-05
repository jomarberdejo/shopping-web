import { useState } from "react";
import { productHighlight } from "../../utils/productHighlight";

const HeroHighlightedProduct = () => {
  const [imgUrl, setImgUrl] = useState("https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg");

  const handleClick = (productImg) => {
    if (productImg !== imgUrl) {
      setImgUrl(productImg);
    }
  };



  return (
    <>
      <div className="p-4">
        <img 
        src={imgUrl} 
        alt={imgUrl} 
        width={300} 
        height={300} 
        className="w-[400px] h-[400px] object-contain"
        
        />
      </div>
      <div className="flex justify-center gap-4">
        {productHighlight.map((product) => (
          <div
            key={product.id}
            className={`flex items-center justify-center text-white cursor-pointer p-4 max-w-md w-[90%] ${imgUrl === product.image ? 'rounded outline outline-2 outline-orange-500 outline-offset-2' : ''}`}
            onClick={() => handleClick(product.image)}
          >
            <img 
            src={product.image} 
            alt={product.title} 
            width={120} 
            height={120} 
            className="w-[100px] h-[100px] object-contain "
            />

            {product.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroHighlightedProduct;
