import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { increment, selectCount} from "./lib/redux/slices/counter";
import { selectNamesList, push } from "./lib/redux/slices/namesList";

export default function App() {
  const counter = useSelector(selectCount);
  const namesList = useSelector(selectNamesList);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>

      <form action="" onSubmit={event => {
        event.preventDefault()
        dispatch(push(name))
      }}>
        <ul>
          {
            namesList.map((name:any) => <li key={name}>{name}</li>)
          }
        <input type="text" value={name} onChange={el => setName(el.target.value)} />  
        <button>enviar</button>
        </ul>
      </form>
    </>
  )
};
