import { Fragment, useState } from "react"
import React from "react";
import Error from './Error'

export default function Pregunta({guardarPresupuesto, guardarRestante, actualizarPregunta}) {
	//Definir State :
	const [cantidad, guardarCantidad] = useState(0)
	const [error, guardarError]= useState(false);
	//Function wich read the presupuesto:
	const definirpresupuesto = (e) => {
		guardarCantidad(parseInt(e.target.value))
	}
	//Submit
	const agregarPresupuesto = (e) => {
		console.log(e);
		e.preventDefault()
		//Validar :
		if(cantidad<1 || isNaN(cantidad)){
			guardarError(true);
			return;
		}
		//Si se pasa la validacion:
		guardarError(false);
		guardarPresupuesto(cantidad);
		guardarRestante(cantidad);
		actualizarPregunta(false);
	}
	return (
		<Fragment>
			<h2>Coloca tu presupuesto</h2>
			{error?  <Error mensaje="El Presupuesto es Incorrecto"/> : null}
			<form onSubmit={agregarPresupuesto}>
				<input
					type='number'
					className='u-full-width'
					placeholder='coloca u presupuesto'
					onChange={definirpresupuesto}
				/>
				<input
					type='submit'
					className='button-primary u-full-width'
					value='Definir Presupuesto'
				/>
			</form>
		</Fragment>
	)
}
