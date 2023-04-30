import AddTodo from "./AddTodo"
function TodoItem({todoitem,deleteItem,handleToggle}){
    return (
        <div>
           {
            todoitem.map((item,index)=>{
                return (
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
                     
                    <h4>{item.title}</h4>&nbsp;&nbsp;&nbsp;
                    <h5 style={{color:"red"}}>
                        {item.status ? "Completed" : "Pending"}</h5>&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>{
                        handleToggle(index)
                    }}>Toggle</button>&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>{deleteItem(index)}}>Delete</button>&nbsp;&nbsp;&nbsp;
                    </div>
                
                )
         
            })
           }
        </div>
    )
}

export default TodoItem