import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const Place = (props) => {
    return (
        <div className="card">
            <div className="place-logo">
                <img src={props.attributes.image_url} alt={props.attributes.name} />
            </div>
            <div className="place-name">{props.attributes.name}</div>
            <div className="place-score">{props.attributes.average_score}</div>
            <div className="place-link">
                <Link to={`/places${props.attributes.slug}`}>View Place</Link>
            </div>
        </div>
    )
}

export default Place