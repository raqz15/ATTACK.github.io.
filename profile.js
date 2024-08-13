// Your Firebase configuration
console.log('JS connected')
const firebaseConfig = {
    apiKey: "AIzaSyCMXh-7s3o5lhCaiTz3T8_MIqeFs-LSzcw",
    authDomain: "anti-attack-ade2d.firebaseapp.com",
    databaseURL: "https://anti-attack-ade2d-default-rtdb.firebaseio.com",
    projectId: "anti-attack-ade2d",
    storageBucket: "anti-attack-ade2d.appspot.com",
    messagingSenderId: "864109322237",
    appId: "1:864109322237:web:a8ad5c0287a5f086440394"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Handle login form submission
  const loginForm = document.querySelector('#loginForm');
  document.getElementById('btn').onclick = function(){
    console.log("btn triggered")
  }
  loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      //const email = loginForm['email'].value;
      let email = document.getElementById('email').value;
      const password = loginForm['password'].value;
      console.log(email)
  
      firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
              // Signed in successfully
              const user = userCredential.user;
              console.log('User signed in:', user);
              // Redirect to the main page
              window.location.href = 'main.html'; // Change 'main.html' to your main page URL
          })
          .catch((error) => {
              // Handle errors
              const errorCode = error.code;
              const errorMessage = error.message;
              console.error('Login error:', errorMessage);
          });
  });
  
  // Handle sign-up form submission
  const signupForm = document.querySelector('#signupForm');
  signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = signupForm['email'].value;
      const password = signupForm['password'].value;
  
      firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
              // User signed up successfully
              const user = userCredential.user;
              console.log('User signed up:', user);
              // Redirect or perform other actions as needed
          })
          .catch((error) => {
              // Handle errors
              const errorCode = error.code;
              const errorMessage = error.message;
              console.error('Sign-up error:', errorMessage);
          });
  });
  