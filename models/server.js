const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;

    this.paths = {
      envio: "/api/envio",
      estadoDeEnvio: "/api/estadoDeEnvio",
      obtener:       '/api/obtener'
    };

    // Connectar a db
    // this.conectarDB();

    // Middlewares;
    this.middlewares();

    // Rutas de mi aplicacion
    this.routes();
  }

  //   async conectarDB() {
  //     await dbConnection();
  //   }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio publico
    // this.app.use(express.static("public"));

    // Fileupload - Carga de archivos
    // this.app.use(
    //   fileUpload({
    //     useTempFiles: true,
    //     tempFileDir: "/tmp/",
    //     createParentPath: true,
    //   })
    // );
  }

  routes() {
    this.app.use(this.paths.envio, require("../routes/envio"));
    this.app.use(this.paths.estadoDeEnvio, require("../routes/estadoDeEnvio"));
    this.app.use(this.paths.obtener, require("../routes/obtener"));
    // this.app.use(this.paths.auth, require("../routes/auth"));

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
