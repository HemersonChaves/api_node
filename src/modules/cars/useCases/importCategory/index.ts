import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { CategoriesRespository } from "../../repositories/implementatons/CategoriesRepository";

const categoriesRepository = CategoriesRespository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);
export {importCategoryController}
