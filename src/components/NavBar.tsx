import { useState } from "react";
// This is the navigation bar component
function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <nav className="px-2 sm:px-10 md:px-16 flex justify-between items-center">
      {/* Logo */}
      <header className="py-2">
        <h2 className="font-bold text-3xl text-black">LOgO</h2>
      </header>

      {/* Desktop Menu */}
      <div
        className={`
            ${
              isOpen
                ? "flex flex-col items-center content-center absolute top-0 left-0 bg-[rgba(255,255,255,0.75)] z-50"
                : "hidden"
            } 
            md:flex
            gap-6 
            text-sm 
            font-semibold 
            tracking-tight 
            text-[rgba(0,0,0,0.8)] 
            hover:opacity-70`}
      >
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">FAQs</a>
        <a href="/">Contact</a>
      </div>

      <div className="hidden md:flex">
        <button className="BtnClass">Register</button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <i className="bx bx-menu bx-lg" onClick={handleClick}></i>
        {}
      </div>
    </nav>
  );
}

export default NavBar;
