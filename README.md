# ceiboo Boiler Plate
Sistema base para proyectos

### Instalación ###
* `docker-compose build ceibooapi`
* `docker-compose up -d`

### Si ya tenemos laravel ###
* `docker-compose exec ceibooapi composer update`
* `docker-compose exec ceibooapi php artisan key:generate`

### Crear estructura de datos ###
* `docker-compose exec ceibooapi php artisan migrate:fresh`


### Otros comandos ###
Para bajar los dockers
* `docker-compose down`

### Para tener acceso al endpoint del docker a la app ###
En tu archivo /etc/hosts incluir las siguientes lineas
* `127.0.0.1 api.ceiboo.local`

- Test de instalación en navegador:
* `http://api.ceiboo.local/`
