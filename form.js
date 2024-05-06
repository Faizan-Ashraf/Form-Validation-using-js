document.addEventListener("DOMContentLoaded", () => {


    const f = document.querySelector("#form");
    const n = document.querySelector("#name");
    const age = document.querySelector("#age");
    const g = document.querySelectorAll(".g");
    const file = document.querySelector("#file");
    const e = document.querySelector("#email");
    const pass = document.querySelector("#password");

    f.addEventListener("submit", (event) => {
        event.preventDefault();
        let validate = true;

        //FOR NAME VALIDATION
        let n_error = document.querySelector("#name_error");
        if (n.value.trim() == "") {
            n_error.innerText = "Name Required";
            validate = false;

        }
        else if (!/^[A-Za-z\s]+$/.test(n.value)) {
            n_error.innerText = "Special Characters Not allowed";
            validate = false;
        }
        else {
            n_error.innerText = "";
            validate = true;
        }

        //Age Validation
        const age_error = document.querySelector("#age_error");
        if (age.value.trim() == "") {
            age_error.innerText = "Age Required";
            validate = false;
        }
        else if (age.value < 18) {
            age_error.innerText = "Age should be greater than 18";
            validate = false;
        }
        else {
            age_error.innerText = "";
            validate = true;
        }

        //GENDER VALIDATION
        const g_error = document.querySelector("#g_error");
        let genderCheck = false;
        g.forEach((radio) => {
            if (radio.checked && radio.value == 'M') {
                genderCheck = true;
            }
        });
        if (!genderCheck) {
            g_error.innerText = "Only Males Allowed";
            validate = false;
        }
        else {
            g_error.innerText = "";
            validate = true;
        }

        //File Validation
        const f_error = document.querySelector("#file_error");
        if (!/(\.png|\.jpeg)$/i.test(file.value)) {
            f_error.innerText = "Only png file allowed";
            validate = false;
        }
        else {
            f_error.innerText = "";
            validate = true;
        }

        //Email Validation
        const e_error = document.querySelector("#email-error");
        if (e.value.trim() == "") {
            e_error.innerText = "Email Required";
            validate = false;

        }
        else {
            e_error.innerText = "";

            validate = true;
        }

        //PASSORD VALIDATION
        const pass_error = document.querySelector("#pass_error");
        if (pass.value.trim() == "") {
            pass_error.innerText = "Password Required";
            validate = false;
        }
        else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W)/.test(pass.value)) {
            pass_error.innerText = "There should be one [A-Z],[a-z],[0-9] and special character";
            validate = false;
        }
        else {
            pass_error.innerText = "";
            validate = true;
        }


        //IF VALIDATE
        if (validate) {

            form.submit();
        }

    })




})
