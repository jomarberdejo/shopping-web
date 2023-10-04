
import { useNavigate } from "react-router-dom";
import HeroHighlightedProduct from "./HeroHighlightedProduct";

const HeroSection = () => {   
  const navigate= useNavigate();

  return (
    <>  
 
    <main className="max-w-screen-2xl m-auto grid grid-cols-1 md:grid-cols-2 bg-white p-4 gap-11"> 

      <div className="hero-layout md:gap-10">
        <h1 className="text-4xl font-bold leading-normal text-red-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>

        <p className="font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius rem deleniti culpa reprehenderit commodi suscipit consequuntur modi deserunt id veritatis.
        </p>

        <button 
        onClick={()=> navigate('/category')}
        className="self-start font-sm text-xl text-white bg-blue-700 py-2 px-4 rounded hover:rounded-full transition duration-300 ease-in-out">Shop Now</button>
      </div>

      <aside className="hero-layout">
        <HeroHighlightedProduct />
      </aside>
     
    </main>
   

     
    </>
  );
};

export default HeroSection;
