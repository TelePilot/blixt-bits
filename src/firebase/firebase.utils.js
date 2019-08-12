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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
      const { displayName, email } = userAuth
      const createdAt = new Date();

      try{
        await userRef.set({
          email,
          createdAt,
          displayName,
          additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }

    return userRef;
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;