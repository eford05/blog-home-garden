import { useContext } from "react";
import HomePage from "../components/categories/HomePage";
import Posts from "../components/categories/Posts";
import { CatContext } from "../contexts/CatContext";
import "../styles/home.css";

/*
  Set content based on category selected
  0 = home
  1 = decor
  2 = home improvement
  3 = garden
  4 = housekeeping
  5 = recipes

  If cat is equal to zero show homepage content otherwise show post content based on their category
*/
function Home() {
  const { cat } = useContext(CatContext);
  return <div>{cat === 0 ? <HomePage /> : <Posts />}</div>;
}

export default Home;
