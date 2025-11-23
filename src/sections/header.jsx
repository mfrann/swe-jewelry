import { useState, useEffect } from "react";
import "../styles/header.css";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`h-main-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="h-links">
        <a href="#">Home</a>
        <a href="#shop">Shop</a>
        <a href="#press">Press</a>
      </div>
      <div className="h-name">
        <h1>
          <span>S</span>we
        </h1>
      </div>
      <div className="h-nav">
        <a href="#search">Search</a>
        <a href="#cart">Cart(0)</a>
        <a href="#login">Login</a>
      </div>
    </header>
  );
}
