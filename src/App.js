import React from 'react'
import TarjetaFruta from './componentes/Tarjetafruta/index.js'

var frutaExotica = 'Kiwi' // template strings

const App = () => {
  return ( 
    <div>
      <TarjetaFruta name={'Fresa'} price={5000} />
      <TarjetaFruta name={`${frutaExotica}`} price={4000} />
      <TarjetaFruta name={'Melón'} price={2500} />
      <TarjetaFruta name={'Sandia'} price={3000} />
      <TarjetaFruta name='Cereza' price={2800} />
    </div>)
}

export default App