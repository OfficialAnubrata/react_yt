import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="card">
                <img src={props.image} alt="" />
                <h1>{props.user},{props.age}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                <button>Read More</button>
            </div>
        </div>
    )
}

export default Card