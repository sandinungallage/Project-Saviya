import { Schema, model, Document } from 'mongoose';

export interface IAssessment extends Document {
  userId: Schema.Types.ObjectId;
  type: 'PHQ-9' | 'GAD-7' | 'PSS-10';
  answers: number[];
  score: number;
  severity: 'minimal' | 'mild' | 'moderate' | 'severe';
  createdAt: Date;
}

const AssessmentSchema = new Schema<IAssessment>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['PHQ-9', 'GAD-7', 'PSS-10'],
    required: true
  },
  answers: {
    type: [Number],
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  severity: {
    type: String,
    enum: ['minimal', 'mild', 'moderate', 'severe'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  }
});

export const Assessment = model<IAssessment>('Assessment', AssessmentSchema);
export default Assessment;
