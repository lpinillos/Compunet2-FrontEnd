import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';

export const InfoAgentView = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    let agentObj = location.state.agentObj;

    console.log(agentObj);

    if (!agentObj) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <NavBarVertical />
            <section className="text-gray-700 bg-white body-font min-h-screen">
                <div className="ml-64 p-4">
                    <div className="lg:w-4/5 mt-28 ml-28 flex flex-wrap shadow-md border border-gray-800 border-x-2 border-y-2 hover:shadow-xl rounded-lg">
                        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded" />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest font-semibold">{agentObj.role}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{agentObj.first_name} {agentObj.last_name}</h1>
                            <p className="leading-relaxed mb-4">{agentObj.login}</p>
                            <div className="flex flex-col mb-4">
                                <p className="ltext-gray-700 mb-2"><span className="font-semibold">Numero:</span> {agentObj.num_id}</p>
                                <p className="ltext-gray-700 mb-2"><span className="font-semibold">Estado:</span> {agentObj.state}</p>
                            </div>
                            <div className="flex">
                            <button 
                                    className="font-semibold text-white bg-custom-orange border-0 py-2 px-6 focus:outline-none hover:bg-hover-orange rounded transition duration-300" 
                                    onClick={() => navigate('/EditInfoAgentView', { state: { agentObj: agentObj } })}
                                >
                                    Editar Agente
                                </button>
                                <Link to='/AgentView' className='rounded w-20 h-10 bg-red-700 hover:bg-red-500 hover:text-white p-0 border-0 inline-flex items-center justify-center text-white font-semibold ml-4 transition duration-300'>
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