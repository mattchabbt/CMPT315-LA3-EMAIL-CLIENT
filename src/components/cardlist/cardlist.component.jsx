import React from "react";
import { Card } from "../card/card.component"
import "./cardlist.styles.css";

export const CardList = ({ emails }) => (
    <div className="cardlist">
        {emails.map(email => (
            <Card key={email.id} email={email} />
        ))}
    </div>
);