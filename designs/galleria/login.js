
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  const auth = firebase.auth();
  
  function signup()
  {
	  var nex_id = document.getElementById("nex_id");
	  var email = document.getElementById("email");
	  var pass = document.getElementById("pass");
	  
	  const promise = auth.createUserWithEmailAndPassword(email.value, pass.value)
	  promise.catch(e => alert(e.message));
	  
	  alert("signed up")
  }
  
  function signin()
  {
	  var nex_id = document.getElementById("nex_id");
	  var email = document.getElementById("email");
	  var pass = document.getElementById("pass");
	  
	  const promise = auth.signInWithEmailAndPassword(email.value, pass.value).then(cred => {
      window.location = 'index.html';
    })
	  promise.catch(e => alert(e.message));
	  alert("signed in")
  }
  
   function signout()
  {
	  auth.signOut();
	  alert("signed out")
  }
  
  firebase.auth().onAuthStateChanged(user => {
		if(user) {
			window.location = 'index.html';
				}
	});