import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Word from './components/Word'
import Navigation from './components/Navigation'

import Footer from './components/Footer'
import Intro from './components/Intro'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  const [searchText, setSearchText] = useState('')
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((data) => setResult(data))
      .catch((error) => {
        console.log(error)
      })
    setLoading(false)
  }

  useEffect(() => {
    if (searchText) fetchData()
  }, [searchText])

  return (
    <div className='w-screen h-screen font-sans bg-slate-900 overflow-x-hidden'>
      <ErrorBoundary text={result.message}>
        <Header setSearchText={setSearchText} />
        {loading && <Intro />}
        {!loading && <Word data={result} />}
        {!loading && <Navigation data={result} />}
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default App
