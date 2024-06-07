import axios from "../axios";

const DELETE_PLAN_URL = 'api/v1/destinations/delete';

export default async function deletePlan(planId) {
    try {
        const response = await axios.delete(`${DELETE_PLAN_URL}/${planId}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el destino:', error);
        throw error;
    }
}
