$(document).ready(function() {
    smoothscroll.polyfill();
  
    let scrollPosition = 0;
    let targetPosition = 0;
    let currentVelocity = 0;
    let inertiaFactor = 0.5;
    let scrollSpeed = 0;
    let lastTime = 0;
  
    $(window).on('wheel', function (event) {
      event.preventDefault();
  
      const delta = event.originalEvent.deltaY;
      const currentTime = Date.now();
      const timeDelta = currentTime - lastTime;
  
      scrollSpeed = delta / timeDelta;
  
      targetPosition = scrollPosition + delta;
      targetPosition = Math.max(0, Math.min($(document).height() - $(window).height(), targetPosition));
  
      lastTime = currentTime;
  
      smoothScroll(targetPosition, scrollSpeed);
    });
  
    function smoothScroll(target, velocity) {
      let distance = target - scrollPosition;
      let startTime = null;
  
      function animateScroll(time) {
        if (!startTime) startTime = time;
  
        let timeElapsed = time - startTime;
        let easeInOut = 0.5 - Math.cos(Math.min(timeElapsed / 800, 1) * Math.PI) / 2;
  
        currentVelocity = velocity * (1 - easeInOut);
        scrollPosition += distance * easeInOut;
  
        if (Math.abs(currentVelocity) > 0.1) {
          $(window).scrollTop(scrollPosition);
          requestAnimationFrame(animateScroll);
        } else {
          $(window).scrollTop(target);
        }
      }
  
      requestAnimationFrame(animateScroll);
    }
  });
  