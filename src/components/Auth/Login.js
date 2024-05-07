import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from "../../api/authApi";

function Login() {
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Reset loading state when component unmounts
        return () => setLoading(false);
    }, []);

    const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const user = await loginUser({ correo, clave }); // Llama a la función para validar las credenciales
        if (user) {
            // Si las credenciales son válidas, redirige al usuario al home
            navigate('/home');
        } else {
            // Si las credenciales no son válidas, muestra un mensaje de error
            console.error('Credenciales inválidas');
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
    } finally {
        setLoading(false);
    }
};



    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="correo" className="input" placeholder="correo" value={correo}
                       onChange={(e) => setCorreo(e.target.value)} required/>
                <input type="clave" className="input" placeholder="clave" value={clave}
                       onChange={(e) => setClave(e.target.value)} required/>
                <button type="submit" className="button" disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
            </form>
            <div className="link">
                <Link to="/register">Don't have an account? Register here</Link>
            </div>
        </div>
    );
}

export default Login;
