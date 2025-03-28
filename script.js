//  tutorial 2 week 7 AdvancedFormValidation-->
//  when the form is loaded run the script-->
$(document).ready(function () {
    // function which will validate name-->
    function validateName() {
        let name = $("#name").val().trim();
        // check if field is blank -->
        if (name === "") {
            // show following error messae if left blank -->
            $("#nameError").text("Name is required").show();
            $("#name").addClass("invalid");
            return false;
        } else {
            // hide error if field is filled in -->
            $("#nameError").hide();
            $("#name").removeClass("invalid");
            return true;
            //  if validation is passed return true-->
        }
    }
    function validateEmail() {
        // function which will validate email-->
        let email = $("#email").val().trim();
        // email must match correct pattern etc @gmail.com-->
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if it doesn't match show error message-->
        if (!emailPattern.test(email)) {
            $("#emailError").text("Please Enter a valid email").show();
            $("#email").addClass("invalid");
            return false;
        } else {
            // hide error if field is filled in correctly-->
            $("#emailError").hide();
            $("#email").removeClass("invalid");
            return true;
            //  if validation is passed return true-->
        }
    }
    function validatePhone() {
        let phone = $("#phone").val().trim();
        // phone number must be 10 digits long -->
        const phonePattern = /^[0-9]{10}$/;
        // if it isn't 10 digits show error message-->
        if (!phonePattern.test(phone)) {
            $("#phoneError").text("Please Enter a valid 10-digit phone number").show();
            $("#phone").addClass("invalid");
            return false;
        } else {
            // hide error if field is filled in correctly-->
            $("#phoneError").hide();
            $("#phone").removeClass("invalid");
            return true;
            //  if validation is passed return true-->
        }
    }
    // as user types validation is done in the background
    $("#name").on("input", validateName);
    $("#email").on("input", validateEmail);
    $("#phone").on("input", validatePhone);
    // it will enable/disable sumbit button depending on if form is illed in correctly
    $("input").on("input", function () {
        // if all fields above are filled correctly enable summit button-->
        if (validateName() && validateEmail() && validatePhone()) {
            // disable summit button-->
            $("button").prop("disabled", false);
        } else {
            // enable summit button-->
            $("button").prop("disabled", true);
        }
    });
    $("#registrationForm").submit(function (event) {
        event.preventDefault();
        // Prevents form from submitting by default
        if (validateName() && validateEmail() && validatePhone()) {
            // If fields are filled correctly, allows for submission of form and prompts success message-->
            alert("Form submitted successfully, We aim to reply within 4 working days!");
            $(this)[0].reset();
            // reset the form after submission so it is blank 
            $("button").prop("disabled", true);
            // Disables submit button after submission 
        }
    });
});

// function to filter cars https://chatgpt.com/ -->
function filterSelection(filter) {
    // gets all items with 'filterdiv' -->
    let cars = document.getElementsByClassName("filterDiv");

    for (let i = 0; i < cars.length; i++) {
        // Removes the 'show' class from all items 
        cars[i].classList.remove("show");
        // Adds 'show' class to the items that match the filter
        if (filter === "all" || cars[i].classList.contains(filter)) {
            cars[i].classList.add("show");
        }
    }

    // Updates button status
    let buttons = document.querySelectorAll("#myBtnContainer .btn");
    // Removes 'active' class from all buttons
    buttons.forEach(button => button.classList.remove("active"));
    // Adds 'active' class to the clicked button
    document.querySelector(`button[onclick="filterSelection('${filter}')"]`).classList.add("active");
}

//when page is opened show all cars by default  
document.addEventListener("DOMContentLoaded", function () {
    filterSelection("all");
});