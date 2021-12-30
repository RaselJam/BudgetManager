import React, { useState } from "react"
import Error from "./Error"
import shortid from "shortid"

export default function Formulario({ guardarGasto, guardarCrearGasto }) {
	const [nombre, guardarNombre] = useState("")
	const [cantidad, guardarCantidad] = useState(0)
	const [error, guardarError] = useState(false)

	const agregarGasto = e => {
  
		e.preventDefault();
		//Validar
		if (cantidad < 1 || isNaN(cantidad) || nombre.trim().length === 0) {
			guardarError(true)
			return
		}
		//Construir el Gasto :
		const gasto = {
			nombre,
			cantidad,
			id: shortid.generate(),
		}
  	//pasar el gasto al componente principal
		guardarGasto(gasto);
		guardarCrearGasto(true);
		//Reset the Form
    guardarError(false)
    guardarCantidad(0);
    guardarNombre('');
	}
	return (
		<form onSubmit={agregarGasto}>
			<h2>Agrega tus gastos Aqui</h2>
			{error ? (
				<Error mensaje='Ambos campos son obligatorios o presupuesto es incorrecto' />
			) : null}
			<div className='campo'>
				<label>Nombre Gasto</label>
				<input
					type='text'
					className='u-full-width'
					placeholder='Ej.Transporte'
					value={nombre}
					onChange={(e) => guardarNombre(e.target.value)}
				/>
			</div>
			<div className='campo'>
				<label>Cantidad Gasto</label>
				<input
					type='number'
					className='u-full-width'
					placeholder='Ej.300'
					value={cantidad}
					onChange={(e) => guardarCantidad(parseInt(e.target.value))}
				/>
			</div>
			<input
				type='submit'
				className='button-primary u-full-width'
				value='Agregar Gasto'
			/>
		</form>
	)
}
