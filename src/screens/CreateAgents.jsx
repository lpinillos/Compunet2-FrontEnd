import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';
import uploadImageCloudinary from '../service/LoadImage';
import createViewer from '../service/createViewer';
import axios from 'axios';

export const CreateAgents = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [role, setRole] = useState("AGENTE");
    const [numId, setNumId] = useState("");
    const [state, setState] = useState("ACTIVO");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
        const reader = new FileReader();
        reader.onload = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
    };

    const handleForm = async (e) => {
        e.preventDefault();
        e.preventDefault();
        let imageUrl = '';
        if (image) {
            const [status, imageResponse] = await uploadImageCloudinary(image);
            imageUrl = imageResponse.secure_url;
        }
        const viewer = {
            login : login,
            password: password,
            first_name: firstName,
            last_name: lastName,
            role: role,
            num_id: numId,
            state: state,
            image: imageUrl
        };
        try {
            const response = await createViewer(viewer);
            console.log("Viewer creado con éxito:", response);
            navigate('/ViewerView');
        } catch (error) {
            console.error("Error al crear el viewer:", error);
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
                                placeholder="Ingrese el correo del viewer"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Ingrese la contraseña"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Ingrese el nombre"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Ingrese el apellido"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Ingrese el rol"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={role}
                            
                            />
                            <input
                                type="text"
                                placeholder="Ingrese el número de identificación"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={numId}
                                onChange={(e) => setNumId(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Ingrese el estado"
                                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                                value={state}
                             
                            />
                            <div className='flex flex-row'>
                                <Link to='/AgentView' className='w-full bg-red-700 text-white rounded-md p-2 hover:bg-red-500 transition duration-200 font-semibold mr-2 text-center'>
                                    Regresar
                                </Link>
                                <button
                                    type="submit"
                                    className="w-full bg-custom-orange text-white rounded-md p-2 hover:bg-hover-orange transition duration-200 font-semibold"
                                >
                                    Crear Viewer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};
