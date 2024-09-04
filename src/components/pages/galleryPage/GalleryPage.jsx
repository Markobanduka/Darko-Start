import { SwipeCarousel } from "./SwipeCarousel";
// import Cards from "../../ui/Cards";

const App = () => {
  return (
    <div>
      <h1 className="mt-5 mb-2 flex justify-center text-5xl">Galerija</h1>
      <div className="">
        <SwipeCarousel />
      </div>
      {/* <div className="mt-7 ">
        <h3 className="flex justify-center text-3xl mb-7">
          Sta drugi misle o nama?
        </h3>
        <Cards />
      </div> */}
    </div>
  );
};

export default App;
