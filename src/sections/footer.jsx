import "../styles/footer.css";

export function Footer() {
  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-column">
          <h3>Map Here</h3>
          <a href="#">Home</a>
          <a href="#shop">Shop</a>
          <a href="#collection">Collection</a>
        </div>

        <div class="footer-column">
          <h3>Assistance</h3>
          <a href="#reviews">Reviews</a>
          <a href="#more">Man&Woman</a>
          <a href="#about">Meet</a>
        </div>

        <div class="footer-column">
          <h3>Creator</h3>
          <a href="https://github.com/mfrann">GitHub</a>
          <a href="https://www.instagram.com/_mfrann/">Instagram</a>
          <a href="https://mfrann.vercel.app/">Portfolio</a>
        </div>

        <div class="logo">Swe</div>
      </div>
    </footer>
  );
}
