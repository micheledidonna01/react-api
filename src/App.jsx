
import axios from 'axios'
import { useEffect, useState } from 'react';


function App() {

  let api = "https://www.freetestapi.com/api/v1/actors";
  const [authors, setAuthors] = useState([]);

  function fetchAuthors() {
    axios.get(api)
      .then((res) => {
        setAuthors(res.data);
  
      })
      .catch(err => console.log(err))
  }

  
  useEffect(fetchAuthors, []);
  console.log(authors);
  return (
    <>
      <div className="container">
        {authors.map((author) => {
          <div key={author.id} className='card'>
          {author.name}
          </div>}
        )}
      </div>

    </>
  )
}

export default App
