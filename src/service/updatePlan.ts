import axios from "../axios";

const UPDATE_PLAN_URL = 'api/v1/plans/update';

export default async function updatePlan(plan) {
    try {
        console.log("ENTRO")
        const response = await axios.post(UPDATE_PLAN_URL, plan);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el plan:', error);
        throw error;
    }
}
