import React from 'react';
import "./Book.css"

export default function Book({ name, description, goal, img }) {
    return (
        <div className="book">
            <img src={img} alt={name} width={250} />
            <h4>{name}</h4>
        </div>
    )
}