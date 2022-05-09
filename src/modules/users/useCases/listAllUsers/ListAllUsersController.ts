import { Request, Response } from "express";

import { ListAllUsersUseCase, IRequest } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  

  handle(request: Request, response: Response): Response {

    const user_id:string = request.get('User_Id');

    try{
      return response.json(this.listAllUsersUseCase.execute({user_id}));
    }
    catch (error){
      return response.status(400).json({"error":error});
    }
  }
}

export { ListAllUsersController };
