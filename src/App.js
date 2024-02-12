import logo from "./logo.svg";
import "./App.css";
import Search from "./searchB";
import Footer from "./footer";
import ListeFilm from "./listeFillm";

function App() {
  return (
    <div className="App">
      <div>
        <Search />
      </div>
      <main>
        <ListeFilm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
