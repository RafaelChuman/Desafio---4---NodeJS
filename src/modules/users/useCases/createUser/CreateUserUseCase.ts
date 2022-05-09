import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {

    const data : IRequest = {
      name,
      email
    };

    const userByEmail = this.usersRepository.findByEmail(data.email);

    if(userByEmail !== undefined) {
      throw new Error(`It's not possible to create this user, because this e-mail already exists.`);
    }

    return this.usersRepository.create(data);
  }
}

export { CreateUserUseCase };
