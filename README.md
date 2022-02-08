# ProyectoHeroku
Heroku y node
Heroku

Es un PaaS, permite ejecutar y mantener proyectos sin preocuparnos por la gestión de la infraestructura de base de datos, seguridad, networking, loggin y monitoreo.

Lo primero es  crear una cuenta en Heroku. En nuestra terminal instalamos Heroku CLI.

En nuestro proyecto tenemos que asignar a la variable PORT = process.env.PORT y añadir el script “start”: “node index.js”

En la terminal ejecutamos  $ heroku login, creamos nuestra app $ heroku créate <name>
Con el comando $ git remote add heroku (url del repositorio) agregamos el control remoto a nuestro repositorio de Git de Heroku.

Subimos a heroku con $ git push heroku (rama en la que estas).
