import React , { useState } from 'react';
import './css/TodoForm.css';
import PropTypes from 'prop-types';

const TodoForm = (props) => {

    const [value,setValue]=useState('');

    function handleChange(event){
        setValue(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        if (!value) {
            alert("Please add a task description.");
            return;
          }
        props.addTodo(value);
        setValue('');
    }

    function handleKeyPress(event){
        if(event.keyCode===13 && value!==''){
            handleSubmit();
        }
    }
    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                    <input  type="text" 
                            id="tache" 
                            name="tache" 
                            placeholder="Add to do"
                            className="todo-input"
                            value={value} 
                            onChange={handleChange} 
                            onKeyPress={handleKeyPress}
                            maxlength="150" 
                            size="70"
                    />
            </form>
        </div>
    );
};

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

export default TodoForm;