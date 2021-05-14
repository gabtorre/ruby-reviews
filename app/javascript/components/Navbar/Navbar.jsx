import React from 'react'
import axios from 'axios'

const Navbar = (props) => {

    const handleLogoutClick = () => {
        axios.delete("http://localhost:3000/api/v1/logout", { withCredentials: true })
        .then(response => {
            props.handleLogout();
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="bg-white p-5 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="w-1/6">
                    <p className="text-3xl">Streats</p> 
                    <button onClick={() => handleLogoutClick()}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar