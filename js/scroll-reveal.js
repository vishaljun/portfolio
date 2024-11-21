// delay Skewed reveal from the left
ScrollReveal().reveal('.delay-skew-left-reveal', {
    distance: '50px',
    origin: 'left',
    duration: 1500,
    opacity: 0,
    skew: { x: 10, y: 0 },
    delay: 3100,
    once: true
});

// delay Skewed reveal from the right
ScrollReveal().reveal('.delay-skew-right-reveal', {
    distance: '50px',
    origin: 'right',
    duration: 1500,
    opacity: 0,
    skew: { x: -10, y: 0 },
    delay: 3100,
    once: true
});

// delay Reveal from the right
ScrollReveal().reveal('.delay-right-reveal', {
    distance: '80px',
    origin: 'right',
    duration: 1000,
    interval: 300,
    scale: 0.9,
    delay: 3100,
    once: true
});

// Reveal from the top
ScrollReveal().reveal('.top-reveal', {
    distance: '60px',
    origin: 'top',
    duration: 1200,
    opacity: 0,
    once: true
});

// Skewed reveal from the left
ScrollReveal().reveal('.skew-left-reveal', {
    distance: '50px',
    origin: 'left',
    duration: 1500,
    opacity: 0,
    skew: { x: 10, y: 0 },
    delay: 100,
    once: true
});

// Reveal from the right
ScrollReveal().reveal('.right-reveal', {
    distance: '80px',
    origin: 'right',
    duration: 1000,
    interval: 300,
    scale: 0.9,
    once: true
});

// Skewed reveal from the right
ScrollReveal().reveal('.skew-right-reveal', {
    distance: '50px',
    origin: 'right',
    duration: 1500,
    opacity: 0,
    skew: { x: -10, y: 0 },
    delay: 100,
    once: true
});

// Reveal from the left
ScrollReveal().reveal('.left-reveal', {
    distance: '40px',
    origin: 'left',
    duration: 1200,
    delay: 200,
    once: true
});


// Reveal from the bottom
ScrollReveal().reveal('.bottom-reveal', {
    distance: '60px',
    origin: 'bottom',
    duration: 1000,
    opacity: 0,
    delay: 150,
    once: true
});

// Fade-in with zoom
ScrollReveal().reveal('.zoom-reveal', {
    scale: 0.85,
    duration: 1200,
    opacity: 0,
    easing: 'ease-in-out',
    delay: 200,
    once: true
});

// Rotate in from the left
ScrollReveal().reveal('.rotate-left-reveal', {
    distance: '0px',
    origin: 'left',
    duration: 1300,
    opacity: 0,
    rotate: { x: 0, y: 80, z: 0 },
    delay: 250,
    once: true
});

// Rotate in from the right
ScrollReveal().reveal('.rotate-right-reveal', {
    distance: '0px',
    origin: 'right',
    duration: 1300,
    opacity: 0,
    rotate: { x: 0, y: -80, z: 0 },
    delay: 250,
    once: true
});

// Reveal with a flip
ScrollReveal().reveal('.flip-reveal', {
    distance: '0px',
    duration: 1000,
    opacity: 0,
    rotate: { x: 90, y: 0, z: 0 },
    easing: 'ease-in-out',
    once: true
});

// Reveal with a subtle bounce effect
ScrollReveal().reveal('.bounce-reveal', {
    distance: '20px',
    origin: 'bottom',
    duration: 1000,
    opacity: 0,
    easing: 'cubic-bezier(0.5, 1.5, 0.5, 1)',
    delay: 100,
    once: true
});

// Reveal with fade-in and slide-up
ScrollReveal().reveal('.fade-slide-up-reveal', {
    distance: '30px',
    origin: 'bottom',
    duration: 1200,
    opacity: 0,
    delay: 200,
    easing: 'ease-in-out',
    once: true
});



// Slide in from the top
ScrollReveal().reveal('.slide-in-top', {
    distance: '80px',
    origin: 'top',
    duration: 1000,
    opacity: 0,
    easing: 'ease-in-out',
    delay: 100,
    once: true
});

// Slide in from the bottom
ScrollReveal().reveal('.slide-in-bottom', {
    distance: '80px',
    origin: 'bottom',
    duration: 1000,
    opacity: 0,
    easing: 'ease-in-out',
    delay: 150,
    once: true
});

// Slide in from the left with bounce
ScrollReveal().reveal('.slide-in-left-bounce', {
    distance: '100px',
    origin: 'left',
    duration: 1200,
    opacity: 0,
    easing: 'cubic-bezier(0.5, 1.5, 0.5, 1)',
    delay: 200,
    once: true
});

// Slide in from the right with delay
ScrollReveal().reveal('.slide-in-right-delayed', {
    distance: '100px',
    origin: 'right',
    duration: 1300,
    opacity: 0,
    easing: 'ease-in-out',
    delay: 300,
    once: true
});

