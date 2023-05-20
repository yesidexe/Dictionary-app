export const fetchData = async (url)=>{
    try{
        const response = await fetch(url)
        const jsonData = await response.json();
        return {response, jsonData};

    }catch(error){
        console.error('Error fetching data: ',error)
    }
}
