import { useState } from "react";

const Counter = () => {

  const [data, setCounterValue] = useState(0);
  const [rdata, setReverseCounter] = useState(20);
  return (
    <div>
      <hr />
      <h1>Counter 1: {data}</h1>
      <button onClick={() => { setCounterValue(data + 1) }}>Update Counter</button>


      <h1>Counter 2 : {rdata}</h1>
      <button onClick={() => { setReverseCounter(rdata - 1) }}>Reverse Counter</button>
    </div>
  );
}

export default Counter;
