import { container } from 'tsyringe'
import { ListUsersUseCase } from './ListUsersUseCase'
import { Request, Response } from 'express'
import { instanceToInstance } from 'class-transformer'

export class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsersUseCase = container.resolve(ListUsersUseCase)
    const page = request.query.page
      ? Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1
      : 1
    const limit = request.query.limit
      ? Number(request.query.limit)
        ? Number(request.query.limit)
        : 15
      : 15

    const users = await listUsersUseCase.execute({ page, limit })
    return response.json(instanceToInstance(users))
  }
}
