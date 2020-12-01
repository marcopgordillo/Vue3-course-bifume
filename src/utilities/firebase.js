import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDC1LS1GPy80M6rNjIBABgFyfy5ZoahHiA",
  authDomain: "vue3examples.firebaseapp.com",
  databaseURL: "https://vue3examples.firebaseio.com",
  projectId: "vue3examples",
  storageBucket: "vue3examples.appspot.com",
  messagingSenderId: "95444731622",
  appId: "1:95444731622:web:9ba544af14117692ed1d27"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database()

export const chatsRef = db.ref('chats')

export default firebase;
