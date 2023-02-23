import "./App.css";
import MyHero from "./components/Hero";
import MyHome from "./components/Home";
import MyNav from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNav />
        <MyHero />
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/details/:pippo" element={<ArticleDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
