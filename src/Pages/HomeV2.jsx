import React from 'react'
import GetApp from '../Components/Home/GetApp'
import HeroAndNav from '../Components/HomeV2/HeroAndNav'
import Survey from '../Components/HomeV2/Survey'

export default function HomeV2() {
  return (
    <div>
        <HeroAndNav />
        <Survey />
        <GetApp />
    </div>
  )
}
