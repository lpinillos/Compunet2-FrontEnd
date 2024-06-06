import { Link } from 'react-router-dom';
import { FaMapMarkedAlt, FaPlane, FaUserFriends, FaUsers, FaUserTie, FaBook, FaSignOutAlt } from 'react-icons/fa';

export const NavBarVertical = () => {

    return (
        <div className='fixed w-64 h-screen transition-transform bg-custom-orange flex flex-col left-0'>
            <div className='flex flex-col items-center flex-grow'>
                <h1 className='text-2xl font-semibold font-mono text-white mt-4'>
                    ICESI VIAJES
                </h1>
                <ul className='flex flex-col mt-4 w-64'>
                    <li>
                        <Link to='/Destinos' className='font-semibold text-lg text-white flex items-center hover:bg-hover-orange py-3 pl-6'>
                            <FaMapMarkedAlt className='mr-3' />
                            Catálogo de Destinos
                        </Link>
                    </li>
                    <li>
                        <Link to='/Destinos' className='font-semibold text-lg text-white flex items-center hover:bg-hover-orange py-3 pl-6'>
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
                        <Link to='/GestionClientes' className='font-semibold text-lg text-white flex items-center hover:bg-hover-orange py-3 pl-6'>
                            <FaUserFriends className='mr-3' />
                            Gestión de Clientes
                        </Link>
                    </li>
                    <li>
                        <Link to='/GestionViewers' className='font-semibold text-lg text-white flex items-center hover:bg-hover-orange py-3 pl-6'>
                            <FaUsers className='mr-3' />
                            Gestión de Viewers
                        </Link>
                    </li>
                    <li>
                        <Link to='/GestionAgentes' className='font-semibold text-lg text-white flex items-center hover:bg-hover-orange py-3 pl-6'>
                            <FaUserTie className='mr-3' />
                            Gestión de Agentes
                        </Link>
                    </li>
                    <li>
                        <Link to='/Reservas' className='font-semibold text-lg text-white flex items-center hover:bg-hover-orange py-3 pl-6'>
                            <FaBook className='mr-3' />
                            Reservas y ventas
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col items-start mb-4 w-full px-6'>
                <button className='bg-red-600 text-white py-2 w-full flex items-center justify-center rounded hover:bg-red-700 transition'>
                    <FaSignOutAlt className='mr-3' />
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
};
