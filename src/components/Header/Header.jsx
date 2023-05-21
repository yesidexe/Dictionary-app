import React from "react";
import DarkMode from "../DarkMode/DarkMode";
import SelectFont from "../SelectFont/SelectFont";
import { Book } from "../Icons/Icons";
function Header() {

    return (
        <header className="flex justify-center mt-6 mb-6 items-center">
            <div className="flex-1">
                <a href="/">
                    <Book />
                </a>
            </div>
            <div className="flex-2 border-r-2 pr-4">
                <SelectFont />
            </div>
            <div className="flex-2 pl-4 flex items-center">
                <DarkMode />
            </div>     
        </header>

    );
}

export default Header;