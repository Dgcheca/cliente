<!DOCTYPE html>
<html lang="en" ng-app="miFoster">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FosterHollywood Cuevas del Almanzora</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" href="estilo.css">
</head>

<body ng-controller="CartaController as carta">
    <div class="container-fluid">
        <div class="row banner">
            <div class="offset-2 col-8 off">
                <div class="row text-center">
                    <div class="col-2">
                        <img src="imagenes/logo.PNG" class="" alt="">
                    </div>
                    <div class="col-10">
                        <ul class="navegador nav nav-justified">
                            <li class="nav-item py-3">
                                <a class="nav-link text-decoration-none link-light" href="index.php">Inicio</a>
                            </li>
                            <li class="nav-item py-3">
                                <a class="nav-link text-decoration-none link-light" href="carta.php">La Carta</a>
                            </li>
                            <li class="nav-item py-3">
                                <a class="nav-link text-decoration-none link-light" href="donde.php">Donde</a>
                            </li>
                            <li class="nav-item bg-primary py-3">
                                <a class="nav-link text-decoration-none link-light" href="#">Reservar Mesa</a>
                            </li>
                            <li class="nav-item bg-danger py-3">
                                <a class="nav-link text-decoration-none link-light" href="#">Pide online</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>