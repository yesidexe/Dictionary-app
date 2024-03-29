import React from "react";
import {fetchData} from '../services/fetchData'

const DictionaryContext = React.createContext();

function DictionaryProvider({ children }) {
    const [data, setData] = React.useState(null)
    const [status, setStatus] = React.useState('idle')
    const [font, setFont] = React.useState('font-mono')
    const [darkMode, setDarkMode] = React.useState(false)

    const API = import.meta.env.VITE_DICTIONARY_API

    const handleSearch = async (searchTerm) => {
        setStatus('loading')
        try {
            const { response, jsonData } = await fetchData(`${API}/${searchTerm}`)
            if (response.ok) {
                setData(jsonData[0])
                setStatus('success')
            } else {
                setStatus('error')
                throw new Error('Algo salió mal')                
            }
        } catch (error) {
            console.error(error)
        }
    }

    const changeFont = (value) => {
        setFont(value)
    }

    React.useEffect(() => {
        const bodyElement = document.querySelector('main')
        bodyElement.classList.remove('font-mono', 'font-sans', 'font-serif')
        bodyElement.classList.add(font);
    }, [font])

    React.useEffect(()=>{
        const bodyElement = document.querySelector('html')
        darkMode === true 
        ? bodyElement.classList.add('dark')
        : bodyElement.classList.remove('dark')
    },[darkMode])

    return (
        <DictionaryContext.Provider value={{
            data,
            status,
            font,
            darkMode,
            setDarkMode,
            handleSearch,
            changeFont,
        }}>
            {children}
        </DictionaryContext.Provider>
    )
}

export { DictionaryContext, DictionaryProvider };