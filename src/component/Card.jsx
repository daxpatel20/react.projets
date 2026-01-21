import React from 'react'

export default function Card({titale,qute,img,}) {
    return (

        <div className="card">
            <h3>{titale}</h3>
            <p>{qute}Products</p>
            <img src={img} alt={titale} />
            <button>View Products</button>
        </div>

    )
}

