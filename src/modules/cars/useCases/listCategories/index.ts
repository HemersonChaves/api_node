import { CategoriesRespository } from "../../repositories/implementations/CategoriesRepository"
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export default():ListCategoriesController =>{
const categoriesRespository = new CategoriesRespository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRespository);

const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

return listCategoriesController;
}