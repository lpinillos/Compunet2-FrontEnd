  import { useState } from 'react';
  import { Link ,Navigate } from 'react-router-dom';
  import planeImage from '../images/planeImage.jpg';
  import '../index.css';
  import axios from 'axios';
  export const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [email, setUsername] = useState("");
    
    const [password, setPassword] = useState("");


    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
    async function auth(event) {
      event.preventDefault();
      const data = {
        email: email,
        password: password
      };
      console.log("Datos enviados:", data); // Agregar este console.log para verificar los datos enviados
      try {
        const response = await axios.post("http://localhost:9091/auth", data,{ 
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        })
        const token = response.data
        console.log("EL TOKEN",token)
        localStorage.setItem('token', token);
        // return <Redirect to="/ruta-de-destino-despues-de-iniciar-sesion" />;
        window.location.href = '/PlanView'
        return <Navigate to={'/PlanView'}/>
        alert("Inicio de sesión exitoso");
      
      } catch (err) {
        console.log(err)
        alert("Inicio de sesión fallido");
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
            <div className='col-span-1 text-left px-20 py-20'>
              <h1 className='font-sans text-3xl font-semibold'>Inicio de Sesión</h1>
              <p className='py-5'>
                Si no tienes una cuenta registrada
                <br />
                Te puedes <Link to="/Register" className='text-custom-orange hover:text-hover-orange font-semibold'>Registrar Aqui!</Link>
              </p>
              <form action="">
                <h3 className='font-semibold py-8'>Correo</h3>
                <div className="flex items-center border-b-2 border-black">
                  <i className="fas fa-envelope text-black px-2"></i>
                  <input type="text" placeholder='Ingresa tu correo electrónico' className='w-full' 
                  id="email"
                  value={email}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  />
                </div>
                <h3 className='font-semibold py-8'>Contraseña</h3>
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
                <div className='flex justify-center py-20'>
                  <button type='submit'  className='items-center bg-custom-orange w-96 h-12 rounded-3xl text-white font-semibold hover:bg-hover-orange' onClick={auth} >Iniciar Sesión</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
