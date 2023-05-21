import React from 'react'
import { DictionaryContext } from "../../Context";
import PartOfSpeech from "../PartOfSpeech/PartOfSpeech";

function ResultsMeaning() {
    const {status, data} = React.useContext(DictionaryContext)

    return (
        <div className="flex flex-col w-full px-3 mb-6">
            <PartOfSpeech/>
            {status === "success" &&
                <div className="mt-6 flex lg:flex-row md:flex-row flex-col lg:gap-5 md:gap-5 mb-3 lg:items-center md:items-center w-full">
                    <p className="dark:text-slate-600 md:text-lg lg:text-lg text-sm text-gray-400 underline underline-offset-2">Source</p>
                    <a href={data.sourceUrls[0]}
                        target="_blank"
                        className="dark:text-slate-600 lg:text-base md:text-base text-xs text-gray-400 underline underline-offset-2">
                        {data.sourceUrls[0]}                         
                    </a>
                </div>
            }
        </div>
    );
}

export default ResultsMeaning;