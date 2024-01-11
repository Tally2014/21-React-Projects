import './App.css'

function App() {
  let items = [
    {
        text: 'Learn Javascript',
        completed: false
    },
    {
        text: 'Learn React',
        completed: false
    },
    {
        text: 'Build a React App',
        completed: false
    }
];

  return (
    <>
      <h1>Hello World</h1>
      <div className='container'>
          <div>
            <div className='todolist'>
              <h1>Todos</h1>
              <ul className='list-unstyled'>
              {items.map(item => (
                <li className="ui-state-default">
                    <div className="checkbox">
                      <label><input type="checkbox" value=""/>{item.text}</label>
                     </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
