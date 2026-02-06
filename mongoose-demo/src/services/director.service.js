import { DirectorRepository } from "../repositories/director.repo.js";

export const DirectorService = {
    getAll: async () => {
    
        // getting directors out of db
        const directors = await DirectorRepository.findAll();
        return directors;
    }
}