import React from "react"
import { revisarPresupuesto as asigneClass } from "../helper"

export default function ControlPresupuesto({
	presupuesto,
	restante,
}) {
	return (
		<>
			<div className='alert alert-primary'>
				Presupuesto : $ {presupuesto}
			</div>
			<div className={asigneClass(presupuesto, restante)}>
				El Restante : $ {restante}
			</div>
		</>
	)
}
