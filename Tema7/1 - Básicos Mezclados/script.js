$(document).ready(function(){

    $("img").fadeTo("",0.25);


    $("img").css('opacity',0.4).click(function(){
        $("img").animate({
            opacity: '0,25',
            height: '-=150px',
            width: '-=150px'}), 
        
        $(this).animate({
            opacity: '1',
            height: '+=150px',
            width: '+=150px'});

      
    });
});