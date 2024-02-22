import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchBar from "./components/SearchBar/searchBar";
import Films from "./components/films";
import Footer from "./layouts/footer";
import { BNext, BPrev } from "./components/boutonNext";

function App() {
  return (
    <>
      <div className="App">
        <SearchBar />
        <main>
          <Films />
          <div className="d-flex">
            <BPrev />
            <BNext />
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
