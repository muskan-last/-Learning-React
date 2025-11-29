import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Itemtodos from "./components/itemtodo";
import "./App.css";
import { useState } from "react";
import ToDoItems from "./components/ToDoItem";

function App() {

  const initialetodoitems = [
    {
      name: 'muskan start coding',
      duedate: '4/05/2025'
    },
    {
      name: 'buy milk',
      duedate: '12/05/2025'
    }, {
      name: 'go to collage',
      duedate: '14/05/2025'
    }, {
      name: 'solve problems',
      duedate: '24/05/2025'
    }
  ];

  const [todoItem, setTodoitem] = useState(initialetodoitems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added :${itemName} date :${itemDueDate} `)
    const newTodoitems = [...todoItem, {
      name: itemName,
      duedate: itemDueDate
    }];
    setTodoitem(newTodoitems);
  }

  return <center className="to-do-container">
    <Appname></Appname>
    <Addtodo onNewItem={handleNewItem}></Addtodo>
    <Itemtodos items={initialetodoitems} />
  </center>
}
export default App;