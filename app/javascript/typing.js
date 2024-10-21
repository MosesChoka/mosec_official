document.addEventListener('DOMContentLoaded', function () {
  const element = document.getElementById("typed-strings");

  // Store the raw text and span content separately
  const textBeforeSpan = "Our ";
  const spanText = "Services";
  const speed = 100; // Typing speed in milliseconds

  let typingComplete = false;

  function typeWriter() {
    let i = 0;
    element.innerHTML = ''; // Clear the text before starting typing

    function typing() {
      if (i < textBeforeSpan.length) {
        // Type the text outside the span
        element.innerHTML = textBeforeSpan.slice(0, i + 1);
        i++;
        setTimeout(typing, speed);
      } else if (i < textBeforeSpan.length + spanText.length) {
        // Add the span tag and type its content
        const spanContent = `<span class="text-blue-500">${spanText.slice(0, i - textBeforeSpan.length + 1)}</span>`;
        element.innerHTML = textBeforeSpan + spanContent;
        i++;
        setTimeout(typing, speed);
      } else {
        typingComplete = true;
      }
    }

    typing();
  }

  // IntersectionObserver to detect when the h1 is in the viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // When the h1 is in view and typing isn't completed, trigger the typing effect
        typeWriter();
      }
    });
  });

  // Observe the h1 element directly
  observer.observe(element);
});