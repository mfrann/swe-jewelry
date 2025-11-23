import "./App.css";
import { Header } from "./sections/header";
import { Hero } from "./sections/hero";
import { ProductContainer } from "./sections/productsContainer";
import { Reviews } from "./sections/reviews";
import { Shop } from "./sections/shop";
import { Footer } from "./sections/footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductContainer />
      <Reviews />
      <Shop />
      <Footer />
    </>
  );
}

export default App;
