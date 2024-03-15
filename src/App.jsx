
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import './App.css'
import { decrement, increment, incrementByAmount } from './app/features/CounterSlice';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((reducer) => reducer.counter.value)
  const username = useSelector((reducer) => reducer.counter.username)
  console.log(count);
  const [amount, setAmount] = useState(5)

  return (
    <div className='App'>
      <h1>{username}</h1>
      <h1>{count}</h1>
       <div className='AppLign'>
          <button onClick={()=>{dispatch(increment())}}>+1</button>
          <button onClick={()=>{dispatch(decrement())}}>-1</button>
          <input type='number' value={amount} onChange={(e)=>{setAmount(parseInt(e.target.value))}}/>
          <button onClick={()=>{dispatch(incrementByAmount(amount))}}>+{amount}</button>
          
       </div>
    </div>
  )
}

export default App
