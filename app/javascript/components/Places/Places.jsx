import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Place from './Place'
import styled from 'styled-components'

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;

    h1 {
        font-size: 42px;
    }
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

const Places = () => {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        axios.get('/api/v1/places.json')
        .then( resp => { setPlaces(resp.data.data) })
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
        <Home>
            <Header>
                <h1>Streats</h1>
                <Subheader>The best street food.</Subheader>
            </Header>
            <Grid>
                {grid}
            </Grid>
        </Home>
    )
}

export default Places