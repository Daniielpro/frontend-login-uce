import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from "../../api/authApi";

function Login() {
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(''); // Estado para almacenar el mensaje de error
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const user = await loginUser({ correo, clave });
            if (user) {
                navigate('/home');
            } else {
                setError('Invalid email or password'); // Establecer el mensaje de error
            }
        } catch (error) {
            setError(error); // Establecer el mensaje de error recibido del servidor
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" className="input" placeholder="correo" value={correo}
                       onChange={(e) => setCorreo(e.target.value)} required/>
                <input type="password" className="input" placeholder="clave" value={clave}
                       onChange={(e) => setClave(e.target.value)} required/>
                <button type="submit" className="button" disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
            </form>
            {error && (
                <div className="error">{error}</div>
            )}
            <div className="link">
                <Link to="/register">Don't have an account? Register here</Link>
            </div>
        </div>
    );
}

export default Login;
