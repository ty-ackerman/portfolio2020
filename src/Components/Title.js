import React from 'react'

export default function Title(props) {
    return (
        <div className="title-container">
            <div className="title">{props.title}</div>
            {props.subtitle && <div className="subtitle">{props.subtitle}</div>}
        </div>
    )
}
