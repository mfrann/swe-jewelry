import "./App.css";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { ProductContainer } from "./components/productsContainer";
import { Footer } from "./components/footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductContainer />
      <Footer />
    </>
  );
}

export default App;
