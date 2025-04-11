import { useEffect, useState } from 'react';
import axios from 'axios'



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
      <div className="contenitore d-flex flex-wrap m-5">
        {authors.map((author) =>
          <div key={author.id} className='card d-flex col col-4'>
            <img src={author.image} alt={author.name} className='card-img-top' />
            <ul className='list-group list-group-flush'>
              <li className="list-group-item">Nome: <strong>{author.name}</strong></li>
              <li className="list-group-item">Anno di nascita: <strong>{author.birth_year}</strong></li>
              <li className="list-group-item">Nazionalità: <strong>{author.nationality}</strong></li>
              <li className="list-group-item">Biografia: <strong>{author.biography}</strong></li>
              <li className="list-group-item">Riconoscimenti: <strong>{author.awards}</strong></li>
            </ul>


          </div>
        )}
      </div>

    </>
  )
}

export default App
