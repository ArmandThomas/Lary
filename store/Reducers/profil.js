

const ProfilState = {
  id : [],
  UsernameProfil : [],
  passwordProfil : [],
  mailProfil : [],
  level : [],
  online: false,
}



export default function reducerProfil(state = ProfilState, action) {
  let nextState
  switch (action.type) {
    case 'PROFIL_CONNEXION' :
      const UsernameProfilIndex  = state.UsernameProfil.findIndex(item => item === action.value.UsernameProfil)
      if (UsernameProfilIndex !== -1) {
        nextState = {
          online: true,
          ...state,
        }
      } else {
          nextState = {
            ...state,
            online : true,
            id : [action.value.data[0].id],
            UsernameProfil : [action.value.data[0].username],
            passwordProfil : [action.value.data[0].password],
            mailProfil : [action.value.data[0].mail],
            level : [action.value.data[0].level]
          }
      }
      return nextState || state
    case 'PROFIL_DECONNEXION' :
      nextState = {
        ...state,
        id : [],
        UsernameProfil : [],
        passwordProfil : [],
        mailProfil : [],
        level : [],
        online : false
      }
      console.log(nextState)
      return nextState || state
    case 'PROFIL_INSCRIPTION' :
    nextState = {
      ...state,
      online : true,
      id : [action.value.data[0].id],
      UsernameProfil : [action.value.data[0].username],
      passwordProfil : [action.value.data[0].password],
      mailProfil : [action.value.data[0].mail],
      level : [action.value.data[0].level]
    }
    console.log(nextState)
    return nextState || state

    default:
      return state

  }
}
