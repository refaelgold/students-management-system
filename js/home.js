let logOutBtn = document.getElementById("logOutBtn");
let welcomeUser = document.getElementById("userName");
let teacherName = localStorage.getItem("teacherName");


let teacherID = localStorage.getItem("teacherID");

//will run on student-form.html
if(document.getElementById("signupTeacherID")){
  document.getElementById("signupTeacherID").value = teacherID;
}

welcomeUser.innerHTML  =  teacherName+" Dashboard";

logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});



// Present students by teacher ID
console.log(localStorage.getItem("students"));