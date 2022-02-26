import React from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/signup");
    }

    return (
        <div>
            <button onClick={handleClick} type="button" />
        </div>
    );
}

export default Login;