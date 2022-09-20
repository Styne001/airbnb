import React from "react"

export default function Hero() {
    return (
        <section className="hero">
            <div className="heroSection">
                <img src="/src/assets/photo-grid.png" className="heroImage" />
                <div>
                    <h2 className="heroHeader">Online Experiences</h2>
                    <p className="heroText">
                        Join unique interactive activities led by one-of-a-kind 
                        hosts—all without leaving home.
                    </p>
                </div>
            </div>
        </section>
    )
}