import { Router } from "express";
import { CategoriesRespository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();

const categoriesRespository = new CategoriesRespository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createCategoriService = new  CreateCategoryService(categoriesRespository);
    createCategoriService.execute({name, description});
    return response.status(201).send();
})

categoriesRoutes.get("/", (request, response) => {
    const list = categoriesRespository.list();
    return response.json(list);
})

export { categoriesRoutes }