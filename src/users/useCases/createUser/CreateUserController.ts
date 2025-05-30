import { Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request, response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const { name, email, password, isAdmin, roleId } = request.body;
    const user = await createUserUseCase.execute({
      name,
      email,
      password,
      isAdmin,
      roleId,
    });
    return response.status(201).json(user);
  }
  async handleError(error, request, response): Promise<Response> {
    if (error.name === "AppError") {
      return response.status(error.statusCode || 400).json({ message: error.message });
    }
    return response.status(500).json({ message: "Internal server error" });
  }
}
