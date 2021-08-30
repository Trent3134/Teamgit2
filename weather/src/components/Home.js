import React from 'react'
import {useState} from 'react'


 const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=indianapolis&appid=79161887469fcc530c9dfbad7392edb7"


function Home(){
    const [results, setResults] = useState ([])
    const fetchResults = () => {     
        
        fetch(baseUrl)
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            setResults(data)})
 
        .catch(err=> console.log(err))
        
    }
  
return(
    <div>
        {fetchResults()}

    </div>
    
  
    
    
    
    
    )
}
export default Home