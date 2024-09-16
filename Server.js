"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
const DataBase_1 = require("./libs/DataBase");
const cors = require("cors");
//cluster method
const cluster = require("cluster");
const os = require("os");
class Server {
    constructor(config) {
        this.config = config;
        this.bootstrap = () => {
            this.initBodyParser();
            this.setUpRoutes();
            return this;
        };
        this.initBodyParser = () => {
            const { app } = this;
            app.use(bodyParser.urlencoded({ extended: true }));
            app.use(bodyParser.json());
        };
        this.run = () => {
            if (cluster.isMaster) {
                console.log(`Master ${process.pid} is running`);
                const numCPUs = os.cpus().length;
                for (let i = 0; i < numCPUs; i++) {
                    cluster.fork();
                }
                cluster.on('exit', (worker, code, signal) => {
                    console.log(`worker ${worker.process.pid} died`);
                });
            }
            else {
                const { app, config: { PORT: port, MONGO_URL: mongoUrl }, } = this;
                DataBase_1.default.open(mongoUrl).then((res) => {
                    app.listen(port, () => {
                        console.log(`:::App is running successfully at port number: ${port}:::::::`);
                        console.log(`worker ${process.pid} on`);
                    });
                }).catch((err) => {
                    console.log('ERROR');
                    console.log(err);
                });
            }
        };
        this.setUpRoutes = () => {
            const { app } = this;
            app.use(cors());
            app.get("/health", (req, res) => {
                console.log("promise");
                res.send("okayyy");
            });
            app.use("/api", routes_1.default);
            return this;
        };
        this.app = express();
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map