import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';
import updateAgent from '../service/updateViewer';  // Asegúrate de tener este servicio implementado

export const EditInfoAgentView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let agentObj = location.state.agentObj;

    const [role, setRole] = useState(agentObj.role);
    const [firstName, setFirstName] = useState(agentObj.first_name);
    const [lastName, setLastName] = useState(agentObj.last_name);
    const [login, setLogin] = useState(agentObj.login);
    const [numId, setNumId] = useState(agentObj.num_id);
    const [state, setState] = useState(agentObj.state);

    if (!agentObj) {
        return <p>Cargando...</p>;
    }

    const handleForm = async (e) => {
        e.preventDefault();
        const updatedAgent = {
            id_user: agentObj.id_user,
            login: login,
            password: agentObj.password,
            first_name: firstName,
            last_name: lastName,
            role: role,
            num_id: numId,
            state: state,
        };
        try {
            const response = await updateAgent(updatedAgent);
            console.log("Agente actualizado con éxito:", response);
            navigate('/InfoAgentView', { state: { agentObj: updatedAgent } });
        } catch (error) {
            console.error("Error al actualizar el agente:", error);
        }
    };

    return (
        <>
            <NavBarVertical />
            <section className="text-gray-700 bg-white body-font min-h-screen">
                <div className="ml-64 p-4">
                    <form onSubmit={handleForm} className="lg:w-4/5 mt-28 ml-28 flex flex-wrap shadow-md border border-gray-800 border-x-2 border-y-2 hover:shadow-xl rounded-lg">
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <span className="text-gray-700 font-semibold">Rol:</span>
                            <input
                                type="text"
                                className="text-sm title-font text-black tracking-widest font-semibold w-full"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            />
                            <span className="text-gray-700 font-semibold">Nombre:</span>
                            <input
                                type="text"
                                className="text-black text-3xl title-font font-medium mb-1 w-full"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <span className="text-gray-700 font-semibold">Apellido:</span>
                            <input
                                type="text"
                                className="text-black text-3xl title-font font-medium mb-1 w-full"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <span className="text-gray-700 font-semibold">Email:</span>
                            <br />
                            <input
                                type="text"
                                className="text-gray-700 mb-1"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                            />
                            <div className="flex flex-col mb-4">
                                <span className="text-gray-700 font-semibold">Número:</span>
                                <input
                                    type="text"
                                    className="text-gray-700 mb-1"
                                    value={numId}
                                    onChange={(e) => setNumId(e.target.value)}
                                />
                                <span className="text-gray-700 font-semibold">Estado:</span>
                                <input
                                    type="text"
                                    className="text-gray-700 mb-1"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </div>
                            <div className="flex">
                                <button
                                    type="submit"
                                    className="flex mx-10 text-white bg-custom-orange border-0 py-2 px-6 focus:outline-none hover:bg-hover-orange rounded"
                                >
                                    Guardar
                                </button>
                                <button
                                    type="button"
                                    className="rounded w-20 h-10 bg-red-700 hover:bg-red-500 hover:text-white p-0 border-0 inline-flex items-center justify-center text-white font-semibold ml-4 transition duration-300"
                                    onClick={() => navigate('/InfoAgentView', { state: { agentObj: agentObj } })}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};
