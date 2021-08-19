import React from 'react'
import About from '../Components/Home/About'
import HeroSlider from '../Components/Home/HeroSlider'
import Navigation from '../Components/Home/Navigation'

export default function Home() {
    return (
        <div>
            <Navigation />
            <HeroSlider />
            <About />
        </div>
    )
}
