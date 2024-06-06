import { useNavigate, useLocation, Link} from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';

export const InfoPlanView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let planObj = location.state.planObj;

    if (!planObj) {
        return <p>Cargando...</p>;
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
            <NavBarVertical />
            <section className="text-gray-700 bg-white body-font min-h-screen">
                <div className="ml-64 p-4">
                    <div className="lg:w-4/5 mt-28 mx-auto flex flex-wrap shadow-md border border-gray-300 hover:shadow-lg rounded-lg overflow-hidden">
                        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center" src={planObj.image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 p-4">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest font-semibold">{planObj.code}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{planObj.name}</h1>
                            <p className="leading-relaxed mb-4">{planObj.description}</p>
                            <div className="flex flex-col mb-4">
                                <p className="text-gray-700 mb-2"><span className="font-semibold">Número de personas:</span> {planObj.num_people}</p>
                                <p className="text-gray-700 mb-2"><span className="font-semibold">Fecha de inicio:</span> {formatDate(planObj.start_Date)}</p>
                                <p className="text-gray-700 mb-2"><span className="font-semibold">Fecha de finalización:</span> {formatDate(planObj.end_Date)}</p>
                                <p className="text-gray-700"><span className="font-semibold">Estado:</span> {planObj.state}</p>
                            </div>
                            <div className="flex items-center">
                                <span className="title-font font-medium text-2xl text-gray-900">${planObj.price}</span>
                                <button 
                                    className="flex ml-auto font-semibold text-white bg-custom-orange border-0 py-2 px-6 focus:outline-none hover:bg-hover-orange rounded transition duration-300" 
                                    onClick={() => navigate('/EditInfoPlanView', { state: { planObj: planObj } })}
                                >
                                    Editar Plan
                                </button>
                                <Link to='/PlanView' className='rounded w-20 h-10 bg-red-700 hover:bg-red-500 hover:text-white p-0 border-0 inline-flex items-center justify-center text-white font-semibold ml-4 transition duration-300'>
                                    Regresar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
