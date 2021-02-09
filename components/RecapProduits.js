import React from 'react';
import { StyleSheet, Text,ScrollView, View,Button, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { BarcodeScanned } from '../api/BarcodeScanned';
import ProductItem from '../components/ProductItem';
import {readOpenFoodFactsProducts} from '../api/OpenFoodFacts.js';

class RecapProduits extends React.Component {
  state = {
    loading : true,
    data : [],
    product : null,
    i : 0,
    error : false,
  }
  _loadBarcode () {
    BarcodeScanned(this.props.reducerProfil.mailProfil).then(data => {
      if (data.message == 'Aucun resultat'){
        this.setState ({
          data : []
        })
      }else {
        this.setState ({
          data : data.results.data
        })
        this._loadBarcodeScanned ()
      }

    })
  }
  componentDidMount() {
    if (this.props.reducerBarcode.data.length == 0) {
      this._loadBarcode ()
    }
  }
_loadBarcodeScanned () {
  this.state.data.forEach((element) => {
    readOpenFoodFactsProducts(element.barcode).then(data => {
      if (data.status == 1) {
        const action = {
          type : "LOAD_BARCODE",
          value : data.product,
          profil : this.props.reducerProfil.mailProfil
        }
        this.props.dispatch(action)
      } else {
        const action = {
          type : "LOAD_BAD_BARCODE",
          profil : this.props.reducerProfil.mailProfil,
          value : element.barcode
        }
        this.props.dispatch(action)
      }
    })
  })
}

componentDidUpdate() {
  if (this.state.data.length == this.props.reducerBarcode.barcode.length && this.state.i == 0 && this.props.reducerBarcode.barcode.length > 0) {
    this.setState ({
      loading : false,
      i : 1
    })
  }
}
render () {
  console.log(this.props)
  if (this.state.loading == true && this.state.length > 0) {
    return (
      <View>
      <Text> En chargement </Text>
      </View>
    )
  } else {
    if (this.state.data.length == 0 && this.props.reducerBarcode.data.length == 0){
      return(
        <View>
          <Text>Ajouter un produit</Text>
        </View>
      )
    } else{
      return (
        <View style ={{ marginTop: 20}}>
          <FlatList
          data = {this.props.reducerBarcode.data}
          renderItem={({ item }) => (
            <View style={styles.main_container}>
              <Image style={styles.image_container} source={{uri : item.image_small_url }} />
              <View style={styles.second_container}>
                <View style={styles.header_container}>
              <Text numberOfLines={1} style={styles.title_text}>{item.product_name_fr}</Text>
                </View>
                <View style={styles.body_container}>
                  <Text style={styles.description} numberOfLines={6}>{item.brands}</Text>
                </View>
              </View>
            </View>
          )}
          />
        </View>
      )
    }
  //   return(
  //   for (let x = 0; x < this.props.reducerBarcode.data.length; x++) {
  //       <View>
  //       <Text> Recap </Text>
  //       </View>
  //   }
  // )
  }

}

}
const styles = StyleSheet.create({
  main_container: {
    height: 150,
    flexDirection: 'row',
    fontFamily: 'Roboto',
    margin: 20,
  },
  image_container: {
    width: 120,
    height: 150,
  },
  second_container: {
    flex: 1,
    backgroundColor: '#fff',
    height: 150,
    paddingLeft: 15,
  },
  header_container: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  title_text: {
    flex: 4,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    fontSize: 22,
  },
  nutri_score: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 26,
    textTransform: 'uppercase',
  },
  body_container: {
    flex: 6,
    backgroundColor: '#fff',
  },
  date: {
    flex: 1,
  },

})
const mapStatetoProps = (state) => {
  return state

}
export default connect(mapStatetoProps)(RecapProduits)
