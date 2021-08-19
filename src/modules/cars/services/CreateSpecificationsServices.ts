import { SpecificationsRepository } from "../repositories/SpecificationsRepository";
interface IRequest{
    name:string;
    description:string;
}

class CreateSpecificationsService{
    constructor (private specicationsRepository: SpecificationsRepository){}
    
    execute({name, description}:IRequest):void{
        const specificationAlreadyExists = this.specicationsRepository.findByName(name);
        if(specificationAlreadyExists){
            throw new Error("Specification already exists!")
        }
        this.specicationsRepository.create({
            name,
            description
        })
    }
}
export {CreateSpecificationsService}