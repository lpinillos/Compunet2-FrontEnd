import { useState } from 'react';
import { NavBarVertical } from '../components/NavBarVertical';
import { Link, Navigate } from 'react-router-dom';
import uploadImageCloudinary from '../service/LoadImage';
import createPlan from '../service/createPlan';
import getUserByEmail from '../service/getUser';

export const CreatePlanView = () => {
    const [namePlan, setNamePlan] = useState("");
    const [destinationPlan, setDestinationPlan] = useState("");
    const [descriptionPlan, setDescriptionPlan] = useState("");
    const [numPeoplePlan, setNumPeoplePlan] = useState("");
    const [startDatePlan, setStartDatePlan] = useState("");
    const [endDatePlan, setEndDatePlan] = useState("");
    const [pricePlan, setPricePlan] = useState("");
    const [statePlan, setStatePlan] = useState("");
    const [imagePlan, setImagePlan] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [code, setCode] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImagePlan(file);
        const reader = new FileReader();
        reader.onload = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
    };

    const handleChangeNamePlan = (event) => setNamePlan(event.target.value);

    const handleOnlyNumberInput = (event) => {
        const inputValue = event.target.value;
        if (/^-?\d*$/.test(inputValue) && parseInt(inputValue) !== 0) {
            setNumPeoplePlan(inputValue);
        }
    };

    const userId = localStorage.getItem('email');
    console.log("ESTE ES EL ID: " + getUserByEmail(userId).id_user);


    const fetchPlans = (word = '') => {
        axios.get('http://localhost:9091/api/v1/user/getUsuario/', {
            params: { word }
        }).then(response => {
            setPlans(response.data);
        }).catch(error => {
            console.error("Existe un error al obtener los planes", error);
        });
    };

    const generateRandomId = () => Math.floor(Math.random() * 100000000);

    const handleForm = async (e) => {
        e.preventDefault();
        let imageUrl = '';
        if (imagePlan) {
            const [status, imageResponse] = await uploadImageCloudinary(imagePlan);
            imageUrl = imageResponse.secure_url;
        }
        const plan = {
            id_plan: generateRandomId(),
            code,
            name: namePlan,
            description: descriptionPlan,
            num_people: parseInt(numPeoplePlan),
            start_Date: startDatePlan,
            end_Date: endDatePlan,
            price: parseFloat(pricePlan),
            state: statePlan,
            user: userId,
            image: imageUrl
        };
        try {
            const response = await createPlan(plan);
            console.log("Plan creado con éxito:", response);
            Navigate('/PlanView')
        } catch (error) {
            console.error("Error al crear el plan:", error);
            
        }
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
                                onChange={handleChangeNamePlan}
                            />
                            <input
                                type="text"
                                placeholder="Ingrese el destino"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={destinationPlan}
                                onChange={(e) => setDestinationPlan(e.target.value)}
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
                                onChange={handleOnlyNumberInput}
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
                            <input
                                type="text"
                                placeholder="Precio"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={pricePlan}
                                onChange={(e) => setPricePlan(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Estado del plan"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={statePlan}
                                onChange={(e) => setStatePlan(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Código"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                            <div className='flex flex-row'>
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
