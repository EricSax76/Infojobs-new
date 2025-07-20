import { createUser } from '../models/userModel.js';
import { createCandidate, getAllCandidates, getCandidateById } from '../models/candidateModel.js';

export const createCandidateController = async (req, res) => {
  try {
    const { name, email, password, skills, experience } = req.body;
    const user = await createUser({ name, email, password });
    const candidate = await createCandidate({
      userId: user.id,
      skills,
      experience,
    });
    res.status(201).json({ message: 'Candidate created successfully', candidate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating candidate', error });
  }
};

export const getCandidatesController = async (_req, res) => {
  try {
    const candidates = await getAllCandidates();
    res.status(200).json({ message: 'Candidates retrieved successfully', candidates });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving candidates', error });
  }
};

export const getCandidateByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const candidate = await getCandidateById(id);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }
    res.status(200).json({ message: 'Candidate retrieved successfully', candidate });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving candidate', error });
  }
};

