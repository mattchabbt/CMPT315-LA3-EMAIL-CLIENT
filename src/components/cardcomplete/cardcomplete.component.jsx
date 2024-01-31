import React from "react";
import "./cardcomplete.styles.css";

export const CardComplete = ({ email }) => {
    const { from, subject, address, time, message } = email;

    return (
        <div className='card-container-complete'>
            <h3>{from}, {subject}, {address}</h3>
            <h3>{time}</h3>
            <p>{message}</p>
        </div>
    )
}

// export default Card;