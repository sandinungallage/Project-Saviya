import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  email?: string;
  name: string;
  role: 'guest' | 'user' | 'admin';
  googleId?: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    unique: true,
    sparse: true, // Allows multiple null email fields (e.g. for Guests)
    trim: true,
    lowercase: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['guest', 'user', 'admin'],
    default: 'guest',
    required: true
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  }
});

export const User = model<IUser>('User', UserSchema);
export default User;
