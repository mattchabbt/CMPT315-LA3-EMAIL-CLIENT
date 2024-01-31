// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/cardlist/cardlist.component';
import { CardCompleteList } from './components/cardcompletelist/cardcompletelist.component';
import React, { useState, useEffect } from "react";

function App() {
  // Grabbing partial email info via fetch
  const [emailResps, setEmails] = useState([]);  

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await fetch("https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json");
      const emailsBack = await response.json();
      setEmails(emailsBack);
    }
    
    fetchEmails();
  },[]);  // ,[] at the end is SUPER IMPORTANT

  // Grabbing full email info via fetch
  const [emailsFull, setEmailsFull] = useState([]);
  // const [filterEmail, setFilterEmail] = useState("");
  // const [filteredEmails, setFilteredEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await fetch("https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json");
      const emailsBack = await response.json();
      setEmailsFull(emailsBack);
    }
    
    fetchEmails();
    
  },[]);  // ,[] at the end is SUPER IMPORTANT

  // Filter full email info based on email opened
  // useEffect(() => {
  //   let filteredEmail = [];

  //   if (filterEmail === "") {
  //     filteredEmail = [];
  //   }
  //   else {
  //     console.log("email selected!")
  //   }
    
  //   setFilteredEmails(filteredEmail);
  // }, [filteredEmail, ]);

  return (
    <div className="App">
      <div className="App-Child" id='sidebar'>
        <h1>Email Sidebar View</h1>
        <CardList emails={emailResps}></CardList>
      </div>
      <div className="App-Child" id='bodyview'>
        <h1>Email Body View</h1>
        <CardCompleteList emails={emailsFull}></CardCompleteList>
      </div>
    </div>
  );
}

export default App;
