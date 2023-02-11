import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js';

import { getFirestore,collection,setDoc,doc,addDoc,getDoc,getDocs,updateDoc,deleteDoc, query, where} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js';





const firebaseConfig = {
  apiKey: "AIzaSyCHKb0nsEgWASMydZNDWbCqtIA_MtoxZCQ",
  authDomain: "todolist-e939a.firebaseapp.com",
  projectId: "todolist-e939a",
  storageBucket: "todolist-e939a.appspot.com",
  messagingSenderId: "520999837192",
  appId: "1:520999837192:web:9bdcecc6623dbbece13bbd",
  measurementId: "G-SQBNVCWMMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

let head=document.getElementById("se");
let sub=document.getElementById("head");
let box=document.getElementById("conbox");
function removeSpaces(string) {
    return string.split(' ').join('');
   }
  


   function myFunction() {
    let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
      text = "You pressed OK!";
    } else {
      text = "You canceled!";
    }
    document.getElementById("demo").innerHTML = text;
  }







async function deleteDocument(){


// box.style.display="";

    var ref=doc(db,"Notes",removeSpaces(head.value));
  
  const docSnap=await getDoc(ref);
  
  if(!docSnap.exists()){
  alert("No such Doc Exits 🥲");
  location.reload();
  return;
  }

  let text = "Are You Sure to delete !\nEither OK or Cancel.";
  if (confirm(text) == true) {
    
  await deleteDoc(ref).
  then(()=>{






  alert("Deleted Successfully 😊");
  
  location. reload()
  })
  .catch((error)=>{
  alert("Not Deleted 🥲 "+error);
  
  location. reload()
  });

  } else {
    
  
    alert("Not Deleted");
  }


  

  }
  
  
  
  
  
  sub.addEventListener("click",deleteDocument);
  

  







  