import React, { useState, useEffect } from "react";


const baseUrl = "https://app.ticketmaster.com/discovery/v2/events.json?NxdV597j6fqpjGaqV4y1z9BU0a1A4txd"

function Tickets () {
    const fetchResults = () => {
        const [results, setResults] = useState([])

        fetch(baseUrl)
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            setResults(data)})
 
        .catch(err=> console.log(err))
        
    }

    useEffect(()=> {
        fetchResults()
    },[])
  
return(
    <div>
 

    </div>
    
);
    export default Tickets;




    
    























}


