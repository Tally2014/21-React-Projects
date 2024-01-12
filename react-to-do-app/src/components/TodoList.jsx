import React, {Component} from 'react';
import FilteredList from './FilteredList';
import Header from './Header';
import Footer from './Footer';
import {applyFilter} from './../services/filter.jsx';

export default function TodoList(props) {
  const {items, filter, mode, query} = props.data;
  const {addNew, changeFilter, changeStatus, changeMode, search} = props.actions;
  const count = items.length;
  const filteredItems = applyFilter(items, filter);

  return (
      <div className="todolist">
          <Header {...{addNew, mode, query, search}}/>
          <FilteredList items={filteredItems} changeStatus={changeStatus}/>
          <Footer {...{count, filter, changeFilter, mode, changeMode}}/>
      </div>
  );
}