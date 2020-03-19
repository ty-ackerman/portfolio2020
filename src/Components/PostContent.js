import React from 'react'
import styled from "styled-components"


export function PostContent(props) {
    console.log(props)
    return (
        <div className={`post-${props.type}`}>
            {props.content}
        </div>
    )
}

export function PostSubtitle(props) {
    const Subtitle = styled.h2`
        // color: red;
    `

    return (
        <div>
            <Subtitle>{props.content}</Subtitle>
        </div>
    )
} 

export function PostListOrdered(props) {
    return (
        <div>
            <ol>
                {props.content.map((item, key) => {
                    return <li key={key}>{item}</li>
                })}
            </ol>
        </div>
    )
}

export function PostListUnordered(props) {
    return (
        <div>
            <ul>
                {props.content.map((item, key) => {
                    return <li key={key}>{item}</li>
                })}
            </ul>
        </div>
    )
}




export function PostPhoto(props) {
    const imageWidth = () => {
        switch (props.size) {
            case "sm":
                return '25%'
            case "md":
                return '50%'
            case "lg":
                return '100%'
        }
    }
    
    const PhotoContainer = styled.div`
        width: ${imageWidth()};
    `

    return (
        <PhotoContainer className={`post-picture post-picture-${props.size}`}>
            <img style={{maxWidth: "100%"}} src={props.content} alt={props.altText}/>
        </PhotoContainer>
    )
}


