import { Role } from "@roles/http/routes/entities/Role";
import { RolesRepository } from "@roles/repositories/RolesRepository";

export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute(): Role[] {
    return this.rolesRepository.findAll()
  }
}
