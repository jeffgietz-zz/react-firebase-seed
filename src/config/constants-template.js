import firebase from 'firebase'
// Rename this file constrants.js and enter details below
const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth