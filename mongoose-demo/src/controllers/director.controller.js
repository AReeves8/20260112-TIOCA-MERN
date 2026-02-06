import { DirectorService } from "../services/director.service.js";

export const DirectorController = {
    getAll : async (req, res) => {
        const directors = await DirectorService.getAll();
        res.json(directors);
    }
}