const ProfilState = {
  id : [],
  UsernameProfil : [],
  passwordProfil : [],
  mailProfil : [],
  level : [],
  online: false,
}
function reducerProfil(state = ProfilState, action) {
  let nextState
  switch (action.type) {
    case 'PROFIL_CONNEXION' :
      const UsernameProfilIndex  = state.UsernameProfil.findIndex(item => item.UsernameProfil === action.value.UsernameProfil)
      if (UsernameProfilIndex !== -1) {
        nextState = {
          ...state
        }
      } else {
        nextState = {
          ...state,
          UsernameProfil : [...state.UsernameProfil, 'Coucou']
        }
      }
      return nextState || state
    default:
    console.log(state)
      return state

  }
}
export default reducerProfil
