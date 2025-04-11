//////////////// Initializing Firebase //////////////////////////////////////////
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  import { getAuth, 
     GoogleAuthProvider,
   } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js'
  import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js'

  const firebaseConfig = {
    apiKey: "AIzaSyAaHL7E4M-ZA1Y2lsiNy6ZubsqJCBmEgow",
    authDomain: "registration-form-for-hakathon.firebaseapp.com",
    projectId: "registration-form-for-hakathon",
    storageBucket: "registration-form-for-hakathon.firebasestorage.app",
    messagingSenderId: "166405265064",
    appId: "1:166405265064:web:1054c7df4de0256bc3949d",
    measurementId: "G-VWPK7VF5M3"
  };



  ////////////////////////////// Initialize Firebase variables //////////////////////////
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();



 /////////////////////////// Export Firebase Function's keyWords ///////////////////////////////////
  export{
    auth,
    db,
    provider,
    GoogleAuthProvider,
  }

  ///////////// now it's connected to firebase ///////////////
        /////////////////// BUT ////////////////////////
  //////////// i hsvr to connect it with SupaBAse ////////////////

