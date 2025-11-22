import "./App.css";
import { Hero } from "./sections/hero";
import { Main } from "./sections/main";
import { Questions } from "./sections/questions";
import { Footer } from "./sections/footer";
function App() {
  return (
    <>
      <Hero />
      <Main />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
