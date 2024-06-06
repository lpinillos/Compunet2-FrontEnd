import axios from "../axios";

const CREATE_PLAN_URL = 'api/v1/plans/create';

export default async function createPlan(plan) {
    try {
        const response = await axios.post(CREATE_PLAN_URL, plan);
        return response.data;
    } catch (error) {
        console.error('Error al crear el plan:', error);
        throw error;
    }
}
