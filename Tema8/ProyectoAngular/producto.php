<?php
include ('includes/header.php');
?>

    <div class="container">
        <div class="row">
            <div class="col-6">
                <img class="img-fluid w-auto" src="{{articulo.imagen}}" alt="">
            </div>
            <div class="col-6">
                <div class="row">
                    <h2 class="text-primary text-center m-5">{{articulo.nombre}}</h2>
                </div>
                <div class="row">
                    <p class="text-center m-5">{{articulo.descripcion}}</p>
                </div>
            </div>
        </div>
    </div>

<?php
include ('includes/footer.php');
?>