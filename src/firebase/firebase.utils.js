import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCrSrsGfB0lvq9bA26NRRXMo8ihO2LxWos",
    authDomain: "ecommerce-web-f8b5a.firebaseapp.com",
    projectId: "ecommerce-web-f8b5a",
    storageBucket: "ecommerce-web-f8b5a.appspot.com",
    messagingSenderId: "498873439516",
    appId: "1:498873439516:web:6d46d3fccc63875aac56d9",
    measurementId: "G-6B2CK7DK2S"
  };

  export const createUserProfileDocument = async (userAuth,additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;