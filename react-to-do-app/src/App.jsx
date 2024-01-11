import './App.css'

function App() {
  let items = [
    {
        id:1,
        text: 'Learn Javascript',
        completed: false
    },
    {
        id:2,
        text: 'Learn React',
        completed: false
    },
    {
        id:3,
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
                <li key={item.id} className="ui-state-default">
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
