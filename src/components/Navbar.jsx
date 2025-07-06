import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // optional: using lucide icons

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-500 text-white shadow-md" : "bg-transparent text-black"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-4 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">TECHKURA</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#">Home</a>
          <a href="#aboutUs">About Us</a>
          <a href="#services">Services</a>
          <a href="#works">How We Work</a>
          <a href="#goals">Our Goals</a>
          <a href="#form">Contacts</a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-4 space-y-2 bg-gray-500 text-white">
          <a href="#" className="block">Home</a>
          <a href="#aboutUs" className="block">About Us</a>
          <a href="#services" className="block">Services</a>
          <a href="#works" className="block">How We Work</a>
          <a href="#goals" className="block">Our Goals</a>
          <a href="#form" className="block">Contacts</a>
        </div>
      )}
    </nav>
  );
}
