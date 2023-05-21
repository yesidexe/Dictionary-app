function Definitions({ definitions }) {
    return (
        <>
            <ul className="dark:marker:text-rose-600 marker:text-rose-800 pl-5 list-disc mb-6 box-border ">
                {definitions.map((definition,index) => {
                    const id = `${index}-definition`

                    return (
                        <li key={id} className="dark:text-slate-100 pl-5 lg:text-lg md:text-lg text-base py-3">
                            {definition.definition}
                            {definition.example &&
                                <span className="dark:text-rose-400 text-rose-900"> For example {definition.example}</span>
                            }
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default Definitions;