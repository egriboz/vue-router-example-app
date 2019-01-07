import Firebase from 'firebase'
const config = {
    apiKey: 'AIzaSyB1snYfZEuiLVbut-Ya9_yOM4z4JRgbMvE',
    authDomain: 'vueblog-6e884.firebaseapp.com',
    databaseURL: 'https://vueblog-6e884.firebaseio.com',
    projectId: 'vueblog-6e884',
    storageBucket: 'vueblog-6e884.appspot.com',
    messagingSenderId: '505307337317'
  };
  

  const firebaseApp =  Firebase.initializeApp(config)
  const db = firebaseApp.database()
  export default db