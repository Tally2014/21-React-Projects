import React, {Component} from 'react';
import FilteredList from './FilteredList';
import Header from './Header';
import Footer from './Footer';
import {applyFilter, search} from './../services/filter.jsx';

export default function TodoList(props) {
  const {items, filter, mode, query} = props.data;
  const {addNew, changeFilter, changeStatus, changeMode, setSearchQuery} = props.actions;
  const count = items.length;
  const filteredItems = search(applyFilter(items, filter), query);

  return (
      <div className="todolist">
          <Header {...{addNew, mode, query, setSearchQuery}}/>
          <FilteredList items={filteredItems} changeStatus={changeStatus}/>
          <Footer {...{count, filter, changeFilter, mode, changeMode}}/>
      </div>
  );
}