var firebaseConfig = {
    apiKey: "AIzaSyCnOpkZsOU0OohLUnzkdlzkgPjRrB2TCNU",
    authDomain: "kwitter-trial.firebaseapp.com",
    databaseURL: "https://kwitter-trial-default-rtdb.firebaseio.com",
    projectId: "kwitter-trial",
    storageBucket: "kwitter-trial.appspot.com",
    messagingSenderId: "841005262516",
    appId: "1:841005262516:web:44bd4f8d36617a747619e1",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
  user_name=document.getElementById(user_name).value;
  firebase.database().ref("/").child(user_name).update({
  purpose:"adding user"
  });

  }