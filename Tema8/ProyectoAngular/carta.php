
        <div class="row">
            <div class="col-lg-6" ng-repeat="articulo in carta.articulos">
                    <img class="img-fluid w-auto" src="{{articulo.imagen}}" alt="">
                    <h2 class="text-primary text-center m-5">{{articulo.nombre}}</h2>
                    <a href="{{articulo.id}}"></a>
            </div>
        </div>
   
