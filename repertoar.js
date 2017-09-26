$(document).ready(function(){ 
    $('#g').css('background', 'gold');
     $('#menu2').on('click', kibe);
          var timeout  
            , current = 0  
            , container = $('#slideshow')  
            , slides = container.find('.slide');  
      
          /**  
           * Indul a slideshow.  
           */  
          function start() {  
            timeout = window.setTimeout(showNext, 3000);  
          }  
      
          /**  
           * Következő kép mutatása.  
           */  
          function showNext() {  
            slides.eq(current).removeClass('active');  
            current += 1;  
            if (current >= slides.length) {  
              current = 0;  
            }  
            slides.eq(current).addClass('active');  
            start();  
          }  
      
          start();    
});


function kibe()
{
    if ($('#gombtarolo').is(':hidden'))
    {
        $('#gombtarolo').slideDown();
    } else
    {
        $('#gombtarolo').slideUp();
    }
}