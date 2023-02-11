import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js';

import { getFirestore,collection,setDoc,doc,addDoc,getDoc,updateDoc,deleteDoc,getDocs} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js';





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




let view=document.getElementById("view");
let viewList=document.querySelectorAll("li");

//GET ALL DATA 

// const querySnapshot = await getDocs(collection(db, "cities"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });

async function getalldocs(){
let x=0;
    const querySnapshot = await getDocs(collection(db, "Notes"));
querySnapshot.forEach((doc) => {
document.getElementById("Viewing").style.display="";
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  let day=String(doc.data().Day);
  let mon=String(doc.data().Month);
  let year=String(doc.data().Year);
 
viewList[x].innerHTML="Heading :  "+doc.data().Heading+" "+"<br>"+"Note is  : "+doc.data().Content+" "+"<br>"+"Written on  : " +day+" "+"/"+mon+" "+"/"+year+" ";
x++;

});




}

view.addEventListener("click",getalldocs);



// async function GetADocument(){


//     var ref=doc(db,"Users",adh.value);
  
//   const docSnap=await getDoc(ref);
  
//   if(docSnap.exists()){
//     name.value=docSnap.data().USER_NAME;
//     gname.value=docSnap.data().GUARDIAN_NAME;
//     phone.value=docSnap.data().Mobile_No;
//     age.value=docSnap.data().Age;
//     nat.value=docSnap.data().Nationlaity;
//     add.value=docSnap.data().Address;
//     balance.value=docSnap.data().Balance;
//     loantaken.value=docSnap.data().Loan_Taken;
  
//   }
//   else {
//     alert("No such Doc");
//   }
  
  

//   }