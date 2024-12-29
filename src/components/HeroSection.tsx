import Logos from "./Logos";
import ImageComponent from "./ImageComponent";

function HeroSection() {
  return (
    <div className="flex flex-col py-10 items-center gap-5">
      {/* Div For Icons */}
      <div className="CustomWhiteDiv">
        <i className="bx bx-toggle-left"></i>
        <i className="bx bx-right-arrow-alt"></i>
        Brightness Dreams
        <i className="bx bx-right-arrow-alt"></i>
        <i className="bx bx-search-alt-2"></i>
      </div>
      {/* End Div For Icons */}

      {/* Heading */}
      <div className="text-5xl md:text-6xl font-bold px-2 tracking-tight text-[rgba(0,0,0,0.9)]">
        <h2 className="text-center">Radiant Revelries</h2>
        <h2 className="text-center">Sparkling Summer Parties Easy!</h2>
        {/* <h2>Watermelon Juice Kiss</h2>
        <h2>Polaroid Classics</h2>
        <h2>Hot Sugar Afternoons</h2> */}
      </div>

      {/* Paragraph */}
      <p className="text-center text-[rgba(0,0,0,0.8)] px-2 max-w-[500px] font-semibold tracking-tight">
        Dive Into The Ultimate Summer Party Experience With COMPANY
        Celebrations! We Offer A Wide Range Of Services To Make Your Summer
        Parties Unforgettable! From Customized Party Planning To Delicious
        Catering, We Have You Covered For All Your Summer Party Needs!
      </p>

      {/* Custom Button */}
      <div className="flex flex-col items-center gap-5">
        <button
          className="
          BtnClass
        shadow-md"
        >
          Get Started
          <i className="bx bx-right-arrow-alt"></i>
        </button>
      </div>

      {/* Div For Style */}
      <div className="CustomWhiteDiv">
        <i className="bx bx-pause-circle"></i>
        Pause or Cancel Our Services Anytime
      </div>

      {/* Logos */}
      <Logos />

      {/* Images */}
      <ImageComponent />
    </div>
  );
}

export default HeroSection;
