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
