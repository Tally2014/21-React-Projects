import TodoItem from './TodoItem';
import Header from './Header';
import Footer from './Footer';
import {applyFilter} from './../services/filter.jsx';

function TodoList(props){
    const {title, items, addNew, filter, changeFilter} = props;
    const count = items.length;

    const filteredList = applyFilter(items, filter);

    return(
        <div>
           <div className='todolist'>
              <Header title={title} addNew={addNew}/>
              <ul className='list-unstyled'>
                 {filteredList.map(item => <TodoItem key={item.id} data={item}/>)}
              </ul>
              <Footer {...{count, filter, changeFilter}}/>
            </div> 
        </div>
    )
}

export default TodoList;