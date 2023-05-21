import { DictionaryContext } from "../../Context"
import React from "react"

export default function FontList({ mostrarMenu }) {
    const {changeFont} = React.useContext(DictionaryContext)

    const fonts = {
        'Mono': 'font-mono',
        'Sans Serif': 'font-sans',
        'Serif': 'font-serif'
    }

    const fontsArray = Object.entries(fonts)

    const handleFonts = (value)=>{
        changeFont(value)
    }

    return (
        <>
            {mostrarMenu &&
                <div className='dark:bg-slate-800 top-16 bg-white rounded-md drop-shadow-md px-5 pt-3 absolute'>
                    <ul>
                        {
                            fontsArray.map(([key,value],index)=>{
                                const id = `${index}-${value}`
                                return(
                                    <li 
                                    key={id} 
                                    className='dark:text-slate-100 cursor-pointer font-semibold text-lg pb-3'
                                    onClick={()=>handleFonts(value)}>
                                        {key}                                    
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </>
    )
}