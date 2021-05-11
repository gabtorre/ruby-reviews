import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Places from '../components/Places/Places'
import Place from '../components/Place/Place'
import Navbar from './Navbar/Navbar'

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Places} />
                <Route exact path="/places/:slug" component={Place} />
            </Switch>
        </>
    )
}

export default App