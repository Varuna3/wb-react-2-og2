import { useState } from 'react';

export default function MovieList() {
  const [movies, setMovies] = useState(['Alien', 'Predator', 'Alien Vs. Predator']);
  // This initializes our state value movies as an array with 3 items.

  const [inputValue, setInputValue] = useState('');
  // This will be used to hold the value of our input box.

  
}
