import { inject, injectable } from 'tsyringe'
import { compare } from 'bcryptjs'
import { AppError } from '@shared/errors/AppError'
import { jwtConfig } from '@config/auth'
import { User } from '@users/entities/Users'
import { IUsersRepository } from '@users/repositories/IUsersRepository'
import { sign } from 'jsonwebtoken'

type CreateLoginDTO = {
  email: string
  password: string
}

type IResponse = {
  user: User
  token: string
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: CreateLoginDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)
    if (!user) {
      throw new AppError('Incorrect email or password', 401)
    }
    const passwordConfirmed = await compare(password, user.password)
    if (!passwordConfirmed) {
      throw new AppError('Incorrect email or password', 401)
    }
    const token = sign({}, jwtConfig.jwt.secret, {
      subject: user.id,
      expiresIn: jwtConfig.jwt.expiresIn,
    })
    return { user, token }
  }
}
