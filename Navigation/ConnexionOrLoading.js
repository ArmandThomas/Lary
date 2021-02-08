import React from 'react'
import NavigationBottom from '../Navigation/Navigation'
import {connect} from 'react-redux';
import NavigationConnexion from '../Navigation/NavigationConnexion'
class ConnexionOrLoading extends React.Component {
  render () {
    if (this.props.reducerProfil.online == false)  {
        return(
          <NavigationConnexion/>
        )
    } else {
      return(
        <NavigationBottom/>
      )
    }
  }
}
const mapStatetoProps = (state) => {
  return state
}
export default connect(mapStatetoProps)(ConnexionOrLoading)
