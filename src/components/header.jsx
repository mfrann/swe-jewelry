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
        <a href="#">Shop</a>
        <a href="#">Press</a>
      </div>
      <div className="h-name">
        <h1>
          <span>S</span>we
        </h1>
      </div>
      <div className="h-nav">
        <a href="#">Search</a>
        <a href="#">Cart(0)</a>
        <a href="#">Login</a>
      </div>
    </header>
  );
}
