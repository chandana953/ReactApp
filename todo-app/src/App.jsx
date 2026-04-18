import Header from "./components/Header"
import Todoinput from "./components/Todoinput"
import Todolist from "./components/Todolist"
import { useState } from "react"
import Todoitem from "./components/Todoitem"

function App() {
  const [todos,setTodos] = useState([])
  
  const handleAddTodo = (newTodo) => {
    setTodos([...todos,newTodo])
  }
  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_,i)=>i !== index))
  }
  return(
    <>
    <Header/>
    <Todoinput addTodo={handleAddTodo}/>
    <Todolist todos={todos} deleteTodo={handleDeleteTodo}/>
    
    </>
  )
}
export default App
