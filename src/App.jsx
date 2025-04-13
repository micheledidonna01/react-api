import { useEffect, useState } from 'react';
import axios from 'axios'



function App() {

  let api = "https://www.freetestapi.com/api/v1/actors";
  const [authors, setAuthors] = useState([]);
  let api2 = "https://www.freetestapi.com/api/v1/actresses";
  const [actresses, setActress] = useState([]);

  const [script, setScript] = useState('');

  function fetchAuthors() {
    axios.get(api)
      .then((res) => {
        setAuthors(res.data);

      })
      .catch(err => console.log(err))
  }


  function fetchActress() {
    axios.get(api2)
      .then((res) => {
        setActress(res.data);

      })
      .catch(err => console.log(err))
  }

  useEffect(fetchAuthors, []);
  useEffect(fetchActress, []);
  useEffect(()=>{
    let result1 = authors;
    let result2 = actresses;

    if(script !== ""){
      
      result1 = result1.filter(res => res.name.includes(script));
      result2 = result2.filter(res => res.name.includes(script));

    }


    setAuthors(result1);
    setActress(result2);
    result1 = authors;
    result2 = actresses;
  }, [script]);
  console.log(authors);
  console.log(actresses);


  return (
    <>
      <main className='bg-dark pt-5'>

        <h1 className='text-light text-center bg-success p-3'>Lista di Attori/Attrici</h1>
        <div className='d-flex justify-content-end'>
          <div className="col-3 m-4">
            <input
              type="text"
              value={script}
              onChange={(e) => setScript(e.target.value)}
              placeholder='Name Actor or Actresses'
              className='form-control'
            />
          </div>
        </div>
        <div className="contenitore d-flex flex-wrap mx-auto p-3 justify-content-center">

          {authors.map((author) =>
            <div className="card" key={author.id}>
              <img src={author.image} className="card-img-top" alt={author.title} />
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

          {actresses.map((actress) =>
            <div className="card" key={actress.id}>
              <img src={actress.image} className="card-img-top" alt={actress.title} />
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
