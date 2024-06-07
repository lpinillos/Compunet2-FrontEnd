import axios from "../axios";

const CREATE_PLAN_URL = 'api/v1/planAndplandetail/create';

export default async function createPlanAndDetail(plan) {
    try {
        const response = await axios.post(CREATE_PLAN_URL, plan);
        return response.data;
    } catch (error) {
        console.error('Error al crear el plan Y el detalle:', error);
        console.log("ESTE ES EL DETALLE PLAN Y EL PLAN: ", plan);
        throw error;
    }
}