import { combineReducers } from 'redux'
import  reducerBarcode  from './Barcode'
import  reducerProfil  from './profil'


const rootReducer = combineReducers({
  reducerBarcode,
  reducerProfil
})
export default rootReducer
