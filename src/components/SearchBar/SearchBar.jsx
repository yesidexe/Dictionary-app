import React from "react";
import { DictionaryContext } from "../../Context";
import { Lupa } from "../Icons/Icons";

function SearchBar() {
    const [searchTerm, setSearchTerm] = React.useState('')
    const {handleSearch} = React.useContext(DictionaryContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        handleSearch(searchTerm)
        setSearchTerm("")
    }

    return (
        <form className="dark:bg-slate-800 bg-stone-100 flex items-center justify-between h-14 rounded-2xl px-6 mb-6"
            onSubmit={handleSubmit}
        >
            <input
                value={searchTerm}
                className="dark:text-white appearance-none bg-transparent w-full outline-none"
                type="search"
                onChange={(e)=>setSearchTerm(e.target.value)}
                placeholder="Search for any word..." />
            <span>
                <Lupa/>
            </span>
        </form>
    );
}

export default SearchBar;

