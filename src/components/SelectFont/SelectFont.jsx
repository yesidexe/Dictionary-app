import React from 'react'
import FontChange from '../FontChange/FontChange';
import { DictionaryContext } from "../../Context";

export default function SelectFont() {    
    const {font} = React.useContext(DictionaryContext)

    return (
        <div className='flex gap-2 items-center '>
            <span className='font-semibold text-lg dark:text-slate-100'>{font}</span>                        
            <FontChange/>
        </div>
    );
}

