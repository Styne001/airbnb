import React from "react"
import Card from "./Card"
import data from "../data"

function Items() {
    const cards = data.map(items => {
        return (
            <Card 
                key={items.id}
                img={items.coverImg}
                rating={items.stats.rating}
                reviewCount={items.stats.reviewCount}
                location={items.location}
                title={items.title}
                price={items.price}
            />
        )
    })
    return (
        <div className="cards-list">
            {cards}
        </div>
    )
}

export default Items