import axios from "../axios";

const UPDATE_DESTINO_URL = 'api/v1/destinations/update';

export default async function updatePlan(destino) {
    try {
        const response = await axios.post(UPDATE_DESTINO_URL, destino);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el destino:', error);
        throw error;
    }
}
