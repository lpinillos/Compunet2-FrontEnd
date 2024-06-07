import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';
import updatedViewe from '../service/updateViewer';

export const EditInfoViewerView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let viewerObj = location.state.viewerObj;

    const [role, setRole] = useState(viewerObj.role);
    const [firstName, setFirstName] = useState(viewerObj.first_name);
    const [lastName, setLastName] = useState(viewerObj.last_name);
    const [login, setLogin] = useState(viewerObj.login);
    const [numId, setNumId] = useState(viewerObj.num_id);
    const [state, setState] = useState(viewerObj.state);

    if (!viewerObj) {
        return <p>Cargando...</p>;
    }

    const handleForm = async (e) => {
        e.preventDefault();
        const updatedViewer = {
            id_user: viewerObj.id_user,
            login: login,
            password: viewerObj.password,
            first_name: firstName,
            last_name: lastName,
            role: role,
            num_id: numId,
            state: state,
        };
        try {
            const response = await updatedViewe(updatedViewer);
            console.log("Cliente actualizado con éxito:", response);
            navigate('/InfoViewerView', { state: { viewerObj: updatedViewer } });
        } catch (error) {
            console.error("Error al actualizar el cliente:", error);
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
                            src={viewerObj.image || 'https://via.placeholder.com/300'}
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
                                <label className="text-gray-700 font-semibold">Nombre de Usuario:</label>
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
                                    onClick={() => navigate('/InfoViewerView', { state: { viewerObj: viewerObj } })}
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
