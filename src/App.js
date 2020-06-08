import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import { Route, NavLink } from 'react-router-dom'
import Home from './Home';
import NewBook from './NewBook';
import BookDetails from './BookDetails';
import { storeTitle } from './module/app';

function App() {
  const state = useSelector( state => state.app )
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(storeTitle())
  // }, [dispatch])

  const {title} = state
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
        </header>
        <section>
          <nav>
            <NavLink
              exact to="/" activeStyle={{ fontWeight : 'bold'}}
            >Home</NavLink>
            <NavLink 
              to="/new" activeStyle={{ fontWeight : 'bold'}}
            >New Book</NavLink>
          </nav>
          <section>
            <Route exact path="/" component={Home} />
            <Route exact path="/new" component={NewBook} />
            <Route exact path="/book/:title" component={BookDetails}/>
          </section>
        </section>
      </div>
  );
}

export default App;
