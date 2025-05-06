import db from '../config/connection.js';
import { Questions } from '../models/index.js'
import cleanDB from './cleanDb.js';

import questionData from './pythonQuestions.json' with { type: 'json'};

try {
  await db();
  await cleanDB();

  // bulk create each model
  await Questions.insertMany(questionData);

  console.log('Seeding completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}