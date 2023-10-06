import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-700 to-gray-900 text-white py-6 mt-8 h-44">
      <div className="container mx-auto text-center">
        <p className="mt-2">Follow us on social media for more updates.</p>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-blue-500 hover:text-blue-300 mx-2">
            Facebook
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-300 mx-2">
            Twitter
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-300 mx-2">
            Instagram
          </a>
        </div>
        <p className="mt-6">&copy; {new Date().getFullYear()} Fashion Fusion</p>
      </div>
    </footer>
  );
};

export default Footer;
