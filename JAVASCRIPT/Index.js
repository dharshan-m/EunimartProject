loginpage.addEventListener("submit", (event) => {
  event.preventDefault();

  const Username = document.getElementById("Username").value.trim();
  const PhoneNumber = document.getElementById("PhoneNubmer").value.trim();
  const Email = document.getElementById("email").value.trim();
  const Password = document.getElementById("password").value.trim();

  const data = {Username, PhoneNumber, Email, Password};
  localStorage.setItem("userData", JSON.stringify(data));

});
