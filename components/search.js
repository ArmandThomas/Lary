
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

import ProductItem from './ProductItem.js';
import {readOpenFoodFactsProducts} from '../api/OpenFoodFacts.js';
import { PostBarcode } from '../api/POSTBarcode'
import { connect } from 'react-redux';

class Search extends React.Component {
  state = {
    hasPermission: null,
    setHasPermission: null,
    scanned : false,
    setScanned: false,
    loading : false,
    product: null,
    barcodeData : ""
  };
//

_loadProducts(barcode) {
    this.setState ({
      loading:true
    })
    readOpenFoodFactsProducts(barcode).then(data => {
        this.setState({
          product: data.product
         })
         const action = {type : "ADD_BARCODE", barcode : data, mail: this.props.reducerProfil.mailProfil}
         this.props.dispatch(action)
    })
}



  componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' });
  }

  render() {
    const { hasPermission, scanned } = this.state;

    if (this.state.hasPermission === null) {
      this.componentDidMount();
    }
    if (this.state.hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    const handleBarCodeScanned = ({ type, data }) => {
      this.setState({
        scanned: true,
        barcodeData : {data}
       });
       PostBarcode(this.props.reducerProfil.mailProfil,data)
       this._loadProducts(data);

    };
    if (this.state.product === null) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
      );
    } else {
      return(
        <View>
          <ProductItem product={this.state.product}/>
        </View>
      )

    }

  }
}
const mapStatetoProps = (state) => {
  return state
}
export default connect(mapStatetoProps)(Search)
