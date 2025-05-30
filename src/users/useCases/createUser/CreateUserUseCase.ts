import { AppError } from "@shared/errors/AppError";
import { hash } from "bcryptjs";
import { User } from "@users/entities/Users";
import { IUsersRepository } from "@users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  roleId: string;
};

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository,
    @inject("RolesRepository") private rolesRepository: IUsersRepository,
  ) {}

  async execute({ name, email, password, isAdmin, roleId }: CreateUserDTO): Promise<User> {
    const emailExists = await this.usersRepository.findByEmail(email);
    if (emailExists) {
      throw new AppError("Email already exists");
    }
    const role = await this.rolesRepository.findById(roleId);
    if (!role) {
      throw new AppError("Role not found", 404);
    }
    const hashedPassword = await hash(password, 10);
    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      isAdmin,
      role,
    });
    return user
  }
}
