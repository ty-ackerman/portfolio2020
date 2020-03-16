import React from 'react'
import me from "../assets/me-grayscale.jpg"

export default function AboutText(props) {
    const aboutSections = [
        {
            titleType: "image",
            titleContent: me,
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, error officia suscipit laborum ducimus, quis tenetur explicabo cupiditate temporibus, magnam sunt atque nulla ad aut eaque autem ipsam reprehenderit voluptatem."
        },
        {
            titleType: "text",
            titleContent: "Colophon",
            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum nemo impedit omnis tempore ratione nobis laborum ut in vero velit."
        }
    ]

    const renderTitle = (section) => {
        const {titleType, titleContent} = section;
        if (titleType === "image") {
            return (
                <div className="image-container about-me-title" style={{width: "250px"}}>
                    <img style={{width: "100%"}} src={titleContent} alt=""/>
                </div>
            )
        } else {
            return (
                <div className="about-me-title title-container">{titleContent}</div>
            )
        }
    }
    return (
        <div>
            {aboutSections.map((section, key) => {
                return (
                    <div className="about-section" key={key}>
                        {renderTitle(section)}
                        <div className="body about-me">
                            {section.body}
                        </div>
                    </div>
                )
                
            })}
        </div>
    )
}
