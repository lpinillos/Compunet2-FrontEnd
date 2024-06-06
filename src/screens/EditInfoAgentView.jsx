import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';

export const EditInfoAgentView = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    let agentObj = location.state.agentObj;

    console.log(agentObj)

    if (!agentObj) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <NavBarVertical></NavBarVertical>
            <section className="text-gray-700 bg-white body-font min-h-screen">
                <div className="ml-64 p-4">
                    <div className="lg:w-4/5 mt-28 ml-28 flex flex-wrap shadow-md border border-gray-800 border-x-2 border-y-2 hover:shadow-xl rounded-lg">
                        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded" />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <input type="text" className="text-sm title-font text-black tracking-widest font-semibold w-full" value={agentObj.role}></input>
                            <input type="text" className="text-black text-3xl title-font font-medium mb-1 w-full" value={agentObj.first_name}></input>
                            <input type="text" className="text-gray-700 mb-1" value={agentObj.login}></input>
                            <div className="flex flex-col mb-4">
                                <span className="ltext-gray-700 font-semibold">Numero:</span> <input type="text" className="text-gray-700 mb-1" value={agentObj.num_id}></input>
                                <span className="ltext-gray-700 font-semibold">Estado:</span> <input type="text" className="text-gray-700 mb-1" value={agentObj.state}></input>
                            </div>
                            <div className="flex">
                                <button className="flex mx-10 text-white bg-custom-orange border-0 py-2 px-6 focus:outline-none hover:bg-hover-orange rounded">Guardar</button>
                                <button className="rounded w-20 h-10 bg-red-700 hover:bg-red-500 hover:text-white p-0 border-0 inline-flex items-center justify-center text-white font-semibold ml-4 transition duration-300" onClick={() => navigate('/InfoAgentView', { state: { agentObj: agentObj } })}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};