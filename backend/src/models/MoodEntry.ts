import { Schema, model, Document } from 'mongoose';

export interface IMoodEntry extends Document {
  userId: Schema.Types.ObjectId;
  score: number; // 1-5 scale
  tags: string[];
  note?: string;
  createdAt: Date;
}

const MoodEntrySchema = new Schema<IMoodEntry>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  score: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  tags: {
    type: [String],
    default: []
  },
  note: {
    type: String,
    trim: true,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  }
});

export const MoodEntry = model<IMoodEntry>('MoodEntry', MoodEntrySchema);
export default MoodEntry;
