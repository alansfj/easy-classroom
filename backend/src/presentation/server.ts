import express from "express";

export class Server {
  private readonly port: number;

  constructor(port: number) {
    this.port = port;
  }

  start() {
    const app = express();

    app.listen(this.port, () => {
      console.log(`server running on port ${this.port}`);
    });
  }
}
