import React from "react";
import { DictionaryContext } from "../../Context";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { Error } from "../Icons/Icons";
function ResultWord() {
    const { status, data } = React.useContext(DictionaryContext)
    const audioUrl = status === 'success' && data?.phonetics[0]?.audio


    return (
        <>
            {
                status === 'success' &&
                <div className="flex justify-between px-6 items-center mb-6">
                    <div>
                        <h2 className="dark:text-slate-100 lg:text-5xl md:text-5xl text-4xl  font-semibold">{data.word}</h2>
                        {
                            data.phonetic &&
                            <p className="mt-6 dark:text-rose-500 text-rose-900 lg:text-xl md:text-xl text-lg">{data.phonetic}</p>
                        }                            
                    </div>
                    {audioUrl && <AudioPlayer audioUrl={audioUrl} />}
                </div>
            }
            {
                status === 'error' &&
                <div className='flex flex-col items-center gap-5'>
                    <h2 
                    className="dark:text-slate-100 flex gap-5 lg:text-xl md:text-xl">
                        No Definitions Found <Error/>
                    </h2>
                    <p className="text-center dark:text-slate-100 lg:text-base md:text-base text-xs">You can try the search again at later time or head to the web instead.</p>
                </div>
            }
        </>
    );
}

export default ResultWord;