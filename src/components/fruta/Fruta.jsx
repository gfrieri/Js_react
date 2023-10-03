import React from "react";
import Style from "./Fruta.module.css"


class Fruta extends React.Component{

    constructor(props) {
        super()

        this.state = {
            cantidad: 0
        }
    }

    agregar() {
        this.state.cantidad += 1
        this.forceUpdate()
    }

    quitar() {
        this.state.cantidad -= 1
        this.forceUpdate()
    }

    render(){
        return(
            <div className={Style.fruta}>
                <h2>Nombre: {this.props.name}</h2>
                <h3>Precio: ${this.props.price}</h3>

                <button onClick={this.agregar.bind(this)}>+</button>
                <button onClick={this.quitar.bind(this)}>-</button>

                <p>Cantidad: {this.state.cantidad}</p>
                <p>Subtotal: {this.props.price * this.state.cantidad}</p>

                <hr />
            </div>
        )
    }
}

export default Fruta