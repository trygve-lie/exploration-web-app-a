import Fastify from 'fastify';

const server = Fastify({
  disableRequestLogging: true,
  logger: true,
});

server.get('/', (req, reply) => {
  reply.type('text/html');
  return `<!doctype html>
<html>
<head>
  <title>Web App A</title>
</head>
<body>
  <h1>Hello from Web App A</h1>
</body>
</html>`;
});

server.get('/jobs', (req, reply) => {
  reply.type('text/html');
  return `<!doctype html>
<html>
<head>
  <title>Jobs - Web App A</title>
</head>
<body>
  <h1>Hello from Jobs</h1>
</body>
</html>`;
});

server.get('/mobility', (req, reply) => {
  reply.type('text/html');
  return `<!doctype html>
<html>
<head>
  <title>Mobility - Web App A</title>
</head>
<body>
  <h1>Hello from Mobility</h1>
</body>
</html>`;
});

server.get('/healthz', (req, reply) => {
  return { status: 'ok' };
});

const PORT = process.env.PORT || 10000;
const HOST = process.env.HOST || '0.0.0.0';

server.listen({ port: PORT, host: HOST }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
