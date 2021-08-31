import React from 'react'
import {useState, useEffect} from 'react'


 const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=indianapolis&appid=d00146c7b74247f463e37aaefff5a9ac"


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
        
        useEffect(()=> {
            fetchResults()
   
        }, []) 
return(
    <div>
        
    </div>
    
  
    
    
    
    
    )
}
export default Home