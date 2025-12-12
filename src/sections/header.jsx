import { useState, useEffect } from "react";
import "../styles/header.css";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`h-main-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="h-links">
        <a href="#">Home</a>
        <a href="#shop">Shop</a>
        <a href="#collection">Collection</a>
      </div>
      <div className="h-name">
        <h1>
          <span>S</span>we
        </h1>
      </div>
      <div className="h-nav">
        <a href="#reviews">Reviews</a>
        <a href="#more">More</a>
        <a href="#about">About</a>
      </div>
      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <a href="#" onClick={closeMenu}>
          Home
        </a>
        <a href="#shop" onClick={closeMenu}>
          Shop
        </a>
        <a href="#collection" onClick={closeMenu}>
          Collection
        </a>
        <a href="#reviews" onClick={closeMenu}>
          Reviews
        </a>
        <a href="#more" onClick={closeMenu}>
          More
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
      </div>
    </header>
  );
}
