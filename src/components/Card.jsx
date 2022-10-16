import React from "react"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <section className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`src/assets/${props.item.coverImg}`} className="cardImage" />
            <div>
                <div className="cardStats">
                    <img src="src/assets/Star1.png" className="cardStar" />
                    <span className="cardRating">{props.item.stats.rating}</span>
                    <span className="cardCount">({props.item.stats.reviewCount}).</span>
                    <span className="cardCountry">{props.item.location}</span>
                </div>
                <p className="cardContent">{props.item.title}</p>
                <p><span className="subscription">From ${props.item.price}</span> / person</p>
            </div>
        </section>
    )
}