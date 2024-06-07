import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';
import updateDestination from '../service/updateDestino';

export const EditInfoDestinationView = () => {

    const navigate = useNavigate();
    const location = useLocation();
    let destinationObj = location.state.destinationObj;
    
    const [destination, setDestination] = useState(destinationObj || {});
    const [code, setCode] = useState(destination.code);
    const [name, setName] = useState(destination.name);
    const [description, setDescription] = useState(destination.description);
    const [state, setState] = useState(destination.state);
    const [image, setImage] = useState(destination.image);

    if (!destinationObj) {
        return <p>Cargando...</p>;
    }

    const handleForm = async (e) => {
        e.preventDefault();
        const updatedDestination = {
            id_destination: destination.id_destination,  // Assuming there is an ID
            code: code,
            name: name,
            description : description,
            state : state,
            image : destination.image
        };
        try {
            const response = await updateDestination(updatedDestination);
            console.log("Destino actualizado con éxito:", response);
            navigate('/InfoDestinationView', { state: { destinationObj: updatedDestination } });
        } catch (error) {
            console.error("Error al actualizar el destino:", error);
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
                            src={image || 'https://via.placeholder.com/300'}
                        />
                        <div className="lg:w-2/3 w-full lg:pl-10 mt-6 lg:mt-0">
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">ID:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={code}
                                onChange={(e) => setCode(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Correo:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Número Teléfonico:</label>
                                <textarea
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full h-36 border border-gray-300 rounded-md p-2 resize-none overflow-y-auto"
                                    value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Genero:</label>
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
                                    onClick={() => navigate('/InfoDestinationView', { state: { destinationObj: destinationObj } })}
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
