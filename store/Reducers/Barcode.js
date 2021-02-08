const ScannedData= {
  barcode : [],
  email : [],
  nbr : 0,
  data : [],
  erreur : false,
  msgErreur : ''
}

export default function reducerBarcode (state = ScannedData, action) {
  let nextState
  switch (action.type) {
    case 'LOAD_BARCODE':
    try {
      const BarcodeScannedIndex = state.barcode.findIndex(item => item === action.value.code)
      if (BarcodeScannedIndex !== -1) {
        nextState = {
          ...state
        }
      } else {
        if (state.barcode.length !== 0 && state.email.length !==0) {
          nextState = {
            ...state,
            barcode : [...state.barcode,action.value.code],
            email : [...state.email,action.profil],
            nbr : state.nbr += 1,
            data : [...state.data,action.value]
          }
        } else {
          nextState = {
            ...state,
            barcode : [action.value.code],
            email : [action.profil],
            nbr : 1,
            data : [action.value]
          }
        }
      }
    } catch(e){
      nextState = {
        ...state,
        erreur : true,
        msgErreur : 'Une erreur est survenue'
      }
    }



      return nextState || state
      break;
    case 'LOAD_BAD_BARCODE' :
      nextState = {
        ...state,
        barcode : [...state.barcode,action.value],
        email : [action.profil]
      }
    return nextState || state
      break;
    case 'ADD_BARCODE':
    const BarcodeAddIndex = state.barcode.findIndex(item => item === action.barcode)
    if (BarcodeAddIndex !== -1) {
      nextState = {
        ...state
      }
    } else {
      nextState = {
        ...state,
        barcode : [...state.barcode,action.value.code],
        email : [...state.email,action.profil],
        nbr : state.nbr += 1,
        data : [...state.data,action.value]
      }
    }


    return nextState || state
      break;
    case 'DECONNEXION' :
      nextState = {
        ...state,
        barcode : [],
        email : [],
        nbr : 0,
        data : []
      }
    return nextState || state
      break;
    default:
      return state
  }
}
