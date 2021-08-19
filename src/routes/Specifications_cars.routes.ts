import {  Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationsService } from "../modules/cars/services/CreateSpecificationsServices";

const specificationRoutes = Router();
const specificationRespository = new SpecificationsRepository();

specificationRoutes.post("/", (request, response)=>{
    const{name, description}= request.body;
    const  crateSpecificationService = new CreateSpecificationsService(specificationRespository);

    crateSpecificationService.execute({name, description})
    return response.status(201).send();
});

specificationRoutes.get("/", (request, response) => {
    const list = specificationRespository.list();
    return response.json(list);
})

export { specificationRoutes }
