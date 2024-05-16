import React from 'react'
import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { NavBarVertical } from '../components/NavBarVertical';
import 'flowbite';
export const PlanView = () => {
    return (
        <>
            <NavBarVertical></NavBarVertical>
            <section className="text-gray-400 bg-white body-font min-h-screen">
                <div className="flex justify-end w-full">
                    <Link to='/CreatePlan'><button className='bg-custom-orange hover:bg-hover-orange rounded-lg w-32 h-11 font-semibold text-white mt-5 mr-28'>Crear Plan</button></Link>
                </div>
                <div className="ml-64 p-4">
                    <div className="flex flex-wrap">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-lg shadow-md border border-gray-800 border-x-2 border-y-2 hover:shadow-xl mx-10 mb-8">
                            <div className="block relative h-48 rounded">
                                <img alt="tokio" className="object-cover object-center w-full h-full block" src="https://images.ecestaticos.com/svQkpRHGCpf_arlLfdRSHczlJU0=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F09b%2F94b%2F0af%2F09b94b0afe62646e72bd87ae96c0d359.jpg" />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-black font-semibold text-xs tracking-widest title-font mb-1">Plan de Viaje</h3>
                                <h2 className='text-black text-xs tracking-widest title-font mb-1'> - Tokio</h2>
                                <h2 className="text-black title-font text-lg font-medium hover:text-hover-orange"><Link to='/InfoPlanView'>Mochilero</Link></h2>
                                <p className="mt-1">$800.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-lg shadow-md border border-gray-800 border-x-2 border-y-2 hover:shadow-xl mx-10 mb-8">
                            <div className="block relative h-48 rounded">
                                <img alt="tokio" className="object-cover object-center w-full h-full block" src="https://images.ecestaticos.com/svQkpRHGCpf_arlLfdRSHczlJU0=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F09b%2F94b%2F0af%2F09b94b0afe62646e72bd87ae96c0d359.jpg" />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-black font-semibold text-xs tracking-widest title-font mb-1">Plan de Viaje</h3>
                                <h2 className='text-black text-xs tracking-widest title-font mb-1'> - Tokio</h2>
                                <h2 className="text-black title-font text-lg font-medium hover:text-hover-orange"><Link to='/Register'>Mochilero</Link></h2>
                                <p className="mt-1">$800.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-lg shadow-md border border-gray-800 border-x-2 border-y-2 hover:shadow-xl mx-10 mb-8">
                            <div className="block relative h-48 rounded">
                                <img alt="tokio" className="object-cover object-center w-full h-full block" src="https://images.ecestaticos.com/svQkpRHGCpf_arlLfdRSHczlJU0=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F09b%2F94b%2F0af%2F09b94b0afe62646e72bd87ae96c0d359.jpg" />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-black font-semibold text-xs tracking-widest title-font mb-1">Plan de Viaje</h3>
                                <h2 className='text-black text-xs tracking-widest title-font mb-1'> - Tokio</h2>
                                <h2 className="text-black title-font text-lg font-medium hover:text-hover-orange"><Link to='/Register'>Mochilero</Link></h2>
                                <p className="mt-1">$800.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-lg shadow-md border border-gray-800 border-x-2 border-y-2 hover:shadow-xl mx-10 mb-8">
                            <div className="block relative h-48 rounded">
                                <img alt="tokio" className="object-cover object-center w-full h-full block" src="https://images.ecestaticos.com/svQkpRHGCpf_arlLfdRSHczlJU0=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F09b%2F94b%2F0af%2F09b94b0afe62646e72bd87ae96c0d359.jpg" />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-black font-semibold text-xs tracking-widest title-font mb-1">Plan de Viaje</h3>
                                <h2 className='text-black text-xs tracking-widest title-font mb-1'> - Tokio</h2>
                                <h2 className="text-black title-font text-lg font-medium hover:text-hover-orange"><Link to='/Register'>Mochilero</Link></h2>
                                <p className="mt-1">$800.00</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
