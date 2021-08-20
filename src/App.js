import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-500">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p className="text-white text-center">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="hover:text-white"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
