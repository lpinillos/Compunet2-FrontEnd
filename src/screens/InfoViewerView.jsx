import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';

export const InfoViewerView = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    let userObj = location.state.userObj;

    console.log(userObj);

    if (!userObj) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <NavBarVertical />
            <section className="text-gray-400 bg-white body-font min-h-screen">
                <div className="ml-64 p-4">
                    <div className="lg:w-4/5 mt-28 ml-28 flex flex-wrap shadow-md border border-gray-800 border-x-2 border-y-2 hover:shadow-xl rounded-lg">
                        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded" src={userObj.image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-black tracking-widest font-semibold">{userObj.num_id}</h2>
                            <h1 className="text-black text-3xl title-font font-medium mb-1">{userObj.first_name} {userObj.last_name}</h1>
                            <p className="leading-relaxed mr-2 mb-10">{userObj.login}</p>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">{userObj.state}</span>
                                <button className="flex ml-auto text-white bg-custom-orange border-0 py-2 px-6 focus:outline-none hover:bg-hover-orange rounded" onClick={() => navigate('/EditInfoViewerView', { state: { userObj: userObj } })}>Editar Viewer</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 hover:bg-custom-orange p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 mr-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};