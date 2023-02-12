// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js';

import { getFirestore,collection,setDoc,doc,addDoc,getDoc,updateDoc,deleteDoc} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js';





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
let head=document.getElementById("heading");
let content=document.getElementById("note");

let write=document.getElementById("write");


let status=document.getElementById('status');


function removeSpaces(string) {
      return string.split(' ').join('');
     }
async function AddDocumentCustomId(){
   
    
    

        console.log(head.value);
    
        console.log(content.value);


        console.log(new Date());
let d=new Date();
      var ref=doc(db,"Notes",removeSpaces(head.value));
      const docRef= await setDoc(ref,{
      Heading: removeSpaces(head.value),
      Content: content.value,
      Day: d.getDate(),
      Month: d.getMonth()+1,
      Year:d.getFullYear()
      })
      
      
      
      .then(()=>{
        
console.log("written");  


document.querySelectorAll("input")[1].placeholder="Saved Successfully";



})
      .catch((error)=>{
        
            alert("Error"+error);
            
console.log("not written");
            
      
      
      });
    
   
   
    }
    
    
    
write.addEventListener("click",AddDocumentCustomId);







