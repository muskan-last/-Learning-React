import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import Counter from './components/Counter';
import TextArea from './components/TextArea';

function App() {

  const [fruits, setfruits] = useState("apple");
  const handleFruit = () => {
    setfruits("banana");
  }

  return (
    <>
      <h1>States in React js</h1>
      <h2>{fruits}</h2>
      <button onClick={handleFruit}>change fruit name</button>
      <Counter></Counter>
      <hr />
      <TextArea heading="enter the text to anlyze below "></TextArea>
    </>
  )
}
export default App
