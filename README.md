# ProyectoHeroku
Heroku y node
Heroku

Es un PaaS, permite ejecutar y mantener proyectos sin preocuparnos por la gestión de la infraestructura de base de datos, seguridad, networking, loggin y monitoreo.

Lo primero es  crear una cuenta en Heroku. En nuestra terminal instalamos Heroku CLI.

En nuestro proyecto tenemos que asignar a la variable PORT = process.env.PORT y añadir el script “start”: “node index.js”

En la terminal ejecutamos  $ heroku login, creamos nuestra app $ heroku créate <name>
Con el comando $ git remote add heroku (url del repositorio) agregamos el control remoto a nuestro repositorio de Git de Heroku.

Subimos a heroku con $ git push heroku (rama en la que estas).
  
Para probarlo utilizaremos Postman:
  
<img width="1276" alt="Captura de pantalla 2022-02-12 a las 17 32 16" src="https://user-images.githubusercontent.com/94751976/153719712-5bc2bf55-4684-4442-9c74-f1be38fc1b9d.png">

La base de datos correra sobre MongoDB:
  
  <img width="638" alt="Captura de pantalla 2022-02-12 a las 17 36 33" src="https://user-images.githubusercontent.com/94751976/153719849-9f111324-02a1-4d56-b6f3-eb0baeb8136c.png">

