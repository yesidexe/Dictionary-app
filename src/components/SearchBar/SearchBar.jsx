import React from "react";

function SearchBar({handleSearch}) {
    const [searchTerm, setSearchTerm] = React.useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        handleSearch(searchTerm)
        setSearchTerm("")
    }

    return (
        <form className="bg-stone-100 flex items-center justify-between h-16 rounded-2xl px-6 mb-6"
            onSubmit={handleSubmit}
        >
            <input
                value={searchTerm}
                className="bg-transparent w-full outline-none"
                type="search"
                onChange={(e)=>setSearchTerm(e.target.value)}
                placeholder="Search for any word..." />
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span>
        </form>
    );
}

export default SearchBar;

