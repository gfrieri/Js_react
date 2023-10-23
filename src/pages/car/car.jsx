import { Component } from "react";
import Acarreo from "../../components/acarreo";
import Fruta from "../../components/fruta";

class Car extends Component {
    constructor() {
        super()
        this.state = {
            total: 0
        }
    }

    acarreo = totalvalue => {
        const { price, operation } = totalvalue;
        if (operation) {
            this.setState({

                total: this.state.total + price
            })
        } else {

            this.setState({

                total: this.state.total - price
            })
        }
        console.log('mostrando desde el padre: ', totalvalue);
    }

    render() {
        const {total} = this.state;
        return (
            <>
                <Fruta name={"Manzana"} price={1000} bus={this.acarreo} />
                <Fruta name={"Pera"} price={600} bus={this.acarreo} />
                <Fruta name={"Mango"} price={800} bus={this.acarreo} />
                <Fruta name={"Guanabana"} price={1200} bus={this.acarreo} />
                <Fruta name={"Piña"} price={3000} bus={this.acarreo} />
                <hr />
                <Acarreo total = {total}/>
            </>
        )
    }
}

export default Car;