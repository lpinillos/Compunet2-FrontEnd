import { useNavigate, useLocation, Link } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';
import { FaTrash } from 'react-icons/fa';

export const InfoDestinationView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let destinationObj = location.state?.destinationObj;

    if (!destinationObj) {
        return <p>Cargando...</p>;
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
            <NavBarVertical />
            <section className="bg-gray-100 min-h-screen flex items-center justify-center ml-64">
                <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mt-20">
                    <div className="flex flex-col lg:flex-row items-center">
                        <img 
                            alt="Destination" 
                            className="lg:w-1/3 w-full object-cover object-center rounded-lg shadow-md" 
                            src={destinationObj.image || 'https://via.placeholder.com/300'} 
                        />
                        <div className="lg:w-2/3 w-full lg:pl-10 mt-6 lg:mt-0">
                            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{destinationObj.code}</h2>
                            <h1 className="text-gray-900 text-3xl font-bold mb-2">{destinationObj.name}</h1>
                            <p className="text-gray-700 mb-4">{destinationObj.description}</p>
                            <div className="mb-4">
                                <p className="text-gray-700 mb-1"><span className="font-semibold">Estado:</span> {destinationObj.state}</p>
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <button 
                                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300" 
                                    onClick={() => navigate('/EditInfoDestinationView', { state: { destinationObj: destinationObj } })}
                                >
                                    Editar Destino
                                </button>
                                <Link to='/DestinoView' className='bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300'>
                                    Regresar
                                </Link>
                                <button className='bg-red-500 p-3 rounded-full hover:bg-red-600 transition duration-300'>
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

export default InfoDestinationView;
