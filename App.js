import React, {useState} from 'react';
import  ConnexionOrLoading from './Navigation/ConnexionOrLoading';
import { Provider } from 'react-redux'
import Store from './store/configureStore'
export default class App extends React.Component{
  render() {
    console.log(this.props)
    return (
      <Provider store={Store}>
            <ConnexionOrLoading/>
      </Provider>
    )
  };
}
