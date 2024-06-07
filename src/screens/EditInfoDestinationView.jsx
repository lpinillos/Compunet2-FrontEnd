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
            <NavBarVertical></NavBarVertical>
            <section className="text-gray-700 bg-white body-font min-h-screen">
                <div className="ml-64 p-4">
                    <form onSubmit={handleForm} className="lg:w-4/5 mt-28 ml-28 flex flex-wrap shadow-md border border-gray-800 border-x-2 border-y-2 hover:shadow-xl rounded-lg">
                        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded" src={image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <span className="text-gray-700 font-semibold">Codigo:</span>
                            <input
                                type="text"
                                name="code"
                                className="text-sm title-font text-black tracking-widest font-semibold w-full"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                            <span className="text-gray-700 font-semibold">Nombre:</span>
                            <input
                                type="text"
                                name="name"
                                className="text-black text-3xl title-font font-medium mb-1 w-full"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span className="text-gray-700 font-semibold">Descripcion:</span>
                            <input
                                type="text"
                                name="description"
                                className="text-sm title-font text-black tracking-widest font-semibold w-full"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <div className="flex flex-col mb-4">
                                <span className="text-gray-700 font-semibold">Estado:</span>
                                <input
                                    type="text"
                                    name="state"
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
