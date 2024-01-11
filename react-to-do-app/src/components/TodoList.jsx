import FilteredList from './FilteredList';
import Header from './Header';
import Footer from './Footer';
import {applyFilter} from './../services/filter.jsx';

function TodoList(props){
    const {title, items, addNew, filter, changeFilter, changeStatus} = props;
    const count = items.length;

    const filteredItems = applyFilter(items, filter);

    return(
      <div className='todolist'>
          <Header title={title} addNew={addNew}/>
          <FilteredList items={filteredItems} changeStatus={changeStatus} />
          <Footer {...{count, filter, changeFilter}}/>
       </div> 
    )
}

export default TodoList;