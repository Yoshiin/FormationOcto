import './App.css';
import {SearchBar} from "./component/Searchbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello {window.location.hostname}</p>
        <div>
          <SearchBar/>
        </div>
      </header>
    </div>
  )
}

export default App
