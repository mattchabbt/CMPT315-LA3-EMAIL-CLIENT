import React, { useState } from "react"; 
import "./card.styles.css";

export const Card = ({ email }) => {
    const { id, from, subject, address, time, read } = email;

    const [emailRead, setEmailRead] = useState();
    const updateEmailRead = () => {
        email.read = true;
        setEmailRead(email.read);
    };

    return (
        <div onClick={updateEmailRead} className={'card-container read-' + read} id={"card-email-" + id} >
            <h2>Email Content</h2>
            <p>{from}, {subject}, {address}</p>
            and <p>{time}</p>
        </div>
    )
}

// export default Card;