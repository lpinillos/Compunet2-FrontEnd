import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';
import updatePlan from '../service/updatePlan';

export const EditInfoPlanView = () => {
    const location = useLocation();
    let planObj = location.state?.planObj;
    const [plan, setPlan] = useState(planObj || {});
    const navigate = useNavigate();
    const [namePlan, setNamePlan] = useState(plan.name);
    const [descriptionPlan, setDescriptionPlan] = useState(plan.description);
    const [numPeoplePlan, setNumPeoplePlan] = useState(plan.num_people);
    const [startDatePlan, setStartDatePlan] = useState(plan.start_Date);
    const [endDatePlan, setEndDatePlan] = useState(plan.end_Date);
    const [pricePlan, setPricePlan] = useState(plan.price);
    const [statePlan, setStatePlan] = useState(plan.state);
    const [imagePlan, setImagePlan] = useState(plan.image);
    const [code, setCode] = useState(plan.code);

    const handleForm = async (e) => {
        e.preventDefault();
    
        const updatedPlan = {
            id_plan: planObj.id_plan,
            code: code,
            name: namePlan,
            description: descriptionPlan,
            num_people: parseInt(numPeoplePlan),
            start_Date: startDatePlan,
            end_Date: endDatePlan,
            price: parseFloat(pricePlan),
            state: statePlan,
            image: planObj.image,
            user: planObj.user
        };
        try {
            const response = await updatePlan(updatedPlan);
            console.log("Plan actualizado con éxito:", response);
            alert("Cambios guardados correctamente!");
            navigate('/InfoPlanView', { state: { planObj: updatedPlan } });
        } catch (error) {
            console.error("Error al actualizar plan:", error);
        }
    };

    if (!planObj) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <NavBarVertical />
            <section className="bg-gray-100 min-h-screen flex items-center justify-center ml-64">
                <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mt-20">
                    <form onSubmit={handleForm} className="flex flex-col lg:flex-row items-center">
                        <img 
                            alt="Plan" 
                            className="lg:w-1/3 w-full object-cover object-center rounded-lg shadow-md" 
                            src={plan.image || 'https://via.placeholder.com/300'} 
                        />
                        <div className="lg:w-2/3 w-full lg:pl-10 mt-6 lg:mt-0">
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Código:</label>
                                <input
                                    type="text"
                                    name="code"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Título:</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={namePlan}
                                    onChange={(e) => setNamePlan(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Descripción:</label>
                                <input
                                    type="text"
                                    name="description"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={descriptionPlan}
                                    onChange={(e) => setDescriptionPlan(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Número de personas:</label>
                                <input
                                    type="text"
                                    name="num_people"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={numPeoplePlan}
                                    onChange={(e) => setNumPeoplePlan(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Fecha de inicio:</label>
                                <input
                                    type="date"
                                    name="start_Date"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={startDatePlan}
                                    onChange={(e) => setStartDatePlan(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Fecha de finalización:</label>
                                <input
                                    type="date"
                                    name="end_Date"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={endDatePlan}
                                    onChange={(e) => setEndDatePlan(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Estado:</label>
                                <input
                                    type="text"
                                    name="state"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={statePlan}
                                    onChange={(e) => setStatePlan(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 font-semibold">Precio:</label>
                                <input
                                    type="text"
                                    name="price"
                                    className="text-black title-font font-medium mb-1 w-full border border-gray-300 rounded-md p-2"
                                    value={pricePlan}
                                    onChange={(e) => setPricePlan(e.target.value)}
                                />
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                                >
                                    Guardar
                                </button>
                                <button
                                    type="button"
                                    className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                                    onClick={() => navigate('/InfoPlanView', { state: { planObj: planObj } })}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default EditInfoPlanView;
