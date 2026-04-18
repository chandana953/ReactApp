import { useState } from "react"

function Todoinput({addTodo}) {
    const [todo,setTodo] = useState("")
    
    const handleChange = () => {
        if(todo.trim() !== "") {
            addTodo(todo)
            setTodo("")
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleChange();
    }

    return (
        <div className="flex gap-3 mt-4 w-full">
            <input 
                type="text" 
                placeholder="What needs to be done?"
                value={todo} 
                onChange={e=>setTodo(e.target.value)} 
                onKeyDown={handleKeyDown}
                className="flex-1 bg-slate-800/50 text-slate-100 placeholder-slate-500 border border-slate-700/50 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 shadow-inner"
            />
            <button 
                onClick={handleChange}
                className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold rounded-xl px-6 py-3.5 hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
        </div>
    )
}
export default Todoinput