const Hapi = require('@hapi/hapi');
const routes = require('./router');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: '127.0.0.1',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server running in ${server.info.uri}`);
};

init();
