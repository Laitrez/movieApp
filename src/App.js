import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import SearchBox from "./searchB";
import Footer from "./footer";
import ListeFillm from "./listeFillm";

function App() {
  return (
    <div className="App">
      <div>{/* <Search /> */}</div>
      <main>
        <ListeFillm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
