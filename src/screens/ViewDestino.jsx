import { NavBarVertical } from '../components/NavBarVertical';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewDestino = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterData, setFilterData] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [destino, setDestino] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchPlans(searchTerm);
    };

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchPlans = (word = '') => {
        axios.get('http://localhost:9091/api/v1/destinations/getDestination', {
            params: { word }
        }).then(response => {
            console.log(response.data); // Verificar la respuesta aquí
            setDestino(Array.isArray(response.data) ? response.data : []);
        }).catch(error => {
            console.error("Existe un error al obtener los destinos", error);
            setDestino([]);
        });
    };

    useEffect(() => {
        const filtered = destino.filter((item) => {
            const titleMatch = item.name.toLowerCase().includes(busqueda.toLowerCase());
            return titleMatch;
        });

        setFilterData(filtered);
    }, [busqueda, destino]);

    console.log("ESTA ES LA FOKIN IMAGEN: " + destino.image);

    return (
        <>
            <NavBarVertical />
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
                    <button className='bg-custom-orange hover:bg-hover-orange rounded-lg w-32 h-11 font-semibold text-white mr-5 ml-5 mb-2'>Crear Plan</button>
                </Link>
            </div>
            <div className="flex flex-wrap justify-center mt-5">
                {Array.isArray(destino) && destino.length > 0 ? (
                    filterData.map(destino => (
                        <div key={destino.id_destination} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <div
                                className="rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
                                style={{ height: '380px' }}
                            >
                                <div className="relative h-48 w-full">
                                    <img alt={destino.name} className="object-cover object-center w-full h-full" src={destino.image} />
                                </div>
                                <div className="p-4 bg-white">
                                    <h3 className="text-gray-600 font-semibold text-sm mb-1">Destino</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium mb-2">{destino.name}</h2>
                                    <p className="text-gray-600 text-sm mb-4">{destino.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600 mt-8">No hay destinos disponibles</p>
                )}
            </div>
        </>
    );
}

export default ViewDestino;
