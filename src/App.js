import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchBar from "./components/SearchBar/searchBar";
import Films from "./components/films";
import Footer from "./layouts/footer";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <main>
        <Films />
      </main>
      <Footer />
    </div>
  );
}

export default App;
