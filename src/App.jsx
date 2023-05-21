import React from 'react'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import Results from './components/Results/Results'
import { DictionaryProvider } from './Context'

function App() {

  return (
    <DictionaryProvider>
      <main className="w-[327px] md:w-[689px] lg:w-[736px] m-auto">
        <Header />
        <SearchBar />
        <Results />
      </main>
    </DictionaryProvider>
  )
}

export default App
