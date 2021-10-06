var firebaseConfig = {
  apiKey: "AIzaSyDKoSdqmLSx7jnB8-vIkqK6cOcj0omDhMM",
  authDomain: "kwitter-59e4d.firebaseapp.com",
  databaseURL: "https://kwitter-59e4d-default-rtdb.firebaseio.com",
  projectId: "kwitter-59e4d",
  storageBucket: "kwitter-59e4d.appspot.com",
  messagingSenderId: "513134310298",
  appId: "1:513134310298:web:bf9aeb2ae1d939e2ba4023"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
  console.log(user_name);

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
