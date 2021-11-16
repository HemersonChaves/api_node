import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class postgresCategoriesRepository implements ICategoriesRepository{
    findByName(name: string): Category {
        console.log(name);
        return null;// throw new Error("Method not implemented.");
    }
    list(): Category[] {
        return null;// throw new Error("Method not implemented.");
    }
    create({name, description}:ICreateCategoryDTO): void {
        console.log(name);// throw new Error("Method not implemented.");
    }

}