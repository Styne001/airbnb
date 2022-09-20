import React from "react"
import Card from "./Card"

function Items() {
    return (
        <div className="cards">
            <Card 
                img="/src/assets/Star1.png"
                rating="5.0"
                count="6"
                country="USA"
                content="Life lessons with Katie Zaferes"
                cost="136"
                subscriptionType="person"
            />
            <Card 
                img="/src/assets/Star1.png"
                rating="5.0"
                count="6"
                country="USA"
                content="Life lessons with Katie Zaferes"
                cost="136"
                subscriptionType="person"
            />
            <Card 
                img="/src/assets/Star1.png"
                rating="5.0"
                count="6"
                country="USA"
                content="Life lessons with Katie Zaferes"
                cost="136"
                subscriptionType="person"
            />
        </div>
    )
}

export default Items