import { useState, useEffect } from 'react';
import { NavBarVertical } from '../components/NavBarVertical';
import { Link, useNavigate } from 'react-router-dom';
import uploadImageCloudinary from '../service/LoadImage';
import axios from 'axios';

export const CreateClient = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [idType, setIdType] = useState(''); // Nuevo estado para el tipo de identificación
    const [idTypes, setIdTypes] = useState([]); // Estado para almacenar los tipos de identificación disponibles
    const navigate = useNavigate();

    useEffect(() => {
        // Función para obtener los tipos de identificación disponibles
        const fetchIdTypes = async () => {
            try {
                const response = await axios.get('http://localhost:9091/api/v1/identificationType/getIdentificationType');
                setIdTypes(response.data);
            } catch (error) {
                console.error('Error al obtener los tipos de identificación:', error);
            }
        };

        fetchIdTypes();
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
        const reader = new FileReader();
        reader.onload = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
    };

    const handleForm = async (e) => {
        e.preventDefault();
        let imageUrl = '';
        if (image) {
            const [status, imageResponse] = await uploadImageCloudinary(image);
            imageUrl = imageResponse.secure_url;
        }  
        const generateRandomId = () => Math.floor(Math.random() * 1000);
        const cliente = {
            id_client : generateRandomId(),
            first_name: firstName,
            last_name: lastName,
            id_number: idNumber,
            phone: phone,
            mail: mail,
            gender: gender,
            birthdate: birthdate,
            image: imageUrl,
            identificationType: idType
        };
        try {
            // Realizamos la solicitud HTTP POST para crear el cliente
            const response = await axios.post('http://localhost:9091/api/v1/clients/create', cliente);
            console.log('Cliente creado con éxito:', response);
            navigate('/ClienteView');
        } catch (error) {
            console.error('Error al crear el cliente:', error);
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
                                placeholder="Nombre"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Apellido"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Número de identificación"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={idNumber}
                                onChange={(e) => setIdNumber(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Teléfono"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Género"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required
                            />
                            <input
                                type="date"
                                placeholder="Fecha de nacimiento"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={birthdate}
                                onChange={(e) => setBirthdate(e.target.value)}
                                required
                            />
                            <select
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={idType}
                                onChange={(e) => setIdType(e.target.value)}
                                required
                            >
                                <option value="">Seleccione el tipo de identificación</option>
                                {idTypes.map((type) => (
                                    <option key={type.id_idty} value={type.id_idty}>
                                        {type.name}
                                    </option>
                                ))}
                            </select>
                            <div className='flex flex-row'>
                                <Link to='/ClientView' className='w-full bg-red-700 text-white rounded-md p-2 hover:bg-red-500 transition duration-200 font-semibold mr-2 text-center'>
                                    Regresar
                                </Link>
                                <button
                                    type="submit"
                                    className="w-full bg-custom-orange text-white rounded-md p-2 hover:bg-hover-orange transition duration-200 font-semibold"
                                >
                                    Crear Cliente
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};