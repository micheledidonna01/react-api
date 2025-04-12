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

  let api2 = "https://www.freetestapi.com/api/v1/actresses";
  const [actresses, setActress] = useState([]);

  function fetchActress() {
    axios.get(api2)
      .then((res) => {
        setActress(res.data);

      })
      .catch(err => console.log(err))
  }


  useEffect(fetchAuthors, []);
  useEffect(fetchActress, []);
  console.log(authors);
  console.log(actresses);

  return (
    <>
    <main className='bg-dark pt-5'>

      <h1 className='text-light text-center bg-success p-3'>Lista di Attori</h1>
      <div className="contenitore d-flex flex-wrap my-5 mx-auto p-3">
        
        {authors.map((author) =>
          <div className="card" key={author.id}>
            <img src={author.image} className="card-img-top" alt={author.title}/>
              <div className="card-body">
                <h5 className="card-title">{author.name}</h5>
                <p className="card-text">{author.biography}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Nationality: </strong>{author.nationality}</li>
              <li className="list-group-item"><strong>Birth year: </strong>{author.birth_year}</li>
              <li className="list-group-item"><strong>Awards: </strong>{author.awards}</li>
              </ul>
          </div>
        
          
        )}
      </div>

      <h1 className='text-center text-light bg-success p-3'>Lista di Attrici</h1>
      <div className="contenitore d-flex flex-wrap my-5 mx-auto p-3">
        {actresses.map((actress) =>
          <div className="card" key={actress.id}>
            <img src={actress.image} className="card-img-top" alt={actress.title}/>
              <div className="card-body">
                <h5 className="card-title">{actress.name}</h5>
                <p className="card-text">{actress.biography}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Nationality: </strong>{actress.nationality}</li>
              <li className="list-group-item"><strong>Birth year: </strong>{actress.birth_year}</li>
              <li className="list-group-item"><strong>Awards: </strong>{actress.awards}</li>
              </ul>
          </div>
        
          
        )}
      </div>

    </main>
    </>
  )
}

export default App
