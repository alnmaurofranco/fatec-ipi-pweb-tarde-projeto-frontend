function validRegister() {
  event.preventDefault();

  if (firstname.value <= 3 || firstname.value === "") {
    document.getElementById("error").innerHTML =
      "O campo Nome precisa conter mais de 3 caracteres";
    document.getElementById("error").style.display = "block";
    firstname.focus();
    return false;
  } else {
    document.getElementById("error").innerHTML = "";
  }

  if (lastname.value <= 3 || lastname.value === "") {
    document.getElementById("isError-lastname").innerHTML =
      "O sobrenome precisa conter mais de 3 caracteres";
    document.getElementById("isError-lastname").style.color = "#e8211a";
    document.getElementById("isError-lastname").style.display = "block";
    lastname.focus();
    return false;
  } else {
    document.getElementById("isError-lastname").innerHTML = "";
  }

  if (
    email.value.length < 6 ||
    email.value.indexOf("@") <= 0 ||
    email.value.lastIndexOf(".") <= email.value.indexOf("@")
  ) {
    document.getElementById("isError-email").innerHTML =
      "Por favor preencha o campo com seu e-mail.";
    document.getElementById("isError-email").style.color = "#e8211a";
    document.getElementById("isError-email").style.display = "block";
    email.focus();
    return false;
  } else {
    document.getElementById("isError-email").innerHTML = "";
  }

  if (password.value <= 6 || password.value === "") {
    document.getElementById("isError-password").innerHTML =
      "Por favor preencha o campo senha com mais de 6 caracteres.";
    document.getElementById("isError-password").style.color = "#e8211a";
    document.getElementById("isError-password").style.display = "block";
    password.focus();
    return false;
  } else if (password.value !== confirmPassword.value) {
    document.getElementById("isError-passwordConfirm").innerHTML =
      "As senhas não são iguais.";
    document.getElementById("isError-passwordConfirm").style.color = "#e8211a";
    document.getElementById("isError-passwordConfirm").style.display = "block";
    passwordConfirm.focus();
    return false;
  } else {
    document.getElementById("isError-password").innerHTML = "";
    document.getElementById("isError-passwordConfirm").innerHTML = "";
  }

  alert("formulario enviado com sucesso!");
  console.log(
    firstname.value,
    lastname.value,
    email.value,
    password.value,
    confirmPassword.value
  );
}

function validForgotPassword() {
  event.preventDefault();

  if (
    email.value.length < 6 ||
    email.value.indexOf("@") <= 0 ||
    email.value.lastIndexOf(".") <= email.value.indexOf("@")
  ) {
    error.innerHTML = "Por favor preencha o campo com seu E-mail.";
    error.style.display = "block";
    email.focus();
    return false;
  } else {
    error.innerHTML = "";
  }

  msg.innerHTML = `
    <div class="alert alert-success">E-mail enviado com sucesso!</div>
  `;
}

function validacao() {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email == "") {
    document.getElementById("error").innerHTML =
      "Por favor preencha o campo com seu E-mail.";
    document.getElementById("error").style.display = "block";
    document.getElementById("email").focus();
    return false;
  } else {
    document.getElementById("error").innerHTML = "";
  }

  if (password == "") {
    console.log(password);
    document.getElementById("error-password").innerHTML =
      "Por favor preencha o campo com seu Senha.";
    document.getElementById("error-password").style.display = "block";
    document.getElementById("password").focus();
    return false;
  } else {
    document.getElementById("error-password").innerHTML = "";
  }
}
