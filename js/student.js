let signupBtn = document.getElementById("signupBtn");
let signupTeacherIDInput = document.getElementById("signupTeacherID");

let signupNameInput = document.getElementById("signupName");
let signupClassInput = document.getElementById("signupClass");
let signupPhoneInput = document.getElementById("signupPhone");

let students = [];

if (localStorage.getItem("students") != null) {
    teachers = JSON.parse(localStorage.getItem("students"));
}

function signUp() {
    let student = {
        name: signupNameInput.value,
        class: signupClassInput.value,
        phone: signupPhoneInput.value,
        teacherID:signupTeacherIDInput.value,
    };

    if (
        signupNameInput.value === "" ||
        signupClassInput.value === "" ||
        signupPhoneInput.value === ""
    ) {
        swal({
            text: "Please fill in all fields",
        });
        return;
    }
    if (
        isNewPhone(signupPhoneInput.value)
    ) {
        students.push(student);
        localStorage.setItem("students", JSON.stringify(students));
        clearForm();
        swal({
            text: "Sign up successful",
        });
    } else {
        swal({
            text: "Invalid Phone or Phone already in use",
        });
    }
}

//Checking duplication of PhoneNumber to prevent duplicate user.
function isNewPhone(phone) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].phone === phone) {
            return false;
        }
    }
    return true;
}



// https://stackoverflow.com/questions/69079856/replace-a-variable-in-json-object
// function studentsList(){
//
// }


function clearForm() {
    signupNameInput.value = "";
    signupPhoneInput.value = "";
    signupClassInput.value = "";
}


signupBtn.addEventListener("click", function () {
    signUp();
});

