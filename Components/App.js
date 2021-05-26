import React, {useState} from 'react';
import Header from './Header';
import TodoList from './TodoList';
import './css/App.css';
import {ThemeProvider} from "styled-components";
import {lightTheme,darkTheme,GlobalStyles} from './theme';
import Toggle from './Toggle';


function App() {

  const [theme,setTheme]=useState("dark");

    const themeToggle=()=>{
        theme==='dark' ? setTheme("light") : setTheme("dark");
    }

  return (
    <ThemeProvider theme={theme==="dark"? darkTheme:lightTheme}>
      <GlobalStyles/>
      <div className="App">
        <Header theme={theme}/>
        <div className="todo">
          <div className="presentation">
                      <h1>TODO</h1>
                      <div className="toggle">
                        <Toggle theme={theme} themeToggle={themeToggle} />
                      </div>               
          </div> 
          <div className="todo-list">
            <TodoList/>
          </div>
        </div>     
      </div>
    </ThemeProvider> 
    
  );
}

export default App;
