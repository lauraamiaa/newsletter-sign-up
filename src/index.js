// client-side form validation
const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("email-error");
const submitButton = document.getElementById("submit-button");
const signupMessage = document.getElementById("signup-modal");
const successMessage = document.getElementById("success-modal");
const subscriptionEmail = document.getElementById("subscription-email");
const loadingSpinner = document.getElementById("loading-spinner");

signupForm.addEventListener("submit", function (e) {
  // prevent default browser behaviour
  e.preventDefault();

  // clear previous message
  const toggleClasses = [
    "invalid:border-red",
    "bg-red",
    "bg-opacity-15",
    "placeholder:text-red",
    "text-red",
  ];
  emailInput.classList.remove(...toggleClasses);
  errorMessage.classList.add("hidden");

  // check if the email field is empty or has valid email
  const emailAddress = emailInput.value;
  const isValidEmail = /^\S+@\S+$/g;
  if (
    emailAddress == null ||
    emailAddress == "" ||
    !isValidEmail.test(emailAddress)
  ) {
    emailInput.classList.add(...toggleClasses);
    errorMessage.classList.remove("hidden");
  } else {
    // if email valid, show loading state, then success message
    subscriptionEmail.textContent = " " + emailAddress;
    signupMessage.classList.add("hidden");
    submitButton.disabled = true;
    loadingSpinner.classList.remove("hidden");

    setTimeout(() => {
      loadingSpinner.classList.add("hidden");
      successMessage.classList.remove("hidden");

      // Clear the form
      emailInput.value = "";
      submitButton.disabled = false;
    }, 1000); // Simulating a 1-second loading time
  }
});

// close success message
const closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", function () {
  successMessage.classList.add("hidden");
  signupMessage.classList.remove("hidden");
});
