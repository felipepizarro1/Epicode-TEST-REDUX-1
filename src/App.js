import { useEffect, useState } from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import SidebarComponent from './components/SidebarComponent';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import AlbumComponent from './components/AlbumComponent';
import ArtistComponent from './components/ArtistComponent';


function App() {

  const [results, setResults ] = useState([]);

  const [rockResults, setRockResults] = useState([]);
  const [popResults, setPopResults] = useState([]);
  const [hipHopResults, setHipHopResults] = useState([]);
  
  useEffect(()=>{

    fetchContent('rock', setRockResults);
    fetchContent('pop', setPopResults);
    fetchContent('hiphop', setHipHopResults);

  },[])



  function fetchContent(musicStyle, setHomeResults) {

    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${musicStyle}`)
    .then(response => response.json())
    .then(json=>{
      console.log(json);
      setHomeResults(json.data);

    })
    .catch(console.error())
  }



  return (
    <>
     <BrowserRouter>
      <body>
        <div class="container-fluid">
          <div class="row">
             <SidebarComponent setResults={setResults} /> {/*//determina i valore con la search query */}
             <Routes>
              <Route path="/" element={<MainComponent results={results} rockResults={rockResults} popResults=   {popResults} hipHopResults={hipHopResults} />} />{/*//passa i valore con la search query */}
                <Route path="/album_page/:albumId" element={<AlbumComponent/>} />
                <Route path="/artist_page/:artistId" element={<ArtistComponent/>} />
                
              </Routes>
         </div>
        </div>
      </body>
      </BrowserRouter>
    </>
  );
}

export default App;
