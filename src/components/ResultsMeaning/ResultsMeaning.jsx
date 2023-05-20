import PartOfSpeech from "../PartOfSpeech/PartOfSpeech";

function ResultsMeaning({ data, status }) {

    return (
        <div className="flex flex-col w-full px-3">
            <PartOfSpeech data={data} status={status} />
            {status === "success" &&
                <div className="flex gap-5 mb-3 items-center w-full">
                    <p className="text-lg text-gray-400 underline underline-offset-2">Source</p>
                    <a href={data.sourceUrls}
                        target="_blank"
                        className="text-base text-gray-400 underline underline-offset-2">
                        {data.sourceUrls}                         
                    </a>
                </div>
            }
        </div>
    );
}

export default ResultsMeaning;