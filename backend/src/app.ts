import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import { apiLimiter } from './middleware/rateLimiter';
import { errorHandler } from './middleware/errorHandler';

// Import routers
import authRouter from './routes/auth';
import usersRouter from './routes/users';
import assessmentsRouter from './routes/assessments';
import resourcesRouter from './routes/resources';
import emergencyRouter from './routes/emergency';
import journalRouter from './routes/journal';
import moodRouter from './routes/mood';
import aiRouter from './routes/ai';
import eventsRouter from './routes/events';
import adminRouter from './routes/admin';

const app: Application = express();

// Security Middlewares
app.use(helmet());
app.use(cors({
  origin: '*', // Customize this with your Vercel URL in production config
  credentials: true
}));
app.use(express.json());
app.use(mongoSanitize());

// General API request rate limiting
app.use('/api', apiLimiter);

// Mount API routes
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/assessments', assessmentsRouter);
app.use('/api/resources', resourcesRouter);
app.use('/api/emergency', emergencyRouter);
app.use('/api/journal', journalRouter);
app.use('/api/mood', moodRouter);
app.use('/api/ai', aiRouter);
app.use('/api/events', eventsRouter);
app.use('/api/admin', adminRouter);

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date() });
});

// Global Error Handler
app.use(errorHandler);

export default app;
