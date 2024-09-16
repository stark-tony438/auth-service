import * as express from "express";
import { Response } from "express";
import { Request } from "express";
import * as bodyParser from "body-parser";
import mainRoute from "./routes";
import DataBaseServer from "./libs/DataBase";
import * as cors from "cors";
import IConfig from "./config/IConfig";

//cluster method
// import * as cluster from 'cluster';
// import * as os from 'os';


export default class Server {
  private app: express.Express;

  constructor(private config: IConfig) {
    this.app = express();
  }

  bootstrap = (): Server => {
    this.initBodyParser();
    this.setUpRoutes();

    return this;
  };

  initBodyParser = (): void => {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
  };

  run = () => {
    // if (cluster.isMaster) {
    //   console.log(`Master ${process.pid} is running`);
    //   const numCPUs = os.cpus().length;
    //   for (let i = 0; i < numCPUs; i++) {
    //     cluster.fork();
    //   }
    //   cluster.on('exit', (worker, code, signal) => {
    //     console.log(`worker ${worker.process.pid} died`);
    //   });
    // } else {
      const {
        app,
        config: { PORT: port, MONGO_URL: mongoUrl },
      } = this;
      DataBaseServer.open(mongoUrl).then((res) => {
        app.listen(port, (): any => {
          console.log(`:::App is running successfully at port number: ${port}:::::::`);
          console.log(`worker ${process.pid} on`);
        })
      }).catch((err) => {
        console.log('ERROR');
        console.log(err);
      });
    // }
  };

  setUpRoutes = (): Server => {
    const { app } = this;
    app.use(cors());
    app.get("/health", (req: Request, res: Response) => {
      console.log("promise");
      res.send("okayyy");
    });
    app.use("/api", mainRoute);
    return this;
  };
}
