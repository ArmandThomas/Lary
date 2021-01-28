import React from 'react'
import NavigationBottom from '../Navigation/Navigation'
import {connect} from 'react-redux';
import Connexion from '../components/Connexion'
class ConnexionOrLoading extends React.Component {
  render () {
    if (this.props.online == false)  {
        return(
          <Connexion/>
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
