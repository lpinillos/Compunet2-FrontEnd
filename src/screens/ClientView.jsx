import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';
import axios from 'axios';

export const ClientView = () => {
    const navigate = useNavigate();
    const [clients, setClients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [titulo, setTitulo] = useState("");
    const [filterData, setFilterData] = useState("");
    const [busqueda, setBusqueda] = useState("");

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchClients(searchTerm);
    };

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = (word = '') => {
        axios.get('http://localhost:9091/api/v1/clients/getClient', {
            params: { word }
        }).then(response => {
            setClients(response.data);
        }).catch(error => {
            console.error("Existe un error al obtener los clientes", error);
        });
    };

    const truncateDescription = (description, maxLength) => {
        if (description.length <= maxLength) return description;
        return description.substring(0, maxLength) + '...';
    };

    useEffect(() => {
        const filtered = clients.filter((item) => {
            const titleMatch = item.first_name.toLowerCase().includes(busqueda.toLowerCase());
            return titleMatch;
        });

        setFilterData(filtered);
    }, [busqueda, clients]);

    console.log(clients);

    return (
        <>
            <NavBarVertical />
            <div className="ml-64 p-4">
                <div className="flex justify-center items-center w-full">
                    <form className="form-inline w-full" onSubmit={handleSubmit}>
                        <div className="form-group mx-sm-3 mb-2 w-full">
                            <input
                                type="text"
                                name="word"
                                className="form-control border border-gray-300 w-full rounded-md py-2 px-4"
                                id="word"
                                value={busqueda} onChange={e => setBusqueda(e.target.value)}
                                placeholder="Digite el valor a buscar..."
                                required
                            />
                        </div>
                    </form>
                    <Link to='/CreatePlan'>
                        <button className='bg-custom-orange hover:bg-hover-orange rounded-lg w-32 h-11 font-semibold text-white mr-5 ml-5 mb-2'>Crear Cliente</button>
                    </Link>
                </div>
                <div className="flex flex-wrap justify-center mt-5">
                    {Array.isArray(clients) && clients.length > 0 ? (
                        filterData.map(client => (
                            <div key={client.id_client} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div
                                    className="rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
                                    style={{ height: '380px' }}
                                    onClick={() => navigate('/InfoClientView', { state: { clientObj: client } })}
                                >
                                    <div className="relative h-48 w-full">
                                        <img alt={client.id_client} className="object-cover object-center w-full h-full" src={client.image} />
                                    </div>
                                    <div className="p-4 bg-white">
                                        <h3 className="text-gray-600 font-semibold text-sm mb-1">Cliente</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium mb-2">{client.first_name} {client.last_name}</h2>
                                        <p className="text-gray-600 text-sm mb-4">{client.phone}</p>
                                        <p className="text-gray-800 text-lg font-semibold">{client.mail}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600 mt-8">No hay clientes disponibles</p>
                    )}
                </div>
            </div>
        </>
    );
};