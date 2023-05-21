import React from "react";
import { Moon, Sun } from "../Icons/Icons";
import { DictionaryContext } from "../../Context";

function DarkMode() {
    const { darkMode, setDarkMode } = React.useContext(DictionaryContext)

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <label htmlFor="toggle" 
        className="relative bg-gradient-to-r from-rose-500 to-rose-950 w-12 h-6 
        rounded-full flex items-center justify-evenly">
            <input 
                checked={darkMode} 
                type="checkbox" 
                id="toggle" 
                className="sr-only peer"
                onChange={handleDarkMode}
                />
            <span className="flex justify-around">
            <Sun/> <Moon />
            </span>
            <span className=" peer-checked:bg-rose-500 peer-checked:left-[25.5px] transition-all duration-500 left-1 absolute w-2/5 h-4/5 rounded-full bg-rose-950"/>
        </label>
    );
}
export default DarkMode;
