import { envs } from "./plugins/envs";
import { Server } from "./presentation/server";

(async () => {
  main();
})();

function main() {
  const server = new Server(envs.PORT);

  server.start();
}
