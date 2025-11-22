import "../styles/products.css";

export function Product({ src1, src2, src3, name, price }) {
  return (
    <div className="p-container">
      <img
        src={src1}
        alt="img-product-1"
        width={350}
        height={400}
        className="p-image"
      />
      <div className="p-c-view">
        <img
          src={src2}
          alt="img-mid"
          width={350}
          height={400}
          className="p-image"
        />

        <div className="p-overlay"></div>

        <div className="p-c-v-text">
          <strong>{name}</strong>
          <span>{price}</span>
        </div>
      </div>
      <img
        src={src3}
        alt="img-product-2"
        width={350}
        height={400}
        className="p-image"
      />
    </div>
  );
}
