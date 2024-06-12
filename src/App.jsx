import './App.css'
import KitchenComponent from "./components/kitchen/KitchenComponent.jsx";
import kitchen from "./domain/kitchen.js";

function App() {
    return (
        <article className={"mt-5"}>
            <header className={"text-center"}><h1>Smart Kitchen</h1></header>
            <KitchenComponent kitchen={kitchen}/>
            <footer className={"text-center"}>Author: Matteo Veroni</footer>
        </article>
    )
}

export default App
