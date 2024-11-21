$(document).ready(function() {
    // Uppercase text transformation
    $(".head-nav-link, .item-title, .moving-content-title").each(function() {
        var upperText = $(this).text().toUpperCase(); 
        $(this).text(upperText);
    });

    // Handle preloader visibility and ScrollReveal initialization after content loads
    $(window).on('load', function() {
        $("#preloader").fadeOut(2000, function() {
            // This function runs after the preloader fade-out is complete
            const scrollReveal = ScrollReveal({
                reset: true,
                distance: '50px',
                duration: 800,
                container: document.querySelector('.scroll-container')
            });
        });
    });
    
    
    // ---Video Overlay---
    $('.about-ques-item').each(function() {
        const $videoOverlay = $(this).find('.about-ques-item-overlay');

        $(this).on('mouseover', function() {
            $videoOverlay.addClass('show');
        });

        $(this).on('mouseout', function() {
            $videoOverlay.removeClass('show');
        });
    });

    // ---Services Cards---
    $('.item').each(function() {
        const $item = $(this);
        
        $item.on('mousemove', function(e) {
            const positionPx = e.pageX - $item.offset().left;
            const positionX = (positionPx / $item.outerWidth()) * 100;

            const positionPy = e.pageY - $item.offset().top;
            const positionY = (positionPy / $item.outerHeight()) * 100;

            $item.css({
                '--rX': (0.5) * (50 - positionY) + 'deg',
                '--rY': -(0.5) * (50 - positionX) + 'deg'
            });
        });

        $item.on('mouseout', function() {
            $item.css({
                '--rX': '0deg',
                '--rY': '0deg'
            });
        });
    });
});



// document.addEventListener('mousemove', e=> {

//     let bubles = document.createElement('bubles');
//     let x = e.pageX;
//     let y = e.pageY;
//     bubles.style.left = x + "px";
//     bubles.style.top = y + "px";
//     let size = Math.random() * 50;
//     bubles.style.width = 1 + size + "px";
//     bubles.style.height = 1 + size + "px";
    
//     document.body.appendChild(bubles);
//     setTimeout(function() {
//       bubles.remove();
//     }, 1100);
//   });
  
  
  
  