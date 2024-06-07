import { useState, useEffect } from 'react';
import { NavBarVertical } from '../components/NavBarVertical';
import { Link, useNavigate } from 'react-router-dom';
import uploadImageCloudinary from '../service/LoadImage';
import createPlan from '../service/createPlan';
import createPlanDetail from '../service/createPlanDetail';
import axios from 'axios';
import createPlanAndDetail from '../service/createPlanAndPlanDetail';

export const CreatePlanView = () => {
    const generateRandomId = () => Math.floor(Math.random() * 100000000);
    const [namePlan, setNamePlan] = useState("");
    const [descriptionPlan, setDescriptionPlan] = useState("");
    const [numPeoplePlan, setNumPeoplePlan] = useState("");
    const [startDatePlan, setStartDatePlan] = useState("");
    const [endDatePlan, setEndDatePlan] = useState("");
    const [pricePlan, setPricePlan] = useState(0);
    const [statePlan, setStatePlan] = useState("ACTIVO");
    const [imagePlan, setImagePlan] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [code, setCode] = useState("");
    const [user, setUser] = useState(null);
    const [destinations, setDestinations] = useState([]);
    const [planDetails, setPlanDetails] = useState([
        { id: generateRandomId(), nutrition: 'NO', lodging: 'NO', transportation: 'NO', price: '', num_nights: '', num_days: '', state: 'ACTIVO', destination: '' }
    ]);

    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImagePlan(file);
        const reader = new FileReader();
        reader.onload = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
    };

    const calculatePricePlan = () => {
        let priceTemp = 0;
        for (let i = 0; i < planDetails.length; i++) {
            priceTemp += parseFloat(planDetails[i].price) || 0;
        }
        setPricePlan(priceTemp);
    }

    const userId = localStorage.getItem('email');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:9091/api/v1/user/getUsuario/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, [userId]);

    useEffect(() => {
        if (user) {
            console.log(user.id_user);
        }
    }, [user]);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await axios.get('http://localhost:9091/api/v1/destinations/getDestination');
                setDestinations(response.data);
            } catch (error) {
                console.error("Error fetching destinations:", error);
            }
        };

        fetchDestinations();
    }, []);

    useEffect(() => {
        calculatePricePlan();
    }, [planDetails]);

    const handleForm = async (e) => {
        e.preventDefault();

        let imageUrl = '';
        if (imagePlan) {
            const [status, imageResponse] = await uploadImageCloudinary(imagePlan);
            imageUrl = imageResponse.secure_url;
        }

        try {
            // Crear el plan
            const planId = generateRandomId();
            const plan = {
                id_plan: planId,
                code,
                name: namePlan,
                description: descriptionPlan,
                num_people: parseInt(numPeoplePlan),
                start_Date: startDatePlan,
                end_Date: endDatePlan,
                price: parseFloat(pricePlan),
                state: statePlan,
                user: user ? user.id_user : null,
                image: imageUrl
            };
            const response = await createPlan(plan);
            console.log("Plan creado con éxito:", response);
            
            // Crear cada detalle del plan
            for (const detail of planDetails) {
                const detailId = generateRandomId();
                const detailData = {
                    id_planDetail: detailId,
                    nutrition: detail.nutrition,
                    lodging: detail.lodging,
                    transportation: detail.transportation,
                    price: parseFloat(detail.price),
                    num_nights: parseInt(detail.num_nights),
                    num_days: parseInt(detail.num_days),
                    state: detail.state,
                    destination: parseInt(detail.destination)
                };
                const response2 = await createPlanDetail(detailData);
                console.log("Detalle de plan creado:", response2);

                // Crear relación entre el plan y el detalle del plan
                const planAndDetailId = generateRandomId();
                const planAndDetail = {
                    id_pAd: planAndDetailId,
                    plan: planId,
                    planDetail: detailId
                };
                const response3 = await createPlanAndDetail(planAndDetail);
                console.log("Relación plan y detalle de plan creada:", response3);
            }

            navigate('/PlanView');
        } catch (error) {
            console.error("Error al crear todo:", error);
        }
    };


    const handleAddDetail = () => {
        setPlanDetails([...planDetails, { id: generateRandomId(), nutrition: 'NO', lodging: 'NO', transportation: 'NO', transfer: '', price: '', num_nights: '', num_days: '', state: 'ACTIVO', destination: '' }]);
    };

    const handleRemoveDetail = (id) => {
        setPlanDetails(planDetails.filter(detail => detail.id !== id));
    };

    const handleDetailChange = (id, field, value) => {
        setPlanDetails(planDetails.map(detail => (detail.id === id ? { ...detail, [field]: value } : detail)));
    };

    const toggleCheckbox = (id, field) => {
        setPlanDetails(planDetails.map(detail => (
            detail.id === id ? { ...detail, [field]: detail[field] === 'NO' ? 'SI' : 'NO' } : detail
        )));
    };

    return (
        <>
            <NavBarVertical />
            <form onSubmit={handleForm} className="text-gray-800 bg-gray-100 min-h-screen p-8 ml-64">
                <div className="max-w-4xl mx-auto mt-10">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <label htmlFor="input_file" className="block">
                            <input
                                type="file"
                                id="input_file"
                                name="input_file"
                                accept=".jpg"
                                hidden
                                onChange={handleFileChange}
                            />
                            <div
                                className="w-full h-96 border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center bg-gray-100 cursor-pointer"
                                style={{ backgroundImage: `url(${imagePreview})`, backgroundSize: 'cover' }}
                            >
                                {imagePreview ? (
                                    <p className="text-white bg-black bg-opacity-50 p-2 rounded-md">Imagen cargada</p>
                                ) : (
                                    <p className="text-gray-500">Arrastra una imagen o haz click para seleccionar</p>
                                )}
                            </div>
                        </label>
                        <div className="mt-6">
                            <input
                                type="text"
                                placeholder="Ingrese el nombre del plan"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={namePlan}
                                onChange={(e) => setNamePlan(e.target.value)}
                            />
                            <textarea
                                placeholder="Descripción del destino"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4 h-32 resize-none overflow-y-auto"
                                value={descriptionPlan}
                                onChange={(e) => setDescriptionPlan(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Cantidad de personas"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={numPeoplePlan}
                                onChange={(e) => setNumPeoplePlan(e.target.value)}
                            />
                            <div className="flex space-x-4 mb-4">
                                <div className="flex-1">
                                    <label className="block text-sm mb-2 text-gray-600">Fecha de inicio del plan:</label>
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded-md p-2"
                                        value={startDatePlan}
                                        onChange={(e) => setStartDatePlan(e.target.value)}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm mb-2 text-gray-600">Fecha de finalización del plan:</label>
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded-md p-2"
                                        value={endDatePlan}
                                        onChange={(e) => setEndDatePlan(e.target.value)}
                                    />
                                </div>
                            </div>
                            <select
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={statePlan}
                                onChange={(e) => setStatePlan(e.target.value)}
                            >
                                <option value="ACTIVO">ACTIVO</option>
                                <option value="INACTIVO">INACTIVO</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Código"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />

                            <label className="font-semibold ml-2">Detalles del Plan</label>
                            {planDetails.map((detail) => (
                                <div key={detail.id} className="bg-gray-200 p-4 rounded-lg mb-4">
                                    <div className="flex items-center mb-4">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={detail.nutrition === 'SI'}
                                            onChange={() => toggleCheckbox(detail.id, 'nutrition')}
                                        />
                                        <label className="text-sm">Nutrición</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={detail.lodging === 'SI'}
                                            onChange={() => toggleCheckbox(detail.id, 'lodging')}
                                        />
                                        <label className="text-sm">Alojamiento</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={detail.transportation === 'SI'}
                                            onChange={() => toggleCheckbox(detail.id, 'transportation')}
                                        />
                                        <label className="text-sm">Transporte</label>
                                    </div>
                                    <input
                                        type="number"
                                        placeholder="Precio"
                                        className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                        value={detail.price}
                                        onChange={(e) => handleDetailChange(detail.id, 'price', e.target.value)}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Número de noches"
                                        className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                        value={detail.num_nights}
                                        onChange={(e) => handleDetailChange(detail.id, 'num_nights', e.target.value)}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Número de días"
                                        className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                        value={detail.num_days}
                                        onChange={(e) => handleDetailChange(detail.id, 'num_days', e.target.value)}
                                    />
                                    <select
                                        className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                        value={detail.destination}
                                        onChange={(e) => handleDetailChange(detail.id, 'destination', e.target.value)}
                                    >
                                        <option value="">Seleccione un destino</option>
                                        {destinations.map(destination => (
                                            <option key={destination.id_destination} value={destination.id_destination}>
                                                {destination.name}
                                            </option>
                                        ))}
                                    </select>
                                    {planDetails.length > 1 && (
                                        <>
                                            <div className='flex justify-center'>
                                                <button
                                                    type="button"
                                                    className="w-36 bg-red-700 text-white rounded-md p-2 hover:bg-red-500 transition duration-200 font-semibold"
                                                    onClick={() => handleRemoveDetail(detail.id)}
                                                >
                                                    Eliminar Detalle
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                            <div className='flex justify-center'>
                                <button
                                    type="button"
                                    className="w-36 bg-custom-orange text-white rounded-md p-2 hover:bg-hover-orange transition duration-200 font-semibold mb-4"
                                    onClick={handleAddDetail}
                                >
                                    Agregar Detalle
                                </button>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm mb-2 text-gray-600">Precio Total del Plan:</label>
                                <input
                                    type="text"
                                    readOnly
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    value={`$${pricePlan}`}
                                />
                            </div>

                            <div className="flex flex-row">
                                <Link to='/PlanView' className='w-full bg-red-700 text-white rounded-md p-2 hover:bg-red-500 transition duration-200 font-semibold mr-2 text-center'>
                                    Regresar
                                </Link>
                                <button
                                    type="submit"
                                    className="w-full bg-custom-orange text-white rounded-md p-2 hover:bg-hover-orange transition duration-200 font-semibold"
                                >
                                    Crear Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default CreatePlanView;
