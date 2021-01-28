

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
      const UsernameProfilIndex  = state.UsernameProfil.findIndex(item => item === action.value.UsernameProfil)
      if (UsernameProfilIndex !== -1) {
        nextState = {
          ...state,
          online: true
        }
      } else {
          nextState = {
            ...state,
            online: true,
            id : [...state.id,action.value.data.id],
            UsernameProfil : [...state.UsernameProfil,action.value.data.username],
            passwordProfil : [...state.passwordProfil,action.value.data.password],
            mailProfil : [...state.mailProfil,action.value.data.mail],
            level : [...state.level,action.value.data.level]
          }


        // nextState = {
        //   ...state,
        //   UsernameProfil : [...state.UsernameProfil, action.value.UsernameProfil]
        // }
        // nextState = {
        //   ...state,
        //   loading: true,
        //   UsernameProfil : [...state.UsernameProfil, action.value.UsernameProfil]
        //  }
          // nextState = {
          //   ...state,
          //   loading: true,
          // }
          // if (data.message == 'connexion reussi') {
          //   nextState = {
          //     ...state,
          //     online: true,
          //     id : [...state.id,data.data[0].id],
          //     UsernameProfil : [...state.UsernameProfil,data.data[0].username],
          //     passwordProfil : [...state.passwordProfil,data.data[0].password],
          //     mailProfil : [...state.mailProfil,data.data[0].mail],
          //     level : [...state.level,data.data[0].level]
          //   }
          // } else {
          //   nextState = {
          //     ...state,
          //     error : true,
          //     messageErreur : 'Vos identifiants de connexion ne corresponde pas'
          //   }
          // }
      }
      return nextState || state
    default:
      return state

  }
}
export default reducerProfil
