
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCY2CW3m6e81eezG9aK6qVs4kSsC6hVQsg",
      authDomain: "kwitterapp-7e09c.firebaseapp.com",
      databaseURL: "https://kwitterapp-7e09c-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-7e09c",
      storageBucket: "kwitterapp-7e09c.appspot.com",
      messagingSenderId: "950886794255",
      appId: "1:950886794255:web:106feb23d0f67b20f48f7a"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name +"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name-"+room_name);
row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose:"adding room name"
       });
       window.location="kwitter_page.html";
       localStorage.setItem("room_name",room_name);

        
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}