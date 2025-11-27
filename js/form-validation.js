document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("contactFeedback");

  if (!form || !feedback) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 2) return show("Please enter a valid name.");
    if (!email.includes("@") || !email.includes(".")) return show("Please enter a valid email address.");
    if (address.length < 5) return show("Please enter a valid address.");
    if (phone.length < 7) return show("Please enter a valid telephone number.");
    if (message.length < 5) return show("Please enter a message.");

    show("Thank you! Your message has been recorded (demo only).", true);
    form.reset();
  });

  function show(msg, success = false) {
    feedback.textContent = msg;
    feedback.style.borderColor = success ? "#2ecc71" : "#e74c3c";
  }
});
