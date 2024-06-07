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
            <section className="bg-gray-100 min-h-screen flex items-center justify-center ml-64">
                <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mt-20">
                    <form onSubmit={handleForm} className="flex flex-col lg:flex-row items-center">
                        <img 
                            alt="Plan" 
                            className="lg:w-1/3 w-full object-cover object-center rounded-lg shadow-md" 
                            src={agentObj.image || 'https://via.placeholder.com/300'} 
                        />
                        <div className="lg:w-2/3 w-full lg:pl-10 mt-6 lg:mt-0">
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Rol:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={role}
                                onChange={(e) => setRole(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Nombre:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Apellido:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Correo:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">ID:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={numId}
                                    onChange={(e) => setNumId(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Estado:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                                >
                                    Guardar
                                </button>
                                <button
                                    type="button"
                                    className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
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
