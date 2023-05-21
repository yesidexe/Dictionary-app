import React from 'react'
import { DictionaryContext } from "../../Context";
import Definitions from "../Definitions/Definitions";

function PartOfSpeech() {
    const {status, data} = React.useContext(DictionaryContext)
    const partOfSpeeches = status === 'success' && data.meanings
    
    return (
        <>
            {partOfSpeeches &&
                partOfSpeeches.map((speech, index) => {
                    const synonyms = speech.synonyms;
                    const antonyms = speech.antonyms;
                    const id = `${index}-${speech.partOfSpeech}`

                    return (
                        <div key={id}>
                            <div className="flex items-center justify-between mb-6">
                                <span className="dark:text-slate-100 text-xl font-semibold">{speech.partOfSpeech}</span>
                                <span className="border-t ml-20 w-3/4"></span>
                            </div>
                            <span className="text-lg text-gray-400 mb-3">Meaning</span>

                            <Definitions definitions={speech.definitions} />

                            {
                                synonyms.length>0 &&
                                <div className="flex gap-6 mb-6 ">
                                    <span className="lg:text-lg md:text-lg text-gray-400">Synonyms</span>                                    
                                    {synonyms.slice(0, 2).map((synonym,index)=>{
                                        const synonymId = `${index}-synonym`

                                        return(
                                            <span key={synonymId} className="dark:text-rose-600 lg:text-lg md:text-lg text-rose-800">
                                                {synonym}
                                            </span>
                                        )
                                        })
                                    }
                                </div>
                            }

{
                                antonyms.length>0 &&
                                <div className="flex gap-6 mb-6">
                                    <span className="lg:text-lg md:text-lg text-gray-400">Antonyms</span>                                    
                                    {antonyms.slice(0, 2).map((antonym, index)=>{
                                        const antonymId = `${index}-antonym`

                                        return(
                                            <span key={antonymId} className="dark:text-rose-600 text-lg text-rose-800">
                                                {antonym}
                                            </span>
                                        )
                                        })
                                    }
                                </div>
                            }


                        </div>
                    )
                })
            }
        </>
    );
}

export default PartOfSpeech;