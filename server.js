
const fastify = require('fastify')({
  logger: true
});

// Маршрут для главной страницы
fastify.get('/', async (request, reply) => {
  return { 
    message: 'Test App is running!',
    timestamp: new Date().toISOString(),
    status: 'OK'
  };
});

// Маршрут для ping
fastify.get('/ping', async (request, reply) => {
  return { 
    status: 'pong',
    timestamp: new Date().toISOString(),
    server: 'Test App'
  };
});

// Маршрут для времени
fastify.get('/time', async (request, reply) => {
  return { 
    server_time: new Date().toISOString(),
    timestamp: Date.now(),
    timezone: 'UTC'
  };
});

// Маршрут для информации о сервере
fastify.get('/info', async (request, reply) => {
  return {
    node_version: process.version,
    platform: process.platform,
    memory: process.memoryUsage(),
    uptime: process.uptime(),
    server: 'Test PM2 App'
  };
});

// Запуск сервера
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('🚀 Test app running on http://0.0.0.0:3000');
    console.log('📊 Available endpoints:');
    console.log('   GET /      - Basic info');
    console.log('   GET /ping  - Ping test');
    console.log('   GET /time  - Server time');
    console.log('   GET /info  - Server info');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
