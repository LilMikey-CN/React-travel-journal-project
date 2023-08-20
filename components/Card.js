import React from "react"

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--image--container">
        <img src={props.imageUrl}  />
      </div>

      <div className="card--content">
        <div className="location">
          <img src="../images/pin-icon.svg" />
          <span className="location--text">{props.location.toUpperCase()}</span>
          <a 
            className="location--link"
            href={props.googleMapsUrl} 
            target="_blank"
          >
            View on Google Maps
          </a>
        </div>

        <div className="card--title">
          {props.title}
        </div>
        
        <div className="card--duration">
          {props.startDate} - {props.endDate}
        </div>
        
        <div className="card--description">
          {props.description}
        </div>
      </div>
    </div>
  )
}
