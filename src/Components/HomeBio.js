import React from 'react'
import styled from "styled-components"

export default function HomeBio() {
    const HomeBio = styled.div`
        padding-top: 60px;
        margin: 0 auto;
        padding-bottom: 200px;
        border-bottom: 1px solid #dfdfdf;
        .home-header {
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
            .bio-main {
                font-size: 40px;
                font-weight: 700;
                margin-bottom: 30px; 
                span {
                    color: #B01D0C;
                }
            }
            .bio-secondary {
                line-height: 1.5;
                font-size: 18px;
            }

        }
    `

    return (
        <HomeBio>
            <div className="home-header">
                <div className="bio-main">Hi! My name is <span>Ty Ackerman</span>.<br/>I'm a web developer from Toronto.</div>
                <div className="bio-secondary">I enjoy designing and building things that look nice and work well, whether it’s websites, services or brands. I’m currently doing a bit of freelance work while figuring out what comes next. Do you need a hand with design and/or development? Get in touch.</div>
            </div>
        </HomeBio>
    )
}
