import logo from './logo.svg';
import './App.css';
import Anew from './Components/Anew';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/sarafprerana/ReactJsWork"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Welcome To GitHub
        
        </a>
      <Anew />
      </header>
    </div>
  );
}

export default App;
