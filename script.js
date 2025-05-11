document.addEventListener("DOMContentLoaded", function() {

  function checkRiddle() {
    const answer = document.getElementById("riddleInput").value.trim().toLowerCase();
    const result = document.getElementById("riddleResult");
    if (answer === "sombrilla" || answer === "paraguas") {
      result.textContent = "✅ ¡Correcto!";
      result.style.color = "lime";
    } else {
      result.textContent = "❌ Intenta de nuevo...";
      result.style.color = "red";
    }
  }

  
  let progress = 0;
  const progressBar = document.getElementById("progress");
  const progressInterval = setInterval(() => {
    if (progress < 50) {
      progress++;
      progressBar.style.width = `${progress}%`;
    } else {
      clearInterval(progressInterval);
    }
  }, 50);

 
  function openContactForm() {
    document.getElementById('contactForm').style.display = 'block';
  }

  function closeContactForm() {
    document.getElementById('contactForm').style.display = 'none';
  }

  function submitMessage() {
    alert('Mensaje enviado');
    closeContactForm();
  }

  
  window.checkRiddle = checkRiddle;
  window.openContactForm = openContactForm;
  window.closeContactForm = closeContactForm;
  window.submitMessage = submitMessage;
});
