
import Paciente from "./Paciente";

const ListadoPacientes=({pacientes,setPaciente,eliminarPaciente})=>{

    /*Los corchetes de abajo con pacientes && nos muestra que si no hay pacientes, 
    muestra que no hay pero si si hay, nos dice que si los hay */
    
    return(
        <div className="md:w-1/2 lg:w-2/4 md:h-screen overflow-y-scroll">

            
            {pacientes && pacientes.length ? (
            <>

                <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Administra tus {''}
                    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                </p>
    
                {pacientes.map((paciente)=>{
                    return(
                        <Paciente
                        key={paciente.id}
                         paciente={paciente}
                         setPaciente={setPaciente}
                         eliminarPaciente={eliminarPaciente}
                        />
                    )
                })}

            </>


            ) :(
                <>
                  <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                  <p className="text-xl mt-5 mb-10 text-center">
                     Comienza agreando pacientes {''}
                     <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
                  </p>
                </>
            )}
            

            
           

        </div>
    )
}
export default ListadoPacientes;