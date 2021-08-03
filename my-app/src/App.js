import "./App.css";
import Intro from "./components/Intro";
import ApptGrid from "./components/ApptGrid";
import Header from "./components/Header";
import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";

// Because more and more availabilities come out, the list maybe longer and longer, will add a filter feature in the future for a better experience.

function App() {
  return (
    <div className="App">
        <Header/>
        <Intro />
        <ApptGrid />
        <Footer/>
        <Disclaimer />
    </div>
  );
}

export default App;
