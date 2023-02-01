import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Blog from "./pages/recipe/Recipe";
import Navbar from "./components/Navbar";
import Recipe from "./pages/recipe/Recipe";
import ThemeSelector from "./components/ThemeSelector";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
