import React, { useState, useEffect } from "react";
import "./style.css"

const UseEffect = () => {
    const [num, setNum ] = useState(0);

    useEffect(()=>{
        document.title = `Chats(${num})`
    }) // }[]) if we use array here then it will run only when page will load for first time
    return(
        <>
            <div className="center_div">
                <p>{num}</p>
                <div className="button2" onClick={()=> setNum(num +1 )}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>  
                    INCR
                </div>
               
            </div>
        </>
    )
}

export default UseEffect;