import express from "express";
import { AppRoutes } from "./routes";

export class Server {
  private readonly port: number;

  constructor(port: number) {
    this.port = port;
  }

  start() {
    const app = express();

    app.use(express.json());

    app.use(AppRoutes.routes);

    app.listen(this.port, () => {
      console.log(`server running on port ${this.port}`);
    });
  }
}
