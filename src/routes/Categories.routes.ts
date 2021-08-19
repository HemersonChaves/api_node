import { Router } from "express";
import { CategoriesRespository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();

const categoriesRespository = new CategoriesRespository();

categoriesRoutes.post("/", (request, response) => {
   return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    const list = categoriesRespository.list();
    return response.json(list);
});

export { categoriesRoutes }