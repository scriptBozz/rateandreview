import React from "react";
import Navbar from "./navbar";
import Search from "./search";
import HeroSection from "./herosection";
import ReviewSlider from "./reviewslider";


const HomePage: React.FC = () => {
  return (
    <div className="homepage">
          <Navbar />
          <Search/>
      <HeroSection />
      <section className="reviews">
        <h2>User Reviews</h2>
        <ReviewSlider />
      </section>
    </div>
  );
};

export default HomePage;
