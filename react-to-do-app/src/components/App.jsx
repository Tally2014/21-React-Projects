import '../App.css'
import TodoList from './TodoList';
import React, {Component} from 'react';
import StateProvider from './StateProvider';


class App extends Component {
  
  render(){
    return (
      <>
        <div className='container'>
            <div className='row'>
              <StateProvider>
                <TodoList/>
              </StateProvider>
            </div>
        </div>
      </>
    )
  } 
}

export default App