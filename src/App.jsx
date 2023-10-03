import react from "react";
import Fruta from "./components/fruta";


class App extends react.Component {

    render() {
        return (
            <>
                <Fruta name = {"Manzana"} price={1000}/>
                <Fruta name = {"Pera"} price={600}/>
                <Fruta name = {"Mango"} price={800}/>
                <Fruta name = {"Guanabana"} price={1200}/>
                <Fruta name = {"Piña"} price={3000}/>
            </>
        )
    }
}

export default App
