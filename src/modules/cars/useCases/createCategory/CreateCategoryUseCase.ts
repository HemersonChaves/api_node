import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    
    constructor(private categoriesRespository: ICategoriesRepository){}
    execute({ description, name }: IRequest) {

        const categoryAlreadyExists = this.categoriesRespository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error("Category already exists");
        }
        this.categoriesRespository.create({ name, description })
    }
}

export { CreateCategoryUseCase }