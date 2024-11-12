function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value
    };

    // Google Apps Script Web App URL (replace with your Web App URL)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbwJrLJEBiinw2HUDfkQC0TpQ3l7SgkgGqTNhoTiL2D6zxgsjs5cQQiRCq6bg8vtPR6qKw/exec"; // Paste your URL here

    // Send form data to Google Apps Script using fetch
    fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        alert("Form submitted successfully!");
      } else {
        alert("Error: " + data.message);
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Failed to submit form.");
    });
  }