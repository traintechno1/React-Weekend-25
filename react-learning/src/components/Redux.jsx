import { useDispatch, useSelector } from "react-redux";
import { setInput } from "../redux/Slices/inputSlice";
import Counter from "./Counter";

const Redux = () =>{
    let dispatch = useDispatch();
    let {count} = useSelector(state=> state.counter);
    let {text} = useSelector(state=> state.input);

    const handleInputChange = (event) =>{
        let value = event.target.value;
        dispatch(setInput(value));
    }

    return(
        <>
            <h3>Redux Example</h3>
            <h4>Count is: {count}</h4>
            <h4>Global Text: {text}</h4>
            <input
                type="text"
                onChange={handleInputChange}
            />

            <div>
                <Counter />
            </div>
        </>
    )
}

export default Redux;
