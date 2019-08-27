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
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return


    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }

    return userRef
  }

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
    })
   await batch.commit()
  }

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(
      doc => {
        const { title, items } = doc.data()

        return {
          routeName: encodeURI(title.toLowerCase()),
          id: doc.id,
          title,
          items
        }
      })

     return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
      },{})
  }

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unSubscribe = auth.onAuthStateChanged(userAuth => {
        unSubscribe()
        resolve(userAuth)
      }, reject)
    })
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  export const googleProvider = new firebase.auth.GoogleAuthProvider()
  googleProvider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

  export default firebase