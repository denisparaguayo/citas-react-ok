import Paciente from './Paciente';

const ListadoPaciente = ({ pacientes, setPaciente, eliminarPaciente }) => {
	return (
		<div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll ">
			{pacientes && pacientes.length ? (
				<>
					<h2 className="font-black text-3xl text-center">
						Listado de Paciente
					</h2>
					<p className="font-bold text-lg mt-5 text-center mb-10">
						Administra tus {''}
						<span className="text-indigo-600 font-bold text-lg">
							Pacientes y Citas
						</span>
					</p>

					{pacientes.map((paciente) => (
						<Paciente
							key={paciente.id}
							paciente={paciente}
							setPaciente={setPaciente}
							eliminarPaciente={eliminarPaciente}
						/>
					))}
				</>
			) : (
				<>
					<h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
					<p className="font-bold text-lg mt-5 text-center mb-10">
						Comienza agregando pacientes {''}
						<span className="text-indigo-600 font-bold text-lg">
							y se mostraran aquí
						</span>
					</p>
				</>
			)}
		</div>
	);
};

export default ListadoPaciente;
