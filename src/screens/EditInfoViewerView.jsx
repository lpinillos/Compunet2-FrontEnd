import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';

export const EditInfoViewerView = () => {

    const navigate = useNavigate();
    const location = useLocation();
    let viewerObj = location.state.viewerObj;

    console.log(viewerObj)

    if (!viewerObj) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <NavBarVertical />
            <section className="bg-gray-100 min-h-screen flex items-center justify-center ml-64">
                <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mt-20">
                    <form className="flex flex-col lg:flex-row items-center">
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
                                    value={viewerObj.role}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Nombre:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={viewerObj.first_name}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Apellido:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={viewerObj.last_name}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Nombre de Usuario:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={viewerObj.login}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">ID:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={viewerObj.num_id}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Estado:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={viewerObj.state}
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