import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAwrkUe08V-oBzH6kuudAmwEFdi4FIVqDA",
    authDomain: "qr-tattoo.firebaseapp.com",
    databaseURL: "https://qr-tattoo.firebaseio.com",
    projectId: "qr-tattoo",
    storageBucket: "qr-tattoo.appspot.com",
    messagingSenderId: "132370008483",
    appId: "1:132370008483:web:810c72d5ec137f496bb216",
    measurementId: "G-N7DP12M92Y"
  };

var fire = firebase.initializeApp(config);
  
export default fire;

export const getData = async () => {
    const dbRef = await fire.database().ref('/');
    let tempData = {};
    dbRef.on('value', async function(snap) {
        const data = await snap.val()
        Object.assign(tempData, data)
    })
}