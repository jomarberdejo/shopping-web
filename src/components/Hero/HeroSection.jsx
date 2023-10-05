import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; 
import HeroHighlightedProduct from "./HeroHighlightedProduct";
import Footer from '../Footer/Footer';

const HeroSection = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false); 

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <>
      <main
        className={`min-height max-w-screen-2xl m-auto grid grid-cols-1 md:grid-cols-2 bg-white p-4 gap-11 ${
          showContent ? "opacity-100" : "opacity-0" 
        } transition-opacity duration-500 ease-in-out`}
      >
        <div className="hero-layout md:gap-10">
          <h1 className="text-4xl font-bold leading-normal text-red-700">
            Discover the Latest in Electronics and Fashion
          </h1>

          <p className="font-medium">
            Explore and enjoy our wide range of electronics, stylish men and women outfits, and jewelry products.
          </p>

          <button
            onClick={() => navigate('/category')}
            className="self-start font-sm text-xl text-white bg-blue-700 py-2 px-4 rounded hover:rounded-full transition duration-300 ease-in-out">
            Shop Now
          </button>
        </div>

        <aside className="hero-layout">
          <HeroHighlightedProduct />
        </aside>
      </main>
      <Footer />
    </>
  );
};

export default HeroSection;
