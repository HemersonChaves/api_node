import { Router } from "express";
import multer from 'multer';
import createCategoryController from "../modules/cars/useCases/createCategory";
import listCategoriesController from "../modules/cars/useCases/listCategories";
import importCategoryController from "../modules/cars/useCases/importCategory";

const categoriesRoutes = Router();

const upload = multer({ dest: './tmp' })

categoriesRoutes.post("/", (request, response) => {
    console.log(request.body.name);
    console.log(request.body.description);
    // request.body.description = "desc";
    // request.body.name ="hemerson";
    return createCategoryController().handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController().handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController().handle(request, response);

})

export { categoriesRoutes }