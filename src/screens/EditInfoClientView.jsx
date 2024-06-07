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
            <section className="bg-gray-100 min-h-screen flex items-center justify-center ml-64">
                <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mt-20">
                    <form onSubmit={handleForm} className="flex flex-col lg:flex-row items-center">
                        <img 
                            alt="Plan" 
                            className="lg:w-1/3 w-full object-cover object-center rounded-lg shadow-md" 
                            src={clientObj.image || 'https://via.placeholder.com/300'} 
                        />
                        <div className="lg:w-2/3 w-full lg:pl-10 mt-6 lg:mt-0">
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">ID:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={idNumber}
                                onChange={(e) => setIdNumber(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Correo:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={mail}
                                onChange={(e) => setMail(e.target.value)}
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
                                <label className="text-gray-700 font-semibold">Número Teléfonico:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Genero:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Fecha de nacimiento:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={birthdate}
                                    onChange={(e) => setBirthdate(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Tipo de Identificación:</label>
                                <input
                                    type="text"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={identificationType}
                                    onChange={(e) => setIdentificationType(e.target.value)}
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
