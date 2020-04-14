import firebase from 'firebase'

var config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'qr-tattoo.firebaseapp.com',
  databaseURL: 'https://qr-tattoo.firebaseio.com',
  projectId: 'qr-tattoo',
  storageBucket: 'qr-tattoo.appspot.com',
  messagingSenderId: '132370008483',
  appId: '1:132370008483:web:810c72d5ec137f496bb216',
  measurementId: 'G-N7DP12M92Y'
}

var fire = firebase.initializeApp(config)

export default fire

export const postData = async (content, type) => {
  fire
    .database()
    .ref('/')
    .set({
      content,
      type
    })
}
