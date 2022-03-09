<div class="row">
        <h1 class="text-danger text-center m-5">NUESTRA CARTA
                <button type="button" class="btn">

                </button>

        </h1>

</div>

<div class="mb-3 row">
        <div class="offset-8 col-4">
                <div class="row">
                        <div class="col-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search d-inline-block" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>  
                        </div>
                     
                        <div class="col-11">
                                <input class="form-control d-inline-block" id="" type="search" placeholder="Busca en nuestra carta" aria-label="buscador" ng-model="search">
                        </div>
                </div>

        </div>


</div>

<hr class="text-danger">
<div class="row">
        <div class="col-lg-6" ng-repeat="articulo in carta.articulos | filter: search">
                <img class="img-fluid w-auto" src="{{articulo.imagen}}" alt="">
                <h2 class="text-primary text-center m-5">{{articulo.nombre}}</h2>
                <p class="text-muted text-center">{{articulo.descripcion}}</p>
        </div>
</div>