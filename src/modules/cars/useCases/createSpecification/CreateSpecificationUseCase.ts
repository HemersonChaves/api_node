import { SpecificationsRepository } from "../../repositories/implementations/SpecificationRepository";
interface IRequest{
    name:string;
    description:string;
}

class CreateSpecificationsUseCase{
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
export {CreateSpecificationsUseCase}