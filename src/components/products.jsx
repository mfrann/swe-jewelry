import "../styles/products.css";

export function Product() {
  return (
    <div className="p-container">
      <img
        src="src/assets/article/left.webp"
        alt="img-product-1"
        width={350}
        height={400}
        className="p-image"
      />
      <div className="p-c-view">
        <img
          src="src/assets/article/mid.webp"
          alt="img-mid"
          width={350}
          height={400}
          className="p-image"
        />

        <div className="p-overlay"></div>

        <div className="p-c-v-text">
          <strong>Flowers Beauty</strong>
          <span>$2800</span>
        </div>
      </div>
      <img
        src="src/assets/article/right.webp"
        alt="img-product-2"
        width={350}
        height={400}
        className="p-image"
      />
    </div>
  );
}
