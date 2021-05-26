import React from 'react';
import './css/TodoItem.css';
import cross from './css/icon-cross.svg';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
    return (
        <li className="tache-item">       
            <label>
                <input  name="complete-checkbox"
                        type="checkbox"
                        key={props.tache.id} 
                        checked={props.tache.completed}
                        value={props.tache.completed}
                        onChange={()=>props.handleChange(props.tache.id)}
                />
                <span>
                    {props.tache.text}
                </span>    
            </label>
            <img id="croix" src={cross} alt="croix" onClick={()=>props.suppTodo(props.tache.id)} />
        </li>
    );
};

TodoItem.propTypes = {
    tache: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    suppTodo: PropTypes.func.isRequired,
  };

export default TodoItem;