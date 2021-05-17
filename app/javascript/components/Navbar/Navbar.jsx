import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    const handleLogoutClick = () => {
        axios.delete("http://localhost:3000/api/v1/logout", { withCredentials: true })
        .then(response => {
            props.handleLogout()
            props.history.push("/")
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <Link to="/">
                    <p className="text-3xl font-extrabold text-gray-900">Streats</p> 
                </Link>
                <Link to="/login">Login</Link>
                <Link to="/registration">Sign Up</Link>
                <button onClick={() => handleLogoutClick()}>Logout</button>

                <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                    {props.loggedInStatus === "NOT_LOGGED_IN" && <>
                    <Link to="/login" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                    Sign in
                    </Link>
                    <Link
                    to="/registration"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                    Sign up
                    </Link>
                    </>
                    }
                    
                    {props.loggedInStatus === "LOGGED_IN" && 
                        <p className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Welcome {props.user.email}</p>
                    }
                </div>

            </div>
        </div>
    )
}