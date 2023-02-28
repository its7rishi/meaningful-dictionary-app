import React from 'react'

const Meaning = ({ data, activeSection }) => {
  return (
    <div className=' mt-6 px-2 sm:px-8 w-full flex flex-col items-start justify-start sm:flex-row'>
      {/* Definitions */}
      {activeSection === 'definition' && (
        <div className='w-full text-white text-sm sm:text-lg'>
          {data[0].meanings.map((meaning, idx) => (
            <div
              key={idx}
              className='py-4 border-b border-gray-700 last:border-none'
            >
              <p>
                Part of Speech:{' '}
                <span className='text-gray-500'>{meaning.partOfSpeech}</span>
              </p>
              <br />
              <p>Definition: {meaning.definitions[0].definition}</p>
            </div>
          ))}
        </div>
      )}

      {/* Examples */}
      {activeSection === 'examples' && (
        <div className='w-full text-white text-sm sm:text-lg'>
          {data[0].meanings.map((meaning, idx) => (
            <div key={idx}>
              {meaning.definitions.map((definition, idx) => (
                <h1 key={idx}>{definition.example}</h1>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Synonyms */}
      {activeSection === 'synonyms' && (
        <div className='w-full text-white text-sm sm:text-lg'>
          {data[0].meanings.map((meaning, idx) => (
            <div key={idx}>
              {meaning.definitions.map((definition, idx) => (
                <ul key={idx} className='w-full px-4'>
                  {definition.synonyms.map((synonym, idx) => (
                    <li key={idx} className='text-white'>
                      {synonym}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Antonyms */}
      {activeSection === 'antonyms' && (
        <div className='w-full text-white text-sm sm:text-lg'>
          {data[0].meanings.map((meaning, idx) => (
            <div key={idx}>
              {meaning.definitions.map((definition, idx) => (
                <ul key={idx} className='w-full px-4'>
                  {definition.antonyms.map((antonym, idx) => (
                    <li key={idx} className='text-white'>
                      {antonym}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Meaning
