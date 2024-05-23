import React, { useState } from 'react'
import { NavBarVertical } from '../components/NavBarVertical'
export const CreatePlanView = () => {

    const [namePlan, setNamePlan] = useState("");
    const [destinationPlan, setDestinationPlan] = useState("");
    const [descriptionPlan, setDescriptionPlan] = useState("");
    const [numPeoplePlan, setNumPeoplePlan] = useState("");
    const [startDatePlan, setStartDatePlan] = useState("");
    const [endDatePlan, setEndDatePlan] = useState("");
    const [pricePlan, setPricePlan] = useState("");
    const [statePlan, setStatePlan] = useState("");
    const [imagePlan, setImagePlan] = useState("");

    const handleChangeNamePlan = (event) => {
        setNamePlan(event.target.value);
    };

    const handleOnlyNumberInput = (event) => {
        const inputValue = event.target.value;

        if (/^-?\d*$/.test(inputValue) && parseInt(inputValue) !== 0) {
            setNumPeoplePlan(inputValue);
        }
    };

    return (
        <>
            <NavBarVertical></NavBarVertical>
            <section className="text-gray-400 bg-white body-font min-h-screen">
                <div className='ml-64 p-4'>
                    <div className="lg:w-4/5 mt-28 ml-28 flex flex-wrap shadow-md border border-gray-800 border-x-2 border-y-2 hover:shadow-xl rounded-lg w-28 h-auto">
                        <label htmlFor="input_file" className=''>
                            <input type="file" name='input_file' id='input_file' hidden />
                            <div className='mx-10 my-10 w-80 h-80 border-black border-x-2 border-y-2 border-dashed flex justify-center items-center'>
                                Carga la imagen
                            </div>
                        </label>
                        <div className='flex flex-row'>
                            {/* Columna 1 */}
                            <div className='flex flex-col'>
                                <input type="text" placeholder='Ingrese el nombre del plan' className='w-72 text-black my-10 border-b-2 border-black pl-2' value={namePlan} onChange={handleChangeNamePlan}/>
                                <input type="text" placeholder='Ingrese el destino' className='w-72 text-black border-b-2 border-black pl-2' value={destinationPlan} onChange={(e) => { setDestinationPlan(e.target.value); }}/>
                                <textarea name="descripcion" placeholder='Descripción del destino' className='text-black border border-black border-x-2 border-y-2 rounded-lg my-5 w-72 h-56 pl-2 pt-2 overflow-y-auto resize-none' value={descriptionPlan} onChange={(e) => { setDescriptionPlan(e.target.value); }}/>
                                <input type="number" placeholder='Cantidad de personas' className='w-72 text-black mb-5 border-b-2 border-black pl-2' value={numPeoplePlan} onChange={handleOnlyNumberInput}/>
                            </div>
                            {/* Columna 2 */}
                            <div className='flex flex-col ml-10'>
                                <div className='flex flex-col mt-12 ml-5 space-y-5'>
                                    <span className='text-black'>Fecha de inicio del plan:</span>
                                    <input type="date" className='text-black mx-10' value={startDatePlan} onChange={(e) => { setStartDatePlan(e.target.value); }}/>
                                    <span className='text-black'>Fecha de finalización del plan:</span>
                                    <input type="date" className='text-black mx-10' value={endDatePlan} onChange={(e) => { setEndDatePlan(e.target.value); }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
