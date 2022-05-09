import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {

    const user = this.usersRepository.findById(user_id);

    var isUserAdmin =  false;

    if(user !== undefined){
      isUserAdmin = user.admin;
    }

    if(!isUserAdmin)
    {
      throw new Error("This user i'ts not admin.");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase, IRequest };
