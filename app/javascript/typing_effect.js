document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById("typing-effect");
  
    // Store the raw text and span content separately
    const textBeforeSpan = "Why Choose ";
    const spanText = "Us ?";
    const speed = 100; // Typing speed in milliseconds
  
    function typeWriter() {
      let i = 0;
      element.innerHTML = ''; // Clear the text
  
      function typing() {
        if (i < textBeforeSpan.length) {
          // Type the text outside the span
          element.innerHTML = textBeforeSpan.slice(0, i + 1);
          i++;
          setTimeout(typing, speed);
        } else if (i < textBeforeSpan.length + spanText.length) {
          // Add the span tag and type its content
          const spanContent = `<span class="text-black">${spanText.slice(0, i - textBeforeSpan.length + 1)}</span>`;
          element.innerHTML = textBeforeSpan + spanContent;
          i++;
          setTimeout(typing, speed);
        }
      }
  
      typing();
    }
  
    // IntersectionObserver to detect when the element is in the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the section is in view, trigger the typing effect
          typeWriter();
        }
      });
    });
  
    // Observe the typing-effect element
    observer.observe(element);
  });
  