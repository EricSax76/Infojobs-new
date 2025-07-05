// candidateController.js
import Candidate from '../models/candidateModel.js';

const createCandidate = async (req, res) => {
    try {
        const { name, email, skills, experience } = req.body;

        const candidate = await Candidate.create({
            name,
            email,
            skills,
            experience,
        });

        res.status(201).json({ message: 'Candidate created successfully', candidate });
    } catch (error) {
        res.status(500).json({ message: 'Error creating candidate', error });
    }
};

const getCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.findAll();
        res.status(200).json({ message: 'Candidates retrieved successfully', candidates });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving candidates', error });
    }
};

const getCandidateById = async (req, res) => {
    try {
        const { id } = req.params;
        const candidate = await Candidate.findByPk(id);

        if (!candidate) return res.status(404).json({ message: 'Candidate not found' });

        res.status(200).json({ message: 'Candidate retrieved successfully', candidate });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving candidate', error });
    }
};

export { createCandidate, getCandidates, getCandidateById };
