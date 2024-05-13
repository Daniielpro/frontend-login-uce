import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from "../../api/authApi";

function Register() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [registroExitoso, setRegistroExitoso] = useState(false); // Estado para controlar el aviso de registro exitoso
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ nombre, apellido, correo, clave });
            setRegistroExitoso(true); // Establecer el estado de registro exitoso
            setTimeout(() => {
                navigate('/login');
            }, 3000); // Redirigir después de 3 segundos
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" className="input" placeholder="First Name" value={nombre}
                       onChange={(e) => setNombre(e.target.value)}/>
                <input type="text" className="input" placeholder="Last Name" value={apellido}
                       onChange={(e) => setApellido(e.target.value)}/>
                <input type="email" className="input" placeholder="Correo" value={correo}
                       onChange={(e) => setCorreo(e.target.value)}/>
                <input type="password" className="input" placeholder="Password" value={clave}
                       onChange={(e) => setClave(e.target.value)}/>
                <button type="submit" className="button">Register</button>
            </form>
            {registroExitoso && (
                <div className="aviso">¡Usuario registrado exitosamente! Redireccionando a la página de inicio de sesión...</div>
            )}
            <div className="link">
                <Link to="/login">Already have an account? Login here</Link>
            </div>
        </div>
    );
}

export default Register;
