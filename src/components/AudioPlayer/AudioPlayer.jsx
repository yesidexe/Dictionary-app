import React from "react";
import {Play,Pause} from '../Icons/Icons'
import { DictionaryContext } from "../../Context";

function AudioPlayer({audioUrl}) {
    const { status, data } = React.useContext(DictionaryContext)
    const audioRef = React.useRef()
    const [audioIsPlaying, setAudioIsPlaying] = React.useState(false)
    
    const audioHandler = () => {
        setAudioIsPlaying(!audioIsPlaying)
        audioRef.current.play()
    }

    return (
        <>
            <button
                className="dark:bg-rose-500 w-14 h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 grid place-content-center bg-rose-400 rounded-full"
                onClick={audioHandler}
            >
                {
                    audioIsPlaying ? <Pause/> : <Play/>
                }
                
            </button>
            <audio
                ref={audioRef}
                src={audioUrl}
                onEnded={() => setAudioIsPlaying(false)}
            />
        </>
    );
}

export default AudioPlayer;