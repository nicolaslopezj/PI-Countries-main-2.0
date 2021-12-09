import React from 'react';
import './Card.css';

export default function Card({ img, name, continent }) {
    return (
        <div className="card">
            <img className="img" src={img} alt="Img not found" />
            <h3>{name}</h3>
            <p>{continent}</p>
        </div>
    );
    }
