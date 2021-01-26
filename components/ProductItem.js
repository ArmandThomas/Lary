import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Font } from 'expo'

class ProductItem extends React.Component {

  constructor(props) {
    super(props);
    this.product = props.product
    pathIMG = this.product.product.image_small_url
  }

  render() {

    return (
      <View style={styles.main_container}>
        <Image style={styles.image_container} source={{uri : pathIMG }} />
        <View style={styles.second_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{this.product.product.product_name_fr}</Text>
            <Text style={styles.nutri_score}>{this.product.product.nutriscore_grade}</Text>
          </View>
          <View style={styles.body_container}>
            <Text style={styles.description} numberOfLines={6}>{this.product.product.ingredients_text_fr}</Text>
          </View>
          <View style={styles.date}>
            <Text>{}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    margin: 10,
    marginTop: 50,
    fontFamily: 'Roboto',
  },
  image_container: {
    width: 120,
    height: 150,
  },
  second_container: {
    flex: 1,
    backgroundColor: '#fff',
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

export default ProductItem
