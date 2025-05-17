
import { RolesPaginateProperties, RolesRepository } from "@roles/repositories/RolesRepository";

type ListRolesUseCaseRequest = {
  page: number
  limit: number
}
export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute( {limit, page}: ListRolesUseCaseRequest): Promise<RolesPaginateProperties> {
    const take = limit
    const skip = (Number(page) - 1) * take
    return this.rolesRepository.findAll({
      page,
      take,
      skip,
    })
  }
}
