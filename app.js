document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
    function handleSubmit(e) {
      e.preventDefault();
      const iemail = document.getElementById("email");
      const email = iemail.value;
  
      if (isValidEmail(email)) {
        document.getElementById("sub").style.display = "none";
        document.getElementById("diss").style.display = "block";
        document.getElementById("op").innerHTML= email;
      } else {
        iemail.style.borderColor = "red";
        document.getElementsByClassName("submit")[0].style.backgroundColor = "black";
        document.getElementsByClassName("submit")[0].style.color = "white";
      }
    }
    form.addEventListener("submit", handleSubmit);
  });
  function fun(){
    let sub=document.getElementById("sub");
    let diss=document.getElementById("diss");
    if(sub.style.display==="none"){
        sub.style.display="block";
        diss.style.display="none";
    }
  }
  
