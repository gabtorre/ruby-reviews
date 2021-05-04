import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff; 
`
const PlaceLogo = styled.div`
    width: 50px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;

    img {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        border: 1px solid #efefef;
    }
`
const PlaceName = styled.div`
    padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a {
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }
`

const Place = (props) => {
    return (
        <Card>
            <PlaceLogo>
                <img src={props.attributes.image_url} alt={props.attributes.name} />
            </PlaceLogo>
            <PlaceName>{props.attributes.name}</PlaceName>
            <div className="place-score">{props.attributes.average_score}</div>
            <LinkWrapper>
                <Link to={`/places/${props.attributes.slug}`}>View Place</Link>
            </LinkWrapper>
        </Card>
    )
}

export default Place