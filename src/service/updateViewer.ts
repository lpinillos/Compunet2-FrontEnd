import axios from "../axios";

const UPDATE_VIEWER_URL = 'api/v1/user/update';

export default async function updatePlan(plan) {
    try {
        const response = await axios.post(UPDATE_VIEWER_URL, plan);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el plan:', error);
        throw error;
    }
}
