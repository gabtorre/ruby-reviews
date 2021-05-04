import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Place from './Place'

const Places = () => {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        axios.get('/api/v1/places.json')
        .then( resp => {
            setPlaces(resp.data.data)
        })
        .catch( resp => console.log(resp) )
    }, [places.length])

    const grid = places.map(item => {
        return (
            <Place
                key={item.attributes.name}
                attributes={item.attributes}
            />
        )
    })

    return (
        <div className="home">
            <div className="header">
                <h1>Streats</h1>
                <div className="subheader">The best street food.</div>
            </div>
            <div className="grid">
                {grid}
            </div>
        </div>
    )
}

export default Places