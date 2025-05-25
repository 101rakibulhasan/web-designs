
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    //// FIREBASE CONFIG ////

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  const auth = firebase.auth();
  
  window.onload = function() {
		createImage();
	};
  
  function createImage() {
		var x = document.createElement("IMG");
		x.setAttribute("src", "img_pulpit.jpg");
		document.getElementById("column_one").appendChild(x);
	}
  
   function signout()
	{
		auth.signOut();
		window.location = 'login.html';
	}
	
	