let loginBtn = document.getElementById("loginBtn");
let signupAnchor = document.getElementById("signupAnchor");



// A list of teachers
let constant_teachers = [
  {
    "ID": "038152337",
    "name": "Ofir Levi",
  },
  {
    "ID": "038152336",
    "name": "Nir Goldman",
  }
];


allTeachers = constant_teachers.concat(JSON.parse(localStorage.getItem("teachers")));
if (localStorage.getItem("teachers") != null) {
  teachers = allTeachers ;
}

function signIn() {
  let loginID = loginIDInput.value;
  let loginName = loginNameInput.value;

  if (loginID.value === "" || loginName.value === "") {
    swal({
      text: "Please fill in all fields",
    });
    return;
  }

  if (isCorrectIDAndName(loginID, loginName)) {
    window.location.href = "home.html";
  } else {
    swal({
      text: "Incorrect ID or name",
    });
  }
}

function isCorrectIDAndName(id, name) {
  for (let i = 0; i < teachers.length; i++) {
    if (teachers[i].ID === id && teachers[i].name === name) {
      localStorage.setItem("teacherName", teachers[i].name);
      localStorage.setItem("teacherID", teachers[i].ID);
      return true;
    }
  }
  return false;
}

loginBtn.addEventListener("click", function () {
  signIn();
});

signupAnchor.addEventListener("click", function () {
  window.location.href = "signup.html";
});
