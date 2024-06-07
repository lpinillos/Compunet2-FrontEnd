import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';
import updatePlan from '../service/updatePlan';
export const EditInfoPlanView = () => {
    const location = useLocation();
    let planObj = location.state.planObj;
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
    
        const plan = {
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
            const response = await updatePlan(plan);
            console.log("Plan actualizado con éxito:", response);
            navigate('/PlanView')
             // Usa navigate en lugar de Navigat e
        } catch (error) {
            console.error("Error al crear al actualizar plan:", error);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (!planObj) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <NavBarVertical></NavBarVertical>
            <section className="text-gray-700 bg-white body-font min-h-screen">
                <div className="ml-64 p-4">
                    <form onSubmit={handleForm} className="lg:w-4/5 mt-28 ml-28 flex flex-wrap shadow-md border border-gray-800 border-x-2 border-y-2 hover:shadow-xl rounded-lg">
                        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded" src={plan.image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <span className="text-gray-700 font-semibold">Codigo:</span>
                            <input
                                type="text"
                                name="code"
                                className="text-sm title-font text-black tracking-widest font-semibold w-full"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                            <span className="text-gray-700 font-semibold">Titulo:</span>
                            <input
                                type="text"
                                name="name"
                                className="text-black text-3xl title-font font-medium mb-1 w-full"
                                value={namePlan}
                                onChange={(e) => setNamePlan(e.target.value)}
                            />
                            <span className="text-gray-700 font-semibold">Descripcion:</span>
                              <input
                                type="text"
                                name="description"
                                className="text-sm title-font text-black tracking-widest font-semibold w-full"
                                value={descriptionPlan}
                                onChange={(e) => setDescriptionPlan(e.target.value)}
                            />
                            <div className="flex flex-col mb-4">
                                <span className="text-gray-700 font-semibold">Número de personas:</span>
                                <input
                                    type="text"
                                    name="num_people"
                                    className="text-gray-700 mb-1"
                                    value={numPeoplePlan}
                                onChange={(e) => setNumPeoplePlan(e.target.value)}
                                />
                                <span className="text-gray-700 font-semibold">Fecha de inicio:</span>
                                <input
                                    type="date"
                                    name="start_Date"
                                    className="text-gray-700 mb-1"
                                    value={startDatePlan}
                                    onChange={(e) => setStartDatePlan(e.target.value)}
                                />
                                <span className="text-gray-700 font-semibold">Fecha de finalización:</span>
                                <input
                                    type="date"
                                    name="end_Date"
                                    className="text-gray-700 mb-1"
                                    value={endDatePlan}
                                    onChange={(e) => setEndDatePlan(e.target.value)}
                                />
                                <span className="text-gray-700 font-semibold">Estado:</span>
                                <input
                                    type="text"
                                    name="state"
                                    className="text-gray-700 mb-1"
                                    value={statePlan}
                                    onChange={(e) => setStatePlan(e.target.value)}
                                />
                                <span className="text-gray-700 font-semibold">Precio:</span>
                                <input
                                    type="text"
                                    name="price"
                                    className="text-gray-700 mb-1"
                                    value={pricePlan}
                                    onChange={(e) => setPricePlan(e.target.value)}
                                />
                            </div>
                            <div className="flex">
                                <button
                                    type="submit"
                                    className="flex mx-10 text-white bg-custom-orange border-0 py-2 px-6 focus:outline-none hover:bg-hover-orange rounded"
                                >
                                    Guardar
                                </button>
                                <button
                                    type="button"
                                    className="rounded w-20 h-10 bg-red-700 hover:bg-red-500 hover:text-white p-0 border-0 inline-flex items-center justify-center text-white font-semibold ml-4 transition duration-300"
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
