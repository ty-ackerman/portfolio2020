import React from 'react'
import styled from "styled-components"


export function PostContent(props) {
    console.log(props)
    return (
        <div>
            <div className={`post-${props.type}`}>
                {props.content}
            </div>
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
        <div>
            <PhotoContainer className={`post-picture post-picture-${props.size}`}>
                <img style={{maxWidth: "100%"}} src={props.content} alt={props.altText}/>
            </PhotoContainer>
        </div>
    )
}


