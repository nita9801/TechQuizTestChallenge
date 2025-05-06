import { Schema, model, type Document } from 'mongoose';

interface Results extends Document {
  text: string;
  isCorrect: boolean;
}

interface Questioner extends Document {
  question: string;
  answers: Results[];
}

const QuestionSchema = new Schema<Questioner>({
  question: { type: String, required: true },
  answers: [
    {
      text: { type: String, required: true },
      isCorrect: { type: Boolean, required: true }
    }
  ]
});

const Questions = model<Questioner>('Question', QuestionSchema);
export { Questions, Questioner };