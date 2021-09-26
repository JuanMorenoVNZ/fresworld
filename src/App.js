import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';

function App() {
  const jsx = <h1>Fresh World</h1>
  return (
    <div>
       <NavBar/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {jsx}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </div>
  );
}

export default App;
