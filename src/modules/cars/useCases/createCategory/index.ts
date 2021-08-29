import { CategoriesRespository } from "../../repositories/implementatons/CategoriesRepository"
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

const categoriesRespository = CategoriesRespository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRespository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export {createCategoryController}