import { useState } from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import SidebarComponent from './components/SidebarComponent';

function App() {

  const [results, setResults ] = useState([]);
  

  return (
    <>
      <body>
        <div class="container-fluid">
          <div class="row">
             <SidebarComponent setResults={setResults} /> {/*//determina i valore con la search query */}
              <MainComponent results={results}/> {/*//passa i valore con la search query */}
         </div>
        </div>
      </body>
    </>
  );
}

export default App;
