import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import Results from './components/Results/Results'
import {fetchData} from './services/fetchData' 

const API = import.meta.env.VITE_DICTIONARY_API

function App() {
  const [data, setData] = React.useState(null)
  const [status, setStatus] = React.useState('idle')

  const handleSearch = async (searchTerm) => {
    setStatus('loading')
    try{
      const {response, jsonData} = await fetchData(`${API}/${searchTerm}`)
      if (response.ok){
        setData(jsonData[0])
        setStatus('success')
      }else{
        setStatus('error')
      }
    }catch(error){
      console.error(error)
    }      
  }

  return (
    <>
    <main className='w-[327px] md:w-[689px] lg:w-[736px] m-auto font-mono'>
        <Header></Header>
        <SearchBar handleSearch={handleSearch}></SearchBar>
        <Results data={data} status={status}></Results>
    </main>
    </>
  )
}

export default App
