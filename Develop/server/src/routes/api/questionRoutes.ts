import express from 'express';
const router = express.Router();
import {
  getRandomQuestions
} from '../../controllers/questionControl.js';

router.route('/random').get(getRandomQuestions);

export default router;