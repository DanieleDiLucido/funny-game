import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Item from './../components/item/item'
import Menu from './../components/menu/menu'
import Reducer from './../reducer/reducer'
import './App.scss';

const store = createStore(Reducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <div className="main">
            <header className="app-header">
              <h1> Funny Game </h1>
            </header>
            <div className="items-container">
              <Item name="A" points={50} bonus={50} bonusOn={3} />
              <Item name="B" points={30} bonus={30} bonusOn={2} />
              <Item name="C" points={20} />
              <Item name="D" points={15} />
            </div>
          </div>
          <Menu />
        </div>
      </Provider>
    );
  }
}

export default App;
