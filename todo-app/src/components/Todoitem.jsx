import React from "react";

function Todoitem({todo, index, deleteTodo}) {
    return(
        <div className="group flex items-center justify-between bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 rounded-xl p-4 transition-all duration-300 w-full animate-in fade-in slide-in-from-bottom-4">
            <p className="text-slate-200 font-medium break-all mr-3 flex-1 text-left">{todo}</p>        
            <button 
                onClick={() => deleteTodo(index)}
                className="text-slate-500 hover:text-rose-400 hover:bg-rose-400/10 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 shrink-0 outline-none focus-visible:opacity-100"
                aria-label="Delete todo"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
            </button>
        </div>
    )
}
export default Todoitem