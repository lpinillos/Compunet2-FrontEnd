import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';
import updateClients from '../service/updateClient';

export const EditInfoClientView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let clientObj = location.state.clientObj;

    const [idNumber, setIdNumber] = useState(clientObj.id_number);
    const [firstName, setFirstName] = useState(clientObj.first_name);
    const [lastName, setLastName] = useState(clientObj.last_name);  // Nuevo estado para last_name
    const [mail, setMail] = useState(clientObj.mail);
    const [phone, setPhone] = useState(clientObj.phone);
    const [gender, setGender] = useState(clientObj.gender);
    const [birthdate, setBirthdate] = useState(clientObj.birthdate);
    const [identificationType, setIdentificationType] = useState(clientObj.identificationType);
    const [image, setImage] = useState(clientObj.image);

    if (!clientObj) {
        return <p>Cargando...</p>;
    }

    const handleForm = async (e) => {
        e.preventDefault();
        const updatedClient = {
            id_client: clientObj.id_client,
            id_number: idNumber,
            first_name: firstName,
            last_name: lastName,  // Incluir last_name en el objeto actualizado
            mail: mail,
            phone: phone,
            gender: gender,
            birthdate: birthdate,
            identificationType: identificationType,
            image: image
        };
        try {
            const response = await updateClients(updatedClient);
            console.log("Cliente actualizado con éxito:", response);
            navigate('/InfoClientView', { state: { clientObj: updatedClient } });
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
                        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded" src={image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <span className="text-gray-700 font-semibold">Número de Identificación:</span>
                            <input
                                type="text"
                                className="text-sm title-font text-black tracking-widest font-semibold w-full"
                                value={idNumber}
                                onChange={(e) => setIdNumber(e.target.value)}
                            />
                            <span className="text-gray-700 font-semibold">Nombre:</span>
                            <input
                                type="text"
                                className="text-black text-3xl title-font font-medium mb-1 w-full"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <span className="text-gray-700 font-semibold">Apellido:</span> {/* Nuevo campo para last_name */}
                            <input
                                type="text"
                                className="text-black text-3xl title-font font-medium mb-1 w-full"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <span className="text-gray-700 font-semibold">Correo:</span>
                            <input
                                type="text"
                                className="text-sm title-font text-black tracking-widest font-semibold w-full"
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                            />
                            <div className="flex flex-col mb-4">
                                <span className="text-gray-700 font-semibold">Teléfono:</span>
                                <input
                                    type="text"
                                    className="text-gray-700 mb-1"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <span className="text-gray-700 font-semibold">Género:</span>
                                <input
                                    type="text"
                                    className="text-gray-700 mb-1"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <span className="text-gray-700 font-semibold">Fecha de Nacimiento:</span>
                                <input
                                    type="date"
                                    className="text-gray-700 mb-1"
                                    value={birthdate}
                                    onChange={(e) => setBirthdate(e.target.value)}
                                />
                                <span className="text-gray-700 font-semibold">Tipo de Identificación:</span>
                                <input
                                    type="text"
                                    className="text-gray-700 mb-1"
                                    value={identificationType}
                                    onChange={(e) => setIdentificationType(e.target.value)}
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
                                    onClick={() => navigate('/InfoClientView', { state: { clientObj: clientObj } })}
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
