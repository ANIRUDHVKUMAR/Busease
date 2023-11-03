//login page
var loginDetails = [
    {
      username: "user1",
      password: "password1"
    },
    {
      username: "user2",
      password: "password2"
    }
  ];
  function signup() {
    window.location.href="signup.html";
  }

  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (var i = 0; i < loginDetails.length; i++) {
      if (username === loginDetails[i].username && password === loginDetails[i].password) {
        console.log("Login successful");
        window.location.href = "index.html";
        return;
      }
    }

    console.log("Invalid username or password");
    alert("Invalid username or password");
}

// signup
Logindetails=[]
        var n=document.getElementById("name").value;
        var uname=document.getElementById("username").value;
        var pword=document.getElementById("username").value;
        detail={
            name:n,
            username: uname,
            password: pword,
        }
        Logindetails.push(detail);

//index