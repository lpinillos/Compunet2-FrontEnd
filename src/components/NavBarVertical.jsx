import React from 'react'
import { Link } from 'react-router-dom'
import planeLogo from '../images/planeLogo.png'
import 'flowbite';
import profilePicture from '../images/profilePicture.webp';
export const NavBarVertical = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform" aria-label="Sidebar">
                <div className='bg-custom-orange flex items-center pb-5 pt-5 pl-5'>
                    <img src={planeLogo} className="h-8 me-3" alt="Logo de avión" />
                    <span className="text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Icesi viajes</span>
                </div>
                <div className="h-full pb-4 overflow-y-auto bg-custom-orange">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-white hover:bg-custom-orange hover:text-black justify-left">
                                <i className="fa-solid fa-location-dot"></i>
                                <span className="ms-3">Catalogo de Destinos</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-white hover:bg-custom-orange hover:text-black justify-left">
                                <i className="fa-solid fa-location-dot"></i>
                                <span className="ms-3">Destinos</span>
                            </a>
                        </li>
                        <li className='bg-transparent rounded-lg'>
                            <Link to='/PlanView'>
                                <div className="flex items-center p-2 text-white hover:bg-custom-orange hover:text-black justify-left">
                                    <svg className="flex-shrink-0 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Planes</span>
                                </div>
                            </Link>
                        </li>
                        <li className='bg-transparent rounded-lg'>
                            <Link to='/ClientView'>
                                <div className="flex items-center p-2 text-white hover:bg-custom-orange hover:text-black justify-left">
                                    <i className="fa-solid fa-user"></i>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Gestión de Clientes</span>
                                </div>
                            </Link>
                        </li>
                        <li className='bg-transparent rounded-lg'>
                            <a href="#" className="flex items-center p-2 text-white hover:bg-custom-orange hover:text-black justify-left">
                                <svg className="flex-shrink-0 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Gestión de Viewers</span>
                            </a>
                        </li>
                        <li className='bg-transparent rounded-lg'>
                            <a href="#" className="flex items-center p-2 text-white hover:bg-custom-orange hover:text-black justify-left">
                                <i className="fa-solid fa-user-secret"></i>
                                <span className="flex-1 ms-3 whitespace-nowrap">Gestión de Agentes</span>
                            </a>
                        </li>
                        <li className='bg-transparent rounded-lg mb-4'>
                            <a href="#" className="flex items-center p-2 text-white hover:bg-custom-orange hover:text-black justify-left">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className="flex-1 ms-3 whitespace-nowrap">Reservas y ventas</span>
                            </a>
                        </li>
                    </ul>
                    <div className="flex items-center ms-3">
                        <div>
                            <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src={profilePicture} alt="user photo" />
                            </button>
                        </div>
                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                            <div className="px-4 py-3" role="none">
                                <p className="text-sm text-gray-900 dark:text-white" role="none">
                                    Luis Pinillos
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                    prueba@gmail.com
                                </p>
                            </div>
                            <ul className="py-1" role="none">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}
