let signupBtn = document.getElementById("signupBtn");
let signupTeacherIDInput = document.getElementById("signupTeacherID");

let signupNameInput = document.getElementById("signupName");
let signupClassInput = document.getElementById("signupClass");
let signupPhoneInput = document.getElementById("signupPhone");

let students = [];


// Check if students its empty
if (localStorage.getItem("students") != null) {
    teachers = JSON.parse(localStorage.getItem("students"));
}


// Concat new student to list of student
allStudents = students.concat(JSON.parse(localStorage.getItem("students")));
if (localStorage.getItem("students") != null) {
    students = allStudents ;
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

// Concat new student to list of student
allStudents = students.concat(JSON.parse(localStorage.getItem("students")));
if (localStorage.getItem("students") != null) {
    students = allStudents ;
}

if (document.getElementById('studentTable')){
    // Add titles to students table
    document.getElementById('studentTable').innerHTML +=

        '  <thead class="thead-dark"><tr>' +
        '       <td>Name</td>\n' +
        '       <td>class</td>\n' +
        '       <td>phone</td>\n' +
        '    </tr></thead>';

    Object.keys(teachers).forEach(function(key) {
        if (teachers[key]['teacherID'].includes(signupTeacherIDInput.value)) {
            document.getElementById('studentTable').innerHTML +=  '<tr>\n' +
                '       <td>'+teachers[key]['name']+'</td>\n' +
                '       <td>'+teachers[key]['class']+'</td>\n' +
                '       <td>'+teachers[key]['phone']+'</td>\n' +
                '    </tr>';
        }
    });
}


function clearForm() {
    signupNameInput.value = "";
    signupPhoneInput.value = "";
    signupClassInput.value = "";
}


if (signupBtn){
    signupBtn.addEventListener("click", function () {
        signUp();
    });
}

