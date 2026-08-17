import { Schema, model, Document } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  date: Date;
  time: string;
  location: string;
  desc: string;
  registerLink?: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  createdAt: Date;
}

const EventSchema = new Schema<IEvent>({
  title: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  desc: {
    type: String,
    required: true,
    trim: true
  },
  registerLink: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['upcoming', 'completed', 'cancelled'],
    default: 'upcoming',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  }
});

export const Event = model<IEvent>('Event', EventSchema);
export default Event;
