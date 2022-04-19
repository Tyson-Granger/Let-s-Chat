//YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyDh0tw21OmJSaTnY5DRvSFv9q9l0oWoUFs",
  authDomain: "kwitter-ceb72.firebaseapp.com",
  databaseURL: "https://kwitter-ceb72-default-rtdb.firebaseio.com",
  projectId: "kwitter-ceb72",
  storageBucket: "kwitter-ceb72.appspot.com",
  messagingSenderId: "193373242034",
  appId: "1:193373242034:web:7c49e650c09c7e82d63fab",
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like: 0,
  });
  document.getElementById("msg").value = "";
}
function getData() {
  firebase
    .database()
    .ref("/" + room_name)
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code

          //End code
        }
      });
    });
}
getData();
