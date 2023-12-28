import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../actions/auth";
import { useNavigate } from "react-router-dom"; // if you're using react-router

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // if you're using react-router for navigation
    
    const handleSubmit = () => {
        dispatch(logoutUser())
        .then(() => navigate("/"))
        .catch((errors) => console.log(errors));
    }
    
    return (
        <button
            type='submit'
            className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
            onClick={handleSubmit}
        >
            Log Out
        </button>
    );
}

    export default Logout;