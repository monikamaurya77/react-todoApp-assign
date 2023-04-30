import { useState } from "react"
import TodoItem from "./TodoItem"
function AddTodo(){
    const [state,setState]=useState("")
    const [todoitems,setTodoItems]=useState([])
    const addtodo=()=>{
        var newItem={
            title:state,
            status:false
        }
        setTodoItems([...todoitems,newItem])
    }
    const handleToggle=(index)=>{
        var newArrays= todoitems.map((item,i)=>{
            return index===i ? {...item,status:!item.status} :item
        })
        setTodoItems(newArrays)
    }
    const deleteItem=(index)=>{
        var filteredData=todoitems.filter((item,i)=>{
                return index !=i
        })
        setTodoItems(filteredData)
    }



    return (
        <div style={{marginTop:"100px",boxShadow:"0 0 10px black" }}>
            <h2>To-Do List</h2>
            <input value={state} 
                type="text" 
             onChange={(e)=>
             {
                setState(e.target.value)
                }
                }>

            </input>
            <button onClick={addtodo}>Add</button>
            <TodoItem todoitem={todoitems} deleteItem={deleteItem} handleToggle={handleToggle} />
        </div>
    )
}

export default AddTodo