import React, {Component} from 'react';
import FilteredList from './FilteredList';
import Header from './Header';
import Footer from './Footer';
import {applyFilter} from './../services/filter.jsx';

export default function TodoList(props) {
  const {items, filter, mode} = props.data;
  const {addNew, changeFilter, changeStatus} = props.actions;
  const count = items.length;
  const filteredItems = applyFilter(items, filter);

  return (
      <div className="todolist">
          <Header {...{addNew, mode}}/>
          <FilteredList items={filteredItems} changeStatus={changeStatus}/>
          <Footer {...{count, filter, changeFilter, mode}}/>
      </div>
  );
}