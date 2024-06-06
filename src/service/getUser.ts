import axios from "../axios";

const GET_USER_URL = 'api/v1/user/getUsuario/';

export default async function getUserByEmail(email) {
    try {
        const response = await axios.get(GET_USER_URL + email);
        return response.data;
    } catch (error) {
        console.error('Error al crear el plan:', error);
        throw error;
    }
}
