import React from 'react'
import About from '../Components/Home/About'
import Different from '../Components/Home/Different'
import HeroSlider from '../Components/Home/HeroSlider'
import Navigation from '../Components/Home/Navigation'
import Quiz from '../Components/Home/Quiz'

export default function Home() {
    return (
        <div>
            <Navigation />
            <HeroSlider />
            <About />
            <Different />
            <Quiz />
        </div>
    )
}
