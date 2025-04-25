import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-2" : "bg-white/5 backdrop-blur-sm py-6"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 bg-cafe-brown rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xl font-pacifico">A</span>
            </div>
            <h1 className={cn(
              "text-cafe-brown transition-all duration-300",
              isScrolled ? "text-2xl" : "text-3xl"
            )}>
              Altstadtcafé
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <NavLink to="/" label="Startseite" />
          <NavLink to="/speisekarte" label="Speisekarte" />
          <NavLink to="/galerie" label="Galerie" />
          <NavLink to="/ueber-uns" label="Über uns" />
          <NavLink to="/kontakt" label="Kontakt" />
          <button className="cafe-button bg-cafe-brown text-white hover:bg-cafe-brown-light ml-4">
            Tisch reservieren
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cafe-brown p-2"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <MobileNavLink to="/" label="Startseite" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/speisekarte" label="Speisekarte" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/galerie" label="Galerie" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/ueber-uns" label="Über uns" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/kontakt" label="Kontakt" onClick={() => setMobileMenuOpen(false)} />
            <button className="cafe-button bg-cafe-brown text-white hover:bg-cafe-brown-light w-full mt-4">
              Tisch reservieren
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink = ({ to, label }: NavLinkProps) => {
  const isActive = window.location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "cafe-link font-medium transition-colors duration-200",
        isActive ? "text-cafe-brown after:scale-x-100" : "text-foreground hover:text-cafe-brown"
      )}
    >
      {label}
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ to, label, onClick }: MobileNavLinkProps) => {
  const isActive = window.location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "block py-3 px-4 rounded-md transition-colors duration-200",
        isActive ? "bg-cafe-beige text-cafe-brown" : "text-foreground hover:bg-cafe-beige/50"
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Navbar;
