import { IUsersRepository } from '@users/repositories/IUsersRepository'
import { UsersRepository } from '@users/repositories/UsersRepository'
import { CreateUserUseCase } from '@users/useCases/createUser/CreateUserUseCase'
import { ListUsersUseCase } from '@users/useCases/listUsers/ListUsersUseCase'
import { container } from 'tsyringe'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton('CreateUserUseCase', CreateUserUseCase)
container.registerSingleton('ListUsersUseCase', ListUsersUseCase)
