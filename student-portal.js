 function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const strengthMessage = document.getElementById("strengthMessage");

  let strength = "Weak";
  let color = "red";

  if (password.length > 8 && /[A-Z]/.test(password) && /[\d]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
    strength = "Strong";
    color = "green";
  } else if (password.length >= 6) {
    strength = "Medium";
    color = "orange";
  }

  strengthMessage.textContent = `Password strength: ${strength}`;
  strengthMessage.style.color = color;
}


  function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;

      if (position < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);


