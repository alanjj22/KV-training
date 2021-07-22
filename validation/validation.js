function validateForm() {
    var name = document.validate.name.value;
    var phone = document.validate.phNo.value;
    var email = document.validate.email.value;
    var regName = /[A-Za-z]+\s+[A-Za-z]$/;
    var regex_phn=/^(0|(\+91?))[0-9]{0,13}$/;
    var regex_email=/^[A-Za-z0-9.]+@keyvalue.systems$/;

    if(!regName.test(name)){
        alert('Invalid name given.');
    }else{
        alert('Valid name given.');
    }

    if(!regex_phn.test(phone)){
        alert('Invalid phone given.');
    }else{
        alert('Valid phone given.');
    }

    if(!regex_email.test(email)){
        alert('Invalid email given.');
    }else{
        alert('Valid email given.');
    }
  };