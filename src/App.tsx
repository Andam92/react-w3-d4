import "./App.css";
import MyHero from "./components/Hero";
import MyHome from "./components/Home";
import MyNav from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyHero />
      <MyHome />
    </div>
  );
}

export default App;
