import logo from './logo.svg';

import Weather from "./Weather.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>
         Hello world 
       </h1>
        <Weather city="Paris"/> 
        
      </header>
    </div>
  );
}

export default App;
