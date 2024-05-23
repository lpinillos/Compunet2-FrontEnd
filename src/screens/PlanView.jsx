import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';
import 'flowbite';
import axios from 'axios';
export const PlanView = () => {

    const [plans, setPlans] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchPlans(searchTerm);
    };    

    useEffect(() => {
        fetchPlans();
    }, []);
    
    const fetchPlans = (word = '') => {
        axios.get(`http://localhost:9091/api/v1/plans/getPlan`, {
            params: { word }
        }).then(response => {
            setPlans(response.data);
        }).catch(error => {
            console.error("Existe un error al obtener los planes", error);
        });
    };    


    return (
        <>
            <NavBarVertical></NavBarVertical>
            <div className="ml-64 p-4">
                <div className="flex justify-end w-full">
                    <form className="form-inline" onSubmit={handleSubmit}>
                        <div className="form-group mb-2"></div>
                        <div className="form-group mx-sm-3 mb-2">
                            <input
                                type="text"
                                name="word"
                                className="form-control"
                                id="word"
                                value={searchTerm}
                                onChange={handleInputChange}
                                placeholder="Digite el valor a buscar..."
                                required
                            />
                        </div>
                        <input type="submit" className="btn btn-primary mb-2" value="Buscar"></input>
                    </form>
                    &nbsp;&nbsp;&nbsp;
                    <Link to='/CreatePlan'>
                        <button className='bg-custom-orange hover:bg-hover-orange rounded-lg w-32 h-11 font-semibold text-white mt-5 mr-28'>Crear Plan</button>
                    </Link>
                </div>
                <div className="flex flex-wrap">
                    {Array.isArray(plans) ? (
                        plans.map(plan => (
                            <div key={plan.id_plan} className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-lg shadow-md border border-gray-800 border-x-2 border-y-2 hover:shadow-xl mx-10 mb-8">
                                <div className="block relative h-48 rounded">
                                    <img alt={plan.name} className="object-cover object-center w-full h-full block" src={plan.image} />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-black font-semibold text-xs tracking-widest title-font mb-1">Plan de Viaje</h3>
                                    <h2 className='text-black text-xs tracking-widest title-font mb-1'> - {plan.name}</h2>
                                    <h2 className="text-black title-font text-lg font-medium hover:text-hover-orange"><Link to='/InfoPlanView'>{plan.description}</Link></h2>
                                    <p className="mt-1">${plan.price}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No hay planes disponibles</p>
                    )}
                </div>
            </div>
        </>
    );    

}
