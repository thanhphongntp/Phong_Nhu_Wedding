document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1); // Get the target section ID
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const targetPosition = targetElement.offsetTop; // Get the position of the target
      const startPosition = window.scrollY; // Current scroll position
      const distance = targetPosition - startPosition; // Distance to scroll
      const duration = 1500; // Duration in milliseconds (increase for slower scrolling)
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime; // Set the start time
        const timeElapsed = currentTime - startTime; // Time since animation started
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration); // Calculate new scroll position
        window.scrollTo(0, run); // Scroll to the new position
        if (timeElapsed < duration) requestAnimationFrame(animation); // Continue animation if not finished
      }

      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  });
});
