import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <div className='container'>
          <div>
            <div className='todolist'>
              <h1>Todos</h1>
              <ul className='list-unstyled'>
                <li className='ui-state-default'>
                  <div className='checkbox'>
                    <label><input type="checkbox" value=""/>ake out the Trash</label>
                  </div>
                </li>
                <li className="ui-state-default">
                  <div className="checkbox">
                    <label><input type="checkbox" value=""/>Buy bread</label>
                  </div>
                </li>
                <li className="ui-state-default">
                  <div className="checkbox">
                      <label><input type="checkbox" value=""/>Teach penguins to fly</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
