import axios from "../axios";

const CREATE_DESTINO_URL = 'api/v1/user/save';

export default async function createPlan(destino) {
    try {
        const response = await axios.post(CREATE_DESTINO_URL, destino);
        return response.data;
    } catch (error) {
        console.error('Error al crear el Destino:', error);
        throw error;
    }
}
