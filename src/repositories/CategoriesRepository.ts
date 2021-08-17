import { response } from "express";
import { Category } from "../model/Category";

interface ICreateCategoryDTO{
    name: string, description: string
}
class CategoriesRespository{
    private categories: Category[];

    constructor(){
        this.categories = [];
    }
    create({name, description}: ICreateCategoryDTO):void{
        const category = new Category();
        Object.assign(category, { name, description })
        this.categories.push(category)
    }
    list(): Category[]{
        return this.categories;
    }
    findByname(name:string): Category{
        const category = this.categories.find(category => category.name === name);
        return category;
    }
}

export{CategoriesRespository}
