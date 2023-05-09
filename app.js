function validacia() {

    var fullname = document.getElementById("email");
    var email = document.getElementById("password");
   
  
    if (fullname.value == "" || email.length == 0) {
        window.alert("შეიყვანეთ ელ.ფოსტა");
   
    } else if (email.value == "" || password.length == 0) {
        window.alert("შეიყვანეთ პაროლი");

    }
    document.getElementById("myForm").reset();
}
