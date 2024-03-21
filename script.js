document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form inputs
    const ageInput = document.getElementById("age").value;
    const nameInput = document.getElementById("name").value;

    // Validate inputs
    if (!ageInput || !nameInput) {
      alert("Please fill out all fields.");
      return;
    }

    // Create a promise
    const agePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (parseInt(ageInput) >= 18) {
          resolve(`Welcome, ${nameInput}. You can vote.`);
        } else {
          reject(`Oh sorry ${nameInput}. You aren't old enough.`);
        }
      }, 4000);
    });

    // Handle promise resolution/rejection
    agePromise
      .then((message) => {
        alert(message);
      })
      .catch((error) => {
        alert(error);
      });
  });
});
