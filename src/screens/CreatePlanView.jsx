import React from 'react'
import { NavBarVertical } from '../components/NavBarVertical'
export const CreatePlanView = () => {
    return (
        <>
            <NavBarVertical></NavBarVertical>
            <section className="text-gray-400 bg-white body-font min-h-screen">
                <div className='ml-64 p-4'>
                    <div className="lg:w-4/5 mt-28 ml-28 flex flex-wrap shadow-md border border-gray-800 border-x-2 border-y-2 hover:shadow-xl rounded-lg w-28 h-96">
                        <label htmlFor="input_file" className=''>
                            <input type="file" name='input_file' id='input_file' hidden/>
                            <div className='w-28 h-28 bg-red-500'>
                                carga imagen 
                            </div>
                        </label>
                    </div>
                </div>
            </section>
        </>
    )
}
