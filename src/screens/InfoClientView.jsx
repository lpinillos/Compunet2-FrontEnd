import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';

export const InfoClientView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const clientObj = location.state?.clientObj;

    if (!clientObj) {
        return <p>Cargando...</p>;
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleDelete = async () => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este cliente?")) {
            try {
                await axios.delete(`http://localhost:9091/api/v1/clients/delete/${clientObj.id_client}`);
                navigate('/ClientView');
            } catch (error) {
                console.error("Error deleting client:", error);
                alert("Hubo un error al eliminar el cliente. Inténtalo de nuevo.");
            }
        }
    };

    return (
        <>
            <NavBarVertical />
            <section className="bg-gray-100 min-h-screen flex items-center justify-center ml-64">
                <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mt-20">
                    <div className="flex flex-col lg:flex-row items-center">
                        <img 
                            alt="Client" 
                            className="lg:w-1/3 w-full object-cover object-center rounded-lg shadow-md" 
                            src={clientObj.image || 'https://via.placeholder.com/300'} 
                        />
                        <div className="lg:w-2/3 w-full lg:pl-10 mt-6 lg:mt-0">
                            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{clientObj.id_number}</h2>
                            <h1 className="text-gray-900 text-3xl font-bold mb-2">{clientObj.first_name} {clientObj.last_name}</h1>
                            <p className="text-gray-700 mb-4">{clientObj.mail}</p>
                            <div className="mb-4">
                                <p className="text-gray-700 mb-1"><span className="font-semibold">Teléfono:</span> {clientObj.phone}</p>
                                <p className="text-gray-700 mb-1"><span className="font-semibold">Género:</span> {clientObj.gender}</p>
                                <p className="text-gray-700 mb-1"><span className="font-semibold">Fecha de nacimiento:</span> {formatDate(clientObj.birthdate)}</p>
                                <p className="text-gray-700 mb-1"><span className="font-semibold">Tipo de Identificación:</span> {clientObj.identificationType}</p>
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <button 
                                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300" 
                                    onClick={() => navigate('/EditInfoClientView', { state: { clientObj: clientObj } })}
                                >
                                    Editar Cliente
                                </button>
                                <Link to='/ClientView' className='bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300'>
                                    Regresar
                                </Link>
                                <button 
                                    className='bg-red-500 p-3 rounded-full hover:bg-red-600 transition duration-300'
                                    onClick={handleDelete}
                                >
                                    <FaTrash className="text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InfoClientView;
