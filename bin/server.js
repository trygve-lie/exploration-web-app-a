import Fastify from 'fastify';

const server = Fastify({
  disableRequestLogging: true,
  logger: true,
});

server.addHook('onRequest', (req, _reply, done) => {
  const traceId = req.headers['x-trace-id'];
  if (traceId) {
    req.log.info({ traceId }, 'incoming request');
  }
  done();
});

server.get('/', (req, reply) => {
  reply.type('text/html');
  reply.header('Cache-Control', 'public, max-age=120');
  return `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">
  <title>Web App</title>
</head>
<body>
  <div data-component-name="header">Placeholder header</div>
  <p>Frontpage application</p>
  <div data-component-name="footer">Placeholder footer</div>
</body>
</html>`;
});

server.get('/jobs', (req, reply) => {
  reply.type('text/html');
  reply.header('Cache-Control', 'public, max-age=120');
  return `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">
  <title>Jobs - Web App</title>
</head>
<body>
  <div data-component-name="header">Placeholder header</div>
  <p>Jobs application</p>
  <div data-component-name="footer">Placeholder footer</div>
</body>
</html>`;
});

server.get('/mobility', (req, reply) => {
  reply.type('text/html');
  reply.header('Cache-Control', 'public, max-age=120');
  return `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">
  <title>Mobility - Web App</title>
</head>
<body>
  <div data-component-name="header">Placeholder header</div>
  <p>Mobility application</p>
  <div data-component-name="footer">Placeholder footer</div>
</body>
</html>`;
});

server.get('/healthz', (req, reply) => {
  reply.header('Cache-Control', 'no-store');
  return { status: 'ok' };
});

server.setNotFoundHandler((_req, reply) => {
  reply.status(404).send('Not Found');
});

const PORT = process.env.PORT || 10000;
const HOST = process.env.HOST || '0.0.0.0';

server.listen({ port: PORT, host: HOST }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
