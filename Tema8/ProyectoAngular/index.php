<!DOCTYPE html>
<html lang="en" ng-app="miFoster">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FosterHollywood Cuevas del Almanzora</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular-route.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script><script src="script.js"></script>
    <link rel="stylesheet" href="estilo.css">
</head>

<body ng-controller="CartaController as carta">
    <div class="container-fluid">
        <!-- MENU NORMAL -->
        <div class="row banner d-md-block d-none">
            <div class="offset-xl-2 col-xl-8">
                <div class="row text-center">
                    <div class="col-2">
                        <img src="imagenes/logo.PNG" class="" alt="">
                    </div>
                    <div class="col-10">
                        <ul class="navegador nav nav-justified">
                            <li class="nav-item mx-3 py-3">
                                <a ng-class="{active: location == '/'}" class="nav-link text-decoration-none link-light" href="#!/">Inicio</a>
                            </li>
                            <li class="nav-item mx-3 py-3">
                                <a ng-class="{active: location == '/carta'}" class="nav-link text-decoration-none link-light" href="#!carta">La Carta</a>
                            </li>
                            <li class="nav-item mx-3 py-3">
                                <a ng-class="{active: location == '/donde'}" class="nav-link text-decoration-none link-light" href="#!donde">Donde</a>
                            </li>
                            <li class="nav-item bg-primary py-3 d-xl-block d-none">
                                <a class="nav-link text-decoration-none link-light" href="#!/">Reservar Mesa</a>
                            </li>
                            <li class="nav-item bg-danger py-3 d-xl-block d-none">
                                <a class="nav-link text-decoration-none link-light" href="#!/">Pide online</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- DROPDOWN -->
        <nav class="navbar d-md-none navbar-expand-lg banner text-light row">
            <img src="imagenes/logo.PNG " class="col-4" alt="">
            <button class="navbar-toggler col-2" type="button" data-toggle="collapse" data-target="#navegadordrop" aria-controls="navegadordrop" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"> <span class="navbar-toggler-icon text-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-menu-up" viewBox="0 0 16 16">
                        <path d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793l1.853 1.854zM1 9V6h14v3H1zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2h14zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5z" />
                    </svg>
                </span></span>
            </button>

            <div class="collapse navbar-collapse" id="navegadordrop">
                <div class="navbar-nav row">
                    <a ng-class="{active: location == '/'}" class="nav-item nav-link text-light banner col text-center" href="#!/">Inicio</a>
                    <a ng-class="{active: location == '/carta'}" class="mr-5 nav-item nav-link text-light banner col text-center" href="#!carta">La Carta</a>
                    <a ng-class="{active: location == '/donde'}" class="mr-5 nav-item nav-link text-light banner col text-center" href="#!donde">Donde</a>
                </div>
            </div>
        </nav>

        <!-- CONTAINER PARA EL CONTENIDO DINAMICO -->
        <div class="container" ng-view>

        </div>
    </div>
    <footer class="footer bg-dark text-muted p-5">
        <div class="container">
            <div class="row text-center">
                <div class="col-md-4 text">
                    <h5 class="m-1">Aviso legal:</h5>
                    <p>Falsa FosterHollywoodCuevas</p>
                    <p>@Contacto: mardukecheka@gmail.com</p>


                </div>
                <div class="col-md-4">
                    <h5 class="m-1" class="text-decoration-none text-muted d-block">Otras de nuestras paginas:</h5>
                    <a href="#" class="text-decoration-none text-muted d-block">FosterHollywoodAlmadrava</a>
                    <a href="#" class="text-decoration-none text-muted d-block">FosterHollywoodSalinas</a>
                    <a href="#" class="text-decoration-none text-muted d-block">FosterHollywoodCabodeGata</a>
                    <a href="#" class="text-decoration-none text-muted d-block">FosterHollywoodSaturno</a>
                </div>
                <div class="col-md-4">
                    <h5 class="m-1">Autoria</h5>
                    <p>Por: Daniel Gomez Checa (DgCheca)</p>
                    <p>Para: Diseño de aplicaciones Web y Desarrollo web Entorno Cliente</p>
                </div>
            </div>
        </div>
    </footer>
   
</body>

</html>