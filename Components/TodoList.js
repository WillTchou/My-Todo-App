import TodoForm from './TodoForm';
import { useState } from "react";
import TodoItem from './TodoItem';
import Footer from './Footer';
import './css/TodoList.css';


const TodoList =()=>{

    const [taches, setTache] = useState([]);

    const addTodo=(tache)=>{
        let ntache={
            id:Math.floor(Math.random()*1000),
            text:tache,
            completed:false
        }
        if(ntache.text!==''){
            const newTodos=[ntache,...taches];
            setTache(newTodos);
            console.log(newTodos);
        }
    }

    const suppTodo=(id)=>{
        setTache(
            taches.filter((tache)=>tache.id!==id)
        );
        console.log(taches);
    }

    const handleChange=(id)=>{
        setTache(
            taches.map((tache)=>
                tache.id===id ? {...tache,completed:!tache.completed} :tache)
        );
        console.log(taches);
    }

    
    return (
            <div className="TodoList">
                <TodoForm addTodo={addTodo}/> 
                {taches.length>0?
                <div className="my-todo">
                        <ul className="taches-list">
                            {taches.map((tache)=>(
                                <TodoItem 
                                    key={tache.id}
                                    tache={tache}
                                    handleChange={handleChange}
                                    suppTodo={suppTodo}
                                />
                            ))}   
                        </ul>
                        <Footer taches={taches}/>  
                </div>:
                <div className="vide">
                    <span>You have any task to do</span>
                </div>
                }
                             
            </div>
        );
    
};

export default TodoList;
