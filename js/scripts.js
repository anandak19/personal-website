function submitForm() {
  const namePattern = /^[a-zA-Z]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern =
    /^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4}/;

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Validation checks
  if (!namePattern.test(name)) {
    alert("Enter a valid name"); // Keep inputs if validation fails
    return; // Stop further execution
  }
  if (!emailPattern.test(email)) {
    alert("Enter a valid email address");
    return;
  }
  if (!phonePattern.test(phone) || phone.length > 13 || phone.length < 10) {
    alert("Enter a valid mobile number");
    return;
  }

  const params = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };

  const serviceId = "service_44xobqm";
  const templateId = "template_sn966lm";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = '';
      document.getElementById("email").value = '';
      document.getElementById("phone").value = '';
      document.getElementById("message").value = '';
      alert("Your response is submitted");
    })
    .catch((err) => console.log(err));
}
