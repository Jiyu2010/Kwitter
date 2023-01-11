var firebaseConfig = {
    apiKey: "AIzaSyBVmNASC7qvgAFuw22rpGO6Hppx7O--DJE",
    authDomain: "kwitter-44432.firebaseapp.com",
    databaseURL: "https://kwitter-44432-default-rtdb.firebaseio.com",
    projectId: "kwitter-44432",
    storageBucket: "kwitter-44432.appspot.com",
    messagingSenderId: "5850329667",
    appId: "1:5850329667:web:655bf610ccae7e29569af6",
    measurementId: "G-4QPE5JREQV"
  };
  
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
  

function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name",user_name);

window.location = "kwitter_room.html";
}