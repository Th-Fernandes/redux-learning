import { useDispatch, useSelector } from "react-redux"
import { increment, selectCount} from "./state/reduce"

export default function App() {
  const counter = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
    </>
  )
};
