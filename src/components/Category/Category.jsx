import { useState } from "react";
import Product from "../Product/Product";
import { categories } from "../../utils/categories";
import Footer from '../Footer/Footer';

const Category = () => {
  const [activeCategory, setActiveCategory] = useState("/products");

  const handleCategoryChange = (categoryKey) => {
    setActiveCategory(categoryKey);
  };

  return (
    <>
      <main className="max-w-screen-2xl m-auto">
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-2">
          <aside className="flex justify-center md:justify-start gap-2 md:gap-0 md:flex-col md:items-start md:col-span-1 flex-wrap py-8">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => handleCategoryChange(category.key)}
                className={`transition-colors outline-none text-white rounded-full md:rounded-none p-2 w-24 md:w-full hover:bg-orange-800 drop-shadow-md ${
                  activeCategory == category.key
                    ? "bg-orange-800"
                    : "bg-zinc-900"
                } `}
              >
                {category.label}
              </button>
            ))}
          </aside>

          <div className="col-span-6 px-4 md:py-8 md:px-0">
            <Product queryKey={activeCategory} />
          </div>
        </div>
      </main>
     <Footer />
    </>
  );
};

export default Category;
