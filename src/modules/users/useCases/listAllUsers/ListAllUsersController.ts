import { Request, Response } from "express";

import { ListAllUsersUseCase, IRequest } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  

  handle(request: Request, response: Response): Response {

    const iRequest: IRequest = {user_id: JSON.stringify(request.headers)};

    return response.json(this.listAllUsersUseCase.execute(iRequest));
  }
}

export { ListAllUsersController };
