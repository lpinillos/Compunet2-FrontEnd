import { useState, useEffect } from 'react';
import { NavBarVertical } from '../components/NavBarVertical';
import { Link, useNavigate } from 'react-router-dom';
import uploadImageCloudinary from '../service/LoadImage';
import createDestination from '../service/createDestino';
import axios from 'axios';

export const CreateDestino = () => {
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [state, setState] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
        const reader = new FileReader();
        reader.onload = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
    };

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

    const generateRandomId = () => Math.floor(Math.random() * 100000000);

    const handleForm = async (e) => {
        e.preventDefault();
        let imageUrl = '';
        if (image) {
            const [status, imageResponse] = await uploadImageCloudinary(image);
            imageUrl = imageResponse.secure_url;
        }
        const destination = {
            id_destination: generateRandomId(),
            code,
            name,
            description,
            state,
            image: imageUrl
        };
        try {
            const response = await createDestination(destination);
            console.log("Destino creado con éxito:", response);
            navigate('/DestinoView');
        } catch (error) {
            console.error("Error al crear el destino:", error);
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
                                placeholder="Ingrese el código del destino"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Ingrese el nombre del destino"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <textarea
                                placeholder="Descripción del destino"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4 h-32 resize-none overflow-y-auto"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Estado del destino"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                            <div className='flex flex-row'>
                                <Link to='/DestinoView' className='w-full bg-red-700 text-white rounded-md p-2 hover:bg-red-500 transition duration-200 font-semibold mr-2 text-center'>
                                    Regresar
                                </Link>
                                <button
                                    type="submit"
                                    className="w-full bg-custom-orange text-white rounded-md p-2 hover:bg-hover-orange transition duration-200 font-semibold"
                                >
                                    Crear Destino
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};
