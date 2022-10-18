import Axios from 'axios';
import { useState } from 'react';
import './App.css';


function App() {
  const[data, setData] = useState([])
const getNews = ()=>{
  Axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=de76e7cdc7f746d898982e7782964c2d&q=india")
  .then((response)=> {
    console.log(response);
    setData(response.data.articles)
  })
}

  return (
    <>
    <div className="App">
     <button className='btn btn-primary' onClick={getNews}>GET NEWS</button>
    </div>

    <div className='container'>
      <div className='row'>
        {
          data.map((value)=>{
            return(
            <div className='col'>
              <div className="card" style={{width: "18rem"}}>
               <img src={value.urlToImage} className="card-img-top" alt="..."/>
               <div className="card-body">
                <h5 className="card-title">{value.title}</h5>
                <p className="card-text">{value.description}</p>
                <a className="card-link">Original Page</a>
             </div>
          </div>
        </div>

            );
          })
        }
      </div>
    </div>

    </>

    
  );
}

export default App;
