import React from 'react'

export default function Card({ img, title, desc }) {
    return (
        <div>
            <div className='card'>
                <span>
                    <img
                        src={img}
                        alt={img}
                    />
                </span>
                <h3>
                    {title}
                </h3>
                <p>
                    {desc}
                </p>
            </div>
        </div>
    )
}