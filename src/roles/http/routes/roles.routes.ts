import { RolesRepository } from '@roles/repositories/RolesRepository'
import { createRolesController } from '@roles/useCases/createRole'
import { listRolesController } from '@roles/useCases/listRoles'
import { Router } from 'express'

const rolesRouter = Router()
const rolesRepository = new RolesRepository()

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response)
})

rolesRouter.get('/', (request, response) => {
  return listRolesController.handle(request, response)
})

export { rolesRouter }
