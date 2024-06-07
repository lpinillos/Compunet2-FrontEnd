import { NavBarVertical } from '../components/NavBarVertical';
import destinoBg from '../images/destinoBackground.jpg';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaCalendarAlt, FaSearch } from 'react-icons/fa';

const CatalogoDestinoView = () => {
    const navigate = useNavigate();
    const [plans, setPlans] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPlans, setFilteredPlans] = useState([]);
    const [filteredDestinations, setFilteredDestinations] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [busquedaDestino, setBusquedaDestino] = useState('')
    

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchPlans(searchTerm);
        fetchDestinations(searchTerm);
    };

    const truncateDescription = (description, maxLength) => {
        if (description.length <= maxLength) return description;
        return description.substring(0, maxLength) + '...';
    };

    useEffect(() => {
        fetchPlans();
        fetchDestinations();
    }, []);

    const fetchPlans = (word = '') => {
        axios.get('http://localhost:9091/api/v1/plans/getPlan', {
            params: { word }
        }).then(response => {
            const activePlans = response.data.filter(plan => plan.state === "ACTIVO");
            setPlans(activePlans);
            setFilteredPlans(activePlans);
        }).catch(error => {
            console.error("Existe un error al obtener los planes", error);
        });
    };

    const fetchDestinations = (word = '') => {
        axios.get('http://localhost:9091/api/v1/destinations/getDestination', {
            params: { word }
        }).then(response => {
            const activeDestinations = response.data.filter(destination => destination.state === "Active");
            setDestinations(activeDestinations);
            setFilteredDestinations(activeDestinations);
        }).catch(error => {
            console.error("Existe un error al obtener los destinos", error);
        });
    };

    useEffect(() => {
        const filtered = plans.filter((item) => item.name.toLowerCase().includes(busqueda.toLowerCase()));
        setFilteredPlans(filtered);
    }, [busqueda, plans]);

    useEffect(() => {
        const filtered = destinations.filter((item) => item.name.toLowerCase().includes(busquedaDestino.toLowerCase()));
        setFilteredDestinations(filtered);
    }, [busquedaDestino, destinations]);

    return (
        <>
            <NavBarVertical />
            <div className='ml-64'>
                <div className='p-4 flex justify-center items-center'>
                    <div className='relative w-3/4 h-64 rounded-lg mt-10 flex justify-center items-center overflow-hidden' style={{ backgroundImage: `url(${destinoBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='absolute inset-0 bg-black opacity-50'></div>
                        <label className='relative text-white font-semibold text-2xl z-10'>Descubre, Planea y vive la aventura!</label>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='flex justify-center flex-row gap-4 mt-6'>
                    <div className='relative'>
                        <FaCalendarAlt className='absolute top-3 left-3 text-gray-400' />
                        <input type="date" className='pl-10 pr-4 py-2 border rounded-lg shadow-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    </div>
                    <div className='relative'>
                        <FaCalendarAlt className='absolute top-3 left-3 text-gray-400' />
                        <input type="date" className='pl-10 pr-4 py-2 border rounded-lg shadow-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    </div>
                    <div className='relative'>
                        <FaSearch className='absolute top-3 left-3 text-gray-400' />
                        <input type="text" placeholder='Busca un destino' className='pl-10 pr-4 py-2 border rounded-lg shadow-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500' value={busquedaDestino} onChange={e => setBusquedaDestino(e.target.value)}/>
                    </div>
                    <div className='relative'>
                        <FaSearch className='absolute top-3 left-3 text-gray-400' />
                        <input type="text" placeholder='Busca un plan' className='pl-10 pr-4 py-2 border rounded-lg shadow-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500' value={busqueda} onChange={e => setBusqueda(e.target.value)} />
                    </div>
                </form>
                <div className='flex justify-center mt-10 font-semibold text-2xl'>
                    Planes Disponibles
                </div>
                <div className="flex flex-wrap justify-center mt-5">
                    {Array.isArray(filteredPlans) && filteredPlans.length > 0 ? (
                        filteredPlans.map(plan => (
                            <div key={plan.id_plan} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div
                                    className="rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer bg-white"
                                    style={{ height: '380px' }}
                                    onClick={() => navigate('/InfoPlanView2', { state: { planObj: plan } })}
                                >
                                    <div className="relative h-48 w-full">
                                        <img alt={plan.name} className="object-cover object-center w-full h-full" src={plan.image} />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-gray-600 font-semibold text-sm mb-1">Plan de Viaje</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium mb-2">{plan.name}</h2>
                                        <p className="text-gray-600 text-sm mb-4">{truncateDescription(plan.description, 100)}</p>
                                        <p className="text-gray-800 text-lg font-semibold">${plan.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600 mt-8">No hay planes disponibles</p>
                    )}
                </div>
                <div className='flex justify-center mt-10 font-semibold text-2xl'>
                    Destinos Disponibles
                </div>
                <div className="flex flex-wrap justify-center mt-5">
                    {Array.isArray(filteredDestinations) && filteredDestinations.length > 0 ? (
                        filteredDestinations.map(destination => (
                            <div key={destination.id_destination} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <div
                                    className="rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer bg-white"
                                    style={{ height: '380px' }}
                                    onClick={() => navigate('/InfoDestinationView2', { state: { destinationObj: destination } })}
                                >
                                    <div className="relative h-48 w-full">
                                        <img alt={destination.name} className="object-cover object-center w-full h-full" src={destination.image} />
                                    </div>
                                    <div className="p-4">
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
    )
}

export default CatalogoDestinoView;
