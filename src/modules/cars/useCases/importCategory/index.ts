import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { CategoriesRespository } from "../../repositories/implementations/CategoriesRepository";

export default (): ImportCategoryController => {
    const categoriesRepository = new CategoriesRespository();
    const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
    const importCategoryController = new ImportCategoryController(importCategoryUseCase);
    return importCategoryController;

}
