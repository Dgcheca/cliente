<?php
include('includes/header.php');
?>
<div class="container">
    <div class="row m-3">
        <h1 class="h-1 m3 text-primary col-6 text-end">Foster Hollywood</h1>
        <h1 class="h-1 text-danger col-6 ">{{carta.local.localidad}}</h1>
    </div>
    <div class="row text-center m-3">
        <p class="">{{carta.local.mensaje}}</p>

    </div>

    <div class="row justify-content-center m-3">
        <div class="col-6">
        <iframe class="border-info border border-1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396.75768713809754!2d-1.874506029371744!3d37.2936763028343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd652b2622c72f49%3A0x8e7f825060e18434!2sAv.%20Barcelona%2C%20113%2C%2004610%20Cuevas%20del%20Almanzora%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1645897904951!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
 
        </div>
        
    </div>
</div>



<?php
include('includes/footer.php');
?>