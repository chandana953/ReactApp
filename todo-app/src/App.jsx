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
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 antialiased selection:bg-purple-500/30">
      <div className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl overflow-hidden p-8 space-y-8 relative">
        {/* Glow effect */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
        <Header/>
        <Todoinput addTodo={handleAddTodo}/>
        <div className="pt-4 border-t border-slate-800/50 mt-4">
          <Todolist todos={todos} deleteTodo={handleDeleteTodo}/>
        </div>
      </div>
    </div>
  )
}
export default App
