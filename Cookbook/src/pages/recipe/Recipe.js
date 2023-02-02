import "./recipe.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../hooks/useTheme";

const Recipe = () => {
  const { id } = useParams();
  const url = "  http://localhost:8000/recipes/" + id;
  const { error, isPending, data: blog } = useFetch(url);
  const { mode } = useTheme();
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {blog && (
        <>
          <h2 className="page-title">{blog.title}</h2>
          <p>Takes {blog.cookingTime} to cook</p>
          <ul>
            {blog.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{blog.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
