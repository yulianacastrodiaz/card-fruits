import React from 'react'
// import './TarjetaFruta.css'
import styles from './TarjetaFruta.module.css'

class TarjetaFruta extends React.Component {
  state = {
    cantidad: 0
  }

  agregar = () => {
    this.setState({ 
      cantidad: this.state.cantidad + 1 
    })
  }

  retirar = ()  => {
    this.setState({ 
      cantidad: this.state.cantidad - 1 
    }) 
  }

  limpiar = () => {
    this.setState({ 
      cantidad: 0
    }) 
  }

  render () {
    const hasItems = this.state.cantidad > 0;
    const ativeClass = hasItems ?  styles['Card-active'] : '';
    const clases =  styles.Card + ' ' + ativeClass;

    return (
      <div className={ clases }>
        <h3>{ this.props.name }</h3>
        <div>Cantidad: { this.state.cantidad }</div>
        <button onClick={ this.agregar }>+</button>
        <button onClick={ this.retirar }>-</button>
        <button onClick={ this.limpiar }>limpiar</button>
        <hr></hr>
        <p>$ { this.props.price }</p>
        <p>
          Total: $ { this.props.price * this.state.cantidad }
        </p>
      </div>
    )
  }
}

export default TarjetaFruta