import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaMapMarkedAlt, FaPlane, FaUserFriends, FaUsers, FaUserTie, FaBook, FaSignOutAlt } from 'react-icons/fa';
import { FaSquarePollVertical } from 'react-icons/fa6';
import axios from 'axios';

export const NavBarVertical = () => {
    const [user, setUser] = useState("");
    const userId = localStorage.getItem('email');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:9091/api/v1/user/getUsuario/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, [userId]);

    return (
        <div className='fixed w-64 h-screen transition-transform bg-custom-orange flex flex-col left-0'>
            <div className='flex flex-col items-center flex-grow'>
                <h1 className='text-2xl font-semibold font-mono text-white mt-4'>
                    ICESI VIAJES
                </h1>
                <ul className='flex flex-col mt-4 w-64'>
                    {(user.role === "ADMIN" || user.role === "AGENTE") && (
                        <>
                            <li>
                                <Link to='/CatalogoDestino' className='font-semibold text-lg text-white flex items-center hover:bg-hover-orange py-3 pl-6'>
                                    <FaMapMarkedAlt className='mr-3' />
                                    Catálogo de Destinos
                                </Link>
                            </li>
                        </>
                    )}
                    {(user.role === "ADMIN" || user.role === "AGENTE" || user.role === "VIEWER") && (

                        <>
                            <li>
                                <Link to='/DestinoView' className='font-semibold text-lg text-white flex items-center hover:bg-hover-orange py-3 pl-6'>
                                    <FaPlane className='mr-3' />
                                    Destinos
                                </Link>
                            </li>
                            <li>
                                <Link to='/PlanView' className='font-semibold text-lg text-white flex items-center hover:bg-hover-orange py-3 pl-6'>
                                    <FaPlane className='mr-3' />
                                    Planes
                                </Link>
                            </li>
                            <li>
                                <Link to='/ClientView' className='font-semibold text-lg text-white flex items-center hover:bg-hover-orange py-3 pl-6'>
                                    <FaUserFriends className='mr-3' />
                                    Gestión de Clientes
                                </Link>
                            </li>
                        </>


                    )}
                    {user.role === "ADMIN" && (
                        <>
                            <li>
                                <Link to='/ViewerView' className='font-semibold text-lg text-white flex items-center hover:bg-hover-orange py-3 pl-6'>
                                    <FaUsers className='mr-3' />
                                    Gestión de Viewers
                                </Link>
                            </li>
                            <li>
                                <Link to='/AgentView' className='font-semibold text-lg text-white flex items-center hover:bg-hover-orange py-3 pl-6'>
                                    <FaUserTie className='mr-3' />
                                    Gestión de Agentes
                                </Link>
                            </li>
                        </>
                    )}
                    {(user.role === "AGENTE" || user.role === "ADMIN") && (
                        <>
                            <li>
                                <Link to='/ReportView' className='font-semibold text-lg text-white flex items-center hover:bg-hover-orange py-3 pl-6'>
                                    <FaBook className='mr-3' />
                                    Reservas y ventas
                                </Link>
                            </li>
                            <li>
                        <Link to='/ReportsView' className='font-semibold text-lg text-white flex items-center hover:bg-hover-orange py-3 pl-6'>
                            <FaSquarePollVertical className='mr-3' />
                            Reportes
                        </Link>
                    </li>
                        </>
                    )}
                </ul>
            </div>
            {user && (
                <div className='text-white font-semibold flex justify-center mb-2 text-2xl'>
                    {user.first_name} {user.last_name}
                </div>
            )}
            <div className='flex flex-col items-start mb-4 w-full px-6'>
                <Link to='/' className='bg-red-600 text-white py-2 w-full flex items-center justify-center rounded hover:bg-red-700 transition'>
                    <FaSignOutAlt className='mr-3' />
                    Cerrar sesión
                </Link>
            </div>
        </div>
    );
};
