import React from "react"

export default function Place(props){
    return (
        <div className="place-container">
            <img className="place-img" src = {props.imageUrl} />
            <div className="place-detail">
            <h3 className="location-text">📍 {props.location}</h3>
            <a className="googlemap-text" href={props.googleMapsUrl}>View on Google Maps</a>
            <h1 className="title-text">{props.title}</h1>
            <h4>{props.startDate} - {props.endDate}</h4>
            <p className="description-text">{props.description}</p>
            </div>

        </div>
    )
}