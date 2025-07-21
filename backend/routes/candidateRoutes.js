import express from 'express';
import {
  createCandidateController,
  getCandidatesController,
  getCandidateByIdController
} from '../controllers /candidateController.js';

const router = express.Router();

// POST /api/candidates - crear nuevo candidato
router.post('/', createCandidateController);

// GET /api/candidates - obtener todos los candidatos
router.get('/', getCandidatesController);

// GET /api/candidates/:id - obtener un candidato por ID
router.get('/:id', getCandidateByIdController);

export default router;

