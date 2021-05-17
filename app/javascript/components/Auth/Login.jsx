import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            loginErrors: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        axios.post("http://localhost:3000/api/v1/sessions", {
            user: {
                email: this.state.email,
                password: this.state.password
            }
        }, 
        { withCredentials: true }
        ).then(response => {
            console.log(response)
            if(response.data.logged_in){
                this.handleSuccessfulAuth(response.data)
            }
        }).catch(error => console.log(error))

        e.preventDefault();
    }

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data)
        this.props.history.push("/profile")
    }

    render() { 
        return (
            <div className="flex items-center justify-center bg-gray-50 py-12 mt-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8"> 
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                            Sign In
                            </button>
                        </div>
                    </form>
                    <div className="text-sm text-center">
                        Don't have an account yet? 
                        <Link to="/registration" className="font-medium text-indigo-600 hover:text-indigo-500"> Sign Up</Link>
                    </div>
                </div>
            </div> 
        );
    }
}