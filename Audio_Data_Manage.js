import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyC_i9oLLek-pVzabC7dZjOp7vH-Go8l1VA",
    authDomain: "hearhere-3ff05.firebaseapp.com",
    databaseURL: "https://hearhere-3ff05-default-rtdb.firebaseio.com",
    projectId: "hearhere-3ff05",
    storageBucket: "hearhere-3ff05.appspot.com",
    messagingSenderId: "846889701102",
    appId: "1:846889701102:web:9551d80c8c599f5945edff",
    measurementId: "G-TK14LVK21M"
  };

  firebase.initializeApp(firebaseConfig);

//Takes the mark upload form 
const form = document.getElementById("markUpload");


//Submit the mark + store mark info into variables
form.addEventListener("submit", function(event){
  event.preventDefault();
  // document.write("done!");
  //Sets the variables for storing
  const markName = document.getElementById("markName").value;
  const audioFile  = document.getElementById("audioFile").value;
  const markDescription = document.getElementById("markDescription").value;

//Save data to Firebase
  firebase.database().ref("markUpload").push({
  markName:markName,
  markDescription: markDescription,
  audioFile: audioFile
  });
});