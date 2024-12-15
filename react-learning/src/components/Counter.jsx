import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/slices/counterSlice";

const Counter = () =>{
    let {count} = useSelector(state=> state.counter);
    let dispatch = useDispatch();

    const incrementvalue = () =>{
        dispatch(increment(3));
    }

    const decrementValue = () =>{
        dispatch(decrement(5));
    }
    return(
        <>
            <h3>Counter</h3>
            <div className="d-flex align-items-center gap-3">
                <button onClick={incrementvalue}>+</button>
                    {count}
                <button onClick={decrementValue}>-</button>
            </div>
        </>
    )
}

export default Counter;