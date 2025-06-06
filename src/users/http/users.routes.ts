import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import { container } from 'tsyringe'
import { CreateUserController } from '@users/useCases/createUser/CreateUserController'
import { ListUsersController } from '@users/useCases/listUsers/ListUsersUseController'
import { CreateLoginController } from '@users/useCases/createLogin/CreateLoginController'
import { isAuthenticated } from '@shared/http/middlewares/isAuthenticated'

const usersRouter = Router()
const createUserController = container.resolve(CreateUserController)
const listUsersController = container.resolve(ListUsersController)
const createLoginController = container.resolve(CreateLoginController)

usersRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean().required(),
      roleId: Joi.string().uuid().required(),
    },
  }),
  (request, response) => {
    return createUserController.handle(request, response)
  },
)

usersRouter.get(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.QUERY]: {
      page: Joi.number(),
      limit: Joi.number(),
    },
  }),
  (request, response) => {
    return listUsersController.handle(request, response)
  },
)

usersRouter.post(
  '/login',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required()
    },
  }),
  (request, response) => {
    return createLoginController.handle(request, response)
  },
)

export { usersRouter }
