function Definitions({definitions}) {
    return (
        <>
            <ul className="marker:text-rose-800 pl-5 list-disc mb-6 box-border ">
                {definitions.map((definition)=>{

                    return <li className="pl-5 text-lg py-3">
                        {definition.definition}
                        {definition.example &&
                            <span className="text-rose-900"> For example {definition.example}</span>
                        }
                    </li>
                })}            
            </ul>            
        </>
    );
}

export default Definitions;