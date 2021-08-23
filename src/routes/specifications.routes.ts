import {  Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response)=>{
    return createSpecificationController.handle(request, response);
});
/*
specificationRoutes.get("/", (request, response) => {
    const list = specificationRespository.list();
    return response.json(list);
})
*/
export { specificationRoutes }
