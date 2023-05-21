import React from 'react'
import { DictionaryContext } from "../../Context";
import PartOfSpeech from "../PartOfSpeech/PartOfSpeech";

function ResultsMeaning() {
    const {status, data} = React.useContext(DictionaryContext)

    return (
        <div className="flex flex-col w-full px-3">
            <PartOfSpeech/>
            {status === "success" &&
                <div className="flex lg:gap-5 md:gap-5 gap-4 mb-3 items-center w-full">
                    <p className="md:text-lg lg:text-lg text-gray-400 underline underline-offset-2">Source</p>
                    <a href={data.sourceUrls}
                        target="_blank"
                        className="lg:text-base md:text-base text-xs text-gray-400 underline underline-offset-2">
                        {data.sourceUrls}                         
                    </a>
                </div>
            }
        </div>
    );
}

export default ResultsMeaning;