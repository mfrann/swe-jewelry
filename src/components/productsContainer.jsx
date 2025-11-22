import { Product } from "./products";
import { CollectionText } from "./collection";
import "../styles/products.css";

export function ProductContainer() {
  return (
    <section className="p-main-container" id="shop">
      <div className="p-title">
        <h1>Almost Sold Out Items</h1>
      </div>

      <Product
        src1="src/assets/article/left.webp"
        src2="src/assets/article/mid.webp"
        src3="src/assets/article/right.webp"
        name="Flower Beauty"
        price="$2800"
      />

      <Product
        src1="src/assets/article/left2.webp"
        src2="src/assets/article/mid2.webp"
        src3="src/assets/article/right2.webp"
        name="Blue Health"
        price="$2100"
      />

      <Product
        src1="src/assets/article/left3.webp"
        src2="src/assets/article/mid3.webp"
        src3="src/assets/article/right3.webp"
        name="Loving Heart"
        price="$4570"
      />

      <CollectionText />
    </section>
  );
}
