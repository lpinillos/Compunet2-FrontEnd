import axios from "../axios";

const DESTINATION_URL = 'api/v1/destinations/getDestination';

export default async function getDestination(destino) {
    try {
        const response = await axios.get(DESTINATION_URL, destino);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el Destino:', error);
        throw error;
    }
}
