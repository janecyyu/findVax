import "./App.css";
import Intro from "./components/Intro";
import ApptGrid from "./components/ApptGrid";
import Header from "./components/Header";
import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";

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
