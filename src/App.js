import logo from './res/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bartosz Bossy
        </p>
        <a
          className="App-link"
          href="www.wp.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <time>{(new Date()).toString()}</time>  
        </a>
      </header>
    </div>
  );
}

export default App;
