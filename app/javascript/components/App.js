import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Home from './Home'
import Place from './Place/Place'
import Profile from './Profile/Profile'
import Navbar from './Navbar/Navbar'
import Registration from './Auth/Registration'

export default class App extends Component {
    constructor(){
        super();

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        }

        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    checkLoginStatus(){
        axios.get("http://localhost:3000/api/v1/logged_in", { withCredentials: true })
        .then(response => {
            if(response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
                this.setState({
                    loggedInStatus: "LOGGED_IN",
                    user: response.data.user
                })
            } else if(!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN"){
                this.setState({
                    loggedInStatus: "NOT_LOGGED_IN",
                    user: {}
                })
            }
        })
        .catch(error => console.log(error))
    }

    componentDidMount(){
        this.checkLoginStatus();
    }

    handleLogin(data){
        this.setState({
            loggedInStatus: "LOGGED_IN",
            user: data.user
        })
    }

    handleLogout(){
        this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        })
    }

    render() { 
        return (  
            <>
                <Navbar handleLogout={this.handleLogout} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => (
                                <Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
                            )
                        }
                    />
                    <Route exact path="/places/:slug" component={Place} />
                    <Route
                        exact
                        path="/profile"
                        render={props => (
                                <Profile {...props} loggedInStatus={this.state.loggedInStatus} />
                            )
                        }
                    />
                    <Route exact path="/registration" component={Registration} />
                </Switch>
            </>
        );
    }
}

// const App = () => {
//     return (
//         <>
//             <Navbar />
//             <Switch>
//                 <Route exact path="/" component={Places} />
//                 <Route exact path="/places/:slug" component={Place} />
//                 <Route exact path="/profile" component={Profile} />
//                 <Route exact path="/registration" component={Registration} />
//             </Switch>
//         </>
//     )
// }

// export default App