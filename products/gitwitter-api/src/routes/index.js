import { Router } from 'express';
import { searchMiddleware } from '../middleware';

export const router = Router();

router.get('/search', searchMiddleware);
