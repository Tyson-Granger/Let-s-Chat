// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDh0tw21OmJSaTnY5DRvSFv9q9l0oWoUFs",
  authDomain: "kwitter-ceb72.firebaseapp.com",
  databaseURL: "https://kwitter-ceb72-default-rtdb.firebaseio.com",
  projectId: "kwitter-ceb72",
  storageBucket: "kwitter-ceb72.appspot.com",
  messagingSenderId: "193373242034",
  appId: "1:193373242034:web:7c49e650c09c7e82d63fab",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"
function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding Room Name"
  })
  localStorage.setItem("room_name", room_name)
  window.location = "kwitter_page.html";
}
function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
console.log("Room Name - "+Room_names)
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}