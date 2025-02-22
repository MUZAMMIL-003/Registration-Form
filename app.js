import {
    onAuthStateChanged,
    signOut,
} from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js'

import {
    auth, db,
} from "./firebaseConfig.js";

let User = localStorage.getItem("user");
if (!User) {
  console.log("no");
  window.location.replace("./simple sign up login/registration page/register.html");
  
}
console.log(User);

let userName = localStorage.getItem("userName");
console.log(userName)

////checking user state
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        localStorage.setItem("user", JSON.stringify(uid))
        let username = user.displayName;
        console.log(username)
        localStorage.setItem("userName", JSON.stringify(username))
        console.log(user)
        let shwName = document.getElementById("shwName");
        shwName.innerHTML = username;
        let userEmail =user.email;
         let shwEmail = document.getElementById("shwEmail");
         shwEmail.innerHTML = userEmail;
        console.log("user-Id =>", uid)
        console.log("User is signed in")
        // ...
    } else {
        // User is signed out
        console.log("User is signed out")
        // ...
    }
})







//// sign out function
let signOutBttn = () => {

    signOut(auth).then(() => {
        console.log("log out successfully");
        localStorage.removeItem("user");
        window.location.assign("./simple sign up login/login.html");
    }).catch((error) => {
        console.log(error.message);
    });

}

let signOutButton = document.getElementById("signOutBttn");
signOutButton.addEventListener("click", signOutBttn);









