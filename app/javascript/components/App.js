import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Places from '../components/Places/Places'
import Place from '../components/Place/Place'
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
    }

    render() { 
        return (  
            <>
                <Navbar />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => (
                                <Places {...props} loggedInStatus={this.state.loggedInStatus} />
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