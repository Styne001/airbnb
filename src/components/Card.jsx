import React from "react"

export default function Card(props) {
    return (
        <section className="card">
            <img src="/src/assets/katie.png" className="cardImage" />
            <div>
                <div className="cardStats">
                    <img src={props.img} className="cardStar" />
                    <span className="cardRating">{props.rating}</span>
                    <span className="cardCount">({props.count}).</span>
                    <span className="cardCountry">{props.country}</span>
                </div>
                <p className="cardContent">{props.content}</p>
                <p className="cardPrice">
                    <span className="subscription">From ${props.cost}</span>
                    <span className="subscriptionType">/ {props.subscriptionType}</span>
                </p>
            </div>
        </section>
    )
}