// Slide in from the bottom with scaling
ScrollReveal().reveal('.slide-in-bottom-scale', {
    distance: '60px',
    origin: 'bottom',
    duration: 1200,
    opacity: 0,
    scale: 0.9,
    easing: 'ease-out',
    delay: 150,
    once: true
});

// Slide in from the top with slight rotation
ScrollReveal().reveal('.slide-in-top-rotate', {
    distance: '60px',
    origin: 'top',
    duration: 1200,
    opacity: 0,
    rotate: { x: 0, y: 0, z: 10 },
    easing: 'ease-in-out',
    delay: 100,
    once: true
});

// Slide in diagonally from top-left
ScrollReveal().reveal('.slide-in-diagonal-top-left', {
    distance: '80px',
    origin: 'top',
    duration: 1200,
    opacity: 0,
    easing: 'ease-in-out',
    delay: 200,
    rotate: { x: 0, y: 0, z: -5 },
    skew: { x: -10, y: 0 },
    once: true
});

// Slide in diagonally from bottom-right
ScrollReveal().reveal('.slide-in-diagonal-bottom-right', {
    distance: '80px',
    origin: 'bottom',
    duration: 1200,
    opacity: 0,
    easing: 'ease-in-out',
    delay: 250,
    rotate: { x: 0, y: 0, z: 5 },
    skew: { x: 10, y: 0 },
    once: true
});

// Fade in from the left
ScrollReveal().reveal('.fade-left-reveal', {
    distance: '60px',
    origin: 'left',
    duration: 1000,
    opacity: 0,
    easing: 'ease-in-out',
    delay: 150,
    once: true
});

// Fade in from the right
ScrollReveal().reveal('.fade-right-reveal', {
    distance: '60px',
    origin: 'right',
    duration: 1000,
    opacity: 0,
    easing: 'ease-in-out',
    delay: 150,
    once: true
});

// Slide in from the left with scale
ScrollReveal().reveal('.slide-in-left-scale', {
    distance: '80px',
    origin: 'left',
    duration: 1200,
    opacity: 0,
    scale: 0.9,
    easing: 'ease-in-out',
    delay: 200,
    once: true
});

// Slide in from the right with zoom effect
ScrollReveal().reveal('.slide-in-right-zoom', {
    distance: '100px',
    origin: 'right',
    duration: 1000,
    opacity: 0,
    scale: 0.85,
    easing: 'ease-in-out',
    delay: 250,
    once: true
});

// Slide in from the left with zoom effect
ScrollReveal().reveal('.slide-in-left-zoom', {
    distance: '100px',
    origin: 'left',
    duration: 1200,
    opacity: 0,
    scale: 0.85,
    easing: 'ease-in-out',
    delay: 250,
    once: true
});

// Fade and slide in from top-left
ScrollReveal().reveal('.fade-slide-in-top-left', {
    distance: '60px',
    origin: 'top',
    duration: 1200,
    opacity: 0,
    easing: 'ease-in-out',
    delay: 200,
    rotate: { x: 0, y: 0, z: 10 },
    once: true
});

// Fade and slide in from bottom-right with scale
ScrollReveal().reveal('.fade-slide-in-bottom-right-scale', {
    distance: '60px',
    origin: 'bottom',
    duration: 1200,
    opacity: 0,
    scale: 0.9,
    easing: 'ease-in-out',
    delay: 250,
    once: true
});

// Slide in from the bottom with slight rotation
ScrollReveal().reveal('.slide-in-bottom-rotate', {
    distance: '60px',
    origin: 'bottom',
    duration: 1200,
    opacity: 0,
    rotate: { x: 0, y: 0, z: 10 },
    easing: 'ease-in-out',
    delay: 150,
    once: true
});

// Slide in from the left with opacity fade
ScrollReveal().reveal('.slide-in-left-fade', {
    distance: '100px',
    origin: 'left',
    duration: 1200,
    opacity: 0,
    easing: 'ease-in-out',
    delay: 200,
    once: true
});

// Slide in from the right with bounce
ScrollReveal().reveal('.slide-in-right-bounce', {
    distance: '80px',
    origin: 'right',
    duration: 1200,
    opacity: 0,
    easing: 'cubic-bezier(0.5, 1.5, 0.5, 1)',
    delay: 250,
    once: true
});

// Diagonal slide-in from bottom-left with fade
ScrollReveal().reveal('.slide-in-diagonal-bottom-left-fade', {
    distance: '80px',
    origin: 'bottom',
    duration: 1200,
    opacity: 0,
    easing: 'ease-in-out',
    delay: 200,
    rotate: { x: 0, y: 0, z: -5 },
    skew: { x: -10, y: 0 },
    once: true
});
