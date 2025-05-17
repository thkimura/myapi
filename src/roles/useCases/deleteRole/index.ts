import { RolesRepository } from "@roles/repositories/RolesRepository";
import { DeleteRoleUseCase } from "./deleteRoleUseCase";
import { DeleteRoleController } from "./deleteRoleController";

const rolesRepository = RolesRepository.getInstance()
const deleteRoleUsecase = new DeleteRoleUseCase(rolesRepository)
export const deleteRolesController = new DeleteRoleController(deleteRoleUsecase)
