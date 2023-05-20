import Definitions from "../Definitions/Definitions";

function PartOfSpeech({ data, status }) {
    const partOfSpeeches = status === 'success' && data.meanings

    console.log(Object.entries(partOfSpeeches))

    return (
        <>
            {partOfSpeeches &&
                partOfSpeeches.map((speech) => {
                    const synonyms = speech.synonyms;
                    const antonyms = speech.antonyms;

                    return (
                        <>
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xl font-semibold">{speech.partOfSpeech}</span>
                                <span className="border-t ml-20 w-3/4"></span>
                            </div>
                            <span className="text-lg text-gray-400 mb-3">Meaning</span>

                            <Definitions definitions={speech.definitions} />

                            {
                                synonyms.length>0 &&
                                <div className="flex gap-6 mb-6">
                                    <span className="text-lg text-gray-400">Synonyms</span>                                    
                                    {synonyms.map((synonym)=>{
                                        return(
                                            <span className="text-lg text-rose-800">
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
                                    <span className="text-lg text-gray-400">Antonyms</span>                                    
                                    {antonyms.map((antonym)=>{
                                        return(
                                            <span className="text-lg text-rose-800">
                                                {antonym}
                                            </span>
                                        )
                                        })
                                    }
                                </div>
                            }


                        </>
                    )
                })
            }
        </>
    );
}

export default PartOfSpeech;