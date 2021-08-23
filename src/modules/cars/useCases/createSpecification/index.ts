import { SpecificationRepository } from "../../repositories/implementatons/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationsUseCase } from "./CreateSpecificationUseCase";

const specificationRespository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationsUseCase(specificationRespository);

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export {createSpecificationController }