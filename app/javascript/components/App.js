import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Places from '../components/Places/Places'
import Place from '../components/Place/Place'

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Places} />
            <Route exact path="/places/:slug" component={Place} />
        </Switch>
    )
}

export default App