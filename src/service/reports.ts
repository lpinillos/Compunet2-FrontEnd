import axios from '../service/axios'

const COUNT_DESTINATIONS_URL = 'api/v1/destinations/countDestinations'
const COUNT_PLANS_URL = 'api/v1/plans/countPlans'
const COUNT_CLIENTS_URL = 'api/v1/clients/countClients'
const SALES_OF_THE_WEEK_URL = '/api/v1/sales/getSalesOfTheWeek'
const LATEST_SALES_URL = '/api/v1/sales/getLatestSales'

export const countDestinations = async () => {
    try {
        const response = await axios.get(COUNT_DESTINATIONS_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el contador de destinos', error);
        throw error;
    }
};

export const countPlans = async () => {
    try {
        const response = await axios.get(COUNT_PLANS_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el contador de planes', error);
        throw error;
    }
};

export const countClients = async () => {
    try {
        const response = await axios.get(COUNT_CLIENTS_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el contador de clientes', error);
        throw error;
    }
};

export const salesOfTheWeek = async () => {
    try {
        const response = await axios.get(SALES_OF_THE_WEEK_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las ventas de la semana', error);
        throw error;
    }
}

export const latestSales = async () => {
    try {
        const response = await axios.get(LATEST_SALES_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las últimas ventas', error);
        throw error;
    }
}