// //DESCRIZIONE:
// ricreo lo slider come fatto questa mattina (o da zero, o partendo dall’html [ref sempre mio repo su github]);
// faccio funzionare il tracciamento dei pallini anche in prev (stamattina lo abbiam fatto solo in next);
// creo anche la possibilità di poter navigare cliccando anche sui pallini (quindi se clicco sul pallino 3, l’img vista è la 3 e il pallino 3 rimane rosso);
// cerco di fare un refactoring del mio codice per renderlo il più chiaro, lineare, mantenibile e secco possibile (dobbiamo iniziare a farlo, e quindi prima del bonus).


// regole slider
$(document).ready(function(){


// prev
 $('.prev').click(

     prevImg
 );

// next
 $('.next').click(

     nextImg
 );



 // funzione next
function nextImg() {

   var imgActive = $('.images img.active');
   var circleActive = $('.navcircle i.active');
   imgActive.removeClass('active');
   circleActive.removeClass('active');



   if(imgActive.hasClass('last')){
     $('.images img.first').addClass('active');
     $('.navcircle i.first').addClass('active');
   } else {

     imgActive.next().addClass('active');
     circleActive.next().addClass('active');

 }
}


function prevImg() {

  var imgActive = $('.images img.active');
  var circleActive = $('.navcircle i.active');
  imgActive.removeClass('active');
  circleActive.removeClass('active');

  if(imgActive.hasClass('first')){
    $('.images img.last').addClass('active');
    $('.navcircle i.first').addClass('active');

  } else {

    imgActive.prev().addClass('active');
    circleActive.prev().addClass('active');

  }

}




});
