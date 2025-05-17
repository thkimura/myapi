import { Role } from "@roles/http/routes/entities/Role"
import { RolesRepository } from "@roles/repositories/RolesRepository"
import { AppError } from "@shared/errors/AppError"

type UpdateRoleDTO = {
  id: string
  name: string
}

export class UpdateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({ id, name }: UpdateRoleDTO): Promise<Role> {
    const role = await this.rolesRepository.findById(id)
    if(!role) {
      throw new AppError('Role not found.', 404)
    }
    const roleWithName = await this.rolesRepository.findByName(name)
    if(roleWithName && roleWithName.name !== role.name) {
      throw new AppError('Role already exists.', 409)
    }
    role.name = name
    return this.rolesRepository.save(role)
  }
}
