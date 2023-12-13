# Practica3
Lo que he conseguido de la práctica, ha sido poder mostrar en el localhost el formulario de nombre.
He creado 3 directorios en el proyecto: la de api, web y mongo en la que cada una cree un DockerFile.
En el directorio de la api cree los paquetes de json.

Abrí docker y en el cmd utilicé los comando de docker build -t api ./api, docker build -t web ./web, docker build -t mongo ./mongo. También utilicé los comandos de npm install express y mongoose.

Una vez que creé todas las imágenes utilicé el comando de docker-compose up para levantar los 3 contendores y desde docker pinché en el puerto 80:80 odnde conseguí que se mostrara lo del index.html.
