import './App.css'
import KitchenComponent from "./components/kitchen/KitchenComponent.jsx";
import {useState} from "react";
import recipesData from "./domain/recipesData.js";

function App() {
    const [recipes, setRecipes] = useState(recipesData);

    return (
        <article className={"mt-5"}>
            <header className={"text-center"}><h1>Smart Kitchen</h1></header>
            <KitchenComponent recipes={recipes}/>
            <footer className={"text-center"}>Author: Matteo Veroni</footer>
        </article>
    )
}

export default App
