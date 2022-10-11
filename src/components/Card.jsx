import React from "react"

export default function Card(props) {
    return (
        <section className="card">
            <img src={`src/assets/${props.img}`} className="cardImage" />
            <div>
                <div className="cardStats">
                    <img src="src/assets/Star1.png" className="cardStar" />
                    <span className="cardRating">{props.rating}</span>
                    <span className="cardCount">({props.reviewCount}).</span>
                    <span className="cardCountry">{props.location}</span>
                </div>
                <p className="cardContent">{props.title}</p>
                <p><span className="subscription">From ${props.price}</span> / person</p>
            </div>
        </section>
    )
}