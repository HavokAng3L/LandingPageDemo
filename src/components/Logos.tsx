import Logo1 from "../assets/logos/Logo1.svg";
import Logo2 from "../assets/logos/Logo2.svg";
import Logo3 from "../assets/logos/Logo3.svg";
import Logo4 from "../assets/logos/Logo4.svg"; // Add more logos here

// Here we have an array of logo paths
const logos: string[] = [Logo1, Logo2, Logo3, Logo4];

function Logos() {
  // The map function here returns an array of img tags with the src attribute set to the logo path
  const renderLogos = logos.map((logo: string) => (
    // the key attribute is set to the index of the logo in the logos array
    <img
      src={logo}
      alt="Logo"
      key={logos.indexOf(logo)}
      className="LogosClass"
    />
  ));

  // The renderLogos array is then returned inside a div
  // and is rendered in the HeroSection component
  return (
    <div className="flex justify-center gap-4 overflow-auto py-2">
      {renderLogos}
    </div>
  );
}

export default Logos;
