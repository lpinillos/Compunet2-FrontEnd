import { useState } from 'react';
import planeImage from '../images/LoginBg.jpg';
import '../index.css';
import axios from 'axios';

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function auth(event) {
    event.preventDefault();
    const data = {
      email: email,
      password: password
    };
    console.log("Datos enviados:", data);
    try {
      const response = await axios.post("http://localhost:9091/auth", data, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('email',email);
      console.log(email);
      window.location.href = '/PlanView';
    } catch (err) {
      console.log(err);
      alert("Inicio de sesión fallido");
    }
  }

  return (
    <div className='flex justify-center items-center h-screen' style={{ backgroundImage: `url(${planeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <form onSubmit={auth} className='flex flex-col items-center border-x-2 border-y-2 rounded-2xl bg-white neumorphism-container transition-all duration-300 ease-in-out'>
        <div className='font-semibold flex justify-center mt-5 text-xl font-mono'>
          Inicio de Sesión
        </div>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full h-10 mb-10 pl-4 neumorphism-input mt-5 font-mono' placeholder='Nombre de usuario' />
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full h-10 mb-10 pl-4 neumorphism-input font-mono' placeholder='Contraseña' />
        <button type='submit' className='w-52 h-10 rounded-xl mt-10 border-none neumorphism-button'>Ingresar</button>
      </form>
    </div>
  );
}
