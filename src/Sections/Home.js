import React from 'react'
import HomeBio from '../Components/HomeBio'
import Skills from '../Components/Skills'
import RecentWriting from '../Components/RecentWriting'

export default function Home() {
    return (
        <div>
            <HomeBio/>
            <Skills/>
            <RecentWriting/>
        </div>
    )
}
