import { useState } from "react";
import '../css/ValueChange.css';

// this is the inline css that we write with style attribute on tag level
const css = {
    increment: { 
        padding: '10px',
        backgroundColor: 'green',
        border: 'none',
        color: 'white',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    decrement: {
        padding: '10px',
        backgroundColor: 'red',
        border: 'none',
        color: 'white',
        borderRadius: '5px',
        cursor: 'pointer'
    }
}

function ValueChange(){
    let [numberValue, setNumberValue] = useState(0);

    return(
        <>  
            <div className="super-container flex-center">
                <div className="container">
                    <h3 className="h3">Increment/Decrement</h3>
                    <div className="flex-center">
                        <button 
                            style={css.increment} 
                            onClick={()=>{setNumberValue(value=> value + 1)}}>
                            Increment
                        </button>
                            <span className="show-value">{numberValue}</span>
                        <button 
                            style={css.decrement} 
                            onClick={()=>{setNumberValue(value=> value - 1)}}>
                            Decrement
                        </button>
                    </div>
                    <div className="reset-container flex-center">
                        <button className="reset" onClick={()=>{setNumberValue(0)}}>Reset Value</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ValueChange;