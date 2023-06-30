import { useContext } from "react";
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
*/
function Home() {
  const { cat } = useContext(CatContext);
  return <div>{cat}</div>;
}

export default Home;
