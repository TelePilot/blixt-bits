import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBi20MjsL1o3kD-xV32-luH7hSVFW3maPg",
    authDomain: "blixt-db.firebaseapp.com",
    databaseURL: "https://blixt-db.firebaseio.com",
    projectId: "blixt-db",
    storageBucket: "",
    messagingSenderId: "973320747712",
    appId: "1:973320747712:web:fb16d2c14f0bd420"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;