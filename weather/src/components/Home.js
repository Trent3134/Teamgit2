import React, { useState,useEffect } from 'react'
import { Button,Label } from 'reactstrap'
 

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=indianapolis&appid=79161887469fcc530c9dfbad7392edb7"


function Home(){
    const [results, setResults] = useState ([])
    const[unit,setUnit]=useState("Fahrenheit");
    const[temp,setTemp]=useState("")
  
    useEffect(()=>{
        fetchResults();
    },[])

    const fetchResults = () => {     
        
        fetch(baseUrl)
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            setResults(data)})
 
        .catch(err=> console.log(err))
        
    }
 const   covertTemprature=()=>{
     //default value unit is kelvin
    let tempInK=results&&results.main&&results.main.temp
    if(unit=="Fahrenheit"){
            
        setTemp(tempInK-273.15)
        setUnit("Celsius")

    }
    else {
        setTemp((tempInK-273.15)*9/5+32);
        setUnit("Fahrenheit")
    }
 }
  
return(
    <div>
    <Button color="primary" onClick={covertTemprature}  >{unit}</Button> 
   
    <br/>
    <Label>Temprature:{Math.round(temp)} in {unit}</Label>
    </div>
    
    )
}
export default Home