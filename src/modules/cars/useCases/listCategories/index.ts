import { CategoriesRespository } from "../../repositories/CategoriesRepository"
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRespository = CategoriesRespository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRespository);

const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export {listCategoriesController}