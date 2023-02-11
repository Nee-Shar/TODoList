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


let con=document.getElementById("con");

let date=document.getElementById("date");
let heading=document.getElementById("se");

let x=document.getElementById("final");
let ed=document.getElementById("edit");

function removeSpaces(string) {
  return string.split(' ').join('');
 }


async function GetADocument(){
let m=0;
 
    var ref=doc(db,"Notes",removeSpaces(heading.value));
  console.log(heading.value);





  const q = query(collection(db, "Notes"), where("Heading", "==", removeSpaces(heading.value)));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    m=1;
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    x.value=doc.data().Heading;
    con.value=doc.data().Content;
    date.value=doc.data().Day+"/"+doc.data().Month+"/"+doc.data().Year;
    document.getElementById("cen").style.display="";














    

  });



if(m==0){
alert("No Record Found");
location.reload();
}


  // const docSnap=await getDoc(ref);
  
  // if(docSnap.exists()){
  //  let headi=docSnap.data().Heading;
  //   let con=docSnap.data().Content;
  //   let dat =docSnap.data().Day;
  //   var x = document.createElement("LI");
  //   var t = document.createTextNode(con);
  //   x.appendChild(t);
  //   document.getElementById("myList").appendChild(x);

  // }
  // else {
  //   alert("No such Doc");
  // }
  
  
  
  
}





async function editRecord(){
    let d=new Date();
    var ref=doc(db,"Notes",removeSpaces(heading.value));
  const docRef= await updateDoc(ref,{
    Heading: removeSpaces(heading.value),
      Content: con.value,
      Day: d.getDate(),
      Month: d.getMonth()+1,
      Year:d.getFullYear()
       
  })
  
  
  
  .then(()=>{
  alert("Updated Successfully");
    //M.toast({html: 'Updated Successfully New Balance is ' + z,classes:"green",outDuration:50})
  })
  .catch((error)=>{
  
  alert("error");
  });
  
  
  
  
  
  
  
  
  
  location.reload();
  
  
  
  }
  
  











head.addEventListener("click",GetADocument);
ed.addEventListener("click",editRecord);