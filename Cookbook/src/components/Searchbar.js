import { useState } from "react";
import { useNavigate } from "react-router-dom";

// styles
import "./searchbar.css";

export default function Searchbar() {
  const [term, setTerm] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    history(`/search?q=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
