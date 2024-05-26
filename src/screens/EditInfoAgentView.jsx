import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';

export const EditInfoAgentView = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    let userObj = location.state.userObj;

    console.log(userObj)

    if (!userObj) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <NavBarVertical></NavBarVertical>
            <section className="text-gray-400 bg-white body-font min-h-screen">
                <div className="ml-64 p-4">
                    <div className="lg:w-4/5 mt-28 ml-28 flex flex-wrap shadow-md border border-gray-800 border-x-2 border-y-2 hover:shadow-xl rounded-lg">
                        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded" src={userObj.image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <input type="text" className="text-sm title-font text-black tracking-widest font-semibold w-full" value={userObj.num_id}></input>
                            <input type="text" className="text-black text-3xl title-font font-medium mb-1 w-full" value={userObj.first_name}></input>
                            <input type="text" className="leading-relaxed mr-2 mb-1 border border-gray-800" value={userObj.login}></input>
                            <input type="text" className="leading-relaxedmr-2 mb-10 border border-gray-800" value={userObj.state}></input>
                            <div className="flex">
                                <button className="flex mx-10 text-white bg-custom-orange border-0 py-2 px-6 focus:outline-none hover:bg-hover-orange rounded">Guardar</button>
                                <button className="flex mx-10 text-white bg-custom-orange border-0 py-2 px-6 focus:outline-none hover:bg-hover-orange rounded" onClick={() => navigate('/InfoAgentView', { state: { userObj: userObj } })}>Volver</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};