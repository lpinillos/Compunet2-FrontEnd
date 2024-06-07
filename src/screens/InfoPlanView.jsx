import { useNavigate, useLocation, Link } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';
import deletePlan from '../service/deletePlan';
export const InfoPlanView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const planObj = location.state?.planObj;

    if (!planObj) {
        return <p>Cargando...</p>;
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleDelete = async () => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este plan?")) {
            try {
                await deletePlan(planObj.id_plan); // Llama a la función para eliminar el plan
                navigate('/PlanView');
            } catch (error) {
                console.error("Error al eliminar el plan:", error);
                alert("Hubo un error al eliminar el plan. Inténtalo de nuevo.");
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
                            alt="Plan" 
                            className="lg:w-1/3 w-full object-cover object-center rounded-lg shadow-md" 
                            src={planObj.image || 'https://via.placeholder.com/300'} 
                        />
                        <div className="lg:w-2/3 w-full lg:pl-10 mt-6 lg:mt-0">
                            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{planObj.code}</h2>
                            <h1 className="text-gray-900 text-3xl font-bold mb-2">{planObj.name}</h1>
                            <p className="text-gray-700 mb-4">{planObj.description}</p>
                            <div className="mb-4">
                                <p className="text-gray-700 mb-1"><span className="font-semibold">Número de personas:</span> {planObj.num_people}</p>
                                <p className="text-gray-700 mb-1"><span className="font-semibold">Fecha de inicio:</span> {formatDate(planObj.start_Date)}</p>
                                <p className="text-gray-700 mb-1"><span className="font-semibold">Fecha de finalización:</span> {formatDate(planObj.end_Date)}</p>
                                <p className="text-gray-700 mb-1"><span className="font-semibold">Estado:</span> {planObj.state}</p>
                            </div>
                            <div className="flex items-center space-x-4 mt-4">
                                <span className="title-font font-medium text-2xl text-gray-900">${planObj.price}</span>
                                <button 
                                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300" 
                                    onClick={() => navigate('/EditInfoPlanView', { state: { planObj: planObj } })}
                                >
                                    Editar Plan
                                </button>
                                <Link to='/PlanView' className='bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300'>
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

export default InfoPlanView;
