
import React, { useState } from "react";
import List from "./List"
import Prof from "./Prof"
import data from "./data"
import styles from "./index.css";

const App=()=>{
    const [num, setNum]=useState(0)
    const{name, price, image, text}=data[num]

    const whatif=(index)=>{
        if(index>data.length-1){
            return 0
        }
        if(index<0){
            return data.length-1
        }
        return index
    }

    const inc=()=>{
        setNum((food)=>{
            let newFood= food +1
            return whatif(newFood)
        })
    }
    const dec=()=>{
        setNum((food)=>{
            let newFood= food -1
            return whatif(newFood)
        })
    }
    return(
        <>
            <div className="first">
         <div className="menu">
            <h1>Menu</h1>
         </div>
         <div className="content">
            <img src={image}/>
            <div className="btn">
                <button onClick={dec}>Back</button>
                <button onClick={inc}>Next</button>
               
            </div>
            <h1>{name}</h1>
            <h3>{price}</h3>
            <p>{text}</p>
         </div>
         </div>
        </>
    )
}



export default App;






















