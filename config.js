import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDGNHMcG6OtOuCNBR7tHs_lx3DXBlFN8IE",
  authDomain: "booksantaapp-dfe9d.firebaseapp.com",
  databaseURL:"https://console.firebase.google.com/project/undefined/firestore/data/",
  projectId: "booksantaapp-dfe9d",
  storageBucket: "booksantaapp-dfe9d.appspot.com",
  messagingSenderId: "160399703411",
  appId: "1:160399703411:web:bc61c2e9ad7320d6ded906"
};

if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig)
}
export default firebase.firestore()