import React from 'react'

export default function Gasto({gasto, eliminarGasto}) {
  return (
    <div>
      <li className="gastos">
        <p>
          {gasto.nombre}
          <span className="gasto">$ {gasto.cantidad}</span>
          <span className="button button-small red" onClick={()=>{eliminarGasto(gasto.id,gasto.cantidad)}}>&times;</span>
        </p>
      </li>
    </div>
  )
}
