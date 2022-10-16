import React from "react"
import Card from "./Card"
import data from "../data"

function Items() {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
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