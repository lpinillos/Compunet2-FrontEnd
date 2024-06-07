import { NavBarVertical } from '../components/NavBarVertical';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewDestino = () => {
    const navigate = useNavigate();
    const [destinations, setDestinations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterData, setFilterData] = useState("");
    const [busqueda, setBusqueda] = useState("");

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchDestinations(searchTerm);
    };

    useEffect(() => {
        fetchDestinations();
    }, []);

    const fetchDestinations = (word = '') => {
        axios.get('http://localhost:9091/api/v1/destinations/getDestination', {
            params: { word }
        }).then(response => {
            setDestinations(response.data);
        }).catch(error => {
            console.error("Existe un error al obtener los destinos", error);
        });
    };

    const truncateDescription = (description, maxLength) => {
        if (description.length <= maxLength) return description;
        return description.substring(0, maxLength) + '...';
    };

    useEffect(() => {
        const filtered = destinations.filter((item) => {
            const titleMatch = item.name.toLowerCase().includes(busqueda.toLowerCase());
            return titleMatch;
        });

        setFilterData(filtered);
    }, [busqueda, destinations]);

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
                    <Link to='/CreateDestination'>
                        <button className='bg-custom-orange hover:bg-hover-orange rounded-lg w-32 h-11 font-semibold text-white mr-5 ml-5 mb-2'>Crear Destino</button>
                    </Link>
                </div>
                <div className="flex flex-wrap justify-center mt-5">
                    {Array.isArray(destinations) && destinations.length > 0 ? (
                        filterData.map(destination => (
                            <div key={destination.id_destination} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div
                                    className="rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
                                    style={{ height: '380px' }}
                                    onClick={() => navigate('/InfoDestinationView', { state: { destinationObj: destination } })}
                                >
                                    <div className="relative h-48 w-full">
                                        <img alt={destination.name} className="object-cover object-center w-full h-full" src={destination.image} />
                                    </div>
                                    <div className="p-4 bg-white">
                                        <h3 className="text-gray-600 font-semibold text-sm mb-1">Destino</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium mb-2">{destination.name}</h2>
                                        <p className="text-gray-600 text-sm mb-4">{truncateDescription(destination.description, 100)}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600 mt-8">No hay destinos disponibles</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default ViewDestino;