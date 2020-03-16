import React from 'react'

export default function RecentWriting() {
    // Temp articles until I actually write them
    const articles = [
        {
            title: "Two Years Since Bootcamp",
            preview: "Reflecting on anniversary of starting HackerYou",
            date: "March 2020"
        },
        {
            title: "Portfolio Face-Lift",
            preview: "The long awaited revamping of my website",
            date: "February 2020"
        }
    ]

    const renderWriting = (articles) => {
        if (!articles) return;
        const recentArticles = articles.length >= 5 ? articles.slice(0,5) : articles;
        return recentArticles.map((article, key) => {
            return (
                <div key={key}>
                    <div className="article-left">
                        <div className="article-title">{article.title}</div>
                        <div className="article-preview">{article.preview}</div>
                    </div>
                        <div className="article-date">{article.date}</div>
                </div>
            )
        })
    }

    return (
        <div>
            <h2>Recent Writing</h2>
            {renderWriting(articles)}
        </div>
    )
}
