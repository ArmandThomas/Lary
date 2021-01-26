import React, {useState} from 'react';
import NavigationBottom from './Navigation/Navigation';
import { Provider } from 'react-redux'
import Store from './store/configureStore'
export default class App extends React.Component{
  render() {
    return (
      <Provider store={Store}>
            <NavigationBottom/>
      </Provider>
    )
  };
}
