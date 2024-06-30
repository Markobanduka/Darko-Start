import React from "react";
import { SwipeCarousel } from "./SwipeCarousel";

const App = () => {
  return (
    <div>
      <h1 className="mt-5 mb-2 flex justify-center text-5xl">Galerija</h1>
      <div className="">
        <SwipeCarousel />
      </div>
    </div>
  );
};

export default App;
