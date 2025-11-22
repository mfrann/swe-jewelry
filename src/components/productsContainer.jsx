import { Product } from "./products";
import "../styles/products.css";

export function ProductContainer() {
  return (
    <section className="p-main-container">
      <div className="p-title">
        <h1>Almost Sold Out Items</h1>
      </div>

      <Product />
      <Product />
      <Product />
    </section>
  );
}
