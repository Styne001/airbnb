import React from "react"
import Card from "./Card"

function Items() {
    return (
        <div className="cards">
            <Card 
                img="katie.png"
                rating="5.0"
                reviewCount={6}
                country="USA"
                content="Life lessons with Katie Zaferes"
                cost={136}
            />
            
        </div>
    )
}

export default Items