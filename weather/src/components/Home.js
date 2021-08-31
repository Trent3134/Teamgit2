import React, { useState,useEffect } from 'react'
import { Button,Label } from 'reactstrap'
//import 'bootstrap/dist/css/bootstrap.css';
 


const MainFunc = () => {
    function success(pos) {
        var crd = pos.coords;
        //console.log(crd.latitude, crd.longitude)
        const nasaApi = `https://api.nasa.gov/planetary/earth/assets?lon=${crd.longitude}&lat=${crd.latitude}&date=2014-02-01&api_key=79HsecS8LBbHbGgRLuQRPxAUlY6cp5cQPItLZ4Np`
        
        
        const nasaFetch = async () => {
            const response = await fetch(nasaApi)
            const json = await response.json()
    
            const img = document.createElement('img')
            const body = document.querySelector('body')
            img.src = json.url;
            body.append(img)
        }
        
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=79161887469fcc530c9dfbad7392edb7&units=imperial`
        
        const weatherFetch = async () => {
            const response =  await fetch(baseUrl)
            const json = await response.json()
            console.log(json)
            const p = document.createElement('p')
            const body = document.querySelector('body')
            p.innerHTML = json.main.temp
            body.append(p)
        }
        
        
        
        
        
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
            }
            nasaFetch()
            weatherFetch()
        }
        const location = navigator.geolocation.getCurrentPosition(success)
        return(
            <></>
            )
        }
        export default MainFunc
        
        //     return(
            //         <div>
            // <Button color="primary" onClick={covertTemprature}  >{unit}</Button> 
            
            // <br/>
            // <Label>Temprature:{Math.round(temp)} in {unit}</Label>
    // </div>
    
    // )
        
