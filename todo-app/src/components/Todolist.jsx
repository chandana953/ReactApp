import React from "react";
import Todoitem from "./Todoitem";

function Todolist({todos, deleteTodo}) {
    return(
        <div className="space-y-3 w-full">
            {todos.length === 0 ? (
                <div className="text-center text-slate-500 pt-6 pb-2 text-sm font-medium">
                    No tasks yet. Add one above!
                </div>
            ) : (
                todos.map((todo, index) => (
                    <Todoitem key={index} todo={todo} index={index} deleteTodo={deleteTodo}/>
                ))
            )}
        </div>
    )
}
export default Todolist 