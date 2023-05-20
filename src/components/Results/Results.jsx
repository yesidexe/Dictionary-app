import ResultWord from "../ResultWord/ResultWord";
import ResultsMeaning from "../ResultsMeaning/ResultsMeaning";

function Results({data, status}) {
    
    return (
        <>
            <ResultWord data={data} status={status}></ResultWord>
            <ResultsMeaning data={data} status={status}></ResultsMeaning>            
        </>        
    );
}

export default Results;