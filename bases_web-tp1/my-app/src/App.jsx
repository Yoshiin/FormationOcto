import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MyList from './component/MyList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {window.location.hostname}</p>
        <div>
          <MyList />
        </div>
      </header>
    </div>
  )
}

export default App
