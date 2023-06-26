import React, { useReducer} from 'react';
import './style.css'

const reducer = (state, action) => {
    if(action.type === "INCR") {
        state = state + 1;
    }else if(state > 0 && action.type === "DEC") {
        state = state - 1;
    }
    return state;
}

const UseReducer = () =>{
    
    const initialData = 10;
    const [state, dispatch] = useReducer(reducer, initialData)   // state-> current state, dispatch(use to trigger your reducer function) function, reducer(it have updated value) function , initial value
    return(
        <>
            <div className="center_div">
                <p>{state}</p>
                {/* onClick={()=> setNum(num +1 )} */}
                <div className="button2" onClick={()=> dispatch({type: "INCR"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>  
                    INCR
                </div>
                {/* onClick={num > 0 ?()=> setNum(num - 1) : setNum(0)} */}
                <div className="button2"  onClick={()=> dispatch({type: "DEC"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    )
}

export default UseReducer;