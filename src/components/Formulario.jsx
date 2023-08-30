import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
	const [nombre, setNombre] = useState('');
	const [propietario, setPropietario] = useState('');
	const [email, setEmail] = useState('');
	const [fecha, setFecha] = useState('');
	const [sintomas, setSintomas] = useState('');
	const [error, setError] = useState(false);

	useEffect(() => {
		if (Object.keys(paciente).length > 0) {
			setNombre(paciente.nombre);
			setPropietario(paciente.propietario);
			setEmail(paciente.email);
			setFecha(paciente.fecha);
			setSintomas(paciente.sintomas);
		}
	}, [paciente]);

	const generarId = () => {
		const random = Math.random().toString(36).substr(2);
		const fecha = Date.now().toString(36);
		return random + fecha;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//Validación de Formulario

		if ([nombre, propietario, email, fecha, sintomas].includes('')) {
			setError(true);
			return;
		}
		setError(false);

		//Objeto Paciente

		const objetoPaciente = {
			nombre,
			propietario,
			email,
			fecha,
			sintomas,
		};

		if (paciente.id) {
			//Editando el Registro
			objetoPaciente.id = paciente.id;
			const pacientesActualizados = pacientes.map((pacienteState) =>
				pacienteState.id === paciente.id ? objetoPaciente : pacienteState
			);
			setPacientes(pacientesActualizados);
			setPaciente({});
		} else {
			// Nuevo registro
			objetoPaciente.id = generarId();
			setPacientes([...pacientes, objetoPaciente]);
		}

		//reiniciar el form
		setNombre('');
		setPropietario('');
		setEmail('');
		setFecha('');
		setSintomas('');
	};

	return (
		<div className="md:w-1/2 lg:w-2/5">
			<h2 className="font-black text-3xl text-center">
				Seguimiento de Paciente
			</h2>
			<p className="font-bold text-lg mt-5 text-center mb-10">
				Añade Pacientes y {''}
				<span className="text-indigo-600 font-bold text-lg">
					Administrarlos{' '}
				</span>
			</p>

			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
			>
				{error && (
					<Error>
						<p>Esto es un error</p>
					</Error>
				)}
				<div className="mb-5">
					<label
						htmlFor="mascota"
						className="block text-gray-700 font-bold uppercase"
					>
						Nombre Mascota
					</label>
					<input
						id="mascota"
						type="text"
						placeholder="Nombre de la Mascota"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="propietario"
						className="block text-gray-700 font-bold uppercase"
					>
						Nombre Propietario
					</label>
					<input
						id="propietario"
						type="text"
						placeholder="Nombre del Propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={propietario}
						onChange={(e) => setPropietario(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="email"
						className="block text-gray-700 font-bold uppercase"
					>
						Email
					</label>
					<input
						id="email"
						type="email"
						placeholder="Email de Contacto"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="alta"
						className="block text-gray-700 font-bold uppercase"
					>
						Alta
					</label>
					<input
						id="alta"
						type="date"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={fecha}
						onChange={(e) => setFecha(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="sintomas"
						className="block text-gray-700 font-bold uppercase"
					>
						Sintomas
					</label>
					<textarea
						id="sintomas"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						placeholder="Describe los Sintomas"
						value={sintomas}
						onChange={(e) => setSintomas(e.target.value)}
					/>
				</div>
				<input
					type="submit"
					value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
					className="bg-indigo-600 text-white font-bold w-full p-3 hover:bg-indigo-900 cursor-pointer transition-all"
				/>
			</form>
		</div>
	);
};

export default Formulario;
