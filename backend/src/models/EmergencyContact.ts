import { Schema, model, Document } from 'mongoose';

export interface IEmergencyContact extends Document {
  organization: string;
  name: string;
  phone: string;
  hours: string;
  languages: string[];
  type: string;
  desc: string;
  order: number;
}

const EmergencyContactSchema = new Schema<IEmergencyContact>({
  organization: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  hours: {
    type: String,
    required: true,
    default: "24 Hours / 7 Days"
  },
  languages: {
    type: [String],
    default: ["English", "Sinhala", "Tamil"]
  },
  type: {
    type: String,
    required: true,
    default: "Toll-Free Call"
  },
  desc: {
    type: String,
    required: true,
    trim: true
  },
  order: {
    type: Number,
    default: 0
  }
});

export const EmergencyContact = model<IEmergencyContact>('EmergencyContact', EmergencyContactSchema);
export default EmergencyContact;
