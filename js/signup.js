let signupBtn = document.getElementById("signupBtn");
let signupNameInput = document.getElementById("signupName");
let signupIDInput = document.getElementById("signupID");
let loginAnchor = document.getElementById("loginAnchor");

let teachers = [];

if (localStorage.getItem("teachers") != null) {
  teachers = JSON.parse(localStorage.getItem("teachers"));
}

function signUp() {
  let teacher = {
    ID: signupIDInput.value,
    name: signupNameInput.value,
  };

  if (
      signupIDInput.value === "" ||
      signupNameInput.value === ""
  ) {
    swal({
      text: "Please fill in all fields",
    });
    return;
  }

  if (
    isNewID(signupIDInput.value)
  ) {
    teachers.push(teacher);
    localStorage.setItem("teachers", JSON.stringify(teachers));
    clearForm();
    swal({
      text: "Sign up successful",
    });
  } else {
    swal({
      text: "Invalid ID or ID already in use",
    });
  }
}

signupBtn.addEventListener("click", function () {
  signUp();
});



//Checking duplication of ID to prevent duplicate user.
function isNewID(ID) {
  for (let i = 0; i < teachers.length; i++) {
    if (teachers[i].ID === ID) {
      return false;
    }
  }
  return true;
}

function clearForm() {
  signupNameInput.value = "";
  signupIDInput.value = "";
}

loginAnchor.addEventListener("click", function () {
  window.location.href = "index.html";
});
