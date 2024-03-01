import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchBar from "./components/SearchBar/searchBar";
import Films from "./components/films";
import Footer from "./layouts/footer";
import { BNext, BPrev } from "./components/boutonNext";
import Carroussel from "./layouts/caroussel";

function App() {
  return (
    <>
      <div className="App">
        <SearchBar />
        <main>
          <div>
            <Carroussel />
          </div>
          <div className="d-flex gap-3 justify-content-center">
            <BPrev />
            <BNext />
          </div>
          <Films />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
