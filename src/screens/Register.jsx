import { useState } from 'react';
import { Link } from 'react-router-dom';
import planeImage from '../images/planeImage.jpg';
import '../index.css';
import axios from 'axios';
import { data } from 'autoprefixer';
export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [num_id, setNumId] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  

  async function save(event) {
    event.preventDefault();
    const data = {
      login: login,
      password: password,
      first_name: first_name,
      last_name: last_name,
      num_id: num_id
    }
    try {
        const response = await axios.post("http://localhost:9091/api/v1/user/save", data,{ 
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        })
      alert("User Registration Successful");
    } catch (err) {
      console.log(data)
      alert("error no se registra")
      alert(err.message); // Es mejor usar err.message para obtener detalles del error
    }
  }

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <div className="md:container md:mx-auto h-screen">
        <div className="grid grid-cols-3 gap-4 h-full">
          <div className='col-span-2 rounded-md relative'>
            <img src={planeImage} alt="IMAGEN DE AVION LOGIN" className='object-cover w-full h-full' />
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
              <div className='text-white text-center'>
                <h1 className='text-4xl font-bold mb-2'>Icesi Viajes</h1>
                <p className='text-xl'>Experimenta el vuelo como nunca antes.</p>
              </div>
            </div>
          </div>
          <div className='col-span-1 text-left px-20 py-8'>
            <h1 className='font-sans text-3xl font-semibold'>Registro</h1>
            <p className='py-5'>
              Si ya tienes una cuenta en nuestra página
              <br />
              Puedes <Link to="/" className='text-custom-orange hover:text-hover-orange font-semibold'>Iniciar sesión Aqui!</Link>
            </p>
            <form action="">
              <h3 className='font-semibold py-4'>Correo</h3>
              <div className="flex items-center border-b-2 border-black">
                <i className="fas fa-envelope text-black px-2"></i>
                <input type="text" placeholder='Ingresa tu correo electrónico' className='w-full' 
                id="login"
                value={login}
                      onChange={(event) => {
                        setLogin(event.target.value);
                      }}
                />
              </div>
              <h3 className='font-semibold py-4'>Primer nombre</h3>
              <div className="flex items-center border-b-2 border-black">
                <i className="fa-solid fa-person px-2"></i>
                <input type="text" placeholder='Ingresa tu nombre completo' className='w-full' 
                 id="first_name"
                 value={first_name}
                 onChange={(event) => {
                   setFirstName(event.target.value);
                 }}                
                />
              </div>
              <h3 className='font-semibold py-4'>Apellido</h3>
              <div className="flex items-center border-b-2 border-black">
                <i className="fa-solid fa-person px-2"></i>
                <input type="text" placeholder='Ingresa tu nombre completo' className='w-full' 
                id="last_name"
                value={last_name}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                />
              </div>
              <h3 className='font-semibold py-4'>Cedula</h3>
              <div className="flex items-center border-b-2 border-black">
                <i className="fa-solid fa-id-card px-2"></i>
                <input type="text" placeholder='Ingresa tu nombre completo' className='w-full'
                 id="num_id"
                 value={num_id}
                 onChange={(event) => {
                   setNumId(event.target.value);
                 }}
                />
              </div>
              <h3 className='font-semibold py-4'>Contraseña</h3>
              <div className="flex items-center border-b-2 border-black">
                <i className="fa-solid fa-lock text-black px-2"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder='Ingresa tu contraseña'
                  className='w-full'
                  id="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <button onClick={togglePasswordVisibility} type="button" className="px-2">
                  <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
              <h3 className='font-semibold py-4'>Confirmar contraseña</h3>
              <div className="flex items-center border-b-2 border-black">
                <i className="fa-solid fa-lock text-black px-2"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder='Confirma tu contraseña'
                  className='w-full'
                />
                <button onClick={togglePasswordVisibility} type="button" className="px-2">
                  <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
              <div className='flex justify-center py-20'>
                <button type='submit' onClick={save} className='items-center bg-custom-orange w-96 h-12 rounded-3xl text-white font-semibold hover:bg-hover-orange'>Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
