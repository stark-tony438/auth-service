import config from './src/config/configuration';
import Server from './src/Server';

const server = new Server(config);

server.bootstrap();
server.run();
