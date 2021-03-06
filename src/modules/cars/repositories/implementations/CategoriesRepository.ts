import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoriesRespository implements ICategoriesRepository {
    private static INSTANCE: CategoriesRespository;
    private repository: Repository<Category>;
    constructor() {
        this.repository = getRepository(Category)
    }
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {

        const category = this.repository.create({ name, description });
        await this.repository.save(category);
    }
    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }
    async findByName(name: string): Promise<Category> {
        //select * from categories where name = "name" limit 1
        const category = <Category> await this.repository.findOne({name});//<Category>this.categories.find(category => category.name === name);        
        return category;
    }
}

export { CategoriesRespository }
