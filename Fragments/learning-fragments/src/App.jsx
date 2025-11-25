import FoodItems from "./components/FoodItems"
import ErrorMsg from "./components/errorMsg"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Container from "./components/Container"
import FoodInput from "./components/FoodInput"
import { useState } from "react"


function App() {

  let [foodItems, setFooditems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFooditem = event.target.value;
      event.target.value = '';
      let newitems = [...foodItems, newFooditem];
      setFooditems(newitems)

    }
  }
  return (
    <Container>
      <h1 className="food-heading">HEALTHY ITEMS</h1>
      <FoodInput handleonKeyDown={onKeyDown}></FoodInput>
      <ErrorMsg items={foodItems} />
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App
