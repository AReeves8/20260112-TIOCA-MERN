import { Director } from "../models/director.model.js";


export const DirectorRepository = {
    findAll: () => Director.find()
}