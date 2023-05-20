function ResultWord({ data, status }) {

    return (
        <>
            {status === "success" &&
                <div className="flex justify-between px-6 items-center mb-6">
                    <div>
                        <h2 className="text-5xl font-semibold mb-6">{data.word}</h2>
                        <p className="text-rose-900 text-xl">{data.phonetic}</p>
                    </div>
                    <button className="w-16 h-16 grid place-content-center bg-rose-400 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                    </button>
                </div>
            }
        </>
    );
}

export default ResultWord;