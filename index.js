
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js';

import { getFirestore,collection,setDoc,doc,addDoc,getDoc,getDocs,updateDoc,deleteDoc, query, where} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js';

import { deleteUser,updateProfile,createUserWithEmailAndPassword,signOut,getAuth, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
// TODO: Replace the following with your app's Firebase project configuration





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
const auth = getAuth();


const provider = new GoogleAuthProvider();



















const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



















const signUpActutal=document.getElementById("ActSignUp");
const signInActual=document.getElementById("ActSignIn");
const signUpWithG=document.getElementById("signUpG");



signUpActutal.addEventListener("click",function(){


    var email=document.querySelectorAll("input")[1].value;
    var password=
   document.querySelectorAll("input")[2].value;
	var name=document.querySelectorAll("input")[0].value;
   
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
	    
        auth.currentUser.displayName=name;
        console.log(user);
      
      
    
       
    
    
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
    
      
        alert("Successfully Registred "+document.querySelectorAll("input")[0].value);
    // self.location="index.html";
   
  self.location="postindex.html";
    
    
        // ...
      })  
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        alert("Error");
        location.reload();
        // ..
      });
    
    });
    async function AddDocumentCustomId(){


  var email=document.querySelectorAll("input")[1].value;
  
  var name=document.querySelectorAll("input")[0].value;

const db = getFirestore(app);

  var ref=doc(db,"Users",email);
  const docRef= await setDoc(ref,{
    Email:email,
    Name:name,
    Image_URL:" "
  })
  
  
  
  .then(()=>{
  
  })
  .catch((error)=>{
      
          alert("Error"+error);
          
  
  location. reload()
  
  });
  
}

signUpActutal.addEventListener("click",AddDocumentCustomId);


    
    signUpWithG.addEventListener("click",function(){


        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
	     const user = result.user;
            console.log(token);
            // The signed-in user info.
 
            console.log(user);
		alert("Welcome "+user.displayName);
        self.location="postindex.html";
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            alert("Error");
            // ...
          });
        }
        );
        
        

        //LOGIN MODULE
signInActual.addEventListener("click",login);

async function login(){
  var email=document.querySelectorAll("input")[3].value;
  var password=document.querySelectorAll("input")[4].value;
console.log(email);

  // var email=document.getElementById("login").value;
  // var password=document.getElementById("login_password").value;
/// const 
//const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
	        alert("Welcome " +auth.currentUser.displayName);

//       console.log("LOGGED IN");
//       alert("Successfully LOGGED IN");
      //M.toast({html: 'Successfully Loged in',classes:"green rounded",outDuration:50})
  self.location="postindex.html";
      
  
  
  
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
      alert(errorCode,errorMessage)
      location.reload();
    });
  
  
  
  }
  







        //LOGIN MODULE

  //Forget PSSD
  //FORGET PSSWD MODULE
document.getElementById("forget").addEventListener("click",function(){

  var email=document.querySelectorAll("input")[3].value;



sendPasswordResetEmail(auth, email)
  .then(() => {
   // M.toast({html: 'Password reset email sent!',classes:"green",outDuration:50})
     alert("Password Reset Mail sent to  "+email);
     location.reload();
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   // M.toast({html:errorMessage,classes:"red rounded"})
   alert(errorMessage); 
   // ..
  });});


