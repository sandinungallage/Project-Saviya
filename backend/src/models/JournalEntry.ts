import { Schema, model, Document } from 'mongoose';

export interface IJournalEntry extends Document {
  userId: Schema.Types.ObjectId;
  title: string;
  content: string;
  moodScore?: number;
  createdAt: Date;
  updatedAt: Date;
}

const JournalEntrySchema = new Schema<IJournalEntry>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  moodScore: {
    type: Number,
    min: 1,
    max: 5
  }
}, {
  timestamps: true
});

export const JournalEntry = model<IJournalEntry>('JournalEntry', JournalEntrySchema);
export default JournalEntry;
