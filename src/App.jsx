import './App.css'
import KitchenComponent from "./components/kitchen/KitchenComponent.jsx";
import kitchen from "./domain/kitchen.js";

function App() {
    return (
        <>
            <KitchenComponent kitchen={kitchen} />
        </>
    )
}

export default App
