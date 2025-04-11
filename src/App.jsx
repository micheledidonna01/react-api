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
      <div className="contenitore d-flex flex-wrap my-5 mx-auto p-3">
        {authors.map((author) =>
          // // <div key={author.id} className='sotto-contenitore d-flex col-12 align-items-center'>
          // //   <div className="image col-4">
          // //     <img src={author.image} alt={author.name} className='card-img-left'/>
          // //   </div>
          // //   <ul className='list-group list-group-flush col-8'>
          // //     <li className="list-group-item list-group-item-action list-group-item-primary">Nome: <strong>{author.name}</strong></li>
          // //     <li className="list-group-item list-group-item-action list-group-item-secondary">Anno di nascita: <strong>{author.birth_year}</strong></li>
          // //     <li className="list-group-item list-group-item-action list-group-item-success">Nazionalità: <strong>{author.nationality}</strong></li>
          // //     <li className="list-group-item list-group-item-action list-group-item-info">Biografia: <strong>{author.biography}</strong></li>
          // //     <li className="list-group-item list-group-item-action list-group-item-warning">Riconoscimenti: <strong>{author.awards}</strong></li>
          // //   </ul>


          // </div>
          <div className="card">
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

    </>
  )
}

export default App
