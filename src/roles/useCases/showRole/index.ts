import { RolesRepository } from "@roles/repositories/RolesRepository";
import { ShowRoleUseCase } from "./ShowRoleUseCase";
import { ShowRoleController } from "./ShowRoleController";

const rolesRepository = RolesRepository.getInstance()
const showRoleUsecase = new ShowRoleUseCase(rolesRepository)
export const showRolesController = new ShowRoleController(showRoleUsecase)
