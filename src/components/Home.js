import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css';

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Aquí puedes agregar la lógica para cerrar sesión en el backend
        navigate('/login');
    };

    return (
        <div className="container">
            <h2>Welcome to Home</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;
