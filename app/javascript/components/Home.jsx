import React, { Component } from 'react'
import axios from 'axios'
import Places from './Places/Places'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <Places />
            </div>
        )
    } 
}