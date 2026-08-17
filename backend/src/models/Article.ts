import { Schema, model, Document } from 'mongoose';

export interface IArticle extends Document {
  title: string;
  slug: string;
  category: string;
  content: string;
  summary: string;
  author: string;
  readTime: string;
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

const ArticleSchema = new Schema<IArticle>({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true,
    trim: true,
    maxlength: 300
  },
  author: {
    type: String,
    required: true,
    default: "Leo Club Wellness Panel"
  },
  readTime: {
    type: String,
    required: true,
    default: "5 mins read"
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
    required: true
  }
}, {
  timestamps: true
});

export const Article = model<IArticle>('Article', ArticleSchema);
export default Article;
