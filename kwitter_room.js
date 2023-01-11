
//ADD YOUR FIREBASE LINKS HERE
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick = 'redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name",room_name);

window.location = "kwitter_page.html";


}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

