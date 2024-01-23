import './App.css';
import MainComponent from './components/MainComponent';
import SidebarComponent from './components/SidebarComponent';

function App() {
  return (
    <>
      <body>
        <div class="container-fluid">
          <div class="row">
            <SidebarComponent/>
            <MainComponent/>
         </div>
        </div>
      </body>
    </>
  );
}

export default App;
