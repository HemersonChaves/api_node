import { CategoriesRespository } from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    
    constructor(private categoriesRespository: CategoriesRespository){}
    execute({ description, name }: IRequest) {

        const categoryAlreadyExists = this.categoriesRespository.findByname(name);
        if (categoryAlreadyExists) {
            throw new Error("Category already exists");
        }
        this.categoriesRespository.create({ name, description })
    }
}

export { CreateCategoryService }