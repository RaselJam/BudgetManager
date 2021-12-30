import React from "react"
import Gasto from "./Gasto"
import PropTypes from "prop-types"

export default function Listado({ gastos,eliminarGasto })  {
	return (
		<div className='gastos-realizados'>
			{gastos.map((gasto) => {
				return <Gasto key={gasto.id} gasto={gasto} eliminarGasto={eliminarGasto} />
			})}
		</div>
	)
}
Listado.propTypes ={
  gastos : PropTypes.array.isRequired
}

