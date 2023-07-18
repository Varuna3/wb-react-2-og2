import { useState } from 'react'

export default function MovieList() {
  const [movies, setMovies] = useState([
    'Alien',
    'Predator',
    'Alien Vs. Predator',
  ])
  // This initializes our state value movies as an array with 3 items.

  const [inputValue, setInputValue] = useState('')
  // This will be used to hold the value of our input box.

  const moviesDisplay = movies.map(movie => <li key={movie}>{movie}</li>)

  return (
    <>
      <h2>Movie List</h2>
      <ol>{moviesDisplay}</ol>
      <input
        style={{ marginLeft: '15px' }}
        value={inputValue}
        type='text'
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        style={{ marginLeft: '15px' }}
        onClick={() => {
          setMovies([...movies, inputValue])
          setInputValue('')
        }}
      >
        Add Movie
      </button>
    </>
  )
}
