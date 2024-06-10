import logo from './logo.svg';
import './App.css';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';



export const ThemeContext = createContext(null);

function App() {


  const [theme,setTheme] = useState("dark");

  const toggleTheme = ()=>{
    setTheme((curr)=> (curr === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
       <div id={theme}>
         <div className="switch">
         <label>{theme === "light" ? "Light mode " : "Dark Mode "}</label>
         <ReactSwitch onChange={toggleTheme} checked ={theme === "dark"}/></div>
         <LoginSignUp/>
       </div>
    </ThemeContext.Provider>

  );
}

export default App;
