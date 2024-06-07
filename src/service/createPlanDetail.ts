import axios from "../axios";

const CREATE_PLANDETAIL_URL = 'api/v1/plandetails/create';

export default async function createPlanDetail(plan) {
    try {
        const response = await axios.post(CREATE_PLANDETAIL_URL, plan);
        return response.data;
    } catch (error) {
        console.error('Error al crear el detalle plan:', error);
        console.log("ESTE ES EL DETALLE DE PLAN: ",plan)
        throw error;
    }
}