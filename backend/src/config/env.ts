import dotenv from 'dotenv';
import path from 'path';

// Load environmental variables
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const ENV = {
  PORT: parseInt(process.env.PORT || '5000', 10),
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/sahanaya',
  JWT_SECRET: process.env.JWT_SECRET || 'sahanaya_jwt_secret_key_development_only',
  SESSION_SECRET: process.env.SESSION_SECRET || 'sahanaya_session_secret_development',
  AI_API_KEY: process.env.AI_API_KEY || ''
};

// Validate critical parameters in production
if (ENV.NODE_ENV === 'production') {
  if (!process.env.MONGODB_URI) {
    console.warn('WARNING: MONGODB_URI is not set in production. Falling back to local database.');
  }
  if (ENV.JWT_SECRET === 'sahanaya_jwt_secret_key_development_only') {
    console.error('ERROR: JWT_SECRET must be configured with a secure key in production!');
    process.exit(1);
  }
}
