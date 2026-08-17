import app from './app';
import { connectDB } from './config/db';
import { ENV } from './config/env';

// Start DB connection
connectDB().then(() => {
  const server = app.listen(ENV.PORT, () => {
    console.log(`[Server] Listening on http://localhost:${ENV.PORT} in ${ENV.NODE_ENV} mode.`);
  });

  // Handle process warnings/interrupts cleanly
  const gracefulShutdown = () => {
    console.log('Received shutdown signal. Stopping server gracefully...');
    server.close(() => {
      console.log('Server stopped.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', gracefulShutdown);
  process.on('SIGINT', gracefulShutdown);
}).catch((err) => {
  console.error(`Failed to connect to database: ${err}`);
  process.exit(1);
});
