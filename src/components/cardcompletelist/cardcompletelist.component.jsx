import React from "react";
import { CardComplete } from "../cardcomplete/cardcomplete.component"
import "./cardcompletelist.styles.css";

export const CardCompleteList = ({ emails }) => (
    <div className="cardcompletelist">
        {emails.map(email => (
            <CardComplete key={email.id} email={email} />
        ))}
    </div>
);