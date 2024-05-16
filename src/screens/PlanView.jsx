import React from 'react'
import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
export const PlanView = () => {
    return (
        <>
            <NavBar></NavBar>
            <section className="text-gray-400 bg-gray-900 body-font min-h-screen">
                <div className="ml-64 p-4 mt-[56px]">
                    <div className="flex flex-wrap">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-lg shadow-md border border-gray-800 hover:shadow-xl mx-10 mb-8">
                            <div className="block relative h-48 rounded">
                                <img alt="tokio" className="object-cover object-center w-full h-full block" src="https://images.ecestaticos.com/svQkpRHGCpf_arlLfdRSHczlJU0=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F09b%2F94b%2F0af%2F09b94b0afe62646e72bd87ae96c0d359.jpg" />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Plan de Viaje</h3>
                                <h2 className='text-gray-500 text-xs tracking-widest title-font mb-1'> - Tokio</h2>
                                <h2 className="text-white title-font text-lg font-medium hover:text-hover-orange"><Link to='/InfoPlanView'>Mochilero</Link></h2>
                                <p className="mt-1">$800.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-lg shadow-md border border-gray-800 hover:shadow-xl mx-10 mb-8">
                            <div className="block relative h-48 rounded">
                                <img alt="tokio" className="object-cover object-center w-full h-full block" src="https://images.ecestaticos.com/svQkpRHGCpf_arlLfdRSHczlJU0=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F09b%2F94b%2F0af%2F09b94b0afe62646e72bd87ae96c0d359.jpg" />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Plan de Viaje</h3>
                                <h2 className='text-gray-500 text-xs tracking-widest title-font mb-1'> - Tokio</h2>
                                <h2 className="text-white title-font text-lg font-medium hover:text-hover-orange"><Link to='/Register'>Mochilero</Link></h2>
                                <p className="mt-1">$800.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-lg shadow-md border border-gray-800 hover:shadow-xl mx-10 mb-8">
                            <div className="block relative h-48 rounded">
                                <img alt="tokio" className="object-cover object-center w-full h-full block" src="https://images.ecestaticos.com/svQkpRHGCpf_arlLfdRSHczlJU0=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F09b%2F94b%2F0af%2F09b94b0afe62646e72bd87ae96c0d359.jpg" />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Plan de Viaje</h3>
                                <h2 className='text-gray-500 text-xs tracking-widest title-font mb-1'> - Tokio</h2>
                                <h2 className="text-white title-font text-lg font-medium hover:text-hover-orange"><Link to='/Register'>Mochilero</Link></h2>
                                <p className="mt-1">$800.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-lg shadow-md border border-gray-800 hover:shadow-xl mx-10 mb-8">
                            <div className="block relative h-48 rounded">
                                <img alt="tokio" className="object-cover object-center w-full h-full block" src="https://images.ecestaticos.com/svQkpRHGCpf_arlLfdRSHczlJU0=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F09b%2F94b%2F0af%2F09b94b0afe62646e72bd87ae96c0d359.jpg" />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Plan de Viaje</h3>
                                <h2 className='text-gray-500 text-xs tracking-widest title-font mb-1'> - Tokio</h2>
                                <h2 className="text-white title-font text-lg font-medium hover:text-hover-orange"><Link to='/Register'>Mochilero</Link></h2>
                                <p className="mt-1">$800.00</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
