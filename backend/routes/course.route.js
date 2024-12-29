import express from 'express';
import { createCourse, deleteCourse, getCourses, updatedCourse } from '../controllers/course.controller.js';

const router = express.Router();

router.get('/', getCourses);

router.post('/', createCourse);

router.put('/:id', updatedCourse);

router.delete('/:id', deleteCourse);

export default router;